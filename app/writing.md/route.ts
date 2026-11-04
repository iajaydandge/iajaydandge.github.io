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
    `# Writing`,
    ``,
    `Things I've written, ideas I've explored, and thoughts I've put into words.`,
    ``,
    ...posts.map(
      (post) =>
        `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md) (${post.metadata.publishedAt} · ${post.metadata.type || "article"}): ${post.metadata.summary}`
    ),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
