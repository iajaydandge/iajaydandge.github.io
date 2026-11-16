import { anime, books, songs, bookmarks } from "@/library/data";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const lines = [
    `# Library — Ajay Dandge`,
    ``,
    `> Things I watch, read, and listen to — anime, books, music, and bookmarks.`,
    ``,
    `## Anime`,
    ...anime.map((item, i) => `${i + 1}. [${item.title}](${item.url})`),
    ``,
    `## Books`,
    ...books.map((b, i) => `${i + 1}. [${b.title}](${b.url}) — ${b.author}`),
    ``,
    `## Music`,
    ...songs.map((s, i) => `${i + 1}. [${s.title}](${s.url}) — ${s.artist}`),
    ``,
    `## Bookmarks`,
    ...bookmarks.map((bm, i) => `${i + 1}. [${bm.title}](${bm.url})`),
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
    `- [Contact](${baseUrl}/contact.md)`,
    `- [Privacy](${baseUrl}/privacy.md)`,
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
