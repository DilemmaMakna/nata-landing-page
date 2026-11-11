'use client';

import React, { useMemo } from 'react';

/*
 * Nata, maskot Nataku, versi pixel art (grid 22 x 19). Badan oranye-merah, headphone kuning,
 * mata besar, daun kecil di kepala. Digambar sebagai <path> per warna supaya ringan dan tajam di ukuran berapa pun.
 */

export const MASCOT_COLS = 22;
export const MASCOT_ROWS = 19;

const PAL = {
  R: '#F0441E', // badan
  D: '#B8281A', // bayangan
  L: '#FF8A63', // highlight
  Y: '#FFB03A', // headphone
  O: '#D9871C', // headphone, sisi dalam
  W: '#FFFFFF', // mata
  K: '#1A0F0A', // pupil
  M: '#4A1208', // mulut
  F: '#B8281A', // kaki
} as const;
type Ch = keyof typeof PAL;

// Satu baris kepala: sisi kiri-kanan adalah ear cup headphone, `inner` selalu 12 kolom.
const head = (inner: string) => `..YYO${inner}OYY..`;

const BASE: string[] = [
  '........RR..RR........', // 0 daun
  '........RRRRRR........', // 1
  '.........RRRR.........', // 2
  '......YYYYYYYYYY......', // 3 band headphone
  '....YYYRRRRRRRRYYY....', // 4
  '...YYRLLRRRRRRRRRYY...', // 5 highlight
  head('RLRRRRRRRRRR'), //      6
  head('RRRRRRRRRRRD'), //      7
  head('RRWWRRRRWWRD'), //      8 mata
  head('RRWKRRRRKWRD'), //      9
  head('RRWKRRRRKWRD'), //     10
  head('RRRRRRRRRRRD'), //     11
  head('RRRRMMMMRRRD'), //     12 mulut
  head('RRRRRMMRRRRD'), //     13
  head('RRRRRRRRRRRD'), //     14
  '.....RRRRRRRRRRRD.....', // 15
  '......DDDDDDDDDD......', // 16
];
const FEET: Record<0 | 1, string[]> = {
  0: ['......FFFF..FFFF......', '......FFFF............'],
  1: ['......FFFF..FFFF......', '............FFFF......'],
};
const BLINK: Record<number, string> = {
  8: head('RRRRRRRRRRRD'),
  9: head('RRKKRRRRKKRD'),
  10: head('RRRRRRRRRRRD'),
};

function rows(frame: 0 | 1, blink: boolean): string[] {
  const r = BASE.map((row, i) => (blink && BLINK[i] ? BLINK[i] : row));
  return [...r, ...FEET[frame]];
}

const cache = new Map<string, [Ch, string][]>();

function buildPaths(frame: 0 | 1, blink: boolean): [Ch, string][] {
  const key = `${frame}${blink ? 'b' : ''}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const grid = rows(frame, blink);
  const d: Partial<Record<Ch, string>> = {};
  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      if (c === '.') { x++; continue; }
      let len = 1;
      while (row[x + len] === c) len++;
      d[c as Ch] = (d[c as Ch] ?? '') + `M${x} ${y}h${len}v1h-${len}z`;
      x += len;
    }
  });
  const out = (Object.entries(d) as [Ch, string][]);
  cache.set(key, out);
  return out;
}

export default function PixelMascot({
  px = 4,
  frame = 0,
  blink = false,
  className,
  style,
}: {
  px?: number;
  frame?: 0 | 1;
  blink?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const paths = useMemo(() => buildPaths(frame, blink), [frame, blink]);
  return (
    <svg
      width={MASCOT_COLS * px}
      height={MASCOT_ROWS * px}
      viewBox={`0 0 ${MASCOT_COLS} ${MASCOT_ROWS}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths.map(([c, d]) => (
        <path key={c} d={d} fill={PAL[c]} />
      ))}
    </svg>
  );
}
