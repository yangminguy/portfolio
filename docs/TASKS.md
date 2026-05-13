# TASKS — Horizontal Portfolio Deck

## Current Decision

```text
v2-deck is the final production standard.
v1-static has been removed.
The homepage must be a horizontal slide deck.
```

## P0 — Structural Cleanup

- [x] Remove `v1-static` from the project package.
- [x] Update documentation to state that v2 is final.
- [x] Convert homepage from vertical full-page scroll to horizontal deck rail.
- [x] Replace right-side vertical scene indicator with top-center slide ticks.
- [x] Change Next hint from `Next ↓` to `Next →`.
- [x] Add slide labels above each white slide canvas.
- [x] Update keyboard navigation to support ArrowRight / ArrowLeft.
- [x] Convert mouse wheel / trackpad movement into horizontal scroll.

## P1 — Build Verification

- [ ] Run `cd v2-deck`.
- [ ] Run `npm install`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Fix any TypeScript or ESLint errors.
- [ ] Run `npm run dev` and inspect the homepage manually.

## P2 — Horizontal Deck Polish

- [ ] Confirm neighboring slides are visible on 1440px desktop.
- [ ] Confirm active slide snaps cleanly into view.
- [ ] Confirm top indicator active rectangle matches the current slide.
- [ ] Confirm scroll wheel does not move the page vertically.
- [ ] Tune slide width if the deck feels too crowded.
- [ ] Tune slide height if the white canvas feels too short or too tall.
- [ ] Check that slide labels match the intended editorial style.
- [ ] Confirm `Next →` disappears after the first movement.

## P3 — Main Scene Content

- [ ] Scene 01 Identity: finalize Korean identity statement.
- [ ] Scene 02 Positioning: finalize English positioning sentence.
- [ ] Scene 03 Projects: finalize project list and one-line summaries.
- [ ] Scene 04 Featured Project: finalize Campit summary.
- [ ] Scene 05 Process: simplify process copy.
- [ ] Scene 06 Principles: refine principles / notes copy.
- [ ] Scene 07 Contact: replace placeholder links.

## P4 — Campit Detail Page

- [ ] Confirm Campit title and subtitle.
- [ ] Write Context.
- [ ] Write Problem.
- [ ] Write System.
- [ ] Write Execution.
- [ ] Write Impact using only confirmed or conservative claims.
- [ ] Add Artifacts.
- [ ] Add Reflection.
- [ ] Confirm Back to deck link returns to the correct scene.

## P5 — Rauno-level QA

- [ ] Test desktop 1440px.
- [ ] Test desktop 1920px.
- [ ] Test MacBook-width layout.
- [ ] Test mobile 390px width.
- [ ] Check typography rhythm.
- [ ] Check line-height and paragraph width.
- [ ] Check empty space balance.
- [ ] Check hover/focus states.
- [ ] Check reduced motion behavior.
- [ ] Check metadata and OG preview.

## P6 — Project Expansion

After Campit is finished:

- [ ] Add Portfolio Evidence Mapper project.
- [ ] Add Plays Lounge Pop-up Strategy project.
- [ ] Add Gugok Dakgalbi Brand Launch project.
- [ ] Decide which projects are active/clickable.
- [ ] Reuse the same detail page structure.

## P7 — Deployment

- [ ] Push to GitHub.
- [ ] Create Vercel project.
- [ ] Set Vercel Root Directory to `v2-deck`.
- [ ] Deploy preview.
- [ ] QA preview URL.
- [ ] Connect final domain.
- [ ] Update README with deployment notes.

## Immediate Claude Code Prompt

```text
Read AGENTS.md and docs/TASKS.md.
Then inspect v2-deck/app/globals.css, v2-deck/components/deck/DeckContext.tsx, Scene.tsx, SceneIndicator.tsx, Header.tsx, and NextHint.tsx.

Confirm that the homepage is now implemented as a horizontal slide deck with visible neighboring slides.
Do not edit yet. First report:
1. Whether the horizontal structure is correct
2. Any likely build errors
3. Any layout risks
4. The next 5 changes you recommend for rauno-level polish
```

