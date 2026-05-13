import { Scene } from "@/components/deck/Scene";

/**
 * Scene 07 — Contact
 *
 * Closing slide. A large statement and an email link.
 * No "next" indicator — Scene 07 is the end.
 */
export function SceneContact() {
  return (
    <Scene index={6} ariaLabel="Contact">
      <div className="flex w-full flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 max-w-prose">
          <h2
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-4xl sm:text-5xl font-medium tracking-editorial text-foreground"
          >
            Let&apos;s talk.
          </h2>

          <a
            data-reveal-line
            style={{ ["--i" as never]: 1 }}
            href="mailto:yangminguy@gmail.com"
            className="mt-9 w-fit text-lg sm:text-xl text-foreground underline-offset-[6px] decoration-foreground/30 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
          >
            yangminguy@gmail.com
          </a>
        </div>

        <div className="px-6 sm:px-12 pb-12 sm:pb-16">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 2 }}
            className="text-2xs text-subtle tracking-[0.06em]"
          >
            Yang Wonmin · Seoul · 2026
          </p>
        </div>
      </div>
    </Scene>
  );
}
