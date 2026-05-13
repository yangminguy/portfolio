import Link from "next/link";

/**
 * Minimal text navigation. No logo, no border, no sticky.
 * Left: wordmark linking home. Right: section links.
 */
export function Header() {
  return (
    <header className="flex items-baseline justify-between text-sm text-muted">
      <Link
        href="/"
        className="transition-colors duration-180 hover:text-foreground"
      >
        Yang Wonmin
      </Link>
      <nav className="flex gap-5 sm:gap-6">
        <Link
          href="/projects"
          className="transition-colors duration-180 hover:text-foreground"
        >
          Projects
        </Link>
        <Link
          href="/notes"
          className="transition-colors duration-180 hover:text-foreground"
        >
          Notes
        </Link>
        <Link
          href="/about"
          className="transition-colors duration-180 hover:text-foreground"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
