# ARCHITECTURE — v2 Horizontal Portfolio Deck

## 1. Architecture Summary

This project uses a single production app:

```text
v2-deck/
```

The app is a Next.js App Router project. The homepage is built as a horizontal scroll-snap rail composed of reusable `Scene` components.

## 2. Removed Architecture

The previous `v1-static` app has been removed.

Reason:

- The final direction is the v2 deck.
- Keeping v1 creates ambiguity for AI coding agents.
- The desired interface is horizontal and slide-based, not a static portfolio page.

## 3. Main App Structure

```text
v2-deck/
  app/
    page.tsx
    layout.tsx
    globals.css
    projects/[slug]/page.tsx
  components/
    deck/
      Deck.tsx
      DeckContext.tsx
      Header.tsx
      NextHint.tsx
      Scene.tsx
      SceneCounter.tsx
      SceneIndicator.tsx
    scenes/
      SceneIdentity.tsx
      ScenePositioning.tsx
      SceneProjectsIndex.tsx
      SceneFeaturedProject.tsx
      SceneProcess.tsx
      ScenePrinciples.tsx
      SceneContact.tsx
    detail/
      BackLink.tsx
      DetailHeader.tsx
      DetailShell.tsx
      MetaBlock.tsx
      Section.tsx
  data/
    projects.ts
```

## 4. Deck System

### `Deck.tsx`

Owns the main shell:

- Header
- Top slide indicator
- Scene counter
- Next hint
- Horizontal scroll root

### `DeckContext.tsx`

Controls active slide state and navigation.

Responsibilities:

- track `active` scene index
- expose `goTo(index)`
- support keyboard navigation
- convert wheel / trackpad movement into horizontal deck movement
- return from project detail pages using `/#scene-NN`

### `Scene.tsx`

Wraps each scene as a horizontal slide.

Each scene renders:

```text
<section class="scene">
  <div class="scene-label">Label</div>
  <div class="scene-frame">...</div>
</section>
```

This is what creates the rauno-style slide label and white canvas.

## 5. CSS Layout Model

The critical layout is in `app/globals.css`.

Core model:

```css
.deck-root {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
}

.scene {
  flex: 0 0 clamp(760px, 74vw, 1120px);
  scroll-snap-align: center;
}

.scene-frame {
  background: #fff;
}
```

This creates:

- right-moving horizontal rail
- partially visible neighboring slides
- snap-to-slide behavior
- large editorial slide canvas

## 6. Data Model

Project data is centralized in:

```text
v2-deck/data/projects.ts
```

Each project should include:

```ts
slug
active
title
subtitle
year
role
summary
sections
```

The homepage project index and detail pages should both read from this source.

## 7. Routing

| Route | Purpose |
|---|---|
| `/` | Horizontal deck homepage |
| `/projects/[slug]` | Project detail page |

Back links from detail pages should return to the deck, usually `/#scene-03` or `/#scene-04`.

## 8. Deployment

**✅ Deployed to Vercel**

Configuration:
- **Root Directory**: v2-deck
- **Framework Preset**: Next.js (critical for proper output directory routing)
- **Build Command**: npm run build
- **Output Directory**: .next (with Override enabled)
- **GitHub Repository**: https://github.com/yangminguy/portfolio.git
- **Live Domain**: https://portfolio-delta-tawny-qmwpawi6wv.vercel.app

**Important**: Framework Preset must be set to "Next.js" (not "Other") to properly recognize the `.next` output directory. This setting overrides local vercel.json configuration.

## 9. Risks

| Risk | Explanation | Mitigation |
|---|---|---|
| Horizontal scroll feels hidden | Users may not realize the deck moves right | Keep visible neighboring slides and Next → hint |
| Mobile overflow issues | Wide scenes can break small screens | Use 86vw slide width on mobile |
| Scroll behavior feels too sensitive | Trackpads may move too quickly | Tune wheel conversion if needed |
| Too much content per slide | Minimal layout can become crowded | Keep each slide concise |

