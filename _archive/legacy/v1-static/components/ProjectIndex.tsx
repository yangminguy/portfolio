import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";

/**
 * The projects index. A list of rows separated by hairline dividers.
 * No grid, no cards, no thumbnails. Designed to be scannable in ~30 sec.
 */
export function ProjectIndex() {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </div>
  );
}
