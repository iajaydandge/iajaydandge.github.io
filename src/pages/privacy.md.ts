// @see https://docs.astro.build/en/guides/endpoints/#static-file-endpoints
// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md

export const prerender = true;

export async function GET() {
  const content = [
    `# Privacy Policy`,
    ``,
    `Nov 16, 2026`,
    ``,
    `This is the website and engineering blog of Ajay Dandge (ajaydandge.dev). I believe in a quiet, respectful web. This site does not harvest personal data, monetize user behavior, or deploy invasive third-party advertising trackers.`,
    ``,
    `This privacy policy describes what minimal information is collected when you visit this site, how it is used, and how your privacy is safeguarded.`,
    ``,
    `## 1. Analytics & Metrics`,
    ``,
    `This site uses Google Analytics (via Google Tag Manager script) to understand aggregated, high-level traffic patterns, such as overall pageviews, popular articles, and general referral sources.`,
    ``,
    `The analytics configuration does not collect personally identifiable information (PII), form submissions, financial records, or exact geolocation data. IP addresses are anonymized according to standard industry practices. This aggregated information is used solely to understand which articles resonate with readers and to guide future writing.`,
    ``,
    `## 2. Cookies & Local Storage`,
    ``,
    `This site does not use cookies for cross-site profiling, retargeting, or advertising networks.`,
    ``,
    `Client-side browser storage (localStorage) is strictly utilized for functional, client-side preferences:`,
    `- Remembering your chosen appearance theme (light mode, dark mode, or system default).`,
    `- Remembering client-side preferences for the interactive retro cursor pet.`,
    ``,
    `## 3. Direct Communications`,
    ``,
    `If you send an email to [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev), your email address and any messages you include will be used exclusively to converse with you. Your correspondence is never sold, rented, or added to marketing lists.`,
    ``,
    `## 4. Machine & AI Agent Access`,
    ``,
    `This site explicitly facilitates automated research and AI agent traversal by exposing machine-readable routes (including [llms.txt](/llms.txt) and paired \`.md\` endpoints). Automated crawlers and agents are requested to respect standard robots.txt directives and avoid aggressive scraping rates.`,
    ``,
    `## 5. Contact Regarding Privacy`,
    ``,
    `If you have questions about this privacy statement or wish to request the deletion of any direct correspondence, please email [contact@ajaydandge.dev](mailto:contact@ajaydandge.dev).`,
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
