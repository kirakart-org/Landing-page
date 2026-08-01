import { Section } from "./Section";
import { Check, X } from "lucide-react";
import { comparison } from "./data";
import type { ComparisonRow } from "./types";

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "yes")
    return (
      <span
        className={`inline-grid h-7 w-7 place-items-center rounded-full ${
          highlight ? "bg-brand text-brand-foreground" : "bg-foreground/10 text-foreground"
        }`}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-muted text-muted-foreground/70">
        <X className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="text-xs text-muted-foreground">{value}</span>
  );
}

export function Comparison() {
  return (
    <Section
      id="pricing"
      eyebrow="WHY CHOOSE KIRAKART"
      title={<>Why Local Businesses Choose Kirakart?</>}
    >
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-3xl border border-hairline bg-surface shadow-card lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-hairline bg-surface-elevated text-left">
              <th className="px-6 py-5 text-sm font-medium text-muted-foreground">
                What You Get
              </th>
              <th className="px-6 py-5">
                <div className="font-display text-lg text-foreground">
                  Kirakart
                </div>
                <div className="text-xs font-normal text-brand">
                  Built for local
                </div>
              </th>
              <th className="px-6 py-5">
                <div className="font-display text-lg text-foreground">
                  WhatsApp & Instagram
                </div>
                <div className="text-xs font-normal text-muted-foreground">
                  Manual messages, no storefront
                </div>
              </th>
              <th className="px-6 py-5">
                <div className="font-display text-lg text-foreground">
                  Traditional Marketplaces
                </div>
                <div className="text-xs font-normal text-muted-foreground">
                  SKU-first, no local place
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row: ComparisonRow, i) => (
              <tr
                key={row.label}
                className={i % 2 ? "bg-surface" : "bg-surface-elevated/40"}
              >
                <td className="px-6 py-5 text-sm font-medium text-foreground">
                  {row.label}
                </td>
                <td className="px-6 py-5">
                  <Cell value={row.kirakart} highlight />
                </td>
                <td className="px-6 py-5">
                  <Cell value={row.social} />
                </td>
                <td className="px-6 py-5">
                  <Cell value={row.marketplace} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked */}
      <div className="grid gap-4 lg:hidden">
        {comparison.map((row) => (
          <div
            key={row.label}
            className="rounded-2xl border border-hairline bg-surface p-5 shadow-card"
          >
            <div className="text-sm font-semibold text-foreground">
              {row.label}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="mb-2 text-[11px] font-medium tracking-wide text-brand uppercase">
                  Kirakart
                </div>
                <Cell value={row.kirakart} highlight />
              </div>
              <div>
                <div className="mb-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  DM workflow
                </div>
                <Cell value={row.social} />
              </div>
              <div>
                <div className="mb-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  Large marketplace
                </div>
                <Cell value={row.marketplace} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
