# PRD Palereman 2.0: desain yang disetujui

Tanggal: 15 Oktober 2026. Status: pengguna menyetujui desain dan implementasi dalam percakapan. Dokumen ini menjadi acuan aktif dan menggantikan ketentuan visual pada PRD 1.1 serta arah panggung v2. Framework, data usaha dan integrasi yang sudah berfungsi tetap digunakan.

## Tujuan

Terapkan landing page satu halaman untuk Palereman Coffee and View dengan nuansa kafe tradisional Jawa yang tenang. Pengunjung dapat mengenali tempat, membuka buku menu Google Drive, melihat video ketika tersedia, serta menemukan lokasi, jam dan kontak.

## Acuan yang disetujui

Mockup terakhir: `docs/design/approved-desktop.webp`. Acuan ini menentukan komposisi, warna, kepadatan mural dan hirarki tipografi. Implementasi menggunakan elemen HTML, font dan media terpisah; gambar mockup tidak menjadi halaman website.

Keputusan pengguna yang wajib dipertahankan:

- Seluruh halaman memakai dasar krem hangat, termasuk footer.
- Mural Jawa sepia keemasan terlihat tetapi tetap menjadi latar. Wayang di atas dan tengah, gunungan di bawah, dihubungkan sulur dan motif abstrak yang bervariasi. Tidak ada tile batik seragam, pola baru per section, atau batas gambar yang memutus latar.
- Header, isi dan footer memakai batas kiri dan kanan yang sama. Navbar jelas dan memiliki penanda section aktif.
- Judul tentang: “Suasana ngopi khas orang Jawa.”
- Suasana: gambar kiri, teks “Lihat tempatnya.” di kanan pada desktop.
- Menu: teks “Mau pesan apa?” di kiri, gambar di kanan.
- Semua informasi, video dan peta berada pada satu halaman.
- Detail lain tetap sederhana: kartu persegi, garis tipis, ruang baca lega, tanpa bingkai ukiran, efek metalik atau bayangan besar.

## Sistem desain

Design Read: ENERGY 2 / RHYTHM 3 / MOTION 1. Krem, cokelat tua dan satu aksen oker mendukung rasa hangat. Ritme berasal dari komposisi yang bergantian dan mural yang mengalir. Motion terbatas pada feedback kontrol dan navigasi; mural tetap diam.

| Elemen | Spesifikasi dan alasan |
| --- | --- |
| Dasar | `#F6F1E7`, krem hangat yang diminta pengguna |
| Teks utama | `#302A23`, cokelat tua untuk keterbacaan pada krem |
| Teks sekunder | `#3C342B`, dibuat cukup gelap untuk menjaga kontras di atas mural |
| Aksen | Oker hangat untuk CTA menu dan underline navbar aktif |
| Mural | Sepia keemasan; target tampak sekitar 25–30%, kepadatan mengikuti mockup |
| Judul | Newsreader variable, serif yang terasa hangat tanpa ornamen huruf berlebihan |
| Isi dan navigasi | Source Sans 3 variable, sans serif untuk keterbacaan dan perbedaan hirarki |
| Penyajian font | WOFF2 lokal dengan lisensi SIL OFL disertakan; tanpa ketergantungan Google Fonts saat runtime |
| Lebar konten | Maksimal 1160px; gutter bersama untuk header, semua section, footer |
| Mobile | Gutter 20–24px; susun satu kolom, menu lipat berlabel; target kontrol minimal 44px |

Mural dekoratif bukan logo atau representasi sejarah yang disertifikasi. Logo gunungan asli tetap dipertahankan sebagai aset identitas. Teks harus tetap terbaca ketika mural berpapasan dengan paragraf. Foto, kartu video dan peta memakai bidang polos agar isi menjadi fokus.

## Struktur dan isi

| Urutan | Bagian | Isi dan perilaku |
| --- | --- | --- |
| 1 | Header | Wordmark Palereman; Tentang, Suasana, Menu, Video, Kunjungi; aktif mengikuti scroll, underline dan `aria-current` |
| 2 | `#beranda` | H1 Palereman; subtitle Coffee and View; pengantar pendek; Lihat Menu ke Drive; Petunjuk Arah ke kunjungi; foto kanan |
| 3 | `#tentang` | Suasana ngopi khas orang Jawa.; dua kolom paragraf ringkas berdasarkan data usaha |
| 4 | `#suasana` | Foto kiri dan teks kanan; pada mobile foto di atas, judul dan paragraf di bawah |
| 5 | `#menu` | Teks kiri, foto Nasi Bakar dari menu kanan; Buka Buku Menu ke Drive |
| 6 | `#video` | Cerita dari Palereman.; tiga slot portrait; embed resmi hanya ketika URL tersedia |
| 7 | `#kunjungi` | Alamat, jam, telepon/WhatsApp kiri; peta Google Maps kanan; link arah tetap tersedia |
| 8 | Footer | Identitas, anchor navigasi, Instagram dan WhatsApp resmi; mural berlanjut sampai bagian bawah |

URL menu: https://drive.google.com/file/d/1L7ihFNGiLOhXX5wK7XbqEQ8DGiBHlEjS/view

Data terkonfirmasi: Singosaren, Setono, Kec. Jenangan, Kabupaten Ponorogo, Jawa Timur 63492. Nomor telepon dan WhatsApp: 0857-2674-1940. Buka 08.00–20.00, Jumat tutup. Maps: https://share.google/8YMx2kgAo053VxVOL. Instagram: https://www.instagram.com/palereman.png/.

Jangan menyalin klaim dekoratif dari gambar generatif sebagai fakta usaha. Parkir, sejarah, fasilitas, nomor statistik dan testimoni tidak ditambahkan tanpa konfirmasi. Informasi operasional pada mockup yang berbeda dari data di atas dikoreksi pada implementasi.

## Media yang tersedia dan belum tersedia

- Logo gunungan dan foto Nasi Bakar berasal dari menu pengguna dan sudah ada di repo.
- Foto venue pernah dikirim sebagai gambar percakapan, tetapi file asli belum tersedia di checkout. Jangan memakai foto buatan seolah foto venue. Hero dan suasana memakai placeholder berlabel sampai file tersedia.
- Pembaruan setelah implementasi desain: pengguna memberikan TikTok `https://vt.tiktok.com/ZSg8Rnhj3/`, TikTok `https://vt.tiktok.com/ZSg88xVLX/` dan Instagram `https://www.instagram.com/reel/DeVtcAhTdTY/`. Ketiganya dipasang sebagai kartu yang dapat dimuat atas permintaan. Cover asli belum diberikan, sehingga kartu memakai label platform tanpa thumbnail buatan. Short link TikTok diselesaikan oleh server melalui redirect HTTPS yang dibatasi ke domain TikTok; jika gagal, tampilkan retry dan tautan sumber.
- Ketika data video ditambahkan: player resmi dimuat setelah klik, satu aktif pada satu waktu, tanpa autoplay bersuara, menyediakan loading/error dan tautan sumber. Jangan scraping profil.
- Peta dimuat secara lazy; iframe boleh diblokir jaringan pihak ketiga. Tautan Maps tetap terlihat dan dapat digunakan.

## Implementasi dan batas perubahan

Next.js App Router, React dan TypeScript yang sudah ada dipertahankan. Utamakan server component; hanya navigasi aktif/mobile dan player yang memerlukan client component. Route lama `/menu`, `/suasana`, `/kunjungi` tetap redirect ke anchor utama. Tidak mengembalikan katalog penuh atau PDF lokal.

Arsip desain lama tetap sebagai riwayat; CSS panggung, pita batik, latar gelap per section dan intro overlay yang menghalangi konten digantikan oleh desain yang disetujui. Loading route memakai status ringan. `prefers-reduced-motion` mematikan smooth scroll dan transisi gerak. Konten dan anchor harus dapat digunakan tanpa JavaScript.

## Kriteria penerimaan

- Komposisi mengikuti mockup yang disetujui, terutama posisi foto suasana dan menu.
- Margin header, isi dan footer sejajar; tidak ada overflow pada 320, 390, 768, 1024 dan 1440px.
- Mural adalah satu komposisi mengalir di seluruh halaman, tidak restart pada batas section. Tetap berfungsi saat isi bertambah dan pada mobile.
- Navbar aktif, semua anchor, menu seluler, tautan Drive/Maps/kontak dan redirect diuji. Menu menutup saat memilih link dan saat Escape; fokus dikembalikan dengan benar.
- Tidak ada kontrol palsu, foto venue buatan, video fiktif, fasilitas atau statistik yang belum terkonfirmasi.
- Teks normal memenuhi kontras AA, focus ring terlihat, keyboard berfungsi dan layout tetap terbaca pada pembesaran 200%.
- Font dan mural disajikan lokal, dekorasi tidak menghalangi klik atau dibaca screen reader. Media memiliki ukuran stabil dan lazy loading sesuai kebutuhan.
- `npm run lint`, `npm run typecheck`, `npm run build` lulus; produksi dijalankan dan diuji melalui browser.
- Screenshot desktop dan mobile hasil website, catatan hasil pemeriksaan serta batas integrasi pihak ketiga disimpan. Performa hanya diklaim bila diukur.

## Sumber arah desain

Persetujuan dan revisi pengguna dalam percakapan, mockup terakhir, serta foto menu/aset usaha yang sudah tersedia. Gambar berwatermark dipakai sebagai rujukan konsep, tidak disalin sebagai aset website. Tidak mengklaim riset platform lain yang belum berhasil diakses. Skill antislop diterapkan dalam mode during sesuai pilihan pengguna.
