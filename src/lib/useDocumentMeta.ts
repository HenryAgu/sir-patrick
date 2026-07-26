import { useEffect } from "react";
import { buildArticleJsonLd, buildMeta, type ArticleSeoInput } from "@/lib/seo";

export type DocumentMetaInput = ArticleSeoInput & { path: string };

/**
 * Imperatively syncs document.title / meta / canonical / JSON-LD for pages
 * whose SEO data only becomes available after an async fetch (e.g. a blog
 * post loaded via React Query), where a static route `head()` can't help.
 */
export function useDocumentMeta(seo: DocumentMetaInput | null | undefined) {
  useEffect(() => {
    if (!seo) return;

    const previousTitle = document.title;
    const { meta, links } = buildMeta({
      title: seo.title,
      description: seo.description,
      path: seo.path,
      image: seo.image,
      type: "article",
    });

    document.title = seo.title;

    const created: HTMLElement[] = [];

    meta.forEach((tag) => {
      if (tag.title !== undefined) return;
      const el = document.createElement("meta");
      if (tag.name) el.setAttribute("name", tag.name);
      if (tag.property) el.setAttribute("property", tag.property);
      if (tag.content) el.setAttribute("content", tag.content);
      document.head.appendChild(el);
      created.push(el);
    });

    links.forEach((link) => {
      if (!link.rel || !link.href) return;
      const el = document.createElement("link");
      el.setAttribute("rel", link.rel);
      el.setAttribute("href", link.href);
      document.head.appendChild(el);
      created.push(el);
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(buildArticleJsonLd(seo));
    document.head.appendChild(script);
    created.push(script);

    return () => {
      created.forEach((el) => el.remove());
      document.title = previousTitle;
    };
  }, [
    seo?.title,
    seo?.description,
    seo?.path,
    seo?.image,
    seo?.slug,
    seo?.publishedAt,
    seo?.authorName,
  ]);
}
