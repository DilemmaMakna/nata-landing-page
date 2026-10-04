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
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-[92%] max-w-[1136px] h-[52px] sm:h-[58px] rounded-full px-5 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border border-stone-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] text-[#1F1B16]'
            : 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-white'
        }`}
      >
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2 select-none group">
          <img
            src="/assets/nataku-logo.png"
            alt="Nataku Logo"
            className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
              scrolled
                ? 'brightness-100 drop-shadow-sm'
                : 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]'
            } group-hover:scale-105`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium transition-colors ${
            scrolled ? 'text-[#44403C]' : 'text-white/90'
          }`}
        >
          <a href="#hero" className="hover:text-[#F0441E] transition-colors">
            Beranda
          </a>
          <a href="#protoSection" className="hover:text-[#F0441E] transition-colors">
            Alur Solusi
          </a>
          <a href="#quote" className="hover:text-[#F0441E] transition-colors">
            Tentang
          </a>
          <a href="#sistem-inti" className="hover:text-[#F0441E] transition-colors">
            Sistem Inti
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#waitlist"
          className={`h-8 sm:h-9 px-4 sm:px-5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center whitespace-nowrap ${
            scrolled
              ? 'bg-[#F0441E] hover:bg-[#D93815] text-white shadow-orange-500/20'
              : 'bg-white/25 hover:bg-white text-white hover:text-[#FF5000] border border-white/40 hover:border-white'
          }`}
        >
          Akses Beta
        </a>
      </div>
    </header>
  );
}
