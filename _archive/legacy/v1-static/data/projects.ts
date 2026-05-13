/**
 * Project data model.
 *
 * Designed so the UI can stay simple — if a section is missing, the page
 * omits it rather than showing an empty placeholder.
 */

export type ProjectSectionKey =
  | "context"
  | "problem"
  | "system"
  | "execution"
  | "impact"
  | "artifacts"
  | "reflection";

export type Project = {
  slug: string;
  title: string;
  year: string;
  /** One-line description shown in the projects index and at the top of the detail page. */
  summary: string;
  role?: string;
  domain?: string[];
  tools?: string[];
  /** When false, the row is rendered as a non-link placeholder in the index. */
  active?: boolean;
  sections?: Partial<Record<ProjectSectionKey, string>>;
};

/**
 * Section label copy. Single source of truth so labels stay consistent
 * across the data layer and the UI.
 */
export const SECTION_LABELS: Record<ProjectSectionKey, string> = {
  context:    "Context",
  problem:    "Problem",
  system:     "System",
  execution:  "Execution",
  impact:     "Impact",
  artifacts:  "Artifacts",
  reflection: "Reflection",
};

export const SECTION_ORDER: ProjectSectionKey[] = [
  "context",
  "problem",
  "system",
  "execution",
  "impact",
  "artifacts",
  "reflection",
];

export const projects: Project[] = [
  {
    slug: "campit-influencer-marketing-system",
    title: "Campit Influencer Marketing System",
    year: "2024",
    summary: "Creator-driven operating system for campsite growth.",
    role: "PM · Marketing Operations · No-code Automation",
    domain: ["Camping Platform", "Influencer Marketing"],
    tools: ["Notion", "Make", "Slack", "Google Sheets"],
    active: true,
    sections: {
      context:
        "캠핑장 운영자들은 인플루언서와의 협업을 시도했지만, 캠페인의 흐름과 결과가 도구마다 흩어져 있어 반복 가능한 운영으로 이어지지 못했다. 운영팀은 매 시즌 새 캠페인을 처음부터 다시 세팅해야 했다.",
      problem:
        "섭외, 브리프, 콘텐츠 검수, 정산, 성과 측정이 각각 다른 채널에서 진행되었다. 캠페인이 끝나면 어디서 무엇이 작동했는지 다시 추적하기 어려웠고, 다음 캠페인은 학습 없이 시작되었다.",
      system:
        "인플루언서 풀, 캠페인 트래커, 콘텐츠 검수, 성과 리포트를 하나의 Notion 워크스페이스로 연결했다. 반복 작업은 Make와 Slack 알림으로 자동화해, PM 한 명이 동시에 여러 캠페인을 관리할 수 있는 구조를 만들었다.",
      execution:
        "첫 분기 동안 6개 캠프장과 12명의 크리에이터가 같은 시스템 안에서 협업했다. 브리프 템플릿, 컨택 시퀀스, 정산 체크리스트를 표준화해 다음 캠페인부터 운영 부담을 줄였다.",
      impact:
        "캠페인 준비 시간이 평균적으로 단축되었고, 콘텐츠 게시 누락이 사라졌다. 캠프장별 성과 비교가 가능해지면서, 무엇이 예약 전환에 영향을 주는지 가설을 검증할 수 있는 기반이 생겼다.",
      artifacts:
        "캠페인 트래커 · 크리에이터 풀 DB · 브리프 템플릿 · 정산 체크리스트 · 캠페인 후 리포트 포맷.",
      reflection:
        "마케팅의 결과보다 운영 구조가 먼저 만들어져야 결과가 반복된다. 이 프로젝트는 그 사실을 가장 짧은 사이클로 확인해 준 작업이었다.",
    },
  },
  {
    slug: "portfolio-evidence-mapper",
    title: "Portfolio Evidence Mapper",
    year: "2026",
    summary:
      "A Notion-based evidence pipeline for turning scattered work into portfolio-ready records.",
    active: false,
  },
  {
    slug: "plays-lounge-popup-strategy",
    title: "Plays Lounge Pop-up Strategy",
    year: "2025",
    summary:
      "Offline brand experience designed around influencer IP, family space, and fandom conversion.",
    active: false,
  },
  {
    slug: "gugok-dakgalbi-brand-launch",
    title: "Gugok Dakgalbi Brand Launch",
    year: "2025",
    summary:
      "Retro F&B brand system inspired by Gangchon memories and local nostalgia.",
    active: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
