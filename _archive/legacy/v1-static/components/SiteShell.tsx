import { Header } from "./Header";
import { Footer } from "./Footer";

type Width = "prose" | "detail";

/**
 * Outer page shell. Controls max content width, side padding, top/bottom
 * rhythm, and renders the global header + footer. Pages render their own
 * top spacing inside `children` to keep page-specific rhythm.
 */
export function SiteShell({
  children,
  width = "prose",
}: {
  children: React.ReactNode;
  width?: Width;
}) {
  const maxW = width === "detail" ? "max-w-detail" : "max-w-prose";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className={`${maxW} mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
