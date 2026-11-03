import { bookmarks } from "@/bookmarks/data";

export const dynamic = "force-static";

export async function GET() {
  const lines = [
    `# Bookmarks`,
    ``,
    `Curated articles, engineering handbooks, and tools.`,
    ``,
    ...bookmarks.map(
      (bookmark, index) => `${index + 1}. [${bookmark.title}](${bookmark.url})`
    ),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
