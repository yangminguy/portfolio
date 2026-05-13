import Link from "next/link";

/**
 * Detail-page back link. Returns to the deck and lands on Scene 04
 * (the Featured slide) so the visitor's mental position is preserved.
 */
export function BackLink({
  href = "/#scene-04",
  label = "Featured",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-baseline gap-1.5 text-sm text-muted transition-colors duration-180 ease-editorial hover:text-foreground"
    >
      <span
        aria-hidden
        className="inline-block transition-transform duration-200 ease-editorial group-hover:-translate-x-0.5"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
