# v2-deck — Horizontal Portfolio Deck

This is the final production app for Yang Wonmin's portfolio website.

## Interaction Model

The homepage is a horizontal slide deck:

- scrolls to the right
- shows neighboring slides
- uses scroll snap
- supports ArrowRight / ArrowLeft
- converts trackpad/mouse wheel movement to horizontal scroll
- uses a top-center tick indicator

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Main Files

```text
app/page.tsx
app/globals.css
components/deck/DeckContext.tsx
components/deck/Scene.tsx
components/deck/SceneIndicator.tsx
components/deck/Header.tsx
components/deck/NextHint.tsx
data/projects.ts
```
