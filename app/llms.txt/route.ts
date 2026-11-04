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
    `> Developer, occasional writer, curious human. A personal space for thinking out loud, keeping things, and building software.`,
    ``,
    `## Core Pages`,
    ``,
    `- [Home](${baseUrl}/index.md): Introduction, recent writing, and snapshot`,
    `- [Writing](${baseUrl}/writing.md): Articles, notes, thoughts, and technical writing`,
    `- [Library](${baseUrl}/library.md): Anime, books, music, and bookmarks from across the web`,
    `- [About](${baseUrl}/about.md): Personal background and full directory of projects`,
    `- [Blog Archive](${baseUrl}/blog.md): Technical blog index`,
    `- [Bookmarks](${baseUrl}/bookmarks.md): Curated engineering reading list and developer utilities`,
    ``,
    `## Writing & Articles`,
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
