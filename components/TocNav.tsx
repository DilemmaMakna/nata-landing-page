'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import type { LegalHeading } from '@/components/LegalDocument';

const clean = (t: string) => t.replace(/^[\d.]+\s*/, '');

/*
 * Daftar isi yang mengikuti pembacaan. Desktop: kolom sticky di kanan, item aktif ditandai.
 * Mobile: dilipat di atas dokumen (collapsible) dan ikut menandai bagian aktif.
 */
export default function TocNav({ headings }: { headings: LegalHeading[] }) {
  const { t } = useLocale();
  const [active, setActive] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Heading terakhir yang sudah melewati garis baca (di bawah navbar).
      let current = headings[0]?.id ?? '';
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el && el.getBoundingClientRect().top <= 140) current = h.id;
      }
      // Di dasar halaman, tandai bagian terakhir.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = headings[headings.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [headings]);

  const list = (
    <ul className="space-y-0.5">
      {headings.map((h) => {
        const on = h.id === active;
        return (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={on ? 'location' : undefined}
              className={`block rounded-[8px] py-1.5 pr-2 text-[14px] leading-[1.35] transition-colors ${h.level === 3 ? 'pl-7' : 'pl-3'} ${
                on
                  ? 'bg-[#FFF1EC] font-medium text-[#D93510]'
                  : 'text-[#57534E] hover:bg-[#F5F2EF] hover:text-[#1F1B16]'
              }`}
            >
              {clean(h.text)}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile */}
      <details className="mb-6 rounded-[12px] bg-[#FFFAF7] p-4 ring-1 ring-[#EDE6E0] lg:hidden">
        <summary className="cursor-pointer text-[14px] font-bold text-[#1F1B16]">{t.doc.tocMobile}</summary>
        <div className="mt-3 max-h-[50vh] overflow-y-auto">{list}</div>
      </details>

      {/* Desktop */}
      <aside className="hidden lg:block">
        <nav
          aria-label={t.doc.onThisPage}
          className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1 [scrollbar-width:thin]"
        >
          <div className="mb-3 flex items-center gap-2 px-3 text-[14px] font-medium text-[#1F1B16]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4h12M2 8h8M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {t.doc.onThisPage}
          </div>
          {list}
        </nav>
      </aside>
    </>
  );
}
