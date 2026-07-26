export const SITE_URL = "https://www.nyscupdate.com";
export const SITE_NAME = "Sir Patrick NYSC Blog";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_DESCRIPTION =
  "Explore insightful articles, camp tips, PPA guides, and real-life experiences for NYSC members across Nigeria. Stay prepared and informed for your service year!";

export type SeoMetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

export type SeoLinkTag = {
  rel?: string;
  href?: string;
};

export interface BuildMetaInput {
  title: string;
  /** Sanity/GROQ projections yield explicit `null`, not `undefined`, for empty fields. */
  description?: string | null;
  /** Path relative to the site root, e.g. "/" or "/blog/my-slug" */
  path: string;
  image?: string | null;
  type?: "website" | "article";
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMeta({
  title,
  description,
  path,
  image,
  type = "website",
}: BuildMetaInput): { meta: SeoMetaTag[]; links: SeoLinkTag[] } {
  // Sanity/GROQ returns explicit `null` for empty fields rather than
  // omitting the key, so `??` is required here — default params only
  // kick in for `undefined`.
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const url = absoluteUrl(path);
  const absoluteImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);

  return {
    meta: [
      { title },
      { name: "description", content: resolvedDescription },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: resolvedDescription },
      { property: "og:image", content: absoluteImage },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: resolvedDescription },
      { name: "twitter:image", content: absoluteImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export interface ArticleSeoInput {
  title: string;
  description?: string | null;
  slug: string;
  image?: string | null;
  publishedAt?: string | null;
  authorName?: string | null;
}

export function buildArticleJsonLd({
  title,
  description,
  slug,
  image,
  publishedAt,
  authorName,
}: ArticleSeoInput) {
  const url = absoluteUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description ?? DEFAULT_DESCRIPTION,
    image: [absoluteUrl(image ?? DEFAULT_OG_IMAGE)],
    datePublished: publishedAt ?? undefined,
    author: authorName ? { "@type": "Person", name: authorName } : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icons/Logo.svg"),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}
