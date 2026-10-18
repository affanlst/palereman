# Favicon pada hasil Google

18 Oktober 2026. Screenshot pemilik menunjukkan homepage sudah muncul pada hasil pencarian untuk host `www`, tetapi masih menggunakan ikon globe. Favicon hasil web berbeda dari foto/logo pada Google Business Profile.

Kode sebelumnya sudah memiliki link favicon `/icon` dan gambar PNG persegi 64 px. Ukuran 64 px sendiri bukan bukti favicon tidak valid. Penyebab ikon globe belum dapat dipastikan: crawl/cache Google, akses produksi, atau pemilihan ikon Google belum dapat diperiksa. Akses publik dari cloud ditolak proxy CONNECT 403; respons proxy tersebut bukan bukti Googlebot mendapat 403 dari situs.

Perubahan:

- Tambah `/favicon.ico` dengan entri 16, 32, dan 48 px.
- Tambah PNG persegi `/favicon-192.png` dengan URL stabil.
- Deklarasikan keduanya pada metadata icon, beserta shortcut icon.
- Pertahankan route `/icon` agar URL lama tetap tersedia, dengan resolusi 96 px dan komposisi logo yang sama.
- Gunakan logo gunungan yang sudah disetujui; navbar tidak berubah.

Build, ESLint, TypeScript lulus. Request produksi lokal dengan Host www/non-www dan User-Agent Googlebot-Image menerima HTML berisi link ikon serta status 200 untuk seluruh ikon; dimensi PNG/entri ICO benar dan robots tidak melarang ikon. Ini bukan pengujian bot Google yang sebenarnya atau deployment publik.

Setelah deploy, buka `https://www.paleremancafe.web.id/favicon-192.png` dan `/favicon.ico`, kemudian inspeksi homepage host yang muncul pada hasil pencarian di Search Console. Pengindeksan ulang homepage dapat diminta sekali untuk mendorong crawl. Tidak perlu memasukkan favicon ke sitemap halaman. Google memilih dan menyegarkan favicon melalui prosesnya sendiri; perubahan tidak menjamin ikon muncul seketika atau pada waktu tertentu.

Referensi resmi untuk verifikasi lanjutan: https://developers.google.com/search/docs/appearance/favicon-in-search . Halaman panduan tidak berhasil diakses lewat proxy sesi ini.
