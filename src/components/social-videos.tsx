"use client";

import Image from "next/image";
import { useState } from "react";
import { embedUrl, socialVideos } from "@/lib/social-videos";
import { profile } from "@/lib/profile";

export function SocialVideos() {
  const [active, setActive] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  if (socialVideos.length === 0) {
    return <div className="social-copy"><p>Video pilihan akan tampil di sini setelah tautan unggahan resminya tersedia. Kunjungi akun Instagram Palereman untuk melihat unggahan yang sudah dipublikasikan.</p><a className="button button-outline-dark" href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">Lihat Instagram Palereman <span className="sr-only">(buka tab baru)</span></a></div>;
  }

  return <div className="social-video-list">{socialVideos.map((video) => {
    const src = embedUrl(video);
    if (!src) return null;
    const playing = active === video.id;
    return <article className="social-video" key={video.id}>
      {playing ? <div className="social-player"><iframe title={video.title} src={src} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen onLoad={() => setLoaded(true)} /><span role="status" className="social-status">{loaded ? "Pemutar siap" : "Memuat pemutar video…"}</span></div> : <button type="button" className="social-cover" onClick={() => { setActive(video.id); setLoaded(false); }}><Image src={video.cover} alt="" fill sizes="(max-width: 640px) 85vw, 300px" /><span>Putar video</span></button>}
      <div className="social-video-meta"><strong>{video.title}</strong><span>{video.platform}</span><a href={video.url} target="_blank" rel="noopener noreferrer">Tonton di {video.platform}<span className="sr-only"> (buka tab baru)</span></a></div>
    </article>;
  })}</div>;
}
