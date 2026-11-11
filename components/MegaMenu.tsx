'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PixelMascot from '@/components/PixelMascot';
import ProtectedContact from '@/components/ui/ProtectedContact';
import { useLocale } from '@/lib/i18n/LocaleProvider';

/* ---------- Ikon ---------- */
const ICONS: Record<string, React.ReactNode> = {
  target: (<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.9" fill="currentColor" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  chat: (<path d="M4 5.5h16V16H9.5L5 19.5V16H4z" />),
  info: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5M12 8v.01" /></>),
  help: (<><circle cx="12" cy="12" r="8.5" /><path d="M9.6 9.6a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.1.9-1.1 1.7M12 17v.01" /></>),
  shield: (<path d="M12 3l7.5 2.8v5.7c0 4.3-3.1 7.7-7.5 9-4.4-1.3-7.5-4.7-7.5-9V5.8z" />),
  file: (<path d="M7 3h7l4 4v14H7zM14 3v4h4M9.5 12h5M9.5 16h5" />),
  lock: (<><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>),
  trash: (<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10.5 11v6M13.5 11v6" />),
};

function Icon({ name }: { name: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

type Item = { href: string; icon: string; title: string; desc: string };

function MenuItem({ item, onNavigate }: { item: Item; onNavigate: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group flex items-center gap-3.5 rounded-[14px] p-2.5 transition-colors hover:bg-[#FFF4F2] focus-visible:bg-[#FFF4F2] focus-visible:outline-none"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#EDE6E0] bg-white text-[#F0441E] transition-colors group-hover:border-[#F0441E]/30">
        <Icon name={item.icon} />
      </span>
      <span className="min-w-0">
        <span className="block font-satoshi text-[15px] font-medium leading-[20px] text-[#1F1B16]">{item.title}</span>
        <span className="block font-satoshi text-[13px] leading-[18px] text-[#78716C]">{item.desc}</span>
      </span>
    </Link>
  );
}

/* ---------- Menu desktop + mobile ---------- */
export default function MegaMenu({ scrolled }: { scrolled: boolean }) {
  const { t } = useLocale();
  const [open, setOpen] = useState<'features' | 'support' | null>(null);
  const [mobile, setMobile] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(0);

  const m = t.nav.mega;
  const featureItems: Item[] = [
    { href: '/#sistem-inti', icon: 'target', ...m.features[0] },
    { href: '/#sistem-inti', icon: 'calendar', ...m.features[1] },
    { href: '/#sistem-inti', icon: 'chat', ...m.features[2] },
    { href: '/#quote', icon: 'info', ...m.features[3] },
  ];
  const supportItems: Item[] = [
    { href: '/support', icon: 'help', ...m.support[0] },
    { href: '/#faq', icon: 'chat', ...m.support[1] },
    { href: '/legal/privacy', icon: 'shield', ...m.support[2] },
    { href: '/legal/terms', icon: 'file', ...m.support[3] },
    { href: '/legal/security', icon: 'lock', ...m.support[4] },
    { href: '/delete-account', icon: 'trash', ...m.support[5] },
  ];

  const closeAll = useCallback(() => {
    setOpen(null);
    setMobile(false);
  }, []);

  useEffect(() => {
    if (!open && !mobile) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) closeAll();
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeAll();
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, mobile, closeAll]);

  const hoverOpen = (id: 'features' | 'support') => {
    window.clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  const base = `font-satoshi text-[14px] sm:text-[15px] font-medium leading-[20px] tracking-[-0.01em] transition-colors ${
    scrolled ? 'text-[#57534E] hover:text-[#F0441E]' : 'text-[#FFF4F2]/90 hover:text-white'
  }`;

  const trigger = (id: 'features' | 'support', label: string) => (
    <div key={id} className="relative" onMouseEnter={() => hoverOpen(id)} onMouseLeave={hoverClose}>
      <button
        type="button"
        aria-expanded={open === id}
        aria-haspopup="true"
        onClick={() => setOpen(open === id ? null : id)}
        className={`flex items-center gap-1 ${base}`}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform duration-200 ${open === id ? 'rotate-180' : ''}`}>
          <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );

  return (
    <div ref={root} className="contents">
      {/* Desktop */}
      <nav className="hidden items-center gap-7 md:flex" aria-label="Menu utama">
        <Link href="/#hero" className={base}>{t.nav.home}</Link>
        {trigger('features', t.nav.features)}
        <Link href="/#pricing" className={base}>{t.nav.pricing}</Link>
        {trigger('support', t.nav.resources)}
      </nav>

      {/* Panel megamenu */}
      {open && (
        <div
          className="absolute left-1/2 top-[calc(100%+10px)] z-50 hidden w-[min(600px,100%)] -translate-x-1/2 md:block"
          onMouseEnter={() => hoverOpen(open)}
          onMouseLeave={hoverClose}
        >
          <div className="nata-mega-in grid grid-cols-[1fr_230px] gap-3 rounded-[22px] border border-stone-200/80 bg-white p-3 shadow-[0_24px_64px_rgba(31,27,22,0.16)]">
            <div className="flex flex-col justify-center gap-0.5 py-1">
              {(open === 'features' ? featureItems : supportItems).map((it) => (
                <MenuItem key={it.title} item={it} onNavigate={closeAll} />
              ))}
            </div>

            {open === 'features' ? (
              <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[16px] bg-[#FDE3D6] p-5">
                <p className="font-serif text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#A8300F]">
                  “{m.featuresCard.quote}”
                </p>
                <div>
                  <p className="mb-2 font-satoshi text-[13px] text-[#A8300F]/80">{m.featuresCard.who}</p>
                  <div className="-mb-1 flex justify-end"><PixelMascot px={7} /></div>
                </div>
              </div>
            ) : (
              <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[16px] bg-[#F0441E] p-5 text-white">
                <div>
                  <p className="font-satoshi text-[22px] font-bold leading-[1.15] tracking-[-0.03em]">{m.supportCard.title}</p>
                  <p className="mt-1.5 font-satoshi text-[14px] leading-[20px] text-[#FFF4F2]/90">{m.supportCard.body}</p>
                  <ProtectedContact
                    channel="nataku"
                    navigate
                    className="mt-4 inline-flex h-9 items-center rounded-[6px] bg-white px-4 font-satoshi text-[14px] font-medium text-[#D93510] transition-colors hover:bg-[#FFF4F2]"
                  >
                    {m.supportCard.cta}
                  </ProtectedContact>
                </div>
                <div className="-mb-1 flex justify-end"><PixelMascot px={7} frame={1} /></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tombol menu mobile */}
      <button
        type="button"
        aria-label={t.nav.menu}
        aria-expanded={mobile}
        onClick={() => setMobile((v) => !v)}
        className={`order-3 ml-1.5 flex h-9 w-9 items-center justify-center rounded-[6px] md:hidden ${scrolled ? 'text-[#57534E] hover:bg-[#F5F2EF]' : 'text-[#FFF4F2] hover:bg-white/15'}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {mobile ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {mobile && (
        <div className="nata-mega-in absolute inset-x-0 top-[calc(100%+10px)] z-50 max-h-[calc(100vh-110px)] overflow-y-auto rounded-[22px] border border-stone-200/80 bg-white p-3 shadow-[0_24px_64px_rgba(31,27,22,0.16)] md:hidden">
          <Link href="/#hero" onClick={closeAll} className="block rounded-[12px] px-3 py-2.5 font-satoshi text-[15px] font-medium text-[#1F1B16] hover:bg-[#FFF4F2]">{t.nav.home}</Link>
          <p className="px-3 pb-1 pt-3 font-satoshi text-[12px] font-medium uppercase tracking-[0.14em] text-[#A8A29E]">{t.nav.features}</p>
          {featureItems.map((it) => <MenuItem key={it.title} item={it} onNavigate={closeAll} />)}
          <Link href="/#pricing" onClick={closeAll} className="mt-1 block rounded-[12px] px-3 py-2.5 font-satoshi text-[15px] font-medium text-[#1F1B16] hover:bg-[#FFF4F2]">{t.nav.pricing}</Link>
          <p className="px-3 pb-1 pt-3 font-satoshi text-[12px] font-medium uppercase tracking-[0.14em] text-[#A8A29E]">{t.nav.resources}</p>
          {supportItems.map((it) => <MenuItem key={it.title} item={it} onNavigate={closeAll} />)}
          <ProtectedContact
            channel="nataku"
            navigate
            className="mt-3 flex h-11 w-full items-center justify-center rounded-[10px] bg-[#F0441E] font-satoshi text-[15px] font-medium text-white hover:bg-[#D93815]"
          >
            {t.nav.cta}
          </ProtectedContact>
        </div>
      )}
    </div>
  );
}
