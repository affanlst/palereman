import Link from "next/link";
import Image from "next/image";
import { formatRupiah, menuItems } from "@/lib/menu";
import { profile } from "@/lib/profile";

const selections = ["kopi-rempah", "nasi-bakar-palereman", "es-keluarga-cemara"].map((id) => menuItems.find((item) => item.id === id)!);

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Palereman Coffee and View</p>
          <h1>Mampir, ngopi, menikmati waktu.</h1>
          <p className="lead">Kopi, unjukan, dan masakan Palereman. Pilih yang ingin dicoba dari buku menu kami.</p>
          <div className="actions">
            <Link className="button button-gold" href="/menu">Lihat menu <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="/kunjungi">Rencanakan kunjungan <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Area foto tempat. Foto resmi Palereman belum tersedia.">
          <div className="hero-visual-inner">
            <span className="visual-index">01 / Palereman</span>
            <p>Tempat untuk<br /><em>berhenti sejenak.</em></p>
            <span className="visual-caption">Foto suasana akan ditampilkan setelah tersedia.</span>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="shell intro-grid">
          <div className="intro-brand"><span className="section-number">01 <span aria-hidden="true">/</span> Tentang Palereman</span><Image src="/images/logo-palereman.png" alt="Logo gunungan Palereman Coffee and View" width={657} height={1135} /></div>
          <div>
            <h2>Satu meja, banyak pilihan.</h2>
            <p>Buku menu Palereman memuat kopi, minuman segar, makanan, dan camilan. Di sini, kamu bisa melihat pilihan yang sudah kami cocokkan dengan dokumen menu.</p>
          </div>
        </div>
      </section>

      <section className="featured shell">
        <div className="section-heading">
          <div><span className="section-number">02 <span aria-hidden="true">/</span> Dari buku menu</span><h2>Mulai dari sini.</h2></div>
          <Link href="/menu" className="text-link">Lihat semua pilihan <span aria-hidden="true">→</span></Link>
        </div>
        <div className="featured-list">
          {selections.map((item, index) => (
            <div className="featured-item" key={item.id}>
              <span className="featured-index">0{index + 1}</span>
              {item.image && <div className="featured-image"><Image src={item.image} alt={item.name} width={120} height={120} /></div>}
              <div><span className="item-category">{item.category}</span><h3>{item.name}</h3></div>
              <span className="featured-price">{formatRupiah(item.variants[0].priceIDR)}</span>
            </div>
          ))}
        </div>
        <p className="source-note">Harga mengikuti dokumen menu yang diberikan dan belum dikonfirmasi sebagai harga terkini.</p>
      </section>

      <section className="visit-strip">
        <div className="shell visit-strip-inner">
          <div><span className="section-number">03 <span aria-hidden="true">/</span> Datang berkunjung</span><h2>Kenali tempatnya lebih dekat.</h2><p className="visit-strip-address">{profile.address}</p></div>
          <Link className="button button-outline" href="/kunjungi">Info kunjungan <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
