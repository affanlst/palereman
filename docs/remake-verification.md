# Remake Palereman, 17 Oktober 2026

## Galeri empat foto dalam satu frame

Tiga foto tambahan pengguna kini melengkapi foto interior pertama. Galeri manual mempertahankan kolom Suasana dan tinggi frame, tanpa autoplay atau dependensi tambahan. SEO ditunda sesuai permintaan pengguna.

- PASS: lint, TypeScript, build produksi, dan `git diff --check`.
- PASS: pada 320, 390, 768, 1440 px, seluruh foto dapat dipilih dengan dua panah dan empat indikator. Tombol sebelumnya/berikutnya nonaktif pada batasnya; penanda foto aktif serta slide yang dibaca pembaca layar mengikuti pilihan.
- PASS: native touch swipe di Chromium mobile, keyboard ArrowLeft/ArrowRight/Home/End, dan pilihan foto tetap terjaga saat viewport berubah dari desktop ke mobile. Target seluruh kontrol 44 × 44 px; tidak ada overflow dokumen atau JavaScript page error aplikasi.
- PASS: tinggi frame tidak berubah antarfoto. Gambar memakai object-fit contain, tanpa filter atau pemotongan. Tiga file baru sama persis dengan unggahan pengguna.
- PASS: hanya foto pertama dirender awal; foto lain dimuat setelah dipilih. Loading dan kegagalan gambar diperiksa dengan fixture; memilih foto lain memulihkan tampilan dan kontrol tetap tersedia. Smooth scroll normal serta reduced motion diperiksa terpisah.
- PASS: indikator, garis tombol, fokus, caption, dan pesan memakai warna sistem desain yang sudah diuji. Counter di atas foto memakai bidang hijau solid dan teks krem; ikon panah menandai arah navigasi, bukan ornamen.

[Hasil browser](gallery-browser-results.json) · [Galeri desktop](screenshots/palereman-gallery-desktop.png) · [Galeri mobile](screenshots/palereman-gallery-mobile.png).

## Foto suasana dari pengguna

Bagian Suasana kini memakai foto interior `1000374464.jpg` yang diunggah pengguna, disimpan sebagai `public/images/suasana-palereman.jpg`. Pernyataan lama tentang ketiadaan foto venue merupakan riwayat sebelum unggahan ini.

- PASS: file JPEG 1280 × 959 sama persis dengan unggahan, tanpa filter atau pengeditan gambar. Tampilan mengikuti rasio sumber, dengan pembulatan ukuran dari optimizer gambar; tidak menggunakan crop.
- PASS: lint, TypeScript, build produksi, dan pemeriksaan browser pada 320, 390, 768, 1440 px. Foto berhasil dimuat, tidak ada overflow atau JavaScript page error aplikasi.
- PASS: foto mempunyai alt deskriptif, tidak disembunyikan dari pembaca layar, dan caption ada di bawah gambar. Teks tidak melapisi foto; warna serta indikator fokus memakai sistem desain yang sudah diuji. Tautan Instagram tetap mengarah ke `palereman.png`.

[Suasana desktop](screenshots/palereman-suasana-desktop.png) · [Suasana mobile](screenshots/palereman-suasana-mobile.png).

Bagian sosial kemudian diganti dengan embed Elfsight atas permintaan pengguna. Pemeriksaan kartu video di dokumen ini merupakan riwayat sebelum penggantian. Untuk implementasi dan batas verifikasi terbaru, lihat [penelusuran Elfsight](elfsight-investigation.md).

## Pembaruan logo gunungan

Logo navbar dan footer sekarang memakai `gunungan-palereman-transparent.png`, versi transparan yang direstorasi dari aset pada bagian “Pelan sedikit. Cerita lebih lama.” File gambar asli tidak diubah. Nama Palereman tetap menjadi identitas teks di navbar; link logo kembali ke beranda.

- PASS: sumber transparan 1068 × 1472 px, lebih besar dari sumber awal 657 × 905 px. Pemeriksaan alpha memastikan transparansi tersedia; latar pembungkus CSS transparan dan blend gambar `normal`, tanpa kotak krem.
- PASS: Chromium pada DPR 2 memuat gambar logo dengan alpha dan lebar aktual 96 px, mencukupi kebutuhan tampilan 44 CSS px pada Retina. Screenshot navbar desktop/mobile terbaru diambil pada DPR 2. Detail yang direstorasi merupakan hasil pengolahan gambar, bukan klaim pemulihan sumber vektor asli.

- PASS: lint tanpa warning, TypeScript, build produksi, dan `git diff --check`.
- PASS: pada 320, 390, 640, 768, 1024, 1440 px, logo berhasil dimuat, tidak bertabrakan dengan navigasi, dan tidak menimbulkan overflow.
- PASS: link brand pada header dan footer menuju beranda; menu mobile tetap terbuka dengan Enter dan tertutup dengan Escape; tidak ada JavaScript page error.
- PASS: metadata browser memuat `/icon` dengan MIME `image/png`, ukuran deklarasi dan PNG aktual sama-sama 64 × 64, HTTP 200, ukuran respons 4.177 byte. Ikon dihasilkan saat build dari aset gunungan asli, tanpa dependensi tambahan.
- PASS: identitas visual, kontras teks/fokus, serta informasi bisnis mengikuti Delivery Gate di bawah. Logo dekoratif memakai alt kosong dan label link beranda tetap tersedia untuk pembaca layar. Artwork, pola batik, dan bagian suasana tetap konsisten dengan logo yang dipilih pengguna.

[Navbar desktop](screenshots/palereman-logo-desktop.png) · [Navbar mobile](screenshots/palereman-logo-mobile.png). Screenshot remake penuh di bawah merekam versi sebelum penambahan logo.

## Hasil yang dijalankan

- `npm run lint`, `npm run typecheck`, `npm run build`: exit 0. Server produksi berhasil dijalankan ulang dengan build terbaru.
- Chromium nyata melalui Playwright, viewport 320, 390, 640, 768, 1024, 1440 px: seluruh lima gambar dimuat; lebar dokumen sama dengan viewport; tidak ditemukan elemen keluar halaman. Rail video memang dapat digeser di dalam kontainernya.
- 571 pemeriksaan warna teks yang dirender di enam ukuran: rasio terendah 4,89:1. Perhitungan memakai warna teks dan bidang solid terdekat; teks tidak melapisi foto. Motif tipis pada video tetap memiliki selisih kontras yang cukup terhadap teks hijau tua.
- Fokus pada krem 4,40:1; fokus pada hijau 8,07:1. Batas kontrol video 3,80:1 dan batas tombol sosial footer 4,32:1. Semua di atas 3:1 untuk indikator nonteks.
- 29 tautan desktop diuji melalui klik. Tautan HTTPS membuka tujuan yang sesuai di tab baru memakai respons eksternal fixture; kedua ikon footer juga diuji pada konteks browser terpisah. Tautan telepon diperiksa tanpa melakukan panggilan.
- Lima tautan navigasi mobile diuji; Enter membuka menu, Escape menutupnya, dan pemilihan bagian memindahkan fokus serta menutup menu. Skip link adalah Tab pertama dan Enter memfokuskan main.
- Ketiga tombol video diuji. Respons gagal API disimulasikan untuk menguji loading, error, retry, perpindahan kartu, satu pemutar aktif, dan tutup. Instagram memakai sumber embed yang benar dengan iframe fixture. Home/End menggeser rail melalui keyboard.
- Viewport ekuivalen zoom desktop 200% (1440 menjadi 720 CSS px): tidak ada overflow. Ini pemeriksaan reflow, bukan sertifikasi seluruh teknologi bantu atau perangkat.
- Tidak ada JavaScript page error pada pemeriksaan browser.
- HTTP nyata: homepage 200; `/menu`, `/suasana`, `/kunjungi` menghasilkan 307 ke anchor yang benar; API Instagram 200; ID asing 404; kedua API TikTok 502 fallback.
- `git diff --check`: exit 0. Tidak ada perubahan dependensi, lockfile, atau data kontak.

[Hasil browser terstruktur](remake-browser-results.json), [desktop](screenshots/palereman-remake-desktop.webp), [mobile](screenshots/palereman-remake-mobile.webp). Screenshot berasal dari browser yang menjalankan implementasi, bukan mockup generatif.

## Batas pemeriksaan

Foto venue belum tersedia; situs menggunakan artwork dekoratif yang jelas dan tautan Instagram. Foto menu tetap memakai aset asli yang tersedia. TikTok belum dapat diakses dari server cloud; fallback tetap berfungsi. Keberhasilan API Instagram hanya memverifikasi URL embed. Playback platform, isi Drive, dan peta Google tidak diklaim terverifikasi. Respons eksternal dalam uji klik dan iframe menggunakan fixture untuk menguji perilaku lokal secara terpisah dari platform tersebut.

## Antislop Delivery Gate

Arah dan alasan keputusan: [modern Jawa v4](design-direction-v4.md). Mode during dipilih pengguna.

### Hard Gate

- R-02 PASS: pencarian sumber tidak menemukan em dash pada UI.
- R-03 PASS: keenam viewport tidak memiliki overflow dokumen; gambar berhasil dimuat.
- R-17 PASS: tidak ada statistik pelanggan atau angka promosi; jam serta nomor kontak mengikuti profil terkonfirmasi.
- R-18 PASS: tidak ada testimonial atau avatar rekaan.
- R-23 PASS: artwork wayang dan batik memenuhi permintaan eksplisit pengguna; logo gunungan serta foto menu memakai aset yang ada.
- R-24 PASS: seluruh tujuan navigasi ada dan diuji melalui klik.
- R-25 PASS: 571 pemeriksaan teks memberi minimum 4,89:1; indikator nonteks di atas 3:1.
- R-26 PASS: tautan, menu mobile, tiga kontrol play, retry, dan tutup dijalankan; tidak ada kontrol tanpa aksi.
- R-27 PASS: loading dan error/retry video diuji; jalur kosong tetap memiliki pesan dan tautan Instagram pada komponen.
- R-28 PASS: tidak ada FAQ pengisi.
- R-32 PASS: skip link, Enter, Escape, fokus anchor, Home/End rail, serta indikator focus-visible diperiksa.
- R-33 PASS: perubahan ditulis langsung pada sumber TSX/CSS; tidak ada skrip runtime yang menambal tampilan.
- R-34 PASS: tema brand tetap; tidak ada toggle tema dengan keadaan yang tidak berfungsi.
- R-35 PASS: build produksi dijalankan; klik seluruh tautan dan kontrol dicatat pada hasil browser.
- R-36 PASS: tidak ada klaim keamanan, performa, jumlah pelanggan, atau prestasi rekaan.
- R-37 PASS: arahan modern, Jawa, batik, dan wayang berasal dari permintaan pengguna; dials dinyatakan sebelum implementasi.
- R-38 PASS: tidak ada foto venue, harga menu, fasilitas, atau thumbnail video yang direka.

### Purpose Gate

- R-01 PASS: tidak ada gradient atau glow; hierarki berasal dari bidang warna solid.
- R-04 PASS: ikon play menandai pemutar; ikon Instagram dan pesan menandai tujuan kontak.
- R-06 PASS: Newsreader memberi karakter editorial hangat; Source Sans 3 untuk baca cepat; alasan tercatat di v4.
- R-07 PASS: pola kawung mendukung batik Jawa yang diminta; bukan grid dekoratif generik.
- R-08 PASS: panah pada CTA menandai tujuan eksternal; navigasi, kontak, serta tautan teks lain tidak semuanya diberi panah.
- R-09 PASS: tidak ada badge kapsul atau indikator status palsu.
- R-10 PASS: tidak ada glassmorphism atau backdrop blur.
- R-12 PASS: tidak ada shadow besar pada komponen.
- R-13 PASS: tidak ada glow.
- R-14 PASS: menu menonjolkan Nasi Bakar dengan satu seduhan pendamping; rail video setara karena ketiga video memiliki fungsi yang sama.
- R-19 PASS: hanya feedback hover/focus dan scroll anchor; reduced motion diuji pada browser.
- R-22 PASS: artwork wayang serta gunungan langsung berkaitan dengan identitas Jawa yang diminta.

### Liveliness

- Dials PASS: ENERGY 3 / RHYTHM 3 / MOTION 1 tercatat di arah v4.
- Konsistensi PASS: headline besar serta figur wayang dominan; komposisi menu, suasana, video, dan kunjungan berbeda; tidak ada animasi berulang.
- Fokus visual PASS: hero menonjolkan headline dan satu figur; menu menonjolkan satu hidangan; kunjungan menonjolkan heading serta petunjuk arah.
- Whitespace PASS: jeda bagian 62–104 px dan container bersama memisahkan urutan baca.
- Aksen PASS: tembaga digunakan pada ajakan utama dan detail budaya, dengan bidang baca krem/hijau yang tenang.
- Motif identitas PASS: kawung vektor dan gunungan menghubungkan beberapa bagian tanpa meregangkan raster sepanjang halaman.
- Design Read PASS: arah, audiens, serta ketiga dials diumumkan sebelum implementasi.

### Craftsmanship & Quality Locks

- C-1 PASS: alasan palette, layout, tipografi, ruang, ikon, dan artwork dicatat di v4.
- C-2 PASS: semua kontrol yang ditampilkan mempunyai aksi dan diuji.
- C-3 PASS: bagian hanya memuat pengenalan, menu, suasana, video, dan kunjungan sesuai isi kafe.
- C-4 PASS: enam viewport, navigasi keyboard, reduced motion, dan keadaan video diperiksa.
- C-5 PASS: tidak ada testimonial, statistik, atau foto lokasi rekaan.
- R-05 PASS: susunan editorial menyesuaikan informasi kafe, tanpa kartu fitur, pricing, atau logo pelanggan pengisi.
- R-11 PASS: tombol dan panel berbentuk siku; hanya simbol play memakai lingkaran untuk membedakan kontrol.
- R-15 PASS: CTA menyebut buku menu, Instagram, WhatsApp, atau arah ke Palereman.
- R-16 PASS: tidak ada buzzword teknologi/promosi generik pada copy.
- R-20 PASS: figur wayang, pola kawung, gunungan resmi, serta foto menu membuat identitas Jawa spesifik.
- R-21 PASS: tema tetap mendukung panggung wayang hijau dan kertas menu krem; alasan tertulis di v4.
- R-29 PASS: palette aktif terdiri dari hijau, krem, dan tembaga; perbedaan bidang merupakan turunan palette itu.
- R-30 PASS: komposisi kafe budaya ini tidak meniru dashboard atau landing page produk populer.
- R-31 PASS: semua keputusan utama memiliki alasan satu baris dalam arah v4.
