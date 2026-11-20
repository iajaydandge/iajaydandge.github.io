// @see https://github.com/iajaydandge/iajaydandge.github.io/blob/main/AGENTS.md
// Data source for /library: anime, books, music, and bookmarks

export interface AnimeItem {
  title: string;
  url: string;
}

export interface BookItem {
  title: string;
  url: string;
  author: string;
}

export interface SongItem {
  title: string;
  url: string;
  artist: string;
}

export interface BookmarkItem {
  title: string;
  url: string;
  description?: string;
}

export interface FontItem {
  title: string;
  url: string;
  designer: string;
}

export type MediaItem = AnimeItem | BookItem | SongItem | BookmarkItem | FontItem;

export const anime: AnimeItem[] = [
  {
    title: "Naruto",
    url: "https://myanimelist.net/anime/20/Naruto",
  },
  {
    title: "Attack on Titan",
    url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
  },
  {
    title: "Death Note",
    url: "https://myanimelist.net/anime/1535/Death_Note",
  },
  {
    title: "Bleach",
    url: "https://myanimelist.net/anime/269/Bleach",
  },
  {
    title: "Jujutsu Kaisen",
    url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
  },
  {
    title: "Demon Slayer",
    url: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
  },
];

export const books: BookItem[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    url: "https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Sorcerer_s_Stone",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    url: "https://www.goodreads.com/book/show/15881.Harry_Potter_and_the_Chamber_of_Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    url: "https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    url: "https://www.goodreads.com/book/show/6.Harry_Potter_and_the_Goblet_of_Fire",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    url: "https://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    url: "https://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince",
    author: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    url: "https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows",
    author: "J.K. Rowling",
  },
  {
    title: "The Alchemist",
    url: "https://www.goodreads.com/book/show/18144590-the-alchemist",
    author: "Paulo Coelho",
  },
  {
    title: "Chandragupta: Path of a Fallen Demigod",
    url: "https://www.goodreads.com/book/show/13424653-chandragupta-path-of-a-fallen-demigod",
    author: "Rajat Pillai",
  },
  {
    title: "Shriman Yogi",
    url: "https://www.goodreads.com/book/show/6727757-shriman-yogi",
    author: "Ranjit Desai",
  },
];

export const songs: SongItem[] = [
  {
    title: "Believer",
    url: "https://music.youtube.com/watch?v=Kx7B-XvmFtE",
    artist: "Imagine Dragons",
  },
  {
    title: "Thunder",
    url: "https://music.youtube.com/watch?v=9ssQKlLxBdQ",
    artist: "Imagine Dragons",
  },
  {
    title: "Closer",
    url: "https://music.youtube.com/watch?v=r7zTKRonHXM",
    artist: "The Chainsmokers",
  },
  {
    title: "Hymn for the Weekend",
    url: "https://music.youtube.com/watch?v=H3Kzh6RrnMc",
    artist: "Coldplay",
  },
];

export const bookmarks: BookmarkItem[] = [
  {
    title: "AI Evals: Everything You Need to Know",
    url: "https://hamel.dev/blog/posts/evals-faq",
  },
  {
    title: "LLM Inference Handbook",
    url: "https://handbook.modular.com",
  },
  {
    title: "Textures - Tactile image filters",
    url: "https://texture.fayaz.workers.dev",
  },
];

export const fonts: FontItem[] = [
  {
    title: "Inter",
    url: "https://fonts.google.com/specimen/Inter",
    designer: "Rasmus Andersson",
  },
  {
    title: "Inter Tight",
    url: "https://fonts.google.com/specimen/Inter+Tight",
    designer: "Rasmus Andersson",
  },
  {
    title: "Fira Code",
    url: "https://fonts.google.com/specimen/Fira+Code",
    designer: "Nikita Prokopov",
  },
  {
    title: "Source Code Pro",
    url: "https://fonts.google.com/specimen/Source+Code+Pro",
    designer: "Paul D. Hunt",
  },
  {
    title: "Cardo",
    url: "https://fonts.google.com/specimen/Cardo",
    designer: "David Perry",
  },
  {
    title: "Monaco",
    url: "https://en.wikipedia.org/wiki/Monaco_(typeface)",
    designer: "Susan Kare",
  },
  {
    title: "Intel One Mono",
    url: "https://fonts.google.com/specimen/Intel+One+Mono",
    designer: "Frere-Jones Type",
  },
  {
    title: "Geist Sans",
    url: "https://fonts.google.com/specimen/Geist",
    designer: "Vercel",
  },
  {
    title: "Geist Mono",
    url: "https://fonts.google.com/specimen/Geist+Mono",
    designer: "Vercel",
  },
];
