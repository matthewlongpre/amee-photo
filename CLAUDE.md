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

**Whenever implementing or reviewing UI**, use the Figma MCP tools to inspect the design before writing code:

1. Load the `figma:figma-use` skill first (required before any Figma MCP call)
2. Use `get_metadata` with the file URL or a specific `node-id` to explore the page structure
3. Use `get_design_context` on specific node IDs to get reference code, screenshots, and spacing values
4. Use `get_screenshot` to visually verify a node

**MCP limitation:** The Figma MCP only exposes static layer structure. Prototype interactions and hover/click states (e.g. dropdown menus, overlays) are invisible to MCP tools — they only appear in Figma's prototype view. If a component has interactive states, ask the user to inspect them manually in Figma and share a screenshot.

**Known interactive states (found via prototype view):**
- "Info" nav item has a hover dropdown with sub-links: Investment, Testimonials, FAQ

The Figma file has only desktop frames — there are no mobile designs. When building responsive layouts, follow the pattern in CLAUDE.md (stack vertically on mobile, restore desktop layout at `lg:`) and use the design tokens above.
