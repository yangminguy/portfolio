export function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xs uppercase tracking-section text-subtle font-medium">
        {label}
      </h2>
      <div className="mt-3 text-base text-foreground/90 max-w-[620px]">
        {children}
      </div>
    </section>
  );
}
