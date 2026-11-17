// @see https://docs.astro.build/en/guides/rss/
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const articles = posts
    .filter((post) => (post.data.type || "article") === "article")
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    );

  return rss({
    title: "Ajay Dandge",
    description: "Ajay Dandge's engineering blog and writing.",
    site: context.site || "https://ajaydandge.dev",
    items: articles.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.summary,
      link: `/blog/${post.id.replace(/\.mdx$/, "")}/`,
    })),
  });
}
