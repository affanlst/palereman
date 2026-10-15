# PRD & Arahan Desain Palereman
Versi 0.1 | Brainstorm | 15 Oktober 2026

## Status dan dasar keputusan
Dokumen ini adalah usulan produk dan desain, bukan website yang sudah dibangun. Arah yang diberikan pemilik brief: premium, nuansa batik Jawa dan wayang, mengikuti warna PDF, berbasis Next.js dan dapat di-host di server sendiri.

Sumber utama: Menu Palereman.pdf, 12 halaman, diperiksa secara visual dan teks. Identitas pada sampul: Palereman Coffee and View, gunungan emas, latar putih, tulisan hitam pada isi. Instagram acuan yang diberikan pengguna: https://www.instagram.com/palereman.png/ . Akses langsung Instagram belum berhasil; foto profil dan postingannya belum terverifikasi. Informasi dari akun lama tidak digunakan sebagai identitas resmi.

Logo gunungan dalam PDF menjadi acuan utama. Bentuk, tulisan, dan proporsinya dipertahankan. Jangan menggambar ulang logo atau mengubah warnanya tanpa persetujuan. Gunakan file master bila tersedia; ekstraksi aset asli dari PDF menjadi pilihan berikutnya.

## 1. Tujuan produk
Membantu calon pengunjung memahami suasana Palereman, melihat menu dan harga, menemukan lokasi, serta menghubungi kafe. Kesan premium dibangun melalui foto, komposisi, keterbacaan dan ketelitian, dengan harga menu asli tetap terlihat jelas.

Pengunjung utama yang diasumsikan: warga Ponorogo yang merencanakan kunjungan bersama teman atau keluarga, serta orang yang baru mengenal Palereman melalui Instagram atau pencarian. Segmen ini masih hipotesis, bukan data pengunjung.

Ukuran keberhasilan setelah peluncuran: klik petunjuk arah, klik WhatsApp, kunjungan halaman menu, dan penggunaan pencarian menu. Klik WhatsApp bukan bukti reservasi berhasil. Target angka ditetapkan setelah ada baseline.

## 2. Konsep pilihan: Emas, Gunungan, dan Meja Palereman
Suasana hangat dan tenang, dengan identitas Jawa dari logo asli dan buku menu. Pengalaman membuka situs menyerupai membuka buku menu yang ditata lebih lapang, diselingi foto tempat dan hidangan.

Design Read:
- ENERGY 2/5: tenang; satu bidang foto besar memberikan daya tarik utama.
- RHYTHM 3/5: komposisi berganti antara foto lebar, teks singkat, daftar menu rapat, dan galeri.
- MOTION 1/5: transisi kontrol seperlunya, tanpa animasi dekoratif berulang.
- Motif identitas: gunungan asli dan garis emas yang membingkai bagian tertentu.
- Titik perhatian: foto tempat pada pembuka; hidangan pilihan pada bagian menu.
- Aksen: emas pada logo dan aksi utama, dengan latar mayoritas putih.

## 3. Palet warna
Warna emas di bawah berasal dari piksel dominan render sampul. Ini sampel raster, bukan klaim kode master merek.

| Token | HEX | Asal dan penggunaan |
| --- | --- | --- |
| Paper | #FFFFFF | Latar utama, sesuai PDF |
| Ink | #25231F | Usulan warna teks mendekati hitam PDF |
| Brand Gold | #F3CB51 | Sampel emas dominan logo; logo dan bidang tombol |
| Soft Gold | #EFD478 | Sampel emas sampul; ornamen dan garis sekunder |
| Readable Gold | #8A6B20 | Turunan usulan untuk tautan kecil di atas putih |

Paper dan Ink mendominasi. Dua emas adalah variasi satu keluarga aksen, bukan warna bebas untuk setiap komponen. Jangan menambahkan hijau, burgundy, atau cokelat sebagai warna merek sebelum ada alasan dari aset resmi.

Kontras terhitung: Ink/Paper 15,68:1; Readable Gold/Paper 4,99:1. Emas terang tidak dipakai untuk teks informasi kecil di atas putih. Logo dipertahankan sebagai aset merek. Tombol emas memakai tulisan Ink. Nilai semua pasangan final tetap diperiksa saat implementasi.

## 4. Batik dan wayang
Gunungan pada logo sudah menjadi penghubung paling kuat dengan wayang. Utamakan aset ini sebelum menambah karakter lain.

- Gunungan tampil utuh pada area identitas; ukurannya cukup agar detail terbaca.
- Usulan batik: satu keluarga motif geometris seperti kawung, dibuat sebagai bidang tepi atau pita pemisah. Motif ini usulan desain, bukan motif yang telah ditemukan dalam PDF.
- Pada satu layar, pilih gunungan atau batik sebagai ornamen dominan. Jangan menumpuk keduanya di belakang teks.
- Ornamen emas muda boleh samar di ruang kosong, tetapi tidak menjadi watermark di belakang harga atau deskripsi.
- Jika ingin wayang figuratif, tentukan tokoh dan sumber ilustrasinya terlebih dahulu. Tidak mengarang tokoh atau makna budaya.
- Ornamen dekoratif disembunyikan dari pembaca layar; logo memiliki teks alternatif nama kafe.

Premium muncul dari ruang, ketelitian garis, dan pengulangan motif yang terkendali. Hindari latar penuh ukiran, efek emas metalik berlebihan, bingkai di setiap foto, atau seluruh elemen berbentuk gunungan.

## 5. Tipografi dan komponen
Usulan awal: Cormorant Garamond Semibold untuk judul dan Source Sans 3 untuk isi. Serif menyambung bahasa visual judul buku menu; sans membantu nama, komposisi, serta harga terbaca. Font ini kandidat, bukan identifikasi font PDF. Uji glyph, lisensi, dan hasil layar kecil sebelum dikunci.

Tulisan script asli dipakai dalam logo saja. Harga memakai angka sejajar. Isi minimum 16px; judul mobile sekitar 36–44px dan desktop 64–80px menyesuaikan panjang. Panjang paragraf dijaga sekitar 55–70 karakter per baris.

Tombol berbentuk persegi dengan sudut halus 4px, tanpa bayangan besar. Foto persegi panjang tanpa bingkai dekoratif berulang. Fokus keyboard jelas. Area sentuh minimum 44px.

Contoh nada bahasa yang diusulkan:
- Judul: “Mampir, ngopi, menikmati waktu.”
- Pengantar: “Kopi, unjukan, dan masakan Palereman.”
- Aksi: “Lihat menu”, “Petunjuk arah”, “Hubungi Palereman”.
Hindari klaim “terbaik”, “nomor satu”, atau istilah fine dining yang belum terbukti. Label kategori Jawa dari menu asli dipertahankan dan diberi padanan bila membantu.

## 6. Struktur situs
Navigasi usulan: Menu, Suasana, Kunjungi. Logo menuju beranda. Ini rancangan tujuan halaman; tautannya baru menjadi kontrol aktif saat tujuan tersedia.

### Beranda /
1. Header terang dengan logo asli yang terbaca.
2. Pembuka: foto lokasi berukuran besar dan judul pada bidang putih di sampingnya. Sekitar 60% bidang foto, 40% teks pada desktop; teks dan foto bertumpuk pada mobile. Teks tidak menutupi detail foto.
3. Logo/gunungan dan pengantar singkat Palereman. Cerita pendirian hanya ditambahkan jika pemilik memberikan datanya.
4. Pilihan dari buku menu: tiga hidangan/minuman dengan komposisi bervariasi, bukan kartu seragam. Pilihan editorial awal: Kopi Rempah, Nasi Bakar Palereman, dan Es Keluarga Cemara. Jangan menyebutnya semua sebagai best seller.
5. Foto suasana: satu foto tempat lebar disertai dua sudut pendukung, setelah lokasinya terverifikasi.
6. Blok kunjungan: alamat, jam, petunjuk arah, dan kontak yang telah dikonfirmasi.
7. Footer ringkas berisi identitas, Instagram, kontak, dan tautan menu.

### Menu /menu
Menu berbentuk HTML yang dapat dicari dan dibaca ponsel. PDF menjadi unduhan pelengkap, bukan satu-satunya cara melihat menu. PDF sumber berukuran sekitar 58,6 MB; buat versi web terkompresi sebelum menyediakan unduhan.

Kategori yang dipetakan dari PDF:
- Kopi Palereman.
- Es Degan Jamtrok.
- Unjukan; subkelompok “Unjukan Best Seller” mengikuti label PDF.
- Makanan.
- Mie.
- Nyamikan/Camilan.
- Bakaran.
- Tambahan.

Fungsi: pencarian nama, filter kategori, pilihan panas/dingin bila tersedia. Harga varian dipetakan manual berdasarkan posisi kolom PDF. Hasil ekstraksi teks saja tidak cukup untuk memasangkan semua harga.

Daftar menu menampilkan nama, komposisi jika ada, harga, dan foto bila tersedia. Item tanpa foto tetap tampil rapi sebagai baris. Jangan menggandakan foto satu makanan untuk makanan lain.

Contoh yang terbaca jelas:
| Item | Harga pada PDF | Sumber |
| --- | --- | --- |
| Kopi Rempah | Rp10.000, panas | Halaman 2 |
| Degan Spesial | Rp23.000 | Halaman 3 |
| Es Keluarga Cemara | Rp13.000 | Halaman 4 |
| Wedang Rempah | Rp10.000 | Halaman 4 |
| Nasi Bakar Palereman | Rp10.000 | Halaman 6 |
| Tahu Campur Palereman | Rp17.000 | Halaman 6 |
| Ayam Bakar | Rp20.000 | Halaman 8 |
| Mix Platter | Rp15.000 | Halaman 11 |

Harga adalah isi PDF yang diberikan, bukan jaminan harga operasional saat peluncuran. Tidak menambahkan pajak, biaya layanan, atau label halal/vegetarian tanpa data pemilik.

### Suasana /suasana
Galeri foto tempat yang dikurasi, dengan keterangan area faktual. Tampilan foto besar dan urutan sederhana; lightbox mendukung tombol tutup, Escape, fokus keyboard, dan navigasi sentuh.

### Kunjungi /kunjungi
Alamat terverifikasi, jam mingguan dan pengecualian, tautan Google Maps yang menunjuk tempat tepat, kontak resmi, dan informasi fasilitas yang dikonfirmasi. WhatsApp membuka percakapan untuk bertanya; jangan menyatakan meja otomatis dipesan.

## 7. Konten dan aset
Prioritas sumber:
1. Logo dan foto makanan yang sudah berada di PDF.
2. File asli dari pengelola dan akun @palereman.png.
3. Foto publik dari pencarian sebagai calon referensi; periksa tempat, tanggal, pemilik, dan izin pemakaian sebelum publikasi.

Logo dalam PDF sudah teridentifikasi sehingga tidak perlu menggantinya dengan hasil pencarian. Foto suasana hasil Google belum otomatis terhubung dengan akun yang benar.

Daftar kebutuhan: logo master, foto eksterior, area duduk, foto lebar suasana, enam foto menu pilihan, alamat dan titik Maps, WhatsApp resmi, jam terbaru, fasilitas, serta tanggal berlaku menu. Jangan mengarang sejarah usaha atau menggunakan foto stok seolah lokasi asli.

Ekstrak objek gambar asli dari PDF jika memungkinkan. Nilai resolusi tiap foto sebelum digunakan; foto kecil cocok sebagai thumbnail, bukan hero layar penuh. Semua aset publik disimpan lokal atau di penyimpanan milik proyek, tanpa hotlink Instagram.

## 8. Persyaratan fungsional MVP
- Beranda, menu digital, galeri, dan halaman kunjungan.
- Pencarian dan kategori yang dapat dipakai bersama; tombol hapus filter dan keadaan tidak ada hasil.
- Status item tersedia/habis hanya jika ada cara pengelola memperbaruinya.
- Jam tidak menampilkan “buka sekarang” sebelum jadwal, zona Asia/Jakarta, dan pengecualian tersedia.
- Navigasi mobile, 404, gambar gagal dimuat, dan keadaan konten kosong.
- Tidak ada pembayaran atau reservasi otomatis dalam MVP; kebutuhan ini memerlukan alur operasional tersendiri.
- Admin CMS opsional fase berikutnya. Pemilihan tergantung siapa yang memperbarui menu dan seberapa sering.

## 9. Arahan teknis
Next.js App Router dan TypeScript; versi stabil yang didukung dipilih saat implementasi. Halaman informasi dirender server/prerender; JavaScript klien untuk pencarian, filter dan galeri saja.

MVP memakai data terstruktur dalam repositori agar portabel. Model MenuItem: id, slug, name, categoryId, description?, variants[{label, priceIDR}], image?, availability?, sortOrder, sourcePage, verifiedAt?. Model profil usaha memisahkan alamat, kontak, jam mingguan, dan pengecualian tanggal.

Deployment usulan: Docker/Node.js di VPS, Nginx sebagai reverse proxy, HTTPS, aset dan font lokal, backup konten dan aset. Next.js tidak memerlukan hosting Vercel. Build dilakukan di CI atau mesin build bila RAM VPS terbatas. Kapasitas server dipilih setelah jumlah aset, optimasi gambar, dan trafik diketahui.

SEO: judul dan deskripsi spesifik halaman, sitemap, robots, canonical, dan data terstruktur CafeOrCoffeeShop hanya berisi fakta terverifikasi. Alamat dan kontak konsisten dengan profil usaha resmi. Tidak menanam rating dari agregator sebagai rating resmi.

Referensi teknis: https://nextjs.org/docs/app/guides/self-hosting

## 10. Kriteria penerimaan sebelum peluncuran
- Cocokkan setiap nama, harga, komposisi dan varian dengan PDF lalu konfirmasi ke pengelola.
- Semua tautan Maps, Instagram, WhatsApp, dan unduhan menuju tujuan yang tepat.
- Uji 360, 390, 768, 1024, dan 1440px; tidak ada overflow.
- Bisa digunakan dengan keyboard, fokus terlihat, lightbox mengembalikan fokus ke pemicu.
- Kontras AA; pola tidak menurunkan keterbacaan.
- Reduced motion dihormati; tidak ada autoplay audio, scroll hijacking, atau kursor khusus.
- LCP <=2,5 detik, INP <=200ms, CLS <=0,1 menjadi target lapangan, bukan hasil yang sudah dicapai. Lighthouse mobile >=90 menjadi target lab dengan profil tes tercatat.
- Build produksi berhasil, seluruh kontrol dicoba, metadata dan data terstruktur divalidasi.
- Tidak ada testimoni, fasilitas, statistik, atau label best seller yang dikarang.

## 11. Pemeriksaan Anti Slop untuk PRD ini
Cakupan: dokumen konsep. Website, aset final, build, dan tes browser belum dikerjakan.
- PASS, kejujuran sumber: akun yang dikoreksi pengguna dicatat; aset Instagram dan data kunjungan ditandai belum terverifikasi.
- PASS, tujuan visual: emas berasal dari PDF, gunungan berasal dari logo, batik dibatasi ke bidang ornamen agar menu tetap terbaca.
- PASS, arah dan ritme: ENERGY 2, RHYTHM 3, MOTION 1 dinyatakan dengan contoh komposisi.
- PASS, konten: delapan contoh harga memiliki rujukan halaman; tidak ada testimoni atau angka pencapaian buatan.
- PASS, warna untuk teks yang diusulkan: pasangan Ink/Paper dan Readable Gold/Paper dihitung 15,68:1 dan 4,99:1.
- PASS, lingkup deliverable: tidak ada UI atau kontrol aktif yang diklaim sudah selesai; seluruh pemeriksaan browser, interaksi, dan responsif tercantum sebagai kriteria implementasi, belum diuji.
- PASS, arah copy dan komponen: aksi spesifik, script dibatasi pada logo, motif tidak diletakkan di belakang harga, foto dan daftar menjadi pusat konten.

## 12. Keputusan berikutnya
Arah yang direkomendasikan: putih-emas mengikuti PDF, gunungan asli, batik sebagai aksen, foto tempat besar, dan menu digital yang mudah dibaca. Sebelum implementasi, pastikan alamat, jam, kontak, foto tempat, serta apakah pengelola perlu mengedit menu tanpa developer. Wireframe desktop/mobile menjadi langkah berikutnya setelah arah ini disepakati.
