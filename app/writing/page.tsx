import { getBlogPosts } from "@/blog/utils";
import { WritingList } from "./writing-list";

export const metadata = {
  title: "Writing",
  description:
    "Articles, notes, thoughts, and technical writing by Ajay Dandge.",
};

export default function WritingPage() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Writing</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
        Things I&apos;ve written, ideas I&apos;ve explored, and thoughts I&apos;ve
        put into words.
      </p>
      <WritingList posts={posts} />
    </section>
  );
}
