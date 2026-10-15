import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";

export const metadata: Metadata = { title: "Kunjungi", description: "Alamat, petunjuk arah, jam, dan telepon Palereman Coffee and View di Ponorogo." };

export default function KunjungiPage() {
  return (
    <div className="shell page-shell visit-page">
      <div className="page-intro"><p className="eyebrow">Rencanakan kunjungan</p><h1>Sampai bertemu di Palereman.</h1><p>Lihat alamat, jam buka, dan cara menghubungi Palereman sebelum datang.</p></div>
      <div className="visit-info">
        <div><span className="section-number">01 / Lokasi</span><h2>Alamat</h2><p>{profile.address}</p><a className="text-link visit-detail-link" href={profile.mapsUrl} target="_blank" rel="noopener noreferrer">Petunjuk arah <span aria-hidden="true">→</span></a></div>
        <div><span className="section-number">02 / Waktu</span><h2>Jam buka</h2><dl className="hours-list">{profile.hours.map((entry) => <div key={entry.day}><dt>{entry.day}</dt><dd>{entry.time}</dd></div>)}</dl></div>
        <div><span className="section-number">03 / Kontak</span><h2>Hubungi kami</h2><p><a className="phone-link" href={profile.phoneHref}>{profile.phoneDisplay}</a></p><p className="contact-note">Telepon atau kirim pesan WhatsApp untuk bertanya.</p></div>
      </div>
      <div className="visit-action"><p>Ada pertanyaan sebelum datang? Hubungi Palereman langsung. Pesan WhatsApp membuka percakapan dan tidak membuat reservasi otomatis.</p><a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-gold">Kirim WhatsApp <span aria-hidden="true">→</span></a></div>
      <p className="instagram-note">Kabar dan foto terbaru juga tersedia di <a href="https://www.instagram.com/palereman.png/" target="_blank" rel="noopener noreferrer">Instagram Palereman</a>.</p>
      <Link href="/menu" className="text-link">Lihat pilihan menu <span aria-hidden="true">→</span></Link>
    </div>
  );
}
