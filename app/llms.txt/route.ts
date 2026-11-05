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
    `# Ajay Dandge`,
    ``,
    `> Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.`,
    ``,
    `## Sections`,
    ``,
    `- [Home](${baseUrl}/index.md): Introduction, recent writing, and snapshot`,
    `- [Writing](${baseUrl}/writing.md): Things I've written, ideas I've explored, and thoughts I've put into words`,
    `- [Library](${baseUrl}/library.md): Things I watch, read, and listen to — anime, books, music, and bookmarks`,
    `- [About](${baseUrl}/about.md): Personal background, projects, experiments, and contact`,
    ``,
    `## Writing`,
    ``,
    ...posts.map(
      (post) =>
        `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md): ${post.metadata.summary}`
    ),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
