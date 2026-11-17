// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { getCollection } from "astro:content";
import { formatDate } from "@/utils/date";

export const prerender = true;

function getReadingTime(body: string = ""): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export async function GET() {
  const posts = await getCollection("blog");
  const recentPosts = posts
    .filter((post) => (post.data.type || "article") === "article")
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    )
    .slice(0, 4);

  const content = [
    `# Ajay Dandge`,
    ``,
    `I'm Ajay — developer, occasional writer, curious human.`,
    ``,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated.`,
    ``,
    `This is my personal space on the web for things I'm building, exploring, and learning.`,
    ``,
    `## Recently written`,
    ``,
    ...recentPosts.map((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      const postType = post.data.type || "article";
      const capitalizedType =
        postType.charAt(0).toUpperCase() + postType.slice(1);
      const readingTime = getReadingTime(post.body);
      return `- [${post.data.title}](/blog/${slug}.md) (${formatDate(post.data.publishedAt, false)} · ${capitalizedType} · ${readingTime})`;
    }),
    ``,
    `[All writing →](/writing.md)`,
    ``,
    `## A few things I've made`,
    ``,
    `- [Contests](https://contests.ajaydandge.dev/) — Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/) — Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/) — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin) — Per-user token, cost, and session tracking in Claude Code`,
    `- [Password](https://password.ajaydandge.dev/) — Local-first password manager`,
    `- [Mazes](https://mazes.ajaydandge.dev/) — Maze generation and pathfinding algorithms`,
    ``,
    `[More on /about →](/about.md)`,
    ``,
    `## Library`,
    ``,
    `Things I watch, read, and listen to — a curated collection of anime, books, music, and bookmarks I return to.`,
    ``,
    `[Explore library →](/library.md)`,
    ``,
    `## Navigation`,
    `- [Home](/index.md)`,
    `- [Writing](/writing.md)`,
    `- [Library](/library.md)`,
    `- [About](/about.md)`,
    `- [Contact](/contact.md)`,
    `- [Privacy](/privacy.md)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
