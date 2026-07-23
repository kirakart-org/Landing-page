import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/kirakart/Header";
import { Hero } from "@/components/kirakart/Hero";
import { Problem } from "@/components/kirakart/Problem";
import { Solution } from "@/components/kirakart/Solution";
import { HowItWorks } from "@/components/kirakart/HowItWorks";
import { AudienceTabs } from "@/components/kirakart/AudienceTabs";
import { FeatureGrid } from "@/components/kirakart/FeatureGrid";
import { Comparison } from "@/components/kirakart/Comparison";
import { DashboardPreview } from "@/components/kirakart/DashboardPreview";
import { SocialProof } from "@/components/kirakart/SocialProof";
import { FinalCTA } from "@/components/kirakart/FinalCTA";
import { Footer } from "@/components/kirakart/Footer";

const title = "Kirakart — The feed for your neighborhood";
const description =
  "Kirakart turns nearby shops into channels you can follow, scroll, and shop from. A social feed where every post can be bought — hyperlocal, commission-free at launch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <AudienceTabs />
        <FeatureGrid />
        <Comparison />
        <DashboardPreview />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
