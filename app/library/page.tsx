import { LibraryView } from "@/library/library-view";

export const metadata = {
  title: "Library",
  description:
    "Things I watch, read, and listen to — anime, books, music, and bookmarks.",
};

export default function LibraryPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Library</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
        Things I watch, read, and listen to.
      </p>
      <LibraryView />
    </section>
  );
}
