# Claude Code Instructions

## Branching strategy

Always work on a feature branch, never commit directly to `main`.

- Create a branch at the start of each session: `git checkout -b <descriptive-name>`
- Use kebab-case names that describe the work, e.g. `homepage-hero-layout`, `about-section-responsive`, `sanity-schema-updates`
- Open a PR to merge into `main` when the work is ready for review

## Stack

- Next.js 13 App Router
- Sanity CMS v3 — content is fetched via GROQ queries in `lib/queries.tsx`; mutations go through the Sanity REST API using the write token in `.env.local`
- Tailwind CSS v3 — no `size-*` shorthand, use `w-* h-*`
- Fonts: Quincy CF (local, `public/fonts/quincy/`) via `font-quincy`; Karla (Google Fonts) via `font-karla`

## Design tokens (tailwind.config.js)

- `warm-50` #F8F8F8, `warm-100` #EFEEEC, `warm-600` #A68F83, `warm-700` #917D73
- `cool-900` #2D2E2D
- Typography scale: `text-h1`, `text-h2`, `text-h3`, `text-overline`, `text-body-md`, `text-subheading-sm`, `text-button`

## Design source

Figma file: `https://www.figma.com/design/t14cmiRKtRv04az6dRMZu0/Amee-Longpre-Photography`

The goal is pixel-accurate fidelity to the Figma desktop design while keeping all content dynamic from Sanity. Responsive layouts stack vertically on mobile and restore the Figma desktop layout at `lg:` using `lg:absolute` positioning where needed.
