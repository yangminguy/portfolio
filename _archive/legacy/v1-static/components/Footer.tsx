/**
 * Quiet single-line footer. Year + a couple of muted text links.
 * No socials grid, no large links list.
 */
export function Footer() {
  return (
    <footer className="mt-24 sm:mt-32 pt-6 text-xs text-subtle">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span>© 2026 Yang Wonmin</span>
        <a
          href="mailto:hello@yangwonmin.com"
          className="transition-colors duration-180 hover:text-foreground"
        >
          Email
        </a>
        <a
          href="https://github.com/"
          className="transition-colors duration-180 hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          className="transition-colors duration-180 hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
