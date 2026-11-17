# AGENTS.md

Engineering blog and digital corner of Ajay Dandge.

## Tech Stack

- **Runtime & Package Manager**: Bun (`bun run dev`, `bun run build`)
- **Hosting**: Cloudflare Pages deployed from `dist/`
- **Framework**: Astro 6 (Vite 7, Content Layer)
- **Export Target**: Pure static export (`output: "static"`) into `dist/`
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with system dark/light mode
- **Typography**: `@fontsource/geist-sans`, `@fontsource/geist-mono`
- **Icons**: `lucide-astro`
- **Blog Engine**: Local MDX posts (`src/content/blog/*.mdx`) managed via Astro Content Layer (`src/content.config.ts`)

## Commands

- `bun run dev` — Start local development server at `http://localhost:4321`
- `bun run build` — Build production static export (always verify before concluding work)
- `bun run preview` — Preview built `dist/` locally

## Architecture & Structure

- `src/pages/` — Astro pages (`index.astro`, `writing/`, `library/`, `about/`, `contact/`, `privacy/`, `404.astro`) and paired `.md` endpoints (`index.md.ts`, `writing.md.ts`, `library.md.ts`, `about.md.ts`, `contact.md.ts`, `privacy.md.ts`, `404.md.ts`, `blog/[...slug].md.ts`, `llms.txt.ts`, `llms-full.txt.ts`, `robots.txt.ts`, `rss.xml.ts`, `sitemap.xml.ts`, `og/[...slug].png.ts`)
- `src/content/blog/` — MDX blog posts with frontmatter (`title`, `publishedAt`, `summary`, `type`)
- `src/data/` — Static data collections (`src/data/library.ts` for books, anime, songs, bookmarks)
- `src/components/` — Shared UI components (`navbar.astro`, `footer.astro`, `greeting.astro`, `theme-toggle.astro`, `pet.astro`)
- `src/layouts/` — Base layout with metadata, canonical URLs, and RFC 8288 discovery links (`src/layouts/layout.astro`)
- `functions/_middleware.ts` — Cloudflare Pages edge middleware (Content negotiation `Accept: text/markdown`, RFC 8288 Link headers, agent 404s)
- `public/_headers` — Cloudflare Pages security, MIME type, and caching headers

## Work Protocol & Decision Making

1. **Official Documentation First**: Never rely solely on model memory or assumptions. Always consult and verify against official documentation (e.g., Astro documentation at `https://docs.astro.build/`, Cloudflare docs, RFC specs) before planning and implementing.
2. **Plan → Approval → Execution Cycle**: For implementing any feature, change, or migration:
   - Always prepare and present a detailed plan/preview first.
   - Wait for user review, feedback, or explicit approval.
   - Only implement after the user approves the final plan. Never jump ahead to execution without approval.
3. **In-Code Documentation Traceability**: When implementing configurations, features, or protocols, always include the official documentation or RFC URL references in code comments (at the top of files or above key implementation blocks) so that everything is directly traceable to the official source.
4. **Commit Message Style**:
   - Strictly use natural, lowercase, concise descriptions (e.g. `removed artificial mcp and agent skills endpoints and updated agents.md`, `refactor library data to use author and artist`).
   - Never use corporate Conventional Commit prefixes (e.g. `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`) or capitalized subject lines. Keep commit messages authentic, human, and consistent with the repository's historical log.

## Key Invariants

1. **Static Export Only**: All pages and routes must resolve at build time. Never introduce runtime server APIs that break static builds.
2. **Editorial Aesthetics & Tone**:
   - A personal space, not a corporate portfolio (a person, not a product). Downplay resume sheen in favor of things built, written, and explored. Room for imperfect work (notes, thoughts, drafts).
   - Strictly card-free: never use cards, tile grids, drop shadows, or dashboard boxes. Rely on text-first editorial lists, hairline dividers (`border-neutral-200 dark:border-neutral-800`), and whitespace rhythm.
   - Restrained typography: `Geist Sans` for body and UI, `Geist Mono` for metadata (`tabular-nums`) and code.
   - Quiet craft: minimalist monochrome palette, simple text links with subtle hover underlines (`hover:underline underline-offset-4`), and minimal visual noise (no badges, pills, or stars).
3. **Route Sync Checklist**: When adding or removing top-level routes, always update:
   - Navigation in `src/components/navbar.astro` and `src/components/footer.astro`
   - Route list and machine index in `src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts`, and `src/pages/robots.txt.ts`
4. **Markdown Route Pairing**: Every public route must have a 1:1 plain Markdown representation (`.md`) for LLMs and `curl` access (`/index.md`, `/writing.md`, `/library.md`, `/about.md`, `/contact.md`, `/privacy.md`, `/404.md`, and `/blog/[slug].md`). Keep `llms.txt` and `llms-full.txt` lean by referencing these individual `.md` routes without inflating payload size.
5. **Path Aliases & Imports**: 
   - Always use `@/` path aliases (e.g., `@/data/library`, `@/components/...`) for internal imports instead of relative paths (`./`, `../`).
   - Always use **named imports** as much as possible; avoid default imports unless strictly required by external library or Astro framework conventions.
6. **Filename Conventions**:
   - Prefer single-word filenames where practical (e.g., `layout.astro`, `navbar.astro`, `footer.astro`, `pet.astro`).
   - For multi-word filenames, strictly use `kebab-case` (e.g., `theme-toggle.astro`, `content-signals.ts`). Never use camelCase or PascalCase for filenames.
7. **Pet Widget Invariants**:
   - Consistent naming across code and components: `oneko`, `oinu`, and `ousagi`.
   - Always transparent: Must strictly remain `pointerEvents: 'none'` at all times so that text selection, copying content, and clicking links are never blocked.
   - Sleep & Wake Cycles: On initial load, the pet waits 10 seconds of stationary cursor before sleeping; on subsequent cycles, it waits 5 seconds. Once idle, it sleeps undisturbed for 1–2 minutes (ignoring cursor movements), then automatically wakes up and follows the cursor again.
8. **Open Graph (OG) Images**:
   - Automated build-time generation via `src/pages/og/[...slug].png.ts` (1200x630 PNG format).
   - Generates `/og/home.png` for homepage and `/og/[slug].png` for all blog posts.
   - Powered by Astro's built-in `sharp` library converting vector SVG templates to PNG directly at build time with zero external dependencies.
