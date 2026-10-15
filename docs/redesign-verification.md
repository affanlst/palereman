# Pemeriksaan redesign Palereman

15 Oktober 2026. Acuan: [PRD 2.0](PRD-Palereman-v2-approved.md) dan [mockup yang disetujui](design/approved-desktop.webp). Pemeriksaan dilakukan pada website Next.js hasil implementasi, bukan pada gambar mockup. Antislop mode during, sesuai pilihan pengguna dalam percakapan.

## Build dan runtime

`npm run lint`, `npm run typecheck`, dan `npm run build` selesai dengan exit code 0. Production dijalankan menggunakan `npm run start -- --port 4183`, lalu diperiksa melalui Chromium/Playwright. Tidak ditemukan error JavaScript halaman pada rangkaian fungsional. `git diff --check` diperiksa sebelum penyimpanan perubahan.

## Tata letak dan visual

| Pemeriksaan | Hasil |
| --- | --- |
| Lebar 320, 360, 390, 640, 768, 1024, 1440px | Tidak ada overflow dokumen |
| Container header, seluruh section dan footer | Batas kiri/kanan sama, selisih kurang dari 1px pada pengukuran browser |
| Target interaktif yang terlihat | Minimal 44 × 44px pada seluruh ukuran yang diuji |
| Suasana desktop | Gambar kiri, tulisan kanan |
| Menu desktop | Tulisan kiri, gambar Nasi Bakar kanan |
| Mobile | Satu kolom; foto suasana di atas teks; tiga video di rail yang bisa digeser |
| Mural | Satu lapisan halaman; tidak dimulai ulang pada batas section; footer tetap memiliki latar |
| Font | Newsreader untuk judul dan Source Sans 3 untuk isi berhasil dimuat dari aset lokal |
| Gambar | Foto menu asli; placeholder eksplisit untuk foto venue, tanpa foto kafe buatan |

Screenshot hasil browser: [desktop](screenshots/palereman-desktop.png), [mobile](screenshots/palereman-mobile.png), [menu mobile terbuka](screenshots/palereman-mobile-nav.png), [section suasana](screenshots/palereman-suasana.png). Screenshot desktop dan mobile diperiksa secara visual. Perubahan kecil pada scroll padding rail menjaga kartu pertama tetap sejajar setelah tombol Home.

## Navigasi dan kontrol

- Sepuluh link section di navbar dan footer diklik; hash, posisi judul di bawah header dan penanda navbar aktif diperiksa.
- Logo header dan footer menuju beranda. Petunjuk Arah di hero menuju kunjungi.
- Delapan tautan eksternal diklik dan membuka tab baru dengan URL yang sesuai: dua Drive, suasana/Instagram, Google Maps, WhatsApp, Instagram pada section video, dan dua tautan footer. Navigasi eksternal diintersep oleh browser test untuk memeriksa tujuan; ini tidak membuktikan isi layanan eksternal dapat diakses publik.
- Nomor telepon memakai `tel:+6285726741940`. Pemanggilan aplikasi telepon pada perangkat fisik tidak diuji.
- `/menu`, `/suasana`, `/kunjungi` berakhir pada anchor beranda yang sesuai. Halaman tidak ditemukan dan tombol kembali ke beranda diuji.
- Menu seluler dibuka dengan Enter, ditutup dengan Escape dan mengembalikan fokus ke summary. Memilih link menutup menu dan memindahkan fokus ke section tujuan.
- Rail video dapat difokuskan. ArrowRight, End dan Home diuji; kartu terakhir dan kartu pertama dapat dicapai tanpa mouse. Tidak ada tombol play palsu pada placeholder.
- Skip link menampilkan focus ring dan mencapai main. Konten, menu native, anchor dan URL buku menu tetap tersedia saat JavaScript dimatikan.
- Reflow pada viewport CSS 640px, setara lebar efektif zoom 200% dari layar 1280px, tidak memiliki overflow. Ini bukan pengujian pinch zoom pada perangkat fisik.

## Kontras dan antislop

Formula luminansi WCAG digunakan untuk warna dasar. Teks sekunder `#3C342B` pada krem `#F6F1E7` sekitar 10,86:1; teks pada tombol oker sekitar 7,51:1; batas tombol terhadap krem sekitar 3,50:1; focus ring terhadap krem sekitar 5,96:1.

Kontras di atas mural diperiksa melalui screenshot latar dengan teks disembunyikan sambil mempertahankan layout, kemudian sampel piksel di kotak baris teks dibandingkan dengan warna teks. Sebanyak 549 kotak baris pada tujuh lebar di atas memenuhi ambang 4,5:1 untuk teks normal dan 3:1 untuk teks besar. Teks isi digelapkan setelah pemeriksaan awal menemukan beberapa persilangan dengan motif yang terlalu rendah kontrasnya. Pemeriksaan ini meliputi halaman utama saat ini; penambahan isi atau aset baru perlu diperiksa ulang.

Delivery Gate yang relevan:

- Tidak ada statistik, testimoni, fasilitas parkir, kanal YouTube atau video resmi yang dikarang dari gambar generatif.
- Semua item navbar mempunyai target nyata. Kontrol yang tampil memiliki tindakan, termasuk rail placeholder yang bisa digeser.
- Empty state video dan placeholder foto jelas. Player mempunyai status loading, failure/retry, close dan tautan sumber, tetapi integrasi dengan unggahan asli belum diuji karena belum ada URL.
- Palet, font, susunan kolom, ruang dan motif mengikuti keputusan pengguna yang tercatat dalam PRD. Tidak ada tema gelap, shadow besar, glow, bingkai ukiran kartu atau gradient dekoratif. Mask fade pada lapisan mural mobile hanya untuk menyambungkan potongan responsif.
- Mural statis; reduced motion menonaktifkan smooth scroll dan transisi. Tidak ada overlay intro yang menghalangi isi.
- Source ditulis langsung; tidak memakai script pengganti string untuk memasang fitur atau CSS. Script browser hanya dipakai untuk pemeriksaan dan screenshot.

## Batas yang masih berlaku

Foto venue asli belum tersedia sebagai file proyek. URL Reel/TikTok dan cover resmi belum tersedia, sehingga perilaku pemutar dengan media nyata belum dapat diverifikasi. Google Maps iframe dan akses anonim Google Drive ditolak proxy cloud; tautan Maps selalu terlihat sebagai alternatif. Tidak ada klaim skor Lighthouse, LCP, INP atau validasi pada perangkat fisik. Screenshot peta memperlihatkan bidang iframe yang belum dapat dimuat dari jaringan ini.
