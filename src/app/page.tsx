import Image from "next/image";
import { Icon } from "@/components/icon";
import { SocialFeed } from "@/components/social-feed";
import { profile } from "@/lib/profile";

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <section id="beranda" className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="short-rule" />Singosaren, Ponorogo</p>
            <h1 id="hero-title">Singgah sejenak.<br />Nikmati <em>rasanya.</em></h1>
            <p className="hero-intro">Secangkir kopi, sepiring cerita, dan hangatnya Jawa.<br className="desktop-break" /> Selamat datang di Palereman Coffee and View.</p>
            <div className="hero-actions">
              <a className="button" href={profile.menuDriveUrl} {...newTab}>Lihat buku menu <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a>
              <a className="quiet-link" href="#kunjungi">Mampir ke Palereman</a>
            </div>
            <div className="hero-footnote"><span>Coffee &amp; View</span><span>08.00–20.00 · Jumat tutup</span></div>
          </div>
          <figure className="hero-art">
            <Image src="/images/wayang-editorial.webp" alt="Ilustrasi dekoratif wayang kulit dengan detail tembaga di atas hijau hutan" fill priority sizes="(max-width: 700px) 100vw, 48vw" />
            <figcaption><span>Berakar di Jawa.</span><span>Dinikmati hari ini.</span></figcaption>
          </figure>
        </div>
        <div className="heritage-band" aria-hidden="true"><span>Kopi &amp; cerita</span><span className="band-motif" /><span>Rasa &amp; budaya</span><span className="band-motif" /><span>Palereman, Ponorogo</span><span className="band-motif" /><span>Monggo, pinarak.</span></div>
      </section>

      <section id="tentang" className="about section shell" aria-labelledby="about-title">
        <div className="section-kicker"><span>01 / Tentang Palereman</span><span className="hairline" /></div>
        <div className="about-grid">
          <h2 id="about-title">Ada waktu untuk pergi.<br />Ada tempat untuk <em>pulang.</em></h2>
          <div className="about-copy"><p>Di Singosaren, Ponorogo, Palereman menjadi tempat singgah untuk kopi, makanan, dan pemandangan.</p><p>Nuansa Jawa hadir menemani waktu yang sederhana: duduk, berbagi cerita, lalu menikmati pesanan tanpa terburu-buru.</p><a className="text-link" href="#suasana">Kenali suasananya</a></div>
        </div>
        <div className="about-signature"><Image src="/images/gunungan-palereman.png" alt="" width={32} height={44} /><p>Monggo, pinarak. <span>Silakan, singgah dulu.</span></p></div>
      </section>

      <section id="menu" className="menu-section" aria-labelledby="menu-title">
        <div className="shell section">
          <div className="section-kicker"><span>02 / Dari dapur &amp; seduhan</span><span className="hairline" /></div>
          <div className="menu-heading"><h2 id="menu-title">Rasa yang bikin<br />ingin <em>kembali.</em></h2><div><p>Kopi, makanan, dan teman ngobrol.<br />Pilih yang pas untuk waktu singgahmu.</p><a className="text-link" href={profile.menuDriveUrl} {...newTab}>Buka menu lengkap <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a></div></div>
          <div className="menu-editorial">
            <figure className="dish-main"><div className="dish-image"><Image src="/images/nasi-bakar-palereman.webp" alt="Nasi Bakar Palereman disajikan di atas daun pisang" width={518} height={242} sizes="(max-width: 700px) 90vw, 48vw" /><span className="dish-number" aria-hidden="true">01</span></div><figcaption><h3>Nasi Bakar Palereman</h3><span>Dari dapur kami</span></figcaption></figure>
            <div className="menu-side"><figure className="dish-drink"><div className="drink-image"><Image src="/images/kopi-rempah.png" alt="Kopi Rempah dengan rempah pendamping" width={151} height={166} sizes="151px" /></div><figcaption><span className="dish-number" aria-hidden="true">02</span><h3>Kopi Rempah</h3><p>Teman untuk duduk lebih lama.</p></figcaption></figure><div className="menu-note"><span>Selera boleh beda.<br />Mejanya tetap sama.</span><a href={profile.menuDriveUrl} {...newTab}>Temukan pilihanmu di buku menu<span className="sr-only"> (tab baru)</span></a></div></div>
          </div>
          <p className="menu-source">Foto hidangan dari menu Palereman. Pilihan dan harga terbaru tersedia di buku menu.</p>
        </div>
      </section>

      <section id="suasana" className="atmosphere section shell" aria-labelledby="atmosphere-title">
        <figure className="atmosphere-photo"><Image src="/images/suasana-palereman.jpg" alt="Ruang duduk Palereman dengan kursi kayu, tiang tinggi, dan atap tradisional" width={1280} height={959} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 590px" /><figcaption>Suasana di Palereman, Singosaren.</figcaption></figure>
        <div className="section-copy"><p className="section-kicker">03 / Suasana</p><h2 id="atmosphere-title">Pelan sedikit.<br /><em>Cerita lebih lama.</em></h2><p>Sebuah jeda di Singosaren. Kopi di meja, pemandangan di depan mata, dan waktu untuk orang-orang terdekat.</p><a className="text-link" href={profile.instagramUrl} {...newTab}>Lihat suasana lainnya di Instagram <Icon name="arrow" /><span className="sr-only"> (tab baru)</span></a></div>
      </section>

      <section id="video" className="video-section section shell" aria-labelledby="video-title">
        <div className="section-kicker"><span>04 / Kabar Palereman</span><span className="hairline" /></div>
        <div className="video-heading"><h2 id="video-title">Sepotong <em>Palereman.</em></h2><p>Unggahan dan cerita dari<br />Instagram &amp; TikTok @palereman.png.</p></div>
        <SocialFeed />
      </section>

      <section id="kunjungi" className="visit" aria-labelledby="visit-title"><div className="shell section">
        <div className="section-kicker"><span>05 / Sampai bertemu</span><span className="hairline" /></div>
        <div className="visit-grid"><div className="visit-copy"><h2 id="visit-title">Meja berikutnya,<br /><em>untuk kamu.</em></h2><p>Mampir untuk kopi dan pemandangannya.<br />Kami tunggu di Singosaren, Ponorogo.</p><a className="button" href={profile.mapsUrl} {...newTab}>Petunjuk ke Palereman <Icon name="arrow" /><span className="sr-only"> (Google Maps, tab baru)</span></a></div><div className="visit-info"><div><span className="info-label">Temukan kami</span><address>{profile.address}</address></div><div className="info-row"><div><span className="info-label">Waktu singgah</span><p>08.00–20.00</p><span>Jumat tutup</span></div><div><span className="info-label">Ada yang ditanyakan?</span><a className="contact-link" href={profile.phoneHref}>{profile.phoneDisplay}</a><a className="text-link" href={profile.whatsappUrl} {...newTab}>Chat WhatsApp<span className="sr-only"> (tab baru)</span></a></div></div></div></div>
        <div className="map-card"><iframe title="Peta Palereman Coffee and View di Ponorogo" src="https://www.google.com/maps?q=Palereman%20Coffee%20and%20View%20Ponorogo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><p>Peta tidak tampil? <a href={profile.mapsUrl} {...newTab}>Buka di Google Maps<span className="sr-only"> (tab baru)</span></a></p></div>
      </div></section>
    </>
  );
}
