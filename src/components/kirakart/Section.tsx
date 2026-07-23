import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28",
        className,
      )}
    >
      {(eyebrow || title || intro) && (
        <div
          className={cn(
            "mb-12 sm:mb-16",
            align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
          )}
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              {intro}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
