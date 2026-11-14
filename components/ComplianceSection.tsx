'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function ComplianceSection() {
  const { t } = useLocale();

  return (
    <section id="tentang-nataku" className="w-full bg-[#FFF4EE] py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-[1136px] gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-0">
        <div className="lg:col-span-5">
          <span className="mb-3 inline-flex rounded-[6px] bg-[#FFE0D2] px-3 py-1 font-satoshi text-[13px] font-medium uppercase tracking-[0.12em] text-[#C73B16]">
            {t.compliance.eyebrow}
          </span>
          <h2 className="font-satoshi text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#1F1B16] sm:text-4xl">
            {t.compliance.title}
          </h2>
        </div>

        <div className="space-y-5 lg:col-span-7">
          <p className="font-satoshi text-base leading-7 text-[#44403C] sm:text-lg">{t.compliance.purpose}</p>
          <div className="rounded-[12px] border border-[#F2C7B5] bg-white/70 p-5 sm:p-6">
            <h3 className="mb-2 font-satoshi text-lg font-bold text-[#1F1B16]">{t.compliance.safetyTitle}</h3>
            <p className="font-satoshi text-sm leading-6 text-[#57534E] sm:text-base">{t.compliance.safetyBody}</p>
          </div>
          <p className="font-satoshi text-sm leading-6 text-[#57534E]">
            {t.compliance.developer}{' '}
            <Link href="/legal/privacy" className="font-medium text-[#C73B16] underline underline-offset-4">
              {t.compliance.privacy}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
