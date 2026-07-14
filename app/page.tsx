import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { WorkflowSection } from "@/components/workflow-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
