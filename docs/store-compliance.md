# Kepatuhan Play Store & App Store

Situs ini live di **https://nataku.dilemma-makna.com** (subdomain mandiri dari `dilemma-makna.com`).

## URL yang diisi di store console

| Kolom di store | URL |
| --- | --- |
| Privacy Policy URL (Play Console & App Store Connect) | `https://nataku.dilemma-makna.com/legal/privacy` |
| Terms of Use / EULA | `https://nataku.dilemma-makna.com/legal/terms` |
| Support URL (App Store Connect) / kontak developer | `https://nataku.dilemma-makna.com/support` |
| Marketing URL (opsional) | `https://nataku.dilemma-makna.com` |
| Account deletion URL (Play Console > Data safety > Delete account URL) | `https://nataku.dilemma-makna.com/delete-account` |

Semua halaman statis, tanpa login, tanpa modal, dan bisa dibuka crawler/reviewer tanpa JavaScript.

## Sebelum submit (hal yang tidak bisa diselesaikan dari repo ini)

1. **DNS + deploy**: arahkan `nataku` CNAME ke hosting (Vercel) dan set `NEXT_PUBLIC_SITE_URL=https://nataku.dilemma-makna.com`.
2. **`DELETION_WEBHOOK_URL`** wajib diisi di produksi. Tanpa ini `/api/delete-request` sengaja membalas 503 (supaya pengguna tidak mengira permintaannya tercatat). Arahkan ke Slack/Make/n8n atau endpoint backend Nataku. Payload: `email`, `whatsapp`, `scope` (`account` | `data`), `reason`, `requestedAt`, `status`.
3. **Proses penghapusan nyata**: formulir hanya mencatat permintaan. Backend Nataku harus benar-benar menghapus akun/data dalam 30 hari (sesuai Kebijakan Privasi) dan fitur **Pengaturan > Hapus Akun** harus ada di aplikasi (Play & Apple mewajibkan hapus akun di dalam app bila ada pembuatan akun).
4. **Samakan Data Safety / App Privacy** dengan isi `/legal/privacy` (nama, email, nomor WhatsApp, konten tugas, data teknis).
5. **Tanggal dokumen legal** ("Berlaku sejak 28 September 2026") dan kontak DPO sudah tercantum; cek ulang sebelum submit.

## Akun demo untuk reviewer (perlu dibuat di backend produksi)

Reviewer Google/Apple tidak bisa mendaftar lewat WhatsApp/verifikasi email Anda, jadi siapkan 1 akun siap pakai:

- [ ] Buat akun produksi, mis. `reviewer@dilemma-makna.com`, email **sudah terverifikasi** (tanpa OTP/magic link yang perlu inbox).
- [ ] Password tetap, tidak kedaluwarsa, tanpa 2FA.
- [ ] Isi data contoh: 5-8 tugas dengan tenggat berbeda, jadwal kuliah mingguan, beberapa kebiasaan, agar Today's Focus, kalender, dan skor produktivitas terlihat berisi.
- [ ] Langganan: beri akses tier berbayar (On Track) tanpa pembayaran supaya reviewer bisa melihat seluruh fitur.
- [ ] Fitur WhatsApp Daily Digest: sediakan toggle/mode demo, karena reviewer tidak punya nomor WhatsApp terdaftar. Jelaskan di Review Notes.
- [ ] Isi **App access / Sign-in information** (Play Console) dan **App Review Information > Sign-in required** (App Store Connect) dengan email + password di atas, plus catatan singkat langkah menguji.
- [ ] Jangan pakai akun ini untuk pengguna asli; pastikan "Hapus Akun" tidak merusak akun demo (atau beri tahu di catatan).

## Catatan teknis

- Kontak di halaman legal/support ditampilkan terbuka (email dan WhatsApp), karena store mewajibkan kontak developer yang dapat dihubungi. Tombol CTA di landing tetap memakai `ProtectedContact`.
- Dokumen legal dirender oleh `components/LegalDocument.tsx` dari `lib/legal-content.ts` (Indonesia) dan `lib/legal-en/` (Inggris). Salinan `.md` di `public/legal/` juga dipakai crawler AI (`llms-full.txt`).

## Dokumen legal: sumber dan sinkronisasi

- Sumber utama: `docs/PRIVASI.md`, `docs/KEAMANAN DATA.md`, `docs/LAYANAN.md` (pemilik produk). Dokumen yang tampil di situs ada di `public/legal/*.md` (Indonesia) dan `lib/legal-en/*.ts` (Inggris). `lib/legal-content.ts` dibangkitkan dari `public/legal/*.md`.
- Terjemahan Inggris dibuat tanpa peninjauan hukum. Teks Indonesia yang berlaku; minta penasihat hukum meninjau versi Inggris sebelum submit.
- Kontak legal/DPO memakai `legal@dilemma-makna.com`; kontak dukungan umum memakai `hello@dilemma-makna.com`.
- Masih ada satu placeholder di Syarat dan Ketentuan Pasal 12: `[PENGADILAN NEGERI YANG BERWENANG]`. Isi sebelum submit.
- `docs/LAYANAN.md` memuat asumsi biaya dan margin internal serta fitur backlog, jadi tidak dipublikasikan utuh. Yang dipakai hanya paket dan harga (Mulai Dulu gratis, On Track Rp26.000, Level Up Rp49.000) di Syarat dan Ketentuan.
- Bagian harga di landing (`components/PricingSection.tsx`, `components/JsonLd.tsx`, `public/index.md`, `public/llms*.txt`) masih memakai Rp15.000 / Rp25.000 dan belum menampilkan Level Up. Samakan sebelum submit.
