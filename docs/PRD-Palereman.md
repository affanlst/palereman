# PRD Revisi Website Palereman

> Arsip versi 1.1. Acuan aktif adalah [PRD 2.0: desain yang disetujui](PRD-Palereman-v2-approved.md), yang menggantikan ketentuan visual dan motion dokumen ini berdasarkan ACC pengguna.
Versi 1.1 | Spesifikasi revisi implementasi existing | 15 Oktober 2026

## 1. Tujuan revisi
Ubah website yang sudah ada menjadi landing page single page premium untuk Palereman Coffee and View. Semua informasi utama berada pada satu halaman dengan beberapa section. Section View Menu membuka menu di Google Drive.

Dokumen ini menggantikan PRD brainstorm 0.1 yang sebelumnya ada pada path ini. Gunakan source existing sebagai dasar revisi. Jangan membangun ulang proyek dari nol atau mengembalikan katalog makanan lengkap.

Permintaan pengguna yang menjadi acuan:
- Single page dengan section, bukan halaman menu/suasana/kunjungi terpisah.
- View Menu langsung menuju link Google Drive.
- PDF menu menjadi referensi desain; seluruh buku tidak dimasukkan ke website atau repo.
- Nuansa premium, batik Jawa dan wayang, dengan warna dari PDF serta logo asli.
- Ada loading animation in/out, gerak gunungan, dan video Instagram/TikTok resmi.
- Tetap Next.js dan bisa dijalankan di server sendiri.

## 2. Kondisi source saat diperiksa
Repository: https://github.com/affanlst/palereman
Branch: main. Tree yang diperiksa: e9bcec4ccf58d4bc1ad2c7ea32ddf8f0ad03f759.
Penilaian berikut berasal dari pembacaan source dan struktur repository. Tidak ada klaim bahwa website sudah dijalankan, screenshot terbaru telah diperiksa, atau hasil visual sudah lolos pengujian.

| Area | Kondisi teramati | Revisi yang diperlukan |
| --- | --- | --- |
| Framework | package.json: Next.js 16.4.1, React 19.3.1, TypeScript | Gunakan stack existing; tidak perlu migrasi framework |
| Beranda | src/app/page.tsx berisi hero, intro, daftar tiga menu beserta harga, visit strip | Susun menjadi section landing page; ganti daftar harga menjadi View Menu |
| Navigasi | Header/footer menuju /menu, /suasana, /kunjungi | Ubah menjadi anchor pada satu halaman |
| Katalog | /menu memakai MenuBrowser dan data src/lib/menu.ts | Lepas katalog, pencarian dan filter dari pengalaman utama |
| PDF | public/menu-palereman.pdf, sekitar 582 KB; halaman menu menawarkan unduhan | Hapus PDF dari working tree dan deployment saat revisi kode |
| Suasana | Route /suasana dan hero memakai placeholder foto | Pindahkan galeri ke section beranda; isi dengan foto asli terverifikasi |
| Kunjungi | Route /kunjungi memakai profile.address, hours, Maps, telepon dan WhatsApp | Pindahkan ke section #kunjungi, gunakan data existing |
| Branding | Logo gunungan sudah ada di public/images/logo-palereman.png; CSS memakai putih-emas | Gunakan aset dan palet existing sebagai dasar |
| Animasi | CSS yang dibaca hanya menunjukkan transisi tombol; tidak terlihat loader atau gerak gunungan | Tambahkan animasi spesifik sesuai bagian 6 |
| Video sosial | Tidak ditemukan komponen/section video pada source yang diperiksa | Tambahkan section video resmi |

README dan src/lib/profile.ts mencatat bahwa alamat berasal dari screenshot Maps pengguna, serta jam dan nomor telah dikonfirmasi pengguna. Pertahankan data tersebut saat memindahkan layout. Jangan menggantinya dengan tebakan hasil pencarian. README juga mencatat foto venue belum tersedia.

Catatan ukuran: PDF referensi awal sekitar 58,6 MB, sedangkan salinan yang sudah ada di repo sekitar 582 KB. Masalah revisi ini adalah bentuk pengalaman menu dan penempatan file, bukan menyatakan salinan repo masih 58,6 MB.

## 3. Bentuk akhir: satu halaman
Route utama / berisi section berikut. Urutan ini menjadi acuan revisi; jarak dan komposisi ditentukan dari isi serta aset nyata.

| Urutan | Section / ID | Isi dan aksi utama |
| --- | --- | --- |
| 1 | Hero / #beranda | Foto utama, identitas, pengantar singkat; View Menu ke Drive |
| 2 | Tentang / #tentang | Cerita singkat berbasis fakta dan logo gunungan asli |
| 3 | Suasana / #suasana | Foto tempat yang dikurasi |
| 4 | View Menu / #menu | Pengantar ringkas, satu foto hidangan bila perlu, tombol View Menu |
| 5 | Video / #video | Video pilihan Instagram dan TikTok resmi |
| 6 | Kunjungi / #kunjungi | Alamat, jam, Maps, telepon dan WhatsApp |
| 7 | Footer | Identitas dan tautan resmi ringkas |

Navbar: Tentang, Suasana, Menu, Video, Kunjungi. Item Menu menggulir ke #menu. Tombol bertuliskan View Menu membuka Drive. Logo menuju #beranda. Section memiliki offset scroll agar heading tidak tertutup header; navigasi seluler menutup setelah memilih anchor.

Route lama /menu, /suasana, /kunjungi tidak lagi menjadi halaman konten terpisah. Tangani tautan lama dengan redirect ke /#menu, /#suasana, /#kunjungi, lalu verifikasi perilaku hash pada server produksi. Redirect bukan alasan untuk mempertahankan katalog lama.

## 4. View Menu: pengganti katalog existing
Bagian ini adalah perubahan prioritas tertinggi.

- Ganti featured-list berisi harga di beranda dengan section visual View Menu yang ringkas.
- Semua CTA menu, termasuk hero dan footer jika ada CTA, memakai satu konfigurasi menuDriveUrl.
- Gunakan link biasa menuju URL Drive yang diberikan pengguna, target="_blank", rel="noopener noreferrer", dan keterangan aksesibel bahwa tujuan dibuka di tab baru.
- Tidak ada PDF viewer, flipbook, embed seluruh buku, daftar lengkap makanan, tabel harga, pencarian nama, filter kategori/suhu, atau tombol download PDF lokal.
- Lepas import menuItems/formatRupiah dari beranda ketika tidak lagi dipakai. Hapus komponen dan data katalog yang sudah tidak direferensikan.
- Hapus public/menu-palereman.pdf dari versi kode berikutnya; file tidak ikut public assets, build atau deployment. Tidak perlu menulis ulang riwayat Git untuk revisi ini.
- Gunakan logo dan aset foto terpilih yang sudah diekstrak; tidak perlu memasukkan PDF sumber kembali.
- URL Drive belum diberikan pada percakapan ini. Jangan mengarang link. Saat pengembangan tandai konfigurasi belum lengkap; link valid yang dapat dibuka tanpa login menjadi syarat peluncuran.
- Perubahan isi dokumen di Drive dengan URL tetap tidak membutuhkan deploy website. Perubahan URL cukup melalui menuDriveUrl.

## 5. Revisi visual premium
Design Read: ENERGY 2/5, RHYTHM 3/5, MOTION 3/5. Tenang dengan komposisi bervariasi dan animasi identitas yang jelas.

### Riset referensi desain wajib sebelum revisi visual
Pelaksana wajib mencari dan melihat referensi aktual di Dribbble (https://dribbble.com/) dan Pinterest (https://www.pinterest.com/) sebelum mengerjakan revisi visual. Jangan hanya menyebut platform tanpa membuka karya/pin yang dipilih.

- Cari beberapa arah yang relevan: premium cafe website, restaurant editorial landing page, Indonesian heritage branding, Javanese batik graphic design, wayang gunungan, serta hospitality website motion.
- Kurasi 4–6 referensi total dengan minimal dua dari setiap platform. Pilih berdasarkan kecocokan dengan Palereman, bukan sekadar popularitas.
- Catat dalam docs/design-references.md: URL karya/pin spesifik, judul atau kreator jika tersedia, tanggal akses, bagian yang diamati, alasan cocok, dan cara adaptasi untuk Palereman. Gunakan link sumber asli bila pin mengarah ke karya lain.
- Bandingkan komposisi hero, hirarki tipografi, penempatan foto, ritme section, pemakaian ornamen, CTA menu, mobile layout dan motion jika referensi memang memperlihatkannya. Jangan mengklaim gambar statis membuktikan interaksi atau responsif.
- Buat sintesis arah: referensi mana membantu layout, tipografi, batik/gunungan dan animasi. Pertahankan putih-emas PDF, logo asli, single page dan View Menu ke Drive sebagai batas brief.
- Adaptasi prinsip desain dengan konten Palereman. Jangan menyalin satu tampilan utuh, mengganti merek saja, atau memakai foto/logo/aset karya orang lain sebagai aset website.
- Jika platform membutuhkan login atau konten tidak dapat diakses, catat batas akses dan referensi yang benar-benar terlihat. Jangan mengarang tautan, isi karya atau hasil riset.
- Riset menghasilkan dasar desain yang konkret, bukan alasan menambah fitur atau mengubah scope. Tidak perlu meminta persetujuan baru untuk pilihan rutin yang sudah sesuai brief.

### Warna dan tipografi
Pertahankan putih #FFFFFF, teks #25231F, emas logo #F3CB51, dan emas muda #EFD478. Tautan kecil dapat memakai #8A6B20 agar terbaca pada putih. Nilai tersebut mengikuti referensi PDF dan token existing, bukan alasan untuk menambah warna lain.

Judul serif dan isi sans tetap menjadi arah. Source sekarang memakai Georgia dan Arial/Helvetica. Evaluasi bentuk dan keterbacaan dalam revisi visual; kandidat Cormorant Garamond dan Source Sans 3 boleh dipilih bila hasilnya lebih sesuai, dengan font berlisensi dan disajikan lokal. Pergantian font tidak menjadi pengganti perbaikan komposisi.

### Gunungan dan batik
- Pertahankan bentuk, warna serta proporsi logo asli. Header memakai identitas yang tetap mudah dibaca.
- Batik menjadi pita pemisah atau ornamen tepi; satu keluarga motif, misalnya kawung, sebagai usulan desain. Jangan mengklaim motif tersebut bagian dari logo asli.
- Gunungan menjadi pusat gerak. Batik di sekitarnya tetap diam.
- Gunakan satu motif dominan pada satu bidang, tanpa pola di belakang teks penting.
- Jangan menambahkan tokoh wayang secara acak. Gunungan existing sudah menjadi unsur wayang utama.

### Komposisi dan copy
- Prioritaskan foto tempat nyata sebagai daya tarik hero dan section Suasana. Placeholder saat ini adalah kebutuhan konten yang belum terpenuhi, bukan visual final.
- Susun bergantian antara foto lebar, pengantar singkat, View Menu ringkas, video portrait dan informasi kunjungan.
- Hapus copy internal proses seperti “sudah kami cocokkan dengan dokumen menu”, “ditranskripsi dari PDF”, serta nomor halaman sumber dari tampilan pengunjung.
- Gunakan CTA spesifik: View Menu, Petunjuk Arah, Hubungi Palereman.
- Hindari kartu seragam untuk setiap bagian, watermark di belakang teks, bayangan besar, efek emas metalik berlebihan, dan animasi pada semua elemen. Keputusan visual harus punya fungsi identitas, hierarki atau keterbacaan.

## 6. Loading in/out dan gerak gunungan
### Loading
Bidang putih dengan gunungan emas. Entry opacity/translateY 8–12px sekitar 250–350ms. Saat konten siap, bidang keluar melalui reveal ke atas sekitar 400–550ms, seperti layar panggung membuka.

Tampilkan hanya saat diperlukan; ambang awal sekitar 150–200ms untuk menghindari kilatan. Tidak ada waktu tunggu minimum buatan atau progress persen palsu. Jangan menunggu seluruh foto/video di bawah layar. Intro penuh maksimal sekali per sesi tab; kegagalan penyimpanan sesi tidak boleh merusak situs.

Konten siap tetap dapat diakses. Kesalahan gambar, JavaScript atau koneksi tidak boleh mengunci overlay. Status loading disampaikan sebagai teks aksesibel.

### Gunungan
- Titik tumpu bawah-tengah; rotasi sekitar -2 sampai +2 derajat, translateY maksimal 4–6px.
- Kesan gerak berasal dari tangkai wayang. Tidak memantul atau berputar penuh.
- Gunakan gunungan sebagai objek utuh; jangan memecah logo atau menggoyangkan tulisan merek. Bila perlu pisahkan aset gunungan dari lockup dengan mempertahankan bentuk asli.
- Loader boleh berulang selama loading aktual. Gunungan dekoratif memainkan satu rangkaian 4–5 detik saat masuk viewport lalu berhenti. Bila kelak dibuat berulang terus, sediakan kontrol jeda.
- Hentikan di luar viewport dan tab tidak aktif; satu gunungan bergerak pada satu waktu.

### Section dan komponen
Reveal section fade/translateY maksimal 8px selama 220–320ms, satu kali. Jangan menyembunyikan kembali section ketika pengguna membaca. Menu mobile masuk/keluar sekitar 180–240ms; lightbox sekitar 160–220ms. Navigasi anchor dan link Drive tidak ditunda demi animasi.

Gunakan transform/opacity untuk gerak sederhana. prefers-reduced-motion mematikan goyangan, geser dan reveal besar. Versi tanpa JavaScript tetap menampilkan informasi dan link menu.

## 7. Section video Instagram dan TikTok
Judul usulan: Cerita dari Palereman. Tampilkan sekitar tiga video pilihan di halaman utama, dengan sampul portrait, judul pendek dan label platform. Mobile memakai urutan ringkas yang bisa digunakan dengan sentuhan maupun keyboard.

- Instagram acuan pengguna: https://www.instagram.com/palereman.png/ .
- Akun TikTok dan URL video spesifik belum terverifikasi. Lengkapi sebelum menampilkan klaim video resmi; jangan menebak akun.
- Gunakan embed resmi yang dimuat ketika pengunjung menekan Putar Video. Sebelum itu tampilkan sampul lokal yang berhak dipakai, bukan semua script pemutar sekaligus.
- Klik pertama memuat player; pemutaran mengikuti kontrol platform. Tidak ada autoplay bersuara.
- Pertahankan atribusi dan kontrol resmi. Jangan memotong player untuk memaksanya cocok dengan frame desain.
- Sediakan Tonton di Instagram/TikTok, status loading, serta fallback untuk video privat/dihapus, pembatasan, atau embed gagal.
- Video dipilih manual melalui data konfigurasi; jangan menyebutnya feed terbaru otomatis.
- Satu player aktif pada satu waktu. Loading player tidak memicu intro gunungan seluruh halaman.
- Detail integrasi diverifikasi terhadap dokumentasi resmi platform saat implementasi. Tidak melakukan scraping atau meng-host ulang video sebagai pengganti embed.

## 8. Peta pekerjaan implementasi
Tabel ini adalah instruksi perubahan berikutnya, bukan daftar file yang sudah diubah pada pembaruan PRD.

| File / area | Tindakan revisi |
| --- | --- |
| src/app/page.tsx | Susun semua section, ganti daftar harga, tambahkan galeri, View Menu, video dan detail kunjungan |
| src/components/site-header.tsx | Anchor navigation, penutupan menu mobile dan offset/fokus yang benar |
| src/components/site-footer.tsx | Anchor/tautan resmi, hapus disclaimer internal transkripsi menu |
| src/app/menu/page.tsx | Ganti katalog dengan redirect ke /#menu |
| src/app/suasana/page.tsx | Pindahkan isi ke section; route menjadi redirect |
| src/app/kunjungi/page.tsx | Pindahkan detail kunjungan; route menjadi redirect |
| src/components/menu-browser.tsx | Hapus setelah tidak dipakai |
| src/lib/menu.ts | Hapus setelah seluruh ketergantungan katalog dilepas |
| src/lib/profile.ts | Pertahankan data usaha; tambah konfigurasi terkait bila sesuai atau pisahkan site config |
| public/menu-palereman.pdf | Hapus dari working tree revisi |
| public/images | Pertahankan logo/foto pilihan; tambahkan media venue terverifikasi dan teroptimasi |
| src/app/globals.css | Tata section, batik, responsif, animasi dan reduced motion; bersihkan style katalog tidak terpakai |
| Komponen baru sesuai kebutuhan | Loader, gunungan, galeri dan social video; jangan ubah seluruh halaman menjadi client component |
| docs/design-references.md | Tambahkan hasil kurasi Dribbble/Pinterest dan sintesis arah visual sebelum revisi UI |
| README.md | Sesuaikan dokumentasi menjadi single page + Drive, bukan searchable menu/PDF download |

## 9. Data yang dibutuhkan
1. URL menu Google Drive yang dapat dibaca pengunjung tanpa login.
2. Foto asli tempat untuk mengganti hero dan galeri placeholder.
3. URL Reel Instagram pilihan, akun TikTok resmi dan URL video.
4. Sampul video yang dapat digunakan; logo master bila ada versi lebih baik.

Data alamat, jam dan kontak yang sudah ada dipertahankan berdasarkan catatan konfirmasi pada source. Fasilitas dan cerita usaha baru hanya ditambahkan dari sumber pemilik.

## 10. Kriteria penerimaan revisi
- Referensi Dribbble dan Pinterest sudah diperiksa serta dicatat di docs/design-references.md, lengkap dengan alasan adaptasi; tidak ada klaim riset yang belum dilakukan.
- Semua section utama berada pada /; navigasi desktop/mobile menuju anchor tepat.
- View Menu di hero dan section membuka URL Drive yang sama. Uji tanpa login, perangkat seluler, keyboard dan tab baru.
- Tidak ada katalog penuh, pencarian/filter menu, PDF viewer atau download PDF lokal.
- Tidak ada PDF buku menu pada working tree, public assets atau deployment. Hapus import dan style katalog yang tidak lagi digunakan.
- Route lama ditangani dan tidak menjadi dead link.
- Loading entry/exit, gunungan dan section reveal bekerja saat koneksi cepat, lambat, gagal, reduced motion, tab latar dan JavaScript nonaktif.
- Video resmi dapat dimuat; fallback dan link sumber tetap bekerja saat embed diblokir.
- Uji 360, 390, 768, 1024 dan 1440px; tidak ada overflow, fokus terlihat, target sentuh minimal 44px, kontras AA, media tidak memicu layout shift.
- Foto venue asli tersedia untuk rilis final; jangan menyatakan placeholder sebagai foto tempat.
- Jalankan npm run lint, npm run typecheck, npm run build, lalu tes produksi dan seluruh kontrol.
- Target kinerja: LCP <=2,5 detik, INP <=200ms, CLS <=0,1. Ini sasaran, bukan hasil yang sudah diukur.
- Dapat dijalankan melalui build/start pada server sendiri dengan HTTPS reverse proxy dan proses terawasi.

## 11. Urutan pelaksanaan
P0: single page, View Menu ke Drive, lepas katalog/PDF lokal dan rapikan seluruh tautan.
P1: riset dan kurasi Dribbble/Pinterest, lalu perbaiki komposisi visual, isi foto tempat, loading/gunungan dan video sosial.
P2: verifikasi aksesibilitas, browser, media, kinerja serta dokumentasi deployment.

## 12. Pemeriksaan dokumen revisi
PASS, dasar revisi: tabel kondisi existing merujuk file yang sudah dibaca dari repo, bukan asumsi proyek kosong.
PASS, scope: perubahan single page dan Drive terpetakan ke file; tidak ada katalog atau PDF bundling sebagai kebutuhan baru.
PASS, identitas: logo/palet existing dipertahankan; batik, komposisi dan gerak memiliki tujuan tertulis.
PASS, motion: ENERGY 2 / RHYTHM 3 / MOTION 3 konsisten dengan loading, gunungan dan reveal yang dibatasi.
PASS, kejujuran: URL Drive, foto venue dan video yang belum tersedia dinyatakan sebagai kebutuhan; tidak ada klaim hasil build/browser yang belum dijalankan.
Belum diuji: implementasi kode, tampilan final, kontras seluruh komponen, player, tautan Drive, build dan responsif. Semua menjadi acceptance criteria revisi, bukan hasil review source ini.
