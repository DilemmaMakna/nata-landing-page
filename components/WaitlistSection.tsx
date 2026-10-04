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
    <section id="waitlist" className="w-full bg-[#FFFFFF] py-20 md:py-28 relative">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-[72px]">
        <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Coral Orange Announcement Card */}
          <div className="lg:col-span-6 bg-[#F0441E] rounded-[28px] p-8 sm:p-10 md:p-12 flex flex-col justify-between text-white shadow-md min-h-[380px] lg:min-h-[560px]">
            <div>
              <h2 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-[46px] leading-[1.18] tracking-tight text-[#FFF4F2] mb-6">
                Jadilah yang pertama mencoba Nataku.
              </h2>
              <p className="font-satoshi font-normal text-base sm:text-lg md:text-[20px] leading-[1.38] text-[#E7E5E4] max-w-[440px]">
                Kami membuka akses Android secara bertahap melalui jalur pengujian khusus agar pengalaman pengguna tetap lancar.
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Batch Beta Terbatas untuk 100 Mahasiswa Pertama</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {submitted ? (
              <div className="bg-[#FFF4F2] border border-[#F0441E]/30 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#F0441E] text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="font-satoshi font-bold text-2xl text-[#1F1B16] mb-2">
                  Tempatmu Sudah Diamankan!
                </h3>
                <p className="text-sm text-[#5C5346] leading-relaxed">
                  Terima kasih, <strong>{formData.name || 'Sobat Nata'}</strong>. Tim kami akan menghubungi via WhatsApp <strong>{formData.whatsapp || 'kamu'}</strong> saat giliran aksesmu siap dibuka.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Field 1: Nama */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-satoshi font-medium text-sm md:text-base text-[#44403C]">
                    Nama panggilan kamu
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Zaid"
                    className="w-full h-11 px-3.5 bg-white border border-[#D6D3D1] rounded-lg text-sm text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-satoshi font-medium text-sm md:text-base text-[#44403C]">
                    Email Aktif
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="zaid.mujahid1504@gmail.com"
                    className="w-full h-11 px-3.5 bg-white border border-[#D6D3D1] rounded-lg text-sm text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                  />
                </div>

                {/* Field 3: WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-satoshi font-medium text-sm md:text-base text-[#44403C]">
                    Nomor WhatsApp aktif
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="089745638278"
                    className="w-full h-11 px-3.5 bg-white border border-[#D6D3D1] rounded-lg text-sm text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                  />
                </div>

                {/* Field 4: Universitas */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-satoshi font-medium text-sm md:text-base text-[#44403C]">
                    Kampus / Universitas (opsional)
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    placeholder="IPB University"
                    className="w-full h-11 px-3.5 bg-white border border-[#D6D3D1] rounded-lg text-sm text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all"
                  />
                </div>

                {/* Field 5: Harapan */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-satoshi font-medium text-sm md:text-base text-[#44403C]">
                    Bagikan Harapanmu pada Nataku
                  </label>
                  <textarea
                    rows={3}
                    value={formData.expectation}
                    onChange={(e) => setFormData({ ...formData, expectation: e.target.value })}
                    placeholder="Aku ingin produktif"
                    className="w-full p-3 bg-white border border-[#D6D3D1] rounded-lg text-sm text-[#1F1B16] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#F0441E] focus:ring-1 focus:ring-[#F0441E] transition-all resize-none"
                  />
                </div>

                {/* Bottom Bar: Privacy & Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="font-satoshi font-medium text-xs sm:text-[13px] text-[#78716C] max-w-[320px]">
                    Privasi aman. Nomor WhatsApp hanya untuk akses aplikasi dan pengujian resmi.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#F0441E] hover:bg-[#D93815] text-white font-satoshi font-medium text-sm sm:text-base rounded-md shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
                  >
                    <span>Amankan Tempatmu</span>
                    <span>→</span>
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
