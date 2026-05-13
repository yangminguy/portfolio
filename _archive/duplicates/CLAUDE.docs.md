# CLAUDE.md — Yang Wonmin Portfolio Website

## Project Summary

This project is a minimalist, editorial portfolio website for **Yang Wonmin**.
The final implementation standard is **v2-deck only**.

The homepage must behave like a **horizontal slide deck** inspired by rauno.me:

- The main deck moves to the right.
- Adjacent slides are partially visible at the edges.
- Each slide has a small label above a white canvas.
- The top-center indicator uses thin ticks and a rectangular active mark.
- Vertical full-page scrolling is not the desired interaction.

## Current Direction

Use `v2-deck` as the only production app.

Do not revive, reference, or rebuild `v1-static`.
`v1-static` has been intentionally removed from this package.

## Core Product Goal

Build a portfolio that presents Yang Wonmin as a person who turns scattered work into systems:

- Marketing operations
- AI automation
- Project structuring
- Offline-to-online experience design
- Evidence-based portfolio documentation

The site should feel precise, quiet, and highly finished.
It should not feel like a generic card portfolio.

## Primary Reference

Visual / interaction reference:

```text
rauno.me-style horizontal editorial deck
```

Key traits to preserve:

- spacious gray/off-white background
- white slide canvases
- partially visible neighboring slides
- understated typography
- precise spacing
- very small navigation marks
- restrained motion

## Tech Stack

```text
Next.js App Router
TypeScript
Tailwind CSS
React components
Vercel deployment
```


## Content MVP

The first website content MVP includes two active projects:

```text
campit-influencer-marketing-system
campit-superfan
```

Use `content/raw/` only as evidence/reference material.
Use `content/projects/` and `v2-deck/data/projects.ts` for website-facing copy.

Do not publish raw Evidence Notes, unverified metrics, private page links, or internal partner materials.

## Important Paths

```text
v2-deck/app/page.tsx
v2-deck/app/globals.css
v2-deck/components/deck/Deck.tsx
v2-deck/components/deck/DeckContext.tsx
v2-deck/components/deck/Scene.tsx
v2-deck/components/deck/SceneIndicator.tsx
v2-deck/components/deck/Header.tsx
v2-deck/components/scenes/*
v2-deck/data/projects.ts
v2-deck/app/projects/[slug]/page.tsx
```

## Working Rules

1. Keep the homepage horizontal.
2. Do not convert it back to vertical scroll.
3. Do not add large decorative UI unless it improves the editorial deck feeling.
4. Use short, confident portfolio copy.
5. Avoid fake metrics or unverifiable claims.
6. Make one change at a time and verify layout after each change.
7. Preserve the quiet/minimal character.
8. Prefer polish over adding more features.

## Validation Commands

Run inside `v2-deck`:

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Acceptance Criteria

The MVP is acceptable when:

- `v1-static` is gone and not referenced.
- The homepage scrolls horizontally to the right.
- Adjacent slides are visible on desktop.
- The top-center indicator reflects the active slide.
- Keyboard navigation works with ArrowRight / ArrowLeft.
- Trackpad or mouse wheel moves the deck horizontally.
- Campit detail page opens and returns to the deck.
- All placeholder contact links are replaced before final deployment.
- The visual finish feels intentional, not template-like.

## Recommended First Prompt

```text
Read CLAUDE.md and docs/TASKS.md first.
Then inspect v2-deck/components/deck and v2-deck/app/globals.css.
Confirm that the homepage is implemented as a horizontal slide deck and list any remaining issues before editing.
```
