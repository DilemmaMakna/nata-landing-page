import { NextResponse } from 'next/server';
import { SUPPORT } from '@/lib/site';

/*
 * Menerima permintaan hapus akun/data dari formulir web (/delete-account).
 * Permintaan diteruskan ke DELETION_WEBHOOK_URL (mis. Slack, Make/n8n, atau endpoint backend Nataku).
 * Tanpa webhook di produksi, route menolak dengan 503 agar pengguna tidak mengira permintaannya tercatat.
 */

const headers = { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow' };
const reply = (body: unknown, status = 200) => NextResponse.json(body, { status, headers });

const hits = new Map<string, { count: number; until: number }>();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  try {
    if (!origin || new URL(origin).host !== host) return reply({ error: 'Forbidden' }, 403);
  } catch {
    return reply({ error: 'Forbidden' }, 403);
  }
  if (!request.headers.get('content-type')?.includes('application/json'))
    return reply({ error: 'Unsupported media type' }, 415);

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const hit = hits.get(ip);
  if (hit && hit.until > now && hit.count >= 5)
    return reply({ error: 'Terlalu banyak percobaan. Coba lagi beberapa menit lagi.' }, 429);
  if (!hit || hit.until <= now) {
    if (hits.size >= 5000) hits.delete(hits.keys().next().value!);
    hits.set(ip, { count: 1, until: now + 10 * 60_000 });
  } else hit.count++;

  try {
    const raw = await request.text();
    if (raw.length > 2000) return reply({ error: 'Permintaan terlalu besar.' }, 413);
    const b = JSON.parse(raw) as Record<string, unknown>;

    // Honeypot: bot mengisi field tersembunyi ini. Pura-pura sukses.
    if (typeof b.website === 'string' && b.website) return reply({ success: true });

    const email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : '';
    const whatsapp = typeof b.whatsapp === 'string' ? b.whatsapp.replace(/\D/g, '') : '';
    const scope = b.scope === 'data' ? 'data' : 'account';
    const reason = typeof b.reason === 'string' ? b.reason.trim().slice(0, 500) : '';

    if (!EMAIL.test(email) || email.length > 254)
      return reply({ error: 'Masukkan email akun Nataku yang valid.' }, 400);
    if (whatsapp && (whatsapp.length < 9 || whatsapp.length > 15))
      return reply({ error: 'Format nomor WhatsApp tidak valid.' }, 400);
    if (b.confirm !== true) return reply({ error: 'Centang pernyataan konfirmasi untuk melanjutkan.' }, 400);

    const entry = {
      type: 'nataku.deletion_request',
      email,
      whatsapp: whatsapp || null,
      scope, // 'account' = hapus akun + semua data; 'data' = akun tetap, hapus data tertentu
      reason: reason || null,
      requestedAt: new Date().toISOString(),
      status: 'pending_verification',
    };

    const webhook = process.env.DELETION_WEBHOOK_URL;
    if (!webhook) {
      if (process.env.NODE_ENV === 'production') {
        console.error('[Nataku deletion] DELETION_WEBHOOK_URL belum diatur; permintaan ditolak.');
        return reply({ error: `Layanan formulir sedang tidak tersedia. Kirim permintaan ke ${SUPPORT.email}.` }, 503);
      }
      console.log('[Nataku deletion request - dev]', entry);
      return reply({ success: true });
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Webhook ${res.status}`);
    return reply({ success: true });
  } catch (error) {
    console.error('Deletion request error:', error);
    return reply({ error: `Terjadi kesalahan. Coba lagi atau kirim email ke ${SUPPORT.email}.` }, 500);
  }
}
