import { Section } from "./Section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, ShoppingBag, Store } from "lucide-react";

const shoppers = [
  "Discover nearby shops",
  "Get notified about new arrivals and offers",
  "Follow your favorite local businesses",
  "Check store updates before you visit",
];

const owners = [
  "Post in seconds, no design skills needed",
  "Built-in regulars & order dashboard",
  "Zero-commission launch pricing",
  "Reach people within walking distance who are actually ready to buy",
];

export function AudienceTabs() {
  return (
    <Section id="audience">
      <Tabs defaultValue="shoppers" className="mx-auto max-w-4xl">
        <div className="flex justify-center">
          <TabsList className="h-12 rounded-full border border-hairline bg-surface p-1">
            <TabsTrigger
              value="shoppers"
              className="h-10 rounded-full px-5 data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              <ShoppingBag className="mr-2 h-4 w-4" /> For Shoppers
            </TabsTrigger>
            <TabsTrigger
              value="owners"
              className="h-10 rounded-full px-5 data-[state=active]:bg-foreground data-[state=active]:text-background"
            >
              <Store className="mr-2 h-4 w-4" /> For Shop Owners
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="shoppers" className="mt-10">
          <AudienceCard
            headline="Everything You Need in One Place."
            bullets={shoppers}
            accent="brand"
          />
        </TabsContent>
        <TabsContent value="owners" className="mt-10">
          <AudienceCard
            headline="Your shop, one post away from your next customer."
            bullets={owners}
            accent="social"
          />
        </TabsContent>
      </Tabs>
    </Section>
  );
}

function AudienceCard({
  headline,
  bullets,
  accent,
}: {
  headline: string;
  bullets: string[];
  accent: "brand" | "social";
}) {
  const dot = accent === "brand" ? "bg-brand" : "bg-social";
  const chip = accent === "brand" ? "text-brand" : "text-social";
  return (
    <div className="rounded-3xl border border-hairline bg-surface p-8 shadow-card sm:p-12">
      <h3 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
        {headline}
      </h3>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span
              className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dot}/15`}
            >
              <Check className={`h-3 w-3 ${chip}`} strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-foreground">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
