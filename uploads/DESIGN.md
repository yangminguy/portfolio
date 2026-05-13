# DESIGN.md — Rauno.me-inspired Portfolio UI

## 0. Purpose

This document defines the design direction, UI rules, interaction behavior, and implementation constraints for a personal portfolio website inspired by `rauno.me`.

The goal is **not** to clone the website pixel-by-pixel.  
The goal is to translate the same design attitude into a portfolio for a PM / marketing / operations / AI automation operator.

This document should be treated as the **design constitution** for the project.  
Before implementing or modifying UI, always read this document first.

---

## 1. Design Goal

Build a quiet, text-first portfolio website that presents projects as a refined work index.

The website should communicate:

- The owner finds problems.
- The owner structures scattered work.
- The owner designs repeatable systems.
- The owner uses AI / no-code / automation to improve operations.
- The owner connects strategy, execution, and measurable outcomes.
- The owner thinks clearly and documents work precisely.

The website should feel closer to:

- a personal project index
- an operating archive
- a thinking system
- a curated body of work

It should **not** feel like:

- a generic developer portfolio
- a SaaS landing page
- a resume website
- a flashy personal brand homepage
- a card-heavy portfolio template

---

## 2. Reference Interpretation

Reference site: `https://rauno.me/`

Observed direction:

- Extremely simple, text-led layout.
- No heavy hero image.
- No large marketing-style CTA.
- Small number of links.
- High reliance on spacing, rhythm, and typography.
- Homepage is built around a compact identity sentence.
- Projects are represented as an index rather than visual cards.
- The site feels quiet, precise, and intentional.
- The emotional tone comes from restraint, not decoration.

Reference homepage structure:

```text
Name + identity sentence
Primary links
Secondary/social links
Short philosophy statements
```

Reference projects structure:

```text
Project name     Year
Project name     Year
Project name     Year
...
```

Important interpretation:

The inspiration is not “minimalism” in a generic sense.  
It is **editorial restraint**: short text, clear hierarchy, controlled spacing, and subtle interaction.

---

## 3. Core Design Principles

### 3.1 Text First

Text is the main interface.

Use typography, spacing, alignment, and hierarchy as the primary design tools.

Avoid using images, icons, gradients, illustrations, and decorative UI unless they directly clarify the content.

### 3.2 Index Before Case Study

The first impression should be an index of work, not a long explanation.

Users should be able to scan projects quickly and decide what to open.

### 3.3 Quiet but Not Empty

The interface should be minimal, but it should not feel unfinished.

Use:

- precise type scale
- subtle dividers
- consistent spacing
- careful hover states
- restrained motion
- compact but readable content

### 3.4 Depth on Demand

Do not expose all information at once.

Use progressive disclosure:

- homepage: identity and direction
- projects page: project index
- project detail: structured explanation
- optional toggles: deeper evidence, artifacts, subprojects, process notes

### 3.5 Strong Editorial Voice

Every sentence should be short and deliberate.

Avoid vague portfolio language such as:

- “passionate”
- “innovative”
- “creative problem solver”
- “various experiences”
- “high-quality outcomes”

Prefer concrete language:

- “Structured influencer operations into a repeatable system.”
- “Converted manual campaign tracking into a no-code workflow.”
- “Reduced scattered project evidence into portfolio-ready project records.”

---

## 4. Visual Direction

### 4.1 Overall Mood

The website should feel:

- calm
- precise
- thoughtful
- understated
- mature
- editorial
- systematic
- slightly warm

It should not feel:

- trendy
- loud
- corporate
- startup-like
- template-like
- overly playful
- overly luxurious

### 4.2 Visual Keywords

Use these as internal references:

```text
quiet index
editorial archive
system notebook
work ledger
interaction designer restraint
AI-native operator portfolio
```

---

## 5. Layout System

### 5.1 Page Width

Use a narrow content width.

Recommended:

```css
max-width: 680px;
```

For project detail pages, the maximum width can be slightly wider if needed:

```css
max-width: 760px;
```

Avoid full-width sections unless absolutely necessary.

### 5.2 Alignment

Use left-aligned text.

Avoid center-heavy landing page layouts.

The website should feel like a carefully typeset document, not a marketing page.

### 5.3 Vertical Rhythm

Use generous top and bottom spacing.

Suggested rhythm:

```text
Page top padding: 72px–120px desktop
Page side padding: 20px–32px mobile
Section spacing: 40px–72px
Row spacing: 12px–20px
Paragraph spacing: 12px–18px
```

### 5.4 Grid Usage

Do not default to card grids.

Use simple columns only when helpful:

- project name / year
- label / value
- section title / section body
- artifact name / type

---

## 6. Typography

### 6.1 Font Direction

Use a clean sans-serif system font stack.

Recommended:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

For Korean text, ensure readability with system fallback:

```css
font-family:
  Inter,
  Pretendard,
  "Apple SD Gothic Neo",
  "Noto Sans KR",
  system-ui,
  sans-serif;
```

### 6.2 Type Scale

Keep the type scale restrained.

Recommended:

```text
Body: 15px–16px
Small text: 13px–14px
Caption/meta: 12px–13px
Homepage identity sentence: 18px–22px
Page title: 20px–28px
Project title: 24px–32px
```

Avoid oversized hero typography.

### 6.3 Line Height

Use comfortable reading line height.

```text
Body: 1.65–1.8
Short labels: 1.3–1.45
Project rows: 1.4–1.55
```

### 6.4 Font Weight

Use weight sparingly.

Recommended:

```text
Regular: 400
Medium: 500
Semibold: 600 only when necessary
```

Avoid heavy bold text.

---

## 7. Color System

### 7.1 Base Palette

Use near-neutral, warm colors.

Suggested tokens:

```css
--background: #f7f4ef;
--foreground: #171717;
--muted: #6f6a63;
--subtle: #9a948c;
--border: rgba(23, 23, 23, 0.10);
--border-strong: rgba(23, 23, 23, 0.18);
--surface: rgba(255, 255, 255, 0.35);
--hover: rgba(23, 23, 23, 0.04);
```

Alternative cooler palette:

```css
--background: #f8f8f7;
--foreground: #111111;
--muted: #707070;
--subtle: #a0a0a0;
--border: rgba(0, 0, 0, 0.10);
--hover: rgba(0, 0, 0, 0.04);
```

### 7.2 Color Rules

Use color quietly.

Allowed:

- muted text
- subtle hover background
- thin borders
- soft focus rings

Avoid:

- bright accent colors
- gradients
- saturated badges
- colorful project cards
- decorative color blocks

---

## 8. Spacing System

Use a consistent spacing scale.

Recommended Tailwind-like spacing:

```text
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
4xl: 64px
5xl: 96px
```

Spacing should create rhythm, not emptiness.

---

## 9. Page Structure

## 9.1 Home Page

### Purpose

Give a precise first impression.

The homepage should answer:

- Who is this person?
- What kind of work do they do?
- Where can I explore more?

### Recommended structure

```text
[Name / identity sentence]

Primary links:
Projects
Notes
About
Contact

Secondary links:
GitHub / Notion / Email / LinkedIn, if needed

Short philosophy statements:
Make scattered work structured.
Make operations repeatable.
Make marketing measurable.
Make ideas executable.
Make projects visible.
```

### Example Korean identity sentence

```text
양원민은 마케팅, 운영, AI 자동화를 연결해
흩어진 일을 반복 가능한 시스템으로 만드는 프로젝트 매니저입니다.
```

### Example English identity sentence

```text
Yang Wonmin is a project operator building systems
for marketing, operations, and AI-native workflows.
```

### Home page rules

Do:

- keep it short
- use one strong identity sentence
- provide only essential links
- use compact text blocks

Do not:

- add a large profile image
- add a big hero CTA
- add skill badge clouds
- add a long biography
- add project cards to the homepage by default

---

## 9.2 Projects Page

### Purpose

Show work as a clear index.

The projects page should feel like a curated table of contents.

### Recommended row structure

```text
Project Title                          Year
One-line project description
Tags / role / domain, if needed
```

### Example

```text
Campit Influencer Marketing System     2024
No-code operating system for creator-driven campsite growth.

Portfolio Evidence Mapper              2026
A Notion-based evidence pipeline for turning scattered work into portfolio-ready records.

Plays Lounge Pop-up Strategy           2025
Offline brand experience designed around influencer IP, family space, and fandom conversion.
```

### Projects page rules

Do:

- use rows, not cards
- make project titles easy to scan
- keep descriptions short
- show year or period
- allow hover interaction
- link each row to a detail page

Do not:

- use large thumbnails
- use 3-column card grids
- use excessive tags
- use colorful badge systems
- show long case study text on the index page

---

## 9.3 Project Detail Page

### Purpose

Explain the project clearly without overwhelming the reader.

Each detail page should show:

- what the project was
- why it mattered
- what problem existed
- what system was built
- how it was executed
- what changed
- what artifacts were created
- what the project says about the owner

### Recommended structure

```text
Project Title
One-line Summary
Meta: Year / Role / Domain / Tools

Context
Problem
System
Execution
Impact
Artifacts
Reflection
```

### Optional deeper sections

Use collapsible sections or secondary pages for:

- Subprojects
- Task evidence
- Original documentation
- Automation workflow
- Metrics details
- Before / After
- Open questions

### Project detail rules

Do:

- start with a short summary
- use section labels
- keep paragraphs short
- use bullets only when they improve scanability
- separate verified facts from inferred claims
- use “Impact” carefully and accurately

Do not:

- write a long essay
- exaggerate results
- hide uncertainty
- invent metrics
- overuse visual case study blocks
- turn the page into a startup pitch deck

---

## 9.4 Notes Page

### Purpose

Show thinking, principles, and working style.

Notes can include:

- project reflections
- working principles
- AI workflow observations
- marketing / operations thoughts
- short essays
- process logs

### Notes page rules

Do:

- keep it simple
- organize by title and date
- make it feel like a thinking archive

Do not:

- make it look like a newsletter landing page
- over-design the list
- add unnecessary categories early

---

## 9.5 About Page

### Purpose

Explain the person behind the work.

The About page should be brief and grounded.

Recommended sections:

```text
About
What I do
How I work
Selected experience
Contact
```

Avoid a generic resume format.

---

## 10. Component Rules

## 10.1 Navigation

Use minimal text navigation.

Recommended:

```text
Home
Projects
Notes
About
```

Rules:

- small text
- no heavy nav bar
- no sticky header unless necessary
- no large logo
- no hamburger unless mobile requires it

## 10.2 Project Row

Project rows are the core UI component.

Behavior:

- row should be clickable
- title should be prominent but not oversized
- year should be muted and aligned
- description should appear below or beside title
- hover should be subtle

Suggested interaction:

```text
hover:
- text opacity changes slightly
- row shifts 1–2px or underline appears
- optional background tint appears
```

Do not use heavy cards.

## 10.3 Link

Links should feel precise.

Allowed styles:

- underline on hover
- muted arrow
- slight opacity change
- external link marker only when needed

Avoid large button styles.

## 10.4 Section Label

Use small uppercase or muted labels carefully.

Example:

```text
Context
Problem
System
Execution
Impact
```

Avoid decorative labels.

## 10.5 Toggle / Disclosure

Use toggles for deeper detail.

Toggle rules:

- closed by default for dense evidence
- label should be clear
- animation should be subtle
- do not hide essential context inside toggles

---

## 11. Interaction Rules

### 11.1 General Interaction

Interactions should feel:

- fast
- subtle
- tactile
- precise
- calm

Recommended transition:

```css
transition: all 160ms ease;
```

or

```css
transition: color 160ms ease, opacity 160ms ease, transform 160ms ease;
```

### 11.2 Hover

Allowed:

- slight opacity change
- underline
- subtle translate
- very light background tint

Avoid:

- large scale effects
- bouncing animation
- glowing borders
- dramatic reveals
- excessive Framer Motion effects

### 11.3 Page Transition

Optional.

If used:

- fade in
- slight upward motion
- short duration

Avoid complex route transitions.

### 11.4 Cursor / Micro Interaction

Do not overbuild custom cursor effects unless the site is already stable.

The reference may have refined interaction details, but this project should prioritize clarity first.

---

## 12. Responsive Rules

### 12.1 Mobile

Mobile is essential.

Rules:

- preserve text-first identity
- keep side padding around 20px
- avoid multi-column layouts
- project rows should stack naturally
- year can move below or remain aligned right if readable
- line height should remain generous

### 12.2 Desktop

Desktop should not become too wide.

Rules:

- keep content narrow
- avoid filling empty space with decoration
- use white space intentionally
- keep interaction focused

---

## 13. Content Density Rules

### 13.1 Homepage

Very low density.

One strong identity sentence is enough.

### 13.2 Projects Page

Medium density.

A visitor should be able to scan all projects in under 30 seconds.

### 13.3 Project Detail

Controlled density.

Use short sections, not long walls of text.

If a section becomes long, split it into:

```text
Short visible summary
Expandable evidence/details
```

### 13.4 Evidence and Metrics

When presenting evidence:

- verified fact = state directly
- uncertain result = mark as estimate or question
- inferred role = phrase carefully
- missing data = list as open question

---

## 14. Content Voice

### 14.1 Tone

Use a calm, precise, grounded tone.

Avoid self-promotion that sounds inflated.

### 14.2 Preferred Sentence Style

Good:

```text
Built a no-code workflow to coordinate influencer campaigns and track campsite outcomes.
```

Avoid:

```text
Led an innovative influencer marketing transformation that revolutionized campsite growth.
```

### 14.3 Korean Writing Direction

Use Korean that is:

- concise
- factual
- not overly formal
- not too casual
- portfolio-appropriate
- easy to scan

Avoid:

- excessive modifiers
- vague business jargon
- overclaiming
- long paragraphs

---

## 15. Do / Don’t

## 15.1 Do

- Use text-first layouts.
- Use index-style project lists.
- Use thin dividers.
- Use generous but controlled whitespace.
- Use small, precise interactions.
- Use muted metadata.
- Keep writing short.
- Show depth only when the user asks for it through navigation or toggles.
- Make the site feel like a curated archive of work.
- Keep UI components reusable and consistent.
- Separate content structure from presentation.
- Make uncertainty visible instead of inventing claims.

## 15.2 Don’t

- Do not create a generic SaaS landing page.
- Do not use a large gradient hero.
- Do not use project card grids as the default.
- Do not overuse icons.
- Do not overuse rounded cards.
- Do not add random illustrations.
- Do not add fake metrics.
- Do not use loud badges.
- Do not use large CTA buttons.
- Do not make the homepage look like a resume.
- Do not make the About page too long.
- Do not make the project detail page look like a pitch deck.
- Do not copy proprietary source code from the reference site.

---

## 16. Implementation Notes for Claude Code

Before making UI changes, Claude Code should:

1. Read this `DESIGN.md`.
2. Summarize the design direction in 5–8 bullets.
3. Identify which page or component is being modified.
4. Check whether the change violates any “Don’t” rule.
5. Implement the smallest useful UI change.
6. Keep components simple and reusable.
7. Avoid adding dependencies unless necessary.

### Required first implementation order

Recommended order:

```text
1. Global layout
2. Typography and design tokens
3. Home page
4. Projects index page
5. Project detail template
6. Sample project data
7. Notes/About page
8. Refinement pass
```

### Suggested file structure

```text
/app
  page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  notes/page.tsx
  about/page.tsx

/components
  SiteShell.tsx
  Header.tsx
  ProjectRow.tsx
  Section.tsx
  TextLink.tsx
  Disclosure.tsx

/data
  projects.ts

/docs
  DESIGN.md
  CONTENT_MODEL.md
  PRD.md
  TASKS.md
```

### Design tokens should be centralized

Use CSS variables or a shared Tailwind theme.

Do not hardcode many one-off values across components.

---

## 17. Suggested Data Model

Project content should be structured so the UI can stay simple.

Example:

```ts
export type Project = {
  slug: string
  title: string
  year: string
  summary: string
  role?: string
  domain?: string[]
  tools?: string[]
  sections: {
    context?: string
    problem?: string
    system?: string
    execution?: string
    impact?: string
    artifacts?: string
    reflection?: string
  }
}
```

The UI should not require every project to have every field.

If information is missing, omit that section rather than showing empty placeholders.

---

## 18. Sample Project Row Copy

```text
Campit Influencer Marketing System       2024
No-code operating system for creator-driven campsite growth.

Portfolio Evidence Mapper                2026
A Notion-based evidence pipeline for turning scattered work into portfolio-ready records.

Plays Lounge Pop-up Strategy             2025
Offline brand experience designed around influencer IP, family space, and fandom conversion.

Gugok Dakgalbi Brand Launch              2025
Retro F&B brand system inspired by Gangchon memories and local nostalgia.
```

---

## 19. Sample Homepage Copy

### Korean

```text
양원민은 마케팅, 운영, AI 자동화를 연결해
흩어진 일을 반복 가능한 시스템으로 만드는 프로젝트 매니저입니다.

Projects
Notes
About
Contact

흩어진 일을 구조화합니다.
반복되는 일을 시스템화합니다.
감각적인 일을 측정 가능하게 만듭니다.
아이디어를 실행 가능한 단위로 바꿉니다.
프로젝트가 읽히도록 정리합니다.
```

### English

```text
Yang Wonmin is a project operator building systems
for marketing, operations, and AI-native workflows.

Projects
Notes
About
Contact

Make scattered work structured.
Make operations repeatable.
Make marketing measurable.
Make ideas executable.
Make projects visible.
```

---

## 20. Accuracy and Reference Policy

This project may be inspired by `rauno.me`, but it should not copy private or proprietary source code.

Allowed:

- analyze public UI behavior
- reference layout patterns
- recreate the general design attitude
- build an original implementation
- use public text observations for inspiration

Not allowed:

- copy proprietary source code directly
- claim the design is an official clone
- use copied assets without permission
- present the result as Rauno’s design

The correct goal:

```text
Original implementation inspired by the restraint, typography, and index-based structure of rauno.me.
```

---

## 21. Final Design Summary

This portfolio should be:

```text
Text-first.
Quiet.
Precise.
Index-like.
Systematic.
Evidence-aware.
Interaction-light.
Content-driven.
```

The highest priority is not visual decoration.

The highest priority is to make the owner’s work feel:

```text
clear
structured
credible
thoughtful
repeatable
worth exploring
```
