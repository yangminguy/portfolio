import { PortfolioProject } from "@/data/projects";

interface ProjectSystemProps {
  data: PortfolioProject;
}

export function ProjectSystem({ data }: ProjectSystemProps) {
  const system = data.system;

  return (
    <div className="space-y-8">
      {/* Approach */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Strategic Approach
        </h3>
        <p className="text-base text-foreground leading-relaxed">
          {system.approach}
        </p>
      </div>

      {/* System Flow */}
      {system.flow && system.flow.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            System Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {system.flow.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-muted">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input → Process → Output → Impact */}
      {system.inputProcessOutputImpact && (
        <div className="bg-foreground/5 rounded p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            System Model
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Input */}
            <div>
              <h4 className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
                Input
              </h4>
              <ul className="space-y-2">
                {system.inputProcessOutputImpact.input?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="text-sm text-foreground flex gap-2">
                      <span className="text-accent flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
                Process
              </h4>
              <ul className="space-y-2">
                {system.inputProcessOutputImpact.process?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="text-sm text-foreground flex gap-2">
                      <span className="text-accent flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Output */}
            <div>
              <h4 className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
                Output
              </h4>
              <ul className="space-y-2">
                {system.inputProcessOutputImpact.output?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="text-sm text-foreground flex gap-2">
                      <span className="text-accent flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
                Impact
              </h4>
              <ul className="space-y-2">
                {system.inputProcessOutputImpact.impact?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="text-sm text-foreground flex gap-2">
                      <span className="text-accent flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Content Strategy */}
      {system.contentStrategy && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Content Strategy
          </h3>
          <p className="text-base text-foreground leading-relaxed">
            {system.contentStrategy}
          </p>
        </div>
      )}
    </div>
  );
}
