"use client";

import { useState } from "react";
import Link from "next/link";
import { Scene } from "@/components/deck/Scene";
import { projects } from "@/data/projects";

/**
 * Scene 04 — Projects Index
 *
 * An agenda — not a list of cards. Four rows: `NN  Title  Year`.
 *
 * A fixed description box sits below the rows. Hovering or focusing any row
 * crossfades the description in that box. The default state (no hover) shows
 * the first project's description so the area is never empty.
 *
 * The description box has a stable min-height so the layout never jumps.
 */
export function SceneProjectsIndex() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <Scene index={3} ariaLabel="Projects">
      <div className="flex w-full flex-col justify-center">
        <div className="px-6 sm:px-12 max-w-[820px] w-full">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-xs uppercase tracking-section text-subtle font-medium"
          >
            Projects
          </p>

          <ul className="mt-10 sm:mt-14 flex flex-col">
            {projects.map((p, i) => {
              const isActiveHover = active === i;
              const RowInner = (
                <div className="grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 sm:gap-6 py-3 sm:py-4">
                  <span className="text-sm text-subtle tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={[
                      "text-lg sm:text-xl font-medium tracking-editorial",
                      "transition-colors duration-180 ease-editorial",
                      isActiveHover ? "text-foreground" : "text-foreground/75",
                    ].join(" ")}
                  >
                    <span>{p.koreanTitle ?? p.title}</span>
                    {p.active && (
                      <span
                        aria-hidden
                        className={[
                          "ml-2 inline-block text-muted",
                          "transition-all duration-200 ease-editorial",
                          isActiveHover
                            ? "opacity-70 translate-x-0"
                            : "opacity-0 -translate-x-1",
                        ].join(" ")}
                      >
                        →
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-subtle tabular-nums">{p.year}</span>
                </div>
              );

              return (
                <li
                  key={p.slug}
                  data-reveal-line
                  style={{ ["--i" as never]: 1 + i }}
                  className="border-t border-border last:border-b hover:border-accent/30"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  {p.active ? (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="block"
                    >
                      {RowInner}
                    </Link>
                  ) : (
                    <div
                      tabIndex={0}
                      className="block cursor-default outline-none"
                    >
                      {RowInner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Fixed-position description area — text crossfades, position holds. */}
          <div
            data-reveal-line
            style={{ ["--i" as never]: 1 + projects.length }}
            className="mt-10 sm:mt-14 min-h-[78px]"
          >
            <div key={current.slug} className="crossfade-enter">
              <p className="text-sm text-muted leading-[1.7] max-w-[600px]">
                {current.summary}
              </p>
              {current.role && (
                <p className="mt-1 text-2xs text-subtle">
                  {current.role}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
