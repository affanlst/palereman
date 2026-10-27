import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    { url: `${site.url}/artikel` },
    ...articles.map((article) => ({ url: `${site.url}/artikel/${article.slug}` })),
  ];
}
