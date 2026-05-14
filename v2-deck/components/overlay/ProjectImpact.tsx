import { PortfolioProject } from "@/data/projects";
import { MetricCards } from "./MetricCards";

interface ProjectImpactProps {
  data: PortfolioProject;
}

export function ProjectImpact({ data }: ProjectImpactProps) {
  const impact = data.impact;

  return (
    <div className="space-y-8">
      {/* Impact Metrics */}
      {impact.metrics && impact.metrics.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Impact Metrics
          </h3>
          <MetricCards metrics={impact.metrics} />
        </div>
      )}

      {/* Result Summary */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Result Summary
        </h3>
        <p className="text-base text-foreground leading-relaxed">
          {impact.result}
        </p>
      </div>

      {/* Learning */}
      <div className="bg-accent/5 border-l-4 border-accent rounded p-6">
        <h3 className="text-sm uppercase tracking-wide text-accent font-semibold mb-3">
          Key Learning
        </h3>
        <p className="text-base text-foreground italic leading-relaxed">
          {impact.learning}
        </p>
      </div>
    </div>
  );
}
