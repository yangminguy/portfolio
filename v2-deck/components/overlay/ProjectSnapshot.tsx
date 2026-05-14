import { PortfolioProject } from "@/data/projects";
import { MetricCards } from "./MetricCards";

interface ProjectSnapshotProps {
  data: PortfolioProject;
}

export function ProjectSnapshot({ data }: ProjectSnapshotProps) {
  return (
    <div className="space-y-8">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">
          {data.title}
        </h2>
        <p className="text-lg sm:text-xl text-muted">{data.oneLiner}</p>
      </div>

      {/* Metadata Row */}
      <div className="flex flex-wrap gap-6 text-sm">
        {data.period && (
          <div>
            <div className="uppercase text-xs tracking-wide text-muted font-medium mb-1">
              Period
            </div>
            <div className="text-foreground">{data.period}</div>
          </div>
        )}
        {data.role && (
          <div>
            <div className="uppercase text-xs tracking-wide text-muted font-medium mb-1">
              Role
            </div>
            <div className="text-foreground">{data.role}</div>
          </div>
        )}
        {data.category && (
          <div>
            <div className="uppercase text-xs tracking-wide text-muted font-medium mb-1">
              Category
            </div>
            <div className="text-foreground">{data.category}</div>
          </div>
        )}
      </div>

      {/* Metric Cards */}
      <div>
        <div className="text-xs uppercase tracking-wide text-muted font-medium mb-4">
          Key Metrics
        </div>
        <MetricCards metrics={data.metrics} />
      </div>

      {/* Keywords */}
      {data.keywords && data.keywords.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
            Keywords
          </div>
          <div className="flex flex-wrap gap-2">
            {data.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-foreground/10 rounded text-sm text-foreground"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
