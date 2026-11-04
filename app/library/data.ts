export interface MediaItem {
  title: string;
  url: string;
  detail?: string;
}

export const anime: MediaItem[] = [
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

export const books: MediaItem[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    url: "https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Sorcerer_s_Stone",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    url: "https://www.goodreads.com/book/show/15881.Harry_Potter_and_the_Chamber_of_Secrets",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    url: "https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    url: "https://www.goodreads.com/book/show/6.Harry_Potter_and_the_Goblet_of_Fire",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    url: "https://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    url: "https://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince",
    detail: "J.K. Rowling",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    url: "https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows",
    detail: "J.K. Rowling",
  },
  {
    title: "The Alchemist",
    url: "https://www.goodreads.com/book/show/18144590-the-alchemist",
    detail: "Paulo Coelho",
  },
];

export const songs: MediaItem[] = [
  {
    title: "Believer",
    url: "https://music.youtube.com/watch?v=Kx7B-XvmFtE",
    detail: "Imagine Dragons",
  },
  {
    title: "Thunder",
    url: "https://music.youtube.com/watch?v=9ssQKlLxBdQ",
    detail: "Imagine Dragons",
  },
  {
    title: "Closer",
    url: "https://music.youtube.com/watch?v=r7zTKRonHXM",
    detail: "The Chainsmokers",
  },
  {
    title: "Hymn for the Weekend",
    url: "https://music.youtube.com/watch?v=H3Kzh6RrnMc",
    detail: "Coldplay",
  },
];
