import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Suasana", description: "Halaman suasana Palereman Coffee and View." };

export default function SuasanaPage() {
  return (
    <div className="shell page-shell atmosphere-page">
      <div className="page-intro"><p className="eyebrow">Suasana Palereman</p><h1>Sebuah tempat untuk jeda.</h1><p>Foto tempat resmi belum tersedia untuk ditampilkan di sini. Galeri akan diisi setelah foto dan lokasinya dikonfirmasi.</p></div>
      <div className="atmosphere-placeholder" role="img" aria-label="Tempat foto suasana Palereman yang belum tersedia"><span>Galeri Palereman</span><strong>Foto suasana<br />segera hadir.</strong><small>Menunggu aset foto resmi.</small></div>
      <Link href="/menu" className="text-link atmosphere-link">Sambil menunggu, lihat menu <span aria-hidden="true">→</span></Link>
    </div>
  );
}
