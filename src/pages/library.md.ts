// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

import { anime, books, songs, bookmarks } from "@/data/library";

export const prerender = true;

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
    `- [Home](/index.md)`,
    `- [Writing](/writing.md)`,
    `- [Library](/library.md)`,
    `- [About](/about.md)`,
    `- [Contact](/contact.md)`,
    `- [Privacy](/privacy.md)`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
