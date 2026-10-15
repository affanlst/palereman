import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Palereman Coffee and View", template: "%s | Palereman" },
  description: "Kenali Palereman Coffee and View di Singosaren, Ponorogo. Lihat menu, lokasi, dan jam buka dalam satu halaman.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#konten">Lewati ke konten</a>
        <SiteHeader />
        <main id="konten">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
