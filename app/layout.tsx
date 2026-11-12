import type { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Nataku' },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'to-do list mahasiswa',
    'manajemen tugas kuliah',
    'aplikasi tugas kuliah',
    'pengingat tugas whatsapp',
    'whatsapp bot tugas',
    'jadwal kuliah',
    'pengingat deadline tugas',
    'aplikasi produktivitas mahasiswa',
    'nataku',
    'lemma bercerita',
  ],
  authors: [{ name: 'Lemma Bercerita', url: 'https://dilemma-makna.com' }],
  creator: 'Lemma Bercerita',
  publisher: 'PT Masih Dilemma Makna',
  category: 'productivity',
  alternates: {
    canonical: '/',
    types: { 'text/markdown': '/index.md' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      'Selesaikan tugas kuliah langsung dari WhatsApp. Dapatkan asisten harian jam 7 pagi dan pantau batas waktu tanpa panik.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#F0441E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,600;0,8..60,700;1,8..60,600;1,8..60,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
        <JsonLd />
      </body>
    </html>
  );
}
