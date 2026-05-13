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
    "pointer-events-auto transition-colors duration-180 ease-editorial hover:text-foreground";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-none flex items-baseline justify-between px-6 pt-6 text-sm text-muted sm:px-10 sm:pt-8">
        <button type="button" onClick={() => goTo(0)} className={linkCls}>
          Yang Wonmin
        </button>

        <nav className="pointer-events-auto flex gap-5 sm:gap-7">
          <button type="button" onClick={() => goTo(2)} className={linkCls}>Projects</button>
          <button type="button" onClick={() => goTo(5)} className={linkCls}>Notes</button>
          <button type="button" onClick={() => goTo(1)} className={linkCls}>About</button>
        </nav>
      </div>
    </header>
  );
}
