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
  const postType = post.data.type || "article";
  const capitalizedType = postType.charAt(0).toUpperCase() + postType.slice(1);

  const content = [
    `# ${post.data.title}`,
    ``,
    `${formatDate(post.data.publishedAt, false)} · ${capitalizedType}`,
    ``,
    post.body,
    ``,
    `---`,
    ``,
    `## Navigation`,
    `- [All writing](/writing.md)`,
    `- [Home](/index.md)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
