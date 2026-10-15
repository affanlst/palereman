import Link from "next/link";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><Link href="/#beranda" className="footer-brand">Palereman<span className="wordmark-dot">.</span></Link><p>Coffee and View · Ponorogo</p></div>
        <nav aria-label="Navigasi footer">
          <Link href="/#tentang">Tentang</Link>
          <Link href="/#suasana">Suasana</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/#video">Video</Link>
          <Link href="/#kunjungi">Kunjungi</Link>
        </nav>
        <div className="footer-contact"><a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span className="sr-only">(buka tab baru)</span></a><a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span className="sr-only">(buka tab baru)</span></a></div>
      </div>
    </footer>
  );
}
