import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const lines = [
    `# About — Ajay Dandge`,
    ``,
    `> Software engineer and AI engineer building developer tools and exploring ideas.`,
    ``,
    `## Projects & Tools`,
    `- [Contests](https://contests.ajaydandge.dev/): Track upcoming competitive programming contests`,
    `- [CodeRun](https://coderun.ajaydandge.dev/): Online code runner to write, run, and test code`,
    `- [Burrow](https://burrow.ajaydandge.dev/): CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel`,
    `- [Password](https://password.ajaydandge.dev/): Local-first password manager`,
    `- [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin): Token, cost, and session tracking in Claude Code`,
    `- [Slate](${baseUrl}/slate/): Minimalist canvas tool`,
    `- [CLI Wordle](https://pypi.org/project/cli-wordle/): Wordle clone in the terminal on PyPI`,
    ``,
    `## Direct Channels`,
    `- Email: contact@ajaydandge.dev`,
    `- GitHub: https://github.com/iajaydandge`,
    `- X: https://x.com/iajaydandge`,
    `- LinkedIn: https://linkedin.com/in/ajaydandge`,
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
