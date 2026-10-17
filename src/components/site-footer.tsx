import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Icon } from "@/components/icon";
import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-statement" aria-hidden="true">Palereman<span>.</span></div>
      <div className="shell footer-inner">
        <div className="footer-identity"><Link href="/#beranda" className="footer-brand"><BrandMark /><span>Palereman Coffee &amp; View</span></Link><p>Singosaren, Ponorogo · Monggo, pinarak.</p></div>
        <nav aria-label="Navigasi footer">
          <Link href="/#tentang">Tentang</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/#suasana">Suasana</Link>
          <Link href="/#video">Sosial</Link>
          <Link href="/#kunjungi">Kunjungi</Link>
        </nav>
        <div className="footer-contact">
          <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram Palereman (tab baru)"><Icon name="instagram" /></a>
          <a href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Palereman (tab baru)"><Icon name="message" /></a>
        </div>
      </div>
      <p className="shell footer-copyright">© <a href="https://heyaffan.tech" target="_blank" rel="noopener noreferrer" aria-label="heyaffan.tech (tab baru)">heyaffan.tech</a> <span aria-hidden="true">|</span> <span>Affan Naufal Syarif Al Ghifari</span></p>
    </footer>
  );
}
