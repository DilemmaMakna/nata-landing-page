'use client';

import Link from 'next/link';
import DocShell from '@/components/DocShell';
import { faqsFor } from '@/lib/faq';
import { COMPANY, SUPPORT } from '@/lib/site';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const link = 'font-medium text-[#D93510] underline underline-offset-2 hover:text-[#FF5000]';

export default function SupportView() {
  const { t, locale } = useLocale();
  const s = t.support;
  const a = COMPANY.address;
  return (
    <DocShell eyebrow={s.eyebrow} title={s.title} intro={s.intro(s.responseTime)} current="/support">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[16px] bg-[#FFFAF7] p-5 ring-1 ring-[#EDE6E0]">
          <h2 className="text-[16px] font-bold">{s.email}</h2>
          <a href={`mailto:${SUPPORT.email}?subject=${encodeURIComponent(s.emailSubject)}`} className={`${link} mt-1 block break-all text-[16px]`}>{SUPPORT.email}</a>
          <p className="mt-1 text-[13px] text-[#78716C]">{s.emailNote}</p>
        </div>
        <div className="rounded-[16px] bg-[#FFFAF7] p-5 ring-1 ring-[#EDE6E0]">
          <h2 className="text-[16px] font-bold">{s.wa}</h2>
          <a href={`${SUPPORT.whatsappUrl}?text=${encodeURIComponent(s.waText)}`} target="_blank" rel="noopener noreferrer" className={`${link} mt-1 block text-[16px]`}>{SUPPORT.whatsappLabel}</a>
          <p className="mt-1 text-[13px] text-[#78716C]">{s.waNote}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">{s.links}</h2>
        <ul className="mt-3 space-y-2 text-[15px]">
          <li><Link href="/legal/privacy" className={link}>{t.doc.titles.privacy}</Link></li>
          <li><Link href="/legal/terms" className={link}>{t.doc.titles.terms}</Link></li>
          <li><Link href="/legal/security" className={link}>{t.doc.titles.security}</Link></li>
          <li><Link href="/delete-account" className={link}>{s.deleteLink}</Link></li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">{s.faq}</h2>
        <div className="mt-4 divide-y divide-[#EDE6E0] rounded-[16px] border border-[#EDE6E0]">
          {faqsFor(locale).map((f) => (
            <details key={f.question} className="group p-4 sm:px-5">
              <summary className="cursor-pointer text-[15px] font-bold marker:text-[#FF5000]">{f.question}</summary>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#57534E]">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 text-[14px] leading-[1.65] text-[#57534E]">
        <h2 className="mb-1 text-[16px] font-bold text-[#1F1B16]">{s.developer}</h2>
        {COMPANY.name} (Lemma Bercerita)<br />
        {a.streetAddress}, {a.addressLocality}, {a.addressRegion}
      </section>
    </DocShell>
  );
}
