// @see https://tools.ietf.org/html/rfc8631
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");

  const data = {
    linkset: [
      {
        anchor: `${siteUrl}/`,
        "service-desc": [
          {
            href: `${siteUrl}/.well-known/ai-catalog.json`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: `${siteUrl}/llms.txt`,
            type: "text/plain",
          },
        ],
        status: [
          {
            href: `${siteUrl}/robots.txt`,
            type: "text/plain",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
    },
  });
}
