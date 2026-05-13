import Link from "next/link";

/**
 * Quiet inline text link. Underline on hover only.
 */
export function TextLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "underline-offset-[4px] decoration-[1.5px] decoration-foreground/30 hover:underline transition-colors duration-180";
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
