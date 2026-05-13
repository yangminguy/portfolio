import Link from "next/link";
import type { Project } from "@/data/projects";

/**
 * A single row in the projects index.
 *
 * Visual rules (per DESIGN.md):
 * - Row, not card. No background, no rounded corners.
 * - Title is medium weight, never oversized.
 * - Year is muted and right-aligned.
 * - Description sits below the title, muted.
 * - Hover: subtle title underline + arrow appears with 2–4px shift.
 *   Background tint is intentionally not used so it never reads as a card.
 *
 * Inactive rows render as a non-link with hover effects disabled — they
 * exist to show index density before their detail pages are written.
 */
export function ProjectRow({ project }: { project: Project }) {
  const { slug, title, year, summary, active } = project;

  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-6">
        <h3
          className={[
            "text-md font-medium tracking-editorial",
            active
              ? "text-foreground group-hover:[&_.row-title]:underline"
              : "text-foreground/85",
          ].join(" ")}
        >
          <span className="row-title underline-offset-[5px] decoration-[1.5px] decoration-foreground/60">
            {title}
          </span>
          {active && (
            <span
              aria-hidden
              className="ml-1.5 inline-block opacity-0 -translate-x-1 text-muted transition-all duration-200 ease-out group-hover:opacity-70 group-hover:translate-x-0"
            >
              →
            </span>
          )}
        </h3>
        <span className="shrink-0 text-sm text-subtle tabular-nums leading-snug pt-[2px]">
          {year}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted leading-[1.6] max-w-[520px]">
        {summary}
      </p>
    </>
  );

  const rowCls =
    "group block py-5 sm:py-6 border-t border-border last:border-b transition-colors duration-180";

  if (!active) {
    return <div className={rowCls + " cursor-default"}>{inner}</div>;
  }

  return (
    <Link href={`/projects/${slug}`} className={rowCls}>
      {inner}
    </Link>
  );
}
