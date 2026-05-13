import type { Project } from "@/data/projects";

export function MetaBlock({ project }: { project: Project }) {
  const parts: string[] = [project.year];
  if (project.role) parts.push(project.role);
  if (project.domain?.length) parts.push(project.domain.join(", "));
  if (project.tools?.length) parts.push(project.tools.join(", "));

  return (
    <dl className="text-sm text-muted leading-[1.65]">
      <dt className="sr-only">Project meta</dt>
      <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        {parts.map((part, i) => (
          <span key={i} className="flex items-baseline gap-2">
            {i > 0 && (
              <span aria-hidden className="text-subtle">·</span>
            )}
            <span>{part}</span>
          </span>
        ))}
      </dd>
    </dl>
  );
}
