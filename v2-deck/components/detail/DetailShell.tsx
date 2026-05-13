import { DetailHeader } from "./DetailHeader";

/**
 * Detail-page outer shell. Narrow column, generous top/bottom rhythm.
 * Note: Unlike the deck root, this page uses normal document scrolling.
 * The globals.css rule `html { overflow: hidden }` would block that, so
 * the layout for /projects/* re-enables scroll on body via inline style.
 */
export function DetailShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-y-auto" style={{ height: "100dvh" }}>
      <div className="max-w-detail mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-24 sm:pb-32">
        <DetailHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
