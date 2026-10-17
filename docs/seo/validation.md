# Validasi SEO

17 Oktober 2026, production build lokal (`npm run build` dan `npm run start`). Bukti terstruktur: `validation.json`. Kondisi awal: `baseline.json`.

- Build, ESLint, dan TypeScript lulus.
- HTML homepage diperiksa menggunakan Chromium dengan JavaScript dinonaktifkan: status 200, satu H1 deskriptif, title/deskripsi lokal, satu canonical HTTPS resmi, Open Graph, dan JSON-LD sudah ada dari server.
- robots.txt dan sitemap.xml: 200 dengan tipe konten yang benar, sitemap hanya berisi homepage canonical. API video tidak disertakan. Tidak memakai tanggal pembaruan rekaan.
- CafeOrCoffeeShop: alamat, telepon, URL menu, akun sosial, dan tujuh hari jam operasional diperiksa; Jumat ditandai tutup. Semua foto/logo yang ditautkan tersedia dengan status 200. Tidak ada koordinat, rating/ulasan, atau harga yang direkayasa.
- `/menu`, `/suasana`, `/kunjungi` memberikan 308 ke bagian homepage yang sesuai. Request dengan Host `palereman.vercel.app` mempertahankan path dan query ketika diarahkan 308 ke domain baru. Request lokal tetap berfungsi.
- URL tidak dikenal: status 404, `noindex`, tanpa canonical yang keliru menunjuk homepage.
- Chromium pada lebar 320, 390, 768, dan 1440: lebar dokumen sama dengan viewport, tanpa error JavaScript. FAQ dibuka lewat keyboard. Screenshot hero dan FAQ mobile serta hero desktop diperiksa secara visual.

Batas validasi: bukan pengujian Rich Results Test Google, bukan data Core Web Vitals lapangan, bukan pemeriksaan pengindeksan/ranking, DNS/TLS, atau deployment produksi. Permintaan ke domain publik/Google diblokir proxy. Browser responsive test memblokir layanan eksternal agar dapat memeriksa aplikasi lokal; tidak mewakili performa Elfsight/Maps pada koneksi publik. Pengujian containment widget sebelumnya tetap didokumentasikan terpisah dalam repo dan kode containment tidak diubah dalam pekerjaan SEO ini.

Setelah deployment, pemilik perlu memeriksa HTTPS/canonical/redirect publik, memverifikasi Search Console dan mengirim sitemap, serta memperbarui Google Business Profile. Panduan dan rencana riset lanjutan ada di `research-and-plan.md`.
