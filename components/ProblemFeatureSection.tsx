'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ProblemFeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const p = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const p = progress;

  // =========================================================================
  // PART 1: "Tata Semua Jadwalmu!" (0.00 -> 0.44)
  // Motion: Headline scales from 1.08 down to smaller and fades to 0
  // 4 Cards glide from outer corners to EXACT DEAD CENTER (0, 0)
  // =========================================================================
  const corners = [
    { x: -360, y: -160, rot: -7 },  // Card 1: Kuburan Catatan (Top-Left)
    { x: 360, y: -160, rot: 7 },    // Card 2: Overwhelmed (Top-Right)
    { x: -360, y: 160, rot: -5 },   // Card 3: Puluhan Grup (Bottom-Left)
    { x: 360, y: 160, rot: 5 },     // Card 4: Distraksi Medsos (Bottom-Right)
  ];

  let part1Opacity = 1.0;
  let headlineScale = 1.08;
  let headlineOpacity = 1.0;
  let cardsInterp = corners;

  if (p < 0.44) {
    part1Opacity = 1.0;

    // Headline Motion: Scales from 1.08 down to smaller and dissolves
    const tHead = Math.min(1, p / 0.28);
    headlineScale = Math.max(0, 1.08 - 0.58 * tHead);
    headlineOpacity = Math.max(0, 1.0 - tHead * 1.15);

    if (p < 0.30) {
      // Cards glide smoothly towards DEAD CENTER (0, 0)
      const tCard = p / 0.30;
      cardsInterp = corners.map((c) => ({
        x: c.x * (1 - tCard),
        y: c.y * (1 - tCard),
        rot: c.rot * (1 - tCard),
      }));
    } else if (p < 0.38) {
      // Held merged in dead center
      cardsInterp = [
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
      ];
    } else {
      // Dissolving away
      const tDissolve = (p - 0.38) / 0.06;
      part1Opacity = Math.max(0, 1.0 - tDissolve);
      cardsInterp = [
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
      ];
    }
  } else {
    part1Opacity = 0.0;
    headlineOpacity = 0.0;
  }

  // =========================================================================
  // PART 2: Feature Dynamic Group Re-Centering (Audio Revision)
  // Step distance S = 72px
  // =========================================================================
  const S = 96;
  let y1 = 140, op1 = 0;
  let y2 = 180, op2 = 0;
  let y3 = 220, op3 = 0;

  if (p >= 0.44 && p < 0.60) {
    const t1 = Math.max(0, Math.min(1, (p - 0.44) / 0.14));
    const ease1 = 1 - Math.pow(1 - t1, 3);
    y1 = (1 - ease1) * 140; // 140 -> 0 (dead center!)
    op1 = ease1;
  } else if (p >= 0.60 && p < 0.76) {
    const t2 = Math.max(0, Math.min(1, (p - 0.60) / 0.14));
    const ease2 = 1 - Math.pow(1 - t2, 3);
    y1 = -ease2 * (S / 2); // 0 -> -48
    op1 = 1;
    y2 = (1 - ease2) * 160 + ease2 * (S / 2); // 160 -> +48
    op2 = ease2;
  } else if (p >= 0.76) {
    const t3 = Math.max(0, Math.min(1, (p - 0.76) / 0.14));
    const ease3 = 1 - Math.pow(1 - t3, 3);
    y1 = -(S / 2) - ease3 * (S / 2); // -48 -> -96
    op1 = 1;
    y2 = (S / 2) - ease3 * (S / 2); // +48 -> 0
    op2 = 1;
    y3 = (1 - ease3) * 180 + ease3 * S; // 180 -> +96
    op3 = ease3;
  }

  return (
    <section
      ref={containerRef}
      id="protoSection"
      className="relative bg-[#FFFAF7]"
      style={{ height: '340vh' }}
    >
      {/* Sticky Pinned Viewport */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden select-none px-6">
        
        {/* Centered Staging Area */}
        <div className="relative w-full max-w-[960px] h-[520px] flex items-center justify-center">
          
          {/* ============================================================== */}
          {/* PART 1: "Tata Semua Jadwalmu!" (Orange Text) + 4 Converging Cards */}
          {/* ============================================================== */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: part1Opacity,
            }}
          >
            {/* Center Orange Headline with Motion */}
            <div
              className="text-center z-10 will-change-transform"
              style={{
                transform: `scale(${headlineScale})`,
                opacity: headlineOpacity,
              }}
            >
              <h2 className="font-satoshi font-black text-[#F0441E] text-[52px] sm:text-[72px] md:text-[84px] leading-[1.04] tracking-tight">
                Tata Semua<br />
                Jadwalmu!
              </h2>
            </div>

            {/* 4 Cards Gliding to Dead Center */}
            <div
              className="absolute left-1/2 top-1/2 shadow-xl rounded-2xl overflow-hidden pointer-events-none w-[150px] sm:w-[170px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[0].x}px, ${cardsInterp[0].y}px, 0) rotate(${cardsInterp[0].rot}deg)`,
                zIndex: 25,
              }}
            >
              <img
                src="/assets/proto/card-kuburan-catatan.png"
                alt="Kuburan Catatan"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-xl rounded-2xl overflow-hidden pointer-events-none w-[145px] sm:w-[165px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[1].x}px, ${cardsInterp[1].y}px, 0) rotate(${cardsInterp[1].rot}deg)`,
                zIndex: 24,
              }}
            >
              <img
                src="/assets/proto/card-overwhelmed.png"
                alt="Overwhelmed"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-xl rounded-2xl overflow-hidden pointer-events-none w-[150px] sm:w-[170px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[2].x}px, ${cardsInterp[2].y}px, 0) rotate(${cardsInterp[2].rot}deg)`,
                zIndex: 23,
              }}
            >
              <img
                src="/assets/proto/card-puluhan-grup.png"
                alt="Puluhan Grup"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-xl rounded-2xl overflow-hidden pointer-events-none w-[145px] sm:w-[165px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[3].x}px, ${cardsInterp[3].y}px, 0) rotate(${cardsInterp[3].rot}deg)`,
                zIndex: 22,
              }}
            >
              <img
                src="/assets/proto/card-distraksi-medsos.png"
                alt="Distraksi Medsos"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* ============================================================== */}
          {/* PART 2: Feature Dynamic Group Re-Centering (Audio Revision)    */}
          {/* Card 1 muncul di tengah -> Card 2 geser ke tengah berdua ->   */}
          {/* Card 3 geser ke tengah bertiga. Ukuran diperbesar signifikan.  */}
          {/* ============================================================== */}
          <div className="absolute inset-0 pointer-events-none z-30">
            
            {/* Feature 1: Manajemen Tugas (Enlarged) */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-8 sm:px-10 md:px-12 py-4.5 sm:py-5 md:py-6 rounded-[22px] sm:rounded-[26px] bg-[#F0441E] shadow-2xl select-none will-change-transform"
              style={{
                opacity: op1,
                transform: `translate(-50%, -50%) translate3d(0, ${y1}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-note.svg" alt="" className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[30px] md:text-[36px] lg:text-[38px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#FFC4B8] font-medium">Manajemen</span> <span className="text-white font-bold">Tugas</span>
              </div>
            </div>

            {/* Feature 2: Integrasi Kalender (Enlarged) */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-8 sm:px-10 md:px-12 py-4.5 sm:py-5 md:py-6 rounded-[22px] sm:rounded-[26px] bg-[#F59E0B] shadow-2xl select-none will-change-transform"
              style={{
                opacity: op2,
                transform: `translate(-50%, -50%) translate3d(0, ${y2}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-calendar.svg" alt="" className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[30px] md:text-[36px] lg:text-[38px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#FDE68A] font-medium">Integrasi</span> <span className="text-white font-bold">Kalender</span>
              </div>
            </div>

            {/* Feature 3: Terhubung WhatsApp (Enlarged) */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-8 sm:px-10 md:px-12 py-4.5 sm:py-5 md:py-6 rounded-[22px] sm:rounded-[26px] bg-[#019669] shadow-2xl select-none will-change-transform"
              style={{
                opacity: op3,
                transform: `translate(-50%, -50%) translate3d(0, ${y3}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-whatsapp.svg" alt="" className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[30px] md:text-[36px] lg:text-[38px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#A7F3D0] font-medium">Terhubung</span> <span className="text-white font-bold">WhatsApp</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
