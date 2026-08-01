import { Section } from "./Section";
import { AnimatedGroup } from "./AnimatedGroup";
import { steps } from "./data";

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How It Works"
      title={<>Shop Local in 3 Simple Steps.</>}
    >
      <div className="relative">
        {/* dashed connector (desktop) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute top-14 left-0 hidden h-8 w-full text-brand/40 lg:block"
        >
          <line
            x1="16%"
            y1="16"
            x2="84%"
            y2="16"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        <AnimatedGroup className="grid gap-6 lg:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="group relative flex flex-col rounded-3xl border border-hairline bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-brand">
                    {s.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            );
          })}
        </AnimatedGroup>
      </div>
    </Section>
  );
}
