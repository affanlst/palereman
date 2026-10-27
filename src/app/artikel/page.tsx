import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { articles } from "@/lib/articles";
import { profile } from "@/lib/profile";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Artikel Palereman",
  description: "Panduan reservasi, menu, meeting, tempat kumpul, dan kunjungan ke Palereman Coffee and View di Ponorogo.",
  alternates: { canonical: "/artikel" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: "Artikel Palereman | Palereman Coffee and View",
    description: "Panduan reservasi, menu, meeting, tempat kumpul, dan kunjungan ke Palereman Coffee and View di Ponorogo.",
    url: `${site.url}/artikel`,
    images: [{ url: "/images/suasana-palereman-view-sawah.jpg", width: 1280, height: 959, alt: "Pemandangan sawah dari Palereman" }],
  },
};

const featuredArticle = articles[0];
const supportingArticles = articles.slice(1);

export default function ArticlesPage() {
  return (
    <div className="article-page">
      <header className="article-index-hero">
        <div className="shell article-index-heading">
          <div>
            <p className="article-kicker"><span className="short-rule" />Artikel Palereman</p>
            <h1>Rencanakan waktu di <em>Palereman.</em></h1>
          </div>
          <p className="article-index-intro">Panduan tentang reservasi, menu, meeting, dan kunjungan ke Palereman Coffee and View di Singosaren.</p>
        </div>
      </header>

      <div className="shell article-index-main">
        <section className="article-feature" aria-labelledby="featured-article-title">
          <div className="article-feature-media">
            <Image src={featuredArticle.image} alt={featuredArticle.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 40px), 56vw" priority />
          </div>
          <div className="article-feature-copy">
            <p className="article-label">Pilihan utama · {featuredArticle.category}</p>
            <h2 id="featured-article-title">{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <Link className="button" href={`/artikel/${featuredArticle.slug}`}>Baca artikel <Icon name="arrow" /></Link>
          </div>
        </section>

        <section className="article-listing" aria-labelledby="more-articles-title">
          <div className="article-listing-heading">
            <p className="section-kicker"><span>Artikel lainnya</span><span className="hairline" /></p>
            <h2 id="more-articles-title">Pilih cerita yang<br /><em>kamu perlukan.</em></h2>
          </div>
          <div className="article-card-grid">
            {supportingArticles.map((article) => (
              <article className="article-card" key={article.slug}>
                <Link className="article-card-link" href={`/artikel/${article.slug}`}>
                  <div className="article-card-media">
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 42vw, 360px" />
                  </div>
                  <div className="article-card-copy">
                    <p className="article-label">{article.category}</p>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="text-link">Baca artikel</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="article-contact-strip" aria-labelledby="article-contact-title">
          <div>
            <p className="article-label">Butuh jawaban langsung?</p>
            <h2 id="article-contact-title">Ada rencana<br /><em>bersama?</em></h2>
          </div>
          <a className="button" href={profile.whatsappUrl} target="_blank" rel="noopener noreferrer">Chat WhatsApp <Icon name="arrow" /><span className="sr-only"> (tab baru)</span></a>
        </section>
      </div>
    </div>
  );
}
