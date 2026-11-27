import type { Metadata } from 'next';
import ReferralJoinView from '@/components/ReferralJoinView';
import { parseReferralCode } from '@/lib/referral';

export const metadata: Metadata = {
  title: 'Ajakan Teman',
  description: 'Gabung ke Nataku dengan kode referral dari temanmu.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/join' },
};

// Opened from an invitation link. The code comes from the query string and is checked before use.
export default async function JoinPage({ searchParams }: { searchParams: Promise<{ code?: string | string[] }> }) {
  const { code } = await searchParams;
  return <ReferralJoinView code={parseReferralCode(code)} />;
}
