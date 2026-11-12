import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalView from '@/components/LegalView';
import type { LegalDocId } from '@/lib/legal-content';

// Metadata statis dalam Bahasa Indonesia (bahasa default). Isi halaman mengikuti pilihan bahasa pengguna.
const META: Record<LegalDocId, { title: string; description: string }> = {
  privacy: {
    title: 'Kebijakan Privasi',
    description:
      'Bagaimana Nataku mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda, termasuk hak Anda atas data tersebut.',
  },
  terms: {
    title: 'Syarat dan Ketentuan',
    description:
      'Syarat dan ketentuan penggunaan layanan Nataku, termasuk langganan, pembayaran, dan batasan tanggung jawab.',
  },
  security: {
    title: 'Keamanan Data',
    description: 'Langkah teknis dan organisasi yang diterapkan Nataku untuk melindungi data pribadi pengguna.',
  },
};

const isDoc = (v: string): v is LegalDocId => Object.hasOwn(META, v);

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(META) as LegalDocId[]).map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: { params: Promise<{ doc: string }> }): Promise<Metadata> {
  const { doc } = await params;
  if (!isDoc(doc)) return {};
  return { title: META[doc].title, description: META[doc].description, alternates: { canonical: `/legal/${doc}` } };
}

export default async function LegalPage({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  if (!isDoc(doc)) notFound();
  return <LegalView doc={doc} />;
}
