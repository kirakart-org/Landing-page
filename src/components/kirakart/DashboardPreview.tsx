import { Section } from "./Section";
import { AnimatedGroup } from "./AnimatedGroup";
import {
  LayoutDashboard,
  FileText,
  Package,
  Users,
  LineChart as LineIcon,
  Settings,
  TrendingUp,
} from "lucide-react";
import { orders } from "./data";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: false },
  { icon: FileText, label: "Posts", active: false },
  { icon: Package, label: "Orders", active: true },
  { icon: Users, label: "Regulars", active: false },
  { icon: LineIcon, label: "Insights", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const chartPoints = [12, 18, 15, 24, 32, 30, 42, 48, 60, 58, 72, 88, 96, 142];

function statusStyle(s: string) {
  if (s === "New") return "bg-brand/12 text-brand";
  if (s === "Packed") return "bg-social/12 text-social";
  return "bg-foreground/8 text-muted-foreground";
}

export function DashboardPreview() {
  return (
    <Section
      id="dashboard"
      eyebrow="For Shop Owners"
      title={<>Run your channel like a business, not a side hustle.</>}
      intro={
        <>
          No spreadsheets, no juggling three apps. See what&apos;s selling, who&apos;s
          becoming regulars, and what to post next — all in one dashboard built for
          shop owners, not enterprise sellers.
        </>
      }
    >
      <AnimatedGroup>
        <div className="relative rounded-[2rem] border border-hairline bg-surface p-3 shadow-lift sm:p-4">
          <div className="grid overflow-hidden rounded-2xl border border-hairline bg-surface-elevated md:grid-cols-[220px_1fr]">
            {/* sidebar */}
            <aside className="hidden border-r border-hairline bg-surface p-4 md:block">
              <div className="mb-6 flex items-center gap-2 px-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <span className="text-xs font-bold">L</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Lakshmi Stores</div>
                  <div className="text-[11px] text-muted-foreground">
                    Owner console
                  </div>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((n) => {
                  const Icon = n.icon;
                  return (
                    <button
                      key={n.label}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                        n.active
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {n.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* main */}
            <div className="p-5 sm:p-7">
              {/* metric cards */}
              <div className="grid gap-3 sm:grid-cols-3">
                <MetricCard label="New regulars this week" value="+142" trend="+18%" tone="brand" />
                <MetricCard label="Orders pending" value="18" trend="4 new" tone="social" />
                <MetricCard label="Corner reach · 7d" value="12.4k" trend="+9%" tone="neutral" />
              </div>

              {/* chart */}
              <div className="mt-5 rounded-2xl border border-hairline bg-surface p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Regular growth
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last 14 days
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">
                    <TrendingUp className="h-3 w-3" /> +32%
                  </div>
                </div>
                <Sparkline points={chartPoints} />
              </div>

              {/* orders */}
              <div className="mt-5 rounded-2xl border border-hairline bg-surface">
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="text-sm font-semibold text-foreground">
                    Recent orders
                  </div>
                  <button className="text-xs font-medium text-brand hover:underline">
                    View all
                  </button>
                </div>
                <div className="divide-y divide-hairline">
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="flex items-center gap-3 px-5 py-3 text-sm"
                    >
                      <span className="w-14 shrink-0 font-mono text-xs text-muted-foreground">
                        {o.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium text-foreground">
                          {o.customer}
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {o.item}
                        </div>
                      </div>
                      <span
                        className={`hidden rounded-full px-2 py-0.5 text-[11px] font-semibold sm:inline ${statusStyle(o.status)}`}
                      >
                        {o.status}
                      </span>
                      <span className="w-16 shrink-0 text-right text-sm font-semibold text-foreground">
                        {o.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedGroup>
    </Section>
  );
}

function MetricCard({
  label,
  value,
  trend,
  tone,
}: {
  label: string;
  value: string;
  trend: string;
  tone: "brand" | "social" | "neutral";
}) {
  const trendColor =
    tone === "brand"
      ? "text-brand"
      : tone === "social"
        ? "text-social"
        : "text-muted-foreground";
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="font-display text-3xl leading-none text-foreground">
          {value}
        </div>
        <div className={`text-xs font-semibold ${trendColor}`}>{trend}</div>
      </div>
    </div>
  );
}

function Sparkline({ points }: { points: number[] }) {
  const w = 600;
  const h = 140;
  const pad = 8;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = (w - pad * 2) / (points.length - 1);
  const norm = (v: number) =>
    h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${norm(p)}`)
    .join(" ");
  const area = `${d} L ${pad + (points.length - 1) * step} ${h} L ${pad} ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-32 w-full">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.2 32)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.68 0.2 32)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path
        d={d}
        fill="none"
        stroke="oklch(0.68 0.2 32)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={pad + i * step}
          cy={norm(p)}
          r={i === points.length - 1 ? 4 : 0}
          fill="oklch(0.68 0.2 32)"
        />
      ))}
    </svg>
  );
}
