"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function MotionEnhancements() {
  const [loading, setLoading] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try { if (sessionStorage.getItem("palereman-intro-shown")) return; } catch { return; }
    if (document.readyState !== "loading") return;
    const show = window.setTimeout(() => setLoading(true), 180);
    const done = () => {
      window.clearTimeout(show);
      setClosing(true);
      try { sessionStorage.setItem("palereman-intro-shown", "1"); } catch { /* The page remains usable. */ }
      window.setTimeout(() => { setLoading(false); setClosing(false); }, 520);
    };
    window.addEventListener("DOMContentLoaded", done, { once: true });
    const safety = window.setTimeout(done, 5000);
    return () => { window.clearTimeout(show); window.clearTimeout(safety); window.removeEventListener("DOMContentLoaded", done); };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const emblem = document.querySelector(".gunungan-motion");
    if (!emblem) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) { emblem.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.35 });
    observer.observe(emblem);
    return () => observer.disconnect();
  }, []);

  if (!loading) return null;
  return <div className={`intro-overlay${closing ? " is-closing" : ""}`} role="status" aria-label="Palereman sedang memuat"><Image src="/images/gunungan-palereman.png" alt="" width={657} height={905} /><span className="sr-only">Palereman sedang memuat</span></div>;
}
