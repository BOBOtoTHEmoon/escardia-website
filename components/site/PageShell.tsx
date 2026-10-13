import { ReactNode } from "react";

/** Navy title band used at the top of every inner page, so the navbar always sits on navy. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#0B1530] text-white">
      <div aria-hidden className="navy-grid absolute inset-0" />
      <div aria-hidden className="absolute -right-40 -top-56 h-[30rem] w-[30rem] rounded-full bg-[#2F5FED] opacity-30 blur-[130px]" />
      <div className="relative mx-auto max-w-[53.75rem] px-5 pb-14 pt-[8rem] sm:px-8 sm:pb-16 sm:pt-[9.375rem]">
        {eyebrow && <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-[#9DB4FF]">{eyebrow}</p>}
        <h1 className="mt-3 text-[2.125rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2.875rem]">{title}</h1>
        {intro && <div className="mt-4 max-w-[38.75rem] text-[1rem] leading-relaxed text-white/70">{intro}</div>}
      </div>
    </section>
  );
}

export type LegalSection = { title: string; body: string | string[] };

/** Legal sections. Lines that start with "• " become a bullet list. */
export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((s) => {
        const paras = Array.isArray(s.body) ? s.body : [s.body];
        return (
          <section key={s.title}>
            <h2 className="text-[1.25rem] font-semibold text-ink">{s.title}</h2>
            <div className="mt-3 space-y-3 text-[0.9375rem] leading-[1.75] text-text">
              {paras.map((p, i) =>
                p.startsWith("• ") ? (
                  <ul key={i} className="space-y-2">
                    {p.split("\n").map((li) => (
                      <li key={li} className="flex gap-3">
                        <span className="mt-[0.6875rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{li.replace(/^• /, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{p}</p>
                )
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/** Page body with legal sections, plus anything extra underneath. */
export function LegalBody({ sections, children }: { sections: LegalSection[]; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-[53.75rem] px-5 py-14 sm:px-8 sm:py-20">
      <LegalSections sections={sections} />
      {children}
    </div>
  );
}
