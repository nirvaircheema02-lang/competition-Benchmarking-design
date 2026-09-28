# HANDOVER — Competition Benchmarking V2 (React)

**For:** Tech team
**From:** Design (Aura-assisted)
**Date:** 2026-09-03
**Version:** v1 — React/Vite port of the static `competition-benchmarking-v2` page

## TL;DR
A finished single-page benchmarking report, visually verified to match the approved static
design. It builds and typechecks clean. Two things are **not** production-ready and need tech
input: every CTA points at a placeholder anchor, and the report content is still UAE Cement
placeholder copy in three sections.

## Run
```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the build
```

## Deploy (Vercel)
Static SPA — no server runtime.

| Setting | Value |
|---|---|
| Framework Preset | **Vite** |
| Build Command | `npm run build` |
| Output Directory | **`dist`** |
| Install Command | `npm install` |
| Root Directory | repo root |

## ⚠️ Blockers — must be resolved before this ships

### 1. All 15 CTAs point at `#faq`
Every button on the page is `<a href="#faq">`, including "Download Sample Report",
"Book discovery call", "Request Custom Benchmarking" and "Unlock Full Data". They were never
wired to real destinations. Clicking any of them scrolls to the FAQ.

Needs a mapping to real targets. At minimum three buckets:
- sample-report file (should also carry the `download` attribute so the link role matches the label)
- contact / demo form
- unlock / pricing

### 2. Placeholder content
Three sections still carry **UAE Cement** copy and figures from the source template, not Iran
Luxury Car data:
- Executive Summary (KPI values + all four findings)
- Strategic Recommendations
- Implementation Roadmap · Conclusion & Next Steps

The layout is final; only the strings and numbers need replacing.

## Notes / deliberate decisions
- **No design-system package dependency.** `globals.css` is a self-contained copy of the Aura
  tokens and component rules rather than an import of `@kenresearch/design-system`. This keeps
  the project buildable standalone, but means DS fixes do **not** flow in automatically — a
  change to `Button`, `Badge`, `IconBox` or `CTALink` upstream has to be mirrored here by hand.
  Migrating to real DS imports is the recommended next step if this project is kept long-term.
- **Icon colour** uses the Report Store "Upcoming Reports" treatment (`#f5f2f1` tint /
  `#737373` glyph) page-wide. Purple is restricted to chart/graph fills only.
- **Brand red is CTA-only**, plus section eyebrows (an established, deliberate exception).
- **Scroll-spy** activates a section when its heading crosses the midpoint of the reading area
  (`headerH + (viewportH − headerH) / 2`), not the header line. That threshold is derived, not
  tuned — it is the point where the incoming section starts occupying more of the reading area
  than the outgoing one. See the comment in `PageBehaviour.tsx`.
- **The sticky header height is measured, not hardcoded** — it is 100px on desktop and 60px on
  mobile, published as the `--header-h` custom property and consumed by the TOC rail.

## Accessibility state
- Decorative CTA icons are `aria-hidden`; accessible names come from the visible label
- FAQ rows are real `<button>`s with `aria-expanded` / `aria-controls` kept in sync
- Global `:focus-visible` ring, brand-red, 2px with 2px offset
- All motion respects `prefers-reduced-motion`
- **Not audited:** colour contrast has not been run through axe; no keyboard-only pass has
  been done on the mindmap's collapse controls

## Verified at handover
- `npm run build` passes · `npm run tsc` reports 0 errors · no console errors
- 12 visible sections, all separated by exactly 96px, all headings aligned at the same x
- 12 TOC entries, each label matching its section heading, correct anchors
- No horizontal overflow at 1440px or 375px
- Renders identically to the approved static page (document height matches exactly)
