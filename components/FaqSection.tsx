'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Apakah Nataku gratis digunakan?',
    answer:
      "Fitur dasar di aplikasi Android seperti Today's Focus dan hitung mundur tugas bisa kamu pakai secara gratis. Namun, asisten harian WhatsApp dan pencatatan via chat adalah fitur unggulan di tier On Track yang berbayar. Pendaftar antrean awal akan mendapatkan kuota uji coba gratis untuk fitur WhatsApp ini."
  },
  {
    question: 'Apakah WhatsApp aman dan tidak akan spam?',
    answer:
      'Nomor kamu 100% aman. Nataku hanya mengirimkan pesan sesuai jadwal yang kamu tentukan sendiri. Kami tidak pernah membagikan data nomor pribadimu, dan kamu bisa menghentikan pesan kapan saja cukup dengan mengetik kata "stop".'
  },
  {
    question: 'Kapan aplikasinya bisa mulai saya unduh?',
    answer:
      'Pengujian awal untuk pengguna Android dimulai beberapa minggu ke depan. Pengguna yang terdaftar di antrean waitlist akan menerima tautan instalasi privat pertama kali via WhatsApp resmi kami.'
  },
  {
    question: 'Bagaimana kalau saya pengguna iPhone (iOS)?',
    answer:
      'Fokus peluncuran perdana kami adalah pengguna Android. Kamu tetap disarankan mendaftar antrean sekarang agar menjadi orang pertama yang kami kabari saat versi iOS siap dirilis.'
  }
];

export default function FaqSection() {
  // Aturan interaktif: Awalnya tertutup semua (null)
  // Klik item terbuka -> menutup kembali
  // Klik item lain -> menutup yang sebelumnya, membuka yang baru (maksimal 1 aktif)
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#FFFFFF] py-16 lg:py-[46px] relative overflow-hidden flex items-center min-h-[640px] lg:min-h-[700px]"
    >
      <div className="container-nataku w-full">
        <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[98px] items-center">
          
          {/* Sisi Kiri: Header + Accordion (Figma Frame 5: 519px) */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-[519px]">
            {/* Header Frame 1: Title + Subtitle */}
            <div className="mb-10">
              <h2 className="font-satoshi font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.16] tracking-tight text-[#F0441E] mb-3">
                Tanya Jawab
              </h2>
              <p className="font-satoshi font-normal text-base sm:text-lg lg:text-[20px] leading-[26px] text-[#23211F] tracking-[-0.02em]">
                Setiap awal semester selalu bikin to-do list baru. Tiga hari pertama rajin mencatat, setelah itu aplikasinya berdebu di folder HP.
              </p>
            </div>

            {/* Accordion Frame 4: Single active item */}
            <div className="border border-[#E7E5E4] rounded-[12px] overflow-hidden divide-y divide-[#E7E5E4] bg-white shadow-sm">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="group">
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full text-left py-3.5 sm:py-4 px-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-satoshi font-medium text-base sm:text-lg md:text-[20px] leading-[26px] text-[#44403C] tracking-[-0.02em]">
                        {faq.question}
                      </span>
                      <span
                        className={`w-6 h-6 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                        >
                          <path
                            d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                            stroke="#78716C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr'
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pt-1 pb-4 text-[#000000] font-satoshi font-light text-xs sm:text-sm md:text-[14px] leading-[20px] border-t border-[#E7E5E4]/60">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sisi Kanan: Visual Illustration Frame (Frame 57, 519x506px) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[519px] h-auto lg:h-[506px] aspect-[519/506] rounded-[12px] overflow-hidden flex items-center justify-center">
              <img
                src="/assets/figma_exports/faq_illustration.png"
                alt="Nataku Tanya Jawab Visual"
                className="w-full h-full object-cover block rounded-[12px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
