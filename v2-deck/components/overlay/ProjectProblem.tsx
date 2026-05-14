import { PortfolioProject } from "@/data/projects";

interface ProjectProblemProps {
  data: PortfolioProject;
}

export function ProjectProblem({ data }: ProjectProblemProps) {
  const problem = data.problem;

  return (
    <div className="space-y-8">
      {/* Context */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Business Context
        </h3>
        <p className="text-base text-foreground leading-relaxed">
          {problem.context}
        </p>
      </div>

      {/* Before State */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Before</h3>
        <ul className="space-y-2">
          {problem.before.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Core Problem */}
      <div className="border-l-4 border-accent bg-accent/5 p-4">
        <h3 className="text-sm uppercase tracking-wide text-muted font-medium mb-2">
          Core Problem
        </h3>
        <p className="text-base font-medium text-foreground">
          {problem.coreProblem}
        </p>
      </div>

      {/* Why It Matters */}
      {problem.whyItMatters && (
        <div>
          <h3 className="text-sm uppercase tracking-wide text-muted font-medium mb-2">
            Why It Matters
          </h3>
          <p className="text-base text-muted leading-relaxed">
            {problem.whyItMatters}
          </p>
        </div>
      )}

      {/* Before → Problem → Required System Flow */}
      <div className="bg-foreground/5 rounded p-6">
        <h3 className="text-sm uppercase tracking-wide text-muted font-medium mb-6">
          Problem Flow
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Before */}
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wide text-muted font-medium mb-2">
              Before State
            </div>
            <div className="p-3 bg-white border border-border rounded text-sm text-foreground">
              Scattered influencer<br />partnerships, manual<br />coordination
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex text-2xl text-muted">→</div>
          <div className="sm:hidden text-sm text-muted text-center w-full">↓</div>

          {/* Core Problem */}
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wide text-accent font-medium mb-2">
              Problem
            </div>
            <div className="p-3 bg-accent/10 border border-accent rounded text-sm font-medium text-accent">
              No structured<br />matching or content<br />optimization
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex text-2xl text-muted">→</div>
          <div className="sm:hidden text-sm text-muted text-center w-full">↓</div>

          {/* Solution */}
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wide text-muted font-medium mb-2">
              Required System
            </div>
            <div className="p-3 bg-white border border-border rounded text-sm text-foreground">
              Automated pool<br />matching, content<br />framework, reporting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
