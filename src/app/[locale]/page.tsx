import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Metrics } from "@/components/landing/Metrics";
import { DevExperience } from "@/components/landing/DevExperience";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { AgencyCTA } from "@/components/landing/AgencyCTA";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { InternalAutomation } from "@/components/landing/InternalAutomation";
import { ExternalAutomation } from "@/components/landing/ExternalAutomation";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Benefits } from "@/components/landing/Benefits";
import { HumanInTheLoop } from "@/components/landing/HumanInTheLoop";
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoCloud />
      <ValueProposition />
      <Metrics />
      <HowItWorks />
      <InternalAutomation />
      <ExternalAutomation />
      <DashboardPreview />
      <Benefits />
      <HumanInTheLoop />
      <DevExperience />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <AgencyCTA />
      <Footer />
    </main>
  );
}
