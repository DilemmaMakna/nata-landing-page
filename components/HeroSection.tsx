'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-bg relative h-[100dvh] w-full flex items-center justify-center overflow-hidden select-none">
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

      {/* 2-Column Exact Figma Container (1136px max-width, 72px margin) */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 md:px-[72px] relative z-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column (Frame 1 42:9088: 582px width in Figma) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="font-satoshi font-bold text-white text-[42px] sm:text-[54px] md:text-[64px] lg:text-[70px] leading-[1.08] tracking-tight mb-4 sm:mb-6">
              Beres tugas<br />
              tanpa pusing!
            </h1>

            <p className="text-[#FFF4F2] font-satoshi font-normal text-sm sm:text-base md:text-[20px] leading-[1.4] max-w-[500px] mb-6 sm:mb-8 opacity-95">
              Nataku menyatukan jadwal kuliah dan tugas ke dalam satu alur rapi. Cukup lewat WhatsApp, bereskan tugas tanpa ribet buka-tutup aplikasi.
            </p>

            <div>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center h-10 px-5 rounded-[6px] bg-white/10 hover:bg-white/20 border border-white/25 text-white font-satoshi font-medium text-sm tracking-wide backdrop-blur-md transition-all duration-200 shadow-sm active:scale-95 no-underline"
              >
                Amankan Akses Awal
              </a>
            </div>
          </div>

          {/* Right Column (Frame 2 42:9093: 522px width in Figma) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 185, 130, 0.4) 0%, rgba(255, 120, 50, 0.15) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative w-full max-w-[522px] flex items-center justify-center">
              <Image
                src="/assets/hero-right-phones.png"
                alt="Tampilan Antarmuka Nataku di 3 Smartphone"
                width={712}
                height={541}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)] select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
