// @see https://docs.astro.build/en/reference/configuration-reference/
// @see https://docs.astro.build/en/guides/deploy/cloudflare/
// @see https://docs.astro.build/en/guides/integrations-guide/mdx/
// @see https://docs.astro.build/en/guides/styling/#tailwind-css
// @see https://docs.astro.build/en/guides/markdown-content/#shiki-configuration

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.CF_PAGES_URL || process.env.SITE_URL || "https://ajaydandge.dev";

export default defineConfig({
  site,
  output: "static",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
