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

  // Card 2 slides up over Card 1 (0.12 -> 0.48), resting neatly at translateY(20px)
  const t2 = Math.max(0, Math.min(1, (p - 0.12) / 0.34));
  const ease2 = 1 - Math.pow(1 - t2, 3);
  const y2 = (1 - ease2) * 620 + ease2 * 20;

  // Card 3 slides up over Card 2 (0.52 -> 0.88), resting neatly at translateY(40px)
  const t3 = Math.max(0, Math.min(1, (p - 0.52) / 0.34));
  const ease3 = 1 - Math.pow(1 - t3, 3);
  const y3 = (1 - ease3) * 620 + ease3 * 40;

  return (
    <section
      ref={containerRef}
      id="sistem-inti"
      className="relative w-full bg-[#FAFAFA] text-[#0F172A]"
      style={{ height: '320vh' }}
    >
      {/* Sticky Pinned Viewport (Fills 100dvh with clean vertical padding and optical centering) */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-[72px] pt-16 sm:pt-20 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 select-none">
        
        {/* Section Header */}
        <div className="w-full max-w-[1136px] mx-auto mb-3 sm:mb-4 lg:mb-5 text-left flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#FFE4DE] text-[#F86D52] font-satoshi font-medium text-[13px] sm:text-[14px] leading-[18px] mb-2 select-none">
            Sistem Terpadu
          </div>
          <h2 className="font-satoshi font-medium text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-[1.14] text-[#0F172A] tracking-[-0.03em] mb-1.5">
            3 Sistem Terpadu Untuk Harimu.
          </h2>
          <p className="font-satoshi text-xs sm:text-sm md:text-[16px] leading-[1.45] text-[#57534E] max-w-[840px]">
            Setiap awal semester selalu bikin to-do list baru. Tiga hari pertama rajin mencatat, setelah itu aplikasinya berdebu di folder HP.
          </p>
        </div>

        {/* 3 Overlapping Cards Deck Container (Height calibrated to fit viewport with zero overflow) */}
        <div className="relative w-full max-w-[1136px] h-[400px] sm:h-[430px] md:h-[460px] lg:h-[480px]">
          
          {/* Card 1: Today's Focus (Red-Orange #F0441E) - Flat, No Shadow, Fitted Padding */}
          <div
            className="absolute inset-x-0 top-0 w-full h-[calc(100%-40px)] rounded-[22px] sm:rounded-[26px] bg-[#F0441E] text-white overflow-hidden will-change-transform select-none shadow-none"
            style={{ zIndex: 10 }}
          >
            {/* Inner Dashed Border Frame */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-2.5 sm:p-3.5" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="18" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="10 10" strokeOpacity="0.75" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center h-full px-5 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-6">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-4">
                <h3 className="font-satoshi font-medium text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.16] tracking-tight mb-1.5 sm:mb-2 text-white">
                  Today's Focus
                </h3>
                <h4 className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] lg:text-[19px] text-[#FFF4F2] leading-[1.3] mb-2.5 sm:mb-3">
                  Maksimal 3 hal terpenting setiap hari.
                </h4>
                <p className="font-satoshi font-normal text-xs sm:text-sm md:text-[15px] text-[#FFF4F2]/90 leading-[1.55] max-w-[460px]">
                  Layar utama Nataku memangkas kekacauan tugasmu dan hanya menampilkan hal yang paling wajib beres hari ini, sehingga energimu tidak habis karena overwhelmed.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-1">
                <div className="relative w-full max-w-[450px] rounded-[16px] overflow-hidden bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-1.5 shadow-none">
                  <img
                    src="/assets/figma_exports/card1_visual_container.png"
                    alt="Today's Focus UI Preview"
                    className="w-full h-auto max-h-[240px] sm:max-h-[270px] md:max-h-[290px] lg:max-h-[310px] object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Calendar Integrated (Emerald Green #047857) - Flat, No Shadow, Fitted Padding */}
          <div
            className="absolute inset-x-0 top-0 w-full h-[calc(100%-40px)] rounded-[22px] sm:rounded-[26px] bg-[#047857] text-white overflow-hidden will-change-transform select-none shadow-none"
            style={{
              zIndex: 20,
              transform: `translateY(${y2}px)`,
            }}
          >
            {/* Inner Dashed Border Frame */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-2.5 sm:p-3.5" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="18" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="10 10" strokeOpacity="0.75" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center h-full px-5 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-6">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-4">
                <h3 className="font-satoshi font-medium text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.16] tracking-tight mb-1.5 sm:mb-2 text-white">
                  Calendar Integrated
                </h3>
                <h4 className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] lg:text-[19px] text-[#FFF4F2] leading-[1.3] mb-2.5 sm:mb-3">
                  Bebas panik H-1 jam pengumpulan tugas.
                </h4>
                <p className="font-satoshi font-normal text-xs sm:text-sm md:text-[15px] text-[#FFF4F2]/90 leading-[1.55] max-w-[460px]">
                  Indikator visual hitung mundur dengan warna jelas (kuning untuk hari ini, merah untuk mendesak). Kamu selalu tahu berapa sisa waktumu sebelum terlambat.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-1">
                <div className="relative w-full max-w-[450px] rounded-[16px] overflow-hidden bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-1.5 shadow-none">
                  <img
                    src="/assets/figma_exports/card2_visual_container.png"
                    alt="Calendar Integrated UI Preview"
                    className="w-full h-auto max-h-[240px] sm:max-h-[270px] md:max-h-[290px] lg:max-h-[310px] object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp Daily (Blue #0369A1) - Flat, No Shadow, Fitted Padding */}
          <div
            className="absolute inset-x-0 top-0 w-full h-[calc(100%-40px)] rounded-[22px] sm:rounded-[26px] bg-[#0369A1] text-white overflow-hidden will-change-transform select-none shadow-none"
            style={{
              zIndex: 30,
              transform: `translateY(${y3}px)`,
            }}
          >
            {/* Inner Dashed Border Frame */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 p-2.5 sm:p-3.5" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="18" fill="none" stroke="#9BA2B8" strokeWidth="1.5" strokeDasharray="10 10" strokeOpacity="0.75" />
            </svg>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center h-full px-5 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-6">
              <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-4">
                <h3 className="font-satoshi font-medium text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.16] tracking-tight mb-1.5 sm:mb-2 text-white">
                  WhatsApp Daily &amp;<br className="hidden sm:inline" /> Quick Action
                </h3>
                <h4 className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] lg:text-[19px] text-[#FFF4F2] leading-[1.3] mb-2.5 sm:mb-3">
                  Asisten harian langsung di chat pribadimu.
                </h4>
                <p className="font-satoshi font-normal text-xs sm:text-sm md:text-[15px] text-[#FFF4F2]/90 leading-[1.55] max-w-[460px]">
                  Terima rangkuman pagi setiap jam 7. Balas chat untuk mencoret tugas atau menambah agenda baru tanpa perlu menyentuh aplikasi.
                </p>
              </div>
              <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full py-1">
                <div className="relative w-full max-w-[450px] rounded-[16px] overflow-hidden bg-black/10 border border-white/15 flex items-center justify-center p-1 sm:p-1.5 shadow-none">
                  <img
                    src="/assets/figma_exports/card3_visual_container.png"
                    alt="WhatsApp Daily & Quick Action Preview"
                    className="w-full h-auto max-h-[240px] sm:max-h-[270px] md:max-h-[290px] lg:max-h-[310px] object-contain block"
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
