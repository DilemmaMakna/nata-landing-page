'use client';

import React, { useEffect, useMemo, useState } from 'react';

/*
 * Lanskap pixel kota + kampus untuk latar footer. Tiap layer adalah tile SVG yang diulang horizontal,
 * digambar dari daftar kotak (satuan "pixel"), lalu diskalakan ke bilangan bulat supaya tetap tajam.
 *   langit: awan yang bergeser pelan
 *   jauh  : siluet gedung kota dengan jendela
 *   dekat : kampus (perpustakaan berpilar, menara jam, aula kuliah, pohon, lampu jalan)
 *   tanah : alas tempat Nata berjalan
 * Warna sengaja tonal dengan palet krem-oranye Nataku supaya teks footer tetap terbaca.
 */

type Rect = [x: number, y: number, w: number, h: number, c: string];

const WIN = '#FFF6F0';
const FAR_C = '#F9E4D8';
const MID_C = '#F3CDB9';
const MID_D = '#E8AE93';
const INK = '#8A5A48';
const LEAF = '#C9DFBC';
const LEAF_D = '#B2CFA2';
const TRUNK = '#D9A58C';
const LAMP = '#FFD27A';

const uri = (w: number, h: number, rects: Rect[]) => {
  const body = rects
    .map(([x, y, rw, rh, c]) => `<rect x="${x}" y="${y}" width="${rw}" height="${rh}" fill="${c}"/>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const TILE_W = 120;
const TILE_H = 34;

/* y dihitung dari bawah supaya penulisan bangunan natural */
const make = (
  h: number,
  fn: (add: (x: number, yb: number, w: number, hh: number, c: string) => void) => void,
): Rect[] => {
  const out: Rect[] = [];
  fn((x, yb, w, hh, c) => out.push([x, h - yb - hh, w, hh, c]));
  return out;
};

function farLayer() {
  const blocks: [number, number, number][] = [
    [0, 10, 14],
    [10, 8, 22],
    [18, 12, 17],
    [30, 9, 28],
    [39, 11, 18],
    [50, 8, 24],
    [58, 13, 15],
    [71, 9, 26],
    [80, 10, 20],
    [90, 12, 30],
    [102, 8, 16],
    [110, 10, 22],
  ]; // lebar total 120 -> tile mulus
  return uri(
    TILE_W,
    TILE_H,
    make(TILE_H, (add) => {
      blocks.forEach(([x, w, h], i) => {
        add(x, 0, w, h, FAR_C);
        if (i === 3 || i === 9) add(x + Math.floor(w / 2), h, 1, 4, FAR_C); // antena
        for (let wx = x + 2; wx < x + w - 1; wx += 3) {
          for (let wy = 3; wy < h - 1; wy += 3) {
            if ((wx * 7 + wy * 13) % 5 !== 0) add(wx, wy, 1, 1, WIN);
          }
        }
      });
    }),
  );
}

function midLayer() {
  return uri(
    TILE_W,
    TILE_H,
    make(TILE_H, (add) => {
      const tree = (x: number, s = 1) => {
        add(x + 2 * s, 0, 1, 4, TRUNK);
        add(x, 4, 5 * s, 2, LEAF);
        add(x - 1, 6, 5 * s + 2, 3, LEAF);
        add(x, 9, 5 * s, 2, LEAF);
        add(x + 1, 11, 3 * s, 1, LEAF);
        add(x + 3 * s, 5, 1, 3, LEAF_D);
      };
      const lamp = (x: number) => {
        add(x, 0, 1, 8, INK);
        add(x - 1, 8, 3, 1, INK);
        add(x - 1, 7, 1, 1, LAMP);
      };

      tree(2);

      // Perpustakaan: tangga, badan, pilar, pedimen bertingkat
      add(10, 0, 36, 2, MID_D);
      add(12, 2, 32, 10, MID_C);
      for (let i = 0; i < 5; i++) add(14 + i * 6, 2, 2, 9, WIN);
      add(26, 2, 4, 6, MID_D);
      add(12, 12, 32, 1, MID_D);
      add(14, 13, 28, 1, MID_C);
      add(17, 14, 22, 1, MID_C);
      add(20, 15, 16, 1, MID_C);
      add(23, 16, 10, 1, MID_C);
      add(26, 17, 4, 1, MID_C);
      add(27, 13, 2, 2, WIN);

      lamp(49);

      // Menara jam
      add(56, 0, 8, 24, MID_C);
      add(55, 24, 10, 2, MID_D);
      add(57, 26, 6, 2, MID_D);
      add(59, 28, 2, 3, MID_D);
      add(58, 16, 4, 4, WIN);
      add(59, 17, 1, 2, INK);
      add(59, 18, 2, 1, INK);
      add(58, 6, 1, 3, WIN);
      add(61, 6, 1, 3, WIN);

      tree(70);
      tree(77, 1);

      lamp(86);

      // Aula kuliah
      add(88, 0, 28, 10, MID_C);
      add(87, 10, 30, 1, MID_D);
      for (let i = 0; i < 6; i++) add(90 + i * 4, 4, 2, 3, WIN);
      add(100, 0, 4, 4, MID_D);
    }),
  );
}

function cloudLayer() {
  // tile 100 x 12; tiga awan pixel
  const cloud = (x: number, y: number, s: number): Rect[] => [
    [x + 2 * s, y, 6 * s, s, '#FFFFFF'],
    [x, y + s, 10 * s, s, '#FFFFFF'],
    [x + s, y + 2 * s, 8 * s, s, '#FFFFFF'],
  ];
  return uri(100, 12, [...cloud(4, 6, 1), ...cloud(44, 1, 1), ...cloud(72, 7, 1)]);
}

export default function PixelSkyline({ floor }: { floor: number }) {
  const [u, setU] = useState(6); // ukuran satu pixel dalam px
  useEffect(() => {
    const set = () => setU(window.innerWidth < 560 ? 4 : 6);
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  const layers = useMemo(() => ({ far: farLayer(), mid: midLayer(), cloud: cloudLayer() }), []);
  const base = floor - 2; // bangunan berdiri tepat di atas garis lantai
  const tileW = TILE_W * u;

  const common: React.CSSProperties = {
    backgroundRepeat: 'repeat-x',
    imageRendering: 'pixelated',
    position: 'absolute',
    left: 0,
    right: 0,
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
      style={{ height: TILE_H * u + floor + 30 * 1 }}
    >
      {/* awan */}
      <div
        className="nata-clouds"
        style={{
          ...common,
          top: 0,
          height: 12 * u,
          backgroundImage: layers.cloud,
          backgroundSize: `${100 * u}px ${12 * u}px`,
          opacity: 0.85,
          ['--cloud-tile' as string]: `${100 * u}px`,
        }}
      />
      {/* kota jauh */}
      <div
        style={{
          ...common,
          bottom: base + u * 2,
          height: TILE_H * u,
          backgroundImage: layers.far,
          backgroundSize: `${tileW}px ${TILE_H * u}px`,
          backgroundPositionX: '40%',
        }}
      />
      {/* kampus */}
      <div
        style={{
          ...common,
          bottom: base,
          height: TILE_H * u,
          backgroundImage: layers.mid,
          backgroundSize: `${tileW}px ${TILE_H * u}px`,
        }}
      />
      {/* tanah */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: base, background: '#F6DFD2' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: base, height: 2, background: '#E9BFA8' }} />
    </div>
  );
}
