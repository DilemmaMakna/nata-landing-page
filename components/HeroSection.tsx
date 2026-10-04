'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-bg relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden select-none">
      {/* Background radiant energetic orange & texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/assets/hero-bg.png')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 75% 45%, #FF7A3D 0%, #FF5000 45%, #E63B00 80%, #C92B00 100%)',
        }}
      />

      {/* 2-Column Exact Figma Container: max-w-[1280px], 72px padding on desktop, locked 1136px grid */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-9 lg:px-[72px] relative z-10 pt-24 sm:pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column (Figma Frame 1 42:9088: 582px width) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* H1: Satoshi Semi-Bold (500/600), NOT bold, 97.7px / lh:88px in Figma */}
            <h1 className="font-satoshi font-medium sm:font-semibold text-white text-[44px] sm:text-[60px] md:text-[76px] lg:text-[90px] xl:text-[97.7px] leading-[0.92] tracking-[-0.04em] mb-5 sm:mb-6">
              Beres tugas<br />
              tanpa pusing!
            </h1>

            {/* Subtitle (Figma 42:9090: Satoshi 400 18px / lh:28px, max-w 406px) */}
            <p className="text-[#FFF4F2] font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[28px] max-w-[420px] mb-6 sm:mb-8 opacity-95">
              Nataku menyatukan jadwal kuliah dan tugas ke dalam satu alur rapi. Cukup lewat WhatsApp, bereskan tugas tanpa ribet buka-tutup aplikasi.
            </p>

            {/* CTA Button (Figma Frame 3 42:9091: 176x36px, rounded-[6px], bg-white/10, NO SHADOW) */}
            <div>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[6px] bg-white/10 hover:bg-white/20 border border-white/20 text-white font-satoshi font-medium text-[16px] leading-[24px] tracking-[-0.01em] transition-colors select-none no-underline shadow-none"
              >
                Amankan Akses Awal
              </a>
            </div>
          </div>

          {/* Right Column (Figma Frame 2 42:9093: 522px width) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[522px] flex items-center justify-center">
              <Image
                src="/assets/hero-right-phones.png"
                alt="Tampilan Antarmuka Nataku di 3 Smartphone"
                width={712}
                height={541}
                priority
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
