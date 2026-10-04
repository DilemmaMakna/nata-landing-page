'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1F1B16] text-[#998E7D] py-14 border-t border-[#3D362D] text-sm">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-[72px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#3D362D]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/assets/nataku-logo.png"
                alt="Nataku"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs text-[#7A7061] max-w-sm mt-1">
              Sistem manajemen tugas dan jadwal kuliah terintegrasi WhatsApp. Beres tugas tanpa pusing!
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#DCD6CC]">
            <a href="#hero" className="hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#protoSection" className="hover:text-white transition-colors">
              Alur Solusi
            </a>
            <a href="#quote" className="hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#sistem-inti" className="hover:text-white transition-colors">
              Sistem Inti
            </a>
            <a href="#waitlist" className="hover:text-white transition-colors">
              Daftar Tunggu
            </a>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7061]">
          <p>© 2026 Nataku. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="font-medium text-[#998E7D]">
            Dibangun dengan bangga oleh{' '}
            <span className="text-[#FF9575]">Lemma Studio (PT Masih Dilemma Makna)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
