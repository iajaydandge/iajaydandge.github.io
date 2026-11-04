import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# Ajay Dandge`,
    ``,
    `Developer, occasional writer, curious human.`,
    ``,
    `I build software, explore ideas, write things down, and occasionally get distracted by something completely unrelated.`,
    ``,
    `This is my little corner of the internet. A place for things I'm working on, things I'm thinking about, and things I find interesting.`,
    ``,
    `## Core Sections`,
    `- [Writing](${baseUrl}/writing.md): Articles, notes, and technical writeups`,
    `- [Library](${baseUrl}/library.md): Anime, books, music, and web bookmarks`,
    `- [About](${baseUrl}/about.md): Background and complete directory of projects`,
    ``,
    `Website: ${baseUrl}`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
