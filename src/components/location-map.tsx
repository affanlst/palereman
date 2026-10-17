"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/profile";

export function LocationMap() {
  const [opened, setOpened] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (opened) frame.current?.focus();
  }, [opened]);

  return (
    <div className="map-card">
      <div className="map-viewport">
        {opened ? (
          <iframe ref={frame} title="Peta Palereman Coffee and View di Ponorogo" src="https://www.google.com/maps?q=Palereman%20Coffee%20and%20View%20Ponorogo&output=embed" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div className="map-prompt">
            <p>Palereman Coffee and View<span>{profile.address}</span></p>
            <button type="button" className="button" onClick={() => setOpened(true)}>Tampilkan peta</button>
          </div>
        )}
      </div>
      <p>Petunjuk arah dan navigasi: <a href={profile.mapsUrl} target="_blank" rel="noopener noreferrer">Buka di Google Maps<span className="sr-only"> (tab baru)</span></a></p>
    </div>
  );
}
