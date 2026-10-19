"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/profile";

const widgetId = "f1b94c89-8127-4922-8666-ab81c060cd92";
type FeedState = "loading" | "slow" | "failed" | "embedded";

export function SocialFeed() {
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<FeedState>("loading");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;

    const checkOutput = () => {
      const hasOutput = container.innerText.trim().length > 0 || container.querySelector("iframe, img, video, article, a[href]");
      if (hasOutput && container.getBoundingClientRect().height > 0) {
        clearTimeout(timer);
        setState("embedded");
      }
    };
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(checkOutput);
    });
    mutations.observe(container, { childList: true, subtree: true, attributes: true, characterData: true });

    // Elfsight's lazy widget may not render until this section enters the viewport.
    const visibility = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setEnabled(true);
      timer = setTimeout(() => setState((current) => current === "loading" ? "slow" : current), 15000);
      visibility.disconnect();
    }, { rootMargin: "200px" });
    visibility.observe(container);
    checkOutput();

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      mutations.disconnect();
      visibility.disconnect();
    };
  }, []);

  return (
    <div className="social-feed">
      {enabled && <Script id="elfsight-platform" src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" onError={() => setState("failed")} />}
      <div ref={host} className={`social-feed-host social-feed-host-${state}`}>
        <div className={`elfsight-app-${widgetId} social-feed-mount`} data-elfsight-app-lazy="" />
      </div>
      {state !== "embedded" && <div className="social-feed-status" role="status">
        <p>{state === "failed" ? "Feed belum dapat dimuat. Lihat unggahan melalui profil kami." : state === "slow" ? "Feed membutuhkan waktu lebih lama. Anda tetap dapat membuka profil kami." : "Memuat unggahan Palereman…"}</p>
        {(state === "failed" || state === "slow") && <button className="text-link" onClick={() => window.location.reload()}>Muat ulang halaman</button>}
      </div>}
      <div className="social-feed-profiles">
        <span>Ikuti @palereman.png</span>
        <div>
          <a className="text-link" href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram<span className="sr-only"> (tab baru)</span></a>
          <a className="text-link" href={profile.tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok<span className="sr-only"> (tab baru)</span></a>
        </div>
      </div>
    </div>
  );
}
