'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#D93510] text-[#FFF4F2] overflow-hidden py-16 sm:py-20 select-none">
      {/* Giant Background Watermark Text (Figma 103:2977: Source Serif 4 700 398px, #D93F1C) */}
      <div
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 pointer-events-none select-none font-serif font-bold text-[110px] sm:text-[280px] md:text-[340px] lg:text-[398px] leading-none text-[#D93F1C] tracking-[-0.04em] whitespace-nowrap opacity-90 z-0"
        style={{ fontFamily: "'Source Serif 4', serif" }}
      >
        Nataku
      </div>

      {/* Main Content Grid (Figma 74:34559: 1136px width, 2 columns gap 32px) */}
      <div className="relative z-10 w-full max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Kolom Kiri (Frame 1: 552px) */}
          <div className="lg:col-span-6 flex flex-col justify-start max-w-[552px]">
            {/* Logo Mark + Title */}
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/figma_exports/logo-footer-subtract.svg"
                alt="Nataku Logo Mark"
                className="w-10 h-10 object-contain"
              />
              <span
                className="font-serif font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[56px] text-[#FFF4F2] tracking-[-0.04em]"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Nataku
              </span>
            </div>

            <p className="font-satoshi font-normal text-base sm:text-lg lg:text-[20px] leading-[26px] text-white tracking-[-0.02em] max-w-[520px]">
              Nataku adalah produk digital mandiri yang dikembangkan dengan penuh perhatian oleh Lemma Studio (PT Masih Dilemma Makna).
            </p>
          </div>

          {/* Kolom Kanan (Frame 4: 552px) */}
          <div className="lg:col-span-6 flex flex-col justify-between max-w-[552px] h-full pt-1 lg:pt-2">
            <div>
              <span className="font-satoshi font-light text-xs sm:text-[14px] leading-[20px] tracking-[0.005em] text-[#FFF4F2]/90 block mb-3">
                Tautan Pendukung:
              </span>
              <div className="flex flex-col gap-2 font-satoshi font-light text-xs sm:text-[14px] leading-[20px] tracking-[0.005em] text-[#FFF4F2]">
                <a href="#waitlist" className="hover:underline transition-all">
                  Kebijakan Privasi
                </a>
                <a href="#waitlist" className="hover:underline transition-all">
                  Syarat dan Ketentuan
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  Hubungi Tim Nataku
                </a>
              </div>
            </div>

            <div className="mt-8 font-satoshi font-light text-xs sm:text-[14px] leading-[20px] tracking-[0.005em] text-[#FFF4F2]/80">
              © 2026 Lemma Bermakna. Hak Cipta Dilindungi.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
