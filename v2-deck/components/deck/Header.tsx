"use client";

import { useDeck } from "./DeckContext";

/**
 * Fixed top header.
 *
 * The nav controls use deck context instead of hash-only links because the
 * homepage is now a horizontal scroll container, not the browser document.
 */
export function Header() {
  const { goTo } = useDeck();
  const linkCls =
    "pointer-events-auto transition-all duration-180 ease-editorial hover:text-foreground hover:underline hover:underline-offset-2 hover:decoration-accent/50";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-none flex items-baseline justify-between px-6 pt-6 text-sm text-muted sm:px-10 sm:pt-8">
        <button type="button" onClick={() => goTo(0)} className={linkCls}>
          Yang Wonmin
        </button>
      </div>
    </header>
  );
}
