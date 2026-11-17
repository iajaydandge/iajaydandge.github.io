// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

export const prerender = true;

export async function GET() {
  const content = [
    `# 404 — Page not found`,
    ``,
    `Whatever was here isn't anymore — maybe it moved, was rewritten, or never existed in the first place.`,
    ``,
    `- [← Back to home](/index.md)`,
    `- [llms.txt](/llms.txt)`,
    `- [contact](/contact.md)`,
    `- [rss](/rss.xml)`,
  ].join("\n");

  return new Response(content, {
    status: 404,
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
