// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

export const prerender = true;

export async function GET() {
  const content = [
    `# Contact`,
    ``,
    `The best way to reach me is by email. Feel free to reach out about software engineering, AI, projects, or feedback on anything I've written.`,
    ``,
    `- Email: [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev)`,
    `- GitHub: [github.com/iajaydandge](https://github.com/iajaydandge)`,
    `- X: [x.com/iajaydandge](https://x.com/iajaydandge)`,
    `- LinkedIn: [linkedin.com/in/ajaydandge](https://linkedin.com/in/ajaydandge)`,
    ``,
    `## Time Zone & Availability`,
    ``,
    `I am based in India (India Standard Time, UTC+05:30). I generally work and respond asynchronously across time zones.`,
    ``,
    `## Security & Responsible Disclosure`,
    ``,
    `If you discover a security vulnerability or bug in any of my open-source projects or services, please report it privately by emailing [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev) with reproduction steps.`,
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
