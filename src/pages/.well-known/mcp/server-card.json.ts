// @see https://modelcontextprotocol.io/
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");

  const data = {
    serverInfo: {
      name: "ajaydandge.dev",
      version: "1.0.0",
      description: "Public content and reading server for Ajay Dandge's personal site and engineering articles",
    },
    capabilities: {
      resources: {
        subscribe: false,
        listChanged: false,
      },
      tools: {
        listChanged: false,
      },
    },
    endpoints: {
      llmsTxt: `${siteUrl}/llms.txt`,
      llmsFullTxt: `${siteUrl}/llms-full.txt`,
      aiCatalog: `${siteUrl}/.well-known/ai-catalog.json`,
    },
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
