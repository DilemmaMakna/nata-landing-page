'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { messages, type Locale, type Messages } from './messages';

type Ctx = { locale: Locale; t: Messages; setLocale: (l: Locale) => void };

const LocaleContext = createContext<Ctx | null>(null);
const KEY = 'nataku-locale';

export function useLocale() {
  const c = useContext(LocaleContext);
  if (!c) throw new Error('useLocale must be used inside LocaleProvider');
  return c;
}

/**
 * Bahasa awal selalu Indonesia (sama dengan HTML hasil render server). Pilihan pengguna
 * disimpan di localStorage dan dipulihkan setelah hidrasi; perangkat berbahasa Inggris
 * tidak otomatis dialihkan agar tampilan reviewer store konsisten.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- pulihkan pilihan setelah hidrasi
      if (saved === 'en' || saved === 'id') setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const value = useMemo(() => ({ locale, t: messages[locale], setLocale }), [locale, setLocale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
