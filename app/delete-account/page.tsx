import type { Metadata } from 'next';
import DeleteAccountView from '@/components/DeleteAccountView';

export const metadata: Metadata = {
  title: 'Hapus Akun dan Data',
  description: 'Ajukan penghapusan akun dan data pribadi Nataku Anda, tanpa perlu membuka aplikasi.',
  alternates: { canonical: '/delete-account' },
};

export default function DeleteAccountPage() {
  return <DeleteAccountView />;
}
