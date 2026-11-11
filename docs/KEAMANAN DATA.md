Kebijakan Keamanan Data Nataku
Berlaku sejak: 28 September 2026 Pembaruan terakhir: 22 Oktober 2026 Versi: 1.0

Dokumen ini menjelaskan langkah teknis dan organisasi yang diterapkan PT Masih Dilemma Makna (Lemma Bercerita), NIB 1105260028169, untuk melindungi data pribadi pengguna Nataku. Dokumen ini melengkapi Kebijakan Privasi dan Syarat & Ketentuan Layanan.

Penyelenggara: PT Masih Dilemma Makna, Jl. Jayadewata Blok N IX No. 28, Desa/Kelurahan Balumbang Jaya, Kec. Bogor Barat, Kota Bogor, Provinsi Jawa Barat. Kontak keamanan dan DPO: hello@dilemma-makna.com

1. Prinsip Keamanan
Minimisasi data: hanya mengumpulkan data yang diperlukan untuk fitur inti (nama, email, nomor WhatsApp, data produktivitas).
Hak akses minimum: setiap peran hanya mengakses data yang dibutuhkan pekerjaannya.
Keamanan sejak desain: pertimbangan keamanan dimasukkan sejak perancangan fitur baru.
Transparansi: pengguna diberi tahu tentang data yang diproses dan insiden yang berdampak pada mereka.
2. Klasifikasi Data
| Kategori | Contoh | Tingkat perlindungan |
| --- | --- | --- |
| Identitas akun | Nama, email, nomor WhatsApp | Tinggi |
| Kredensial | Hash kata sandi, token sesi | Sangat tinggi |
| Konten produktivitas | Tugas, jadwal kuliah, agenda, habits | Tinggi |
| Data langganan | Status paket, tanggal berakhir | Sedang |
| Data teknis | Log kesalahan, versi aplikasi | Sedang |
Kami tidak menyimpan nomor kartu, PIN, atau kredensial dompet digital. Pembayaran sepenuhnya diproses oleh Google Play Billing.

3. Pengamanan Data dalam Pengiriman
Seluruh komunikasi antara aplikasi dan peladen Nataku dienkripsi dengan Transport Layer Security (TLS 1.3).
Koneksi tanpa enkripsi ditolak atau dialihkan ke HTTPS. Aplikasi mengirim header HSTS (max-age 1 tahun, termasuk subdomain) pada respons HTTPS.
Pesan WhatsApp dikirim melalui jalur resmi WhatsApp Business Platform. Setelah sampai di WhatsApp, isi pesan berada di bawah kebijakan WhatsApp/Meta.
4. Pengamanan Data Tersimpan
Basis data pengguna disimpan di pusat data terproteksi dengan pembatasan hak akses berbasis peran (RBAC).
Kata sandi disimpan dalam bentuk hash bcrypt, tidak pernah dalam teks biasa.
Data diam dan cadangan disimpan pada penyimpanan terenkripsi milik penyedia cloud.
Infrastruktur berjalan di Oracle Cloud dan Google Cloud, yang berlokasi di luar Indonesia.
5. Kontrol Akses
Akses produksi hanya untuk personel berwenang dan dibatasi berdasarkan peran (RBAC).
Pemisahan lingkungan pengembangan, pengujian, dan produksi. Data pengguna nyata tidak dipakai di lingkungan pengujian tanpa anonimisasi.
Akses administratif dicatat (audit log) dan ditinjau berkala.
Akses personel dicabut segera ketika peran berakhir atau hubungan kerja selesai.
Personel dan mitra yang menyentuh data terikat perjanjian kerahasiaan.
6. Keamanan Aplikasi dan Pengembangan
Validasi dan sanitasi input untuk mencegah injeksi dan XSS.
Pembatasan laju permintaan (rate limiting) pada API dan jalur pesan WhatsApp untuk mencegah penyalahgunaan dan banjir pesan.
Rahasia (API key, token) disimpan di luar kode sumber dan dirotasi berkala.
Pembaruan dependensi dan penambalan kerentanan secara berkala.
Tinjauan kode untuk perubahan yang menyentuh data pribadi.
7. Pencatatan, Pemantauan, dan Pencadangan
Log keamanan dan kesalahan dikumpulkan tanpa memuat konten pribadi yang tidak perlu.
Kesalahan dan performa dipantau dengan Sentry.
Pencadangan dilakukan setiap hari dan disimpan selama 90 hari.
8. Penanganan Insiden
Deteksi dan triase: insiden dilaporkan ke hello@dilemma-makna.com atau ditemukan lewat pemantauan, lalu dinilai tingkat keparahannya.
Penahanan: akses atau sistem terdampak diisolasi, kredensial dirotasi bila perlu.
Investigasi: menentukan penyebab, data terdampak, dan jumlah pengguna.
Pemberitahuan: bila insiden mengakibatkan kegagalan pelindungan data pribadi, Kami memberi tahu pengguna terdampak dan lembaga berwenang secara tertulis paling lambat 3 x 24 jam sejak diketahui, sesuai UU PDP No. 27/2022. Pemberitahuan memuat data yang terungkap, waktu dan kronologi, dampak, serta langkah penanganan dan pemulihan.
Pemulihan dan perbaikan: sistem dipulihkan, lalu dilakukan tinjauan pascainsiden dan perbaikan pencegahan.
9. Pengelolaan Pihak Ketiga
Penyedia layanan (cloud, WhatsApp, email, pembayaran) dipilih berdasarkan komitmen keamanan dan pelindungan data.
Perjanjian pemrosesan data mewajibkan kerahasiaan, keamanan, dan pemrosesan hanya atas instruksi Kami.
Daftar penyedia: Resend (email transaksional), Google Firebase Cloud Messaging (notifikasi push), Google Play Billing (pembayaran), WhatsApp Business Platform/Meta atau penyedia resmi perantara (pengingat WhatsApp), dan Sentry (pemantauan kesalahan). Penyedia infrastruktur: Oracle Cloud dan Google Cloud, dengan pemrosesan di luar Indonesia.
Kami tidak menjual atau menyewakan data pengguna untuk periklanan.
10. Retensi dan Penghapusan Aman
Pengguna dapat menghapus akun melalui Pengaturan > Hapus Akun.
Data pribadi dihapus atau dianonimkan dalam 30 hari setelah penghapusan, dan cadangan dihapus bergulir dalam 90 hari, kecuali ada kewajiban hukum menyimpan lebih lama.
Penghapusan dilakukan dengan cara yang mencegah pemulihan data pada sistem produksi.
11. Praktik Aman bagi Pengguna
Gunakan kata sandi yang unik dan kuat, dan jangan membagikannya.
Pastikan nomor WhatsApp yang didaftarkan adalah milik sendiri.
Keluar dari akun di perangkat bersama.
Segera lapor jika menduga akun diakses pihak lain.
Kami tidak pernah meminta kata sandi, kode OTP, atau PIN Anda melalui WhatsApp, email, atau telepon.

12. Pelaporan Kerentanan
Jika Anda menemukan celah keamanan pada Nataku, laporkan secara bertanggung jawab ke hello@dilemma-makna.com dengan subjek "Laporan Keamanan". Sertakan deskripsi, langkah reproduksi, dan dampak. Kami akan mengakui laporan dan menindaklanjutinya. Mohon tidak mengakses data pengguna lain, tidak melakukan serangan yang mengganggu layanan, dan memberi waktu wajar untuk perbaikan sebelum pengungkapan publik.

13. Tinjauan dan Perubahan
Kebijakan ini ditinjau minimal setiap 12 bulan atau saat terjadi perubahan sistem yang signifikan. Perubahan material diumumkan melalui aplikasi atau email.

14. Kontak
Keamanan dan DPO: hello@dilemma-makna.com
Situs web: dilemma-makna.com
Telepon/WhatsApp: +62 813-8360-0844
PT Masih Dilemma Makna, Jl. Jayadewata Blok N IX No. 28, Desa/Kelurahan Balumbang Jaya, Kec. Bogor Barat, Kota Bogor, Provinsi Jawa Barat