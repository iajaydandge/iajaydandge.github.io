"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/blog/format-date";

interface PostItem {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    type?: string;
    readingTime?: string;
  };
}

const filters = [
  { label: "Articles", value: "article" },
  { label: "Notes", value: "note" },
  { label: "Thoughts", value: "thought" },
];

export function WritingList({ posts }: { posts: PostItem[] }) {
  const [activeFilter, setActiveFilter] = useState("article");

  const filteredPosts = posts.filter(
    (post) => (post.metadata.type || "article") === activeFilter
  );

  return (
    <div>
      {/* Simple Text Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 text-sm mb-6 text-neutral-500 dark:text-neutral-400">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`transition-colors cursor-pointer ${
                isActive
                  ? "text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-4"
                  : "hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <hr className="mb-6 border-neutral-200 dark:border-neutral-800" />

      {/* Post List */}
      {filteredPosts.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 py-4">
          Nothing here right now — still brewing or in drafts.
        </p>
      ) : (
        <ul className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {filteredPosts.map((post) => {
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
                    <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                      {post.metadata.title}
                    </h2>
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
      )}
    </div>
  );
}
