import { getBlogPosts } from "@/blog/utils";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const lines = [
    `# Writing — Ajay Dandge`,
    ``,
    `> Articles, engineering deep dives, notes, and technical write-ups.`,
    ``,
    `## Articles & Notes`,
    ``,
    ...posts.map(
      (post) =>
        `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md): ${post.metadata.summary}`
    ),
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
    `- [Contact](${baseUrl}/contact.md)`,
    `- [Privacy](${baseUrl}/privacy.md)`,
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
