import Link from "next/link";
import { Scene } from "@/components/deck/Scene";
import { getProjectBySlug } from "@/data/projects";

/**
 * Scene 04 — Selected Project
 *
 * Featured case slide. This version uses project data instead of hardcoded
 * title/meta, so the featured project can be changed in one place: projects.ts.
 */
export function SceneFeaturedProject() {
  const project = getProjectBySlug("campit-influencer-marketing-system");
  if (!project || !project.featured) return null;

  const f = project.featured;
  const blocks: Array<[label: string, body: string]> = [
    ["Problem", f.problem],
    ["System", f.system],
    ["Result", f.result],
  ];

  return (
    <Scene index={3} ariaLabel="Featured project">
      <div className="flex w-full flex-col justify-center">
        <div className="px-6 sm:px-12 max-w-wide w-full">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-xs uppercase tracking-section text-subtle font-medium"
          >
            Featured
          </p>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div className="flex flex-col">
              <h2
                data-reveal-line
                style={{ ["--i" as never]: 1 }}
                className="text-2xl sm:text-3xl font-medium tracking-editorial leading-[1.2] text-foreground"
              >
                {project.title}
              </h2>

              <span
                aria-hidden
                data-reveal-line
                style={{ ["--i" as never]: 2 }}
                className="mt-5 block h-px w-8 bg-foreground/25"
              />

              <dl
                data-reveal-line
                style={{ ["--i" as never]: 3 }}
                className="mt-5 text-sm text-muted leading-[1.85]"
              >
                <div>{project.year}</div>
                {project.role && <div>{project.role}</div>}
                {project.domain?.slice(0, 2).map((item) => <div key={item}>{item}</div>)}
              </dl>
            </div>

            <div className="flex flex-col gap-7 sm:gap-8">
              {blocks.map(([label, body], i) => (
                <div key={label} data-reveal-line style={{ ["--i" as never]: 4 + i }}>
                  <h3 className="text-xs uppercase tracking-section text-subtle font-medium">
                    {label}
                  </h3>
                  <p className="mt-2.5 text-base text-foreground/90 leading-[1.7] max-w-[520px]">
                    {body}
                  </p>
                </div>
              ))}

              <Link
                data-reveal-line
                style={{ ["--i" as never]: 7 }}
                href={`/projects/${project.slug}`}
                className="group mt-2 inline-flex items-baseline gap-1.5 text-sm text-muted transition-colors duration-180 ease-editorial hover:text-foreground"
              >
                <span className="border-b border-transparent group-hover:border-current">
                  View detail
                </span>
                <span aria-hidden className="inline-block transition-transform duration-200 ease-editorial group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
