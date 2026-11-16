import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# 404 — Page Not Found`,
    ``,
    `The requested path does not exist on ajaydandge.dev. Whatever was here isn't anymore — maybe it moved, was rewritten, or never existed in the first place.`,
    ``,
    `## Helpful Links for Agents & Readers`,
    ``,
    `- [Home](${baseUrl}/index.md): Introduction and recent writing`,
    `- [Writing](${baseUrl}/writing.md): Articles, notes, and technical deep dives`,
    `- [Library](${baseUrl}/library.md): Media, reading list, and bookmarks`,
    `- [About](${baseUrl}/about.md): Bio, projects, and experiments`,
    `- [Contact](${baseUrl}/contact.md): Direct email and contact channels`,
    `- [Privacy](${baseUrl}/privacy.md): Privacy and data handling statement`,
    `- [llms.txt](${baseUrl}/llms.txt): Machine-readable site index and agent instructions`,
    `- [llms-full.txt](${baseUrl}/llms-full.txt): Complete site text overview`,
    `- [Sitemap](${baseUrl}/sitemap.xml): Full XML sitemap`,
  ].join("\n");

  return new Response(content, {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}
