'use client';

import { useMemo } from 'react';
import DocShell from '@/components/DocShell';
import LegalDocument, { legalHeadings } from '@/components/LegalDocument';
import TocNav from '@/components/TocNav';
import { LEGAL_DOCS, type LegalDocId } from '@/lib/legal-content';
import { LEGAL_DOCS_EN } from '@/lib/legal-en';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function LegalView({ doc }: { doc: LegalDocId }) {
  const { t, locale } = useLocale();
  const source = (locale === 'en' ? LEGAL_DOCS_EN : LEGAL_DOCS)[doc];
  // Isi dokumen tanpa baris metadata (sudah tampil sebagai subjudul).
  const body = useMemo(() => source.split('\n').filter((l) => !l.startsWith('**')).join('\n'), [source]);
  const headings = useMemo(() => legalHeadings(source), [source]);
  // Baris metadata (Berlaku sejak / Pembaruan terakhir / Versi) jadi subjudul halaman.
  const meta = source.split('\n').filter((l) => l.startsWith('**')).join('  ·  ').replace(/\*\*/g, '');

  return (
    <DocShell
      eyebrow={t.doc.legalEyebrow}
      title={t.doc.titles[doc]}
      intro={meta}
      current={`/legal/${doc}`}
      aside={<TocNav key={`${doc}-${locale}`} headings={headings} />}
    >
      <LegalDocument source={body} />
    </DocShell>
  );
}
