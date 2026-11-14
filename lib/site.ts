export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nataku.dilemma-makna.com').replace(/\/$/, '');
export const SITE_NAME = 'Nataku';
export const SITE_TITLE = 'Nataku — Bikin Tugas Kuliah Beneran Beres';
export const SITE_DESCRIPTION =
  'Nataku adalah aplikasi produktivitas mahasiswa untuk mengatur tugas, jadwal kuliah, dan pengingat WhatsApp dalam satu alur rapi.';
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

// Link toko untuk tombol CTA navbar. Placeholder sampai listing Play Store dan App Store live.
export const STORE_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=com.lemma.nataku',
  ios: 'https://apps.apple.com/app/nataku/id0000000000',
};
