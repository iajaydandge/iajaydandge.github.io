// @see https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    type: z.enum(["article", "note", "thought", "draft"]).default("article"),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
