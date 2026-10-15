"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/icon";
import { embedUrl, socialVideos } from "@/lib/social-videos";
import { profile } from "@/lib/profile";

type PlayerState = "loading" | "loaded" | "failed";

function handleRailKey(event: KeyboardEvent<HTMLElement>) {
  const rail = event.currentTarget;
  if (event.target !== rail || rail.scrollWidth <= rail.clientWidth) return;
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  if (event.key === "Home" || event.key === "End") {
    rail.scrollTo({ left: event.key === "Home" ? 0 : rail.scrollWidth, behavior });
    return;
  }
  const cardWidth = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
  const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
  rail.scrollBy({ left: (event.key === "ArrowRight" ? 1 : -1) * (cardWidth + gap), behavior });
}

export function SocialVideos() {
  const [active, setActive] = useState<string | null>(null);
  const [status, setStatus] = useState<PlayerState>("loading");
  const [attempt, setAttempt] = useState(0);
  const videos = socialVideos.filter((video) => embedUrl(video));

  useEffect(() => {
    if (!active || status !== "loading") return;
    const timeout = window.setTimeout(() => setStatus("failed"), 15000);
    return () => window.clearTimeout(timeout);
  }, [active, status, attempt]);

  if (videos.length === 0) {
    return (
      <div className="video-empty">
        <ol className="social-video-list" tabIndex={0} onKeyDown={handleRailKey} aria-label="Video pilihan belum tersedia; gunakan tombol panah untuk menggeser daftar">
          {["01", "02", "03"].map((number) => <li className="video-placeholder" key={number}><span className="video-index">Video {number}</span><div><Icon name="video" /><p>Video sedang disiapkan</p></div><span className="video-note">Belum tersedia</span></li>)}
        </ol>
        <p className="video-empty-note">Sementara itu, lihat unggahan kami di <a className="inline-link" href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram Palereman<span className="sr-only"> (tab baru)</span></a>.</p>
      </div>
    );
  }

  return <div className="social-video-list" tabIndex={0} onKeyDown={handleRailKey} role="group" aria-label="Video pilihan; gunakan tombol panah untuk menggeser daftar">{videos.map((video) => {
    const playing = active === video.id;
    return <article className="social-video" key={video.id}>
      {playing ? <>
        <div className="social-player">
          {status !== "failed" && <iframe key={`${video.id}-${attempt}`} title={video.title} src={embedUrl(video)!} allow="encrypted-media; picture-in-picture" allowFullScreen onLoad={() => setStatus("loaded")} onError={() => setStatus("failed")} />}
          {status === "failed" && <div className="player-error"><p>Pemutar tidak dapat dimuat.</p><button className="text-link" onClick={() => { setStatus("loading"); setAttempt((value) => value + 1); }}>Coba lagi</button></div>}
        </div>
        <p className="social-status" role="status">{status === "loading" ? "Memuat pemutar video…" : status === "failed" ? "Buka tautan sumber untuk menonton videonya." : "Jika video tidak dapat diputar, gunakan tautan sumber di bawah."}</p>
        <button className="text-link player-close" onClick={() => setActive(null)}>Tutup pemutar</button>
      </> : <button type="button" className="social-cover" onClick={() => { setActive(video.id); setStatus("loading"); }} aria-label={`Putar ${video.title}`}><Image src={video.cover} alt="" fill sizes="(max-width: 700px) 85vw, 360px" /><span className="play-label"><span aria-hidden="true">▷</span> Putar video</span></button>}
      <div className="social-video-meta"><h3>{video.title}</h3><span>{video.platform}</span><a className="text-link" href={video.url} target="_blank" rel="noopener noreferrer">Tonton di {video.platform}<span className="sr-only"> (tab baru)</span></a></div>
    </article>;
  })}</div>;
}
