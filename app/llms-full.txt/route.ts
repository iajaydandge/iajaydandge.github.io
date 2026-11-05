import { getBlogPosts } from "@/blog/utils";
import { anime, books, songs, bookmarks } from "@/library/data";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const lines = [
    `# Ajay Dandge — Full Site Overview`,
    ``,
    `Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.`,
    ``,
    `Website: ${baseUrl}`,
    ``,
    `---`,
    ``,
    `## Writing`,
    ``,
    `Things I've written, ideas I've explored, and thoughts I've put into words.`,
    ``,
    ...posts.map((post) =>
      [
        `### ${post.metadata.title}`,
        `- URL: ${baseUrl}/blog/${post.slug}`,
        `- Markdown: ${baseUrl}/blog/${post.slug}.md`,
        `- Published: ${post.metadata.publishedAt}`,
        `- Type: ${post.metadata.type || "article"}`,
        `- Summary: ${post.metadata.summary}`,
      ].join("\n")
    ),
    ``,
    `---`,
    ``,
    `## Library`,
    ``,
    `Things I watch, read, and listen to.`,
    ``,
    `### Anime`,
    ...anime.map(
      (item, index) =>
        `${index + 1}. [${item.title}](${item.url})${
          item.detail ? ` (${item.detail})` : ""
        }`
    ),
    ``,
    `### Books`,
    ...books.map(
      (item, index) =>
        `${index + 1}. [${item.title}](${item.url}) — ${item.detail}`
    ),
    ``,
    `### Music`,
    ...songs.map(
      (song, index) =>
        `${index + 1}. [${song.title}](${song.url}) — ${song.detail}`
    ),
    ``,
    `### Bookmarks`,
    ...bookmarks.map(
      (item, index) => `${index + 1}. [${item.title}](${item.url})`
    ),
    ``,
    `---`,
    ``,
    `## About`,
    ``,
    `I'm Ajay. I build software, explore ideas, and currently work as an AI Engineer at [Fractal](https://fractal.ai/).`,
    ``,
    `Outside of coding, I spend my time playing badminton, watching anime, reading fiction (mostly), and sketching. I also enthusiastically follow cricket and love following sports in general.`,
    ``,
    `### Things I've Made`,
    ``,
    `#### Projects & Tools`,
    `- [Contests](https://contests.ajaydandge.dev/): Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/): CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Password](https://password.ajaydandge.dev/): Local-first password manager`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): Token, cost, and session tracking in Claude Code`,
    `- [Slate](${baseUrl}/slate/): Minimalist canvas tool`,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/): Wordle clone in the terminal on PyPI`,
    ``,
    `#### Experiments`,
    `- [Slots](https://slots.ajaydandge.dev/): Checks available court slots where we go to play badminton`,
    `- [Mazes](https://mazes.ajaydandge.dev/): Maze generation and pathfinding algorithms`,
    `- [Photo Magic](https://github.com/iajaydandge/photo-magic): Encrypt and decrypt images using LFSR pseudo-random generation`,
    `- [Guess the Number](https://github.com/iajaydandge/guess-the-number): Number guessing game written in different programming languages`,
    `- [Gravity Falls](https://pypi.org/project/gravity-falls/): First published Python package with classic ciphers (Caesar, etc.)`,
    ``,
    `### Connect`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
    `- Email: contact@ajaydandge.dev`,
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
