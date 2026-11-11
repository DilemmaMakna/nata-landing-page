'use client';

import React from 'react';
import Link from 'next/link';
import ProtectedContact from '@/components/ui/ProtectedContact';
import FooterScene, { SCENE_FLOOR } from '@/components/FooterScene';
import PixelSkyline from '@/components/PixelSkyline';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const SERIF = { fontFamily: "'Source Serif 4', serif" } as const;

const linkCls =
  'relative w-fit transition-colors duration-200 hover:text-[#FF5000] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100';

const labelCls = 'mb-4 block font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-[#A8A29E]';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer
      id="site-footer"
      className="relative flex w-full flex-col overflow-hidden border-t border-[#EDE6E0] bg-[#FFFAF7] pt-20 text-[#1F1B16] sm:pt-28"
    >
      {/* Latar: lanskap pixel kota + kampus, tanahnya jadi lantai tempat Nata berjalan */}
      <PixelSkyline floor={SCENE_FLOOR} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1136px] flex-col px-5 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="flex max-w-[440px] flex-col sm:col-span-2 lg:col-span-5">
            <a href="#top" className="mb-3 flex w-fit items-center gap-3 transition-opacity hover:opacity-80">
              <img
                src="/assets/figma_exports/logo-footer-subtract.svg"
                alt=""
                className="h-10 w-10 object-contain [filter:brightness(0)_saturate(100%)_invert(34%)_sepia(98%)_saturate(3300%)_hue-rotate(2deg)]"
              />
              <span className="text-3xl font-bold leading-[56px] tracking-[-0.04em] sm:text-4xl lg:text-[48px]" style={SERIF}>
                Nataku
              </span>
            </a>
            <p className="font-satoshi text-base leading-[26px] tracking-[-0.02em] text-[#57534E] sm:text-[18px]">
              {t.footer.about}
            </p>
          </div>

          {/* Lemma */}
          <div className="flex flex-col lg:col-span-4 lg:pt-2">
            <span className={labelCls}>{t.footer.madeBy}</span>
            <a
              href="https://dilemma-makna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 w-fit text-lg font-light uppercase tracking-[0.2em] text-[#1F1B16] transition-opacity hover:opacity-70"
            >
              LEMMA
            </a>
            <p className="max-w-[300px] font-satoshi text-[14px] leading-[22px] text-[#57534E]">{t.footer.lemma}</p>
            <div className="mt-4 flex flex-col gap-2 font-satoshi text-[14px] text-[#44403C]">
              <ProtectedContact channel="business" className={linkCls} />
              <ProtectedContact channel="nataku" className={linkCls} />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col lg:col-span-3 lg:pt-2">
            <span className={labelCls}>{t.footer.links}</span>
            <div className="flex flex-col gap-3 font-satoshi text-[15px] leading-[20px] text-[#44403C]">
              <Link href="/legal/privacy" className={linkCls}>{t.footer.privacy}</Link>
              <Link href="/legal/terms" className={linkCls}>{t.footer.terms}</Link>
              <Link href="/legal/security" className={linkCls}>{t.footer.security}</Link>
              <Link href="/support" className={linkCls}>{t.footer.support}</Link>
              <Link href="/delete-account" className={linkCls}>{t.footer.delete}</Link>
              <ProtectedContact channel="nataku" className={linkCls} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 font-satoshi text-xs text-[#78716C] sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <span>{t.footer.rights}</span>
          <a href="#top" className="group inline-flex w-fit items-center gap-2 text-[#1F1B16] transition-colors hover:text-[#FF5000]">
            <span className="relative">
              {t.footer.top}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1">
              <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Maskot pixel berjalan menyusuri daftar tugas, tepat di atas tanah lanskap */}
        <div className="mt-16 md:mt-20">
          <FooterScene />
        </div>
      </div>
    </footer>
  );
}
