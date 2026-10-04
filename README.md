# Nataku — Landing Page (Dev Mode)
> **Spesifikasi Produksi & Panduan Serah Terima (CTO & Engineering Team)**  
> **Organisasi**: Lemma Studio (PT Masih Dilemma Makna)  
> **Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS / Vanilla Design Tokens  
> **Figma Source**: File `wGMrNf1YoDXwzrJpYGTe9q` | Frame `Desktop - 8` (`42:9086`) & Section `Trial Dev` (`63:27018`)  
> **Status**: Production Ready, Tested & Vercel Deployable  

---

## 1. Arsitektur & Struktur Direktori

Kode dirancang dengan prinsip **modular, strongly typed, dan zero-spaghetti** agar mudah dikembangkan dan di-maintain oleh tim inti:

```text
05_dev_mode/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Endpoint pendaftaran waitlist (validasi nomor & sanitasi)
│   ├── globals.css               # Design tokens, typography (Satoshi), layout rules
│   ├── layout.tsx                # Metadata SEO, OpenGraph, viewport 100dvh
│   └── page.tsx                  # Komposisi landing page terintegrasi
├── components/
│   ├── Navbar.tsx                # Floating glassmorphism navbar (scroll-aware theme adapt)
│   ├── HeroSection.tsx           # Hero 100dvh, 3D phones mockup, frosted glass CTA button
│   ├── ProblemFeatureSection.tsx # Translasi Component 8 (5-state interactive prototype & scroll)
│   ├── QuoteSection.tsx          # Statement banner oranye (#F0441E) dengan quote bracket Figma
│   ├── PillarsSection.tsx        # 3 Sistem Inti (Today's Focus, Calendar, WhatsApp Quick Action)
│   ├── WaitlistSection.tsx       # Form registrasi lead 2 kolom (Desktop - 6) terhubung ke API
│   └── Footer.tsx                # Footer brand resmi dengan logo Nataku & atribusi Lemma Studio
├── public/
│   └── assets/                   # Aset resolusi tinggi diekstrak langsung dari Figma API (2x retina)
│       ├── hero-bg.png           # Background radiant energetic orange Figma
│       ├── hero-phones-clean.png # 3 Tilted 3D iPhones mockup
│       ├── nataku-logo.png       # Logo resmi Nataku (vektor transparan)
│       ├── proto/                # Aset kartu Component 8 (4 kartu masalah, 3 fitur, center typography)
│       └── figma_exports/        # Aset visual Figma Desktop - 4, Desktop - 10, Desktop - 6
├── preview.html                  # Standalone preview (dapat dibuka langsung di browser)
├── package.json                  # Dependensi Next.js 14, React 18, Lucide React
├── tsconfig.json                 # Path aliases (@/*) & strict checking
└── README.md                     # Dokumen panduan ini
```

---

## 2. Pemetaan Node Figma Lengkap (1:1 Exact Mapping)

Seluruh bagian landing page dibangun persis 1:1 mengikuti node dan varian di Figma:

| Urutan | Bagian Landing Page | Node ID Figma | Keterangan & Rationale Teknis |
| :---: | :--- | :--- | :--- |
| **00** | **Floating Navbar** | `42:10352` (`Container:margin`) | Width `1136px` di canvas 1280px (`72px` padding). Dilengkapi adaptive scroll (kaca transparan di hero $	o$ frosted solid saat scroll ke konten putih). |
| **01** | **Hero Section** | `42:9087` (`Desktop - 2`) | Radiant orange canvas, headline 2 baris (*Beres tugas tanpa pusing!*), tombol frosted glass, 3 mockup iPhone 3D miring, terkunci presisi di `100dvh`. |
| **02** | **Alur Solusi (5 State)** | `59:26233` (`Component 8`) | Master component set berisi 5 varian (`59:26232` s/d `59:26228`). Diterjemahkan menjadi interactive sticky scroll + 5-step stepper pills + canvas click advance. |
| **03** | **Quote Statement** | `59:25029` (`Desktop - 4`) | Background solid oranye `#F0441E`, typografi Satoshi 64px, diapit ikon bracket kutip resmi (`Frame 44` & `Frame 45`). |
| **04** | **3 Sistem Inti** | `63:28732` (`Desktop - 10`) | 3 kartu fitur lebar radius 28px dengan visual UI resolusi tinggi (Today's Focus `#F0441E`, Calendar `#047857`, WhatsApp Quick Action `#0369A1`). |
| **05** | **Waitlist Form** | `63:29441` (`Desktop - 6`) | Split card: Box kiri oranye Coral `#F0441E` + Box kanan 5 field input (Nama, Email, WhatsApp, Kampus, Harapan) dengan pesan privasi aman. |
| **06** | **Brand Footer** | Custom Brand Standard | Dilengkapi logo resmi Nataku, tautan navigasi instan antar-section, dan atribusi Lemma Studio. |

---

## 3. Resolusi Motion & Interaksi: `Component 8` (Figma Prototype)

Di Figma, Component 8 dibuat sebagai 5 varian berurutan (`Component 3`, `5`, `6`, `7`, `4`) dengan smart animate `ON_CLICK`:
- **Fase 1 (`59:26232`)**: 4 kartu masalah (*Kuburan Catatan*, *Overwhelmed*, *Puluhan Grup*, *Distraksi Medsos*) berkumpul di tengah mengelilingi teks *"Tata Semua Jadwalmu!"*.
- **Fase 2 (`59:26231`)**: Fitur 1 (*Manajemen Tugas*, `#F0441E`) naik dari bawah ke tengah.
- **Fase 3 (`59:26230`)**: Fitur 1 bergeser ke atas, Fitur 2 (*Integrasi Kalender*, `#F59E0B`) naik dari bawah.
- **Fase 4 (`59:26229`)**: 3 Fitur bertumpuk rapi secara vertikal (*Manajemen Tugas*, *Integrasi Kalender*, *Terhubung WhatsApp* `#059669`).
- **Fase 5 (`59:26228`)**: Klimaks / Ledakan solusi: 4 kartu masalah terlempar ke 4 sudut layar, teks tengah mengembang menjadi judul raksasa *"Tata Semua Jadwalmu!"*.

**Dukungan Dual Interaksi**:
- **Scroll-driven Interpolation**: Bergerak otomatis dan mulus mengikuti scroll pengguna.
- **Interactive Stepper**: Pengunjung dapat mengklik pill `01 Masalah` s/d `05 Solusi` atau mengklik canvas langsung untuk meloncat antar fase.

---

## 4. Panduan Menjalankan Secara Lokal (Local Development)

### Menggunakan Standalone Preview (Zero Dependencies)
Untuk melihat preview instan tanpa perlu install Node.js:
1. Buka file `preview.html` langsung di browser, atau
2. Jalankan server lokal: `python -m http.server 3030` lalu buka `http://localhost:3030/preview.html`.

### Menggunakan Next.js App Router (Production)
```bash
# 1. Masuk ke direktori 05_dev_mode
cd "05_dev_mode"

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev

# 4. Akses melalui browser
# http://localhost:3000
```

---

## 5. Panduan Deployment ke Vercel

Proyek ini telah dikonfigurasi agar **100% kompatibel dengan Vercel Zero-Config Deployment**:
1. Hubungkan repository GitHub ke dashboard Vercel.
2. Root Directory: `05_dev_mode` (atau atur sesuai konfigurasi monorepo).
3. Framework Preset: `Next.js`.
4. Klik **Deploy** — Vercel akan otomatis mendeteksi konfigurasi App Router dan mengoptimasi seluruh rute statis serta API route.
