'use client';

import React, { useEffect, useRef, useState } from 'react';
import PixelMascot, { MASCOT_COLS } from '@/components/PixelMascot';
import { useLocale } from '@/lib/i18n/LocaleProvider';

/*
 * Scene produktivitas di footer: Nata berjalan menyusuri daftar tugas, berhenti di tiap kartu untuk
 * mencentangnya (lompat kecil, "+1"), merayakan di ujung, lalu balik arah dengan daftar tugas baru.
 * Meter di kiri atas meniru Skor Produktivitas di aplikasi.
 */

const TASKS = [0.12, 0.3, 0.5, 0.7, 0.88]; // posisi kartu, sebagai fraksi dari lebar jalur
const TASKS_SM = [0.18, 0.5, 0.82]; // layar sempit: 3 kartu supaya tidak bertumpuk
const SPEED = 72; // px per detik
export const SCENE_FLOOR = 30; // jarak lantai dari dasar footer (tinggi tanah lanskap)
const FLOOR = SCENE_FLOOR;
const SPARKS = [
  { x: -18, c: '#FFB03A', d: 0 },
  { x: 14, c: '#F0441E', d: 0.12 },
  { x: -6, c: '#1F8A5B', d: 0.24 },
  { x: 26, c: '#FFB03A', d: 0.36 },
  { x: -28, c: '#F0441E', d: 0.48 },
];

type Mood = 'walk' | 'hop' | 'cheer';

function CheckPixel() {
  return (
    <svg width="10" height="8" viewBox="0 0 5 4" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M0 2h1v1h1v-1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v-1h-1z" fill="#fff" />
    </svg>
  );
}

export default function FooterScene() {
  const { t } = useLocale();
  const laneRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [frame, setFrame] = useState<0 | 1>(0);
  const [blink, setBlink] = useState(false);
  const [mood, setMood] = useState<Mood>('walk');
  const [done, setDone] = useState<boolean[]>(() => Array(TASKS.length).fill(false));
  const [reduced, setReduced] = useState(false);

  const px = width && width < 560 ? 3 : 5;
  const sw = MASCOT_COLS * px;
  const tasks = width && width < 560 ? TASKS_SM : TASKS;
  const N = tasks.length;
  const count = done.filter(Boolean).length;

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = laneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Kedip sesekali.
  useEffect(() => {
    if (reduced) return;
    let off = 0;
    const id = window.setInterval(() => {
      setBlink(true);
      off = window.setTimeout(() => setBlink(false), 140);
    }, 3200);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(off);
    };
  }, [reduced]);

  // Mesin gerak: jalan -> berhenti & centang -> rayakan di ujung -> balik arah.
  useEffect(() => {
    const lane = laneRef.current;
    const sprite = spriteRef.current;
    const flip = flipRef.current;
    if (!lane || !sprite || !flip || !width) return;

    const maxX = Math.max(0, width - sw);
    if (reduced) {
      sprite.style.transform = `translate3d(${maxX / 2}px,0,0)`;
      setDone(Array(N).fill(true));
      return;
    }

    const centers = tasks.map((f) => sw / 2 + f * maxX);
    const local: boolean[] = Array(N).fill(false);
    setDone([...local]);
    let x = 0;
    let dir = 1;
    let state: 'walk' | 'pause' | 'cheer' = 'walk';
    let timer = 0;
    let target = -1;
    let ticked = false;
    let acc = 0;
    let last = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;

      if (state === 'walk') {
        x = Math.min(maxX, Math.max(0, x + dir * SPEED * dt));
        acc += dt;
        if (acc > 0.16) {
          acc = 0;
          setFrame((f) => (f === 0 ? 1 : 0));
        }
        const c = x + sw / 2;
        const hit = centers.findIndex((tc, i) => !local[i] && Math.abs(c - tc) < 3);
        if (hit >= 0) {
          state = 'pause';
          timer = 0.6;
          target = hit;
          ticked = false;
          setMood('hop');
        } else if ((dir === 1 && x >= maxX) || (dir === -1 && x <= 0)) {
          state = 'cheer';
          timer = 1.5;
          setMood('cheer');
        }
      } else if (state === 'pause') {
        timer -= dt;
        if (!ticked && timer < 0.38) {
          ticked = true;
          local[target] = true;
          setDone([...local]);
        }
        if (timer <= 0) {
          state = 'walk';
          setMood('walk');
        }
      } else {
        timer -= dt;
        if (timer <= 0) {
          local.fill(false);
          setDone([...local]);
          dir = dir === 1 ? -1 : 1;
          flip.style.transform = dir === -1 ? 'scaleX(-1)' : 'none';
          state = 'walk';
          setMood('walk');
        }
      }

      sprite.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(step);
    };

    // Hanya jalan saat footer terlihat.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    });
    io.observe(lane);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [width, sw, reduced, N]);

  const bob = mood === 'walk' && frame === 1 ? -px : 0;
  const allDone = count === N;

  return (
    <div ref={laneRef} className="relative h-[176px] w-full select-none" role="img" aria-label="Nata, maskot Nataku, mencentang daftar tugas">
      {/* Meter Skor Produktivitas */}
      <div className="absolute left-0 top-0 flex items-center gap-2 font-satoshi text-[12px] text-[#57534E]">
        <span className="flex gap-[3px]" aria-hidden="true">
          {done.map((d, i) => (
            <i key={i} className={`block h-[10px] w-[10px] border-2 transition-colors duration-200 ${d ? 'border-[#1F8A5B] bg-[#1F8A5B]' : 'border-[#1F1B16]/30 bg-transparent'}`} />
          ))}
        </span>
        <span className="font-medium">{allDone ? t.footer.scene.done : t.footer.scene.score}</span>
        <span className="tabular-nums text-[#A8A29E]">{count}/{N}</span>
      </div>

      {/* Lantai */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 h-[4px] opacity-25"
        style={{
          bottom: FLOOR - 4,
          backgroundImage: 'linear-gradient(90deg, #1F1B16 0 8px, transparent 8px 14px)',
          backgroundSize: '14px 4px',
        }}
      />

      {/* Kartu tugas */}
      {width > 0 &&
        tasks.map((f, i) => {
          const d = done[i];
          return (
            <div key={i} className="absolute" style={{ left: sw / 2 + f * Math.max(0, width - sw), bottom: FLOOR, transform: 'translateX(-50%)' }}>
              <div
                className={`flex h-[34px] w-[58px] items-center gap-1.5 border-2 px-1.5 transition-colors duration-200 ${
                  d ? 'border-[#1F8A5B] bg-[#E3F6EC] shadow-[3px_3px_0_#1F8A5B]' : 'border-[#1F1B16] bg-white shadow-[3px_3px_0_#1F1B16]'
                }`}
              >
                <span className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center border-2 ${d ? 'border-[#1F8A5B] bg-[#1F8A5B]' : 'border-[#1F1B16]'}`}>
                  {d && <CheckPixel />}
                </span>
                <span className="flex flex-col gap-[3px]" aria-hidden="true">
                  <i className={`block h-[3px] w-[18px] ${d ? 'bg-[#1F8A5B]/50' : 'bg-[#1F1B16]/30'}`} />
                  <i className={`block h-[3px] w-[11px] ${d ? 'bg-[#1F8A5B]/50' : 'bg-[#1F1B16]/30'}`} />
                </span>
              </div>
              {d && <span className="pm-plus absolute -top-1 left-1/2 font-satoshi text-[12px] font-bold text-[#1F8A5B]">+1</span>}
            </div>
          );
        })}

      {/* Nata */}
      <div ref={spriteRef} className="absolute left-0 will-change-transform" style={{ bottom: FLOOR, width: sw }}>
        <div ref={flipRef}>
          <div className={mood === 'hop' ? 'pm-hop' : mood === 'cheer' ? 'pm-cheer' : ''} style={mood === 'walk' ? { transform: `translateY(${bob}px)` } : undefined}>
            <PixelMascot px={px} frame={frame} blink={blink} />
          </div>
        </div>
        {mood === 'cheer' && (
          <div className="pointer-events-none absolute left-1/2 top-0" aria-hidden="true">
            {SPARKS.map((s, i) => (
              <i key={i} className="pm-spark absolute block h-[6px] w-[6px]" style={{ left: s.x, background: s.c, animationDelay: `${s.d}s` }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
