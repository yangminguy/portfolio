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

## 9. Project Detail Page

The project detail page should be calm and readable.

Recommended structure:

```text
Context
Problem
System
Execution
Impact
Artifacts
Reflection
```

For Campit, only use confirmed or conservatively worded claims.
Do not invent metrics.

## 10. Success Criteria

The project is successful when:

- It visually feels like a finished editorial portfolio.
- It does not look like a default Next.js/Tailwind template.
- The horizontal slide behavior is obvious and smooth.
- The content is concise but meaningful.
- Campit shows enough depth to prove execution ability.
- The website is ready to deploy on Vercel.

