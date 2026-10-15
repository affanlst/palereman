import Image from "next/image";
import { Icon } from "@/components/icon";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { SocialVideos } from "@/components/social-videos";
import { profile } from "@/lib/profile";

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <section id="beranda" className="hero section shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Palereman</h1>
          <p className="hero-subtitle">Coffee and View</p>
          <p className="hero-intro">Kopi, makanan, dan pemandangan<br className="desktop-break" /> di Singosaren, Ponorogo.</p>
          <div className="hero-actions">
            <a className="button" href={profile.menuDriveUrl} {...newTab}>Lihat Menu <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a>
            <a className="text-link" href="#kunjungi">Petunjuk Arah</a>
          </div>
        </div>
        <MediaPlaceholder label="Foto Palereman" className="hero-photo" />
      </section>

      <section id="tentang" className="about section shell" aria-labelledby="about-title">
        <p className="section-label">Tentang kami</p>
        <h2 id="about-title">Suasana ngopi khas<br className="desktop-break" /> orang Jawa.</h2>
        <div className="about-copy">
          <p>Palereman Coffee and View berada di Singosaren, Ponorogo. Tempat untuk menikmati kopi, makanan, dan pemandangan dengan suasana yang dekat dengan budaya Jawa.</p>
          <p>Pilihan kami mencakup kopi, minuman segar, makanan, dan camilan. Lihat buku menu sebelum datang, lalu pilih yang ingin dinikmati di Palereman.</p>
        </div>
      </section>

      <section id="suasana" className="atmosphere section shell split-section" aria-labelledby="atmosphere-title">
        <MediaPlaceholder label="Foto suasana tempat" className="atmosphere-photo" />
        <div className="section-copy">
          <p className="section-label">Suasana</p>
          <h2 id="atmosphere-title">Lihat tempatnya.</h2>
          <p>Duduk sambil menikmati pemandangan di Singosaren. Kenali sudut Palereman dan rencanakan waktu untuk mampir.</p>
          <a className="text-link" href={profile.instagramUrl} {...newTab}>Lihat suasana di Instagram<span className="sr-only"> (tab baru)</span></a>
        </div>
      </section>

      <section id="menu" className="menu-section section shell split-section" aria-labelledby="menu-title">
        <div className="section-copy">
          <p className="section-label">Menu</p>
          <h2 id="menu-title">Mau pesan apa?</h2>
          <p>Dari kopi sampai makanan dan camilan, lihat pilihan untuk menemani waktu di Palereman.</p>
          <a className="button" href={profile.menuDriveUrl} {...newTab}>Buka Buku Menu <Icon name="arrow" /><span className="sr-only"> (Google Drive, tab baru)</span></a>
        </div>
        <figure className="menu-photo">
          <Image src="/images/nasi-bakar-palereman.webp" alt="Nasi Bakar Palereman dengan bungkus daun pisang" width={518} height={242} sizes="(max-width: 700px) 90vw, 520px" />
          <figcaption>Nasi Bakar Palereman</figcaption>
        </figure>
      </section>

      <section id="video" className="video-section section shell" aria-labelledby="video-title">
        <div className="video-heading">
          <p className="section-label">Video</p>
          <h2 id="video-title">Cerita dari Palereman.</h2>
          <p>Lihat suasana dan momen di Palereman.</p>
        </div>
        <SocialVideos />
      </section>

      <section id="kunjungi" className="visit section shell" aria-labelledby="visit-title">
        <p className="section-label">Kunjungi</p>
        <h2 id="visit-title">Sampai jumpa di Palereman.</h2>
        <div className="visit-grid">
          <div className="visit-copy">
            <p>Temukan kami di Singosaren, Ponorogo.<br />Mampir untuk kopi dan pemandangannya.</p>
            <dl className="visit-details">
              <div><dt><Icon name="pin" /><span className="sr-only">Alamat</span></dt><dd><address>{profile.address}</address></dd></div>
              <div><dt><Icon name="clock" /><span className="sr-only">Jam buka</span></dt><dd>08.00–20.00<span className="detail-note">Jumat tutup</span></dd></div>
              <div><dt><Icon name="phone" /><span className="sr-only">Telepon</span></dt><dd><a className="contact-link" href={profile.phoneHref}>{profile.phoneDisplay}</a></dd></div>
            </dl>
            <a className="text-link" href={profile.whatsappUrl} {...newTab}>Hubungi via WhatsApp<span className="sr-only"> (tab baru)</span></a>
          </div>
          <div className="map-card">
            <iframe title="Peta Palereman Coffee and View di Ponorogo" src="https://www.google.com/maps?q=Palereman%20Coffee%20and%20View%20Ponorogo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-caption"><p>Jika peta tidak tampil, buka petunjuk arah.</p><a className="text-link" href={profile.mapsUrl} {...newTab}>Buka Google Maps <Icon name="arrow" /><span className="sr-only"> (tab baru)</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
