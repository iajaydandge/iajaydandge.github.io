import { anime, books, songs, bookmarks } from "@/library/data";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const lines = [
    `# Library`,
    ``,
    `Things I watch, read, and listen to — anime, books, music, and bookmarks.`,
    ``,
    `## Anime`,
    ``,
    ...anime.map((item, index) => `${index + 1}. [${item.title}](${item.url})`),
    ``,
    `## Books`,
    ``,
    ...books.map(
      (item, index) => `${index + 1}. [${item.title}](${item.url}) — ${item.author}`
    ),
    ``,
    `## Music`,
    ``,
    ...songs.map(
      (song, index) => `${index + 1}. [${song.title}](${song.url}) — ${song.artist}`
    ),
    ``,
    `## Bookmarks`,
    ``,
    ...bookmarks.map(
      (item, index) => `${index + 1}. [${item.title}](${item.url})`
    ),
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [About](${baseUrl}/about.md)`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
