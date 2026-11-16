import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# Contact — Ajay Dandge`,
    ``,
    `The best way to reach me is by email. Feel free to reach out about software engineering, AI, projects, or feedback on anything I've written.`,
    ``,
    `## Direct Channels`,
    ``,
    `- **Email:** [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev)`,
    `- **GitHub:** [https://github.com/iajaydandge](https://github.com/iajaydandge)`,
    `- **X (Twitter):** [https://x.com/iajaydandge](https://x.com/iajaydandge)`,
    `- **LinkedIn:** [https://linkedin.com/in/ajaydandge](https://linkedin.com/in/ajaydandge)`,
    ``,
    `## Time Zone`,
    ``,
    `India Standard Time (IST, UTC+05:30). I generally work and respond asynchronously across global time zones.`,
    ``,
    `## Security & Responsible Disclosure`,
    ``,
    `If you notice a security issue or bug in any of my projects, please email [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev) directly with reproduction details.`,
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
    `- [Privacy](${baseUrl}/privacy.md)`,
    `- [Machine Index (llms.txt)](${baseUrl}/llms.txt)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
