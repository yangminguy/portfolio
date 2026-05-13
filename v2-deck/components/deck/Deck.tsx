"use client";

import { DeckProvider } from "./DeckContext";
import { Header } from "./Header";
import { SceneIndicator } from "./SceneIndicator";
import { SceneCounter } from "./SceneCounter";
import { NextHint } from "./NextHint";

/**
 * The deck shell.
 *
 * Owns the scroll container (`.deck-root`) and all fixed UI:
 * Header (top), Indicator (right edge), Counter (bottom-left),
 * NextHint (bottom-right, Scene 01 only).
 *
 * Children are <Scene/> elements rendered in scene order.
 */
export function Deck({ children }: { children: React.ReactNode }) {
  return (
    <DeckProvider>
      <Header />
      <SceneIndicator />
      <SceneCounter />
      <NextHint />
      <div className="deck-root" id="deck-root">
        {children}
      </div>
    </DeckProvider>
  );
}
