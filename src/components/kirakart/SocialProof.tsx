import { stats } from "./data";

export function SocialProof() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Built with local shop owners, from day one
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-hairline bg-surface px-5 py-6 text-center shadow-card"
          >
            <div className="font-display text-3xl leading-none text-foreground sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
