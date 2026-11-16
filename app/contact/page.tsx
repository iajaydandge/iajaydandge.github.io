import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "How to get in touch with Ajay Dandge — email, links, and communication preferences.",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Contact</h1>

      <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
        The best way to reach me is by email. Feel free to reach out about
        software engineering, AI, projects, or feedback on anything I&apos;ve
        written.
      </p>

      <ul className="space-y-2 text-sm mb-8">
        <li className="flex items-center gap-2">
          <span className="text-neutral-500 dark:text-neutral-400 w-20">Email</span>
          <a
            href="mailto:contact@ajaydandge.dev"
            className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            contact@ajaydandge.dev
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-neutral-500 dark:text-neutral-400 w-20">GitHub</span>
          <a
            href="https://github.com/iajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            <span>github.com/iajaydandge</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-neutral-500 dark:text-neutral-400 w-20">X</span>
          <a
            href="https://x.com/iajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            <span>x.com/iajaydandge</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-neutral-500 dark:text-neutral-400 w-20">LinkedIn</span>
          <a
            href="https://linkedin.com/in/ajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            <span>linkedin.com/in/ajaydandge</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
        </li>
      </ul>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      <div className="space-y-6 text-sm text-neutral-800 dark:text-neutral-200">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Time Zone
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            India Standard Time (IST, UTC+05:30). I generally work and respond
            asynchronously across global time zones.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Security & Responsible Disclosure
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            If you notice a security issue or bug in any of my projects, please
            email{" "}
            <a
              href="mailto:contact@ajaydandge.dev"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
            >
              contact@ajaydandge.dev
            </a>{" "}
            with reproduction details.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Machine Access
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            AI agents can consume the plain-text index at{" "}
            <Link
              href="/llms.txt"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 font-mono text-xs"
            >
              /llms.txt
            </Link>{" "}
            or the markdown version of this page at{" "}
            <Link
              href="/contact.md"
              className="text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 font-mono text-xs"
            >
              /contact.md
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
