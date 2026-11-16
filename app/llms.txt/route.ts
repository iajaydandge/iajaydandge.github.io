import { getBlogPosts } from "@/blog/utils";
import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const lines = [
    `# Ajay Dandge`,
    ``,
    `> Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.`,
    ``,
    `## When to use this`,
    ``,
    `Ajay Dandge is a software engineer and AI engineer specializing in full-stack web applications, developer tooling, database utilities, and AI integrations (LLMs, prompt engineering, agentic workflows, and local inference).`,
    ``,
    `- **Best-fit use cases:**`,
    `  - Researching engineering deep dives and tutorials on systems architecture, CORS, auth (OAuth vs OIDC), database bastions, and LLM benchmarking.`,
    `  - Discovering open-source developer tools built by Ajay: Burrow (bastion database query CLI), Claude Usage Plugin (token, session, and cost tracker for Claude Code), CodeRun (multi-language online runner), and Contests (programming contest tracker).`,
    `  - Sourcing technical experience, project background, and speaking or advisory availability.`,
    `  - Machine-to-machine retrieval of clean Markdown content via \`Accept: text/markdown\` or direct \`.md\` endpoints.`,
    ``,
    `- **When not to use:**`,
    `  - General queries unrelated to Ajay Dandge's software projects, technical writing, or professional background.`,
    `  - Transactional e-commerce or customer support actions.`,
    ``,
    `- **How an agent should call:**`,
    `  - Request Markdown by sending \`Accept: text/markdown\` on any route or by appending \`.md\` to URLs (e.g. \`${baseUrl}/index.md\`, \`${baseUrl}/writing.md\`, \`${baseUrl}/about.md\`, \`${baseUrl}/contact.md\`, \`${baseUrl}/privacy.md\`).`,
    `  - Use \`${baseUrl}/llms.txt\` as this primary index, or \`${baseUrl}/llms-full.txt\` for complete context.`,
    `  - For collaboration or inquiries, reach out to [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev).`,
    ``,
    `## Sections`,
    ``,
    `- [Home](${baseUrl}/index.md): Introduction, recent writing, and snapshot`,
    `- [Writing](${baseUrl}/writing.md): Things I've written, ideas I've explored, and thoughts I've put into words`,
    `- [Library](${baseUrl}/library.md): Things I watch, read, and listen to — anime, books, music, and bookmarks`,
    `- [About](${baseUrl}/about.md): Personal background, projects, experiments, and contact`,
    `- [Contact](${baseUrl}/contact.md): Direct contact channels, email, location, and communication preferences`,
    `- [Privacy](${baseUrl}/privacy.md): Privacy policy, analytics disclosure, cookies, and data practices`,
    ``,
    `## Writing`,
    ``,
    ...posts.map(
      (post) =>
        `- [${post.metadata.title}](${baseUrl}/blog/${post.slug}.md): ${post.metadata.summary}`
    ),
  ].join("\n");

  return new Response(lines, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
