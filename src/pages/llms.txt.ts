// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://llmstxt.org/
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
  );

  const lines = [
    `# Ajay Dandge`,
    ``,
    `> Engineering blog and digital corner. Building software, exploring ideas, writing, and keeping what's interesting.`,
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
    `- **When not to use:**`,
    `  - General queries unrelated to Ajay Dandge's software projects, technical writing, or professional background.`,
    `  - Transactional e-commerce or customer support actions.`,
    ``,
    `- **How an agent should call:**`,
    `  - Request Markdown by sending \`Accept: text/markdown\` on any route or by appending \`.md\` to URLs (e.g. \`/index.md\`, \`/writing.md\`, \`/about.md\`, \`/contact.md\`, \`/privacy.md\`).`,
    `  - Use \`/llms.txt\` as this primary index, or \`/llms-full.txt\` for complete context.`,
    `  - For collaboration or inquiries, reach out to [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev).`,
    ``,
    `## Sections`,
    ``,
    `- [Home](/index.md): Introduction, recent writing, and snapshot`,
    `- [Writing](/writing.md): Things I've written, ideas I've explored, and thoughts I've put into words`,
    `- [Library](/library.md): Things I watch, read, and listen to — anime, books, music, and bookmarks`,
    `- [About](/about.md): Background, projects, experiments, and contact`,
    `- [Contact](/contact.md): Direct contact channels, email, location, and communication preferences`,
    `- [Privacy](/privacy.md): Privacy policy, analytics disclosure, cookies, and data practices`,
    ``,
    `## Developer Tools`,
    ``,
    `- [Burrow](https://burrow.ajaydandge.dev/): CLI to safely query PostgreSQL and MySQL databases directly or via SSH bastion jump hosts`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): Token, cost, and session tracking plugin for Claude Code`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): Online code runner to write, run, and test code`,
    `- [Contests](https://contests.ajaydandge.dev/): Aggregator for upcoming competitive programming contests`,
    ``,
    `## Writing`,
    ``,
    ...posts.map((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      return `- [${post.data.title}](/blog/${slug}.md): ${post.data.summary}`;
    }),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
