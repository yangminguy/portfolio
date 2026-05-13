"use client";

import { useDeck } from "./DeckContext";

/** Subtle first-slide hint. The deck moves horizontally, so the cue is →. */
export function NextHint() {
  const { active, hasScrolled } = useDeck();
  const visible = active === 0 && !hasScrolled;

  return (
    <div
      aria-hidden
      className={[
        "fixed bottom-6 right-6 z-40 text-2xs text-subtle sm:bottom-8 sm:right-10",
        "transition-opacity duration-500 ease-editorial",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <span className="inline-flex items-baseline gap-1.5">
        <span>Next</span>
        <span aria-hidden>→</span>
      </span>
    </div>
  );
}
