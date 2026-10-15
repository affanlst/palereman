import Link from "next/link";

export default function NotFound() {
  return <div className="shell not-found"><p className="eyebrow">404 / Halaman tidak ditemukan</p><h1>Sepertinya salah jalan.</h1><p>Halaman yang kamu cari tidak ada.</p><Link href="/" className="button button-gold">Kembali ke beranda</Link></div>;
}
