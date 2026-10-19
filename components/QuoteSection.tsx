'use client';

import React from 'react';

export default function QuoteSection() {
  return (
    <section id="quote" className="w-full bg-[#F0441E] text-white py-16 md:py-24 relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4 sm:gap-6 md:gap-10">
          {/* Left Quote Mark (Text-based / Typographic) */}
          <span
            className="flex-shrink-0 font-serif font-bold text-white/90 text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none select-none select-text cursor-default"
            aria-hidden="true"
          >
            “
          </span>

          {/* Statement Typography - Selectable Text */}
          <h2 className="flex-1 font-satoshi font-medium text-white text-[20px] sm:text-[30px] md:text-[40px] lg:text-[48px] leading-[1.25] tracking-tight text-left select-text cursor-text">
            Nataku hadir dengan ingatkan tugas prioritasmu lewat WhatsApp. Cukup balas chat, tugas langsung tercatat.
          </h2>

          {/* Right Quote Mark (Text-based / Typographic) */}
          <span
            className="flex-shrink-0 font-serif font-bold text-white/90 text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none select-none select-text cursor-default self-end"
            aria-hidden="true"
          >
            ”
          </span>
        </div>
      </div>
    </section>
  );
}
