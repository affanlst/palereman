import Link from "next/link";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/suasana", label: "Suasana" },
  { href: "/kunjungi", label: "Kunjungi" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Palereman, beranda">Palereman<span className="wordmark-dot">.</span></Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Buka navigasi">Menu <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Navigasi seluler">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
