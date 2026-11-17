// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { getCollection, type CollectionEntry } from "astro:content";
import { formatDate } from "@/utils/date";

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id.replace(/\.mdx$/, "") },
    props: { post },
  }));
}

export async function GET({ props }: { props: { post: CollectionEntry<"blog"> } }) {
  const { post } = props;
  const slug = post.id.replace(/\.mdx$/, "");

  const content = [
    `# ${post.data.title}`,
    ``,
    `Published: ${formatDate(post.data.publishedAt)}`,
    `Type: ${post.data.type || "article"}`,
    `Summary: ${post.data.summary}`,
    `Path: /blog/${slug}`,
    ``,
    `---`,
    ``,
    post.body,
    ``,
    `---`,
    ``,
    `## Navigation`,
    `- [All Writing](/writing.md)`,
    `- [Home](/index.md)`,
    `- [Machine Index (llms.txt)](/llms.txt)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
