import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "About — Yang Wonmin" };

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pt-12 sm:pt-16">
        <p className="text-xs uppercase tracking-section text-subtle font-medium">
          About
        </p>
        <p className="mt-3 text-md text-foreground/90 max-w-[520px] leading-[1.55]">
          짧은 자기 소개와 일하는 방식. 곧 공개됩니다.
        </p>
      </div>
    </SiteShell>
  );
}
