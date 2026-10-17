import Image from "next/image";
import type { Metadata } from "next";
import { site, businessStructuredData } from "@/lib/site";
import { Icon } from "@/components/icon";
import { SocialFeed } from "@/components/social-feed";
import { AtmosphereGallery } from "@/components/atmosphere-gallery";
import { LocationMap } from "@/components/location-map";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "id_ID", siteName: site.name,
    title: site.title, description: site.description, url: `${site.url}/`,
    images: [{ url: site.image, width: 1280, height: 959, alt: "Pemandangan sawah dari area duduk Palereman di Ponorogo" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData).replace(/</g, "\\u003c") }} />
      <section id="beranda" className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title"><span className="eyebrow"><span className="short-rule" />Palereman · Cafe di Ponorogo</span>Singgah sejenak.<br />Nikmati <em>rasanya.</em></h1>
            <p className="hero-intro">Kopi, makanan, dan hangatnya suasana Jawa.<br className="desktop-break" /> Singgah di Palereman Coffee and View, Singosaren.</p>
            <div className="hero-actions">
              <a className="button" href={profile.menuDriveUrl} {...newTab}>Lihat buku menu <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a>
              <a className="quiet-link" href="#kunjungi">Mampir ke Palereman</a>
            </div>
            <div className="hero-footnote"><span>Coffee &amp; View</span><span>08.00–20.00 · Jumat tutup</span></div>
          </div>
          <figure className="hero-art">
            <Image src="/images/wayang-editorial.webp" alt="Ilustrasi dekoratif wayang kulit dengan detail tembaga di atas hijau hutan" fill loading="eager" fetchPriority="high" quality={60} sizes="(max-width: 700px) calc(74.1vw - 58px), (max-width: 1100px) 40vw, 480px" />
            <figcaption><span>Berakar di Jawa.</span><span>Dinikmati hari ini.</span></figcaption>
          </figure>
        </div>
        <div className="heritage-band" aria-hidden="true"><span>Kopi &amp; cerita</span><span className="band-motif" /><span>Rasa &amp; budaya</span><span className="band-motif" /><span>Palereman, Ponorogo</span><span className="band-motif" /><span>Monggo, pinarak.</span></div>
      </section>

      <section id="tentang" className="about section shell" aria-labelledby="about-title">
        <div className="section-kicker"><span>01 / Tentang Palereman</span><span className="hairline" /></div>
        <div className="about-grid">
          <h2 id="about-title">Cafe bernuansa Jawa<br />di <em>Ponorogo.</em></h2>
          <div className="about-copy"><p>Palereman adalah coffee shop di Singosaren, Setono, Kecamatan Jenangan, Kabupaten Ponorogo. Tempat singgah untuk kopi, makanan, dan pemandangan sawah.</p><p>Nuansa Jawa hadir menemani waktu yang sederhana: duduk, berbagi cerita, lalu menikmati pesanan tanpa terburu-buru.</p><a className="text-link" href="#suasana">Kenali suasananya</a></div>
        </div>
        <div className="about-signature"><Image src="/images/gunungan-palereman.png" alt="" width={32} height={44} /><p>Monggo, pinarak. <span>Silakan, singgah dulu.</span></p></div>
      </section>

      <section id="menu" className="menu-section" aria-labelledby="menu-title">
        <div className="shell section">
          <div className="section-kicker"><span>02 / Menu kopi &amp; makanan</span><span className="hairline" /></div>
          <div className="menu-heading"><h2 id="menu-title">Rasa yang bikin<br />ingin <em>kembali.</em></h2><div><p>Dari Kopi Rempah hingga Nasi Bakar Palereman.<br />Pilih teman singgahmu dari buku menu kami.</p><a className="text-link" href={profile.menuDriveUrl} {...newTab}>Buka menu lengkap <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a></div></div>
          <div className="menu-editorial">
            <figure className="dish-main"><div className="dish-image"><Image src="/images/nasi-bakar-studio.webp" alt="Nasi Bakar Palereman disajikan di atas daun pisang" width={1120} height={1402} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 49vw, 690px" /><span className="dish-number" aria-hidden="true">01</span></div><figcaption><h3>Nasi Bakar Palereman</h3><span>Dari dapur kami</span></figcaption></figure>
            <div className="menu-side"><figure className="dish-drink"><div className="drink-image"><Image src="/images/kopi-rempah-studio.webp" alt="Kopi Rempah dengan rempah pendamping" width={1120} height={1400} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 39vw, 550px" /></div><figcaption><span className="dish-number" aria-hidden="true">02</span><h3>Kopi Rempah</h3><p>Teman untuk duduk lebih lama.</p></figcaption></figure><div className="menu-note"><span>Selera boleh beda.<br />Mejanya tetap sama.</span><a href={profile.menuDriveUrl} {...newTab}>Temukan pilihanmu di buku menu<span className="sr-only"> (tab baru)</span></a></div></div>
          </div>
          <p className="menu-source">Visual diolah dari foto menu Palereman. Pilihan dan harga terbaru tersedia di buku menu.</p>
        </div>
      </section>

      <section id="suasana" className="atmosphere section shell" aria-labelledby="atmosphere-title">
        <AtmosphereGallery />
        <div className="section-copy"><p className="section-kicker">03 / Suasana</p><h2 id="atmosphere-title">Pelan sedikit.<br /><em>Cerita lebih lama.</em></h2><p>Duduk di ruang bernuansa Jawa atau nikmati pemandangan sawah dan perbukitan dari area terbuka Palereman. Sebuah jeda di Singosaren, untuk kopi dan cerita bersama orang-orang terdekat.</p><a className="text-link" href={profile.instagramUrl} {...newTab}>Lihat suasana lainnya di Instagram <Icon name="arrow" /><span className="sr-only"> (tab baru)</span></a></div>
      </section>

      <section id="video" className="video-section section shell" aria-labelledby="video-title">
        <div className="section-kicker"><span>04 / Kabar Palereman</span><span className="hairline" /></div>
        <div className="video-heading"><h2 id="video-title">Sepotong <em>Palereman.</em></h2><p>Unggahan dan cerita dari<br />Instagram &amp; TikTok @palereman.png.</p></div>
        <SocialFeed />
      </section>

      <section id="kunjungi" className="visit" aria-labelledby="visit-title"><div className="shell section">
        <div className="section-kicker"><span>05 / Sampai bertemu</span><span className="hairline" /></div>
        <div className="visit-grid"><div className="visit-copy"><h2 id="visit-title">Meja berikutnya,<br /><em>untuk kamu.</em></h2><p>Mampir untuk kopi dan pemandangannya.<br />Kami tunggu di Singosaren, Ponorogo.</p><a className="button" href={profile.mapsUrl} {...newTab}>Petunjuk ke Palereman <Icon name="arrow" /><span className="sr-only"> (Google Maps, tab baru)</span></a></div><div className="visit-info"><div><span className="info-label">Temukan kami</span><address>{profile.address}</address></div><div className="info-row"><div><span className="info-label">Waktu singgah</span><p>08.00–20.00</p><span>Jumat tutup</span></div><div><span className="info-label">Ada yang ditanyakan?</span><a className="contact-link" href={profile.phoneHref}>{profile.phoneDisplay}</a><a className="text-link" href={profile.whatsappUrl} {...newTab}>Chat WhatsApp<span className="sr-only"> (tab baru)</span></a></div></div></div></div>
        <LocationMap />
        <div className="visit-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Sebelum <em>mampir.</em></h2>
          <div>
            <details><summary>Di mana lokasi Palereman?</summary><p>Palereman Coffee and View berada di {profile.address}. <a href={profile.mapsUrl} {...newTab}>Buka petunjuk Google Maps<span className="sr-only"> (tab baru)</span></a> untuk menuju lokasi.</p></details>
            <details><summary>Jam berapa Palereman buka?</summary><p>Buka pukul 08.00–20.00 pada Senin, Selasa, Rabu, Kamis, Sabtu, dan Minggu. Jumat tutup. Untuk memastikan jadwal saat hari libur, <a href={profile.whatsappUrl} {...newTab}>hubungi kami di WhatsApp<span className="sr-only"> (tab baru)</span></a>.</p></details>
            <details><summary>Apa saja menu di Palereman?</summary><p>Ada Nasi Bakar Palereman dan Kopi Rempah. Lihat pilihan lengkap beserta harga terbaru di <a href={profile.menuDriveUrl} {...newTab}>buku menu Palereman<span className="sr-only"> (Google Drive, tab baru)</span></a>.</p></details>
            <details><summary>Seperti apa suasana dan pemandangannya?</summary><p>Ruang bernuansa Jawa dengan tempat duduk kayu, serta area terbuka menghadap sawah dan perbukitan. <a href="#suasana">Lihat galeri foto suasana</a> sebelum berkunjung.</p></details>
          </div>
        </div>
      </div></section>
    </>
  );
}
