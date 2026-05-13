import { Scene } from "@/components/deck/Scene";

/**
 * Scene 01 — Identity
 *
 * Composition: nearly empty. A single Korean identity statement anchored at
 * the bottom-left axis with generous bottom margin. A tiny dash + signature
 * line sits below the statement. The "Next ↓" hint (rendered globally) lives
 * in the bottom-right of the viewport.
 *
 * Each line of the statement is its own reveal-line so the entrance staggers
 * naturally from top to bottom.
 */
export function SceneIdentity() {
  return (
    <Scene index={0} ariaLabel="Identity">
      <div className="flex w-full flex-col">
        {/* Top spacer — pushes content to the bottom axis */}
        <div className="flex-1" aria-hidden />

        <div className="px-6 sm:px-12 pb-24 sm:pb-32 max-w-[720px]">
          <div
            className="text-xl sm:text-2xl leading-[1.4] tracking-editorial text-foreground"
          >
            <p data-reveal-line style={{ ["--i" as never]: 0 }}>
              양원민은 마케팅, 운영, AI 자동화를 연결해
            </p>
            <p data-reveal-line style={{ ["--i" as never]: 1 }}>
              흩어진 일을 반복 가능한 시스템으로
            </p>
            <p data-reveal-line style={{ ["--i" as never]: 2 }}>
              만드는 프로젝트 매니저입니다.
            </p>
          </div>

          <div
            data-reveal-line
            style={{ ["--i" as never]: 4 }}
            className="mt-10 flex items-center gap-3 text-2xs text-subtle"
          >
            <span aria-hidden className="block h-px w-8 bg-foreground/25" />
            <span className="tracking-[0.06em]">Project Operator · Seoul</span>
          </div>
        </div>
      </div>
    </Scene>
  );
}
