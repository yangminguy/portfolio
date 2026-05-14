# Project Dashboard Overlay — Detailed Component & Data Specification

**Author:** portfolio-ppt-architect-agent  
**Date:** 2026-05-14  
**Status:** Design Specification (Code Implementation in Phase C)  
**Target Data:** Campit Influencer Marketing System (`dashboardData` from projects.ts)

---

## Table of Contents

1. [Overview & Philosophy](#overview--philosophy)
2. [Visual Design Principles](#visual-design-principles)
3. [Section 01: Snapshot — Executive Summary](#section-01-snapshot--executive-summary)
4. [Section 02: Problem — Business Context & Core Issue](#section-02-problem--business-context--core-issue)
5. [Section 03: System — Operating Strategy & Flow](#section-03-system--operating-strategy--flow)
6. [Section 04: Execution — What Was Built](#section-04-execution--what-was-built)
7. [Section 05: Impact — Outcomes & Learning](#section-05-impact--outcomes--learning)
8. [React Component Tree & Architecture](#react-component-tree--architecture)
9. [Data Structure Mapping (projects.ts → Component Props)](#data-structure-mapping-projectsts--component-props)
10. [Responsive Design Specifications](#responsive-design-specifications)
11. [Interaction & Navigation Patterns](#interaction--navigation-patterns)
12. [Color, Typography & Spacing System](#color-typography--spacing-system)
13. [Accessibility & Performance Considerations](#accessibility--performance-considerations)

---

## Overview & Philosophy

### Purpose

The Project Dashboard Overlay transforms long-form project narratives into **5-section executive briefings** that users can absorb in 30 seconds without deep reading.

### Core Design Intent

- **Not a blog.** Dashboard structure emphasizes metrics, flow, and executed outputs.
- **Not a detail page.** Information is compressed into visual hierarchies (cards, flows, grouped bullets).
- **Not a SaaS admin interface.** Premium editorial spacing and restrained visual language.
- **Modal, not navigation.** Overlay sits above the deck; users return via close button or ESC.

### Success Metric

Users should be able to:
1. **Understand the project in 30 seconds** (Snapshot section).
2. **Understand why it was necessary** (Problem section, 1 minute).
3. **Understand the operating system designed** (System section, 1 minute).
4. **See what was executed** (Execution section, 1 minute).
5. **Understand the business impact** (Impact section, 1 minute).

Total: **5 minutes maximum** to understand a project end-to-end without needing to read 3,000+ word narratives.

---

## Visual Design Principles

### 1. Minimal & Premium

- No bright gradients, neon accents, or decorative UI.
- Accent color (#1B6CB0) used sparingly: active tabs, key metrics, hover states.
- Generous whitespace. Breathing room between sections.
- Premium typography: System font stack, careful line-height and letter-spacing.

### 2. Editorial Hierarchy

- **Title & Metadata:** Large, calm, centered or left-aligned.
- **Subsections:** Secondary hierarchy with subtle background or border-bottom.
- **Body Content:** Short, scannable text. Bullets over paragraphs where possible.
- **Metrics:** Visual emphasis via size (large value, small label).

### 3. Operational Clarity

- **Cards:** Used for metrics and grouped execution items.
- **Flows:** Sequential diagrams to show process or decision-making.
- **Before/After:** Visual representation of problem→solution transition.
- **IPOI Diagram:** Input → Process → Output → Impact model.

### 4. Restrained Color Palette

```
Background:     #F8F7F6 (warm off-white)
Surface:        #FFFFFF (white cards/sections)
Text Primary:   #1A1A1A (near-black)
Text Secondary: #666666 (gray)
Text Tertiary:  #999999 (light gray)
Accent:         #1B6CB0 (cool blue, active states)
Border:         #E5E5E5 (light gray dividers)
```

### 5. Typography System

```
Headings:
  H1: 32–36px, weight 600, line-height 1.2
  H2: 24–28px, weight 600, line-height 1.3
  H3: 18–20px, weight 500, line-height 1.4

Body:
  Regular: 16px, weight 400, line-height 1.6
  Small:   14px, weight 400, line-height 1.5
  Tiny:    12px, weight 400, line-height 1.4

Metric Value: 28–36px, weight 700, font-variant-numeric: tabular-nums
Metric Label: 12–14px, weight 400, text-transform: uppercase, letter-spacing: 0.05em
```

---

## Section 01: Snapshot — Executive Summary

### Purpose

**What is this project? How long did it take? Who did you serve? What was the immediate business impact?**

Users should be able to understand the project in 5 seconds by glancing at this section.

### Content & Layout

#### Header Block
```
Project Title
One-liner (2–3 sentences max)

Metadata Row:
  Period: [Start – End]
  Role: [Your role(s)]
  Category: [Domain(s)]
```

**Example (Campit):**
```
Campit Influencer Marketing System

일회성 인플루언서 협찬을 150명 이상의 인플루언서 풀, 
콘텐츠 운영, 성과 리포팅이 연결된 반복 가능한 마케팅 플라이휠로 전환했습니다.

Period:   2024.09 – 2024.10
Role:     초기 기획 · 운영 설계 · 인플루언서 풀 구축 · 자동화 관리 체계 구축
Category: Influencer Marketing / Partnership Operations / Zero-to-One System Building
```

#### Metrics Grid

Display 4–6 metric cards. Each card:

```
┌─────────────────────┐
│   150명+             │  (large value, 28–36px, weight 700)
│   인플루언서 풀 구축 │  (small label, 12px, gray)
└─────────────────────┘
```

**Campit Snapshot Metrics (from dashboardData.metrics):**

1. **인플루언서 풀 구축 및 운영** → `150명+`
2. **대표 콘텐츠 조회수 기록** → `1,398만+`
3. **6개월간 광고 효과 창출** → `1.2억 원+`
4. **인플루언서 방문 캠핑장 평균 매출 증가** → `30%+`

**Grid Layout:**
- Desktop (1440px+): 4-column grid
- Tablet (768–1200px): 2-column grid
- Mobile (375–767px): 2-column grid, stacked as needed

**Spacing:**
- Column gap: 24px
- Row gap: 20px
- Card padding: 24px
- Border: 1px solid #E5E5E5
- Border-radius: 4px

#### Visual Composition

```
┌─────────────────────────────────────────────┐
│  [Close X]                                   │  Header
├─────────────────────────────────────────────┤
│                                              │
│  CAMPIT INFLUENCER MARKETING SYSTEM          │  Section 01: Snapshot
│                                              │
│  일회성 인플루언서 협찬을 150명 이상의...     │
│                                              │
│  Period: 2024.09 – 2024.10                   │
│  Role: 초기 기획 · 운영 설계 · ...           │
│  Category: Influencer Marketing / ...        │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ 150명+   │  │ 1,398만+ │  │ 1.2억원+ │  │  Metric Cards (4-col)
│  │ 인플루   │  │ 대표콘텐츠│  │ 6개월광고│  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
│  ┌──────────┐                                │
│  │ 30%+     │                                │
│  │ 캠핑장매출│                                │
│  └──────────┘                                │
│                                              │
└─────────────────────────────────────────────┘
```

---

## Section 02: Problem — Business Context & Core Issue

### Purpose

**Why was this project necessary? What business context made it urgent? What was the core bottleneck?**

Users should understand:
1. The business situation that made the project necessary.
2. The state of things before the project (Before state).
3. The core problem statement (not the solution yet).
4. Why solving it mattered.

### Content & Layout

#### Part A: Business Context
```
Context Statement (2–3 sentences, max 150 words)

From dashboardData.problem.context:
"캠핏은 입점 캠핑장의 마케팅 성과를 만들어내고, 
이를 통해 플랫폼의 유료 플랜 확장 가능성을 증명해야 하는 상황이었습니다."
```

**Visual:** Left-aligned paragraph with subtle left border accent (#1B6CB0, 2–3px width).

#### Part B: Before State (Bullet List)
```
기존 인플루언서 협찬은 다음과 같은 문제가 있었습니다:

• 협찬 대상 선정이 개별 건 중심으로 운영됨
• 콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션이 하나의 흐름으로 연결되지 않음
• 성과 확인과 리포팅이 분리되어 반복 실행이 어려움
• 캠핑장의 실제 경험 정보가 콘텐츠 안에서 충분히 전달되지 않음
```

From `dashboardData.problem.before[]` array.

**Visual:** Bullet list, left-aligned, 16px base font, 1.6 line-height.

#### Part C: Core Problem Statement
```
Problem (single paragraph, 2–3 sentences, max 120 words)

From dashboardData.problem.coreProblem:
"문제는 인플루언서를 더 많이 섭외하는 것이 아니라, 
인플루언서 콘텐츠를 캠핑장 매출과 플랫폼 성장에 연결되는 
반복 가능한 마케팅 구조로 만드는 것이었습니다."
```

**Visual:** Larger font (18px), weight 500, centered or left-aligned with emphasis.

#### Part D: Why It Matters
```
Why This Matters (1 sentence or short paragraph, max 100 words)

From dashboardData.problem.whyItMatters:
"캠핑장은 호텔과 달리 사진만으로 공간의 매력을 충분히 전달하기 어렵기 때문에, 
실제 자리감·뷰·동선·편의시설·체류 경험을 전달하는 콘텐츠 구조가 필요했습니다."
```

**Visual:** Gray text (#666), italic or subtle styling to indicate "supporting context."

#### Part E: Before → Problem → Required System Flow Diagram

**Visual Representation:**

```
┌────────────────────────────────────────────────────────────────┐
│ BEFORE                  → CORE PROBLEM           → REQUIRED     │
│                                                    SYSTEM        │
│                                                                   │
│ Individual             │ No operating           │ Repeatable    │
│ ad-hoc                 │ system to connect      │ marketing     │
│ influencer             │ influencer content     │ operations    │
│ sponsorships           │ to sales and growth    │ framework     │
│                                                                   │
│ (Weak links)          │ (Missing structure)    │ (System link) │
└────────────────────────────────────────────────────────────────┘
```

**Implementation:**
- 3-column layout (Before | Core Problem | Required System).
- Each column: rounded box or subtle background color (#F8F7F6).
- Vertical arrow or diagonal flow line connecting the three stages.
- Horizontal flow on desktop; vertical (stacked) on mobile.

#### Overall Part Layout

```
┌──────────────────────────────────────────────┐
│ CONTEXT STATEMENT (left-aligned, left border) │
│                                               │
│ BEFORE STATE                                  │
│  • Bullet 1                                   │
│  • Bullet 2                                   │
│  • Bullet 3                                   │
│  • Bullet 4                                   │
│                                               │
│ CORE PROBLEM STATEMENT (emphasized)           │
│                                               │
│ WHY IT MATTERS (gray, supporting tone)        │
│                                               │
│ VISUAL FLOW DIAGRAM (Before → Problem → ...)  │
│ ┌──────┐ → ┌──────┐ → ┌──────┐               │
│ │Before│   │Core  │   │System│               │
│ └──────┘   └──────┘   └──────┘               │
└──────────────────────────────────────────────┘
```

---

## Section 03: System — Operating Strategy & Flow

### Purpose

**What operating system did you design? What was the strategic approach? How do the key steps connect?**

Users should understand:
1. The strategic insight or approach that guided the solution.
2. The 7–9 key steps in the operating system.
3. How inputs become outputs through process and yield impact.
4. Any content strategy or critical decision-making rationale.

### Content & Layout

#### Part A: Approach & Strategic Insight
```
Strategic Approach (2–3 sentences, max 150 words)

From dashboardData.system.approach:
"GA 기반 예약 퍼널과 콘텐츠 소비 흐름을 보며, 
인플루언서의 상세한 캠핑장 소개 콘텐츠가 예약 의사결정에 영향을 줄 수 있다고 판단했습니다. 
이후 FGI와 콜드메일을 통해 인플루언서 생태계를 파악하고, 
150명 이상의 인플루언서 풀을 구축했습니다."
```

**Visual:** Left-aligned paragraph with subtle background (#F8F7F6) or accent left border.

#### Part B: System Flow (7–9 Steps)
```
From dashboardData.system.flow[]

The 9 steps for Campit:
1. GA 예약 퍼널 분석
2. 인플루언서 생태계 리서치
3. 150명+ 인플루언서 풀 구축
4. 등급화 기준 설계
5. 셀러-인플루언서 매칭
6. 콘텐츠 가이드 제공
7. 개인화 페이지 운영
8. 성과 리포팅 자동화
9. 협찬 효율 개선
```

**Visual Representation:**

```
┌─────────────────────────────────────────────────────────┐
│                    SYSTEM FLOW (9 STEPS)                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  1. GA 예약          2. 인플루언서      3. 150명+       │
│     퍼널 분석            생태계 리서치      인플루언서     │
│                                               풀 구축      │
│                                                           │
│  ↓                  ↓                   ↓               │
│                                                           │
│  4. 등급화      5. 셀러-인플루언서   6. 콘텐츠           │
│     기준 설계      매칭                  가이드 제공       │
│                                                           │
│  ↓                  ↓                   ↓               │
│                                                           │
│  7. 개인화      8. 성과 리포팅      9. 협찬             │
│     페이지         자동화               효율 개선        │
│     운영                                                  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Implementation:**
- Horizontal flow on desktop: 9 items in a row or 3x3 grid with arrows.
- Vertical flow on mobile: Items stacked, arrows between each step.
- Each step: small numbered box or circle + text.
- Optional: Show brief description for each step on hover or as small subtitle.

#### Part C: Input → Process → Output → Impact Diagram

From `dashboardData.system.inputProcessOutputImpact`:

```
Input:
  • 인플루언서 풀
  • 캠핑장 정보
  • 예약 퍼널 데이터

Process:
  • 등급화
  • 매칭
  • 콘텐츠 가이드
  • 성과 추적

Output:
  • 개인화 페이지
  • 협찬 콘텐츠
  • 성과 리포트

Impact:
  • 매출 증가
  • 광고 효과
  • 입점 캠핑장 증가
```

**Visual Representation (4-Column Model):**

```
┌──────────────────────────────────────────────────────┐
│     INPUT         PROCESS        OUTPUT       IMPACT │
├──────────────────────────────────────────────────────┤
│                                                       │
│  인플루언서     등급화          개인화       매출     │
│  풀            ─────→         페이지      ─────→    │
│                      매칭                           증가  │
│  캠핑장        콘텐츠          협찬                  │
│  정보          가이드          콘텐츠       광고      │
│               ─────→                      ─────→    │
│  예약          성과            성과         효과     │
│  퍼널          추적            리포트                 │
│  데이터                                   입점       │
│                                  캠핑장   ────→     │
│                                  증가      증가      │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**Implementation:**
- 4-column grid with subtle background colors or borders for each column.
- Vertical alignment: each column centers its items.
- Connecting arrows between columns (→) or continuous flow line.
- Optional: expandable "Show more details" if needed.

#### Part D: Content Strategy or Decision-Making Rationale
```
Strategic Decision (paragraph, max 150 words)

From dashboardData.system.contentStrategy:
"운영 과정에서 단순히 조회수가 높은 콘텐츠가 매출로 이어지지 않는 경우가 많다는 점을 확인했습니다. 
그래서 콘텐츠 방향을 '예쁜 캠핑장 소개'가 아니라, 
캠핑장의 고유한 이야기와 실제 이용 경험을 전달하는 방식으로 조정했습니다."
```

**Visual:** Gray paragraph with subtle background or border-left accent. Positioned after IPOI diagram.

#### Overall Part Layout

```
┌───────────────────────────────────────────┐
│ STRATEGIC APPROACH (left border accent)    │
│                                            │
│ SYSTEM FLOW (9 STEPS)                      │
│ [Flow diagram with arrows]                 │
│                                            │
│ INPUT → PROCESS → OUTPUT → IMPACT          │
│ [4-column diagram]                         │
│                                            │
│ CONTENT STRATEGY (supporting context)      │
└───────────────────────────────────────────┘
```

---

## Section 04: Execution — What Was Built

### Purpose

**What actually got built? What were the key execution items? How were they organized?**

Users should understand:
1. The execution grouped into 4–6 logical categories.
2. The 2–3 key deliverables per category.
3. That these were real, executed items (not planning or theory).

### Content & Layout

#### Execution Group Cards

From `dashboardData.execution.groups[]`:

**Campit Execution Groups:**

```
Group 1: Pool & Criteria
  • 150명 이상의 인플루언서 풀 구축 및 운영
  • 인플루언서 등급화 기준과 등급별 협찬 조건 정리

Group 2: Matching & Partnership
  • 셀러-인플루언서 매칭 흐름 설계
  • 협찬 제안서 작성 및 셀러 대상 발송

Group 3: Content System
  • 브랜딩화된 인플루언서 개인화 페이지 구현
  • 협찬 콘텐츠 가이드라인 설계

Group 4: Reporting & Automation
  • AI 기반 일정·콘텐츠·성과 관리 체계 구축
  • 협찬사와 캠지기 대상 성과 리포팅 자동화
  • 샵바이 매출 통계를 활용한 협찬 효율 측정 방식 설계

Group 5: Optimization & Expansion
  • 협찬 효율 개선을 위한 A/B 테스트 및 검증
  • 글램핑·카라반·펜션 영역 확장 실험
```

**Card Structure (Each Group):**

```
┌─────────────────────────────────┐
│ GROUP TITLE                     │  (weight 600, 18px)
│ (e.g., "Pool & Criteria")       │
├─────────────────────────────────┤
│ • Item 1 (short bullet)         │  (16px, 1.6 line-height)
│ • Item 2 (short bullet)         │
│ • Item 3 (short bullet, if ≤3)  │
│                                 │
│ [Optional: "See all items →"]   │  (if more than 3)
└─────────────────────────────────┘
```

**Card Styling:**
- Background: #FFFFFF (white) or #F8F7F6 (subtle background)
- Border: 1px solid #E5E5E5
- Border-radius: 4px
- Padding: 24px
- Title: uppercase, letter-spacing 0.05em, #1A1A1A
- Items: left-aligned bullets, #333333
- Hover state: subtle shadow or accent border color (#1B6CB0)

#### Grid Layout

**Desktop (1440px+):** 2-column or 3-column grid
- If 5 groups: 2 col (3+2) or 1 col (single column full-width, preferred for clarity)
- Column gap: 24px
- Row gap: 24px

**Tablet (768–1200px):** 2-column grid
- Column gap: 20px
- Row gap: 20px

**Mobile (375–767px):** 1-column grid
- Full-width cards
- Row gap: 16px

#### Optional: Expandable "See All" Behavior

If a group has >3 items, show:
```
• Item 1
• Item 2
• Item 3
[See all items (5 total) →]
```

On click/expand:
```
• Item 1
• Item 2
• Item 3
• Item 4
• Item 5
[Show less ↑]
```

#### Overall Layout

```
┌────────────────────────────────────────┐
│      EXECUTION (5 GROUPED CARDS)       │
├────────────────────────────────────────┤
│                                         │
│  ┌──────────────────┐  ┌──────────────┐│
│  │ Pool & Criteria  │  │ Matching &   ││
│  │ • Item 1         │  │ Partnership  ││
│  │ • Item 2         │  │ • Item 1     ││
│  │                  │  │ • Item 2     ││
│  └──────────────────┘  └──────────────┘│
│                                         │
│  ┌──────────────────┐  ┌──────────────┐│
│  │ Content System   │  │ Reporting &  ││
│  │ • Item 1         │  │ Automation   ││
│  │ • Item 2         │  │ • Item 1     ││
│  │                  │  │ • Item 2     ││
│  └──────────────────┘  │ • Item 3     ││
│                        └──────────────┘│
│  ┌──────────────────┐                  │
│  │ Optimization &   │                  │
│  │ Expansion        │                  │
│  │ • Item 1         │                  │
│  │ • Item 2         │                  │
│  └──────────────────┘                  │
│                                         │
└────────────────────────────────────────┘
```

---

## Section 05: Impact — Outcomes & Learning

### Purpose

**What was the business outcome? What metrics improved? What did you learn?**

Users should understand:
1. The measurable impact (metrics).
2. The business result statement (what changed).
3. The key learning or insight gained.

### Content & Layout

#### Part A: Impact Metrics Dashboard

From `dashboardData.impact.metrics[]`:

```
Campit Impact Metrics:
  1. 인플루언서 풀 구축 및 운영 → 150명+
  2. 대표 콘텐츠 조회수 기록 → 1,398만+
  3. 6개월간 광고 효과 창출 → 1.2억 원+
  4. 인플루언서 방문 캠핑장 평균 매출 증가 → 30%+
  5. 신규 입점 캠핑장 수 증가 → 30%+
  6. A/B 테스트 기반 협찬 효율 상승 구조 안정화 → 30%+
```

**Metric Card Layout:**

```
┌─────────────────────┐
│   150명+             │  (large value, 28–36px, weight 700)
│   인플루언서 풀     │  (small label, 12px, gray)
│                     │
│   구축 및 운영      │  (small description, 11px, lighter gray)
└─────────────────────┘
```

**Grid Layout:**
- Desktop (1440px+): 3-column grid or 2-column grid (flexible based on 6 cards)
- Tablet (768–1200px): 2-column grid
- Mobile (375–767px): 2-column grid or 1-column if space permits

**Spacing:**
- Column gap: 24px
- Row gap: 24px
- Card padding: 24px
- Card styling: White background, 1px border #E5E5E5, 4px border-radius

#### Part B: Result Summary

From `dashboardData.impact.result`:

```
Result Statement (3–4 sentences, max 250 words)

"인플루언서 협찬을 개별 커뮤니케이션 중심의 일회성 캠페인에서 
반복 가능한 마케팅 운영 시스템으로 전환했습니다. 
150명 이상의 인플루언서 풀을 기반으로 협찬 매칭, 콘텐츠 제작, 성과 확인, 
리포팅이 이어지는 구조를 만들었고, 이를 통해 마케팅 비용 없이도 
플라이휠 구조만으로 약 6개월간 1.2억 원 이상의 광고 효과를 창출했습니다."
```

**Visual:** Centered or left-aligned paragraph, 18px, weight 500, #1A1A1A.

#### Part C: Key Learning or Insight

From `dashboardData.impact.learning`:

```
Learning Statement (2–3 sentences, max 200 words)

"이 프로젝트를 통해 마케팅 성과는 단순히 더 많은 콘텐츠를 만드는 것만으로 
나오지 않는다는 점을 배웠습니다. 중요한 것은 콘텐츠가 고객의 어떤 의사결정 
순간에 개입하는지, 어떤 정보를 전달해야 예약으로 이어지는지, 그리고 
그 과정을 반복 가능한 운영 구조로 만들 수 있는지였습니다."
```

**Visual:** Gray paragraph (#666), italic or subtle styling. Positioned after result statement.

#### Overall Layout

```
┌──────────────────────────────────────────┐
│      IMPACT METRICS (6 CARDS, 3-COL)      │
│                                            │
│  ┌────────┐  ┌────────┐  ┌────────┐      │
│  │150명+  │  │1398만+ │  │1.2억원+│      │
│  │인플루  │  │대표콘텐│  │6개월광│      │
│  └────────┘  └────────┘  └────────┘      │
│                                            │
│  ┌────────┐  ┌────────┐  ┌────────┐      │
│  │ 30%+   │  │ 30%+   │  │ 30%+   │      │
│  │캠핑장  │  │신규입점│  │협찬효율│      │
│  └────────┘  └────────┘  └────────┘      │
│                                            │
│  RESULT STATEMENT (emphasized paragraph)  │
│  인플루언서 협찬을 개별 커뮤니케이션 중심의 │
│  일회성 캠페인에서 반복 가능한 마케팅     │
│  운영 시스템으로 전환했습니다...         │
│                                            │
│  KEY LEARNING (gray, supporting tone)     │
│  이 프로젝트를 통해 마케팅 성과는...      │
│                                            │
└──────────────────────────────────────────┘
```

---

## React Component Tree & Architecture

### 1. Component Hierarchy

```
ProjectDashboardOverlay
├── Overlay Container (backdrop + modal)
│   ├── Header Section
│   │   ├── ProjectTitle
│   │   └── CloseButton
│   │
│   ├── TabNavigation
│   │   ├── DesktopTabs (left-side, vertical)
│   │   └── MobileTabs (top, horizontal)
│   │
│   └── SectionRenderer (active section content)
│       ├── ProjectSnapshot
│       │   ├── TitleBlock
│       │   ├── MetadataRow
│       │   └── MetricCardsGrid
│       │
│       ├── ProjectProblem
│       │   ├── ContextStatement
│       │   ├── BeforeStateList
│       │   ├── CoreProblemStatement
│       │   ├── WhyItMattersText
│       │   └── BeforeProblemFlowDiagram
│       │
│       ├── ProjectSystem
│       │   ├── StrategicApproachBlock
│       │   ├── SystemFlowDiagram (9 steps)
│       │   ├── InputProcessOutputImpactDiagram
│       │   └── ContentStrategyBlock
│       │
│       ├── ProjectExecution
│       │   ├── ExecutionGroupCardsGrid
│       │   │   └── ExecutionGroupCard (x5)
│       │   │       ├── GroupTitle
│       │   │       └── BulletItems
│       │   └── ExpandableItemsUI (if >3 items)
│       │
│       └── ProjectImpact
│           ├── ImpactMetricsGrid
│           ├── ResultSummary
│           └── LearningStatement
```

### 2. Component Responsibilities

#### ProjectDashboardOverlay (Container)
- Manages overlay state (isOpen, activeSection)
- Renders backdrop + modal
- Handles ESC key close
- Receives project data as prop
- Passes relevant data sections to child components

**Props:**
```typescript
interface ProjectDashboardOverlayProps {
  project: PortfolioProject
  isOpen: boolean
  onClose: () => void
  onTabChange?: (tabKey: string) => void
}
```

#### TabNavigation
- Desktop: Left-side vertical tabs (140–200px width)
- Mobile: Top horizontal tab bar (full width, scroll if needed)
- Shows all 5 section labels
- Tracks active tab
- Calls onTabChange callback

**Props:**
```typescript
interface TabNavigationProps {
  activeTab: "snapshot" | "problem" | "system" | "execution" | "impact"
  onTabChange: (tab: string) => void
  isMobile: boolean
}
```

#### ProjectSnapshot
- Renders project title + one-liner
- Shows metadata row (Period, Role, Category)
- Renders metric cards grid
- No scrolling within section

**Props:**
```typescript
interface ProjectSnapshotProps {
  project: PortfolioProject
  isMobile: boolean
}
```

#### ProjectProblem
- Context statement (gray block with left border)
- Before state bullets
- Core problem statement (emphasized)
- Why it matters (gray, supporting)
- Before→Problem→System flow diagram

**Props:**
```typescript
interface ProjectProblemProps {
  problem: PortfolioProject["problem"]
  isMobile: boolean
}
```

#### ProjectSystem
- Strategic approach paragraph
- System flow diagram (7–9 steps)
- IPOI diagram (4-column model)
- Content strategy block (if present)

**Props:**
```typescript
interface ProjectSystemProps {
  system: PortfolioProject["system"]
  isMobile: boolean
}
```

#### ProjectExecution
- Grid of execution group cards (5 groups)
- Each card: title + 2–3 bullets
- Optional "See all" expandable for >3 items
- Maintains full original list (no deletion)

**Props:**
```typescript
interface ProjectExecutionProps {
  execution: PortfolioProject["execution"]
  isMobile: boolean
}
```

#### ProjectImpact
- Impact metrics grid (4–6 cards)
- Result summary paragraph
- Learning statement (gray, supporting)

**Props:**
```typescript
interface ProjectImpactProps {
  impact: PortfolioProject["impact"]
  isMobile: boolean
}
```

#### Supporting Components

**MetricCardsGrid:**
- Renders array of metric cards
- Responsive: 4-col → 2-col → 1-col
- Each card: value (large) + label (small)

**SystemFlowDiagram:**
- 9-step sequential flow
- Desktop: horizontal (3x3 grid or single row)
- Mobile: vertical stack with dividers
- Optional descriptions on hover

**ExecutionGroupCardsGrid:**
- 5 cards in grid
- Desktop: 2-col or 1-col
- Mobile: 1-col
- Handles expandable items

**ReadMoreCollapsible:**
- Title: "Read original full text" / "Show less"
- Default: collapsed
- Content: long-form paragraph
- Smooth animation on toggle

---

## Data Structure Mapping (projects.ts → Component Props)

### Type Alignment: Project → PortfolioProject

```typescript
// In projects.ts:

export type Project = {
  // ... existing fields ...
  dashboardData?: PortfolioProject  // NEW optional field
}

export type PortfolioProject = {
  slug: string                      // Unique ID
  title: string                     // "Campit Influencer Marketing System"
  oneLiner: string                  // One-liner description
  subtitle: string                  // Full subtitle/explanation
  period: string                    // "2024.09 – 2024.10"
  role: string                      // "초기 기획 · 운영 설계 · ..."
  category: string                  // "Influencer Marketing / ..."
  keywords: string[]                // ["Influencer Marketing", ...]

  metrics: ProjectMetric[]          // Snapshot metrics (4–6 items)

  problem: {
    context: string                 // Business context (2–3 sentences)
    before: string[]                // Before state bullets (4 items)
    coreProblem: string             // Core problem statement
    whyItMatters?: string           // Why solving this matters
  }

  system: {
    approach: string                // Strategic approach (2–3 sentences)
    flow: ProjectSystemFlowItem[]   // 7–9 step flow items
    contentStrategy?: string        // Content strategy rationale
    inputProcessOutputImpact?: {    // IPOI diagram
      input: string[]
      process: string[]
      output: string[]
      impact: string[]
    }
  }

  execution: {
    groups: ProjectExecutionGroup[] // 5 groups with bullets
  }

  impact: {
    metrics: ProjectMetric[]        // Impact metrics (4–6 items)
    result: string                  // Result summary statement
    learning: string                // Key learning / insight
  }

  originalContent?: {               // Archive of full original text
    problem?: string
    approach?: string
    whatIBuilt?: string[]
    contentStrategy?: string
    result?: string
    learning?: string
  }
}

export type ProjectMetric = {
  label: string                     // "인플루언서 풀 구축 및 운영"
  value: string                     // "150명+"
  description?: string              // Optional sub-label
}

export type ProjectSystemFlowItem = {
  title: string                     // "GA 예약 퍼널 분석"
  description?: string              // Optional detail
}

export type ProjectExecutionGroup = {
  title: string                     // "Pool & Criteria"
  items: string[]                   // Array of bullet items
}
```

### Data Flow: Component Consumption

```
SceneProjectsIndex
  ↓ (onClick project)
  ↓ (setState: selectedProject)
  ↓
ProjectDashboardOverlay (receives project.dashboardData)
  ├─ title, oneLiner → Header
  ├─ metrics[] → ProjectSnapshot → MetricCardsGrid
  ├─ problem → ProjectProblem
  │   ├─ context → ContextBlock
  │   ├─ before[] → BeforeStateList
  │   ├─ coreProblem → ProblemStatement
  │   └─ whyItMatters → SupportingText
  ├─ system → ProjectSystem
  │   ├─ approach → StrategicBlock
  │   ├─ flow[] → SystemFlowDiagram
  │   ├─ inputProcessOutputImpact → IPOIDiagram
  │   └─ contentStrategy → StrategyBlock
  ├─ execution → ProjectExecution
  │   └─ groups[] → ExecutionGroupCardsGrid → ExecutionGroupCard[]
  │       └─ items[] → BulletList
  └─ impact → ProjectImpact
      ├─ metrics[] → MetricCardsGrid
      ├─ result → ResultSummary
      └─ learning → LearningStatement
```

### Example: Campit Data Mapping

```typescript
{
  slug: "campit-influencer-marketing-system",
  title: "Campit Influencer Marketing System",
  oneLiner: "일회성 인플루언서 협찬을 150명 이상의 인플루언서 풀, 콘텐츠 운영, 성과 리포팅이 연결된 반복 가능한 마케팅 플라이휠로 전환했습니다.",
  subtitle: "150명 이상의 인플루언서 풀을 구축하고, 협찬 운영·콘텐츠 가이드·성과 리포팅·AI 자동화 관리 체계를 연결해 캠핏의 입점 캠핑장 마케팅 성과를 만든 Zero-to-One 프로젝트",
  period: "2024.09 – 2024.10",
  role: "초기 기획 · 운영 설계 · 인플루언서 풀 구축 · 자동화 관리 체계 구축",
  category: "Influencer Marketing / Partnership Operations / Zero-to-One System Building",
  keywords: ["Influencer Marketing", "AI Operation", "No-code Automation", ...],

  metrics: [
    { label: "인플루언서 풀 구축 및 운영", value: "150명+" },
    { label: "대표 콘텐츠 조회수 기록", value: "1,398만+" },
    { label: "6개월간 광고 효과 창출", value: "1.2억 원+" },
    { label: "인플루언서 방문 캠핑장 평균 매출 증가", value: "30%+" },
  ],

  problem: {
    context: "캠핏은 입점 캠핑장의 마케팅 성과를 만들어내고...",
    before: [
      "협찬 대상 선정이 개별 건 중심으로 운영됨",
      "콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션이 하나의 흐름으로 연결되지 않음",
      "성과 확인과 리포팅이 분리되어 반복 실행이 어려움",
      "캠핑장의 실제 경험 정보가 콘텐츠 안에서 충분히 전달되지 않음",
    ],
    coreProblem: "문제는 인플루언서를 더 많이 섭외하는 것이 아니라...",
    whyItMatters: "캠핑장은 호텔과 달리 사진만으로 공간의 매력을 충분히 전달하기 어렵기 때문에...",
  },

  system: {
    approach: "GA 기반 예약 퍼널과 콘텐츠 소비 흐름을 보며...",
    flow: [
      { title: "GA 예약 퍼널 분석" },
      { title: "인플루언서 생태계 리서치" },
      { title: "150명+ 인플루언서 풀 구축" },
      // ... (9 items total)
    ],
    inputProcessOutputImpact: {
      input: ["인플루언서 풀", "캠핑장 정보", "예약 퍼널 데이터"],
      process: ["등급화", "매칭", "콘텐츠 가이드", "성과 추적"],
      output: ["개인화 페이지", "협찬 콘텐츠", "성과 리포트"],
      impact: ["매출 증가", "광고 효과", "입점 캠핑장 증가"],
    },
    contentStrategy: "운영 과정에서 단순히 조회수가 높은 콘텐츠가...",
  },

  execution: {
    groups: [
      {
        title: "Pool & Criteria",
        items: [
          "150명 이상의 인플루언서 풀 구축 및 운영",
          "인플루언서 등급화 기준과 등급별 협찬 조건 정리",
        ],
      },
      // ... (5 groups total)
    ],
  },

  impact: {
    metrics: [
      { label: "인플루언서 풀 구축 및 운영", value: "150명+" },
      { label: "대표 콘텐츠 조회수 기록", value: "1,398만+" },
      { label: "6개월간 광고 효과 창출", value: "1.2억 원+" },
      { label: "인플루언서 방문 캠핑장 평균 매출 증가", value: "30%+" },
      { label: "신규 입점 캠핑장 수 증가", value: "30%+" },
      { label: "A/B 테스트 기반 협찬 효율 상승 구조 안정화", value: "30%+" },
    ],
    result: "인플루언서 협찬을 개별 커뮤니케이션 중심의 일회성 캠페인에서...",
    learning: "이 프로젝트를 통해 마케팅 성과는 단순히 더 많은 콘텐츠를 만드는 것만으로...",
  },

  originalContent: {
    problem: "캠핏은 입점 캠핑장의 마케팅 성과를 만들어내고, 이를 통해 플랫폼의 유료 플랜 확장 가능성을 증명해야 하는 상황이었습니다. 기존 인플루언서 협찬은 개별 건 중심으로 운영되고 있었고, 협찬 대상 선정, 콘텐츠 업로드, 링크 전달, 협찬사 커뮤니케이션, 성과 확인이 하나의 흐름으로 연결되지 않아 반복 실행과 확장이 어려웠습니다.",
    // ... (other archived content)
  },
}
```

---

## Responsive Design Specifications

### Desktop (1440px and above)

#### Overlay Layout
```
┌─────────────────────────────────────────────┐
│ [X Close]                  PROJECT TITLE     │
├────────┬────────────────────────────────────┤
│        │                                     │
│ Tabs   │  SECTION CONTENT                    │
│ (vert) │  (full width - 200px tab width)     │
│ Left   │                                     │
│ side   │  Max-width: 1200px on content       │
│        │                                     │
│ •      │  Grid layouts:                      │
│ •      │    - Metrics: 4-col or 3-col        │
│ •      │    - Execution: 2-col or 1-col      │
│ •      │    - System flow: 3x3 horizontal    │
│ •      │                                     │
└────────┴────────────────────────────────────┘
```

**Dimensions:**
- Overlay width: 95vw (max 1400px)
- Overlay height: 95vh (max 90vh)
- Left tab panel: 160–200px
- Content area: remainder after tabs
- Content max-width: 1200px
- Padding: 48px (header) + 40px (sections)

#### Tab Navigation
- Vertical (left-side)
- 160–200px width
- Icon + label (if icons used)
- Active state: #1B6CB0 accent color + background
- Inactive: #999999 text
- Tab spacing: 24px
- Hover state: slight background color change

#### Metric Cards
- 4-column grid (if 6 items: 4+2)
- Column gap: 24px
- Row gap: 20px
- Card width: (content-area-width - 72px) / 4
- Card height: 140–160px
- Font size: 32px (value), 12px (label)

#### System Flow Diagram
- Horizontal flow (left to right)
- 3x3 grid or single row with arrows
- Item width: (content-width / 9)
- Item height: 100–120px
- Arrow indicators: 8px circles or →

#### Execution Cards
- 2-column grid (for 5 groups: 3+2 or 2+2+1)
- Column gap: 24px
- Row gap: 24px
- Card width: (content-width - 24px) / 2
- Card padding: 24px

### Tablet (768px – 1199px)

#### Overlay Layout
```
┌────────────────────────┐
│ [X]  PROJECT TITLE     │
├────────────────────────┤
│ Tabs (horizontal/top)  │
├────────────────────────┤
│ SECTION CONTENT        │
│ (full width)           │
│                        │
│ Grids:                 │
│  - Metrics: 2-col      │
│  - Execution: 2-col    │
│  - Flow: vertical      │
│                        │
└────────────────────────┘
```

**Dimensions:**
- Overlay width: 98vw (max 900px)
- Overlay height: 95vh
- Tab panel: horizontal at top
- Content padding: 32px

#### Tab Navigation
- Horizontal (top)
- Full-width tab bar
- Icons optional, labels required
- Scrollable if >6 tabs
- Tab height: 48–56px
- Border-bottom indicator for active state

#### Metric Cards
- 2-column grid
- Column gap: 20px
- Row gap: 16px
- Card height: 120–140px

#### System Flow
- Vertical stack (top to bottom)
- Full-width items with dividers
- Each item: 100% width, ~100px height

#### Execution Cards
- 2-column grid
- Column gap: 20px
- Row gap: 20px

### Mobile (375px – 767px)

#### Overlay Layout
```
┌─────────────────────┐
│ [<] TITLE [X]      │
├─────────────────────┤
│ Tabs (scroll horiz) │
├─────────────────────┤
│ SECTION CONTENT     │
│ (vertical scroll)   │
│                     │
│ All items:          │
│  - 1-col or 2-col   │
│  - Stacked          │
│  - Touch-friendly   │
│                     │
└─────────────────────┘
```

**Dimensions:**
- Overlay width: 100vw (full screen, no horizontal scroll)
- Overlay height: 100vh
- Content padding: 20px
- Safe area: `padding-top: max(20px, env(safe-area-inset-top))`

#### Header
- Fixed top
- Back button + title + close button
- Layout: [<] TITLE [X]
- Height: 56–64px

#### Tab Navigation
- Horizontal scroll
- Tab width: auto (minimum 80px)
- Scrollable container if > 6 tabs
- Active indicator: bottom border
- Touch target height: ≥44px

#### Metric Cards
- 2-column grid on wider phones (>600px width)
- 1-column grid on smaller phones (<600px)
- Column gap: 12px
- Row gap: 12px
- Card height: auto (no fixed height)

#### System Flow
- Vertical stack
- No horizontal flow
- Dividers between items
- Full-width item boxes

#### Execution Cards
- 1-column grid (stacked)
- Full-width cards
- Row gap: 12px

#### Typography Adjustments
- H1: 24px (was 32px on desktop)
- H2: 18px (was 24px)
- H3: 16px (was 18px)
- Body: 14px (was 16px)
- Metric value: 24px (was 28–36px)

---

## Interaction & Navigation Patterns

### Opening the Overlay

**Desktop & Tablet:**
1. User clicks project card in Scene 04 (Projects).
2. Overlay appears with smooth fade-in (opacity 0 → 1, 200ms).
3. Backdrop color transitions in (rgba(0,0,0,0) → rgba(0,0,0,0.5), 200ms).
4. Overlay positioned: centered, `z-index: 1000`.
5. Body scroll disabled (`overflow: hidden` on document.body).

**Mobile:**
1. User taps project card.
2. Overlay slides up from bottom (bottom: -100% → 0, 300ms cubic-bezier(0.15, 0.8, 0.25, 1)).
3. Backdrop appears simultaneously.
4. Focus moved to overlay close button or first interactive element.

### Tab Navigation

**Desktop (Vertical Left Tabs):**
- Click tab → section content updates (300ms fade/slide transition)
- Active tab: #1B6CB0 accent color + subtle background
- Hover state: light gray background + pointer cursor
- Keyboard: Tab moves focus, Enter or Space activates

**Mobile (Horizontal Top Tabs):**
- Swipe left/right to scroll tabs
- Tap tab → section content updates
- Active tab: bottom border (#1B6CB0), not background fill
- Optional: indicator dot below active tab

**Keyboard Navigation:**
- Tab key: cycle through tabs
- Arrow Left/Right: previous/next tab (with preventDefault on arrow keys)
- Enter/Space: activate focused tab
- ESC: close overlay

### Closing the Overlay

**Button Close:**
- User clicks [X] close button in header
- Overlay fades out (300ms), backdrop disappears
- Body scroll re-enabled
- Focus returns to previously focused element (if possible)

**ESC Key:**
- User presses ESC
- Same behavior as close button

**Click Outside (Optional):**
- If backdrop click-to-close enabled:
  - Clicking on backdrop (not overlay) closes overlay
  - UX note: Can be helpful for power users, but optional for MVP

**Mobile Back Button (Optional):**
- User taps [<] back button (if implemented)
- Closes overlay with slide-down animation

### Content Scrolling

- Overlay has internal vertical scroll for section content
- Horizontal scroll disabled (no rubber-band on mobile)
- Metric cards, execution cards, flow diagrams all fit within viewport when possible
- If content exceeds viewport height: smooth scrollable region within overlay

### Transitions & Animations

**Tab Switching:**
- Current section fades out (100ms)
- New section fades in (200ms)
- OR: slide transition (current left -20px, next 20px → 0, 250ms)

**Metric Cards:**
- Entrance: fade in + slight scale (0.95 → 1, 300ms staggered by 50ms)
- Hover: lift effect (box-shadow change, 200ms)

**Expandable Items (Execution "See All"):**
- Click [See All]
- Additional items slide down smoothly (300ms, max-height animation)
- [Show Less] collapses back up (200ms)

**Flow Diagrams:**
- On section load: items appear sequentially (fade + slight slide, 80ms stagger)
- Arrows or dividers animate after items (200ms delay)

---

## Color, Typography & Spacing System

### Color Palette

```
// Surfaces
Background:       #F8F7F6 (warm off-white, page background)
Surface:          #FFFFFF (white, card/overlay surfaces)

// Text
Text Primary:     #1A1A1A (near-black, headings + primary copy)
Text Secondary:   #666666 (medium gray, body text)
Text Tertiary:    #999999 (light gray, supporting/meta text)
Text Disabled:    #CCCCCC (light gray, disabled states)

// Accent & Interaction
Accent Primary:   #1B6CB0 (cool blue, active states, links, hover)
Accent Light:     #E8F1F7 (very light blue, backgrounds)

// Borders & Dividers
Border Primary:   #E5E5E5 (light gray dividers)
Border Secondary: #F0F0F0 (very light borders)

// Semantic
Success:          #059669 (if needed for positive metrics)
Error:            #DC2626 (if needed for warnings)
```

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
```

#### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|-----------------|
| H1 (Title) | 36px | 600 | 1.2 | -0.01em |
| H2 (Section) | 28px | 600 | 1.3 | normal |
| H3 (Subsection) | 20px | 500 | 1.4 | normal |
| H4 (Group) | 18px | 600 | 1.4 | 0.05em |
| Body Regular | 16px | 400 | 1.6 | normal |
| Body Small | 14px | 400 | 1.5 | normal |
| Label | 12px | 400 | 1.4 | 0.05em |
| Metric Value | 32px | 700 | 1.1 | -0.02em |
| Metric Label | 12px | 400 | 1.2 | 0.05em |
| Tiny | 11px | 400 | 1.3 | normal |

### Spacing System (8px base)

```
8px:   xs (borders, small gaps)
12px:  xxs (tight spacing)
16px:  sm (small padding)
20px:  base (standard padding)
24px:  md (medium padding, card padding)
32px:  lg (large spacing, section spacing)
40px:  xl (extra large, outer padding)
48px:  xxl (header/footer padding)
```

#### Common Spacing Values

- Card padding: 24px
- Card gap: 24px (desktop), 20px (tablet), 16px (mobile)
- Section padding: 40px (desktop), 32px (tablet), 20px (mobile)
- Header height: 56–64px
- Tab height: 48–56px
- Input/button height: 44px (mobile touch target)
- Metric card height: 140–160px

### Border Radius

```
Subtle:     2px (minimal roundness)
Small:      4px (cards, buttons)
Medium:     8px (larger components)
Large:      12px (soft corners, if needed)
Circle:     50% (avatar or circular elements)
```

Default for overlay: `border-radius: 4px` on cards and sections.

---

## Accessibility & Performance Considerations

### Accessibility (WCAG 2.1 AA)

#### Keyboard Navigation
- All interactive elements (tabs, buttons, links) reachable via Tab
- Tab order logical and visible (outline or focus ring)
- Focus style: minimum 2px solid #1B6CB0 or similar contrast
- ESC key closes overlay
- Arrow keys navigate tabs (with preventDefault to prevent page scroll)

#### Semantic HTML
- Use `<button>` for close button, not `<div>`
- Use `<nav>` for tab navigation
- Use `<section>` or `<article>` for content sections
- Use `<h1>`, `<h2>`, etc. for headings (not `<div>` with CSS styling)
- Use `<ul>` + `<li>` for bullet lists (Before state, Execution items)

#### ARIA Labels
```
ProjectDashboardOverlay:
  - role="dialog"
  - aria-label="Project dashboard: {projectTitle}"
  - aria-modal="true"

CloseButton:
  - aria-label="Close project dashboard"

TabNavigation:
  - role="tablist"
  - Each tab: role="tab", aria-selected={active}, aria-controls="panel-{id}"

Sections:
  - role="tabpanel", id="panel-{id}", aria-labelledby="tab-{id}"
```

#### Color Contrast
- Text on white background: minimum 4.5:1 contrast ratio
- #1A1A1A on #FFFFFF: 17.5:1 ✓
- #666666 on #FFFFFF: 6.5:1 ✓
- #999999 on #FFFFFF: 3.5:1 (⚠️ only for tertiary/supporting text)
- Accent links: #1B6CB0 on white, hover underline for clarity

#### Focus Management
- Modal opens: focus moved to close button or first interactive element
- Modal closes: focus returns to trigger element (project card)
- Tab trap: first and last focusable elements trap within modal (shift+tab at first → last)

#### Screen Reader Considerations
- Use `aria-live="polite"` on section content area during tab changes
- Metrics: use `<dl>` (definition list) or semantic structure for value/label pairs
- Flow diagrams: provide text alternative or detailed description
- Images (if any): always include `alt` text

### Performance

#### Lazy Loading
- Overlay content components: lazy load if possible (Code splitting)
- Metric cards: render all 6 cards, no lazy loading within modal
- Flow diagrams: render on initial load, cached between tab switches

#### Animation Performance
- Use CSS `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width` or `height` for smoothness
- Use `will-change: transform, opacity` for animated elements
- Limit simultaneous animations: max 3–4 elements at once

#### Bundle Size
- Component tree: keep reusable components small
- Type-heavy data (PortfolioProject) structured efficiently
- No external dependencies beyond React, Tailwind, existing project setup
- CSS-in-JS: use Tailwind utilities, avoid additional CSS-in-JS library

#### Mobile Considerations
- Viewport: 100vw, no horizontal overflow
- Touch targets: minimum 44px × 44px
- Reduced motion: respect `prefers-reduced-motion` media query
- Battery/CPU: smooth scrolling, no janky animations

### Reduced Motion Preference

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Or: Skip animations entirely if `window.matchMedia('(prefers-reduced-motion: reduce)').matches`

---

## Summary: Implementation Order (Phase C)

### Task C1: ProjectDashboardOverlay Component
1. Create overlay container with backdrop
2. Implement header (title + close button)
3. Add tab navigation (desktop left, mobile top)
4. Wire ESC key close
5. Style backdrop, modal, header

### Task C2: Five Section Components
1. **ProjectSnapshot** → MetricCardsGrid
2. **ProjectProblem** → Context + Before + Core problem + Flow diagram
3. **ProjectSystem** → Approach + Flow diagram + IPOI diagram + Strategy
4. **ProjectExecution** → Group cards grid + expandable items
5. **ProjectImpact** → Metric cards + Result + Learning

### Task C3: Supporting Components
1. **MetricCardsGrid** → responsive grid layout
2. **SystemFlowDiagram** → sequential flow with arrows
3. **ExecutionGroupCardsGrid** → grouped cards with expandable items
4. **ReadMoreCollapsible** (optional) → archived long-form content

### Task C4: Styling & Polish
1. Apply color palette system
2. Test responsive layouts (desktop, tablet, mobile)
3. Add hover states and transitions
4. Fine-tune spacing and typography
5. Test keyboard navigation and focus management

### Task C5: Testing & Verification
1. Manual QA: all 5 tabs render correctly
2. Responsive testing: 1440px, 768px, 375px breakpoints
3. Keyboard nav: Tab, Arrow, ESC all work
4. Build verification: `npm run build` (0 errors)
5. Browser console: 0 errors, 0 warnings

---

## Appendix: Data Example (Campit)

See **Section 9: Data Structure Mapping** for complete example mapping Campit `dashboardData` from projects.ts to component props.

Full Campit data is in `/Users/wonminyang/데스크톱/양원민 개발자/포토폴리오/v2-deck/data/projects.ts`, lines 160–330.

---

**Document Status:** Complete Design Specification  
**Ready for:** Phase C Implementation (React Component Coding)  
**Next Steps:** Await developer to implement components per this specification.

