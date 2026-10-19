"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/profile";

const widgetId = "f1b94c89-8127-4922-8666-ab81c060cd92";

export function SocialFeed() {
  const host = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!container) return;

    // Elfsight's lazy widget may not render until this section enters the viewport.
    const visibility = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setEnabled(true);
      visibility.disconnect();
    }, { rootMargin: "200px" });
    visibility.observe(container);

    return () => visibility.disconnect();
  }, []);

  return (
    <div className="social-feed">
      {enabled && <Script id="elfsight-platform" src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />}
      <div ref={host} className="social-feed-host">
        <div className={`elfsight-app-${widgetId} social-feed-mount`} data-elfsight-app-lazy="" />
      </div>
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
