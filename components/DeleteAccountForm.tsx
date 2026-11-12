'use client';

import React, { useState } from 'react';
import { SUPPORT } from '@/lib/site';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const field =
  'w-full rounded-[12px] border border-[#E7E0DA] bg-white px-4 py-3 text-[16px] text-[#1F1B16] outline-none transition-colors placeholder:text-[#A8A29E] focus:border-[#FF5000] focus:ring-2 focus:ring-[#FF5000]/20';

export default function DeleteAccountForm() {
  const { t } = useLocale();
  const f = t.del.form;
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    setError('');
    try {
      const res = await fetch('/api/delete-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: fd.get('email'),
          whatsapp: fd.get('whatsapp'),
          scope: fd.get('scope'),
          reason: fd.get('reason'),
          website: fd.get('website'),
          confirm: fd.get('confirm') === 'on',
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || f.failed);
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : f.failed);
      setState('idle');
    }
  }

  if (state === 'done') {
    return (
      <div role="status" className="rounded-[16px] border border-[#F0441E]/30 bg-[#FFF4F2] p-6">
        <h3 className="text-[20px] font-bold">{f.doneTitle}</h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[#57534E]">
          {f.doneBody(SUPPORT.deletionDeadline, SUPPORT.email)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="da-email" className="mb-1.5 block text-[14px] font-bold">
          {f.email}
        </label>
        <input
          id="da-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={field}
          placeholder={f.emailPh}
        />
      </div>

      <div>
        <label htmlFor="da-wa" className="mb-1.5 block text-[14px] font-bold">
          {f.wa} <span className="font-normal text-[#78716C]">{f.waOpt}</span>
        </label>
        <input
          id="da-wa"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={field}
          placeholder="0812xxxxxxxx"
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-[14px] font-bold">{f.scope}</legend>
        <label className="mb-2 flex cursor-pointer items-start gap-3 rounded-[12px] border border-[#E7E0DA] p-3 has-[:checked]:border-[#FF5000] has-[:checked]:bg-[#FFF4F2]">
          <input type="radio" name="scope" value="account" defaultChecked className="mt-1 accent-[#FF5000]" />
          <span className="text-[15px] leading-[1.5]">
            <strong>{f.scopeAccount}</strong>
            <br />
            <span className="text-[#57534E]">{f.scopeAccountDesc}</span>
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 rounded-[12px] border border-[#E7E0DA] p-3 has-[:checked]:border-[#FF5000] has-[:checked]:bg-[#FFF4F2]">
          <input type="radio" name="scope" value="data" className="mt-1 accent-[#FF5000]" />
          <span className="text-[15px] leading-[1.5]">
            <strong>{f.scopeData}</strong>
            <br />
            <span className="text-[#57534E]">{f.scopeDataDesc}</span>
          </span>
        </label>
      </fieldset>

      <div>
        <label htmlFor="da-reason" className="mb-1.5 block text-[14px] font-bold">
          {f.note} <span className="font-normal text-[#78716C]">{f.optional}</span>
        </label>
        <textarea id="da-reason" name="reason" rows={3} maxLength={500} className={field} />
      </div>

      {/* Honeypot anti-bot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.5] text-[#57534E]">
        <input type="checkbox" name="confirm" required className="mt-1 h-4 w-4 accent-[#FF5000]" />
        {f.confirm}
      </label>

      {error && (
        <p role="alert" className="rounded-[12px] bg-[#FFE4DE] px-4 py-3 text-[14px] text-[#9A2A0E]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex h-12 items-center justify-center rounded-[12px] bg-[#FF5000] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#D93510] disabled:opacity-60"
      >
        {state === 'sending' ? f.sending : f.submit}
      </button>
    </form>
  );
}
