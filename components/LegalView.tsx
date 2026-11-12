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
  const body = useMemo(
    () =>
      source
        .split('\n')
        .filter((l) => !l.startsWith('**'))
        .join('\n'),
    [source],
  );
  const headings = useMemo(() => legalHeadings(source), [source]);
  // Baris metadata (Berlaku sejak / Pembaruan terakhir / Versi) jadi subjudul halaman.
  const meta = source
    .split('\n')
    .filter((l) => l.startsWith('**'))
    .join('  ·  ')
    .replace(/\*\*/g, '');

  return (
    <DocShell
      eyebrow={t.doc.legalEyebrow}
      title={t.doc.titles[doc]}
      intro={meta}
      current={`/legal/${doc}`}
      aside={<TocNav key={`${doc}-${locale}`} headings={headings} />}
    >
      <section className="mb-8 rounded-[16px] bg-[#FFFAF7] p-5 ring-1 ring-[#EDE6E0]" aria-labelledby="legal-summary">
        <h2 id="legal-summary" className="text-[16px] font-bold text-[#1F1B16]">
          {t.doc.summaryTitle}
        </h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.6] text-[#57534E]">
          {t.doc.summary[doc].map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <LegalDocument source={body} />
    </DocShell>
  );
}
