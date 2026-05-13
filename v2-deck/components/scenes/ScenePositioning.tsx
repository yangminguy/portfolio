import { Scene } from "@/components/deck/Scene";
import { POSITIONING_KEYWORDS } from "@/data/projects";

/**
 * Scene 02 — Positioning
 *
 * Vertically-centered slide. Large English statement, a single muted Korean
 * subtitle, and three keywords as a horizontal row of small typography with
 * thin underlines.
 */
export function ScenePositioning() {
  return (
    <Scene index={1} ariaLabel="Positioning">
      <div className="flex w-full flex-col justify-center">
        <div className="px-6 sm:px-12 max-w-[760px]">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-editorial text-foreground">
            <span data-reveal-line style={{ ["--i" as never]: 0 }} className="block">
              I build systems
            </span>
            <span data-reveal-line style={{ ["--i" as never]: 1 }} className="block">
              for scattered work.
            </span>
          </h2>

          <p
            data-reveal-line
            style={{ ["--i" as never]: 3 }}
            className="mt-7 text-base text-muted max-w-[480px] leading-[1.7]"
          >
            흩어진 운영, 마케팅, 자동화 흐름을 반복 가능한 구조로 바꿉니다.
          </p>

          <ul
            data-reveal-line
            style={{ ["--i" as never]: 5 }}
            className="mt-14 sm:mt-16 flex flex-wrap gap-x-10 sm:gap-x-14 gap-y-5 text-sm text-foreground/80"
          >
            {POSITIONING_KEYWORDS.map((k) => (
              <li key={k} className="flex flex-col gap-1.5">
                <span>{k}</span>
                <span aria-hidden className="block h-px w-10 bg-foreground/20" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Scene>
  );
}
