import { Section } from "./Section";
import { AnimatedGroup } from "./AnimatedGroup";
import { features } from "./data";

export function FeatureGrid() {
  return (
    <Section
      id="features"
      eyebrow="What's Inside"
      title={<>Everything a shop channel needs.</>}
    >
      <AnimatedGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-foreground text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}
