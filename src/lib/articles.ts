import { profile } from "@/lib/profile";

export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type CafeArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: readonly ArticleSection[];
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string; external?: boolean };
};

// Artikel sengaja disimpan sebagai data lokal agar seluruh halaman dapat dibuat statis.
export const articles: readonly CafeArticle[] = [
  {
    slug: "reservasi-acara-dan-meeting-di-palereman",
    category: "Reservasi",
    title: "Reservasi acara dan meeting di Palereman",
    excerpt: "Sedang menyiapkan pertemuan, acara keluarga, atau kumpul komunitas? Mulai dengan menanyakan ketersediaan Palereman secara langsung.",
    image: "/images/suasana-palereman-ruang-kayu.jpg",
    imageAlt: "Area ruang kayu bernuansa Jawa di Palereman",
    sections: [
      {
        heading: "Pilih tempat yang mendukung obrolan",
        paragraphs: [
          "Palereman Coffee and View berada di Singosaren, Jenangan, Ponorogo. Ruang bernuansa Jawa dan area terbuka dengan pemandangan sawah memberi pilihan suasana untuk pertemuan yang ingin berjalan lebih santai.",
          "Untuk meeting, arisan, atau acara keluarga, suasana tempat menjadi bagian dari pengalaman. Peserta dapat menikmati waktu bersama sambil tetap punya ruang untuk berbicara dan menikmati hidangan.",
        ],
      },
      {
        heading: "Hal yang perlu disampaikan saat menghubungi",
        paragraphs: [
          "Website Palereman belum menetapkan paket acara, kapasitas ruangan, atau biaya reservasi. Karena itu, tanyakan detailnya langsung sebelum membuat rencana final.",
        ],
        points: [
          "Tanggal dan perkiraan waktu kedatangan",
          "Jumlah tamu yang akan hadir",
          "Jenis acara, seperti meeting, arisan, atau kumpul keluarga",
          "Kebutuhan tempat duduk atau susunan meja",
        ],
      },
      {
        heading: "Konfirmasi sebelum berangkat",
        paragraphs: [
          "Hubungi Palereman melalui WhatsApp untuk menanyakan ketersediaan tempat dan kebutuhan acara. Jam buka yang tercantum di website adalah 08.00 sampai 20.00 pada Senin, Selasa, Rabu, Kamis, Sabtu, dan Minggu. Jumat libur.",
        ],
      },
    ],
    primaryCta: { label: "Tanyakan reservasi", href: profile.whatsappUrl, external: true },
    secondaryCta: { label: "Lihat lokasi", href: profile.mapsUrl, external: true },
  },
  {
    slug: "meeting-dengan-view-sawah-di-ponorogo",
    category: "Meeting & acara",
    title: "Meeting dengan view sawah di Ponorogo",
    excerpt: "Pertemuan terasa berbeda ketika meja, kopi, dan pemandangan bisa dinikmati dalam satu tempat.",
    image: "/images/suasana-palereman-view-sawah.jpg",
    imageAlt: "Pemandangan sawah dari area terbuka Palereman",
    sections: [
      {
        heading: "Ganti ruang rapat dengan suasana yang lebih lapang",
        paragraphs: [
          "Palereman memiliki area terbuka yang menghadap sawah dan perbukitan. Pemandangan ini dapat menjadi latar untuk meeting kecil, diskusi komunitas, atau obrolan kerja yang ingin dibuat lebih rileks.",
          "Nuansa Jawa dan area duduk yang hangat membuat tempat ini tetap terasa akrab. Kamu dapat mengatur pertemuan sambil memberi kesempatan bagi peserta untuk menikmati kopi dan makanan.",
        ],
      },
      {
        heading: "Cocokkan kebutuhan acara dengan tempatnya",
        paragraphs: [
          "Setiap acara memiliki kebutuhan berbeda. Sebelum mengundang peserta, tanyakan kepada Palereman mengenai area yang tersedia pada hari dan jam pilihanmu.",
        ],
        points: [
          "Ketersediaan area dengan view sawah",
          "Susunan tempat duduk untuk kelompokmu",
          "Pilihan makanan dan minuman dari buku menu",
          "Kemungkinan kebutuhan khusus selama pertemuan",
        ],
      },
      {
        heading: "Kirim detail pertemuan lebih dulu",
        paragraphs: [
          "Kirim detail pertemuan melalui WhatsApp agar tim Palereman dapat memberi jawaban yang sesuai kondisi terbaru. Jangan lupa menyimpan alamat di Singosaren, Setono, Jenangan sebelum berangkat.",
        ],
      },
    ],
    primaryCta: { label: "Tanyakan tempat meeting", href: profile.whatsappUrl, external: true },
    secondaryCta: { label: "Buka petunjuk arah", href: profile.mapsUrl, external: true },
  },
  {
    slug: "best-menu-palereman-untuk-makan-dan-ngopi",
    category: "Menu",
    title: "Menu pilihan Palereman untuk makan dan ngopi",
    excerpt: "Nasi Bakar Palereman dan Kopi Rempah menjadi dua pilihan yang bisa kamu mulai saat berkunjung.",
    image: "/images/nasi-bakar-hd.webp",
    imageAlt: "Nasi Bakar Palereman disajikan di atas daun pisang",
    sections: [
      {
        heading: "Mulai dari Nasi Bakar Palereman",
        paragraphs: [
          "Nasi Bakar Palereman menjadi salah satu sajian utama yang ditampilkan di website. Penyajiannya di atas daun pisang memberi kesan akrab untuk waktu makan yang tidak tergesa-gesa.",
          "Menu ini bisa kamu pilih saat datang untuk makan terlebih dahulu, lalu melanjutkan obrolan dengan kopi atau minuman lain dari buku menu.",
        ],
      },
      {
        heading: "Lanjutkan dengan Kopi Rempah",
        paragraphs: [
          "Kopi Rempah adalah pilihan minuman yang ditampilkan bersama Nasi Bakar Palereman. Karakternya cocok untuk menemani waktu duduk lebih lama, baik setelah makan maupun saat ingin menikmati pemandangan.",
        ],
      },
      {
        heading: "Cek pilihan dan harga terbaru",
        paragraphs: [
          "Daftar menu dan harga dapat berubah. Gunakan buku menu resmi Palereman sebagai acuan terbaru sebelum memesan. Jika ingin memastikan ketersediaan menu tertentu, kamu juga dapat menghubungi Palereman melalui WhatsApp.",
        ],
      },
    ],
    primaryCta: { label: "Buka buku menu", href: profile.menuDriveUrl, external: true },
    secondaryCta: { label: "Tanya ketersediaan menu", href: profile.whatsappUrl, external: true },
  },
  {
    slug: "tempat-kumpul-keluarga-dan-komunitas-di-ponorogo",
    category: "Tempat kumpul",
    title: "Tempat kumpul keluarga dan komunitas di Ponorogo",
    excerpt: "Ruang bernuansa Jawa, area terbuka, dan view sawah membuat Palereman layak dipertimbangkan untuk waktu bersama.",
    image: "/images/suasana-palereman-pemandangan.jpg",
    imageAlt: "Pemandangan dari area Palereman di Ponorogo",
    sections: [
      {
        heading: "Pilih ruang untuk makan bersama",
        paragraphs: [
          "Palereman menyediakan tempat untuk kopi, makanan, dan percakapan. Suasana ruang kayu memberi rasa hangat, sedangkan area terbuka menghadirkan pandangan yang lebih luas.",
          "Kombinasi ini dapat menemani berbagai agenda, mulai dari makan bersama keluarga sampai kumpul komunitas yang ingin berlangsung tanpa suasana terlalu formal.",
        ],
      },
      {
        heading: "Pilih waktu yang sesuai",
        paragraphs: [
          "Palereman mencantumkan jam buka 08.00 sampai 20.00 WIB dan libur setiap Jumat. Jika ingin datang bersama rombongan, hubungi Palereman lebih dulu agar kamu dapat menyesuaikan rencana dengan ketersediaan tempat.",
        ],
      },
      {
        heading: "Bawa rencana, bukan asumsi",
        paragraphs: [
          "Kapasitas, susunan meja, dan kebutuhan acara belum dicantumkan sebagai informasi tetap di website. Sampaikan kebutuhanmu melalui WhatsApp dan biarkan tim Palereman membantu memberi informasi terbaru.",
        ],
      },
    ],
    primaryCta: { label: "Hubungi Palereman", href: profile.whatsappUrl, external: true },
    secondaryCta: { label: "Lihat suasana", href: "/#suasana" },
  },
  {
    slug: "panduan-berkunjung-ke-palereman-ponorogo",
    category: "Panduan kunjungan",
    title: "Panduan berkunjung ke Palereman Ponorogo",
    excerpt: "Simpan jam buka, alamat, menu, dan jalur kontak ini sebelum berangkat ke Palereman Coffee and View.",
    image: "/images/kopi-rempah-hd.webp",
    imageAlt: "Kopi Rempah Palereman dengan rempah pendamping",
    sections: [
      {
        heading: "Catat jam bukanya",
        paragraphs: [
          "Palereman buka pukul 08.00 sampai 20.00 WIB pada Senin, Selasa, Rabu, Kamis, Sabtu, dan Minggu. Jumat adalah hari libur. Informasi dari Instagram resmi @palereman.png juga mencantumkan jam yang sama.",
        ],
      },
      {
        heading: "Siapkan tujuan kunjungan",
        paragraphs: [
          "Kamu dapat datang untuk menikmati Nasi Bakar Palereman, Kopi Rempah, suasana Jawa, atau pemandangan sawah. Untuk pilihan lengkap dan harga terbaru, buka buku menu resmi yang terhubung dari website.",
        ],
      },
      {
        heading: "Simpan alamat dan kontak",
        paragraphs: [
          "Palereman berada di Singosaren, Setono, Kecamatan Jenangan, Kabupaten Ponorogo, Jawa Timur 63492. Gunakan link Maps untuk petunjuk arah dan WhatsApp jika perlu memastikan informasi sebelum berangkat.",
        ],
        points: [
          "Instagram: @palereman.png",
          "TikTok: @palereman.png",
          "Telepon: 0857-2674-1940",
        ],
      },
    ],
    primaryCta: { label: "Buka petunjuk arah", href: profile.mapsUrl, external: true },
    secondaryCta: { label: "Chat WhatsApp", href: profile.whatsappUrl, external: true },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
