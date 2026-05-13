const principles = [
  "흩어진 일을 구조화합니다.",
  "반복되는 일을 시스템화합니다.",
  "감각적인 일을 측정 가능하게 만듭니다.",
  "아이디어를 실행 가능한 단위로 바꿉니다.",
  "프로젝트가 읽히도록 정리합니다.",
];

/**
 * Five short philosophy statements at the bottom of the home page.
 * Muted, generous line-height, no decoration.
 */
export function Principles() {
  return (
    <ul className="text-sm text-muted leading-[1.95]">
      {principles.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}
