import { ArrowRight, Store } from "lucide-react";
import { AnimatedGroup } from "./AnimatedGroup";
import { PhoneMock } from "./PhoneMock";
import { trustChips } from "./data";
import heroImage from "@/assets/kirakart-shop-post.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-social/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0 0 0 / 0.06) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <AnimatedGroup className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Now live in Chennai &amp; Bengaluru
          </div>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            The Social Commerce Platform for Your Neighborhood 
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover trusted local shops, follow your favorites, and shop directly from the people you already know all in one place.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              Explore Nearby Shops
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Store className="h-4 w-4" />
              List your shop
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </AnimatedGroup>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 via-transparent to-social/20 blur-2xl" />
          <PhoneMock image={heroImage} />
          {/* floating chips */}
          <div className="absolute -top-2 -left-4 hidden rounded-2xl border border-hairline bg-background/90 px-3 py-2 text-xs font-medium shadow-lift backdrop-blur sm:block">
            <span className="text-brand">●</span> 24 shops within 1km
          </div>
          <div className="absolute -right-2 bottom-6 hidden rounded-2xl border border-hairline bg-background/90 px-3 py-2 text-xs font-medium shadow-lift backdrop-blur sm:block">
            <span className="text-social">●</span> Follow Your Favorites
          </div>
        </div>
      </div>
    </section>
  );
}
