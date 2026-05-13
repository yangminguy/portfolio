import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Notes — Yang Wonmin" };

export default function NotesPage() {
  return (
    <SiteShell>
      <div className="pt-12 sm:pt-16">
        <p className="text-xs uppercase tracking-section text-subtle font-medium">
          Notes
        </p>
        <p className="mt-3 text-md text-foreground/90 max-w-[520px] leading-[1.55]">
          작업 중 남긴 짧은 기록. 곧 공개됩니다.
        </p>
      </div>
    </SiteShell>
  );
}
