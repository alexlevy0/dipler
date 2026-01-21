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
      <GlobalLatency />
      <IntegrationBeam />
      <HowItWorks />
      <InteractiveDemo />
      <Templates />
      <UseCases />
      <Integrations />
      <Comparison />
      <Testimonials />
      <Pricing />
      <ROICalculator />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
