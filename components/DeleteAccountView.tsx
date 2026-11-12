'use client';

import Link from 'next/link';
import DocShell from '@/components/DocShell';
import DeleteAccountForm from '@/components/DeleteAccountForm';
import { SUPPORT } from '@/lib/site';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const link = 'font-medium text-[#D93510] underline underline-offset-2';
const h2 = 'mb-2 text-[18px] font-bold text-[#1F1B16]';

export default function DeleteAccountView() {
  const { t } = useLocale();
  const d = t.del;
  return (
    <DocShell eyebrow={d.eyebrow} title={d.title} intro={d.intro} current="/delete-account">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8 text-[15px] leading-[1.65] text-[#57534E]">
          <section>
            <h2 className={h2}>{d.way1}</h2>
            <p>
              {d.way1Body[0]}
              <strong>{d.way1Body[1]}</strong>
              {d.way1Body[2]}
            </p>
          </section>
          <section>
            <h2 className={h2}>{d.way2}</h2>
            <p>{d.way2Body(SUPPORT.deletionDeadline)}</p>
          </section>
          <section>
            <h2 className={h2}>{d.deleted}</h2>
            <ul className="list-disc space-y-1 pl-5 marker:text-[#FF5000]">
              {d.deletedItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className={h2}>{d.kept}</h2>
            <p>
              {d.keptBody}
              <Link href="/legal/privacy" className={link}>
                {d.privacyLink}
              </Link>
              .
            </p>
          </section>
          <p>
            {d.helpPre}
            <a href={`mailto:${SUPPORT.email}`} className={link}>
              {SUPPORT.email}
            </a>
            {d.helpMid}
            <Link href="/support" className={link}>
              {d.helpLink}
            </Link>
            .
          </p>
        </div>

        <div className="rounded-[20px] bg-[#FFFAF7] p-5 ring-1 ring-[#EDE6E0] sm:p-7">
          <DeleteAccountForm />
        </div>
      </div>
    </DocShell>
  );
}
