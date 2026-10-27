import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon-192.png", sizes: "192x192", type: "image/png" }],
  },
  title: { default: site.title, template: "%s | Palereman" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.image, width: 1280, height: 959, alt: "Pengunjung Palereman menikmati pemandangan sawah dan perbukitan di Ponorogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
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
