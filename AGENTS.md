# ajaydandge.dev

Personal website and engineering blog of Ajay Dandge.

## Tech Stack

- **Runtime & Package Manager**: Bun (`bun run dev`, `bun run build`)
- **Framework**: Next.js 15 (App Router)
- **Export Target**: Pure static export (`output: "export"`) into `out/`
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with system dark/light mode
- **Typography**: Geist Sans (`geist/font/sans`)
- **Blog Engine**: Local MDX posts (`app/blog/posts/*.mdx`) rendered via `next-mdx-remote`

## Commands

- `bun run dev` — Start local development server at `http://localhost:3000`
- `bun run build` — Build production static export (always verify before concluding work)
- `bun run serve` — Serve exported `out/` directory locally

## Architecture & Structure

- `app/` — Next.js App Router pages and layouts (`/`, `/blog`, `/bookmarks`)
- `app/blog/posts/` — MDX blog posts with frontmatter (`title`, `publishedAt`, `summary`)
- `app/bookmarks/` — Curated bookmarks list (`app/bookmarks/data.ts` with `title` and `url`)
- `app/components/` — Shared UI components (nav, footer, pet widget, MDX renderer)

## Key Invariants

1. **Static Export Only**: All pages and routes must resolve at build time. Never introduce runtime server APIs (`cookies()`, `headers()`, or non-static route handlers).
2. **Design Principles**: Minimalist monochrome palette (`border-neutral-200 dark:border-neutral-800`), simple text links with hover underlines, and `tabular-nums` for numbered lists. Avoid visual noise (unrequested redirect icons, badges, or stars).
3. **Route Sync Checklist**: When adding or removing top-level routes, always update:
   - Navigation in `app/components/nav.tsx`
   - Route list in `app/sitemap.ts`
