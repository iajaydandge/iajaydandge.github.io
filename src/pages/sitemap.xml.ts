// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://www.sitemaps.org/protocol.html
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export async function GET(context: APIContext) {
  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");
  const posts = await getCollection("blog");
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    "",
    "/index.md",
    "/writing",
    "/writing.md",
    "/library",
    "/library.md",
    "/about",
    "/about.md",
    "/contact",
    "/contact.md",
    "/privacy",
    "/privacy.md",
    "/llms.txt",
    "/llms-full.txt",
  ];

  const urls: Array<{ loc: string; lastmod: string }> = [
    ...staticRoutes.map((route) => ({
      loc: `${siteUrl}${route}`,
      lastmod: today,
    })),
    ...posts.flatMap((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      const lastmod = new Date(post.data.publishedAt).toISOString().split("T")[0];
      return [
        { loc: `${siteUrl}/blog/${slug}`, lastmod },
        { loc: `${siteUrl}/blog/${slug}.md`, lastmod },
      ];
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
