"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/icon";
import { embedUrl, socialVideos, type SocialVideo } from "@/lib/social-videos";
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
  const [playerSrc, setPlayerSrc] = useState<string | null>(null);
  const pending = useRef<AbortController | null>(null);
  const selected = useRef<string | null>(null);
  const videos = socialVideos;

  useEffect(() => () => pending.current?.abort(), []);

  async function play(video: SocialVideo) {
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    selected.current = video.id;
    setActive(video.id);
    setStatus("loading");
    setAttempt((value) => value + 1);
    const direct = embedUrl(video);
    setPlayerSrc(direct);
    if (direct) return;

    try {
      const response = await fetch(`/api/videos/${encodeURIComponent(video.id)}`, { signal: controller.signal });
      if (!response.ok) throw new Error("Player unavailable");
      const result: { src?: string } = await response.json();
      if (!result.src) throw new Error("Missing player URL");
      if (!controller.signal.aborted) setPlayerSrc(result.src);
    } catch {
      if (!controller.signal.aborted) setStatus("failed");
    }
  }

  function closePlayer() {
    pending.current?.abort();
    selected.current = null;
    setActive(null);
    setPlayerSrc(null);
  }

  useEffect(() => {
    if (!active || status !== "loading") return;
    const timeout = window.setTimeout(() => { pending.current?.abort(); setStatus("failed"); }, 15000);
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
          {status !== "failed" && playerSrc && <iframe key={`${video.id}-${attempt}`} title={video.title} src={playerSrc} allow="encrypted-media; picture-in-picture" allowFullScreen onLoad={() => { if (selected.current === video.id) setStatus("loaded"); }} onError={() => { if (selected.current === video.id) setStatus("failed"); }} />}
          {status === "loading" && !playerSrc && <div className="player-error"><p>Menyiapkan pemutar…</p></div>}
          {status === "failed" && <div className="player-error"><p>Pemutar tidak dapat dimuat.</p><button className="text-link" onClick={() => play(video)}>Coba lagi</button></div>}
        </div>
        <p className="social-status" role="status">{status === "loading" ? "Memuat pemutar video…" : status === "failed" ? "Buka tautan sumber untuk menonton videonya." : "Jika video tidak dapat diputar, gunakan tautan sumber di bawah."}</p>
        <button className="text-link player-close" onClick={closePlayer}>Tutup pemutar</button>
      </> : <button type="button" className={`social-cover${video.cover ? "" : " social-cover-plain"}`} onClick={() => play(video)} aria-label={`Putar ${video.title}`}>
        {video.cover ? <><Image src={video.cover} alt="" fill sizes="(max-width: 700px) 85vw, 360px" /><span className="play-label"><span aria-hidden="true">▷</span> Putar video</span></> : <><span className="cover-platform">{video.platform}</span><span className="cover-action"><Icon name="video" />Putar video</span><span className="cover-title">{video.title}</span></>}
      </button>}
      <div className="social-video-meta"><h3>{video.title}</h3><span>{video.platform}</span><a className="text-link" href={video.url} target="_blank" rel="noopener noreferrer">Tonton di {video.platform}<span className="sr-only"> (tab baru)</span></a></div>
    </article>;
  })}</div>;
}
