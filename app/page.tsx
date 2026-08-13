import { BlogPosts } from "@/components/posts";
import { generateOgImage } from "@/blog/og-image";
import { baseUrl } from "@/sitemap";

export async function generateMetadata() {
  await generateOgImage("Ajay Dandge", "home");
  return {
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Ajay Dandge — Software Developer",
      description:
        "Developer blog covering software engineering, CLI tools, databases, authentication, and LLMs. Written by Ajay Dandge.",
      url: baseUrl,
      siteName: "Ajay Dandge",
      locale: "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/og/home.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ajay Dandge — Software Developer",
      description:
        "Developer blog covering software engineering, CLI tools, databases, authentication, and LLMs. Written by Ajay Dandge.",
      images: [`${baseUrl}/og/home.png`],
    },
  };
}

export default function Page() {
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
            jobTitle: "Software Developer",
            description:
              "Software developer building web apps, CLI tools, database utilities, and writing technical articles.",
            sameAs: ["https://github.com/iajaydandge"],
          }),
        }}
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ajay Dandge
      </h1>
      <p className="mb-2">
        {`I'm a developer who loves to write code, build software, and solve problems. Though, sometimes those problems are tougher than they seem!.`}
      </p>
      <p className="mb-4">
        {`By the way, nice to see you here! Hope you're having a great day!`}
      </p>
      <p className="mb-6">
        {`You can also check out `}
        <a
          href="https://contests.ajaydandge.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Contests
        </a>
        {`, a simple platform to track upcoming programming contests, `}
        <a
          href="https://coderun.ajaydandge.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          CodeRun
        </a>
        {`, an online code runner to quickly write, run, and test code, `}
        <a
          href="https://burrow.ajaydandge.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Burrow
        </a>
        {`, a CLI to query PostgreSQL and MySQL databases directly or through an SSH tunnel, and `}
        <a
          href="https://github.com/iajaydandge/claude-usage-plugin"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Claude Usage Plugin
        </a>
        {`, a tool for per-user token, cost, and session tracking in Claude Code.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
