/**
 * Home page identity statement. A single short sentence that defines the
 * person behind the work. Sized larger than body but never hero-sized.
 */
export function IdentityStatement() {
  return (
    <p className="text-lg sm:text-xl leading-[1.55] text-foreground max-w-[560px]">
      양원민은 마케팅, 운영, AI 자동화를 연결해{" "}
      <span className="text-muted">
        흩어진 일을 반복 가능한 시스템으로 만드는
      </span>{" "}
      프로젝트 매니저입니다.
    </p>
  );
}
