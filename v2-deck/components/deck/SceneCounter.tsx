"use client";

import { useDeck } from "./DeckContext";

/**
 * Fixed bottom-left scene counter. "NN / 07".
 * Always visible, including on mobile (where the indicator is hidden).
 */
export function SceneCounter() {
  const { active, total } = useDeck();
  return (
    <div className="pointer-events-none fixed left-6 sm:left-10 bottom-6 sm:bottom-8 z-40 text-2xs tabular-nums text-subtle">
      {String(active + 1).padStart(2, "0")} <span className="text-subtle/60">/</span> {String(total).padStart(2, "0")}
    </div>
  );
}
