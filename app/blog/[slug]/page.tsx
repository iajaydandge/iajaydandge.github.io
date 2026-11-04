import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/blog/utils";
import { baseUrl } from "@/sitemap";
import { generateOgImage } from "@/blog/og-image";
import { generateBlogMarkdown } from "@/blog/blog-markdown";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post_slug = (await params).slug;

  let post = getBlogPosts().find((post) => post.slug === post_slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  await generateOgImage(title, post_slug);
  await generateBlogMarkdown(post_slug);

  let ogImage = image ? image : `${baseUrl}/og/${post.slug}.png`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Ajay Dandge",
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const post_slug = (await params).slug;

  let post = getBlogPosts().find((p) => p.slug === post_slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og/${post.slug}.png`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ajay Dandge",
              url: baseUrl,
            },
          }),
        }}
      />
      <h1 className="font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex items-center justify-between mt-2 mb-8 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span>{formatDate(post.metadata.publishedAt)}</span>
          {post.metadata.readingTime && (
            <>
              <span>·</span>
              <span>{post.metadata.readingTime}</span>
            </>
          )}
        </div>
        <a
          href={`/blog/${post.slug}.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center"
        >
          <span>.md</span>
          <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
        </a>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
