// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { getCollection } from "astro:content";
import { formatDate } from "@/utils/date";

export const prerender = true;

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
  );

  const articles = posts.filter(
    (p) => (p.data.type || "article") === "article"
  );
  const notes = posts.filter((p) => p.data.type === "note");
  const thoughts = posts.filter((p) => p.data.type === "thought");

  const lines = [
    `# Writing`,
    ``,
    `Things I've written, ideas I've explored, and thoughts I've put into words.`,
    ``,
    `## Articles`,
    ``,
    ...articles.map((post) => {
      const slug = post.id.replace(/\.mdx$/, "");
      return `- [${post.data.title}](/blog/${slug}.md) (${formatDate(post.data.publishedAt)}): ${post.data.summary}`;
    }),
    ``,
    `## Notes`,
    ``,
    ...(notes.length > 0
      ? notes.map((post) => {
          const slug = post.id.replace(/\.mdx$/, "");
          return `- [${post.data.title}](/blog/${slug}.md) (${formatDate(post.data.publishedAt)}): ${post.data.summary}`;
        })
      : [`Nothing here right now — still brewing or in drafts.`]),
    ``,
    `## Thoughts`,
    ``,
    ...(thoughts.length > 0
      ? thoughts.map((post) => {
          const slug = post.id.replace(/\.mdx$/, "");
          return `- [${post.data.title}](/blog/${slug}.md) (${formatDate(post.data.publishedAt)}): ${post.data.summary}`;
        })
      : [`Nothing here right now — still brewing or in drafts.`]),
    ``,
    `## Navigation`,
    `- [Home](/index.md)`,
    `- [Writing](/writing.md)`,
    `- [Library](/library.md)`,
    `- [About](/about.md)`,
    `- [Contact](/contact.md)`,
    `- [Privacy](/privacy.md)`,
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
