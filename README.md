# competition-benchmarking-v2-react

> Iran Luxury & Premium Car Dealerships — Competition Benchmarking 2025. A single-page
> report for Ken Research, built as a React port of the static `competition-benchmarking-v2` page.

## Stack
- Vite 6 + React 19 + TypeScript 5
- No UI framework, no CSS framework, no chart library — all visuals are hand-built CSS + inline SVG

## Prerequisites
- Node ≥ 20
- npm (this project uses npm, not pnpm — it is deployed standalone and is intentionally
  outside the Aura pnpm workspace so its lockfile cannot drift)

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:5173 (Vite default) or pass `--port 3095` to match the team's launch config.

## Scripts
| Script | What |
|---|---|
| `npm run dev` | dev server with HMR |
| `npm run build` | production build → `dist/` |
| `npm run preview` | serve the built `dist/` |
| `npm start` | alias of `preview` |
| `npm run tsc` | typecheck, no emit |

## Structure
```
index.html            Vite entry — <head>, fonts, and the `js-reveal` class
src/main.tsx          React root
src/App.tsx           page composition (section order lives here)
src/globals.css       ALL styling — design tokens + every component rule
src/components/       chrome: Header, MobileDrawer, SiteChrome, Hero, SideToc, Footer, MobileBar
src/components/sections/   15 report sections, one component each
src/components/PageBehaviour.tsx   scroll reveal, mindmap sequence, TOC scroll-spy
public/assets/        logo
```

## How it is put together
- **Styling is one file.** `src/globals.css` holds the Project Aura design tokens and every
  rule. Sections carry semantic class names; there are no CSS modules and no utility classes.
- **UI state is React.** FAQ accordion, KPI tabs, the V1/V2 profile toggle, the methodology
  accordion and the mobile drawer are all component state.
- **Document-level behaviour is one effect.** `PageBehaviour.tsx` owns scroll reveal, the
  mindmap build sequence and the TOC scroll-spy. These are deliberately DOM code: they are
  document-wide concerns (an observer across every section, SVG stroke-dash line drawing,
  scroll position → active nav item) that React state does not model more clearly. Every
  listener is bound to an `AbortSignal` and every observer is tracked, so React StrictMode's
  double-invoke in development cannot stack duplicate handlers.
- **Three sections are hidden, not deleted.** `#ecosystem`, `#insights` and `#methodology`
  are hidden by `display:none` in `globals.css` (search "hidden per client request"). Delete
  the relevant line to bring one back; the TOC rebuilds from the visible set.

## Known gaps for the tech team
See `HANDOVER.md`.
