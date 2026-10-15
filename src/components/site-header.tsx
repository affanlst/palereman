"use client";

import Link from "next/link";
import { useRef } from "react";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#suasana", label: "Suasana" },
  { href: "/#menu", label: "Menu" },
  { href: "/#video", label: "Video" },
  { href: "/#kunjungi", label: "Kunjungi" },
];

export function SiteHeader() {
  const mobileNav = useRef<HTMLDetailsElement>(null);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/#beranda" className="wordmark" aria-label="Palereman, beranda">Palereman<span className="wordmark-dot">.</span></Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <details className="mobile-nav" ref={mobileNav}>
          <summary>Menu <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Navigasi seluler">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => { if (mobileNav.current) mobileNav.current.open = false; }}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
