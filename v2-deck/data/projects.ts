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
    title: "인플루언서 마케팅 시스템 구축",
    koreanTitle: "인플루언서 마케팅 시스템",
    year: "2024",
    summary:
      "일회성 인플루언서 협찬을 150명 이상의 인플루언서 풀, 콘텐츠 운영, 성과 리포팅이 연결된 반복 가능한 마케팅 플라이휠로 전환했습니다.",
    role: "초기 기획 · 운영 설계 · 인플루언서 풀 구축 · 자동화 관리 체계 구축",
    domain: ["Influencer Marketing", "Partnership Operations", "Zero-to-One System Building"],
    tools: ["FGI", "Cold Mail", "Personalized Page", "Reporting Automation", "A/B Testing"],
    active: true,
    sections: {
      context:
        "일회성 인플루언서 협찬을 150명 이상의 인플루언서 풀, 콘텐츠 운영, 성과 리포팅이 연결된 반복 가능한 마케팅 플라이휠로 전환했습니다. 협찬 운영·콘텐츠 가이드·성과 리포팅·AI 자동화 관리 체계를 연결해 캠핏의 입점 캠핑장 마케팅 성과를 만든 Zero-to-One 프로젝트입니다.",
      problem:
        "캠핏은 입점 캠핑장의 마케팅 성과를 만들어내고, 이를 통해 플랫폼의 유료 플랜 확장 가능성을 증명해야 하는 상황이었습니다. 기존 인플루언서 협찬은 개별 건 중심으로 운영되고 있었고, 협찬 대상 선정, 콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션, 성과 확인이 하나의 흐름으로 연결되지 않아 반복 실행과 확장이 어려웠습니다.",
      system:
        "GA 기반 예약 퍼널과 콘텐츠 소비 흐름을 보며, 인플루언서의 상세한 캠핑장 소개 콘텐츠가 예약 의사결정에 영향을 줄 수 있다고 판단했습니다. FGI와 콜드메일을 통해 인플루언서 생태계를 파악하고, 150명 이상의 인플루언서 풀을 구축했습니다. 협찬 운영을 등급화·매칭·콘텐츠 가이드·개인화 페이지·성과 리포팅이 연결된 하나의 운영 시스템으로 설계했습니다.",
      execution:
        "운영 과정에서 조회수가 높은 콘텐츠가 매출로 이어지지 않는 경우가 많다는 점을 확인했습니다. 콘텐츠 방향을 '예쁜 캠핑장 소개'가 아니라 캠핑장의 고유한 이야기와 실제 이용 경험을 전달하는 방식으로 조정했습니다. 협찬 콘텐츠를 단순 노출물이 아니라, 캠핑장을 이해시키고 예약을 설득하는 마케팅 자산으로 설계했습니다.",
      impact:
        "인플루언서 협찬을 일회성 캠페인에서 반복 가능한 마케팅 운영 시스템으로 전환했습니다. 150명 이상의 인플루언서 풀을 기반으로 협찬 매칭, 콘텐츠 제작, 성과 확인, 리포팅이 이어지는 구조를 만들었고, 마케팅 비용 없이 플라이휠 구조만으로 약 6개월간 1.2억 원 이상의 광고 효과를 창출했습니다. 대표 콘텐츠는 1,398만 조회수를 기록했고, 인플루언서 방문 캠핑장의 매출은 평균 30% 이상 증가했습니다. 신규 입점 캠핑장 수도 30% 증가했습니다.",
      artifacts:
        "150명 인플루언서 풀 운영 체계 · 인플루언서 등급화 기준 · 셀러-인플루언서 매칭 흐름 · 협찬 제안서 · 개인화 페이지 · 협찬 콘텐츠 가이드라인 · AI 기반 일정·성과 관리 체계 · 성과 리포팅 자동화 구조 · A/B 테스트 기반 협찬 효율 측정 방식",
      reflection:
        "마케팅 성과는 단순히 더 많은 콘텐츠를 만드는 것만으로 나오지 않습니다. 콘텐츠가 고객의 어떤 의사결정 순간에 개입하는지, 어떤 정보를 전달해야 예약으로 이어지는지, 그리고 그 과정을 반복 가능한 운영 구조로 만들 수 있는지가 핵심이었습니다.",
    },
  },
  {
    slug: "campit-superfan",
    title: "브랜드 팬덤 모집 및 운영 Zero to One",
    koreanTitle: "팬덤 운영 시스템",
    year: "2024",
    summary:
      "단발성 참여에 머물던 고객 커뮤니티를, AI·노코드 기반 운영 시스템을 통해 700명 이상의 팬덤 모집·참여 관리·콘텐츠 생산이 가능한 지속 운영 구조로 전환했습니다.",
    role: "단독 리드 / 팬덤 운영 시스템 기획 및 구축",
    domain: ["Fan Community", "CRM", "Community Operations"],
    tools: ["Instagram", "FGI", "AI Automation", "No-code Tools", "Content System"],
    active: true,
    sections: {
      context:
        "단발성 참여에 머물던 고객 커뮤니티를, AI·노코드 기반 운영 시스템을 통해 700명 이상의 팬덤 모집·참여 관리·콘텐츠 생산이 가능한 지속 운영 구조로 전환했습니다. 인스타그램 기반으로 700명 이상의 브랜드 팬덤을 모집하고, 6개월 이상 단독 리드하며 앱·Instagram·YouTube 전반에서 콘텐츠가 생산되는 팬덤 운영 시스템을 구축한 Zero to One 프로젝트입니다.",
      problem:
        "커뮤니티 참여는 있었지만, 고객 참여가 단발성으로 끝나고 콘텐츠 생산으로 이어지는 구조가 부족했습니다. 700명 이상의 팬덤을 운영하기 위해서는 모집, 참여 관리, 리워드, 콘텐츠 수집, 운영 커뮤니케이션이 연결된 시스템이 필요했습니다.",
      system:
        "팬덤을 참여 강도와 동기에 따라 계층화할 수 있는 구조로 보고, FGI를 통해 참여 동기와 리워드 기준을 분석했습니다. 인스타그램 유입, 리워드 기반 참여, 콘텐츠 생산, 재참여가 연결되는 운영 흐름을 설계했고, 반복 업무는 AI와 노코드 툴을 활용해 운영 가능한 시스템으로 구조화했습니다.",
      execution:
        "팬덤 운영의 핵심을 단순 모집이 아니라 고객이 브랜드와 함께 콘텐츠를 만드는 구조로 정의했습니다. 참여 동기, 보상, 콘텐츠 생산, 재참여를 하나의 흐름으로 연결하고, AI·노코드 툴을 통해 700명 이상의 팬덤을 운영 가능한 시스템으로 만들었습니다.",
      impact:
        "인스타그램 기반으로 700명 이상의 브랜드 팬덤을 모집하고, 참여 동기 분석과 리워드 설계를 통해 지속 참여가 가능한 운영 흐름을 만들었습니다. 6개월 이상 프로젝트를 단독 리드하며 AI·노코드 기반 운영 시스템을 구축했고, 앱·Instagram·YouTube 전반에서 1,200개 이상의 콘텐츠가 생산되는 구조를 만들었습니다.",
      artifacts:
        "인스타그램 기반 팬덤 모집 구조 · AI·노코드 기반 관리 시스템 · 팬덤 참여 계층 구조 · FGI 기반 참여 동기 분석 · 리워드 및 참여 흐름 시스템 · 모집·관리·안내 운영 워크플로우 · 앱·Instagram·YouTube 콘텐츠 생산 흐름 · 6개월 이상 지속 팬덤 운영 루틴",
      reflection:
        "팬덤은 단순히 사람을 많이 모으는 방식으로 만들어지지 않습니다. 고객이 왜 참여하는지 이해하고, 참여 동기·보상·콘텐츠·재참여를 연결할 때 커뮤니티는 반복 가능한 운영 시스템이 됩니다. AI와 노코드 툴은 이 구조를 실제 운영 가능한 시스템으로 바꾸는 데 중요한 역할을 했습니다.",
    },
  },
  {
    slug: "brand-partnership-campit",
    title: "대기업·브랜드 협업 제휴 기획 및 운영",
    year: "2024",
    summary:
      "내부 콘텐츠만으로는 유저 가치 확장에 한계가 있던 캠핑 플랫폼에서, 농심·반려다움 등 외부 브랜드와의 협업 구조를 설계하고 실제 실행까지 리딩했습니다.",
    role: "프로젝트 리딩 / 제휴 기획 / 제안서 제작 / 미팅 및 협의 / 협업 구조 설계",
    domain: ["B2B 제휴", "브랜드 협업", "플랫폼 제휴 기획"],
    tools: ["Brand Partnership", "Proposal", "B2B Strategy", "Campaign Planning"],
    active: true,
    sections: {
      context:
        "내부 콘텐츠만으로는 유저 가치 확장에 한계가 있던 캠핑 플랫폼에서, 농심·반려다움 등 외부 브랜드와의 협업 구조를 설계하고 실제 실행까지 리딩했습니다. 캠핏 플랫폼의 유저 리텐션과 브랜드 가치를 확장하기 위해 외부 브랜드별 협업 유형을 설계하고, 제안서 제작·미팅·구조 설계·실행 조율까지 담당한 B2B 제휴 프로젝트입니다.",
      problem:
        "캠핏은 캠핑 플랫폼으로서 유저 리텐션을 높이고 플랫폼 안에서 제공할 수 있는 가치를 확장할 필요가 있었습니다. 내부 콘텐츠와 기존 서비스만으로는 유저에게 제공할 수 있는 경험이 제한적이었기 때문에, 외부 브랜드와의 협업을 실행 가능한 구조로 전환해야 했습니다.",
      system:
        "브랜드마다 목적과 캠핏 안에서 연결될 수 있는 방식이 다르다고 보고, 협업 유형을 나누어 접근했습니다. 농심은 캠핑 상황에 맞는 브랜드 콜라보로, 반려다움은 챌린지·굿즈·광고소재·커머스 연결까지 이어지는 구조로 설계했습니다.",
      execution:
        "외부 브랜드를 단순 광고주가 아니라 캠핏 유저 경험을 확장하는 파트너로 정의했습니다. 브랜드의 목적, 캠핏 유저의 행동, 플랫폼의 수익 모델을 함께 맞추기 위해 협업을 브랜드 콜라보·콘텐츠 프로모션·유저 혜택·광고 상품 개발로 구조화했습니다.",
      impact:
        "농심과는 캠핑 상황에 맞는 브랜드 콜라보 기획안을 만들고, 제안서 작성과 협의 과정을 리딩했습니다. 반려다움 협업에서는 챌린지, 굿즈, 광고소재 활용, 커머스 연결까지 이어지는 4단계 협업 구조를 설계하고 실행까지 이어갔습니다.",
      artifacts:
        "농심 X Camfit 캠핑존 및 브랜드 콜라보 기획안 · 농심 협업 제안서 및 현황 자료 · 반려다움 챌린지 구조 설계 · 4단계 협업 구조 · 외부 브랜드별 협업 유형 분류 · 브랜드 콜라보·콘텐츠 프로모션·유저 혜택·광고 상품 개발 구조 · 제휴사 미팅 및 협의 자료",
      reflection:
        "B2B 제휴는 큰 브랜드와 연결되는 일이 아니라, 서로 다른 목적을 가진 조직 간의 실행 구조를 맞추는 일입니다. 제휴 기획은 제안서 작성에서 끝나는 것이 아니라 미팅, 협의, 운영 구조 설계, 실행 조율까지 이어져야 실제 프로젝트가 됩니다.",
    },
  },
  {
    slug: "gugok-dakgalbi-brand-launch",
    title: "구곡 닭갈비 브랜드 런칭",
    year: "2025",
    summary:
      "브랜드 정체성이 필요한 신규 F&B 매장을, 70–80년대 강촌역의 복고 감성과 현장 피드백 기반 운영이 연결된 닭갈비 브랜드로 런칭했습니다.",
    role: "브랜드 런칭 / 브랜드 디렉팅 / 현장 운영 / 마케팅 전략 / 고객 경험 기획",
    domain: ["F&B 브랜딩", "신규 브랜드 런칭", "오프라인 고객 경험"],
    tools: ["Brand Identity", "Customer Experience", "Influencer Marketing", "Fandom Marketing"],
    active: true,
    sections: {
      context:
        "브랜드 정체성이 필요한 신규 F&B 매장을, 70–80년대 강촌역의 복고 감성과 현장 피드백 기반 운영이 연결된 닭갈비 브랜드로 런칭했습니다. 브랜드 방향성, 공간 경험, 메뉴 스토리텔링, 디자인 기획, 인플루언서 마케팅, 팬덤 마케팅, 매출 관리까지 연결해 신규 브랜드의 초기 운영 구조를 만들었습니다.",
      problem:
        "신규 F&B 브랜드는 좋은 콘셉트만으로 살아남기 어렵습니다. 닭갈비처럼 경쟁이 치열한 카테고리에서 고객이 왜 이 가게를 선택하고 다시 방문해야 하는지 명확한 브랜드 경험이 필요했습니다. 70–80년대 강촌역을 모티브로 한 레트로 콘셉트가 실제 매장 경험으로 연결되지 않으면 단순한 분위기 연출에 그칠 수 있었습니다.",
      system:
        "브랜드 디렉팅에서 가장 중요한 기준을 현장 경험으로 잡았습니다. 직접 프렙, 조리, 서빙, 오픈·마감 운영을 경험하며 고객 반응을 관찰했고, 그 피드백을 메뉴판, 입간판, 서비스 방식, 좌석 세팅, 공간 연출에 반영했습니다. 브랜드 전략은 50–60대에게는 향수를, 20–30대에게는 이색적인 레트로 경험을 제공하는 이중 타겟 구조로 설계했습니다.",
      execution:
        "구곡 닭갈비의 브랜드 전략은 '본질로 설득하는 F&B 브랜드'였습니다. 음식·공간·말·동선·서비스가 하나의 경험으로 이어지도록 설계했습니다. 인플루언서 마케팅과 체험단을 통해 레트로 콘셉트와 메뉴 스토리를 전달하는 방식으로 운영했고, 단골 고객이 자발적 홍보로 이어지는 팬덤 흐름을 구축했습니다.",
      impact:
        "구곡 닭갈비는 70–80년대 강촌역의 복고 감성과 따뜻한 기억을 중심으로 브랜드 정체성을 만들었습니다. 현장에서 직접 고객 반응을 관찰하며 메뉴판, 입간판, 응대 방식, 좌석 세팅, 서비스 플로우를 개선했고, 단골 고객이 가족 식사·회사 회식·동호회 회식으로 방문 목적을 확장하는 흐름을 확인했습니다.",
      artifacts:
        "70–80년대 강촌역 기반 레트로 브랜드 콘셉트 · 브랜드 방향성 및 톤앤매너 · 이중 타겟 구조 · 메뉴판 및 입간판 기획 · 고객 동선 및 서비스 플로우 · 인플루언서 마케팅 기반 · 팬덤 마케팅 및 단골 형성 흐름 · 매출·방문 패턴·콘텐츠 반응 지표 기반 운영 개선 구조",
      reflection:
        "F&B 브랜드 디렉팅은 콘셉트 문서를 잘 쓰는 것만으로 완성되지 않습니다. 브랜드는 메뉴판 위치, 직원의 첫 문장, 음식이 나가는 타이밍, 손님의 반응 속에서 검증됩니다. 현장을 경험해야 전략과 운영, 마케팅과 서비스가 실제 고객 경험으로 연결됩니다.",
    },
  },
  {
    slug: "plays-lounge-popup-strategy",
    title: "플레이즈 라운지 리브랜딩",
    year: "2025",
    summary:
      "신규 고객 유입이 정체되고 내부 콘텐츠 공급에 한계가 있던 프리미엄 키즈카페를, 데이터 기반 운영 진단과 외부 크리에이터 협업이 연결된 경험형 공간 브랜드로 전환했습니다.",
    role: "프로젝트 리딩 / 브랜드 리브랜딩 / 데이터 진단 / 오프라인 콘텐츠 기획 / 외부 협업 구조 설계",
    domain: ["오프라인 공간 리브랜딩", "브랜드 경험 설계", "데이터 기반 운영"],
    tools: ["Google Sheets", "Looker Studio", "Influencer Collaboration", "Pop-up Planning"],
    active: true,
    sections: {
      context:
        "신규 고객 유입이 정체되고 내부 콘텐츠 공급에 한계가 있던 프리미엄 키즈카페를, 데이터 기반 운영 진단과 외부 크리에이터 협업이 연결된 경험형 공간 브랜드로 전환했습니다. 운영 데이터를 기반으로 공간 운영과 콘텐츠 공급 문제를 진단하고, 인플루언서·크리에이터 협업을 통해 신규 고객 유입 채널 구조를 확보한 리브랜딩 프로젝트입니다.",
      problem:
        "플레이즈 라운지는 공간 품질과 브랜드 잠재력을 가지고 있었지만, 신규 고객 유입이 정체되고 내부 운영 중심의 콘텐츠 공급에 한계가 있었습니다. 고객이 반복 방문할 이유를 만들기 위해, 단순 키즈카페가 아니라 아이와 부모가 함께 몰입할 수 있는 경험형 공간으로 재정의할 필요가 있었습니다.",
      system:
        "Google Sheets와 Looker Studio를 활용해 일매출, 테이블 회전율, 주간 비교 등 운영 데이터를 확인할 수 있는 구조를 만들었습니다. 동시에 외부 크리에이터와 인플루언서가 플레이즈 라운지에서 팝업과 클래스를 열 수 있는 협업 구조를 설계했습니다.",
      execution:
        "플레이즈 라운지를 단순 키즈카페가 아니라 아이와 부모가 함께 몰입할 수 있는 경험형 공간으로 정의했습니다. 내부 운영팀이 모든 콘텐츠를 직접 만드는 방식에서 벗어나, 오프라인 공간에 관심이 있는 인플루언서와 크리에이터가 팝업·클래스·체험 콘텐츠를 만들 수 있는 외부 협업 기반 콘텐츠 공급 구조를 설계했습니다.",
      impact:
        "플레이즈 라운지를 단순 키즈카페가 아니라 콘텐츠와 협업이 계속 발생할 수 있는 경험형 공간으로 재정의했습니다. Google Sheets와 Looker Studio를 활용해 매출과 공간 운영 데이터를 확인할 수 있는 구조를 만들었고, 외부 크리에이터와 함께 팝업·클래스·브랜드 경험을 만드는 협업 모델을 설계했습니다. 팔로워 10만 규모의 그따띠 팝업을 통해 인플루언서 팬덤이 오프라인 공간으로 유입될 수 있는 흐름을 확인했습니다.",
      artifacts:
        "Google Sheets 기반 운영 데이터 구조 · Looker Studio 기반 매출·운영 대시보드 · 테이블별 매출 분석 기반 좌석 리디자인 방향 · 인플루언서 협업 기반 오프라인 팝업 구조 · 브랜드–운영팀–크리에이터 실행 흐름 · 플라워리스트 코튼필드 팝업 및 클래스 기획 · 그따띠 팝업 및 클래스 협업 기획",
      reflection:
        "오프라인 공간의 리브랜딩은 인테리어나 비주얼 변경만으로 완성되지 않습니다. 공간의 수익 구조, 고객 행동, 콘텐츠 공급 방식, 외부 협업 구조가 함께 바뀌어야 브랜드 방향이 실제 운영으로 이어질 수 있습니다.",
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
  { id: "scene-03", label: "How I Work" },
  { id: "scene-04", label: "Projects" },
  { id: "scene-05", label: "Contact" },
] as const;

export const TOTAL_SCENES = SCENES.length;
