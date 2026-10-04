'use client';

import React, { useState } from 'react';

export default function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    university: '',
    expectation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="w-full bg-[#FFFFFF] py-12 sm:py-16 lg:py-0 lg:h-[100dvh] lg:min-h-[700px] flex items-center justify-center relative overflow-hidden select-none">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[72px] flex items-center justify-center">
        <div className="w-full max-w-[1136px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[42px]">
          
          {/* Left Coral Card (Figma Frame 1 73:32151: 598.3x572px, r=24px, #F0441E) */}
          <div className="w-full lg:w-[598px] h-full min-h-[460px] lg:h-[572px] bg-[#F0441E] rounded-[24px] px-6 sm:px-7 md:px-[27px] py-6 sm:py-7 md:py-[24px] flex flex-col justify-between text-white shadow-none select-none flex-shrink-0">
            
            {/* Visual Artwork: Asset.svg (Figma Frame 53 73:32153: 544x376px) */}
            <div className="w-full h-auto max-h-[340px] sm:max-h-[376px] flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/assets/Asset.svg"
                alt="Nataku Early Access Visual"
                className="w-full max-w-[515px] h-auto max-h-[350px] object-contain block mx-auto select-none pointer-events-none"
              />
            </div>

            {/* Bottom Text Container (Figma Frame 54: gap 8px) */}
            <div className="flex flex-col gap-2 sm:gap-2.5 text-left flex-shrink-0 mt-3 sm:mt-4 lg:mt-0">
              <h2 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] xl:text-[48px] leading-[1.14] tracking-[-0.035em] text-[#FFF4F2]">
                Jadilah yang pertama mencoba Nataku.
              </h2>
              <p className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[1.3] text-[#E7E5E4] tracking-[-0.02em] max-w-[523px]">
                Kami membuka akses Android secara bertahap melalui jalur pengujian khusus agar pengalaman pengguna tetap lancar.
              </p>
            </div>
          </div>

          {/* Right Form (Figma Frame 6 73:32185: 495.7x572px, gap 52px) */}
          <div className="w-full lg:w-[496px] h-full min-h-[480px] lg:h-[572px] flex flex-col justify-between flex-shrink-0">
            {submitted ? (
              <div className="bg-[#FFF4F2] border border-[#F0441E]/30 rounded-[20px] p-8 text-center my-auto">
                <div className="w-12 h-12 rounded-full bg-[#F0441E] text-white flex items-center justify-center mx-auto mb-4 text-2xl shadow-none">
                  ✓
                </div>
                <h3 className="font-satoshi font-bold text-2xl text-[#1F1B16] mb-2">
                  Tempatmu Sudah Diamankan!
                </h3>
                <p className="text-sm sm:text-base text-[#5C5346] leading-relaxed">
                  Terima kasih, <strong>{formData.name || 'Sobat Nata'}</strong>. Tim Nataku akan menghubungimu via WhatsApp di <strong>{formData.whatsapp || 'nomor kamu'}</strong> saat batch pengujian siap dibuka.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between gap-4 lg:gap-0">
                {/* 5 Form Fields (Figma Frame 2: gap 16px) */}
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {/* Field 1: Nama */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="font-satoshi font-medium text-sm sm:text-base lg:text-[20px] leading-[26px] tracking-[-0.02em] text-[#44403C]">
                      Nama panggilan kamu
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Zaid"
                      className="w-full h-10 sm:h-10 px-3.5 bg-white border border-[#D6D3D1] rounded-[8px] text-sm sm:text-base text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="font-satoshi font-medium text-sm sm:text-base lg:text-[20px] leading-[26px] tracking-[-0.02em] text-[#44403C]">
                      Email Aktif
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="zaid.mujahid1504@gmail.com"
                      className="w-full h-10 sm:h-10 px-3.5 bg-white border border-[#D6D3D1] rounded-[8px] text-sm sm:text-base text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                    />
                  </div>

                  {/* Field 3: WhatsApp */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="font-satoshi font-medium text-sm sm:text-base lg:text-[20px] leading-[26px] tracking-[-0.02em] text-[#44403C]">
                      Nomor WhatsApp aktif
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="089745638278"
                      className="w-full h-10 sm:h-10 px-3.5 bg-white border border-[#D6D3D1] rounded-[8px] text-sm sm:text-base text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                    />
                  </div>

                  {/* Field 4: Kampus */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="font-satoshi font-medium text-sm sm:text-base lg:text-[20px] leading-[26px] tracking-[-0.02em] text-[#44403C]">
                      Kampus / Universitas (opsional)
                    </label>
                    <input
                      type="text"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder="IPB University"
                      className="w-full h-10 sm:h-10 px-3.5 bg-white border border-[#D6D3D1] rounded-[8px] text-sm sm:text-base text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                    />
                  </div>

                  {/* Field 5: Harapan */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label className="font-satoshi font-medium text-sm sm:text-base lg:text-[20px] leading-[26px] tracking-[-0.02em] text-[#44403C]">
                      Bagikan Harapanmu pada Nataku
                    </label>
                    <textarea
                      rows={2}
                      value={formData.expectation}
                      onChange={(e) => setFormData({ ...formData, expectation: e.target.value })}
                      placeholder="Aku ingin produktif"
                      className="w-full h-[76px] sm:h-[80px] p-3 bg-white border border-[#D6D3D1] rounded-[8px] text-sm sm:text-base text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Bottom Row (Figma Frame 3: gap 27px, height 40px) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-stone-100 lg:border-t-0">
                  <p className="font-satoshi font-medium text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] text-[#78716C] max-w-[290px]">
                    Privasi aman. Nomor WhatsApp hanya untuk akses aplikasi dan pengujian resmi.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto h-10 px-5 sm:px-6 bg-[#F0441E] hover:bg-[#D93815] text-white font-satoshi font-medium text-sm sm:text-[16px] leading-[24px] tracking-[-0.01em] rounded-[6px] transition-all flex items-center justify-center whitespace-nowrap shadow-none active:scale-[0.98]"
                  >
                    <span>Amankan Tempatmu</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
