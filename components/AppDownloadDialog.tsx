'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { STORE_LINKS } from '@/lib/site';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const option =
  'flex w-full items-center justify-center rounded-[12px] border border-[#E7E0DA] px-4 py-3 font-satoshi font-medium text-[16px] text-[#1F1B16] transition-colors hover:border-[#FF5000] hover:text-[#D93510]';

// Tombol yang membuka dialog pilihan aplikasi Android dan iOS.
export default function AppDownloadDialog({ className, children }: { className: string; children: ReactNode }) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    // Tutup dialog dengan tombol Escape.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        {children}
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1F1B16]/50 p-5" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-[360px] rounded-[20px] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={titleId} className="font-satoshi text-[20px] font-bold text-[#1F1B16]">
              {t.nav.downloadTitle}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              <a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer" className={option}>
                {t.nav.downloadAndroid}
              </a>
              <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer" className={option}>
                {t.nav.downloadIos}
              </a>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-[12px] px-4 py-2.5 font-satoshi text-[15px] font-medium text-[#78716C] hover:text-[#1F1B16]"
            >
              {t.nav.downloadClose}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
