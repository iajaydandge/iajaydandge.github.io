// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

export const prerender = true;

export async function GET() {
  const content = [
    `# 404 — Page Not Found`,
    ``,
    `The requested resource does not exist on this domain.`,
    ``,
    `Whatever was here isn't anymore — maybe it moved, was rewritten, or never existed in the first place.`,
    ``,
    `## Machine Recovery Guidance`,
    ``,
    `- Start at the machine index: [/llms.txt](/llms.txt)`,
    `- Full context archive: [/llms-full.txt](/llms-full.txt)`,
    `- Technical articles & notes: [/writing.md](/writing.md)`,
    `- Author profile & contact: [/about.md](/about.md)`,
    `- Contact channel: [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev)`,
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
    status: 404,
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
