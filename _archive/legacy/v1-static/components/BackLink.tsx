import Link from "next/link";

/**
 * Small muted back-link with an arrow that drifts on hover.
 * Used at the top and bottom of project detail pages.
 */
export function BackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-baseline gap-1.5 text-sm text-muted transition-colors duration-180 hover:text-foreground"
    >
      <span
        aria-hidden
        className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
