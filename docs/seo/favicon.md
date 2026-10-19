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

## Pemeriksaan ulang dan site name — 19 Oktober 2026

Screenshot terbaru menampilkan hostname sebagai site name dan globe sebagai favicon, sementara gambar hidangan muncul sebagai thumbnail. Ketiganya adalah elemen hasil pencarian yang berbeda; menambahkan logo ke schema bisnis tidak otomatis mengganti favicon atau memaksa nama situs Google.

Sebelum perubahan sesi ini, `WebSite.name` dan `og:site_name` sudah berisi **Palereman Coffee and View**. Tidak ditemukan bukti tag tersebut hilang. Pengayaan yang diterapkan: `WebSite.alternateName` berisi **Palereman** dan **Palereman Coffee & View**, serta `application-name` memakai nama resmi. Metadata application-name melengkapi identitas aplikasi; tidak diklaim sebagai sinyal site name yang pasti dipakai Google. Judul SEO, domain canonical, tampilan website, dan alamat/file favicon tidak diubah.

Pemeriksaan fresh production build lokal dengan Host non-www dan www serta header User-Agent Googlebot-Image membuktikan:

- Homepage 200; WebSite.name, url dan alternateName benar pada JSON-LD HTML server.
- og:site_name dan application-name sesuai nama resmi.
- Link favicon.ico dan favicon-192.png ada di HTML.
- PNG 192 px dan route lama /icon 96 px merespons 200 dengan MIME PNG; konten valid dan tidak kosong. ICO merespons 200 dengan tiga entri. Robots mengizinkan path ikon.
- Build, ESLint, TypeScript lulus. Pemeriksaan User-Agent ini bukan bukti Googlebot sebenarnya sudah mengakses situs.

Request live ke kedua hostname, favicon, robots, dan panduan Google masih ditolak proxy pada CONNECT dengan HTTP 403. Karena itu tidak ada kesimpulan bahwa deployment publik pasti identik, Googlebot diblokir, atau ikon hilang pasti karena cache. Favicon statis baru ditambahkan pada 18 Oktober; recrawl yang belum mengambil versi itu merupakan hipotesis, bukan diagnosis yang telah terbukti.

Urutan diagnosis publik:

1. Buka `https://paleremancafe.web.id/favicon-192.png`. Jika 404, HTML, atau gambar tidak muncul, periksa deployment/domain pada commit yang memuat favicon terlebih dahulu. Pertanyaan ini telah diajukan kepada pemilik, belum ada hasil yang dikonfirmasi saat laporan ditulis.
2. Jika file tampil, gunakan URL Inspection homepage pada Search Console: catat last crawl, page fetch, izin indexing, dan canonical yang dipilih Google. Periksa HTML hasil live test untuk link ikon dan WebSite.name; lulus live test tidak berarti indeks Google sudah diperbarui.
3. Jika Google masih melihat versi lama, minta pengindeksan homepage sekali setelah deploy. Jika fetch gagal atau canonical berbeda, selesaikan alasan nyata yang dilaporkan. Jangan menebak bahwa semua gejala adalah cache.
4. Jika ikon dan metadata dapat diambil dengan benar serta telah dicrawl, pemilihan favicon/site name dan waktu pembaruannya tetap dikelola Google. Tidak menjanjikan pergantian langsung, tanggal tertentu, atau membuat URL ikon baru setiap hari.

Referensi tambahan: https://developers.google.com/search/docs/appearance/site-names . Halaman referensi tidak berhasil dibaca live lewat proxy sesi ini. Bukti JSON lokal sesi disimpan di `/tmp/palereman-search-identity/local-validation.json`.
