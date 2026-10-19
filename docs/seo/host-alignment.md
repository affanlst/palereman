# Penyelarasan host canonical — 19 Oktober 2026

Bukti dari pemilik:

- URL Inspection `https://paleremancafe.web.id/` menunjukkan “Halaman dengan pengalihan”, crawl 17 Oktober 2026 18.58.05, Smartphone Googlebot, crawl/indexing diizinkan, page fetch berhasil.
- Sitemap `https://www.paleremancafe.web.id/sitemap.xml` berstatus Sukses, ditemukan satu halaman, terakhir dibaca 17 Oktober.
- Screenshot PageSpeed sebelumnya menunjukkan origin akhir www.
- Pemilik dapat membuka favicon PNG publik; itu membuktikan akses browser pemilik, bukan akses Googlebot-Image atau status cache Google.

Temuan kode sebelum perbaikan: canonical, URL schema, OG, sitemap loc dan robots sitemap menunjuk non-www, sementara bukti hosting/sitemap menunjukkan penggunaan www. Kontradiksi sinyal canonical/redirect ini perlu diselaraskan. Screenshot URL Inspection sendiri tidak menampilkan tujuan Location redirect atau hasil inspeksi www, sehingga tujuan www ditentukan dari gabungan bukti, bukan diklaim terbaca langsung dari field yang tidak ada pada screenshot.

Perubahan: site.url menjadi `https://www.paleremancafe.web.id`; seluruh identitas turunan mengikuti konstanta itu. Tujuan redirect domain Vercel lama juga menjadi www untuk mengurangi langkah pengalihan. Tidak menambah aturan redirect apex/www yang dapat berlawanan dengan hosting. File dan alamat favicon, nama brand, layout dan judul SEO tetap.

Validasi: build/lint/TypeScript lulus; request HTTP produksi lokal dengan Host www membuktikan homepage 200, canonical/OG/identitas CafeOrCoffeeShop dan WebSite konsisten, robots dan satu loc sitemap memakai www, favicon lama/statis merespons 200. Host lama mengembalikan 308 ke www dengan path/query utuh. Pemeriksaan ini tidak membuktikan deployment publik sudah berubah; koneksi publik dari cloud sebelumnya masih ditolak proxy.

Interpretasi dan langkah pemilik setelah deploy:

1. “Tidak ada di Google” untuk URL yang mengalihkan tidak berarti seluruh website tidak diindeks. Periksa target `https://www.paleremancafe.web.id/` di Search Console.
2. Jalankan Uji URL Aktif target tersebut. Target canonical harus menjadi halaman akhir yang dapat diambil, bukan mengalihkan kembali ke apex. Bila hosting ternyata telah diubah setelah crawl 17 Oktober dan www kini redirect ke apex, selaraskan lagi berdasarkan hasil live; hindari loop.
3. Catat status indexing dan canonical pilihan Google pada target www, beserta last crawl target itu. Crawl 17 Oktober pada screenshot hanya berlaku untuk URL apex yang diperiksa; jangan menganggap itu last crawl www atau favicon.
4. Sitemap www sudah Sukses. Tidak perlu menghapus atau mengirim berkali-kali; isinya kini menunjuk homepage www. Sesudah deploy, permintaan indexing dapat dilakukan sekali untuk homepage target.
5. Perubahan host/sinyal nama tidak menjamin favicon atau site name langsung muncul. Status pengambilan Googlebot-Image dan pemilihan ikon/nama oleh Google belum tersedia. File favicon telah dikonfirmasi tampil oleh pemilik; jangan mengganti alamatnya berulang.

Dokumen favicon dan riset awal memuat catatan historis saat canonical masih non-www. Untuk host yang direkomendasikan setelah bukti terbaru, gunakan dokumen ini.
