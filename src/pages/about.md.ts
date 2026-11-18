// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

export const prerender = true;

export async function GET() {
  const content = [
    `# About`,
    ``,
    `I'm Ajay. I build software, explore ideas, and currently work as an AI Engineer.`,
    ``,
    `Outside of work, I spend my time playing badminton, watching anime, reading fiction (mostly), and sketching. I also enthusiastically follow cricket and love following sports in general.`,
    ``,
    `## Things I've made`,
    ``,
    `### Projects & tools`,
    `- [Contests](https://contests.ajaydandge.dev/) — Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/) — Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/) — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Password](https://password.ajaydandge.dev/) — Local-first password manager`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin) — Per-user token, cost, and session tracking in Claude Code`,
    `- [Slate](https://slate.ajaydandge.dev/) — Minimalist canvas tool`,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/) — Wordle clone in the terminal on PyPI`,
    ``,
    `### Experiments`,
    `- [Mazes](https://mazes.ajaydandge.dev/) — Maze generation and pathfinding algorithms`,
    `- [Photo Magic](https://github.com/iajaydandge/photo-magic) — Encrypt and decrypt images using LFSR pseudo-random generation`,
    `- [Guess the Number](https://github.com/iajaydandge/guess-the-number) — Number guessing game written in different programming languages`,
    `- [Slots](https://slots.ajaydandge.dev/) — Checks available court slots where we go to play badminton`,
    `- [Gravity Falls](https://pypi.org/project/gravity-falls/) — First published Python package with classic ciphers (Caesar, etc.)`,
    ``,
    `## Connect`,
    `- [GitHub](https://github.com/iajaydandge)`,
    `- [X](https://x.com/iajaydandge)`,
    `- [LinkedIn](https://linkedin.com/in/ajaydandge)`,
    `- [Email](mailto:contact@ajaydandge.dev)`,
    ``,
    `## Navigation`,
    `- [Home](/index.md)`,
    `- [Writing](/writing.md)`,
    `- [Library](/library.md)`,
    `- [About](/about.md)`,
    `- [Contact](/contact.md)`,
    `- [Privacy](/privacy.md)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
