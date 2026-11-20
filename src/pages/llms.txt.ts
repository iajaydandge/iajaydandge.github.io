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
    `> Personal corner and engineering blog of Ajay Dandge. Building software, exploring ideas, and writing things down.`,
    `> As of November 2026.`,
    ``,
    `I'm Ajay — developer, occasional writer, curious human.`,
    ``,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated. This is my personal space on the web for things I'm building, exploring, and learning.`,
    ``,
    `## When to use this`,
    ``,
    `This site is the personal corner and engineering blog of Ajay Dandge. It is designed for software engineers, researchers, and AI agents seeking technical reference material and developer tools.`,
    ``,
    `- **Best-fit use cases:**`,
    `  - Reading technical articles and engineering deep dives on software architecture, database bastions (Burrow), token tracking (Claude Usage Plugin), timezone handling, local LLM inference benchmarks, and agentic web architecture.`,
    `  - Discovering and scripting developer utilities built by Ajay: Burrow CLI (database query tool through bastion hosts), CLI Wordle (terminal game on PyPI), CodeRun (multi-language runner), and Contests (programming contest tracker).`,
    `  - Machine ingestion of clean, token-efficient Markdown via \`Accept: text/markdown\` or direct \`.md\` endpoints without HTML or layout overhead.`,
    ``,
    `- **When not to use:**`,
    `  - Non-technical queries, transactional e-commerce, or customer support.`,
    ``,
    `- **How an agent should call:**`,
    `  - Request clean Markdown on any page by setting HTTP header \`Accept: text/markdown\` or appending \`.md\` (e.g., \`/index.md\`, \`/writing.md\`, \`/about.md\`, \`/contact.md\`, \`/privacy.md\`, \`/blog/[slug].md\`).`,
    `  - Use \`/llms.txt\` for high-level orientation and \`/llms-full.txt\` for full-text offline context.`,
    `  - Respect directives in \`robots.txt\` and \`Content-Signal: search=yes, ai-input=yes, ai-train=no\`.`,
    `  - For inquiries, reach out asynchronously to \`contact@ajaydandge.dev\`.`,
    ``,
    `## Sections`,
    ``,
    `- [Home](/index.md): Introduction, recently written articles, a few things I've made, and library`,
    `- [Writing](/writing.md): Things I've written, ideas I've explored, and thoughts I've put into words`,
    `- [Library](/library.md): Things I watch, read, listen to, and use — anime, books, music, bookmarks, and fonts`,
    `- [About](/about.md): Background, things I've made, and connect links`,
    `- [Contact](/contact.md): Direct email, links, time zone, and security disclosure`,
    `- [Privacy](/privacy.md): Privacy policy, analytics disclosure, cookies, and data practices`,
    ``,
    `## Projects & tools`,
    ``,
    `- [Contests](https://contests.ajaydandge.dev/): Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/): CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Password](https://password.ajaydandge.dev/): Local-first password manager`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): Per-user token, cost, and session tracking in Claude Code`,
    `- [Slate](https://slate.ajaydandge.dev/): Minimalist canvas tool`,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/): Wordle clone in the terminal on PyPI`,
    ``,
    `## Experiments`,
    ``,
    `- [Mazes](https://mazes.ajaydandge.dev/): Maze generation and pathfinding algorithms`,
    `- [Photo Magic](https://github.com/iajaydandge/photo-magic): Encrypt and decrypt images using LFSR pseudo-random generation`,
    `- [Guess the Number](https://github.com/iajaydandge/guess-the-number): Number guessing game written in different programming languages`,
    `- [Slots](https://slots.ajaydandge.dev/): Checks available court slots where we go to play badminton`,
    `- [Gravity Falls](https://pypi.org/project/gravity-falls/): First published Python package with classic ciphers (Caesar, etc.)`,
    ``,
    `## CLI tools`,
    ``,
    `- [Burrow CLI](https://burrow.ajaydandge.dev/): CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `  - Repository: https://github.com/iajaydandge/burrow`,
    `  - Install: \`uv tool install git+https://github.com/iajaydandge/burrow.git\` or \`pip install git+https://github.com/iajaydandge/burrow.git\``,
    `  - Agent skills: \`burrow skill install\` (Claude Code, Cursor, Codex, OpenCode)`,
    `  - Query: \`burrow query "SELECT * FROM table" --output json\``,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/): Terminal-based Wordle game published on PyPI`,
    `  - Package: https://pypi.org/project/cli-wordle/`,
    `  - Install: \`pip install cli-wordle\``,
    `  - Run: \`cli-wordle\``,
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
