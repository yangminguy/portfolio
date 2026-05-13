"use client";

import { useEffect, useRef, useState } from "react";
import { useDeck } from "./DeckContext";

type Props = {
  index: number;
  ariaLabel?: string;
  children: React.ReactNode;
};

/**
 * A single horizontal slide.
 *
 * Each scene is now rendered as an editorial slide with a label above the
 * white canvas. The rail shows adjacent slides at the left/right edges, so the
 * main page feels like a right-moving portfolio deck rather than a vertical
 * full-page scroller.
 */
export function Scene({ index, ariaLabel, children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const { setActive } = useDeck();
  const id = `scene-${String(index + 1).padStart(2, "0")}`;

  useEffect(() => {
    const el = ref.current;
    const root = document.getElementById("deck-root");
    if (!el || !root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.52) {
            setActive(index);
            setRevealed(true);
          }
        }
      },
      { root, threshold: [0.52] }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [index, setActive]);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      data-revealed={revealed ? "true" : "false"}
      className="scene"
    >
      <div className="scene-label" aria-hidden="true">
        {ariaLabel}
      </div>
      <div className="scene-frame">{children}</div>
    </section>
  );
}
