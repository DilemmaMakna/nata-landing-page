'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ProblemFeatureSection() {
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

  // Viewport dimensions for corner calculations
  const [viewportDims, setViewportDims] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    const updateDims = () => {
      setViewportDims({
        w: Math.min(1280, window.innerWidth),
        h: window.innerHeight,
      });
    };
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  const offsetX = Math.max(240, (viewportDims.w / 2) - 55);
  const offsetY = Math.max(180, (viewportDims.h / 2) - 48);

  const corners = [
    { x: -offsetX, y: -offsetY, rot: 0 },  // Card 1: Kuburan Catatan (Top-Left)
    { x: offsetX,  y: -offsetY, rot: 0 },  // Card 2: Overwhelmed (Top-Right)
    { x: -offsetX, y: offsetY,  rot: 0 },  // Card 3: Puluhan Grup (Bottom-Left)
    { x: offsetX,  y: offsetY,  rot: 0 },  // Card 4: Distraksi Medsos (Bottom-Right)
  ];

  // =========================================================================
  // PART 1: "Tata Semua Jadwalmu!" (0.00 -> 0.40)
  // =========================================================================
  let part1Opacity = 1.0;
  let headlineScale = 1.0;
  let headlineOpacity = 1.0;
  let cardsInterp = corners;

  if (p < 0.40) {
    part1Opacity = 1.0;

    const tHead = Math.min(1, p / 0.28);
    headlineScale = Math.max(0, 1.0 - 0.45 * tHead);
    headlineOpacity = Math.max(0, 1.0 - tHead * 1.25);

    if (p < 0.28) {
      const tCard = p / 0.28;
      const easeCard = tCard * tCard * (3 - 2 * tCard);
      cardsInterp = corners.map((c) => ({
        x: c.x * (1 - easeCard),
        y: c.y * (1 - easeCard),
        rot: 0,
      }));
    } else if (p < 0.35) {
      cardsInterp = [
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
      ];
    } else {
      const tDissolve = (p - 0.35) / 0.05;
      part1Opacity = Math.max(0, 1.0 - tDissolve);
      cardsInterp = [
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
        { x: 0, y: 0, rot: 0 },
      ];
    }
  } else {
    part1Opacity = 0.0;
    headlineOpacity = 0.0;
  }

  // =========================================================================
  // PART 2: Feature Dynamic Group Re-Centering (0.40 -> 0.82)
  // Step distance S = 118px (~86px height + ~32px clear gap)
  // =========================================================================
  const S = 118;
  let y1 = 150, op1 = 0;
  let y2 = 190, op2 = 0;
  let y3 = 230, op3 = 0;
  let part2Opacity = 1.0;
  let part2Scale = 1.0;

  if (p < 0.40) {
    op1 = 0; op2 = 0; op3 = 0;
  } else if (p < 0.52) {
    const t1 = Math.max(0, Math.min(1, (p - 0.40) / 0.12));
    const ease1 = 1 - Math.pow(1 - t1, 3);
    y1 = (1 - ease1) * 150;
    op1 = ease1;
  } else if (p < 0.64) {
    const t2 = Math.max(0, Math.min(1, (p - 0.52) / 0.12));
    const ease2 = 1 - Math.pow(1 - t2, 3);
    y1 = -ease2 * (S / 2);
    op1 = 1;
    y2 = (1 - ease2) * 180 + ease2 * (S / 2);
    op2 = ease2;
  } else if (p < 0.76) {
    const t3 = Math.max(0, Math.min(1, (p - 0.64) / 0.12));
    const ease3 = 1 - Math.pow(1 - t3, 3);
    y1 = -(S / 2) - ease3 * (S / 2);
    op1 = 1;
    y2 = (S / 2) - ease3 * (S / 2);
    op2 = 1;
    y3 = (1 - ease3) * 210 + ease3 * S;
    op3 = ease3;
  } else if (p < 0.82) {
    y1 = -S; op1 = 1;
    y2 = 0;  op2 = 1;
    y3 = S;  op3 = 1;
  } else {
    // Fade out during Iris expansion (0.82 -> 0.90)
    const tPillFade = Math.min(1, (p - 0.82) / 0.08);
    part2Opacity = Math.max(0, 1 - tPillFade * 1.4);
    part2Scale = 1 - tPillFade * 0.06;
    y1 = -S; op1 = 1;
    y2 = 0;  op2 = 1;
    y3 = S;  op3 = 1;
  }

  // =========================================================================
  // PART 3: Orange Iris Expansion (0.82 -> 0.91)
  // =========================================================================
  let irisRadius = 0;
  let irisOpacity = 0;

  if (p >= 0.82 && p < 0.91) {
    const tIris = (p - 0.82) / 0.09;
    const easeIris = tIris * tIris * (3 - 2 * tIris);
    irisRadius = easeIris * 150;
    irisOpacity = 1;
  } else if (p >= 0.91) {
    irisRadius = 150;
    irisOpacity = 1;
  }

  // Scroll indicator track opacity
  let trackOpacity = 1.0;
  if (p >= 0.82 && p < 0.90) {
    const tTrack = (p - 0.82) / 0.08;
    trackOpacity = Math.max(0, 1 - tTrack * 1.5);
  } else if (p >= 0.90) {
    trackOpacity = 0;
  }

  // =========================================================================
  // PART 4: Option A — Editorial Kinetic Split & Blur-to-Focus (0.88 -> 0.97)
  // =========================================================================
  let xBracketLeft = 40;
  let xBracketRight = -40;
  let yQuoteText = 36;
  let blurQuoteText = 10;
  let quoteOpacity = 0;

  if (p >= 0.88 && p < 0.97) {
    const tQuote = (p - 0.88) / 0.09;
    const easeQuote = 1 - Math.pow(1 - tQuote, 3);
    xBracketLeft = (1 - easeQuote) * 40;
    xBracketRight = -(1 - easeQuote) * 40;
    yQuoteText = (1 - easeQuote) * 36;
    blurQuoteText = (1 - easeQuote) * 10;
    quoteOpacity = easeQuote;
  } else if (p >= 0.97) {
    xBracketLeft = 0;
    xBracketRight = 0;
    yQuoteText = 0;
    blurQuoteText = 0;
    quoteOpacity = 1;
  }

  return (
    <section
      ref={containerRef}
      id="protoSection"
      className="relative bg-[#FFFFFF]"
      style={{ height: '480vh' }}
    >
      {/* Smooth scroll anchor for navbar "Tentang" (#quote) */}
      <div id="quote" className="absolute pointer-events-none" style={{ top: '86%', width: 1, height: 1 }} />

      {/* Sticky Pinned Viewport */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden select-none">
        
        {/* Full Viewport Orange Iris Expansion Layer */}
        <div
          className="absolute inset-0 pointer-events-none z-35 bg-[#F0441E]"
          style={{
            clipPath: `circle(${irisRadius}% at 50% 50%)`,
            opacity: irisOpacity,
            willChange: 'clip-path, opacity',
          }}
        />

        {/* Staging Area (Full Viewport Height: h-[100dvh]) */}
        <div className="relative w-full max-w-[1280px] h-[100dvh] flex items-center justify-center">
          
          {/* ============================================================== */}
          {/* PART 1: "Tata Semua Jadwalmu!" (Orange Text) + 4 Bleeding Cards */}
          {/* ============================================================== */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: part1Opacity }}
          >
            {/* Center Orange Headline */}
            <div
              className="text-center z-10 will-change-transform px-4"
              style={{
                transform: `scale(${headlineScale})`,
                opacity: headlineOpacity,
              }}
            >
              <h2 className="font-satoshi font-medium text-[#F0441E] text-[58px] sm:text-[96px] md:text-[135px] lg:text-[165px] xl:text-[191px] leading-[0.91] tracking-[-0.04em] text-center select-none whitespace-nowrap">
                Tata Semua<br />
                Jadwalmu!
              </h2>
            </div>

            {/* 4 Cards Gliding to Dead Center */}
            <div
              className="absolute left-1/2 top-1/2 shadow-lg rounded-[12px] overflow-hidden pointer-events-none w-[170px] sm:w-[200px] md:w-[219px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[0].x}px, ${cardsInterp[0].y}px, 0)`,
                zIndex: 25,
              }}
            >
              <img
                src="/assets/proto/card-kuburan-catatan.png"
                alt="Kuburan Catatan"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-lg rounded-[12px] overflow-hidden pointer-events-none w-[155px] sm:w-[180px] md:w-[193px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[1].x}px, ${cardsInterp[1].y}px, 0)`,
                zIndex: 24,
              }}
            >
              <img
                src="/assets/proto/card-overwhelmed.png"
                alt="Overwhelmed"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-lg rounded-[12px] overflow-hidden pointer-events-none w-[160px] sm:w-[185px] md:w-[200px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[2].x}px, ${cardsInterp[2].y}px, 0)`,
                zIndex: 23,
              }}
            >
              <img
                src="/assets/proto/card-puluhan-grup.png"
                alt="Puluhan Grup"
                className="w-full h-auto block"
              />
            </div>

            <div
              className="absolute left-1/2 top-1/2 shadow-lg rounded-[12px] overflow-hidden pointer-events-none w-[175px] sm:w-[205px] md:w-[224px]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${cardsInterp[3].x}px, ${cardsInterp[3].y}px, 0)`,
                zIndex: 22,
              }}
            >
              <img
                src="/assets/proto/card-distraksi-medsos.png"
                alt="Distraksi Medsos"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Figma Scroll Indicator Track */}
          <div
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-3 sm:w-3.5 h-[340px] sm:h-[480px] rounded-full border border-stone-200/80 bg-white/70 p-0.5 hidden md:flex flex-col pointer-events-none z-40 transition-opacity duration-150"
            style={{ opacity: trackOpacity }}
          >
            <div
              className="w-full h-14 rounded-full bg-stone-700/60 transition-transform duration-75"
              style={{
                transform: `translateY(${p * 380}px)`,
              }}
            />
          </div>

          {/* ============================================================== */}
          {/* PART 2: Feature Dynamic Group Re-Centering (Figma 59:26229)    */}
          {/* Fitted padding (px-7 py-4.5), rounded-[16px], and 32px gap    */}
          {/* ============================================================== */}
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-transform will-change-[transform,opacity]"
            style={{
              opacity: part2Opacity,
              transform: `scale(${part2Scale})`,
            }}
          >
            {/* Feature 1: Manajemen Tugas */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-[16px] bg-[#F0441E] shadow-xl select-none will-change-transform"
              style={{
                opacity: op1,
                transform: `translate(-50%, -50%) translate3d(0, ${y1}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-note.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[32px] md:text-[38px] lg:text-[42px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#FFC4B8] font-normal sm:font-medium">Manajemen</span> <span className="text-white font-medium sm:font-semibold">Tugas</span>
              </div>
            </div>

            {/* Feature 2: Integrasi Kalender */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-[16px] bg-[#F59E0B] shadow-xl select-none will-change-transform"
              style={{
                opacity: op2,
                transform: `translate(-50%, -50%) translate3d(0, ${y2}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-calendar.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[32px] md:text-[38px] lg:text-[42px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#FDE68A] font-normal sm:font-medium">Integrasi</span> <span className="text-white font-medium sm:font-semibold">Kalender</span>
              </div>
            </div>

            {/* Feature 3: Terhubung WhatsApp */}
            <div
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-4 sm:gap-5 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-[16px] bg-[#019669] shadow-xl select-none will-change-transform"
              style={{
                opacity: op3,
                transform: `translate(-50%, -50%) translate3d(0, ${y3}px, 0)`,
              }}
            >
              <img src="/assets/proto/icon-whatsapp.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain brightness-0 invert flex-shrink-0" />
              <div className="font-satoshi text-2xl sm:text-[32px] md:text-[38px] lg:text-[42px] tracking-tight leading-none whitespace-nowrap">
                <span className="text-[#A7F3D0] font-normal sm:font-medium">Terhubung</span> <span className="text-white font-medium sm:font-semibold">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* PART 4: QUOTE BANNER CONTINUUM (Figma Desktop - 4 73:32098)   */}
          {/* Opsi A: Kinetic Split & Blur-to-Focus                         */}
          {/* ============================================================== */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-40 px-4 sm:px-8"
          >
            <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between gap-4 sm:gap-8 md:gap-12 will-change-transform">
              
              {/* Left Bracket */}
              <div
                className="flex-shrink-0 flex items-center justify-center select-none pointer-events-none will-change-transform"
                style={{
                  opacity: quoteOpacity,
                  transform: `translateX(${xBracketLeft}px)`,
                }}
              >
                <img
                  src="/assets/figma_exports/quote-bracket-left.svg"
                  alt="“"
                  className="h-28 sm:h-44 md:h-60 lg:h-72 w-auto object-contain"
                />
              </div>

              {/* Statement Typography */}
              <h2
                className="flex-1 font-satoshi font-medium text-white text-[24px] sm:text-[34px] md:text-[46px] lg:text-[56px] xl:text-[64px] leading-[1.125] tracking-[-0.04em] text-left max-w-[786px] will-change-[transform,opacity,filter]"
                style={{
                  opacity: quoteOpacity,
                  transform: `translateY(${yQuoteText}px)`,
                  filter: `blur(${blurQuoteText}px)`,
                }}
              >
                Setiap pagi, Nataku Hadir Mengingatkan daftar tugas penting. Cukup Balas chat, dan langsung tercatat!
              </h2>

              {/* Right Bracket */}
              <div
                className="flex-shrink-0 flex items-center justify-center select-none pointer-events-none will-change-transform"
                style={{
                  opacity: quoteOpacity,
                  transform: `translateX(${xBracketRight}px)`,
                }}
              >
                <img
                  src="/assets/figma_exports/quote-bracket-right.svg"
                  alt="”"
                  className="h-28 sm:h-44 md:h-60 lg:h-72 w-auto object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
