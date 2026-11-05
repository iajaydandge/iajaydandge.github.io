import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# About — Ajay Dandge`,
    ``,
    `I'm Ajay. I build software, explore ideas, and currently work as an AI Engineer at [Fractal](https://fractal.ai/).`,
    ``,
    `Outside of coding, I spend my time playing badminton, watching anime, reading fiction (mostly), and sketching. I also enthusiastically follow cricket and love following sports in general.`,
    ``,
    `## Things I've Made`,
    ``,
    `### Projects & Tools`,
    `- [Contests](https://contests.ajaydandge.dev/): Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/): CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Password](https://password.ajaydandge.dev/): Local-first password manager`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): Token, cost, and session tracking in Claude Code`,
    `- [Slate](${baseUrl}/slate/): Minimalist canvas tool`,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/): Wordle clone in the terminal on PyPI`,
    ``,
    `### Experiments`,
    `- [Slots](https://slots.ajaydandge.dev/): Checks available court slots where we go to play badminton`,
    `- [Mazes](https://mazes.ajaydandge.dev/): Maze generation and pathfinding algorithms`,
    `- [Photo Magic](https://github.com/iajaydandge/photo-magic): Encrypt and decrypt images using LFSR pseudo-random generation`,
    `- [Guess the Number](https://github.com/iajaydandge/guess-the-number): Number guessing game written in different programming languages`,
    `- [Gravity Falls](https://pypi.org/project/gravity-falls/): First published Python package with classic ciphers (Caesar, etc.)`,
    ``,
    `## Connect`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
    `- Email: contact@ajaydandge.dev`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
