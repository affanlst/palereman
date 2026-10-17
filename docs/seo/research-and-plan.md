# Riset dan rencana SEO Palereman

Tanggal audit: 17 Oktober 2026. Domain yang dikonfirmasi pemilik: https://paleremancafe.web.id.

## Metode dan batas riset

Riset awal memetakan **64 kandidat keyword**, berdasarkan entitas merek, lokasi bisnis, kebutuhan pengunjung, menu, jam buka, dan foto asli. Daftar lengkap, intent, prioritas, keputusan, serta bukti ada di `keyword-map.csv`. Prioritas adalah penilaian relevansi, bukan hasil pengukuran volume atau kesulitan keyword. Daftar ini tidak mewakili seluruh pencarian cafe di Ponorogo.

Permintaan langsung ke Google Search, Google Suggest, Bing, panduan Google, dan domain produksi ditolak proxy lingkungan dengan HTTP CONNECT 403. Belum tersedia data SERP langsung, volume pencarian, posisi pesaing, Search Console, Keyword Planner, atau Google Business Profile. Karena itu tidak ada angka volume, klaim ranking, atau daftar pesaing yang direkayasa. Penilaian teknis menggunakan HTML produksi lokal; `baseline.json` merekam kondisi sebelum perubahan. Definisi CafeOrCoffeeShop dan properti terkait diperiksa dari sumber schema.org di GitHub.

## Kelompok dan keputusan

| Kelompok | Jumlah kandidat | Pemakaian |
| --- | ---: | --- |
| Merek | 15 | Nama resmi, menu, alamat, kontak; nama akun sosial sebagai identitas |
| Kategori | 7 | Cafe/kafe, coffee shop, tempat ngopi di Ponorogo; gunakan sewajarnya |
| Area | 8 | Singosaren, Setono, Jenangan, Ponorogo; satu halaman lokasi yang nyata |
| Karakter | 3 | Nuansa Jawa dan tradisional, didukung foto interior |
| Pemandangan | 4 | Sawah dan perbukitan dari foto pemilik |
| Menu | 6 | Nasi Bakar dan Kopi Rempah; harga terbaru diarahkan ke buku menu |
| Kunjungan | 8 | Alamat, jam, kontak, petunjuk; pencarian terdekat bergantung lokasi pencari |
| Belum terbukti | 12 | Tunda murah, terbaik, viral, Wi-Fi, nugas, live music, halal, parkir, dan fasilitas lain |
| Bertentangan | 1 | Jangan target cafe 24 jam: jam yang dikonfirmasi 08.00–20.00, Jumat tutup |

Prioritas utama: pencarian merek dan informasi kunjungan, lalu **cafe Ponorogo**, **cafe Singosaren**, **cafe Jenangan**, **cafe bernuansa Jawa di Ponorogo**, dan **cafe dengan pemandangan sawah di Ponorogo**. Frasa dipakai alami dalam judul, deskripsi, heading, dan penjelasan suasana. Tidak semua 64 variasi dimasukkan ke halaman; tidak membuat halaman kota palsu, teks tersembunyi, pengulangan keyword, atau meta keywords.

Satu halaman tetap sesuai kebutuhan bisnis ini: menu, suasana, dan kunjungan berupa bagian yang bisa ditautkan. URL lama diarahkan permanen ke bagian terkait. Tidak membuat banyak halaman tipis yang hanya mengganti kata kunci/lokasi. Galeri tetap berisi foto asli, deskripsi yang menjelaskan gambar, dimensi stabil, dan pemuatan bertahap.

## Fakta yang digunakan

- Nama: Palereman Coffee and View; alamat Singosaren, Setono, Kecamatan Jenangan, Kabupaten Ponorogo, Jawa Timur 63492.
- Telepon: +62 857-2674-1940; jam 08.00–20.00, Jumat tutup. Data berasal dari profil yang sebelumnya dikonfirmasi pemilik.
- Instagram dan TikTok: @palereman.png; menu resmi di Google Drive yang telah diberikan.
- Foto interior Jawa, sawah, dan perbukitan berasal dari pemilik. Tidak menambahkan koordinat, bintang ulasan, kisaran harga, sertifikasi, atau fasilitas yang belum diverifikasi.

## Implementasi yang direncanakan

Metadata dengan domain HTTPS resmi; canonical homepage; Open Graph dan Twitter menggunakan foto lokasi; robots dan sitemap berisi URL canonical. JSON-LD CafeOrCoffeeShop dan WebSite menggunakan identitas, kontak, alamat, menu, foto, dan jam yang sama dengan halaman. FAQ terlihat membantu pengunjung; tidak menjanjikan FAQ rich result. Redirect permanen host lama ke domain baru menjaga path/query. Tidak ada janji rich result atau ranking dari pemasangan schema.

## Riset lanjutan dan pekerjaan pemilik setelah deploy

1. Pastikan domain HTTPS dan redirect publik berfungsi. Verifikasi properti domain di [Google Search Console](https://search.google.com/search-console), kirim `https://paleremancafe.web.id/sitemap.xml`, lalu inspeksi homepage dan minta pengindeksan. Verifikasi memerlukan akses pemilik, belum dilakukan dari lingkungan ini.
2. Perbarui website, nama, alamat, telepon, kategori yang tepat, jam termasuk hari libur, menu, dan foto pada Google Business Profile. Cocokkan profil sosial/direktori. Mintalah ulasan asli tanpa rekayasa atau imbalan.
3. Setelah akses jaringan tersedia, periksa SERP mobile/desktop untuk kandidat prioritas dan catat tanggal, lokasi pencari, hasil organik, Local Pack, intent, serta halaman pesaing yang benar-benar tampil. Periksa Google Suggest; gunakan Keyword Planner bila memiliki akses. Jangan mengubah perkiraan menjadi angka volume.
4. Pantau query, impressions, klik, CTR, halaman terindeks, dan posisi di Search Console setelah data terkumpul. Bedakan query merek/nonmerek dan hasil web/peta. Nilai Core Web Vitals dari data lapangan; widget pihak ketiga memerlukan pengujian pada jaringan yang dapat memuatnya.
5. Tambah konten hanya untuk kebutuhan nyata: perubahan menu, foto baru, petunjuk lokasi, atau fasilitas yang telah dikonfirmasi. Jangan membeli backlink atau mengulang keyword di alt gambar.

Tidak ada pihak yang dapat menjamin posisi 1. Hasil organik dan peta bergantung relevansi, jarak, reputasi, pesaing, pengindeksan, serta sistem Google. Optimasi ini memperbaiki fondasi yang dapat dikendalikan situs.

## Referensi

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Kebijakan spam Google](https://developers.google.com/search/docs/essentials/spam-policies)
- [Peringkat lokal Google](https://support.google.com/business/answer/7091?hl=id)
- [Data terstruktur bisnis lokal](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Panduan Google Images](https://developers.google.com/search/docs/appearance/google-images)
- [CafeOrCoffeeShop](https://schema.org/CafeOrCoffeeShop), [sumber schema.org yang berhasil diperiksa](https://raw.githubusercontent.com/schemaorg/schemaorg/main/data/schema.ttl)

Tautan Google adalah referensi untuk verifikasi lanjutan; isi terkininya belum dapat dibaca lewat proxy sesi ini. Implementasi mengikuti praktik SEO teknis yang mapan dan tidak diklaim sebagai sertifikasi Google. Perubahan allowlist domain telah disimpan sebagai draft konfigurasi cloud; draft perlu dipublikasikan melalui pengaturan environment agar riset live dapat dilanjutkan.
