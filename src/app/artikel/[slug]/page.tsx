import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "id_ID",
      siteName: site.name,
      title: `${article.title} | Palereman`,
      description: article.excerpt,
      url: `${site.url}/artikel/${article.slug}`,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    mainEntityOfPage: `${site.url}/artikel/${article.slug}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <div className="article-page article-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="article-detail-heading">
        <div className="shell">
          <Link className="article-back-link" href="/artikel"><Icon name="chevron-left" />Semua artikel</Link>
          <p className="article-label">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-detail-excerpt">{article.excerpt}</p>
        </div>
      </header>

      <div>
        <div className="shell article-detail-image">
          <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) calc(100vw - 40px), 1280px" priority />
        </div>
        <div className="shell article-detail-layout">
          <article className="article-body">
            {article.sections.map((section) => (
              <section className="article-body-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            <p className="article-disclaimer">Informasi jam, menu, dan ketersediaan tempat dapat berubah. Konfirmasi melalui WhatsApp sebelum membuat rencana final.</p>
          </article>

          <aside className="article-detail-aside" aria-label="Tautan terkait artikel">
            <div className="article-aside-card">
              <p className="article-label">Palereman Coffee and View</p>
              <h2>Butuh jawaban<br /><em>sebelum berangkat?</em></h2>
              <p>Hubungi Palereman atau buka petunjuk arah sebelum berangkat.</p>
              <div className="article-aside-actions">
                <a className="button" href={article.primaryCta.href} {...(article.primaryCta.external ? newTab : {})}>{article.primaryCta.label}<Icon name="arrow" />{article.primaryCta.external && <span className="sr-only"> (tab baru)</span>}</a>
                <a className="text-link" href={article.secondaryCta.href} {...(article.secondaryCta.external ? newTab : {})}>{article.secondaryCta.label}{article.secondaryCta.external && <><Icon name="arrow" /><span className="sr-only"> (tab baru)</span></>}</a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="shell article-related" aria-labelledby="related-title">
        <div className="article-listing-heading"><p className="section-kicker"><span>Baca juga</span><span className="hairline" /></p><h2 id="related-title">Panduan lain dari <em>Palereman.</em></h2></div>
        <div className="article-related-grid">
          {relatedArticles.map((related) => <Link className="article-related-link" href={`/artikel/${related.slug}`} key={related.slug}><span className="article-label">{related.category}</span><strong>{related.title}</strong></Link>)}
        </div>
      </section>
    </div>
  );
}
