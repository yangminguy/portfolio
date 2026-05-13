import { Scene } from "@/components/deck/Scene";
import { PRINCIPLES } from "@/data/projects";

/**
 * Scene 06 — Principles
 *
 * Five short statements, presented at slide scale rather than as a footer
 * paragraph (as v1 did). One line per principle, each its own reveal-line.
 *
 * Navigated to as "Notes" in the header — until a real notes archive exists,
 * the principles serve as the "thinking" surface.
 */
export function ScenePrinciples() {
  return (
    <Scene index={5} ariaLabel="Principles">
      <div className="flex w-full flex-col justify-center">
        <div className="px-6 sm:px-12 max-w-prose">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-xs uppercase tracking-section text-subtle font-medium"
          >
            Principles
          </p>

          <ul className="mt-10 sm:mt-14 flex flex-col gap-3 sm:gap-4 text-lg sm:text-xl text-foreground/90 leading-[1.45] tracking-editorial">
            {PRINCIPLES.map((line, i) => (
              <li
                key={line}
                data-reveal-line
                style={{ ["--i" as never]: 1 + i }}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Scene>
  );
}
