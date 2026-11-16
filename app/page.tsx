import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { generateOgImage } from "@/blog/og-image";
import { getBlogPosts, formatDate } from "@/blog/utils";
import { baseUrl } from "@/sitemap";
import { Greeting } from "@/components/greeting";

export async function generateMetadata() {
  await generateOgImage("Ajay Dandge", "home");
  return {
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Ajay Dandge",
      description:
        "Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.",
      url: baseUrl,
      siteName: "Ajay Dandge",
      locale: "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/og/home.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ajay Dandge",
      description:
        "Personal corner of the internet. Building software, exploring ideas, writing, and keeping what's interesting.",
      images: [`${baseUrl}/og/home.png`],
    },
  };
}

const featuredProjects = [
  {
    name: "Contests",
    href: "https://contests.ajaydandge.dev/",
    description: "Track upcoming competitive programming contests",
  },
  {
    name: "CodeRun",
    href: "https://coderun.ajaydandge.dev/",
    description: "Online code runner to write, run, and test code",
  },
  {
    name: "Burrow",
    href: "https://burrow.ajaydandge.dev/",
    description:
      "CLI to query PostgreSQL and MySQL databases directly or via SSH tunnel",
  },
  {
    name: "Claude Usage Plugin",
    href: "https://github.com/iajaydandge/claude-usage-plugin",
    description: "Per-user token, cost, and session tracking in Claude Code",
  },
  {
    name: "Password",
    href: "https://password.ajaydandge.dev/",
    description: "Local-first password manager",
  },
  {
    name: "Mazes",
    href: "https://mazes.ajaydandge.dev/",
    description: "Maze generation and pathfinding algorithms",
  },
];

export default function Page() {
  const recentPosts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 4);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ajay Dandge",
            url: baseUrl,
            jobTitle: "Software Engineer",
            description:
              "Personal corner of Ajay Dandge. Software engineer building web apps, CLI tools, and exploring ideas.",
            sameAs: [
              "https://github.com/iajaydandge",
              "https://x.com/iajaydandge",
              "https://linkedin.com/in/ajaydandge",
            ],
          }),
        }}
      />

      {/* Intro */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          <Greeting />.
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          I&apos;m Ajay — developer, occasional writer, curious human.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200">
          I build software, explore ideas, write things down, and occasionally
          get distracted by something completely unrelated.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200">
          This is my personal space on the web for things I&apos;m building,
          exploring, and learning.
        </p>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* Recently Written */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Recently written
          </h2>
          <Link
            href="/writing"
            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4"
          >
            All writing →
          </Link>
        </div>

        <ul className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {recentPosts.map((post) => {
            const postType = post.metadata.type || "article";
            const capitalizedType =
              postType.charAt(0).toUpperCase() + postType.slice(1);

            return (
              <li key={post.slug} className="py-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4">
                      {post.metadata.title}
                    </h3>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 tabular-nums shrink-0">
                      {formatDate(post.metadata.publishedAt, false)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{capitalizedType}</span>
                    {post.metadata.readingTime && (
                      <>
                        <span>·</span>
                        <span>{post.metadata.readingTime}</span>
                      </>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* A Few Things I've Made */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            A few things I&apos;ve made
          </h2>
          <Link
            href="/about"
            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4"
          >
            More on /about →
          </Link>
        </div>

        <ul className="space-y-2 text-sm">
          {featuredProjects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
              >
                <span>{project.name}</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </a>
              <span className="text-neutral-500 dark:text-neutral-400">
                {" "}
                — {project.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

      {/* Library */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Library
          </h2>
          <Link
            href="/library"
            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4"
          >
            Explore library →
          </Link>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Things I watch, read, and listen to — a curated collection of anime,
          books, music, and bookmarks I return to.
        </p>
      </div>
    </section>
  );
}
