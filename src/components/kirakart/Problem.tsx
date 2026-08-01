import { Section } from "./Section";
import { AnimatedGroup } from "./AnimatedGroup";
import { pains } from "./data";

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The Problem"
      title={<>Local shopping is broken. Here's why.</>}
    >
      <AnimatedGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group flex flex-col rounded-3xl border border-hairline bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-xl leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          );
        })}
      </AnimatedGroup>

      <p className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl leading-snug text-foreground sm:text-3xl">
        The result? Customers struggle to discover trusted local businesses, and shop owners lose opportunities to build lasting relationships.
      </p>
    </Section>
  );
}
