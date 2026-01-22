"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTA() {
  const t = useTranslations('CTA');
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-bg-primary">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-brand-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center text-text-primary relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-text-primary">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 shadow-lg shadow-brand-primary/20">
               {t('start')}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-10 border-border-medium hover:bg-bg-secondary">
               {t('sales')}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-text-secondary">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                {t('features.0')}
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                {t('features.1')}
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                {t('features.2')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
