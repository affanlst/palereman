import Image from "next/image";
import { profile } from "@/lib/profile";
import { MotionEnhancements } from "@/components/motion-enhancements";
import { SocialVideos } from "@/components/social-videos";

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <MotionEnhancements />
      <section id="beranda" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Image className="hero-gunungan" src="/images/gunungan-palereman.png" alt="Gunungan Palereman" width={657} height={905} priority />
          <p className="eyebrow">Palereman Coffee and View · Ponorogo</p>
          <h1 id="hero-title">Ruang untuk singgah. Waktu untuk menikmati.</h1>
          <p className="lead">Kopi, makanan, dan pemandangan dalam satu tempat di Singosaren.</p>
          <div className="actions">
            <a className="button button-gold" href={profile.menuDriveUrl} {...newTab}>View Menu <span className="sr-only">(buka Google Drive di tab baru)</span></a>
            <a className="text-link" href="#kunjungi">Rencanakan kunjungan</a>
          </div>
        </div>
      </section>

      <section id="tentang" className="intro-band" aria-labelledby="about-title">
        <div className="shell intro-grid">
          <div className="intro-brand"><span className="section-number">01 / Tentang Palereman</span><Image className="gunungan-motion" src="/images/gunungan-palereman.png" alt="Gunungan dari logo Palereman" width={657} height={905} /></div>
          <div><h2 id="about-title">Duduk sebentar, lihat lebih jauh.</h2><p>Palereman Coffee and View berada di Singosaren, Ponorogo. Menu kami mencakup kopi, minuman segar, makanan, dan camilan untuk dinikmati di tempat.</p></div>
        </div>
      </section>

      <section id="suasana" className="atmosphere shell" aria-labelledby="atmosphere-title">
        <div className="section-heading"><span className="section-number">02 / Suasana</span><h2 id="atmosphere-title">Kenali sudut Palereman.</h2><p>Foto tempat asli sedang disiapkan. Sementara itu, kamu bisa melihat lokasi dan merencanakan kunjungan.</p></div>
        <div className="venue-placeholder" role="img" aria-label="Tempat untuk foto suasana Palereman; foto asli belum tersedia"><span>Sudut Palereman</span><strong>Singosaren,<br />Ponorogo.</strong><span>Foto venue menyusul</span></div>
        <a className="text-link" href={profile.mapsUrl} {...newTab}>Lihat lokasi di Google Maps <span className="sr-only">(buka tab baru)</span></a>
      </section>

      <section id="menu" className="menu-feature" aria-labelledby="menu-title">
        <div className="shell menu-grid">
          <div className="menu-copy"><span className="section-number">03 / Menu</span><h2 id="menu-title">Pilih yang ingin kamu nikmati.</h2><p>Jelajahi buku menu Palereman di Google Drive. Kamu bisa membukanya sebelum datang atau saat sudah duduk di sini.</p><a className="button button-gold" href={profile.menuDriveUrl} {...newTab}>View Menu <span className="sr-only">(buka Google Drive di tab baru)</span></a></div>
          <div className="menu-art" role="img" aria-label="Foto Nasi Bakar Palereman dari buku menu"><Image src="/images/nasi-bakar-palereman.png" alt="" width={518} height={242} /></div>
        </div>
      </section>

      <section id="video" className="social shell" aria-labelledby="video-title">
        <div><span className="section-number">04 / Cerita dari Palereman</span><h2 id="video-title">Lihat cerita dari Palereman.</h2></div>
        <SocialVideos />
      </section>

      <section id="kunjungi" className="visit" aria-labelledby="visit-title">
        <div className="shell"><div className="visit-heading"><span className="section-number">05 / Kunjungi</span><h2 id="visit-title">Sampai jumpa di Palereman.</h2></div>
          <div className="visit-info">
            <div><h3>Alamat</h3><p>{profile.address}</p><a className="text-link" href={profile.mapsUrl} {...newTab}>Petunjuk Arah <span className="sr-only">(buka tab baru)</span></a></div>
            <div><h3>Jam buka</h3><dl className="hours-list">{profile.hours.map(({ day, time }) => <div key={day}><dt>{day}</dt><dd>{time}</dd></div>)}</dl></div>
            <div><h3>Hubungi</h3><a className="phone-link" href={profile.phoneHref}>{profile.phoneDisplay}</a><p className="contact-note">Ada pertanyaan sebelum datang?</p><a className="button button-gold" href={profile.whatsappUrl} {...newTab}>Hubungi Palereman <span className="sr-only">via WhatsApp (buka tab baru)</span></a></div>
          </div>
          <div className="map-panel">
            <iframe title="Peta lokasi Palereman Coffee and View di Ponorogo" src="https://www.google.com/maps?q=Palereman%20Coffee%20and%20View%20Ponorogo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-caption"><span>Palereman · Singosaren, Ponorogo<br /><small>Jika peta tidak tampil, buka petunjuk arah.</small></span><a className="text-link" href={profile.mapsUrl} {...newTab}>Buka Petunjuk Arah <span className="sr-only">(buka tab baru)</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
