"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ProjectSnapshot } from "./ProjectSnapshot";
import { ProjectProblem } from "./ProjectProblem";
import { ProjectSystem } from "./ProjectSystem";
import { ProjectExecution } from "./ProjectExecution";
import { ProjectImpact } from "./ProjectImpact";

interface ProjectDashboardOverlayProps {
  projectSlug: string;
  onClose: () => void;
}

type SectionTab = "snapshot" | "problem" | "system" | "execution" | "impact";

const SECTIONS: { id: SectionTab; label: string }[] = [
  { id: "snapshot", label: "Snapshot" },
  { id: "problem", label: "Problem" },
  { id: "system", label: "System" },
  { id: "execution", label: "Execution" },
  { id: "impact", label: "Impact" },
];

export function ProjectDashboardOverlay({
  projectSlug,
  onClose,
}: ProjectDashboardOverlayProps) {
  const [activeTab, setActiveTab] = useState<SectionTab>("snapshot");

  const project = projects.find((p) => p.slug === projectSlug);
  const dashboardData = project?.dashboardData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeTab);
        if (currentIndex < SECTIONS.length - 1) {
          setActiveTab(SECTIONS[currentIndex + 1].id);
        }
      }
      if (e.key === "ArrowLeft") {
        const currentIndex = SECTIONS.findIndex((s) => s.id === activeTab);
        if (currentIndex > 0) {
          setActiveTab(SECTIONS[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, onClose]);

  if (!project || !dashboardData) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-lg shadow-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-border">
          <h1 className="text-2xl font-semibold text-foreground">
            {dashboardData.title}
          </h1>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-muted hover:text-foreground transition-colors"
            aria-label="Close overlay"
          >
            ✕
          </button>
        </div>

        {/* Tabs + Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Tab Navigation (Desktop) */}
          <div className="hidden sm:flex flex-col w-40 border-r border-border bg-white">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={[
                  "px-4 py-4 text-left text-sm font-medium transition-all duration-200",
                  "border-l-2 -ml-px",
                  activeTab === section.id
                    ? "border-l-accent bg-accent/5 text-accent"
                    : "border-l-transparent text-muted hover:text-foreground hover:bg-foreground/5",
                ].join(" ")}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Tab Navigation (Top) */}
          <div className="sm:hidden flex w-full overflow-x-auto border-b border-border">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={[
                  "px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  "border-b-2",
                  activeTab === section.id
                    ? "border-b-accent text-accent"
                    : "border-b-transparent text-muted",
                ].join(" ")}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              {activeTab === "snapshot" && (
                <ProjectSnapshot data={dashboardData} />
              )}
              {activeTab === "problem" && (
                <ProjectProblem data={dashboardData} />
              )}
              {activeTab === "system" && (
                <ProjectSystem data={dashboardData} />
              )}
              {activeTab === "execution" && (
                <ProjectExecution data={dashboardData} />
              )}
              {activeTab === "impact" && (
                <ProjectImpact data={dashboardData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
