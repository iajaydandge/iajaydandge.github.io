import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Ajay Dandge — developer, curious human, building software and exploring ideas.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">About</h1>

      <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
        <p>
          I&apos;m Ajay. I build software, explore ideas, and currently work as
          an AI Engineer at{" "}
          <a
            href="https://fractal.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
          >
            <span>Fractal</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
          .
        </p>
        <p>
          Outside of work, I spend my time playing badminton, watching anime,
          reading fiction (mostly), and sketching. I also enthusiastically follow
          cricket and love following sports in general.
        </p>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* Things I've Made */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
          Things I&apos;ve made
        </h2>

        {/* Projects & Tools */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
            Projects & tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://contests.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Contests</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Track upcoming competitive programming contests
              </span>
            </li>
            <li>
              <a
                href="https://coderun.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>CodeRun</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Online code runner to write, run, and test code
              </span>
            </li>
            <li>
              <a
                href="https://burrow.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Burrow</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel
              </span>
            </li>
            <li>
              <a
                href="https://password.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Password</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Local-first password manager
              </span>
            </li>
            <li>
              <a
                href="https://github.com/iajaydandge/claude-usage-plugin"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Claude Usage Plugin</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Per-user token, cost, and session tracking in Claude Code
              </span>
            </li>
            <li>
              <a
                href="https://ajaydandge.dev/slate/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Slate</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Minimalist canvas tool
              </span>
            </li>
            <li>
              <a
                href="https://pypi.org/project/cli-wordle/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>CLI Wordle</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Wordle clone in the terminal on PyPI
              </span>
            </li>
          </ul>
        </div>

        {/* Experiments */}
        <div>
          <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">
            Experiments
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://mazes.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Mazes</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Maze generation and pathfinding algorithms
              </span>
            </li>
            <li>
              <a
                href="https://github.com/iajaydandge/photo-magic"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Photo Magic</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Encrypt and decrypt images using LFSR pseudo-random generation
              </span>
            </li>
            <li>
              <a
                href="https://github.com/iajaydandge/guess-the-number"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Guess the Number</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Number guessing game written in different programming languages
              </span>
            </li>
            <li>
              <a
                href="https://slots.ajaydandge.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Slots</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — Checks available court slots where we go to play badminton
              </span>
            </li>
            <li>
              <a
                href="https://pypi.org/project/gravity-falls/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>Gravity Falls</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — First published Python package with classic ciphers (Caesar, etc.)
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* Online / Contact Links */}
      <div>
        <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
          Connect
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/iajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center hover:underline underline-offset-4"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
          <a
            href="https://x.com/iajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center hover:underline underline-offset-4"
          >
            <span>X</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/ajaydandge"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center hover:underline underline-offset-4"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
          <a
            href="mailto:contact@ajaydandge.dev"
            className="group inline-flex items-center hover:underline underline-offset-4"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
