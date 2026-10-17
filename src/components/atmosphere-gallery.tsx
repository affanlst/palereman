"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/icon";

const photos = [
  { src: "/images/suasana-palereman.jpg", alt: "Ruang duduk Palereman dengan kursi kayu, tiang tinggi, dan atap tradisional" },
  { src: "/images/suasana-palereman-ruang-kayu.jpg", alt: "Area duduk Palereman dengan bangku kayu, tiang putih, dan lantai bertingkat" },
  { src: "/images/suasana-palereman-view-sawah.jpg", alt: "Tempat duduk menghadap hamparan sawah dan perbukitan di Palereman" },
  { src: "/images/suasana-palereman-pemandangan.jpg", alt: "Pemandangan sawah, permukiman, dan perbukitan dari meja teras Palereman" },
];

export function AtmosphereGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [failed, setFailed] = useState<number[]>([]);

  function goTo(next: number) {
    const element = rail.current;
    if (!element) return;
    next = Math.max(0, Math.min(photos.length - 1, next));
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    element.scrollTo({ left: next * element.clientWidth, behavior });
  }

  function updatePosition() {
    const element = rail.current;
    if (!element?.clientWidth) return;
    const next = Math.max(0, Math.min(photos.length - 1, Math.round(element.scrollLeft / element.clientWidth)));
    activeIndex.current = next;
    setIndex(next);
  }

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") goTo(0);
    else if (event.key === "End") goTo(photos.length - 1);
    else goTo(activeIndex.current + (event.key === "ArrowRight" ? 1 : -1));
  }

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const resize = new ResizeObserver(() => {
      element.scrollTo({ left: activeIndex.current * element.clientWidth, behavior: "instant" });
    });
    resize.observe(element);
    return () => resize.disconnect();
  }, []);

  return (
    <div className="atmosphere-photo atmosphere-gallery" role="region" aria-roledescription="carousel" aria-label="Galeri suasana Palereman">
      <div className="gallery-frame">
        <div ref={rail} className="gallery-rail" tabIndex={0} role="group" aria-label="Foto suasana; gunakan tombol panah, Home, atau End untuk mengganti foto" onScroll={updatePosition} onKeyDown={handleKey}>
          {photos.map((photo, photoIndex) => <div className="gallery-slide" key={photo.src} role="group" aria-roledescription="slide" aria-label={`Foto ${photoIndex + 1} dari ${photos.length}`} aria-hidden={photoIndex !== index}>
            <Image src={photo.src} alt={photo.alt} width={1280} height={959} loading="lazy" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 45vw, 590px" onLoad={() => setLoaded((previous) => previous.includes(photoIndex) ? previous : [...previous, photoIndex])} onError={() => setFailed((previous) => previous.includes(photoIndex) ? previous : [...previous, photoIndex])} />
          </div>)}
        </div>
        {!loaded.includes(index) && <div className="gallery-message" role="status"><p>{failed.includes(index) ? "Foto belum dapat dimuat. Silakan pilih foto lain." : "Memuat foto…"}</p></div>}
        <span className="gallery-counter" role="status" aria-live="polite" aria-atomic="true">Foto {index + 1} / {photos.length}</span>
      </div>
      <div className="gallery-controls" role="group" aria-label="Kontrol galeri">
        <button className="gallery-arrow" type="button" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Foto sebelumnya"><Icon name="chevron-left" /></button>
        <div className="gallery-dots">
          {photos.map((photo, photoIndex) => <button className="gallery-dot" type="button" key={photo.src} onClick={() => goTo(photoIndex)} aria-label={`Tampilkan foto ${photoIndex + 1}`} aria-current={photoIndex === index ? "true" : undefined} />)}
        </div>
        <button className="gallery-arrow" type="button" onClick={() => goTo(index + 1)} disabled={index === photos.length - 1} aria-label="Foto berikutnya"><Icon name="chevron-right" /></button>
      </div>
      <p className="gallery-caption">Suasana di Palereman, Singosaren.</p>
    </div>
  );
}
