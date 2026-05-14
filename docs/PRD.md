# PRD — Yang Wonmin Horizontal Portfolio Deck

## 1. Overview

### Product Name

**Yang Wonmin Portfolio Deck**

### One-line Description

A minimalist horizontal portfolio deck that presents Yang Wonmin's work as a sequence of editorial slides and project evidence pages.

## 2. Final Direction

The final product is **v2-deck only**.

`v1-static` should be removed and should not be used as a development reference anymore.

The homepage should not behave like a vertical scrolling website. It should behave like a **horizontal deck**:

```text
left-to-right slide movement
visible neighboring slides
small slide labels
top-center tick indicator
quiet editorial spacing
```

## 3. Reference Experience

The desired feeling is close to a rauno.me-style slide interface:

- large horizontal canvas
- neighboring slides peeking in from the side
- soft gray/off-white page background
- white slide surfaces
- minimal top indicator
- restrained animation
- no heavy card grid
- no generic portfolio template feeling

## 4. Target User

The site is primarily for:

- hiring managers
- founders / CEOs
- collaborators
- AI-native teams
- marketing / product / operations teams

They should understand quickly that Yang Wonmin is not just listing projects, but showing how he thinks, structures, and executes work.

## 5. Positioning

The site should position Yang Wonmin as:

```text
A project operator who turns scattered work into repeatable systems.
```

Core keywords:

- Marketing Operations
- AI Automation
- Project Structuring
- Offline-to-Online Experience
- Portfolio Evidence Design

## 6. MVP Scope

### Included

- Horizontal homepage deck
- 7 core scenes
- Project index scene
- Featured Campit project scene
- Campit detail page
- Top-center slide indicator
- Keyboard navigation
- Trackpad/mouse wheel horizontal navigation
- Responsive mobile behavior
- Basic metadata

### Excluded for MVP

- CMS integration
- Admin dashboard
- Blog system
- Complex animation library
- Multiple visual themes
- Authentication
- Analytics dashboard

## 7. Homepage Scene Structure

| Scene | Purpose |
|---|---|
| 01 Identity | Introduce who Yang Wonmin is |
| 02 Positioning | State the core professional positioning |
| 03 Projects | Show project index |
| 04 Featured Project | Highlight Campit as the representative project |
| 05 Process | Explain how he works |
| 06 Principles | Show operating principles / notes |
| 07 Contact | Lead to contact and external links |

## 8. Core Interaction Requirements

### Horizontal Deck

The homepage must scroll horizontally.

Required behavior:

- The rail moves left/right.
- Users advance primarily to the right.
- Adjacent slides are partially visible on desktop.
- Each slide snaps into position.
- Mouse wheel and trackpad gestures should move horizontally.
- ArrowRight and ArrowLeft should move between slides.

### Slide Visual Structure

Each slide should have:

```text
small label above
white slide frame
quiet content inside
large empty space where appropriate
```

### Indicator

Use a top-center indicator, not a right-side vertical indicator.

The active slide should appear as a small rectangular mark.
Inactive slides should appear as thin vertical ticks.

## 9. Project Dashboard Overlay (Dashboard-Style Project Briefing)

### 9.1 Interaction Model

When users click a project card on the Projects scene, a **Project Dashboard Overlay** opens on the same screen.

The overlay is a full-screen or near-full-screen panel that sits above the deck.

Users navigate 5 sections via:
- Left-side tabs (desktop)
- Top tabs (mobile)
- Keyboard arrow keys
- Close button or ESC to dismiss

### 9.2 Core Philosophy

> Projects should be understood through structure and metrics, not through long-form reading.

The overlay converts project narratives into **5-section briefings**:

1. **Snapshot** — What is this project? (5-second understanding)
2. **Problem** — Why was it necessary? (Business context + core issue)
3. **System** — What operating system was designed? (Strategy + flow)
4. **Execution** — What was built? (Grouped execution items)
5. **Impact** — What was the outcome? (Metrics + learning)

### 9.3 Section Structure

#### Section 01 — Snapshot
- Project title + one-liner
- Role, Period, Category
- 4–6 metric cards (large value, small label)
- Key facts at a glance

#### Section 02 — Problem
- Business context
- Before state (bullet list)
- Core problem statement
- Why it matters
- Visual: Before → Core Problem → Required System flow

#### Section 03 — System
- Approach & key insight
- System flow (7–9 steps)
- Input → Process → Output → Impact diagram
- Content strategy or strategic rationale
- Visual: flow diagram, process map

#### Section 04 — Execution
- 4–6 execution group cards
- Groups: Pool & Criteria, Matching & Partnership, Content System, Reporting & Automation, Optimization & Expansion
- Each group has 2–3 short bullets
- All execution items preserved, not deleted

#### Section 05 — Impact
- Impact metrics dashboard (4–6 cards)
- Result summary
- Learning statement
- What this project proves about the user's capability

### 9.4 Design Principles

- **Minimal & Premium**: No SaaS admin page appearance
- **Editorial**: Calm, precise spacing and typography
- **Operational**: Metric cards, flow diagrams, before/after maps, grouped cards
- **Dashboard-like**: Information architecture first, decoration second
- **Restrained**: Limit colors, avoid dense tables, use short text

### 9.5 Content Rules

- Do not delete long-form original content
- Compress key ideas on visible sections
- Preserve details in "Read more" expandable sections or notes
- Use only verified metrics and confirmed claims
- If a claim is unclear, mark as "Needs confirmation"

### 9.6 Mobile Behavior

- Overlay opens full-screen
- Left tabs → top tabs or dropdown
- Metric cards: 2-column or 1-column
- Flows: horizontal → vertical
- Long text: collapsed by default

---

## 10. Data Structure & Component Architecture

### 10.1 Data Structure

Project data is managed in `v2-deck/data/projects.ts`.

New `PortfolioProject` type for dashboard content:

```ts
export type PortfolioProject = {
  slug: string
  title: string
  oneLiner: string
  subtitle: string
  period: string
  role: string
  category: string
  keywords: string[]
  
  metrics: ProjectMetric[]
  
  problem: {
    context: string
    before: string[]
    coreProblem: string
    whyItMatters?: string
  }
  
  system: {
    approach: string
    flow: ProjectSystemFlowItem[]
    contentStrategy?: string
    inputProcessOutputImpact?: { input, process, output, impact }
  }
  
  execution: {
    groups: ProjectExecutionGroup[]
  }
  
  impact: {
    metrics: ProjectMetric[]
    result: string
    learning: string
  }
  
  originalContent?: {
    problem?: string
    approach?: string
    whatIBuilt?: string[]
    result?: string
    learning?: string
  }
}
```

### 10.2 Component Architecture

New components for overlay:

```text
ProjectDashboardOverlay          (main overlay container + state)
  ProjectDashboardTabs          (tab navigation)
    ProjectSnapshot             (Section 01)
    ProjectProblem              (Section 02)
    ProjectSystem               (Section 03)
    ProjectExecution            (Section 04)
    ProjectImpact               (Section 05)

Supporting components:
  MetricCards                   (metric card grid)
  SystemFlow                    (flow diagram)
  ExecutionGroupCards           (grouped execution cards)
  ReadMoreOriginalContent       (collapsible long-form text)
```

---

## 11. Success Criteria

The project is successful when:

- It visually feels like a finished editorial portfolio.
- It does not look like a default Next.js/Tailwind template.
- The horizontal slide behavior is obvious and smooth.
- Project clicking opens an overlay (not a separate page).
- Campit project shows Snapshot → Problem → System → Execution → Impact structure.
- Users can understand the project in 30 seconds without reading long text.
- All verified metrics and execution details are preserved.
- The overlay feels like a dashboard briefing, not a blog.
- Mobile experience is smooth.
- The website is ready to deploy on Vercel.

