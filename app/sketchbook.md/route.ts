export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# Sketchbook`,
    ``,
    `Random drawings, little experiments, and things I felt like making.`,
    ``,
    `Nothing as of now, still creating.`,
    ``,
    `> Not everything here needs to be finished. That's kind of the point.`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
