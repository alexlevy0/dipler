import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Metrics } from "@/components/landing/Metrics";
import { DevExperience } from "@/components/landing/DevExperience";
import { Features } from "@/components/landing/Features";
import { GlobalLatency } from "@/components/landing/GlobalLatency";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { InteractiveDemo } from "@/components/landing/InteractiveDemo";
import { UseCases } from "@/components/landing/UseCases";
import { Integrations } from "@/components/landing/Integrations";
import { Comparison } from "@/components/landing/Comparison";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { ROICalculator } from "@/components/landing/ROICalculator";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { VoiceGallery } from "@/components/landing/VoiceGallery";
import { Security } from "@/components/landing/Security";
import { Templates } from "@/components/landing/Templates";
import { IntegrationBeam } from "@/components/landing/IntegrationBeam";
import { VisualBuilder } from "@/components/landing/VisualBuilder";
import { AnalyticsPreview } from "@/components/landing/AnalyticsPreview";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { AgencyCTA } from "@/components/landing/AgencyCTA";
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <VoiceGallery />
      <LogoCloud />
      <Metrics />
      <DevExperience />
      <Features />
      <AnalyticsPreview />
      <GlobalLatency />
      <IntegrationBeam />
      <HowItWorks />
      <VisualBuilder />
      <InteractiveDemo />
      <Templates />
      <UseCases />
      <Integrations />
      <Comparison />
      <Testimonials />
      <Infrastructure />
      <Pricing />
      <ROICalculator />
      <Security />
      <FAQ />
      <CTA />
      <AgencyCTA />
      <Footer />
    </main>
  );
}
