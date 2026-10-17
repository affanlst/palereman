import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const newsreader = localFont({
  src: "../../public/fonts/newsreader-latin-variable.woff2",
  variable: "--font-heading",
  weight: "200 800",
  display: "swap",
});

const sourceSans = localFont({
  src: "../../public/fonts/source-sans-3-latin-variable.woff2",
  variable: "--font-body",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Palereman Coffee and View", template: "%s | Palereman" },
  description: "Kenali Palereman Coffee and View di Singosaren, Ponorogo. Lihat menu, lokasi, dan jam buka dalam satu halaman.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${newsreader.variable} ${sourceSans.variable}`}>
        <div className="site-canvas">
          <a className="skip-link" href="#konten">Lewati ke konten</a>
          <SiteHeader />
          <main id="konten" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
