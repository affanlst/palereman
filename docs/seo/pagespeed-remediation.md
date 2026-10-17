# Perbaikan dari delapan screenshot PageSpeed

Tanggal: 17 Oktober 2026. Dasar: delapan screenshot PageSpeed Insights mobile dari pemilik dan audit lokal sebelumnya pada commit `20855d9`.

## Perubahan

- **Google Maps sesuai permintaan pengunjung.** Iframe tidak dibuat ketika halaman dibuka atau saat bagian lokasi dilewati. Tombol “Tampilkan peta” memuatnya; alamat dan tautan navigasi Google Maps tersedia sejak HTML awal. Tinggi area peta tetap saat dibuka; fokus keyboard berpindah ke iframe yang memiliki judul.
- **Gambar wayang hero.** `fetchPriority="high"` dan eager loading menggantikan prop priority lama. `sizes` memperhitungkan artwork 2:3 yang ditampilkan dengan object-fit contain, bukan lebar seluruh frame mobile. Varian 480 px ditambahkan dan negosiasi AVIF/WebP diaktifkan dengan fallback WebP. Kualitas hero 60 diuji secara visual termasuk screenshot DPR 1,75; sumber asli tidak diganti dan logo transparan tetap digunakan.
- **Galeri yang dapat ditemukan crawler.** Keempat foto memiliki markup gambar dari server dengan lazy loading dan dimensi stabil. Wrapper figure dengan role group yang ditandai PageSpeed diganti menjadi region carousel; grup kontrol mendapat role yang sesuai. Tombol, dot, panah keyboard, Home/End, serta status loading/error dipertahankan.
- **Nama aksesibel logo.** Label sekarang memuat teks merek yang terlihat, termasuk Coffee & View.
- **Elfsight ditunda.** Script platform baru dimuat ketika host feed mendekati viewport (200 px), bukan langsung setelah hydration. Profil sosial tetap dapat dibuka jika feed gagal. Area host dan status diberi ruang minimum agar transisi ke fallback error tidak menciutkan/menggeser konten; tidak menetapkan tinggi maksimum atau memotong caption.

Identitas visual yang sudah disetujui tetap menjadi acuan: hijau hutan/krem/emas, wayang dan kawung, Newsreader dan Source Sans. Area peta memakai alamat nyata dan tombol langsung, tanpa peta dekoratif rekaan. Tinggi tetap hanya pada viewport peta, bukan pada teks halaman atau isi feed. Pemeriksaan antislop selama pengerjaan mencakup keterbacaan, focus, target sentuh, loading/error, dan overflow mobile.

## Hasil dan batas pengukuran

Lighthouse 13.5.0 pada production build lokal, simulasi mobile 412×823 dengan throttling bawaan. Angka berikut bukan PageSpeed produksi, data CrUX, atau bukti kenaikan ranking.

| Ukuran | Audit awal | Setelah perubahan |
| --- | --- | --- |
| Performa | 92 | **94** pada versi final |
| SEO | 100 | **100** pada versi final |
| Accessibility | 100, tetapi ada temuan label | **100**; temuan label-in-name hilang |
| Best Practices | 96, console gagal memuat Elfsight | **100** pada versi final |
| LCP | 3,3 detik | **3,1 detik** pada versi final |
| CLS | 0 | **0** pada versi final |
| Hero terpilih | 750 px, sekitar 134.482 byte | 480 px, sekitar 21.103 byte pada run terukur; turun sekitar 84% |
| Image delivery | Estimasi penghematan 102 KiB | Tidak ada item yang ditandai pada run terukur |
| LCP discovery | Hint prioritas tinggi belum ada | Hint, HTML discovery, dan eager loading lulus |

Tiga run awal sesudah perubahan memberikan performa **82, 96, 98**; LCP **2,9 / 2,8 / 2,5 detik**; CLS **0,255 / 0 / 0**. Run pertama mencatat pergeseran footer; tidak direproduksi dalam dua run berikutnya atau instrumentasi browser tersendiri. Selanjutnya ruang host/status fallback distabilkan dan diuji dengan kegagalan Elfsight yang dikendalikan: tinggi feed sebelum/sesudah error tetap sama pada mobile. Run setelah finalisasi memberi performa **94**, LCP **3,1 detik**, TBT **50 ms**, dan CLS **0**. Semua run disimpan dalam JSON pendamping. Target LCP baik ≤2,5 detik belum tercapai secara konsisten; hasil produksi perlu diperiksa setelah deployment. Tidak menghapus outlier atau mengklaim semua run sama baiknya.

Pada pengukuran lokal, request eksternal masih diblokir proxy. Script Elfsight yang ditunda tidak dimuat pada pembukaan hero, dan Maps tidak dimuat sebelum klik. Performa saat feed/peta publik benar-benar aktif tetap perlu diuji setelah deploy. INP tidak diukur; TBT bukan penggantinya.

## Pemeriksaan fungsi

- Build produksi, ESLint, TypeScript lulus.
- Chromium: 320, 390, 768, 1440 px; lebar dokumen sama dengan viewport, tidak ada error aplikasi.
- Tidak ada request Maps/Elfsight saat pembukaan hero. Scroll mendekati feed memuat satu script Elfsight; Maps tetap belum diminta hingga tombol diaktifkan.
- Fixture feed berukuran 1200 px tidak membuat dokumen melebar. Fixture hanya menguji lifecycle/containment, bukan mengklaim feed produksi berhasil dimuat.
- Tombol peta bisa diaktifkan dengan Enter, iframe dimuat sekali, tinggi viewport tetap, fokus dipindah secara terarah, tautan Google Maps selalu tersedia.
- Galeri: panah sebelumnya/berikutnya, dots, Home/End dan pergantian foto lulus. Keempat gambar ada dalam HTML tanpa JavaScript.
- Kegagalan script Elfsight menampilkan fallback dan dua tautan sosial; pengujian error mobile memastikan tinggi feed tidak berubah.
- Metadata/canonical/schema, robots/sitemap, redirect lama, noindex 404, FAQ keyboard, dan responsive diperiksa ulang. Laporan awal tidak ditimpa.
- Screenshot hero mobile/retina dan placeholder peta 320 px ditinjau. Warna tombol/focus menggunakan pasangan warna yang telah diuji sebelumnya; tidak ada warna teks baru.

## Temuan PageSpeed yang memerlukan penanganan berbeda

1. **Redirect ke www.** Screenshot menunjukkan halaman berakhir di `https://www.paleremancafe.web.id`, sedangkan canonical/sitemap yang sebelumnya disepakati memakai `https://paleremancafe.web.id`. Akses publik kedua host pada sesi ini masih ditolak proxy dengan CONNECT 403; bukan bukti server situs mengembalikan 403. Pengaturan domain Vercel tidak tersedia melalui alat sesi ini. Rekomendasi: tetapkan non-www sebagai domain utama di hosting dan arahkan www ke sana agar selaras dengan canonical sekarang; uji dengan URL akhir saat menjalankan PageSpeed. Jika pemilik memilih www sebagai domain utama, seluruh metadata, schema, sitemap, dan tujuan redirect lama perlu dipindah bersama setelah keputusan itu dikonfirmasi. Tidak menambahkan redirect berlawanan dalam Next.js yang berpotensi loop dengan Vercel. Redirect dari URL alternatif ke URL utama memang tetap diperlukan, bukan dihapus untuk membuat semua URL mendapat skor yang sama.
2. **Cache layanan luar.** TTL platform.js Elfsight dan resource Google Maps ditentukan provider. Aplikasi tidak dapat mengubah header origin tersebut. Request ditunda; tidak membuat proxy salinan atau memalsukan cache header. Audit cache masih mungkin muncul setelah widget/peta benar-benar dimuat.
3. **Legacy JavaScript sekitar 14 KiB dan sisa unused JS pihak pertama sekitar 26 KiB.** Temuan berasal dari chunk runtime/framework. Tidak menghapus polyfill framework dengan patch build yang berisiko merusak kompatibilitas. Penghematan unused JS terbesar pada screenshot (Maps) ditangani dengan interaksi eksplisit. Penghapusan seluruh runtime bukan sasaran pekerjaan ini.
4. **CSS render-blocking sekitar 7 KiB/150 ms.** Stylesheet diperlukan untuk render awal dan layout stabil. Tidak menerapkan trik pemuatan CSS terlambat yang menyebabkan halaman tanpa style/CLS. Nilai “unscored” atau estimasi penghematan bukan kewajiban menghilangkan setiap request.
5. **Network dependency tree/preconnect.** Tidak menambahkan preconnect Google/Elfsight ke jalur awal setelah request sengaja ditunda. Preconnect yang dibuat provider dapat muncul saat widget aktif.

## Setelah deployment

Jalankan PageSpeed pada domain akhir yang konsisten; periksa header/redirect publik dan canonical pilihan Google di Search Console. Uji juga feed nyata, caption panjang, peta sesudah klik, serta koneksi mobile. Bandingkan beberapa run, lalu pantau CWV lapangan jika data mencukupi. Tidak perlu mengirim sitemap berulang hanya karena perubahan pemuatan gambar/widget; URL canonical belum berubah.

Bukti ringkas pada repo: `pagespeed-results.json`. Hasil mentah sesi tersimpan di `/tmp/palereman-performance/` (Lighthouse JSON, screenshot, skrip dan hasil fungsi), serta baseline `/tmp/palereman-audit/lighthouse-mobile.json`.
