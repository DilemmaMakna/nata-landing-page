// Kamus ID/EN untuk seluruh situs Nataku. Dokumen legal ada di lib/legal-content(.en).ts.

export type Locale = 'id' | 'en';

const id = {
  lang: { label: 'Bahasa', id: 'Bahasa Indonesia', en: 'English' },

  nav: {
    home: 'Beranda',
    about: 'Tentang',
    core: 'Sistem Inti',
    cta: 'Coba Nataku',
    downloadTitle: 'Pilih aplikasi Nataku',
    downloadAndroid: 'Google Play (Android)',
    downloadIos: 'App Store (iOS)',
    downloadClose: 'Tutup',
    menu: 'Menu',
    features: 'Fitur',
    pricing: 'Harga',
    resources: 'Dukungan',
    mega: {
      features: [
        { title: "Today's Focus", desc: 'Maksimal 3 prioritas setiap hari' },
        { title: 'Kalender Terintegrasi', desc: 'Hitung mundur deadline berwarna' },
        { title: 'WhatsApp Daily Digest', desc: 'Asisten harian jam 7 pagi' },
        { title: 'Tentang Nataku', desc: 'Kenapa kami membuatnya' },
      ],
      featuresCard: { quote: 'Beres tugas tanpa pusing!', who: 'Nata, maskot Nataku' },
      support: [
        { title: 'Pusat Bantuan', desc: 'Hubungi tim dan lihat FAQ' },
        { title: 'Tanya Jawab', desc: 'Jawaban pertanyaan umum' },
        { title: 'Kebijakan Privasi', desc: 'Cara kami menjaga datamu' },
        { title: 'Syarat dan Ketentuan', desc: 'Aturan pakai layanan' },
        { title: 'Keamanan Data', desc: 'Langkah perlindungan data' },
        { title: 'Hapus Akun & Data', desc: 'Ajukan lewat formulir web' },
      ],
      supportCard: { title: 'Butuh bantuan?', body: 'Tim Nataku membalas dalam 3 x 24 jam.', cta: 'Hubungi kami' },
    },
  },

  hero: {
    h1a: 'Beres tugas',
    h1b: 'tanpa pusing!',
    sub: 'Nataku menyatukan jadwal kuliah dan tugas ke dalam satu alur rapi. Cukup lewat WhatsApp, bereskan tugas tanpa ribet buka-tutup aplikasi.',
    cta: 'Coba Nataku',
    alt: 'Tampilan Antarmuka Nataku di 3 Smartphone',
  },

  problem: {
    headline: ['Tata Semua', 'Jadwalmu!'],
    alts: ['Kuburan Catatan', 'Overwhelmed', 'Puluhan Grup', 'Distraksi Medsos'],
    features: [
      ['Manajemen', 'Tugas'],
      ['Integrasi', 'Kalender'],
      ['Terhubung', 'WhatsApp'],
    ],
    quote: [
      'Setiap', 'pagi,', 'Nataku', 'ingatkan', 'tugas', 'prioritasmu',
      'lewat', 'WhatsApp.', 'Cukup', 'balas', 'chat,', 'tugas',
      'langsung', 'tercatat.',
    ],
  },

  pillars: {
    badge: 'Sistem Terpadu',
    title: '3 Sistem Terpadu Untuk Harimu.',
    intro:
      'Setiap awal semester selalu bikin to-do list baru. Tiga hari pertama rajin mencatat, setelah itu aplikasinya berdebu di folder HP.',
    focus: {
      tagline: 'Maksimal 3 hal terpenting setiap hari.',
      body: 'Layar utama Nataku memangkas kekacauan tugasmu dan hanya menampilkan hal yang paling wajib beres hari ini, sehingga energimu tidak habis karena overwhelmed.',
    },
    calendar: {
      tagline: 'Bebas panik H-1 jam pengumpulan tugas.',
      body: 'Indikator visual hitung mundur dengan warna jelas (kuning untuk hari ini, merah untuk mendesak). Kamu selalu tahu berapa sisa waktumu sebelum terlambat.',
    },
    whatsapp: {
      tagline: 'Asisten harian langsung di chat pribadimu.',
      body: 'Terima rangkuman pagi setiap jam 7. Balas chat untuk mencoret tugas atau menambah agenda baru tanpa perlu menyentuh aplikasi.',
    },
  },

  pricing: {
    badge: 'Pilihan Akses',
    title: ['Mulai Gratis, Upgrade', 'Saat Kamu Butuh Asisten.'],
    sub: 'Paket standar membantumu manajemen tugas, namun asisten WhatsApp yang memastikan seluruh deadline kamu tuntas.',
    youGet: 'Yang kamu dapatkan:',
    start: {
      name: 'Paket Mulai Dulu',
      tagline: 'Paling pas untuk Kenalan sama Nataku',
      desc: 'Untuk kamu yang ingin merapikan tugas dan memantau deadline secara mandiri di ponsel Android.',
      perMonth: '/ bulan',
      items: [
        'Akses aplikasi Android Nataku',
        "Dashboard Today's Focus",
        'Hitung mundur batas waktu tugas',
        'Pelacakan Skor Produktivitas harian',
      ],
      cta: 'Coba Paket Dasar',
    },
    track: {
      name: 'Paket On Track',
      tagline: 'Paling Pas untuk Mahasiswa Aktif',
      desc: 'Untuk kamu yang punya jadwal padat dan butuh asisten yang menyapa dan mencatat langsung dari WhatsApp.',
      price: 'SOON',
      items: [
        'Semua fitur Paket Mulai Dulu',
        'Pengiriman pesan WhatsApp Daily Digest setiap pagi',
        'Balas chat WhatsApp untuk coret dan tambah tugas',
        'Pengingat batas waktu mendesak langsung ke nomor pribadimu',
      ],
      cta: 'Tanya On Track',
      aria: 'Tanya paket On Track via WhatsApp',
    },
  },

  faq: {
    title: 'Tanya Jawab',
    intro:
      'Setiap awal semester selalu bikin to-do list baru. Tiga hari pertama rajin mencatat, setelah itu aplikasinya berdebu di folder HP.',
  },

  footer: {
    about: 'Nataku adalah produk digital mandiri yang dikembangkan dengan penuh perhatian oleh Lemma Bercerita (PT Masih Dilemma Makna).',
    madeBy: 'Dibuat oleh',
    lemma: 'Lemma merancang dan membangun produk digital yang bermakna.',
    links: 'Tautan Pendukung',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat dan Ketentuan',
    security: 'Keamanan Data',
    support: 'Pusat Bantuan',
    delete: 'Hapus Akun & Data',
    rights: '© 2026 PT Masih Dilemma Makna. Hak Cipta Dilindungi.',
    top: 'Kembali ke atas',
    scene: { score: 'Produktif hari ini', done: 'Semua beres!', task: 'Tugas' },
  },

  doc: {
    legalEyebrow: 'Dokumen Legal',
    onThisPage: 'Di halaman ini',
    tocMobile: 'Daftar isi',
    tabs: {
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      security: 'Keamanan Data',
      support: 'Bantuan',
      delete: 'Hapus Akun',
    },
    navLabel: 'Dokumen dan bantuan',
    titles: { privacy: 'Kebijakan Privasi', terms: 'Syarat dan Ketentuan', security: 'Keamanan Data' },
  },

  support: {
    eyebrow: 'Dukungan',
    title: 'Pusat Bantuan Nataku',
    intro: (time: string) => `Ada kendala atau pertanyaan? Tim kami membalas dalam ${time}.`,
    responseTime: '3 x 24 jam (hari kerja)',
    email: 'Email',
    emailNote: 'Untuk kendala akun, tagihan, dan laporan keamanan.',
    emailSubject: 'Bantuan Nataku',
    wa: 'WhatsApp',
    waNote: 'Respons cepat pada jam kerja.',
    waText: 'Halo, aku butuh bantuan Nataku.',
    links: 'Tautan penting',
    deleteLink: 'Hapus akun dan data',
    faq: 'Pertanyaan umum',
    developer: 'Pengembang',
  },

  del: {
    eyebrow: 'Data Anda, kendali Anda',
    title: 'Hapus Akun dan Data Nataku',
    intro: 'Anda dapat menghapus akun dan data Anda kapan saja, lewat aplikasi atau lewat formulir di halaman ini.',
    way1: 'Cara 1: lewat aplikasi',
    way1Body: ['Buka Nataku, lalu pilih ', 'Pengaturan > Hapus Akun', ' dan konfirmasi.'],
    way2: 'Cara 2: lewat formulir ini',
    way2Body: (days: string) =>
      `Untuk pengguna yang sudah tidak punya aplikasinya. Isi formulir, kami verifikasi kepemilikan akun lewat email atau WhatsApp terdaftar, lalu memproses penghapusan paling lambat ${days}.`,
    deleted: 'Apa yang dihapus',
    deletedItems: [
      'Profil akun (nama, email, nomor WhatsApp).',
      'Tugas, jadwal kuliah, agenda, dan kebiasaan harian.',
      'Pengaturan dan riwayat Daily Digest WhatsApp.',
    ],
    kept: 'Apa yang mungkin disimpan',
    keptBody: 'Catatan transaksi dan data lain yang wajib kami simpan menurut hukum dapat dipertahankan sebatas waktu yang diwajibkan, lalu dihapus atau dianonimkan. Rinciannya ada di ',
    privacyLink: 'Kebijakan Privasi',
    helpPre: 'Butuh bantuan? Email ',
    helpMid: ' atau kunjungi ',
    helpLink: 'Pusat Bantuan',
    form: {
      email: 'Email akun Nataku',
      emailPh: 'nama@email.com',
      wa: 'Nomor WhatsApp terdaftar',
      waOpt: '(opsional, jika dipakai untuk Daily Digest)',
      scope: 'Yang ingin dihapus',
      scopeAccount: 'Akun dan seluruh data',
      scopeAccountDesc: 'Akun ditutup permanen beserta tugas, jadwal, kebiasaan, dan nomor WhatsApp Anda.',
      scopeData: 'Hanya data tertentu',
      scopeDataDesc: 'Akun tetap aktif. Tulis data yang ingin dihapus pada kolom catatan di bawah.',
      note: 'Catatan',
      optional: '(opsional)',
      confirm: 'Saya adalah pemilik akun ini dan memahami bahwa penghapusan tidak dapat dibatalkan.',
      submit: 'Ajukan penghapusan',
      sending: 'Mengirim…',
      failed: 'Gagal mengirim permintaan.',
      doneTitle: 'Permintaan kami terima',
      doneBody: (days: string, email: string) =>
        `Kami akan menghubungi email (atau WhatsApp) yang Anda isi untuk memverifikasi kepemilikan akun, lalu memproses penghapusan paling lambat ${days}. Jika Anda tidak merasa mengajukan permintaan ini, abaikan pesan verifikasi dan hubungi ${email}.`,
    },
  },
};

export type Messages = typeof id;

const en: Messages = {
  lang: { label: 'Language', id: 'Bahasa Indonesia', en: 'English' },

  nav: {
    home: 'Home',
    about: 'About',
    core: 'Core Systems',
    cta: 'Try Nataku',
    downloadTitle: 'Choose the Nataku app',
    downloadAndroid: 'Google Play (Android)',
    downloadIos: 'App Store (iOS)',
    downloadClose: 'Close',
    menu: 'Menu',
    features: 'Features',
    pricing: 'Pricing',
    resources: 'Support',
    mega: {
      features: [
        { title: "Today's Focus", desc: 'Up to 3 priorities every day' },
        { title: 'Integrated Calendar', desc: 'Color-coded deadline countdown' },
        { title: 'WhatsApp Daily Digest', desc: 'A daily assistant at 7 AM' },
        { title: 'About Nataku', desc: 'Why we built it' },
      ],
      featuresCard: { quote: 'Finish tasks without the stress!', who: 'Nata, the Nataku mascot' },
      support: [
        { title: 'Help Center', desc: 'Contact the team and read the FAQ' },
        { title: 'FAQ', desc: 'Answers to common questions' },
        { title: 'Privacy Policy', desc: 'How we protect your data' },
        { title: 'Terms and Conditions', desc: 'The rules of using the service' },
        { title: 'Data Security', desc: 'How your data is protected' },
        { title: 'Delete Account & Data', desc: 'Request it with the web form' },
      ],
      supportCard: { title: 'Need a hand?', body: 'The Nataku team replies within 3 x 24 hours.', cta: 'Contact us' },
    },
  },

  hero: {
    h1a: 'Finish tasks',
    h1b: 'without the stress!',
    sub: 'Nataku brings your class schedule and assignments into one tidy flow. Just use WhatsApp and get your tasks done without juggling apps.',
    cta: 'Try Nataku',
    alt: 'Nataku interface on 3 smartphones',
  },

  problem: {
    headline: ['Organize Your', 'Whole Schedule!'],
    alts: ['Graveyard of notes', 'Overwhelmed', 'Dozens of group chats', 'Social media distractions'],
    features: [
      ['Task', 'Management'],
      ['Calendar', 'Integration'],
      ['WhatsApp', 'Connected'],
    ],
    quote: [
      'Every', 'morning,', 'Nataku', 'reminds', 'you', 'of', 'your', 'priority', 'tasks',
      'on', 'WhatsApp.', 'Just', 'reply', 'to', 'the', 'chat,', 'and', 'tasks',
      'are', 'logged', 'instantly.',
    ],
  },

  pillars: {
    badge: 'Unified Systems',
    title: '3 Unified Systems For Your Day.',
    intro:
      'Every new semester you start a fresh to-do list. The first three days you note everything diligently, then the app gathers dust in a folder on your phone.',
    focus: {
      tagline: 'The 3 most important things, every day.',
      body: "Nataku's home screen cuts through the clutter and shows only what must get done today, so you don't burn your energy on feeling overwhelmed.",
    },
    calendar: {
      tagline: 'No more panic one hour before a deadline.',
      body: 'A clear color-coded countdown (yellow for today, red for urgent). You always know how much time is left before it is too late.',
    },
    whatsapp: {
      tagline: 'A daily assistant right in your personal chat.',
      body: 'Get a morning summary at 7 AM. Reply to the chat to check off tasks or add new agenda items without touching the app.',
    },
  },

  pricing: {
    badge: 'Access Options',
    title: ['Start Free, Upgrade', 'When You Need an Assistant.'],
    sub: 'The standard plan helps you manage tasks, but the WhatsApp assistant is what makes sure every deadline gets done.',
    youGet: 'What you get:',
    start: {
      name: 'Starter Plan',
      tagline: 'Best for getting to know Nataku',
      desc: 'For those who want to tidy up their tasks and track deadlines on their own on an Android phone.',
      
      perMonth: '/ month',
      items: [
        'Access to the Nataku Android app',
        "Today's Focus dashboard",
        'Countdown to task deadlines',
        'Daily Productivity Score tracking',
      ],
      cta: 'Try the Basic Plan',
    },
    track: {
      name: 'On Track Plan',
      tagline: 'Best for Active Students',
      desc: 'For those with a packed schedule who need an assistant that greets and logs tasks right from WhatsApp.',
      price: 'SOON',
      items: [
        'Everything in the Starter Plan',
        'WhatsApp Daily Digest message every morning',
        'Reply on WhatsApp to check off and add tasks',
        'Urgent deadline reminders sent straight to your own number',
      ],
      cta: 'Ask About On Track',
      aria: 'Ask about the On Track plan via WhatsApp',
    },
  },

  faq: {
    title: 'FAQ',
    intro:
      'Every new semester you start a fresh to-do list. The first three days you note everything diligently, then the app gathers dust in a folder on your phone.',
  },

  footer: {
    about: 'Nataku is an independent digital product, built with care by Lemma Bercerita (PT Masih Dilemma Makna).',
    madeBy: 'Made by',
    lemma: 'Lemma designs and builds digital products that mean something.',
    links: 'Support Links',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    security: 'Data Security',
    support: 'Help Center',
    delete: 'Delete Account & Data',
    rights: '© 2026 PT Masih Dilemma Makna. All rights reserved.',
    top: 'Back to top',
    scene: { score: 'Productive today', done: 'All done!', task: 'Task' },
  },

  doc: {
    legalEyebrow: 'Legal Document',
    onThisPage: 'On this page',
    tocMobile: 'Table of contents',
    tabs: {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      security: 'Data Security',
      support: 'Help',
      delete: 'Delete Account',
    },
    navLabel: 'Documents and help',
    titles: { privacy: 'Privacy Policy', terms: 'Terms and Conditions', security: 'Data Security' },
  },

  support: {
    eyebrow: 'Support',
    title: 'Nataku Help Center',
    intro: (time: string) => `Have a problem or a question? Our team replies within ${time}.`,
    responseTime: '3 x 24 hours (business days)',
    email: 'Email',
    emailNote: 'For account issues, billing, and security reports.',
    emailSubject: 'Nataku Support',
    wa: 'WhatsApp',
    waNote: 'Quick replies during business hours.',
    waText: 'Hello, I need help with Nataku.',
    links: 'Important links',
    deleteLink: 'Delete account and data',
    faq: 'Frequently asked questions',
    developer: 'Developer',
  },

  del: {
    eyebrow: 'Your data, your control',
    title: 'Delete Your Nataku Account and Data',
    intro: 'You can delete your account and data at any time, in the app or with the form on this page.',
    way1: 'Option 1: in the app',
    way1Body: ['Open Nataku, choose ', 'Settings > Delete Account', ' and confirm.'],
    way2: 'Option 2: with this form',
    way2Body: (days: string) =>
      `For users who no longer have the app. Fill in the form, we verify account ownership through your registered email or WhatsApp, then process the deletion within ${days} at the latest.`,
    deleted: 'What is deleted',
    deletedItems: [
      'Account profile (name, email, WhatsApp number).',
      'Tasks, class schedules, agenda items, and daily habits.',
      'WhatsApp Daily Digest settings and history.',
    ],
    kept: 'What may be retained',
    keptBody: 'Transaction records and other data we are legally required to keep may be retained for the legally required period, then deleted or anonymized. Details are in the ',
    privacyLink: 'Privacy Policy',
    helpPre: 'Need help? Email ',
    helpMid: ' or visit the ',
    helpLink: 'Help Center',
    form: {
      email: 'Nataku account email',
      emailPh: 'name@email.com',
      wa: 'Registered WhatsApp number',
      waOpt: '(optional, if used for the Daily Digest)',
      scope: 'What to delete',
      scopeAccount: 'Account and all data',
      scopeAccountDesc: 'Your account is closed permanently along with your tasks, schedules, habits, and WhatsApp number.',
      scopeData: 'Specific data only',
      scopeDataDesc: 'Your account stays active. Describe the data to delete in the notes field below.',
      note: 'Notes',
      optional: '(optional)',
      confirm: 'I am the owner of this account and understand that deletion cannot be undone.',
      submit: 'Request deletion',
      sending: 'Sending…',
      failed: 'Failed to send the request.',
      doneTitle: 'We received your request',
      doneBody: (days: string, email: string) =>
        `We will contact the email (or WhatsApp) you entered to verify account ownership, then process the deletion within ${days} at the latest. If you did not make this request, ignore the verification message and contact ${email}.`,
    },
  },
};

export const messages: Record<Locale, Messages> = { id, en };
