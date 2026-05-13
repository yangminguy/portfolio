import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DetailShell } from "@/components/detail/DetailShell";
import { Section } from "@/components/detail/Section";
import { MetaBlock } from "@/components/detail/MetaBlock";
import { BackLink } from "@/components/detail/BackLink";
import {
  getProjectBySlug,
  projects,
  SECTION_LABELS,
  SECTION_ORDER,
} from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects
    .filter((p) => p.active && p.sections)
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not found — Yang Wonmin" };
  return {
    title: `${project.title} — Yang Wonmin`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project || !project.sections) notFound();

  return (
    <DetailShell>
      <div className="pt-8 sm:pt-12">
        <BackLink href="/#scene-04" label="Back to deck" />

        <header className="mt-10 sm:mt-12">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-editorial text-foreground">
            {project.title}
          </h1>
          <p className="mt-3 text-md text-foreground/85 max-w-[600px] leading-[1.55]">
            {project.summary}
          </p>
          <div className="mt-5">
            <MetaBlock project={project} />
          </div>
        </header>

        <hr className="my-10 sm:my-12" />

        <div className="flex flex-col gap-10 sm:gap-12">
          {SECTION_ORDER.map((key) => {
            const body = project.sections?.[key];
            if (!body) return null;
            return (
              <Section key={key} label={SECTION_LABELS[key]}>
                <p className="leading-[1.75]">{body}</p>
              </Section>
            );
          })}
        </div>

        <hr className="mt-16 mb-8" />
        <BackLink href="/#scene-04" label="Back to deck" />
      </div>
    </DetailShell>
  );
}
