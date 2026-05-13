"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TOTAL_SCENES } from "@/data/projects";

type Ctx = {
  active: number;
  total: number;
  setActive: (i: number) => void;
  goTo: (i: number) => void;
  hasScrolled: boolean;
};

const DeckContext = createContext<Ctx | null>(null);

export function useDeck(): Ctx {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used inside <DeckProvider>");
  return ctx;
}

/**
 * Horizontal deck navigation.
 *
 * The main portfolio is intentionally modeled as a right-moving editorial deck:
 * - wheel / trackpad movement advances the horizontal rail
 * - keyboard ArrowRight / ArrowLeft move between slides
 * - indicators and header controls call goTo(index)
 */
function scrollToSceneIndex(i: number, behavior: ScrollBehavior = "smooth") {
  const id = `scene-${String(i + 1).padStart(2, "0")}`;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior, block: "nearest", inline: "center" });
  }
}

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrolledOnceRef = useRef(false);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_SCENES - 1, i));
    scrollToSceneIndex(clamped);
  }, []);

  useEffect(() => {
    if (active > 0 && !scrolledOnceRef.current) {
      scrolledOnceRef.current = true;
      setHasScrolled(true);
    }
  }, [active]);

  /* Convert ordinary vertical wheel intent into horizontal deck movement.
   * This is what makes trackpads and mouse wheels feel natural while the deck
   * still visually moves to the right, Rauno-style. */
  useEffect(() => {
    const root = document.getElementById("deck-root");
    if (!root) return;

    const onWheel = (e: WheelEvent) => {
      const dominant = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (dominant === 0) return;
      e.preventDefault();
      root.scrollBy({ left: dominant, behavior: "auto" });
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, []);

  /* Keyboard navigation. Ignored when focus is in a form field. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const ae = document.activeElement as HTMLElement | null;
      const tag = ae?.tagName?.toLowerCase() ?? "";
      if (["input", "textarea", "select"].includes(tag)) return;
      if (ae?.isContentEditable) return;

      let next: number | null = null;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
          next = active + 1;
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          next = active - 1;
          break;
        case " ":
          next = e.shiftKey ? active - 1 : active + 1;
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = TOTAL_SCENES - 1;
          break;
        default:
          return;
      }

      const clamped = Math.max(0, Math.min(TOTAL_SCENES - 1, next));
      if (clamped === active) return;
      e.preventDefault();
      scrollToSceneIndex(clamped);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  /* Return from detail pages with /#scene-NN. */
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#scene-(\d{2})$/);
    if (!match) return;
    const i = parseInt(match[1], 10) - 1;
    if (i < 0 || i >= TOTAL_SCENES) return;

    requestAnimationFrame(() => {
      scrollToSceneIndex(i, "auto");
      setActive(i);
      if (i > 0) {
        scrolledOnceRef.current = true;
        setHasScrolled(true);
      }
    });
  }, []);

  return (
    <DeckContext.Provider
      value={{ active, total: TOTAL_SCENES, setActive, goTo, hasScrolled }}
    >
      {children}
    </DeckContext.Provider>
  );
}
