'use client';

import React, { useState } from 'react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedTier, setSelectedTier] = useState<'mulai-dulu' | 'on-track'>('mulai-dulu');

  return (
    <section id="pricing" className="w-full bg-[#FAFAFA] py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header (Figma Desktop - 13 Frame 1) */}
        <div className="mb-10 text-left">
          {/* Frame 56 Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-[6px] bg-[#FFE4DE] text-[#F86D52] font-satoshi font-medium text-[14px] leading-[20px] mb-3 select-none">
            Pilihan Akses
          </div>

          <h2 className="font-satoshi font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.16] tracking-tight text-[#0F172A] mb-3">
            Mulai gratis, upgrade saat kamu butuh asisten.
          </h2>
          
          <p className="font-satoshi font-normal text-base sm:text-lg lg:text-[20px] leading-[26px] text-[#23211F] tracking-[-0.01em] max-w-[900px]">
            Paket standar membantumu manajemen tugas, namun asisten WhatsApp yang memastikan seluruh deadline kamu tuntas.
          </p>
        </div>

        {/* Billing Toggle (Frame 57: 325x60px) */}
        <div className="inline-flex items-center p-1.5 rounded-[8px] bg-[#FFF4F2] border border-[#FFE4DE] gap-2.5 mb-10 select-none">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] transition-all duration-200 cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-[#F0441E] text-white shadow-sm font-bold'
                : 'bg-transparent text-[#57534E] hover:text-[#23211F] font-normal'
            }`}
          >
            <img
              src="/assets/figma_exports/icon-calendar.svg"
              alt=""
              className={`w-5 h-5 transition-opacity ${
                billingCycle === 'monthly' ? 'brightness-0 invert' : 'opacity-70'
              }`}
            />
            <span className="font-satoshi text-base sm:text-[20px] leading-[26px] tracking-[-0.02em]">
              Bulanan
            </span>
          </button>

          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] transition-all duration-200 cursor-pointer ${
              billingCycle === 'yearly'
                ? 'bg-[#F0441E] text-white shadow-sm font-bold'
                : 'bg-transparent text-[#57534E] hover:text-[#23211F] font-normal'
            }`}
          >
            <img
              src="/assets/figma_exports/icon-layer.svg"
              alt=""
              className={`w-5 h-5 transition-opacity ${
                billingCycle === 'yearly' ? 'brightness-0 invert' : 'opacity-70'
              }`}
            />
            <span className="font-satoshi text-base sm:text-[20px] leading-[26px] tracking-[-0.02em]">
              Tahunan
            </span>
          </button>
        </div>

        {/* Cards Container (Frame 4: 1136x688px) */}
        <div className="w-full rounded-[24px] bg-[#F5F5F4] border border-[#E7E5E4] p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: Paket Mulai Dulu (Frame 2) */}
          <div
            onClick={() => setSelectedTier('mulai-dulu')}
            className={`rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
              selectedTier === 'mulai-dulu'
                ? 'bg-[#F0441E] text-white shadow-xl scale-[1.01]'
                : 'bg-transparent text-[#57534E] hover:bg-stone-200/40'
            }`}
          >
            <div>
              {/* Header Info (Frame 60) */}
              <div className="mb-6">
                <div
                  className={`w-10 h-10 rounded-[6px] flex items-center justify-center mb-4 transition-colors ${
                    selectedTier === 'mulai-dulu' ? 'bg-[#FFE4DE]' : 'bg-[#E7E5E4]'
                  }`}
                >
                  <img
                    src={
                      selectedTier === 'mulai-dulu'
                        ? '/assets/figma_exports/icon-flag-active.svg'
                        : '/assets/figma_exports/icon-flag-inactive.svg'
                    }
                    alt=""
                    className="w-5 h-5"
                  />
                </div>

                <h3
                  className={`font-satoshi font-medium text-3xl sm:text-[40px] leading-[1.2] tracking-[-0.03em] mb-1 ${
                    selectedTier === 'mulai-dulu' ? 'text-white' : 'text-[#44403C]'
                  }`}
                >
                  Paket Mulai Dulu
                </h3>

                <p
                  className={`font-satoshi font-normal text-sm sm:text-[18px] leading-[24px] tracking-[-0.01em] mb-3 ${
                    selectedTier === 'mulai-dulu' ? 'text-[#FFF4F2]' : 'text-[#78716C]'
                  }`}
                >
                  Gratis untuk Mahasiswa
                </p>

                <p
                  className={`font-satoshi font-medium text-sm sm:text-[18px] leading-[28px] ${
                    selectedTier === 'mulai-dulu' ? 'text-[#FFF4F2]' : 'text-[#57534E]'
                  }`}
                >
                  Untuk kamu yang ingin merapikan tugas dan memantau deadline secara mandiri di ponsel Android.
                </p>
              </div>

              {/* Price Display */}
              <div className="my-6">
                <div
                  className={`font-satoshi font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.14] tracking-[-0.03em] ${
                    selectedTier === 'mulai-dulu' ? 'text-[#FFF4F2]' : 'text-[#44403C]'
                  }`}
                >
                  Rp.XX.000,00
                </div>
                <div
                  className={`mt-6 border-t ${
                    selectedTier === 'mulai-dulu' ? 'border-[#FFF4F2]/40' : 'border-[#57534E]/30'
                  }`}
                />
              </div>

              {/* Feature List (Frame 61) */}
              <div className="mb-8">
                <h4
                  className={`font-satoshi font-medium text-base sm:text-[18px] leading-[28px] mb-3 ${
                    selectedTier === 'mulai-dulu' ? 'text-[#FFF4F2]' : 'text-[#44403C]'
                  }`}
                >
                  Yang kamu dapatkan:
                </h4>
                <ul
                  className={`space-y-2 font-satoshi font-medium text-sm sm:text-[18px] leading-[28px] ${
                    selectedTier === 'mulai-dulu' ? 'text-[#FFF4F2]' : 'text-[#57534E]'
                  }`}
                >
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Akses aplikasi Android Nataku</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Dashboard Today's Focus</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Hitung mundur batas waktu tugas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Pelacakan Skor Produktivitas harian</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button (Frame 62) */}
            <a
              href="#waitlist"
              className={`w-full py-4 px-6 rounded-[8px] flex items-center justify-center font-inter font-semibold text-lg sm:text-[22px] leading-[28px] tracking-[-0.02em] transition-all select-none ${
                selectedTier === 'mulai-dulu'
                  ? 'bg-[#FFE4DE] text-[#F0441E] hover:bg-white shadow-sm'
                  : 'bg-[#E7E5E4] text-[#57534E] hover:bg-stone-300'
              }`}
            >
              Daftar Akses Dasar
            </a>
          </div>

          {/* CARD 2: Paket On Track (Frame 5) */}
          <div
            onClick={() => setSelectedTier('on-track')}
            className={`rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
              selectedTier === 'on-track'
                ? 'bg-[#F0441E] text-white shadow-xl scale-[1.01]'
                : 'bg-transparent text-[#57534E] hover:bg-stone-200/40'
            }`}
          >
            <div>
              {/* Header Info (Frame 60) */}
              <div className="mb-6">
                <div
                  className={`w-10 h-10 rounded-[6px] flex items-center justify-center mb-4 transition-colors ${
                    selectedTier === 'on-track' ? 'bg-[#FFE4DE]' : 'bg-[#E7E5E4]'
                  }`}
                >
                  <img
                    src={
                      selectedTier === 'on-track'
                        ? '/assets/figma_exports/icon-flag-active.svg'
                        : '/assets/figma_exports/icon-flag-inactive.svg'
                    }
                    alt=""
                    className="w-5 h-5"
                  />
                </div>

                <h3
                  className={`font-satoshi font-medium text-3xl sm:text-[40px] leading-[1.2] tracking-[-0.03em] mb-1 ${
                    selectedTier === 'on-track' ? 'text-white' : 'text-[#44403C]'
                  }`}
                >
                  Paket On Track
                </h3>

                <p
                  className={`font-satoshi font-normal text-sm sm:text-[18px] leading-[24px] tracking-[-0.01em] mb-3 ${
                    selectedTier === 'on-track' ? 'text-[#FFF4F2]' : 'text-[#78716C]'
                  }`}
                >
                  Paling Pas untuk Mahasiswa Aktif
                </p>

                <p
                  className={`font-satoshi font-medium text-sm sm:text-[18px] leading-[28px] ${
                    selectedTier === 'on-track' ? 'text-[#FFF4F2]' : 'text-[#57534E]'
                  }`}
                >
                  Untuk kamu yang punya jadwal padat dan butuh asisten yang menyapa dan mencatat langsung dari WhatsApp.
                </p>
              </div>

              {/* Price Display */}
              <div className="my-6">
                <div
                  className={`font-satoshi font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.14] tracking-[-0.03em] ${
                    selectedTier === 'on-track' ? 'text-[#FFF4F2]' : 'text-[#44403C]'
                  }`}
                >
                  Rp.XX.000,00
                </div>
                <div
                  className={`mt-6 border-t ${
                    selectedTier === 'on-track' ? 'border-[#FFF4F2]/40' : 'border-[#57534E]/30'
                  }`}
                />
              </div>

              {/* Feature List (Frame 61) */}
              <div className="mb-8">
                <h4
                  className={`font-satoshi font-medium text-base sm:text-[18px] leading-[28px] mb-3 ${
                    selectedTier === 'on-track' ? 'text-[#FFF4F2]' : 'text-[#44403C]'
                  }`}
                >
                  Yang kamu dapatkan:
                </h4>
                <ul
                  className={`space-y-2 font-satoshi font-medium text-sm sm:text-[18px] leading-[28px] ${
                    selectedTier === 'on-track' ? 'text-[#FFF4F2]' : 'text-[#57534E]'
                  }`}
                >
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Semua fitur Paket Mulai Dulu</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Pengiriman pesan WhatsApp Daily Digest setiap pagi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Balas chat WhatsApp untuk coret dan tambah tugas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="opacity-75">•</span>
                    <span>Pengingat batas waktu mendesak langsung ke nomor pribadimu</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button (Frame 62) */}
            <a
              href="#waitlist"
              className={`w-full py-4 px-6 rounded-[8px] flex items-center justify-center font-inter font-semibold text-lg sm:text-[22px] leading-[28px] tracking-[-0.02em] transition-all select-none ${
                selectedTier === 'on-track'
                  ? 'bg-[#FFE4DE] text-[#F0441E] hover:bg-white shadow-sm'
                  : 'bg-[#E7E5E4] text-[#57534E] hover:bg-stone-300'
              }`}
            >
              Daftar Akses On Track
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
