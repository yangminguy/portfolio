"use client";

import { Fragment, useState } from "react";
import { Scene } from "@/components/deck/Scene";
import { PROCESS_STEPS } from "@/data/projects";

/**
 * Scene 05 — How I Work
 *
 * A text-based process diagram. Five words separated by arrows form one
 * horizontal row. Hovering or focusing a word crossfades its short
 * description in the description box below. The default (no hover) is
 * Observe — never empty.
 *
 * No icons. The hairline below the active step is not drawn; the diagram is
 * intentionally just text + arrows + a stable description area.
 */
export function SceneProcess() {
  const [active, setActive] = useState(0);

  return (
    <Scene index={4} ariaLabel="How I work">
      <div className="flex w-full flex-col justify-center">
        <div className="px-6 sm:px-12 max-w-scene w-full">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-xs uppercase tracking-section text-subtle font-medium"
          >
            How I Work
          </p>

          {/* The diagram row */}
          <div
            data-reveal-line
            style={{ ["--i" as never]: 1 }}
            className="mt-12 sm:mt-16 flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 gap-y-3 text-lg sm:text-xl tracking-editorial"
          >
            {PROCESS_STEPS.map((step, i) => (
              <Fragment key={step.name}>
                {i > 0 && (
                  <span aria-hidden className="text-subtle/80 select-none">
                    →
                  </span>
                )}
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={active === i}
                  className={[
                    "transition-colors duration-180 ease-editorial",
                    active === i
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {step.name}
                </button>
              </Fragment>
            ))}
          </div>

          {/* Description — fixed position, crossfades on change */}
          <div
            data-reveal-line
            style={{ ["--i" as never]: 2 }}
            className="mt-9 sm:mt-10 pt-5 border-t border-border min-h-[64px]"
          >
            <p
              key={active}
              className="crossfade-enter text-base text-muted leading-[1.7] max-w-[600px]"
            >
              {PROCESS_STEPS[active].body}
            </p>
          </div>
        </div>
      </div>
    </Scene>
  );
}
