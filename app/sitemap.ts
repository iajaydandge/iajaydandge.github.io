import { getBlogPosts } from "@/blog/utils";

export const baseUrl = "https://ajaydandge.dev";

export const dynamic = "force-static";

export default async function sitemap() {
  const posts = getBlogPosts();

  const blogs = posts.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    },
    {
      url: `${baseUrl}/blog/${post.slug}.md`,
      lastModified: post.metadata.publishedAt,
    },
  ]);

  const today = new Date().toISOString().split("T")[0];

  const routes = [
    "",
    "/index.md",
    "/writing",
    "/writing.md",
    "/library",
    "/library.md",
    "/about",
    "/about.md",
    "/contact",
    "/contact.md",
    "/privacy",
    "/privacy.md",
    "/llms.txt",
    "/llms-full.txt",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }));

  return [...routes, ...blogs];
}
