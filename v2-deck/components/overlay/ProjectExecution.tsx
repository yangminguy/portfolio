"use client";

import { useState } from "react";
import { PortfolioProject } from "@/data/projects";

interface ProjectExecutionProps {
  data: PortfolioProject;
}

export function ProjectExecution({ data }: ProjectExecutionProps) {
  const execution = data.execution;
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <p className="text-base text-muted">
        Grouped execution items across five operational areas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {execution.groups.map((group, groupIdx) => {
          const isExpanded =
            expandedGroup === groupIdx || group.items.length <= 3;
          const visibleItems = isExpanded
            ? group.items
            : group.items.slice(0, 3);
          const hiddenCount = group.items.length - visibleItems.length;

          return (
            <div
              key={groupIdx}
              className="border border-border rounded p-6 bg-white hover:border-accent/30 transition-colors"
            >
              <h3 className="text-sm uppercase tracking-wide text-accent font-semibold mb-4">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {visibleItems.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-foreground flex gap-2">
                    <span className="text-muted flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {hiddenCount > 0 && (
                <button
                  onClick={() =>
                    setExpandedGroup(expandedGroup === groupIdx ? null : groupIdx)
                  }
                  className="text-xs text-accent font-medium mt-3 hover:text-accent/80 transition-colors"
                >
                  Show {hiddenCount} more →
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
