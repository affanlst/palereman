# Elfsight Social Feed: integrasi dan penelusuran

17 Oktober 2026. Widget milik pengguna: `f1b94c89-8127-4922-8666-ab81c060cd92`. Instagram dan TikTok yang diminta sama-sama `palereman.png`.

## Perbaikan overflow mobile setelah widget dimuat

Pengguna melaporkan bahwa feed live sudah tampil, tetapi membuat halaman dapat bergeser horizontal. Pemeriksaan sebelumnya hanya membuktikan fallback dan fixture sederhana, sehingga tidak mencakup root provider yang melebar setelah mount.

Reproduksi layout yang sengaja memakai root `width: 100vw; min-width: 480px` dan tombol panah di luar tepi membuat lebar dokumen 522 px pada viewport 390 px sebelum perbaikan. Ini fixture regresi, bukan hasil pembacaan DOM Elfsight asli.

Wrapper feed kini memiliki containment ukuran inline, batas overflow horizontal lokal, serta gutter untuk tombol carousel. Lebar maksimum dan minimum root publik serta root tingkat pertama dibatasi terhadap kolom, termasuk ketika provider mengubah inline style sesudah load. Tidak ada aturan overflow tersembunyi pada body/html, perubahan tinggi tetap mengikuti konten, dan layout internal track tidak dipaksa menjadi selebar halaman.

- PASS: lint, TypeScript, build produksi, dan `git diff --check`.
- PASS: pada 320, 360, 390, 412, 430, 768, 1440 px, lebar dokumen sama dengan viewport sebelum dan sesudah mount fixture.
- PASS: root yang berubah ke 1200 px, elemen turunan selebar 2000 px, negative margin carousel, dan iframe dengan fixed/min-width tidak menambah lebar halaman.
- PASS: kedua tombol carousel di gutter berada di dalam viewport dan dapat diklik; caption panjang membuat tinggi feed bertambah; galeri foto tetap dapat bergeser secara lokal.
- PASS: tidak ada JavaScript page error aplikasi; overflow-x body/html tetap visible, bukan dipakai untuk menyembunyikan masalah global.
- Batas: pada pemeriksaan ulang, runtime Elfsight tetap ditolak proxy cloud dengan CONNECT 403. Perbaikan diuji terhadap reproduksi layout yang gagal sebelum perubahan; tampilan posting asli dan seluruh kontrol provider tetap perlu dikonfirmasi pada deployment publik.

[Hasil regresi overflow](elfsight-overflow-results.json). SEO tetap ditunda sesuai arahan pengguna.

## Yang benar-benar dapat diperiksa

Snippet pengguna memasang `https://elfsightcdn.com/platform.js` dan sebuah container berkelas `elfsight-app-f1b94c89-8127-4922-8666-ab81c060cd92` dengan atribut lazy. Username, daftar unggahan, dan kredensial tidak ada pada snippet. Karena itu, memasang kode ini tidak sekaligus mengubah sumber akun di dashboard Elfsight.

Penelusuran dimulai sebelum mengganti komponen lokal. Permintaan HTTPS ke `elfsightcdn.com/platform.js` ditolak proxy lingkungan pada CONNECT: HTTP 403, `server: envoy`. Browser Chromium juga menghasilkan `net::ERR_TUNNEL_CONNECTION_FAILED`. Tidak ada body JavaScript yang berhasil diunduh untuk dianalisis.

Probe read-only ke calon endpoint bootstrap `https://core.service.elfsight.com/p/boot/?w=f1b94c89-8127-4922-8666-ab81c060cd92` juga ditolak saat CONNECT. Path bootstrap ini merupakan kandidat investigasi, bukan endpoint yang berhasil diamati dari script atau response widget. Tidak ada konfigurasi widget, respons feed, atau sumber akun live yang berhasil dibaca. Kegagalan proxy cloud ini tidak membuktikan bahwa widget rusak pada website publik.

## Bagaimana embed semacam ini dapat langsung tampil

Yang terlihat langsung dari snippet adalah pemuatan runtime JavaScript dan pemilihan instance widget lewat UUID. Penjelasan arsitektur umum yang masuk akal adalah runtime membaca ID, mengambil konfigurasi/data dari layanan penyedia, lalu merender feed ke container. Layanan feed biasanya menyiapkan data dan media di backend/cache sehingga browser tidak perlu meminta seluruh profil Instagram/TikTok sendiri setiap kali halaman dibuka.

Bagian backend/cache tersebut adalah penjelasan pola implementasi, bukan hasil reverse engineering terhadap backend Elfsight. Cara autentikasi, cache, refresh, pembatasan paket/domain, serta pengambilan media pada widget ini belum dapat dikonfirmasi tanpa respons live. Tidak ada endpoint privat, kredensial, atau metode pengambilan data yang direka sebagai hasil penemuan.

Jika membuat pengganti mandiri, lapisan tampilan saja cukup untuk merender daftar posting yang sudah tersedia. Feed otomatis memerlukan sumber data yang sah, misalnya integrasi API resmi dengan akun yang mengizinkan akses, proses server untuk refresh/cache, dan komponen UI. Dua username saja belum menyediakan data posting maupun izin API. Belum dibuat pengganti yang berpura-pura mengambil feed otomatis.

## Implementasi situs

- `src/components/social-feed.tsx` memuat script resmi sekali melalui `next/script` dengan `afterInteractive`. UUID dan atribut lazy mengikuti snippet pengguna.
- Tiga kartu video lama tidak lagi dirender. Anchor `#video` dipertahankan agar tautan lama tetap berlaku; nama navigasinya menjadi Sosial.
- Status lokal menangani pemuatan, kegagalan script, serta pemuatan yang lebih lama dari 15 detik setelah bagian mendekati viewport. Output provider tetap boleh muncul setelah timeout, tanpa menghapus container. Pendeteksi output hanya menandakan adanya DOM provider; tidak menyatakan bahwa API atau posting live telah terverifikasi.
- Tautan profil Instagram dan TikTok selalu tersedia. Tombol “Muat ulang halaman” memiliki aksi reload yang sesuai namanya.
- Batas ukuran root ditetapkan melalui wrapper lokal dan elemen tingkat pertama, tanpa bergantung pada nama kelas internal provider. Tidak ada penghilangan atribusi atau salinan script provider; data, track carousel, dan isi feed tetap dikelola Elfsight.
- Komponen serta API video lama disimpan sebagai implementasi sebelumnya; tidak dipakai oleh homepage.

## Hasil pemeriksaan

- PASS: lint, TypeScript, dan build produksi.
- PASS: 320, 390, 768, 1440 px tanpa overflow dokumen pada keadaan jaringan nyata yang gagal; satu request loader per dokumen, UUID tepat, dan kartu lama tidak tampil.
- PASS: fallback kegagalan script nyata terbaca; tidak ada JavaScript page error aplikasi. Kedua profil mengarah ke URL `palereman.png` yang tepat.
- PASS dengan fixture: output widget disisipkan ke container, status lokal menghilang, reload memulihkan keadaan gagal, dan kedua profil membuka tab baru. Ini bukan bukti posting Elfsight asli tampil.
- PASS dengan fixture dan waktu virtual: timeout tidak dimulai saat bagian masih jauh di bawah viewport; pesan lambat muncul setelah bagian terlihat; output yang datang belakangan tetap dapat tampil.
- Belum terverifikasi: script live, konfigurasi widget, unggahan akun, serta tampilan/kontrol provider pada desktop/mobile. Pengujian visual provider menunggu akses jaringan, bukan digantikan oleh hasil fixture.

[Hasil browser terstruktur](elfsight-browser-results.json). Screenshot menunjukkan fallback cloud nyata: [mobile](screenshots/elfsight-390-cloud-fallback.png), [desktop](screenshots/elfsight-1440-cloud-fallback.png). Tidak ada screenshot feed palsu yang disebut sebagai hasil live.

## Konfigurasi cloud yang disimpan

Draft akses jaringan menambahkan `elfsightcdn.com` dan `core.service.elfsight.com`, sambil mempertahankan lima domain TikTok yang sudah tersimpan serta preset package manager. Draft tersimpan terkonfirmasi, tetapi perubahan belum diterapkan atau dipublikasikan oleh proses penyimpanan ini.

Untuk melanjutkan penelusuran live dari cloud, review dan simpan perubahan di environment settings, lalu publish environment. Setelah akses benar-benar berlaku, ulangi unduhan runtime, amati request provider di browser, periksa sumber Instagram/TikTok pada konfigurasi widget, lalu uji unggahan serta kontrol asli. Domain CDN/media tambahan hanya dapat ditentukan dari request yang benar-benar terlihat. Untuk akun widget sendiri, pastikan kedua sumber di dashboard Elfsight menggunakan `palereman.png`.

## Pemeriksaan desain lokal

PASS: warna, tipografi, motif, dan kontras teks fallback memakai sistem desain Jawa yang sudah diuji; tautan dan tombol memiliki fokus serta target sentuh. PASS: tidak ada unggahan, thumbnail, testimoni, atau data sosial buatan pada UI produksi. PASS: status loading/error/slow dan tautan keluar tetap jelas pada mobile. Bagian provider belum diberi klaim lulus aksesibilitas atau visual karena DOM live-nya belum dapat diperiksa.
