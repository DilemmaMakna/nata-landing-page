'use client';

import { useState } from 'react';
import { STORE_LINKS } from '@/lib/site';

const primary =
  'inline-flex w-full items-center justify-center rounded-[12px] bg-[#FF5000] px-5 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#D93510]';
const secondary =
  'inline-flex w-full items-center justify-center rounded-[12px] border border-[#E7E0DA] px-5 py-3 text-[16px] font-medium text-[#1F1B16] transition-colors hover:border-[#FF5000] hover:text-[#D93510]';

// Shows the friend's referral code with copy, open-in-app, and store buttons.
export default function ReferralJoinView({ code }: { code: string | null }) {
  const [copied, setCopied] = useState(false);

  if (!code) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-[480px] flex-col justify-center gap-6 px-4 py-16">
        <h1 className="text-[28px] font-bold tracking-[-0.02em] text-[#1F1B16]">Link undangan tidak valid</h1>
        <p className="text-[16px] text-[#78716C]">Minta temanmu mengirim ulang link undangan dari aplikasi Nataku.</p>
        <StoreButtons />
      </main>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[480px] flex-col justify-center gap-6 px-4 py-16">
      <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#D93510]">Undangan Nataku</p>
      <h1 className="text-[28px] font-bold tracking-[-0.02em] text-[#1F1B16]">Temanmu mengajakmu pakai Nataku</h1>
      <p className="text-[16px] text-[#78716C]">
        Masukkan kode ini di aplikasi untuk mendapat harga khusus bulan pertama.
      </p>
      <div className="rounded-[16px] bg-[#FFFAF7] p-5 ring-1 ring-[#EDE6E0]">
        <p className="text-[13px] text-[#78716C]">Kode referral</p>
        <p className="mt-1 break-all font-mono text-[24px] font-bold tracking-[0.04em] text-[#1F1B16]">{code}</p>
        <button type="button" onClick={copy} className={`${secondary} mt-4`}>
          {copied ? 'Kode sudah disalin' : 'Salin kode'}
        </button>
      </div>
      <a href={`nataku://join?code=${encodeURIComponent(code)}`} className={primary}>
        Buka di aplikasi Nataku
      </a>
      <StoreButtons />
    </main>
  );
}

// Store links for people who do not have the app yet.
function StoreButtons() {
  return (
    <div className="flex flex-col gap-3">
      <a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer" className={secondary}>
        Unduh di Google Play
      </a>
      <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer" className={secondary}>
        Unduh di App Store
      </a>
    </div>
  );
}
