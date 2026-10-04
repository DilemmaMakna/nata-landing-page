'use client';

import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, Flame, Clock, Layers, Sparkles } from 'lucide-react';

interface ProblemItem {
  id: number;
  stageNumber: string;
  badge: string;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  quote: string;
  consequence: string;
}

const problemStages: ProblemItem[] = [
  {
    id: 1,
    stageNumber: '01',
    badge: 'Siklus Gagal',
    title: 'Kuburan Catatan & To-Do List Terabaikan',
    stat: '82%',
    statLabel: 'Mahasiswa Berhenti Pakai App To-Do List Setelah Hari ke-3',
    description: 'Download Notion, Trello, Todoist, lalu habiskan 2 jam menyusun template rapi. Di hari ke-4, aplikasinya cuma jadi pajangan di home screen dan tidak pernah dibuka lagi.',
    quote: '"Gue capek tiap minggu coba app produktivitas baru. Bikin setup-nya doang yang seru, pas ngerjain tugasnya tetep kelupaan..."',
    consequence: 'Waktu terbuang menata aplikasi, bukan menyelesaikan tugas nyata.'
  },
  {
    id: 2,
    stageNumber: '02',
    badge: 'Beban Mental',
    title: 'Overwhelmed & Panik Mendadak Tanpa Skala Prioritas',
    stat: '3 Jam/Hari',
    statLabel: 'Rata-rata Waktu Terbuang Akibat Bingung Mau Mulai dari Mana',
    description: 'Saat 5 mata kuliah memberikan tugas di minggu yang sama, otakmu mengalami decision fatigue. Saking banyaknya to-do list, kamu malah bengong, rebahan, dan berakhir prokrastinasi.',
    quote: '"Semua dosen bilang tugas mereka yang paling penting. Akhirnya malah scroll medsos karena panik ga tau mana yang harus disentuh duluan."',
    consequence: 'Tugas numpuk sampai detik-detik terakhir sebelum submission box ditutup.'
  },
  {
    id: 3,
    stageNumber: '03',
    badge: 'Chaos Informasi',
    title: 'Info Tugas Tercecer di Puluhan Grup WhatsApp Kelas',
    stat: '40+',
    statLabel: 'Grup Chat WhatsApp Aktif per Semester',
    description: 'Info revisi format makalah ada di grup A, link Google Drive bahan praktikum di grup B, deadline tugas kelompok di chat personal. Semua tenggelam oleh ratusan obrolan santai dan stiker.',
    quote: '"Pernah kelewat kuis 20% nilai akhir cuma gara-gara pengumuman aslab ketumpuk stiker meme di grup angkatan..."',
    consequence: 'Deadline krusial terlewat hanya karena kabar terselip di obrolan.'
  },
  {
    id: 4,
    stageNumber: '04',
    badge: 'Jebakan Medsos',
    title: 'Distraksi Tiap Kali Membuka HP Berniat Produktif',
    stat: '45 Menit',
    statLabel: 'Waktu Tersedot Algoritma Medsos Setiap Buka Handphone',
    description: 'Niat awal cuma mau cek apa tugas buat besok. Tapi saat layar terbuka, notifikasi Instagram atau TikTok langsung menarik perhatian. Begitu sadar, sudah 45 menit habis tanpa satu pun tugas tersentuh.',
    quote: '"Tadi niatnya buka HP mau liat deadline tugas praktikum. Tahu-tahu malah udah nonton video resep masakan di Reels."',
    consequence: 'Konsentrasi pecah sebelum sempat membuka catatan kuliah.'
  },
  {
    id: 5,
    stageNumber: '05',
    badge: 'Solusi Nataku',
    title: 'Saatnya Tata Semua Jadwalmu Langsung dari WhatsApp!',
    stat: '1 Alur',
    statLabel: 'Semua Tugas, Jadwal, dan Pengingat Beres Tanpa Gonta-Ganti Aplikasi',
    description: 'Nataku hadir langsung di tempat yang selalu kamu buka tiap pagi: WhatsApp. Tanpa perlu download app baru, asisten pintarmu menyapa jam 7 pagi dengan 3 tugas prioritas yang realistis.',
    quote: '"Pagi-pagi bangun udah ada chat rapi ngasih tau 3 tugas utama hari ini. Nggak pusing lagi mikir atau nyari-nyari info grup."',
    consequence: 'Tugas kuliah beres tepat waktu, pikiran tenang, waktu istirahat tetap ada.'
  }
];

export default function ProblemSection() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const current = problemStages.find((p) => p.id === activeStage) || problemStages[0];

  return (
    <section id="masalah" className="py-24 bg-[#F6F4F0] border-y border-[#EAE6DF] relative">
      <div className="container-nataku">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="badge-tag">
            <Layers size={14} className="text-[#FB6A35]" />
            <span>Alur Mengapa Kebanyakan Mahasiswa Gagal Terorganisir</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F1B16] tracking-tight mb-4">
            Bukan Kamu yang Pemalas, <br className="hidden sm:inline" />
            <span className="font-display italic font-normal text-[#FB6A35]">Sistem Lama yang Bikin Lelah.</span>
          </h2>
          <p className="text-base md:text-lg text-[#5C5346] leading-relaxed">
            Inilah 4 fase siklus frustrasi yang dialami hampir setiap mahasiswa sebelum akhirnya menemukan alur baru bersama Nataku.
          </p>
        </div>

        {/* Interactive Step Navigator (Mirrors Figma Component 8 States) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {problemStages.map((stage) => {
            const isActive = stage.id === activeStage;
            const isSolution = stage.id === 5;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isActive
                    ? isSolution
                      ? 'bg-[#529F58] text-white border-[#529F58] shadow-md scale-105'
                      : 'bg-[#FB6A35] text-white border-[#FB6A35] shadow-md scale-105'
                    : 'bg-white text-[#5C5346] border-[#DCD6CC] hover:border-[#FB6A35]/50'
                }`}
              >
                <span>Fase {stage.stageNumber}</span>
                <span className="hidden md:inline font-normal">
                  {stage.id === 5 ? '• Solusi Nataku' : `• ${stage.badge}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic State Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`rounded-3xl p-6 sm:p-10 transition-all duration-300 border ${
              activeStage === 5
                ? 'bg-[#FFFAF7] border-[#529F58]/40 shadow-xl'
                : 'bg-white border-[#EAE6DF] shadow-lg'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Story & Quotes */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        activeStage === 5
                          ? 'bg-[#529F58]/15 text-[#529F58]'
                          : 'bg-[#FFF1EB] text-[#FB6A35]'
                      }`}
                    >
                      {current.badge}
                    </span>
                    <span className="text-xs text-[#998E7D] font-mono">
                      Langkah {current.stageNumber} dari 05
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B16] mb-4 leading-snug">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5C5346] leading-relaxed mb-6">
                    {current.description}
                  </p>
                </div>

                {/* Quote Box */}
                <div className="p-4 rounded-xl bg-[#F6F4F0] border-l-4 border-[#FB6A35] mb-6">
                  <p className="text-xs sm:text-sm italic text-[#3D362D]">{current.quote}</p>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeStage === 1}
                    onClick={() => setActiveStage((prev) => Math.max(1, prev - 1))}
                    className="text-xs sm:text-sm font-semibold text-[#7A7061] hover:text-[#1F1B16] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← Fase Sebelumnya
                  </button>

                  {activeStage < 5 ? (
                    <button
                      onClick={() => setActiveStage((prev) => Math.min(5, prev + 1))}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FB6A35] hover:underline"
                    >
                      <span>Lihat Fase Selanjutnya</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <a
                      href="#waitlist"
                      className="btn-primary text-xs sm:text-sm py-2 px-5 bg-[#529F58] hover:bg-[#407D45]"
                    >
                      <span>Coba Nataku Sekarang</span>
                      <CheckCircle size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Stat Badge & Key Consequence */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#FCFBF9] border border-[#EAE6DF]">
                <div className="text-center mb-6">
                  <span
                    className={`text-4xl sm:text-5xl font-black block tracking-tight ${
                      activeStage === 5 ? 'text-[#529F58]' : 'text-[#DD4D37]'
                    }`}
                  >
                    {current.stat}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#7A7061] mt-2 max-w-xs mx-auto">
                    {current.statLabel}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-[#EAE6DF] text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#998E7D] mb-1">
                    Dampak Nyata
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1F1B16]">
                    {current.consequence}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
