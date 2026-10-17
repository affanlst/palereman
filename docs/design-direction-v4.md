# Palereman: modern Jawa

Arahan pengguna 17 Oktober 2026: remake menyeluruh; gaya modern dengan unsur batik Jawa dan wayang yang tajam. Arah ini menggantikan mural krem v3.

ENERGY 3 / RHYTHM 3 / MOTION 1. Situs kafe untuk pengunjung yang ingin melihat menu, suasana, serta lokasi sebelum datang.

- Hijau hutan menjadi panggung wayang; krem memberi jeda baca, dan tembaga menandai ajakan utama. Tema tetap dipilih untuk identitas panggung wayang dan kertas menu, bukan preferensi perangkat.
- Newsreader tetap dipakai karena karakter editorialnya yang hangat; judul besar dan italic memberi kontras dengan navigasi Source Sans 3 yang ringkas.
- Hero dua kolom memberi ruang bagi headline dan satu figur wayang. Artwork 1024 × 1536 ditampilkan sesuai rasio, tanpa peregangan, blur, atau filter penajaman.
- `public/images/wayang-editorial.webp` adalah ilustrasi dekoratif generatif dari arahan pengguna. Bukan logo resmi, foto lokasi, atau klaim identifikasi tokoh sejarah. PNG sumber tetap di `/workspace/generated_images` pada lingkungan pengerjaan.
- `public/images/kawung.svg` adalah pola vektor terinspirasi kawung untuk identitas batik yang diminta pengguna. Dipakai pada pita, ornamen gunungan, dan panel video; tidak melapisi paragraf panjang.
- Gunungan resmi dan foto Nasi Bakar serta Kopi Rempah memakai aset menu yang sudah tersedia. Foto tidak diperbesar melampaui kebutuhan tampil. Blend multiply menyatukan latar putih aset dengan bidang menu.
- Atas permintaan pengguna, gunungan menjadi penanda logo pada navbar dan footer, dipasangkan dengan nama Palereman. Versi transparan beresolusi lebih tinggi direstorasi dari aset asli agar emas terbaca langsung pada header hijau tanpa kotak krem. Versi asli tetap tersedia; ikon tab PNG persegi 64 × 64 tetap merender aset asli.
- Bagian menu memakai satu hidangan utama dan satu seduhan lebih kecil; ukuran mengikuti hierarki konten, bukan kumpulan kartu fitur.
- Jeda ruang 62 px pada ponsel dan 80–104 px pada layar besar memisahkan narasi, menu, video, dan informasi kunjungan. Komposisi berganti sesuai isi.
- Navigasi mengikuti urutan bagian. Garis bawah menunjukkan bagian aktif; garis fokus tetap jelas untuk keyboard. Ikon pin/kontak tidak ditambahkan sebagai dekorasi; panah hanya menandai tautan utama yang membuka tujuan eksternal. Tombol video memakai simbol play.
- Gerak hanya hover/focus dan perpindahan anchor; preferensi reduced motion mematikan smooth scroll dan transisi. Tidak ada parallax, animasi berulang, glow, atau blur.
- Foto venue belum tersedia. Bagian suasana menggunakan ornamen yang jelas, disertai tautan Instagram untuk melihat tempat asli. Video tidak diberi thumbnail buatan. Informasi bisnis mengikuti `src/lib/profile.ts`.
