import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# Ajay Dandge`,
    ``,
    `I'm a developer who loves to write code, build software, and solve problems. Though, sometimes those problems are tougher than they seem!.`,
    ``,
    `By the way, nice to see you here! Hope you're having a great day!`,
    ``,
    `You can also check out [Contests](https://contests.ajaydandge.dev/), a simple platform to track upcoming programming contests, [CodeRun](https://coderun.ajaydandge.dev/), an online code runner to quickly write, run, and test code, [Burrow](https://burrow.ajaydandge.dev/), a CLI to query PostgreSQL and MySQL databases directly or through an SSH tunnel, and [Claude Usage Plugin](https://github.com/iajaydandge/claude-usage-plugin), a tool for per-user token, cost, and session tracking in Claude Code.`,
    ``,
    `Website: ${baseUrl}`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
