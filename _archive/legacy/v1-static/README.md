# 포토폴리오 — Yang Wonmin

A quiet, text-first portfolio inspired by `rauno.me`.
Designed as a curated work index for a PM / Marketing Operations / AI-automation operator.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript

## Structure

```
app/                Routes (Home, Projects, Project Detail, Notes, About)
components/         Reusable UI — SiteShell, Header, ProjectRow, Section, etc.
data/projects.ts    Project data + section labels
docs/               DESIGN.md (design constitution) and DESIGN_REVIEW.md
preview.html        Self-contained visual preview for the design review
```

## Local dev

```bash
npm install
npm run dev
```

## Design

All visual decisions follow `docs/DESIGN.md`. Before changing UI, read it first.
`docs/DESIGN_REVIEW.md` records the self-review against DESIGN.md for the first implementation.
