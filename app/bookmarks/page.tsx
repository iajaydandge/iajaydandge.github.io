import { ArrowUpRight } from "lucide-react";
import { bookmarks } from "./data";

export const metadata = {
  title: "Bookmarks",
  description:
    "A collection of articles and tools I find insightful or useful.",
};

export default function BookmarksPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Bookmarks</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
        A collection of articles, web reading, and tools I find insightful.
      </p>
      <ul className="divide-y divide-neutral-100 dark:divide-neutral-900">
        {bookmarks.map((bookmark, index) => (
          <li
            key={bookmark.url}
            className="py-2.5 flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs text-neutral-400 dark:text-neutral-500 tabular-nums w-7 shrink-0 text-right select-none">
                {index + 1}.
              </span>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 truncate text-sm"
              >
                <span className="truncate">{bookmark.title}</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors shrink-0" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
