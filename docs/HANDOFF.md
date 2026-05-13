# HANDOFF — Portfolio Website v2 Horizontal Content MVP

## 1. Current Status

**✅ PRODUCTION LIVE + VISUAL POLISH COMPLETE** — Portfolio deployed with rauno.me-level visual refinement.

Project organized around the following final direction:

```text
v2-deck only
horizontal slide deck
rauno-style neighboring slides
content MVP with two active Campit projects
v1 removed
GitHub: https://github.com/yangminguy/portfolio.git
Live: https://portfolio-delta-tawny-qmwpawi6wv.vercel.app
```

The goal is not to build a generic portfolio. The goal is to create a quiet, editorial, horizontal portfolio deck that presents Yang Wonmin as a person who turns scattered work into repeatable systems.

### Recent Updates (Session 3)

- **P0-P2 Complete**: All foundation phases verified
- **Visual Polish Phase**: ✅ Complete
  - Implemented cool blue accent color (#1B6CB0) throughout UI
  - Improved motion: cubic-bezier(0.15, 0.8, 0.25, 1) for snappier interactions
  - Enhanced SceneIndicator with accent color active state
  - Added Header link hover underlines with accent decoration
  - Improved Scene labels: uppercase + letter-spacing (0.08em)
  - Added subtle box-shadow to scene cards for depth
  - Project/contact links now use accent color on hover
  - All build errors: 0, TypeScript errors: 0
- **P4 Status**: Campit detail pages fully functional with complete sections data
- **Live Verification**: Homepage, Projects scene, and detail pages all verified working

### Recent Updates (Session 2)

- **P1 — Build Verification**: ✅ Complete. All builds pass, no TypeScript errors.
- **P2 — Horizontal Deck Polish**: ✅ Complete. 1440px layout verified, scroll-snap works, indicator responsive, 7 scenes render correctly.
- **SceneContact.tsx**: ✅ Updated. Removed all secondary links, kept only email (yangminguy@gmail.com).
- **P7 — Vercel Deployment**: ✅ Complete. 
  - GitHub repository created and code pushed
  - Vercel project created with Framework Preset: Next.js
  - Output Directory configured: .next (with Override enabled)
  - All verification tests passed (scene loading, keyboard navigation, email link, responsive layout)
  - Production domain live: https://portfolio-delta-tawny-qmwpawi6wv.vercel.app

## 2. Final Baseline

Use only:

```text
v2-deck/
```

Do not restore or reference:

```text
v1-static/
```

## 3. Active Content MVP

The first content MVP includes two active projects:

1. `campit-influencer-marketing-system`
   - Theme: influencer commerce operation system
   - Focus: grading, matching, personalization page, reporting automation, workflow design

2. `campit-superfan`
   - Theme: fan community / CRM operation system
   - Focus: customer FGI, experience program, coupon/review/report loop, repeatable community routine

Source content is stored in:

```text
content/raw/
```

Compressed website-ready content is stored in:

```text
content/projects/
```

Runtime project data is stored in:

```text
v2-deck/data/projects.ts
```

## 4. Important Non-Publish Rules

Do not publish:

- unverified revenue, ROI, conversion, or reservation lift claims
- private page URLs
- internal proposal files
- large company names unless explicitly approved
- raw Evidence Notes as public website copy
- confidential client / partner details

When in doubt, use conservative system-building language instead of performance claims.

## 5. Current Interaction Model

The homepage is a horizontal deck.

Users can move through it by:

- swiping / trackpad movement
- mouse wheel converted into horizontal movement
- ArrowRight / ArrowLeft
- clicking top indicator ticks
- clicking header controls

The visual target is:

- gray/off-white background
- white slide canvases
- partial neighboring slides
- small slide labels
- top-center thin indicator ticks
- restrained motion
- precise typography

## 6. Key Files

```text
AGENTS.md
docs/PRD.md
docs/ARCHITECTURE.md
docs/TASKS.md
docs/HANDOFF.md
docs/CONTENT_GUIDE.md
v2-deck/data/projects.ts
v2-deck/app/page.tsx
v2-deck/app/globals.css
v2-deck/components/deck/DeckContext.tsx
v2-deck/components/deck/Scene.tsx
v2-deck/components/deck/SceneIndicator.tsx
v2-deck/components/scenes/SceneProjectsIndex.tsx
v2-deck/components/scenes/SceneFeaturedProject.tsx
v2-deck/app/projects/[slug]/page.tsx
```

## 7. Next Best Step

Run locally:

```bash
cd v2-deck
npm install
npm run build
npm run dev
```

Then verify:

1. Homepage moves horizontally.
2. Neighboring slides are visible.
3. Top indicator updates.
4. Both active projects appear in the project index.
5. Both active project detail pages open.
6. Text density feels appropriate for a rauno-style portfolio.

## 8. Remaining Human Decisions

- Final Korean identity sentence
- Final English positioning sentence
- Whether `Influencer Marketing System` or `Superfan` should be the first featured project
- Final contact links
- Which metrics, if any, can be publicly shown
- Whether project titles should be mostly English, Korean, or mixed

## 9. Recommended Prompt for Claude Code

```text
Read AGENTS.md, docs/PRD.md, docs/ARCHITECTURE.md, docs/TASKS.md, and docs/HANDOFF.md.

This project uses v2-deck as the final production baseline. v1-static has been removed and must not be restored.

The homepage should be a horizontal slide deck with visible neighboring slides, inspired by rauno.me.

The content MVP includes two active projects: campit-influencer-marketing-system and campit-superfan.

Do not edit yet. First inspect the project and report:
1. Whether the horizontal deck implementation is correct
2. Whether both active projects are correctly wired
3. Whether the detail pages are reachable
4. Any likely build or layout risks
5. The next 5 safest tasks to reach rauno-level polish
```
