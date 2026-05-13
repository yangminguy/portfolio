"use client";

import { useDeck } from "./DeckContext";
import { SCENES } from "@/data/projects";

/**
 * Top-center horizontal rail indicator.
 *
 * Visual reference: Rauno-style tiny ticks at the top center, where the active
 * slide becomes a slightly wider rectangular mark. It intentionally avoids
 * verbose numbering so the deck feels like a quiet visual carousel.
 */
export function SceneIndicator() {
  const { active, goTo } = useDeck();

  return (
    <nav
      aria-label="Slide navigation"
      className="pointer-events-none fixed left-1/2 top-7 z-50 hidden -translate-x-1/2 sm:flex items-center gap-1.5"
    >
      {SCENES.map((scene, i) => {
        const isActive = active === i;
        return (
          <button
            key={scene.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}: ${scene.label}`}
            aria-current={isActive ? "true" : undefined}
            className="pointer-events-auto flex h-6 w-3 items-center justify-center"
          >
            <span
              aria-hidden
              className={[
                "block transition-all duration-300 ease-editorial",
                isActive
                  ? "h-3.5 w-7 border border-foreground/35 bg-transparent"
                  : "h-5 w-px bg-foreground/30 hover:bg-foreground/55",
              ].join(" ")}
            />
          </button>
        );
      })}
    </nav>
  );
}
