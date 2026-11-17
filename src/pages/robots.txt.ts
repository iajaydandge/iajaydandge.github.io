// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");

  const content = [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `# Modern AI Agent Content Signals (RFC / W3C AI-Friendly Signals)`,
    `Content-Signal: search=yes, ai-input=yes, ai-train=no`,
    ``,
    `# Machine Discovery & Sitemaps`,
    `Sitemap: ${siteUrl}/rss.xml`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
