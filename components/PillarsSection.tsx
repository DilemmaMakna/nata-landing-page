'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const p = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const p = progress;

  // Card 2 slides up over Card 1 (0.12 -> 0.48), resting at translateY(32px)
  const t2 = Math.max(0, Math.min(1, (p - 0.12) / 0.34));
  const ease2 = 1 - Math.pow(1 - t2, 3);
  const y2 = (1 - ease2) * 620 + ease2 * 32;

  // Card 3 slides up over Card 2 (0.52 -> 0.88), resting at translateY(64px)
  const t3 = Math.max(0, Math.min(1, (p - 0.52) / 0.34));
  const ease3 = 1 - Math.pow(1 - t3, 3);
  const y3 = (1 - ease3) * 620 + ease3 * 64;

  return (
    <section
      ref={containerRef}
      id="sistem-inti"
      className="relative w-full bg-[#FAFAFA] text-[#0F172A]"
      style={{ height: '320vh' }}
    >
      {/* Sticky Pinned Viewport */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 select-none">
        
        {/* Section Header */}
        <div className="w-full max-w-[1136px] mx-auto mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-[6px] bg-[#FFE4DE] text-[#F86D52] font-satoshi font-medium text-[14px] leading-[20px] mb-3 select-none">
            Sistem Terpadu
          </div>
          <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-[42px] leading-[1.15] text-[#0F172A] tracking-tight mb-2">
            3 Sistem Terpadu Untuk Harimu.
          </h2>
          <p className="font-satoshi text-sm sm:text-base md:text-[18px] leading-[1.4] text-[#23211F] max-w-[840px]">
            Setiap awal semester selalu bikin to-do list baru. Tiga hari pertama rajin mencatat, setelah itu aplikasinya berdebu di folder HP.
          </p>
        </div>

        {/* 3 Overlapping Cards Deck Container */}
        <div className="relative w-full max-w-[1136px] h-[480px] sm:h-[510px] md:h-[530px] lg:h-[550px]">
          
          {/* Card 1: Today's Focus (Red-Orange #F0441E) */}
          <div
            className="absolute inset-x-0 top-0 w-full h-full rounded-[28px] md:rounded-[32px] bg-[#F0441E] text-white shadow-xl overflow-hidden will-change-transform select-none"
            style={{ zIndex: 10 }}
          >
            {/* Inner Dashed Border Frame (Figma Component 9 SVG stroke) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-3 sm:p-4 md:p-5 lg:p-6" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="24" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="12 12" strokeOpacity="0.85" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full p-6 sm:p-8 md:p-12 lg:p-14">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6">
                <h3 className="font-satoshi font-bold sm:font-medium text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.22] tracking-tight mb-4 sm:mb-5 text-white">
                  Today's Focus
                </h3>
                <h4 className="font-satoshi font-normal text-lg sm:text-xl md:text-[22px] text-[#FFF4F2] leading-[1.38] mb-5 sm:mb-6">
                  Maksimal 3 hal terpenting setiap hari.
                </h4>
                <p className="font-satoshi font-normal text-sm sm:text-base md:text-[17px] text-[#FFF4F2]/90 leading-[1.68] max-w-[490px]">
                  Layar utama Nataku memangkas kekacauan tugasmu dan hanya menampilkan hal yang paling wajib beres hari ini, sehingga energimu tidak habis karena overwhelmed.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-2">
                <div className="relative w-full max-w-[490px] rounded-[22px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.22)] bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-2">
                  <img
                    src="/assets/figma_exports/card1_visual_container.png"
                    alt="Today's Focus UI Preview"
                    className="w-full h-auto max-h-[330px] sm:max-h-[370px] md:max-h-[410px] object-contain block drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Calendar Integrated (Emerald Green #047857) */}
          <div
            className="absolute inset-x-0 top-0 w-full h-full rounded-[28px] md:rounded-[32px] bg-[#047857] text-white shadow-[0_-16px_44px_rgba(0,0,0,0.26),0_20px_40px_rgba(0,0,0,0.16)] overflow-hidden will-change-transform select-none"
            style={{
              zIndex: 20,
              transform: `translateY(${y2}px)`,
            }}
          >
            {/* Inner Dashed Border Frame (Figma Component 9 SVG stroke) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-3 sm:p-4 md:p-5 lg:p-6" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="24" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="12 12" strokeOpacity="0.85" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full p-6 sm:p-8 md:p-12 lg:p-14">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6">
                <h3 className="font-satoshi font-bold sm:font-medium text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.22] tracking-tight mb-4 sm:mb-5 text-white">
                  Calendar Integrated
                </h3>
                <h4 className="font-satoshi font-normal text-lg sm:text-xl md:text-[22px] text-[#FFF4F2] leading-[1.38] mb-5 sm:mb-6">
                  Bebas panik H-1 jam pengumpulan tugas.
                </h4>
                <p className="font-satoshi font-normal text-sm sm:text-base md:text-[17px] text-[#FFF4F2]/90 leading-[1.68] max-w-[490px]">
                  Indikator visual hitung mundur dengan warna jelas (kuning untuk hari ini, merah untuk mendesak). Kamu selalu tahu berapa sisa waktumu sebelum terlambat.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-2">
                <div className="relative w-full max-w-[490px] rounded-[22px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.22)] bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-2">
                  <img
                    src="/assets/figma_exports/card2_visual_container.png"
                    alt="Calendar Integrated UI Preview"
                    className="w-full h-auto max-h-[330px] sm:max-h-[370px] md:max-h-[410px] object-contain block drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp Daily (Blue #0369A1) */}
          <div
            className="absolute inset-x-0 top-0 w-full h-full rounded-[28px] md:rounded-[32px] bg-[#0369A1] text-white shadow-[0_-16px_44px_rgba(0,0,0,0.30),0_24px_48px_rgba(0,0,0,0.20)] overflow-hidden will-change-transform select-none"
            style={{
              zIndex: 30,
              transform: `translateY(${y3}px)`,
            }}
          >
            {/* Inner Dashed Border Frame (Figma Component 9 SVG stroke) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-3 sm:p-4 md:p-5 lg:p-6" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="24" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="12 12" strokeOpacity="0.85" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full p-6 sm:p-8 md:p-12 lg:p-14">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-6">
                <h3 className="font-satoshi font-bold sm:font-medium text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.22] tracking-tight mb-4 sm:mb-5 text-white">
                  WhatsApp Daily &amp;<br className="hidden sm:inline" /> Quick Action
                </h3>
                <h4 className="font-satoshi font-normal text-lg sm:text-xl md:text-[22px] text-[#FFF4F2] leading-[1.38] mb-5 sm:mb-6">
                  Asisten harian langsung di chat pribadimu.
                </h4>
                <p className="font-satoshi font-normal text-sm sm:text-base md:text-[17px] text-[#FFF4F2]/90 leading-[1.68] max-w-[490px]">
                  Terima rangkuman pagi setiap jam 7. Balas chat untuk mencoret tugas atau menambah agenda baru tanpa perlu menyentuh aplikasi.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-2">
                <div className="relative w-full max-w-[490px] rounded-[22px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.22)] bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-2">
                  <img
                    src="/assets/figma_exports/card3_visual_container.png"
                    alt="WhatsApp Daily & Quick Action Preview"
                    className="w-full h-auto max-h-[330px] sm:max-h-[370px] md:max-h-[410px] object-contain block drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
