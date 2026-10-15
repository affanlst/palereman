import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link href="/" className="footer-brand">Palereman<span className="wordmark-dot">.</span></Link>
          <p>Coffee and View</p>
        </div>
        <nav aria-label="Navigasi footer">
          <Link href="/menu">Menu</Link>
          <Link href="/suasana">Suasana</Link>
          <Link href="/kunjungi">Kunjungi</Link>
        </nav>
        <p className="footer-note">Informasi menu bersumber dari dokumen Palereman. Harga perlu dikonfirmasi sebelum berkunjung.</p>
      </div>
    </footer>
  );
}
