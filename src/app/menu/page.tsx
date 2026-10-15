import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu-browser";

export const metadata: Metadata = {
  title: "Menu",
  description: "Cari kopi, minuman, makanan, dan camilan dalam buku menu Palereman Coffee and View.",
};

export default function MenuPage() {
  return (
    <div className="shell page-shell">
      <div className="page-intro"><p className="eyebrow">Buku menu Palereman</p><h1>Pilih yang ingin dicoba.</h1><p>Cari nama menu atau pilih kategori. Harga dan pilihan panas atau dingin ditranskripsi dari PDF menu yang diberikan.</p><a className="text-link pdf-link" href="/menu-palereman.pdf" download>Unduh buku menu PDF <span aria-hidden="true">↓</span></a></div>
      <MenuBrowser />
      <p className="source-note menu-disclaimer">Harga mengikuti buku menu yang diberikan. Konfirmasikan harga dan ketersediaan terbaru langsung kepada Palereman sebelum memesan.</p>
    </div>
  );
}
