/**
 * Project data + supporting deck content.
 *
 * Content MVP v1:
 * - v2 horizontal deck is the final website standard.
 * - v1-static is intentionally removed from the delivery package.
 * - Only publish compressed website copy here; keep evidence notes in /content/raw.
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
  koreanTitle?: string;
  year: string;
  summary: string;
  role?: string;
  domain?: string[];
  tools?: string[];
  /** When false, rendered as a non-link placeholder in the projects scene. */
  active?: boolean;
  sections?: Partial<Record<ProjectSectionKey, string>>;
  /** Featured-scene short copy. Distinct from full sections used on detail pages. */
  featured?: {
    problem: string;
    system: string;
    result: string;
  };
};

export const SECTION_LABELS: Record<ProjectSectionKey, string> = {
  context: "Context",
  problem: "Problem",
  system: "System",
  execution: "Execution",
  impact: "Impact",
  artifacts: "Artifacts",
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
    koreanTitle: "인플루언서 마케팅 시스템 구축",
    year: "2024",
    summary:
      "캠핏의 인플루언서 협찬 운영을 등급화, 매칭, 개인화 페이지, 리포팅 자동화까지 연결한 반복 가능한 커머스 운영 시스템으로 재설계했습니다.",
    role: "Zero-to-one planning · Operations design · Execution",
    domain: ["Influencer Marketing", "Commerce Operations", "Partnership Ops"],
    tools: ["FGI", "Personalized Page", "Reporting Automation", "Campaign Guidelines"],
    active: true,
    featured: {
      problem:
        "협찬 대상 선정, 콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션, 성과 확인이 개별 건마다 흩어져 반복 운영과 확장이 어려웠다.",
      system:
        "인플루언서 등급화, 협찬 조건, 셀러 매칭, 개인화 페이지, 리포팅 자동화를 하나의 운영 흐름으로 연결했다.",
      result:
        "개별 협찬이 아닌 반복 가능한 인플루언서 커머스 운영 구조를 만들고, 캠핑장 중심 협찬을 글램핑·카라반·펜션 영역까지 확장했다.",
    },
    sections: {
      context:
        "캠핏은 인플루언서와 협업해 캠핑장과 커머스 상품을 소개하고 있었지만, 운영 방식은 개별 협찬 건 중심에 가까웠습니다. 협찬 대상 선정, 콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션, 성과 확인이 하나의 흐름으로 연결되지 않아 반복 운영과 확장에 한계가 있었습니다.",
      problem:
        "단순 협찬 방식만으로는 인플루언서별 영향력, 채널, 선호 협찬 방식, 콘텐츠 반응을 일관되게 관리하기 어려웠습니다. 협찬사 입장에서도 어떤 인플루언서와 어떤 조건으로 협업해야 하는지 판단할 기준이 부족했고, 운영팀은 링크 전달, 리포트 작성, 월말 정산 같은 후속 작업을 수작업으로 처리해야 했습니다.",
      system:
        "인플루언서 협찬 운영을 인플루언서, 셀러, 캠지기, 내부 운영팀의 흐름으로 나누어 다시 설계했습니다. FGI를 통해 유료 협찬, RS 협찬, 구독자 이벤트, 가이드라인, 선호 브랜드, 개인화 페이지에 대한 반응을 수집했고, 이를 바탕으로 등급화 기준, 협찬 조건, 셀러 매칭, 개인화 페이지, 리포팅 자동화를 하나의 운영 흐름으로 연결했습니다.",
      execution:
        "초기 문제 정의부터 운영 설계와 실행 구축까지 단독으로 담당했습니다. 인플루언서 등급화 기준과 협찬 가이드라인을 정리했고, 셀러가 인플루언서를 선택하고 조건을 제안할 수 있는 매칭 흐름을 설계했습니다. 협찬 제안서를 작성해 발송했고, 개인화 페이지를 실제 운영 흐름에 연결했으며, 콘텐츠 업로드 이후 협찬사와 캠지기에게 전달되는 리포팅 자동화 구조를 만들었습니다.",
      impact:
        "이 프로젝트의 핵심 성과는 단일 캠페인의 수치보다 반복 가능한 운영 구조입니다. 흩어져 있던 협찬 운영을 등급화, 매칭, 개인화 페이지, 리포팅으로 연결해 실행 가능한 시스템으로 만들었고, 기존 캠핑장 중심의 협찬 범위를 글램핑, 카라반, 펜션 영역까지 확장했습니다.",
      artifacts:
        "인플루언서 등급화 기준 · 협찬 가이드라인 · 인플루언서 FGI 기록 · 셀러 협찬 제안서 · 개인화 페이지 운영 흐름 · 리포팅 자동화 구조 · 글램핑/카라반/펜션 확장 협찬 안내 흐름.",
      reflection:
        "이 작업은 마케팅 캠페인을 한 번의 실행으로 끝내지 않고, 반복 가능한 운영 시스템으로 바꾸는 프로젝트였습니다. 전략 기획과 현장 운영 사이의 간극을 직접 다루며, 다양한 이해관계자의 요구를 하나의 흐름 안에 배치하는 방식으로 Zero to One 운영 설계 역량을 보여줍니다.",
    },
  },
  {
    slug: "campit-superfan",
    title: "Campit Superfan",
    koreanTitle: "슈퍼팬",
    year: "2024",
    summary:
      "100만 MAU 캠핑 앱에서 고객을 단순 이용자가 아니라 함께 브랜드 경험을 만드는 팬덤으로 전환한 CRM/커뮤니티 운영 프로젝트입니다.",
    role: "Zero-to-one planning · Fan CRM · Community Operations",
    domain: ["Fan Community", "CRM", "Community Operations"],
    tools: ["Forms", "Coupons", "Customer FGI", "Report Template"],
    active: true,
    sections: {
      context:
        "캠핏은 100만 MAU를 보유한 캠핑 앱이었지만, 앱과 고객이 지속적으로 소통하는 팬덤형 접점은 새롭게 만들어야 했습니다. 슈퍼팬은 캠핑을 좋아하는 고객을 단순 이용자가 아니라 캠핏과 함께 콘텐츠를 만들고 캠핑장 경험을 확산하는 팬덤으로 바라본 프로젝트였습니다.",
      problem:
        "체험단 운영은 신청, 취소, 쿠폰 발급, 후기 회수, 캠핑장 커뮤니케이션이 분산되기 쉽습니다. 무료 이용 인원이 한 번에 몰리면 캠핑장 운영에 혼란이 생기고, 쿠폰 사용률, 취소/미사용, 동의서 이탈, 후기 품질 관리 같은 문제가 반복됩니다. 캠핏에는 고객의 진정성 있는 경험을 다시 캠핑장과 브랜드에 전달하는 구조가 필요했습니다.",
      system:
        "슈퍼팬을 단순 이벤트가 아니라 팬덤 기반 운영 시스템으로 설계했습니다. 고객 모집, 신청/취소, 쿠폰 발급, 캠핑장 리스트 업데이트, 콘텐츠 저장소, 후기 리포트, 가이드, 대본, 2기 운영 정책까지 하나의 루틴으로 묶었습니다. 포토파트너는 별도 프로젝트가 아니라 사진 콘텐츠와 캠핑장 운영 흐름을 보강하는 하위 루틴으로 정리했습니다.",
      execution:
        "기획부터 운영까지 Zero to One으로 만들었습니다. 신청 링크, 취소 링크, 쿠폰 발급, 캠핑장 리스트 업데이트 루틴을 설계했고, 고객 FGI와 후기/사진 분류를 통해 팬덤을 이해하는 구조를 만들었습니다. 1기 운영 과정에서 확인된 문제를 바탕으로 2기 모집, 약관, 신청/취소 폼, 가이드, 콘텐츠 저장소를 정비했습니다.",
      impact:
        "슈퍼팬은 캠핏이 고객과 지속적으로 소통하는 팬덤 접점을 만든 사례입니다. 고객의 후기와 사진은 캠핑장 리포트와 콘텐츠 자산으로 활용될 수 있었고, 캠핏은 팬덤 기반 체험단과 FGI를 통해 고객 이해도를 높일 수 있었습니다. 초기 온보딩 캠핑장에는 후기와 콘텐츠를 통해 빠르게 추진력을 만들 수 있는 운영 장치가 되었습니다.",
      artifacts:
        "신청 링크 · 취소 링크 · 쿠폰 발급 루틴 · 캠핑장 리스트 업데이트 루틴 · 콘텐츠 저장소 · 슈퍼팬 리포트 템플릿 · 2기 신청/취소 폼 · 약관 · 가이드 · 포토파트너 하위 운영 루틴.",
      reflection:
        "슈퍼팬은 앱이 고객을 트래픽이나 예약자로만 보지 않고, 함께 브랜드 경험을 만드는 팬덤으로 전환한 프로젝트였습니다. 고객 경험, 캠핑장 운영, 콘텐츠, 리포트, 브랜드 협업 가능성을 하나의 루틴 안에 묶었다는 점에서 CRM과 커뮤니티 운영이 만나는 사례로 정리할 수 있습니다.",
    },
  },
  {
    slug: "portfolio-evidence-mapper",
    title: "Portfolio Evidence Mapper",
    koreanTitle: "포트폴리오 근거 구조화 시스템",
    year: "2026",
    summary:
      "A Notion-based evidence pipeline for turning scattered work into portfolio-ready records.",
    role: "Personal · Knowledge Ops",
    active: false,
  },
  {
    slug: "plays-lounge-popup-strategy",
    title: "Plays Lounge Pop-up Strategy",
    koreanTitle: "플레이즈 라운지 팝업 전략",
    year: "2025",
    summary:
      "Offline brand experience designed around influencer IP, family space, and fandom conversion.",
    role: "Strategy · Brand Experience",
    active: false,
  },
  {
    slug: "gugok-dakgalbi-brand-launch",
    title: "Gugok Dakgalbi Brand Launch",
    koreanTitle: "구곡 닭갈비 브랜드 런칭",
    year: "2025",
    summary: "Retro F&B brand system inspired by Gangchon memories and local nostalgia.",
    role: "Brand · Identity",
    active: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* ---------------------------------------------------------------
 * Scene 05 — How I Work
 * --------------------------------------------------------------- */

export type ProcessStep = { name: string; body: string };

export const PROCESS_STEPS: ProcessStep[] = [
  { name: "Observe", body: "관찰. 흩어진 일이 어디서 반복되는지 본다." },
  { name: "Structure", body: "구조화. 반복 가능한 패턴으로 정리한다." },
  { name: "Automate", body: "자동화. 사람의 손에서 떼어낸다." },
  { name: "Measure", body: "측정. 무엇이 작동했는지 본다." },
  { name: "Refine", body: "개선. 다시 처음으로 돌아간다." },
];

/* ---------------------------------------------------------------
 * Scene 06 — Principles
 * --------------------------------------------------------------- */

export const PRINCIPLES: string[] = [
  "흩어진 일을 구조화합니다.",
  "반복되는 일을 시스템화합니다.",
  "감각적인 일을 측정 가능하게 만듭니다.",
  "아이디어를 실행 가능한 단위로 바꿉니다.",
  "프로젝트가 읽히도록 정리합니다.",
];

/* ---------------------------------------------------------------
 * Scene 02 — Positioning keywords
 * --------------------------------------------------------------- */

export const POSITIONING_KEYWORDS: string[] = [
  "Marketing Operations",
  "AI Automation",
  "Project Structuring",
];

/* ---------------------------------------------------------------
 * Deck scene metadata — shared by indicator, counter, nav mapping
 * --------------------------------------------------------------- */

export const SCENES = [
  { id: "scene-01", label: "Identity" },
  { id: "scene-02", label: "Positioning" },
  { id: "scene-03", label: "Projects" },
  { id: "scene-04", label: "Featured" },
  { id: "scene-05", label: "How I Work" },
  { id: "scene-06", label: "Principles" },
  { id: "scene-07", label: "Contact" },
] as const;

export const TOTAL_SCENES = SCENES.length;
