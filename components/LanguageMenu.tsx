'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import type { Locale } from '@/lib/i18n/messages';

const OPTIONS: Locale[] = ['id', 'en'];

/* Menu bahasa di navbar. `light` = tampilan di atas hero oranye (teks putih), selain itu tampilan solid. */
export default function LanguageMenu({ light }: { light: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.lang.label}
        className={`flex h-9 items-center gap-1.5 rounded-[6px] px-2.5 font-satoshi text-[14px] font-medium transition-colors ${
          light ? 'text-[#FFF4F2] hover:bg-white/15' : 'text-[#57534E] hover:bg-[#F5F2EF]'
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
        </svg>
        <span className="uppercase">{locale}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="m2.5 4.5 3.5 3.5 3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-10 min-w-[170px] overflow-hidden rounded-[12px] border border-stone-200 bg-white p-1 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
        >
          {OPTIONS.map((l) => (
            <li key={l} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-[8px] px-3 py-2 text-left font-satoshi text-[14px] transition-colors ${
                  l === locale ? 'bg-[#FFF1EC] font-bold text-[#D93510]' : 'text-[#44403C] hover:bg-[#F5F2EF]'
                }`}
              >
                {t.lang[l]}
                {l === locale && (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="m3.5 8.5 3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
