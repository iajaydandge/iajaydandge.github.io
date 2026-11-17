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
    ``,
    `I'm Ajay — developer, occasional writer, curious human.`,
    ``,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated. This is my personal space on the web for things I'm building, exploring, and learning.`,
    ``,
    `## Sections`,
    ``,
    `- [Home](/index.md): Introduction, recently written articles, a few things I've made, and library`,
    `- [Writing](/writing.md): Things I've written, ideas I've explored, and thoughts I've put into words`,
    `- [Library](/library.md): Things I watch, read, and listen to — anime, books, music, and bookmarks`,
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
    `- [Slate](https://ajaydandge.dev/slate/): Minimalist canvas tool`,
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
