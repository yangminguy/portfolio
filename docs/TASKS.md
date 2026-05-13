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

- [x] Run `cd v2-deck`.
- [x] Run `npm install`.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Fix any TypeScript or ESLint errors.
- [x] Run `npm run dev` and inspect the homepage manually.
- [x] Verified: All build succeeds, no TypeScript errors.

## P2 — Horizontal Deck Polish

- [x] Confirm neighboring slides are visible on 1440px desktop.
- [x] Confirm active slide snaps cleanly into view.
- [x] Confirm top indicator active rectangle matches the current slide.
- [x] Confirm scroll wheel does not move the page vertically.
- [x] Tune slide width if the deck feels too crowded.
- [x] Tune slide height if the white canvas feels too short or too tall.
- [x] Check that slide labels match the intended editorial style.
- [x] Confirm `Next →` disappears after the first movement.
- [x] Verified: 1440px layout works, scroll-snap snaps correctly, indicator updates on navigation.
- [x] Verified: Mobile 375px layout works (86vw slide width).
- [x] Verified: All 7 scenes render correctly.

### P2.5 — Visual Polish to rauno.me Level (Session 3)

- [x] Introduce cool blue accent color (#1B6CB0) system
- [x] Improve motion easing: cubic-bezier(0.15, 0.8, 0.25, 1) for snappier feel
- [x] Optimize reveal timing: 560ms → 480ms, step 80ms → 65ms
- [x] Enhance SceneIndicator: active state now uses accent color with subtle background
- [x] Improve Scene labels: uppercase + letter-spacing (0.08em)
- [x] Add subtle box-shadow to scene cards for depth
- [x] Add Header link hover states: underline with accent decoration
- [x] Enhance Project/Contact hovers: use accent color on interaction
- [x] Build verification: 0 errors, 0 TypeScript warnings
- [x] Visual verification: Homepage, Projects, and all hovers confirmed working
- [x] Vercel deployment: auto-deployed via GitHub push

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

- [x] Push to GitHub.
  - Repository: https://github.com/yangminguy/portfolio.git
  - All code pushed, .gitignore configured
- [x] Create Vercel project.
  - Project name: `portfolio`
- [x] Set Vercel Root Directory to `v2-deck`.
  - Root Directory configured in Project Settings
- [x] Deploy preview.
  - Multiple deployments tested and verified
- [x] QA preview URL.
  - Verified all 7 scenes load
  - Verified keyboard navigation (ArrowRight/ArrowLeft)
  - Verified email link: yangminguy@gmail.com
  - Verified responsive layout
- [x] Connect final domain.
  - Production domain: https://portfolio-delta-tawny-qmwpawi6wv.vercel.app
  - Framework Preset: Next.js (critical for output directory routing)
  - Output Directory: .next (with Override enabled)
- [x] Update README with deployment notes.
  - Live deployment verified and working

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

