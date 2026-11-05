import { getBlogPosts, formatDate } from "@/blog/utils";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const articles = posts.filter(
    (p) => (p.metadata.type || "article") === "article"
  );
  const notes = posts.filter((p) => p.metadata.type === "note");
  const thoughts = posts.filter((p) => p.metadata.type === "thought");

  const lines = [
    `# Writing`,
    ``,
    `Things I've written, ideas I've explored, and thoughts I've put into words.`,
    ``,
    `## Articles`,
    ``,
    ...articles.map((post) => {
      const reading = post.metadata.readingTime
        ? ` · ${post.metadata.readingTime}`
        : "";
      return `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md) (${formatDate(post.metadata.publishedAt, false)}${reading}): ${post.metadata.summary}`;
    }),
    ``,
    `## Notes`,
    ``,
    ...(notes.length > 0
      ? notes.map(
          (post) =>
            `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md) (${formatDate(post.metadata.publishedAt, false)}): ${post.metadata.summary}`
        )
      : [`Nothing here right now — still brewing or in drafts.`]),
    ``,
    `## Thoughts`,
    ``,
    ...(thoughts.length > 0
      ? thoughts.map(
          (post) =>
            `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md) (${formatDate(post.metadata.publishedAt, false)}): ${post.metadata.summary}`
        )
      : [`Nothing here right now — still brewing or in drafts.`]),
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
