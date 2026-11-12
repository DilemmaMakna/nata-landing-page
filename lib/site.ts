export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nataku.dilemma-makna.com').replace(/\/$/, '');
export const SITE_NAME = 'Nataku';
export const SITE_TITLE = 'Nataku — Bikin Tugas Kuliah Beneran Beres';
export const SITE_DESCRIPTION =
  'Nataku menyatukan jadwal kuliah dan tugasmu ke dalam satu alur rapi. Setiap pagi disapa lewat WhatsApp, selesaikan tugas tanpa ribet buka-tutup aplikasi.';
export const COMPANY = {
  name: 'PT Masih Dilemma Makna',
  brand: 'Lemma',
  url: 'https://dilemma-makna.com',
  email: 'hello@dilemma-makna.com',
  phone: '+62-851-4492-2167',
  address: {
    streetAddress: 'Jl. Jayadewata Blok N IX No. 28, Balumbang Jaya, Bogor Barat',
    addressLocality: 'Kota Bogor',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
  },
};

// Kanal dukungan publik. Dipakai /support dan /delete-account (syarat Play Store / App Store).
export const SUPPORT = {
  email: COMPANY.email,
  whatsappUrl: 'https://wa.me/6285144922167',
  whatsappLabel: '+62 851-4492-2167',
  responseTime: '3 x 24 jam (hari kerja)',
  deletionDeadline: '30 hari',
};
