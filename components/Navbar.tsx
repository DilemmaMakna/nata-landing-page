'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* Figma Container:margin (42:10352: 1136x60px, rounded-[12px], glass effect) */}
      <div
        className={`pointer-events-auto w-[92%] max-w-[1136px] h-[54px] sm:h-[60px] rounded-[12px] px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border border-stone-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] text-[#1F1B16]'
            : 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-none'
        }`}
      >
        {/* Brand Logo (Frame 22: Logo Mark + Nataku font Source Serif 4) */}
        <Link href="#hero" className="flex items-center gap-2.5 select-none group">
          <img
            src="/assets/figma_exports/logo-footer-subtract.svg"
            alt="Nataku Logo Mark"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
          <span
            className="font-serif font-medium text-xl sm:text-[26px] leading-[30px] tracking-[-0.03em] text-[#FFF4F2]"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Nataku
          </span>
        </Link>

        {/* Clean Nav Links (Figma 42:10363: gap 28px, Satoshi 400/500, NOT BOLD) */}
        <nav className="hidden md:flex items-center gap-7 font-satoshi font-normal sm:font-medium text-[14px] sm:text-[15px] leading-[20px] text-[#FFF4F2]/90 tracking-[-0.01em]">
          <Link href="#hero" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <Link href="#quote" className="hover:text-white transition-colors">
            Tentang
          </Link>
          <Link href="#sistem-inti" className="hover:text-white transition-colors">
            Sistem Inti
          </Link>
        </nav>

        {/* CTA Button (Figma 42:10369: rounded-[6px], bg-white/10, NO SHADOW, NOT full rounded) */}
        <Link
          href="#waitlist"
          className={`h-9 px-4 rounded-[6px] font-satoshi font-medium text-[15px] tracking-[-0.01em] transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-none ${
            scrolled
              ? 'bg-[#F0441E] hover:bg-[#D93815] text-white'
              : 'bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF4F2] hover:text-white'
          }`}
        >
          Daftar Antrean
        </Link>
      </div>
    </header>
  );
}
