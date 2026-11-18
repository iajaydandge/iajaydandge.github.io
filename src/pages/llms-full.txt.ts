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

  const siteUrl = (
    context.site ? context.site.origin : "https://ajaydandge.dev"
  ).replace(/\/$/, "");

  const lines = [
    `# Ajay Dandge — Full Site Overview & Context Archive`,
    ``,
    `> Personal corner and engineering blog of Ajay Dandge. Building software, exploring ideas, and writing things down.`,
    `> As of November 2026.`,
    ``,
    `Website: ${siteUrl}`,
    ``,
    `I'm Ajay — developer, occasional writer, curious human.`,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated. This is my personal space on the web for things I'm building, exploring, and learning.`,
    ``,
    `## When to use this`,
    ``,
    `This site is the personal corner and engineering blog of Ajay Dandge. It is designed for software engineers, researchers, and AI agents seeking technical reference material and developer tools.`,
    ``,
    `- Best-fit use cases:`,
    `  - Reading technical articles and engineering deep dives on software architecture, database bastions (Burrow), token tracking (Claude Usage Plugin), timezone handling, local LLM inference benchmarks, and agentic web architecture.`,
    `  - Discovering and scripting developer utilities built by Ajay: Burrow CLI (database query tool through bastion hosts), CLI Wordle (terminal game on PyPI), CodeRun (multi-language runner), and Contests (programming contest tracker).`,
    `  - Machine ingestion of clean, token-efficient Markdown via \`Accept: text/markdown\` or direct \`.md\` endpoints without HTML or layout overhead.`,
    ``,
    `- When not to use:`,
    `  - Non-technical queries, transactional e-commerce, or customer support.`,
    ``,
    `- How an agent should call:`,
    `  - Request clean Markdown on any page by setting HTTP header \`Accept: text/markdown\` or appending \`.md\` (e.g., \`/index.md\`, \`/writing.md\`, \`/about.md\`, \`/contact.md\`, \`/privacy.md\`, \`/blog/[slug].md\`).`,
    `  - Use \`/llms.txt\` for high-level orientation and \`/llms-full.txt\` for full-text offline context.`,
    `  - Respect directives in \`robots.txt\` and \`Content-Signal: search=yes, ai-input=yes, ai-train=no\`.`,
    `  - For inquiries, reach out asynchronously to \`contact@ajaydandge.dev\`.`,
    ``,
    `---`,
    ``,
    `## About`,
    ``,
    `I'm Ajay. I build software, explore ideas, and currently work as an AI Engineer.`,
    ``,
    `Outside of work, I spend my time playing badminton, watching anime, reading fiction (mostly), and sketching. I also enthusiastically follow cricket and love following sports in general.`,
    ``,
    `### Projects & tools`,
    `- Contests: https://contests.ajaydandge.dev/ — Track upcoming competitive programming contests`,
    `- CodeRun: https://coderun.ajaydandge.dev/ — Online code runner to write, run, and test code`,
    `- Burrow: https://burrow.ajaydandge.dev/ — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- Password: https://password.ajaydandge.dev/ — Local-first password manager`,
    `- Claude Usage Plugin: https://github.com/iajaydandge/claude-usage-plugin — Per-user token, cost, and session tracking in Claude Code`,
    `- Slate: https://slate.ajaydandge.dev/ — Minimalist canvas tool`,
    `- CLI Wordle: https://pypi.org/project/cli-wordle/ — Wordle clone in the terminal on PyPI`,
    ``,
    `### Experiments`,
    `- Mazes: https://mazes.ajaydandge.dev/ — Maze generation and pathfinding algorithms`,
    `- Photo Magic: https://github.com/iajaydandge/photo-magic — Encrypt and decrypt images using LFSR pseudo-random generation`,
    `- Guess the Number: https://github.com/iajaydandge/guess-the-number — Number guessing game written in different programming languages`,
    `- Slots: https://slots.ajaydandge.dev/ — Checks available court slots where we go to play badminton`,
    `- Gravity Falls: https://pypi.org/project/gravity-falls/ — First published Python package with classic ciphers (Caesar, etc.)`,
    ``,
    `### CLI tools`,
    `- Burrow CLI: https://burrow.ajaydandge.dev/ — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `  - Repository: https://github.com/iajaydandge/burrow`,
    `  - Install: \`uv tool install git+https://github.com/iajaydandge/burrow.git\` or \`pip install git+https://github.com/iajaydandge/burrow.git\``,
    `  - Agent skills: \`burrow skill install\` (Claude Code, Cursor, Codex, OpenCode)`,
    `  - Query: \`burrow query "SELECT * FROM table" --output json\``,
    `- CLI Wordle: https://pypi.org/project/cli-wordle/ — Terminal-based Wordle game published on PyPI`,
    `  - Package: https://pypi.org/project/cli-wordle/`,
    `  - Install: \`pip install cli-wordle\``,
    `  - Run: \`cli-wordle\``,
    ``,
    `### Connect`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
    `- Email: contact@ajaydandge.dev`,
    ``,
    `---`,
    ``,
    `## Library`,
    ``,
    `Things I watch, read, and listen to — anime, books, music, and bookmarks.`,
    ``,
    `### Anime`,
    ...anime.map((item, index) => `${index + 1}. ${item.title} (${item.url})`),
    ``,
    `### Books`,
    ...books.map(
      (item, index) =>
        `${index + 1}. ${item.title} by ${item.author} (${item.url})`
    ),
    ``,
    `### Music`,
    ...songs.map(
      (song, index) =>
        `${index + 1}. ${song.title} by ${song.artist} (${song.url})`
    ),
    ``,
    `### Bookmarks`,
    ...bookmarks.map(
      (item, index) => `${index + 1}. ${item.title} (${item.url})`
    ),
    ``,
    `---`,
    ``,
    `## Contact`,
    ``,
    `The best way to reach me is by email. Feel free to reach out about software engineering, AI, projects, or feedback on anything I've written.`,
    ``,
    `- Email: contact@ajaydandge.dev`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
    ``,
    `### Time Zone & Availability`,
    ``,
    `I am based in India (India Standard Time, UTC+05:30). I generally work and respond asynchronously across time zones.`,
    ``,
    `### Security & Responsible Disclosure`,
    ``,
    `If you discover a security vulnerability or bug in any of my open-source projects or services, please report it privately by emailing contact@ajaydandge.dev with reproduction steps.`,
    ``,
    `---`,
    ``,
    `## Privacy Policy`,
    ``,
    `Nov 16, 2026`,
    ``,
    `This is the website and engineering blog of Ajay Dandge (ajaydandge.dev). I believe in a quiet, respectful web. This site does not harvest personal data, monetize user behavior, or deploy invasive third-party advertising trackers.`,
    ``,
    `This privacy policy describes what minimal information is collected when you visit this site, how it is used, and how your privacy is safeguarded.`,
    ``,
    `### 1. Analytics & Metrics`,
    `This site uses Google Analytics (via Google Tag Manager script) to understand aggregated, high-level traffic patterns, such as overall pageviews, popular articles, and general referral sources.`,
    `The analytics configuration does not collect personally identifiable information (PII), form submissions, financial records, or exact geolocation data. IP addresses are anonymized according to standard industry practices. This aggregated information is used solely to understand which articles resonate with readers and to guide future writing.`,
    ``,
    `### 2. Cookies & Local Storage`,
    `This site does not use cookies for cross-site profiling, retargeting, or advertising networks.`,
    `Client-side browser storage (localStorage) is strictly utilized for functional, client-side preferences:`,
    `- Remembering your chosen appearance theme (light mode, dark mode, or system default).`,
    `- Remembering client-side preferences for the interactive retro cursor pet.`,
    ``,
    `### 3. Direct Communications`,
    `If you send an email to contact@ajaydandge.dev, your email address and any messages you include will be used exclusively to converse with you. Your correspondence is never sold, rented, or added to marketing lists.`,
    ``,
    `### 4. Machine & AI Agent Access`,
    `This site explicitly facilitates automated research and AI agent traversal by exposing machine-readable routes (including llms.txt and paired .md endpoints). Automated crawlers and agents are requested to respect standard robots.txt directives and avoid aggressive scraping rates.`,
    ``,
    `### 5. Contact Regarding Privacy`,
    `If you have questions about this privacy statement or wish to request the deletion of any direct correspondence, please email contact@ajaydandge.dev.`,
    ``,
    `---`,
    ``,
    `## Writing`,
    ``,
    ...posts.flatMap((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      const postType = post.data.type || "article";
      const capitalizedType =
        postType.charAt(0).toUpperCase() + postType.slice(1);
      return [
        `### ${post.data.title}`,
        ``,
        `${formatDate(post.data.publishedAt, false)} · ${capitalizedType}`,
        `Path: /blog/${slug}`,
        `Markdown: /blog/${slug}.md`,
        `Summary: ${post.data.summary}`,
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
