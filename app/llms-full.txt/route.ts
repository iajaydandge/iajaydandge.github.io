import { getBlogPosts } from "@/blog/utils";
import { bookmarks } from "@/bookmarks/data";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const lines = [
    `# Ajay Dandge — Full Site Overview`,
    ``,
    `I'm a developer who loves to write code, build software, and solve problems. Though, sometimes those problems are tougher than they seem!.`,
    ``,
    `By the way, nice to see you here! Hope you're having a great day!`,
    ``,
    `## Featured Projects`,
    `- [Contests](https://contests.ajaydandge.dev/): A simple platform to track upcoming programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): An online code runner to quickly write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/): A CLI to query PostgreSQL and MySQL databases directly or through an SSH tunnel`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): A tool for per-user token, cost, and session tracking in Claude Code`,
    ``,
    `## Bookmarks`,
    ...bookmarks.map(
      (bookmark, index) => `${index + 1}. [${bookmark.title}](${bookmark.url})`
    ),
    ``,
    `## Articles & Engineering Guides`,
    ``,
    ...posts.map((post) =>
      [
        `### ${post.metadata.title}`,
        `- URL: ${baseUrl}/blog/${post.slug}`,
        `- Markdown: ${baseUrl}/blog/${post.slug}.md`,
        `- Published: ${post.metadata.publishedAt}`,
        `- Summary: ${post.metadata.summary}`,
      ].join("\n")
    ),
  ].join("\n\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
