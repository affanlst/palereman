import { profile } from "@/lib/profile";

export function LocationMap() {
  return (
    <div className="map-card">
      <div className="map-viewport">
        <iframe title="Peta Palereman Coffee and View di Ponorogo" src="https://www.google.com/maps?q=Palereman%20Coffee%20and%20View%20Ponorogo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <p>Peta tidak tampil? <a href={profile.mapsUrl} target="_blank" rel="noopener noreferrer">Buka di Google Maps<span className="sr-only"> (tab baru)</span></a></p>
    </div>
  );
}
