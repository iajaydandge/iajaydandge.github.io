# ajaydandge.dev

Personal website and engineering blog of Ajay Dandge.

## Tech Stack

- **Runtime & Package Manager**: Bun (`bun run dev`, `bun run build`)
- **Framework**: Next.js 15 (App Router)
- **Export Target**: Pure static export (`output: "export"`) into `out/`
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with system dark/light mode
- **Typography**: Geist Sans, Geist Mono (`geist`)
- **Blog Engine**: Local MDX posts (`app/blog/posts/*.mdx`) rendered via `next-mdx-remote`

## Commands

- `bun run dev` — Start local development server at `http://localhost:3000`
- `bun run build` — Build production static export (always verify before concluding work)
- `bun run serve` — Serve exported `out/` directory locally

## Architecture & Structure

- `app/` — Next.js App Router pages, layouts, and static markdown routes (`/`, `/blog`, `/bookmarks`, `index.md`, `blog.md`, `bookmarks.md`, `llms.txt`)
- `app/blog/posts/` — MDX blog posts with frontmatter (`title`, `publishedAt`, `summary`)
- `app/bookmarks/` — Curated bookmarks list (`app/bookmarks/data.ts` with `title` and `url`)
- `app/components/` — Shared UI components (pet widget, MDX renderer, greeting, theme toggle)

## Key Invariants

1. **Static Export Only**: All pages and routes must resolve at build time. Never introduce runtime server APIs (`cookies()`, `headers()`, or non-static route handlers).
2. **Editorial Aesthetics & Tone**:
   - A personal space, not a corporate portfolio (a person, not a product). Downplay resume sheen in favor of things built, written, and explored. Room for imperfect work (notes, thoughts, drafts).
   - Strictly card-free: never use cards, tile grids, drop shadows, or dashboard boxes. Rely on text-first editorial lists, hairline dividers (`border-neutral-200 dark:border-neutral-800`), and whitespace rhythm.
   - Restrained typography: `Geist Sans` for body and UI, `Geist Mono` for metadata (`tabular-nums`) and code.
   - Quiet craft: minimalist monochrome palette, simple text links with subtle hover underlines (`hover:underline underline-offset-4`), and minimal visual noise (no badges, pills, or stars).
3. **Route Sync Checklist**: When adding or removing top-level routes, always update:
   - Navigation in `app/layout.tsx`
   - Route list in `app/sitemap.ts`
4. **Markdown Route Pairing**: Every public route must have a 1:1 plain Markdown representation (`.md`) for LLMs and `curl` access (`/index.md`, `/blog.md`, `/bookmarks.md`, and `/blog/[slug].md`). Keep `llms.txt` and `llms-full.txt` lean by referencing these individual `.md` routes without inflating payload size.
