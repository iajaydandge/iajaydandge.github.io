import type { MetadataRoute } from "next";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
