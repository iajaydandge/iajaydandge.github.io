# README.md

Engineering blog and digital corner of Ajay Dandge.

Building software, exploring ideas, writing, and curating things of interest. Designed with an editorial, card-free aesthetic and built for both human readers and autonomous AI agents.

## Tech Stack

- **Framework**: [Astro 6](https://astro.build/) (Static Export, Content Layer)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Hosting & Edge**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Geist Sans & Geist Mono (`@fontsource/geist-sans`, `@fontsource/geist-mono`)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Syntax Highlighting**: Shiki (`github-light` / `github-dark`)

## AI-Agent Readiness (100/100)

Engineered for full machine readability and agent autonomy:

- **Edge Content Negotiation**: Sends paired Markdown when requested via `Accept: text/markdown` or CLI user agents.
- **1:1 Markdown Route Pairing**: Every public route has a clean `.md` representation (`/index.md`, `/writing.md`, `/library.md`, `/about.md`, `/contact.md`, `/privacy.md`, `/blog/[slug].md`).
- **Discovery Headers (RFC 8288)**: Responses include `Link: </llms.txt>; rel="describedby"` and `<link rel="describedby" href="/llms.txt" />`.
- **AI Content Signals**: Modern crawler signals configured in `/robots.txt`:
  ```text
  Content-Signal: search=yes, ai-input=yes, ai-train=no
  ```
- **Bot-Aware 404s**: Intercepts missing routes and returns structured Markdown recovery links.

## Features

- **Retro Cursor Pets**: Nostalgic desktop companions (Oneko cat, Oinu dog, or Ousagi rabbit) randomly chosen on load, running on pure client-side DOM animations with zero React or virtual DOM overhead. Non-blocking (`pointer-events: none`) with natural 1–2 minute sleep/wake cycles.
- **Curated Library**: Curated collection of books, anime, songs, and bookmarks.
- **Full Static Export**: 100% build-time pre-rendered HTML and Markdown with sub-second page loads.

## Development

```bash
# Install dependencies
bun install

# Start local dev server (http://localhost:4321)
bun run dev

# Build production static export to dist/
bun run build

# Preview production build locally
bun run preview
```

## License

MIT License © 2026 [Ajay Dandge](https://ajaydandge.dev)
