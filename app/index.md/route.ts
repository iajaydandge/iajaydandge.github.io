import { getBlogPosts, formatDate } from "@/blog/utils";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const recentPosts = getBlogPosts()
    .filter((post) => (post.metadata.type || "article") === "article")
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 4);

  const content = [
    `# Ajay Dandge`,
    ``,
    `Developer, occasional writer, curious human.`,
    ``,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated.`,
    ``,
    `This is my personal space on the web for things I'm building, exploring, and learning.`,
    ``,
    `## Recently Written`,
    ``,
    ...recentPosts.map((post) => {
      const postType = post.metadata.type || "article";
      const capitalizedType =
        postType.charAt(0).toUpperCase() + postType.slice(1);
      const reading = post.metadata.readingTime
        ? ` · ${post.metadata.readingTime}`
        : "";
      return `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md) (${formatDate(post.metadata.publishedAt, false)} · ${capitalizedType}${reading}): ${post.metadata.summary}`;
    }),
    ``,
    `[All writing →](${baseUrl}/writing.md)`,
    ``,
    `## A Few Things I've Made`,
    ``,
    `- [Contests](https://contests.ajaydandge.dev/) — Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/) — Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/) — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin) — Per-user token, cost, and session tracking in Claude Code`,
    `- [Mazes](https://mazes.ajaydandge.dev/) — Maze generation and pathfinding algorithms`,
    `- [Password](https://password.ajaydandge.dev/) — Local-first password manager`,
    ``,
    `[More on /about →](${baseUrl}/about.md)`,
    ``,
    `## Library`,
    ``,
    `Things I watch, read, and listen to — a curated collection of anime, books, music, and bookmarks I return to.`,
    ``,
    `[Explore library →](${baseUrl}/library.md)`,
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
    `- [Contact](${baseUrl}/contact.md)`,
    `- [Privacy](${baseUrl}/privacy.md)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
