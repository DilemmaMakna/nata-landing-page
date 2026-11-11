import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';

export const metadata: Metadata = {
  title: 'Pusat Bantuan',
  description: 'Hubungi tim Nataku, temukan jawaban pertanyaan umum, dan akses kebijakan serta penghapusan akun.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return <SupportView />;
}
