import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nataku — Bikin Tugas Kuliah Beneran Beres',
  description: 'Nataku menyatukan jadwal kuliah dan tugasmu ke dalam satu alur rapi. Setiap pagi disapa lewat WhatsApp, selesaikan tugas tanpa ribet buka-tutup aplikasi.',
  keywords: ['to-do list mahasiswa', 'manajemen tugas kuliah', 'whatsapp bot tugas', 'nataku', 'lemma bermakna'],
  openGraph: {
    title: 'Nataku — Bikin Tugas Kuliah Beneran Beres',
    description: 'Selesaikan tugas kuliah langsung dari WhatsApp. Dapatkan asisten harian jam 7 pagi dan pantau batas waktu tanpa panik.',
    url: 'https://nataku.id',
    siteName: 'Nataku',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
