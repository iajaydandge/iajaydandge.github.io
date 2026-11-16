import Link from "next/link";
import { formatDate } from "@/blog/format-date";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ajaydandge.dev — personal website, analytics disclosure, cookies, and data practices.",
};

export default function PrivacyPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">
        Privacy Policy
      </h1>

      <div className="flex items-center justify-between mt-2 mb-8 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span>{formatDate("2026-11-16")}</span>
        </div>
      </div>

      <div className="space-y-4 text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
        <p>
          This is the personal website and engineering blog of Ajay Dandge (
          <span className="font-mono text-xs">ajaydandge.dev</span>). I believe
          in a quiet, respectful web. This site does not harvest personal data,
          monetize user behavior, or deploy invasive third-party advertising
          trackers.
        </p>
        <p>
          This privacy policy describes what minimal information is collected
          when you visit this site, how it is used, and how your privacy is
          safeguarded.
        </p>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      <div className="space-y-8 text-sm text-neutral-800 dark:text-neutral-200">
        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            1. Analytics & Metrics
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
            This site uses Google Analytics (via Google Tag Manager script) to
            understand aggregated, high-level traffic patterns, such as overall
            pageviews, popular articles, and general referral sources.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The analytics configuration does not collect personally identifiable
            information (PII), form submissions, financial records, or exact
            geolocation data. IP addresses are anonymized according to standard
            industry practices. This aggregated information is used solely to
            understand which articles resonate with readers and to guide future
            writing.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            2. Cookies and Local Storage
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2">
            This site does not use cookies for cross-site profiling, retargeting,
            or third-party advertisement networks.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Client-side browser storage (<code className="text-xs font-mono">localStorage</code>)
            is strictly utilized for functional, client-side preferences:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600 dark:text-neutral-400">
            <li>
              Remembering your chosen appearance theme (light mode, dark mode, or
              system default).
            </li>
            <li>
              Remembering the state and sleep cycle of the interactive retro
              cursor companion widget.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            3. Direct Communications
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            If you send an email to{" "}
            <a
              href="mailto:contact@ajaydandge.dev"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
            >
              contact@ajaydandge.dev
            </a>
            , your email address and any messages you include will be used
            exclusively to converse with you. Your correspondence is never sold,
            rented, or added to automated marketing lists.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            4. External Links & Subdomains
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Articles and project showcases on this site may link to external
            services (such as GitHub, X, LinkedIn, PyPI) or subdomains hosting
            specific utilities (like Contests, CodeRun, Burrow). Those external
            destinations maintain their own privacy practices and terms. You are
            encouraged to review their policies when visiting them.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            5. Machine & AI Agent Access
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            This site explicitly facilitates automated research and AI agent
            traversal by exposing machine-readable routes (including{" "}
            <Link
              href="/llms.txt"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 font-mono text-xs"
            >
              /llms.txt
            </Link>{" "}
            and paired <code className="text-xs font-mono">.md</code> endpoints).
            Automated crawlers and agents are requested to respect standard{" "}
            <Link
              href="/robots.txt"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 font-mono text-xs"
            >
              /robots.txt
            </Link>{" "}
            directives and avoid aggressive scraping rates.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            6. Contact Regarding Privacy
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            If you have questions about this privacy statement or wish to request
            the deletion of any direct correspondence, please email{" "}
            <a
              href="mailto:contact@ajaydandge.dev"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
            >
              contact@ajaydandge.dev
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
