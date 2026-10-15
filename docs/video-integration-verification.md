# Integrasi tiga video pilihan

Pengguna meminta pemasangan dua TikTok dan satu Reel Instagram setelah redesign disetujui. Konfigurasi berada pada `src/lib/social-videos.ts`:

- https://vt.tiktok.com/ZSg8Rnhj3/
- https://vt.tiktok.com/ZSg88xVLX/
- https://www.instagram.com/reel/DeVtcAhTdTY/

Parameter tracking Instagram dilepas. Judul kartu bersifat netral karena isi video tidak dapat dilihat dari jaringan cloud. Cover asli belum diberikan; kartu memakai label platform dan tombol Putar, tanpa thumbnail rekaan.

Instagram memiliki URL embed langsung. TikTok memakai short link yang diselesaikan saat klik melalui `/api/videos/[id]`. Endpoint hanya menerima ID dari konfigurasi, mengikuti maksimal lima redirect HTTPS pada hostname TikTok yang ditentukan, dengan deadline delapan detik. Tujuan redirect diperiksa sebelum setiap permintaan; tidak membaca HTML atau meng-host ulang video. Ketika resolusi gagal, kartu menampilkan retry dan tautan sumber tetap terlihat.

## Hasil pemeriksaan

- `npm run lint`, `npm run typecheck`, `npm run build`: exit code 0. Route API tercatat sebagai route dinamis dalam build produksi.
- Resolver: 13 kasus lulus, meliputi URL canonical, redirect, batas jumlah redirect, error upstream, hostname palsu, protokol/port terlarang dan kredensial pada URL. ID video pada fixture hanya untuk test dan tidak dimasukkan ke konfigurasi pengguna.
- Browser produksi: ketiga sumber terpasang dengan benar; tidak ada request pemutar/resolver sebelum klik; satu pemutar aktif; perpindahan antarkartu, tutup, failure/retry dan pembatalan resolusi lama lulus. Respons API dan iframe platform disimulasikan untuk menguji perilaku UI, bukan untuk membuktikan playback asli.
- Lebar 320, 390, 768, 1440px tidak memiliki overflow setelah perbaikan containing block pada kartu video. Label screen reader tidak lagi keluar dari rail pada mobile.
- Pemeriksaan kontras latar/teks diulang setelah tinggi section berubah: 591 kotak baris teks pada 320, 360, 390, 640, 768, 1024, 1440px memenuhi ambang AA yang diperiksa.
- Endpoint Instagram nyata mengembalikan URL embed yang sesuai (HTTP 200); ID tidak terdaftar mengembalikan HTTP 404. Kedua short link TikTok menghasilkan fallback HTTP 502 karena koneksi TikTok ditolak proxy cloud. Respons tidak membocorkan detail internal.
- [Screenshot desktop](screenshots/palereman-video-desktop.png) dan [mobile](screenshots/palereman-video-mobile.png) memperlihatkan kartu hasil implementasi. Screenshot halaman utama juga diperbarui.

## Batas integrasi

Playback asli Instagram/TikTok belum dapat diverifikasi dari jaringan ini. Selain akses server ke redirect TikTok, browser pengunjung harus dapat memuat pemutar platform; konten privat/dihapus, pembatasan wilayah atau pengaturan embed dapat menghalanginya. Tautan Tonton di TikTok/Instagram tetap tersedia pada setiap kartu. URL TikTok canonical yang lengkap dapat menggantikan short link di konfigurasi agar tidak memerlukan resolusi server.
