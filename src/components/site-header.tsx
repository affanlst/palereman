"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "tentang", label: "Tentang" },
  { id: "suasana", label: "Suasana" },
  { id: "menu", label: "Menu" },
  { id: "video", label: "Video" },
  { id: "kunjungi", label: "Kunjungi" },
];

export function SiteHeader() {
  const mobileNav = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line = window.innerHeight * 0.32;
      let current = "";
      for (const { id } of links) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  function closeMenu(id: string) {
    if (mobileNav.current) mobileNav.current.open = false;
    const section = document.getElementById(id);
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
      section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
    }
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/#beranda" className="wordmark" aria-label="Palereman, beranda">Palereman</Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map(({ id, label }) => <Link key={id} href={`/#${id}`} aria-current={active === id ? "location" : undefined}>{label}</Link>)}
        </nav>
        <details className="mobile-nav" ref={mobileNav} onKeyDown={(event) => {
          if (event.key === "Escape" && mobileNav.current?.open) {
            mobileNav.current.open = false;
            summary.current?.focus();
          }
        }}>
          <summary ref={summary}>Menu <span className="menu-toggle" aria-hidden="true"><i /><i /></span></summary>
          <nav aria-label="Navigasi seluler">
            {links.map(({ id, label }) => <Link key={id} href={`/#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => closeMenu(id)}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
