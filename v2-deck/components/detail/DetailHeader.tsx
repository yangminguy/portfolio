import Link from "next/link";

/**
 * Quiet text nav reused on the detail page. Mirrors the deck header chrome
 * but is rendered inline (not fixed) because the detail page is a normal
 * scrolling document, not a snap deck.
 */
export function DetailHeader() {
  const linkCls =
    "transition-colors duration-180 ease-editorial hover:text-foreground";
  return (
    <header className="flex items-baseline justify-between text-sm text-muted">
      <Link href="/" className={linkCls}>Yang Wonmin</Link>
      <nav className="flex gap-5 sm:gap-7">
        <Link href="/#scene-03" className={linkCls}>Projects</Link>
        <Link href="/#scene-06" className={linkCls}>Notes</Link>
        <Link href="/#scene-02" className={linkCls}>About</Link>
      </nav>
    </header>
  );
}
