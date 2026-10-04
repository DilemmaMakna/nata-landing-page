'use client';

import React from 'react';

export default function QuoteSection() {
  return (
    <section id="quote" className="w-full bg-[#F0441E] text-white py-16 md:py-24 relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-[72px]">
        <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4 sm:gap-6 md:gap-10">
          {/* Left Quote Bracket Icon */}
          <div className="flex-shrink-0 flex items-center justify-center select-none pointer-events-none opacity-90">
            <img
              src="/assets/figma_exports/desktop_4_quote_left.png"
              alt="Quote Left"
              className="h-20 sm:h-32 md:h-52 lg:h-64 w-auto object-contain"
            />
          </div>

          {/* Statement Typography */}
          <h2 className="flex-1 font-satoshi font-medium text-white text-[22px] sm:text-[32px] md:text-[44px] lg:text-[54px] leading-[1.2] tracking-tight text-left">
            Setiap pagi, Nataku Hadir Mengingatkan daftar tugas penting. Cukup Balas chat, dan langsung tercatat!
          </h2>

          {/* Right Quote Bracket Icon */}
          <div className="flex-shrink-0 flex items-center justify-center select-none pointer-events-none opacity-90">
            <img
              src="/assets/figma_exports/desktop_4_quote_right.png"
              alt="Quote Right"
              className="h-20 sm:h-32 md:h-52 lg:h-64 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
