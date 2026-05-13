import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { ProjectIndex } from "@/components/ProjectIndex";

export const metadata: Metadata = {
  title: "Projects — Yang Wonmin",
  description:
    "A working index of operations, marketing, and AI-native systems.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <div className="pt-12 sm:pt-16">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-section text-subtle font-medium">
            Projects
          </p>
          <p className="mt-3 text-md text-foreground/90 max-w-[520px] leading-[1.55]">
            마케팅, 운영, AI 자동화로 만든 작업의 인덱스.
          </p>
        </header>

        <ProjectIndex />
      </div>
    </SiteShell>
  );
}
