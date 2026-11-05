"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { anime, books, songs, bookmarks } from "@/library/data";

const tabs = [
  { label: "Anime", value: "anime" },
  { label: "Books", value: "books" },
  { label: "Music", value: "music" },
  { label: "Bookmarks", value: "bookmarks" },
];

export function LibraryView() {
  const [activeTab, setActiveTab] = useState("anime");

  const currentList =
    activeTab === "anime"
      ? anime
      : activeTab === "books"
      ? books
      : activeTab === "music"
      ? songs
      : bookmarks;

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex items-center gap-4 text-sm mb-6 text-neutral-500 dark:text-neutral-400">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`transition-colors cursor-pointer ${
                isActive
                  ? "text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-4"
                  : "hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <hr className="mb-6 border-neutral-200 dark:border-neutral-800" />

      {/* List */}
      <ul className="divide-y divide-neutral-100 dark:divide-neutral-900">
        {currentList.map((item, index) => (
          <li
            key={item.title}
            className="py-2.5 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs text-neutral-400 dark:text-neutral-500 tabular-nums w-6 shrink-0 text-right select-none">
                {index + 1}.
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 truncate text-sm"
              >
                <span className="truncate">{item.title}</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors shrink-0" />
              </a>
            </div>
            {item.detail && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400 tabular-nums shrink-0">
                {item.detail}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
