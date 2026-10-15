import Image from "next/image";

export default function Loading() {
  return <div className="intro-overlay" role="status" aria-label="Palereman sedang memuat"><Image src="/images/gunungan-palereman.png" alt="" width={657} height={905} /><span className="sr-only">Palereman sedang memuat</span></div>;
}
