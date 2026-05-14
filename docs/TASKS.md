# TASKS — Portfolio Deck + Dashboard Overlay

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

---

## Phase A — Dashboard Overlay Preparation (Session 5)

### Task A1: PRD Documentation Update
- [x] Updated docs/PRD.md
  - Sections 1–8: Maintained (homepage deck)
  - Section 9: Replaced with new overlay spec (Project Dashboard Overlay)
  - Sections 10–11: Added (Data Structure, Component Architecture, Success Criteria)
- [x] TASKS.md extended with Phase A–E workflow

### Task A2: Data Structure Extension
- [ ] Extend `v2-deck/data/projects.ts` with new `PortfolioProject` type
- [ ] Add optional `dashboardData?: PortfolioProject` field to existing `Project` type
- [ ] Add Campit `dashboardData` using Section 13 template from new PRD
- [ ] Verify TypeScript compilation: `npm run build` (no errors)
- [ ] Maintain backward compatibility (old projects still work)

**Verification Command:**
```bash
cd v2-deck && npm run build
```

---

## Phase B — Infrastructure Changes

### Task B1: Update SceneProjectsIndex Component
- [ ] Replace `<Link href={/projects/${p.slug}}>` with click handler
- [ ] Add state to track selected project for overlay
- [ ] Trigger ProjectDashboardOverlay when project is clicked
- [ ] Keep all visual styling unchanged
- [ ] Verify keyboard & hover interactions still work

### Task B2: Remove Old Detail Page
- [ ] Delete `v2-deck/app/projects/[slug]/page.tsx` file
- [ ] Delete `v2-deck/components/detail/` folder (DetailShell, Section, MetaBlock, BackLink)
- [ ] Remove related type exports from `projects.ts`
- [ ] Remove related imports from `projects.ts`
- [ ] Run `npm run build` — should pass with 0 errors

### Task B3: Overlay State Management
- [ ] Create context or hook for overlay state (selected project + isOpen)
- [ ] Wire SceneProjectsIndex to set overlay state on project click
- [ ] Implement ESC key listener to close overlay
- [ ] (Optional) Implement click-outside-to-close behavior

---

## Phase C — Overlay & Section Components

⚠️ **Start new agent context: `portfolio-ppt-architect-agent`**

Agent will implement Phase C based on:
- Updated `projects.ts` with Campit `dashboardData`
- New PRD sections 9–11 (overlay spec, data structure, component architecture)

### Task C1: ProjectDashboardOverlay Component
- [ ] Full-screen overlay container with backdrop
- [ ] Header: Project title + close button (X)
- [ ] Tab navigation: Left side on desktop, top on mobile
- [ ] Render active section based on tab state
- [ ] ESC key closes overlay

### Task C2: 5 Section Components
- [ ] **ProjectSnapshot**: Title, one-liner, metadata (period/role/category), 4 metric cards
- [ ] **ProjectProblem**: Context, Before state, Core problem, Why it matters, Before→Problem flow
- [ ] **ProjectSystem**: Approach, System flow (7–9 steps), Input/Process/Output/Impact diagram
- [ ] **ProjectExecution**: 5 grouped cards (Pool & Criteria, Matching, Content, Reporting, Optimization)
- [ ] **ProjectImpact**: 4–6 metric cards, Result summary, Learning statement

### Task C3: Verify Component Rendering
- [ ] All 5 sections display correctly
- [ ] Tab switching is smooth (no UI jank)
- [ ] Content fits within viewport (no truncation)
- [ ] No TypeScript errors
- [ ] Campit overlay shows all 5 sections

**Verification:**
```bash
npm run build && npm run dev
# Click Campit project → Overlay opens → All tabs work
```

---

## Phase D — Supporting Components

### Task D1: MetricCards Component
- [ ] Display metric value (large) + label (small)
- [ ] 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- [ ] Consistent spacing and typography

### Task D2: SystemFlow Component
- [ ] Render 7–9 flow items sequentially
- [ ] Horizontal flow on desktop, vertical on mobile
- [ ] Dividers or arrows between items
- [ ] Optional short description per item

### Task D3: ExecutionGroupCards Component
- [ ] Title + 2–3 bullets per card
- [ ] Display 5–6 cards in a grid
- [ ] Preserve all execution items (do not delete)
- [ ] Optional expandable "See all" for original full list

### Task D4: ReadMoreOriginalContent Component
- [ ] Collapsible section for long-form original text
- [ ] Default state: collapsed
- [ ] Toggle text: "Read more" ↔ "Show less"
- [ ] Preserve original formatting and wording

**Verification:**
```bash
npm run build && npm run dev
# All components display correctly
# Expand/collapse, grid layouts work
# No console errors
```

---

## Phase E — Final Verification & Polish

### Task E1: Responsive Design Validation
- [ ] Desktop (1440px+): Left tabs, full-width sections
- [ ] Tablet (768–1200px): Top tabs, adjusted spacing
- [ ] Mobile (375–767px): Full-screen, vertical tabs, stacked cards
- [ ] No horizontal overflow on any device
- [ ] Touch targets ≥ 44px on mobile

### Task E2: Interaction & Accessibility
- [ ] Keyboard navigation: Tab, Enter, ESC all work
- [ ] Focus states clearly visible
- [ ] ARIA labels on all interactive elements
- [ ] Color contrast: WCAG AA minimum

### Task E3: Complete Build & QA
- [ ] `npm run build` → 0 errors, 0 warnings
- [ ] `npm run lint` → passes
- [ ] `npm run dev` → no console errors
- [ ] All 5 active projects in Projects scene
- [ ] Campit overlay: all 5 sections display
- [ ] Manual smoke test: Click → Open → Navigate tabs → Close

### Task E4: Future Work (v2, out of scope)
- [ ] Apply dashboard overlay to remaining 4 projects
- [ ] Consider URL routing for direct project links
- [ ] Add analytics tracking to overlay interactions

---

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

- [x] Scene 01 Identity: finalize Korean identity statement.
- [x] Scene 02 Positioning: finalize English positioning sentence.
- [x] Scene 03 How I Work: finalize process copy.
- [x] Scene 04 Projects: finalize 5 active projects with markdown-sourced content.
- [x] Scene 05 Contact: finalize email link and footer.
- [x] Scene 06 (Featured) deleted — no longer needed.

## P4 — Project Detail Pages

- [x] All 5 active projects have complete detail pages with sections:
  - [x] campit-influencer-marketing-system
  - [x] campit-superfan
  - [x] brand-partnership-campit (new)
  - [x] gugok-dakgalbi-brand-launch (activated)
  - [x] plays-lounge-popup-strategy (activated)
- [x] Each project displays: Context, Problem, System, Execution, Impact, Artifacts, Reflection
- [x] Back to deck link returns to Scene 04 (Projects)
- [x] All projects sourced from markdown files in `/project` folder

## P5 — Build & Validation

- [x] Build verification: 0 errors, static pages generated (9/9)
- [x] Browser testing: All 5 project detail pages load correctly
- [x] Homepage scene navigation: All 5 scenes render correctly
- [x] Responsive layout verified on multiple breakpoints
- [ ] Final QA on desktop 1440px/1920px, mobile 390px

## P6 — Minor Refinements

After project integration complete:

- [ ] Fine-tune project list summary text if needed
- [ ] Verify all images/assets in artifacts section
- [ ] Check metadata and OG preview for each project
- [ ] Test reduced motion behavior
- [ ] Consider additional polish touches

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

