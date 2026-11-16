import { baseUrl } from "@/sitemap";

export const dynamic = "force-static";

export async function GET() {
  const content = [
    `# Privacy Policy — Ajay Dandge`,
    ``,
    `Nov 16, 2026`,
    ``,
    `This is the personal website and engineering blog of Ajay Dandge (ajaydandge.dev). I believe in a quiet, respectful web. This site does not harvest personal data, monetize user behavior, or deploy invasive third-party advertising trackers.`,
    ``,
    `This privacy policy describes what minimal information is collected when you visit this site, how it is used, and how your privacy is safeguarded.`,
    ``,
    `## 1. Analytics & Metrics`,
    ``,
    `This site uses Google Analytics (via Google Tag Manager script) to understand aggregated, high-level traffic patterns, such as overall pageviews, popular articles, and general referral sources.`,
    ``,
    `The analytics configuration does not collect personally identifiable information (PII), form submissions, financial records, or exact geolocation data. IP addresses are anonymized according to standard industry practices. This aggregated information is used solely to understand which articles resonate with readers and to guide future writing.`,
    ``,
    `## 2. Cookies and Local Storage`,
    ``,
    `This site does not use cookies for cross-site profiling, retargeting, or third-party advertisement networks.`,
    ``,
    `Client-side browser storage (localStorage) is strictly utilized for functional, client-side preferences:`,
    `- Remembering your chosen appearance theme (light mode, dark mode, or system default).`,
    `- Remembering the state and sleep cycle of the interactive retro cursor companion widget.`,
    ``,
    `## 3. Direct Communications`,
    ``,
    `If you send an email to [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev), your email address and any messages you include will be used exclusively to converse with you. Your correspondence is never sold, rented, or added to automated marketing lists.`,
    ``,
    `## 4. External Links & Subdomains`,
    ``,
    `Articles and project showcases on this site may link to external services (such as GitHub, X, LinkedIn, PyPI) or subdomains hosting specific utilities (like Contests, CodeRun, Burrow). Those external destinations maintain their own privacy practices and terms. You are encouraged to review their policies when visiting them.`,
    ``,
    `## 5. Machine & AI Agent Access`,
    ``,
    `This site explicitly facilitates automated research and AI agent traversal by exposing machine-readable routes (including [llms.txt](${baseUrl}/llms.txt) and paired .md endpoints). Automated crawlers and agents are requested to respect standard robots.txt directives and avoid aggressive scraping rates.`,
    ``,
    `## 6. Contact Regarding Privacy`,
    ``,
    `If you have questions about this privacy statement or wish to request the deletion of any direct correspondence, please email [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev).`,
    ``,
    `## Navigation`,
    `- [Home](${baseUrl}/index.md)`,
    `- [Writing](${baseUrl}/writing.md)`,
    `- [Library](${baseUrl}/library.md)`,
    `- [About](${baseUrl}/about.md)`,
    `- [Contact](${baseUrl}/contact.md)`,
    `- [Machine Index (llms.txt)](${baseUrl}/llms.txt)`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
