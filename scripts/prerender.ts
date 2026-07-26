/**
 * Runs after `vite build`. Bakes a correct <title>/meta/canonical/OG/JSON-LD
 * block into a static HTML shell per known route (the 4 static pages + one
 * per Sanity blog post), so crawlers and social link-preview bots that never
 * execute JS still see per-page SEO tags. React hydrates on top exactly as
 * it does today; this does not server-render the article body itself.
 */
import "dotenv/config";
import * as dotenv from "dotenv";
import { createClient } from "@sanity/client";
import * as fs from "node:fs";
import * as path from "node:path";
import {
  absoluteUrl,
  buildArticleJsonLd,
  buildMeta,
  type ArticleSeoInput,
  type BuildMetaInput,
  type SeoLinkTag,
  type SeoMetaTag,
} from "../src/lib/seo";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  apiVersion: process.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});

interface PostMeta {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  authorName?: string;
}

interface RouteEntry {
  routePath: string;
  headHtml: string;
  lastmod?: string;
}

const SEO_HEAD_START = "<!--SEO_HEAD_START-->";
const SEO_HEAD_END = "<!--SEO_HEAD_END-->";

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMetaTags(tags: SeoMetaTag[]): string {
  return tags
    .map((tag) => {
      if (tag.title !== undefined) {
        return `<title>${escapeAttr(tag.title)}</title>`;
      }
      if (tag.content === undefined) return "";
      if (tag.name) {
        return `<meta name="${escapeAttr(tag.name)}" content="${escapeAttr(tag.content)}" />`;
      }
      if (tag.property) {
        return `<meta property="${escapeAttr(tag.property)}" content="${escapeAttr(tag.content)}" />`;
      }
      return "";
    })
    .filter(Boolean)
    .join("\n    ");
}

function renderLinkTags(tags: SeoLinkTag[]): string {
  return tags
    .filter((tag): tag is Required<SeoLinkTag> => Boolean(tag.rel && tag.href))
    .map((tag) => `<link rel="${escapeAttr(tag.rel)}" href="${escapeAttr(tag.href)}" />`)
    .join("\n    ");
}

function renderJsonLd(data: object): string {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function buildStaticRouteHead(input: BuildMetaInput): string {
  const { meta, links } = buildMeta(input);
  return [renderMetaTags(meta), renderLinkTags(links)].filter(Boolean).join("\n    ");
}

function buildArticleRouteHead(post: ArticleSeoInput & { path: string }): string {
  const { meta, links } = buildMeta({
    title: post.title,
    description: post.description,
    path: post.path,
    image: post.image,
    type: "article",
  });
  const jsonLd = renderJsonLd(buildArticleJsonLd(post));
  return [renderMetaTags(meta), renderLinkTags(links), jsonLd].filter(Boolean).join("\n    ");
}

async function fetchPosts(): Promise<PostMeta[]> {
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    title,
    description,
    publishedAt,
    "image": mainImage.asset->url,
    "authorName": author->name
  }`;
  return client.fetch(query);
}

function injectHead(template: string, headHtml: string): string {
  const startIdx = template.indexOf(SEO_HEAD_START);
  const endIdx = template.indexOf(SEO_HEAD_END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Could not find ${SEO_HEAD_START} / ${SEO_HEAD_END} markers in dist/index.html`
    );
  }
  return (
    template.slice(0, startIdx) +
    SEO_HEAD_START +
    "\n    " +
    headHtml +
    "\n    " +
    template.slice(endIdx)
  );
}

function writeSitemap(distDir: string, routes: RouteEntry[]) {
  const urls = routes
    .map((route) => {
      const loc = absoluteUrl(route.routePath);
      const lastmod = route.lastmod
        ? `\n    <lastmod>${new Date(route.lastmod).toISOString().split("T")[0]}</lastmod>`
        : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf-8");
}

async function main() {
  const distDir = path.resolve(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found — run "vite build" before prerendering.`);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  const posts = await fetchPosts();

  const staticRoutes: RouteEntry[] = [
    {
      routePath: "/",
      headHtml: buildStaticRouteHead({
        title:
          "NYSC Updates, PCM Guides, Registration, Camp & Service Year Tips | Sir Patrick NYSC Blog",
        description:
          "Get the latest NYSC updates, registration guides, call-up letter information, camp requirements, deployment, relocation, PPA tips and real experiences from PCMs and ex-corps members.",
        path: "/",
      }),
    },
    {
      routePath: "/about",
      headHtml: buildStaticRouteHead({
        title: "About Sir Patrick | NYSC Guides & PCM Community",
        description:
          "Meet Sir Patrick, the writer and consultant behind this NYSC community for PCMs — helping with registration, camp, PPA placement, relocation, and the full service year journey.",
        path: "/about",
      }),
    },
    {
      routePath: "/contact",
      headHtml: buildStaticRouteHead({
        title: "Contact Us | Sir Patrick NYSC Blog",
        description:
          "Reach out for business inquiries, partnership opportunities, or NYSC questions. Join our WhatsApp channel and Telegram group for daily updates.",
        path: "/contact",
      }),
    },
    {
      routePath: "/news",
      headHtml: buildStaticRouteHead({
        title: "Latest NYSC News & Updates | Sir Patrick NYSC Blog",
        description:
          "Stay on top of the latest NYSC news: mobilisation timetables, call-up letter releases, camp updates, and deployment announcements for PCMs across Nigeria.",
        path: "/news",
      }),
    },
  ];

  const articleRoutes: RouteEntry[] = posts.map((post) => ({
    routePath: `/blog/${post.slug}`,
    headHtml: buildArticleRouteHead({ ...post, path: `/blog/${post.slug}` }),
    lastmod: post.publishedAt,
  }));

  const allRoutes = [...staticRoutes, ...articleRoutes];

  for (const route of allRoutes) {
    const html = injectHead(template, route.headHtml);
    const outPath =
      route.routePath === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.routePath.replace(/^\//, ""), "index.html");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, "utf-8");
  }

  writeSitemap(distDir, allRoutes);

  console.log(
    `[prerender] wrote ${allRoutes.length} route(s) (${articleRoutes.length} blog post(s)) + sitemap.xml`
  );
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
