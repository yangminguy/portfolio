import Link from "next/link";

type LinkItem = { label: string; href: string; external?: boolean };

const items: LinkItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Notes",    href: "/notes" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "mailto:hello@yangwonmin.com", external: true },
];

/**
 * Vertical list of primary navigation links on the homepage.
 * Subtle underline on hover. No CTA styling.
 */
export function PrimaryLinks() {
  return (
    <ul className="flex flex-col gap-1 text-base">
      {items.map((item) => {
        const inner = (
          <span className="inline-flex items-baseline gap-2 transition-colors duration-180 hover:text-foreground">
            <span className="border-b border-transparent hover:border-current">
              {item.label}
            </span>
          </span>
        );
        return (
          <li key={item.label} className="text-foreground/80">
            {item.external ? (
              <a href={item.href}>{inner}</a>
            ) : (
              <Link href={item.href}>{inner}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
