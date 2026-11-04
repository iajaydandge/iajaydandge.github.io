import { anime, books, songs } from "@/library/data";

export const dynamic = "force-static";

export async function GET() {
  const lines = [
    `# Library`,
    ``,
    `Things I watch, read, and listen to.`,
    ``,
    `## Anime`,
    ``,
    ...anime.map(
      (item, index) =>
        `${index + 1}. [${item.title}](${item.url})${
          item.detail ? ` (${item.detail})` : ""
        }`
    ),
    ``,
    `## Books`,
    ``,
    ...books.map(
      (item, index) => `${index + 1}. [${item.title}](${item.url}) — ${item.detail}`
    ),
    ``,
    `## Music`,
    ``,
    ...songs.map(
      (song, index) => `${index + 1}. [${song.title}](${song.url}) — ${song.detail}`
    ),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
