"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const logos = [
  { name: "Acme Corp", url: "https://logo.clearbit.com/acme.com", fallback: "ACME" },
  { name: "GlobalBank", url: "https://logo.clearbit.com/globalbank.com", fallback: "GlobalBank" },
  { name: "Stripe", url: "https://logo.clearbit.com/stripe.com", fallback: "Stripe" },
  { name: "Linear", url: "https://logo.clearbit.com/linear.app", fallback: "Linear" },
  { name: "Vercel", url: "https://logo.clearbit.com/vercel.com", fallback: "Vercel" },
  { name: "Intercom", url: "https://logo.clearbit.com/intercom.com", fallback: "Intercom" },
  { name: "Retell", url: "https://logo.clearbit.com/retellai.com", fallback: "Retell" },
  { name: "OpenAI", url: "https://logo.clearbit.com/openai.com", fallback: "OpenAI" },
];

export function LogoCloud() {
  const t = useTranslations('LogoCloud');

  return (
    <section className="py-12 border-y border-border-light bg-bg-secondary/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-50" />
      
      <div className="container mx-auto px-4 mb-8 text-center relative z-10">
        <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">
          {t('title')}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 px-8 md:px-12 group-hover:[animation-play-state:paused]">
          {/* First Loop */}
          {logos.map((logo, i) => (
             <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
          {/* Second Loop for seamlessness */}
          {logos.map((logo, i) => (
             <LogoItem key={`${logo.name}-duplicate-${i}`} logo={logo} />
          ))}
        </div>
        
        {/* Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bg-secondary via-bg-secondary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-bg-secondary via-bg-secondary/80 to-transparent z-10" />
      </div>
    </section>
  );
}

function LogoItem({ logo }: { logo: typeof logos[0] }) {
    return (
        <div className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
            <span className="text-xl md:text-2xl font-bold font-display text-text-primary">{logo.fallback}</span>
        </div>
    )
}
