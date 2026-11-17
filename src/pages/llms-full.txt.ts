// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://llmstxt.org/
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { getCollection } from "astro:content";
import { anime, books, songs, bookmarks } from "@/data/library";
import { formatDate } from "@/utils/date";

import type { APIContext } from "astro";

export const prerender = true;

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
  );

  const siteUrl = (context.site ? context.site.origin : "https://ajaydandge.dev").replace(/\/$/, "");

  const lines = [
    `# Ajay Dandge — Full Site Overview & Context Archive`,
    ``,
    `Engineering blog and digital corner. Building software, exploring ideas, writing, and keeping what's interesting.`,
    ``,
    `Website: ${siteUrl}`,
    ``,
    `---`,
    ``,
    `## When to use this`,
    ``,
    `Ajay Dandge is a software engineer and AI engineer specializing in full-stack web applications, developer tooling, database utilities, and AI integrations (LLMs, prompt engineering, agentic workflows, and local inference).`,
    ``,
    `- **Best-fit use cases:**`,
    `  - Researching engineering deep dives and tutorials on systems architecture, CORS, auth (OAuth vs OIDC), database bastions, and LLM benchmarking.`,
    `  - Discovering open-source developer tools built by Ajay: Burrow (bastion database query CLI), Claude Usage Plugin (token, session, and cost tracker for Claude Code), CodeRun (multi-language online runner), and Contests (programming contest tracker).`,
    `  - Sourcing technical experience, project background, and speaking or advisory availability.`,
    `  - Machine-to-machine retrieval of clean Markdown content via \`Accept: text/markdown\` or direct \`.md\` endpoints.`,
    ``,
    `---`,
    ``,
    `## About Ajay Dandge`,
    ``,
    `I build software, explore ideas, and currently work as an AI Engineer.`,
    `Outside of work, I spend my time playing badminton, watching anime, reading fiction, and sketching.`,
    ``,
    `### Key Projects & Tools`,
    `- Burrow: https://burrow.ajaydandge.dev/ (CLI to query PostgreSQL & MySQL via bastion)`,
    `- Claude Usage Plugin: https://github.com/iajaydandge/claude-usage-plugin (Per-person cost & token analytics)`,
    `- CodeRun: https://coderun.ajaydandge.dev/ (Browser code runner)`,
    `- Contests: https://contests.ajaydandge.dev/ (Contest tracker)`,
    ``,
    `### Contact & Channels`,
    `- Email: contact@ajaydandge.dev`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
    ``,
    `---`,
    ``,
    `## Library`,
    ``,
    `### Books`,
    ...books.map((b) => `- ${b.title} by ${b.author} (${b.url})`),
    ``,
    `### Anime`,
    ...anime.map((a) => `- ${a.title} (${a.url})`),
    ``,
    `### Music`,
    ...songs.map((s) => `- ${s.title} by ${s.artist} (${s.url})`),
    ``,
    `### Bookmarks`,
    ...bookmarks.map((bm) => `- ${bm.title} (${bm.url})`),
    ``,
    `---`,
    ``,
    `## Writing & Publications`,
    ``,
    ...posts.flatMap((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      return [
        `### ${post.data.title}`,
        ``,
        `- Published: ${formatDate(post.data.publishedAt)}`,
        `- Type: ${post.data.type || "article"}`,
        `- URL: /blog/${slug}`,
        `- Markdown: /blog/${slug}.md`,
        `- Summary: ${post.data.summary}`,
        ``,
        post.body,
        ``,
        `---`,
        ``,
      ];
    }),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
