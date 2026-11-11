'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocale } from '@/lib/i18n/LocaleProvider';

/*
 * Kerangka halaman dalam (legal, bantuan, hapus akun). Memakai Navbar dan Footer yang sama dengan landing.
 * `aside` (opsional) = kolom kanan sticky, dipakai untuk daftar isi.
 */
export default function DocShell({
  eyebrow,
  title,
  intro,
  current,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  current: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  const { t } = useLocale();
  const tabs = [
    { href: '/legal/privacy', label: t.doc.tabs.privacy },
    { href: '/legal/terms', label: t.doc.tabs.terms },
    { href: '/legal/security', label: t.doc.tabs.security },
    { href: '/support', label: t.doc.tabs.support },
    { href: '/delete-account', label: t.doc.tabs.delete },
  ];

  return (
    <div id="top" className="min-h-screen bg-[#FFFAF7] font-satoshi text-[#1F1B16]">
      <Navbar solid />

      <main className="mx-auto max-w-[1136px] px-5 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-0">
        <span className="inline-flex rounded-[6px] bg-[#FFE4DE] px-2.5 py-1 text-[12px] font-medium leading-[16px] text-[#D93510]">{eyebrow}</span>
        <h1 className="mt-3 text-[34px] font-bold leading-[1.1] tracking-[-0.035em] sm:text-[48px]">{title}</h1>
        {intro && <p className="mt-4 max-w-[640px] text-[17px] leading-[1.6] text-[#57534E]">{intro}</p>}

        <nav
          aria-label={t.doc.navLabel}
          className="mt-8 flex w-full max-w-full gap-1 overflow-x-auto rounded-full bg-[#F1EFED] p-1.5 sm:w-fit [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={n.href === current ? 'page' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium leading-[20px] transition-colors ${
                n.href === current
                  ? 'bg-white text-[#1F1B16] shadow-[0_1px_3px_rgba(31,27,22,0.08)]'
                  : 'text-[#78716C] hover:text-[#1F1B16]'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* `aside` dipasang sekali; di mobile tampil di atas konten (order-first), di desktop jadi kolom kanan. */}
        <div className={`mt-8 flex flex-col ${aside ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start lg:gap-10' : ''}`}>
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <div className="rounded-[24px] border border-[#EDE6E0] bg-white p-6 sm:p-10">{children}</div>
          </div>
          {aside && <div className="order-first lg:order-none lg:col-start-2 lg:row-start-1">{aside}</div>}
        </div>
      </main>

      <Footer />
    </div>
  );
}
