import { ProjectMetric } from "@/data/projects";

interface MetricCardsProps {
  metrics: ProjectMetric[];
  className?: string;
}

export function MetricCards({ metrics, className = "" }: MetricCardsProps) {
  return (
    <div
      className={[
        "grid gap-6",
        "grid-cols-2 sm:grid-cols-4",
        className,
      ].join(" ")}
    >
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-white border border-border rounded p-6">
          <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {metric.value}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-wide text-muted font-medium">
            {metric.label}
          </div>
          {metric.description && (
            <div className="text-xs text-subtle mt-2">{metric.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
