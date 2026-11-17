// @see https://agentskills.io/
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");

  const data = {
    $schema: "https://agentskills.io/schemas/v0.2.0/index.json",
    skills: [
      {
        name: "read-site-index",
        type: "content",
        description: "Retrieve curated machine-readable index of Ajay Dandge's engineering blog and projects",
        url: `${siteUrl}/llms.txt`,
      },
      {
        name: "read-full-overview",
        type: "content",
        description: "Retrieve comprehensive plain-text site overview including all articles, projects, and library",
        url: `${siteUrl}/llms-full.txt`,
      },
      {
        name: "browse-writing",
        type: "content",
        description: "Browse technical articles on system architecture, CORS, auth, database bastions, and LLM benchmarking",
        url: `${siteUrl}/writing.md`,
      },
      {
        name: "get-contact-info",
        type: "trust",
        description: "Retrieve direct communication channels, email, timezone, and responsible disclosure instructions",
        url: `${siteUrl}/contact.md`,
      },
    ],
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
