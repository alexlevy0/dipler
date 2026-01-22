"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, Users, Palette, CreditCard, Headphones, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

export function Pricing() {
  const t = useTranslations('Pricing');

  const highlights = [
    { icon: Palette, title: t('card.highlights.brand.title'), description: t('card.highlights.brand.desc') },
    { icon: Users, title: t('card.highlights.multi.title'), description: t('card.highlights.multi.desc') },
    { icon: CreditCard, title: t('card.highlights.margin.title'), description: t('card.highlights.margin.desc') },
    { icon: Headphones, title: t('card.highlights.support.title'), description: t('card.highlights.support.desc') },
  ];

  const features = [
    "Whitelabel complet (votre marque, votre logo)",
    "Sous-comptes clients illimités",
    "Marges personnalisables par client",
    "Support prioritaire (<2h)",
    "Accès API complet",
    "Documentation & Formation dédiées",
    "Gestion des cycles de facturation",
    "Limites de minutes personnalisables",
  ]; 
  // Note: Since features array in JSON is just an array of strings, I can map it directly if I use returning array from useTranslations, BUT simpler is to map hardcoded keys or get the raw array.
  // next-intl 3.0: t.raw('features') returns the array.
  
  const featureList = t.raw('features') as string[];

  return (
    <section className="py-24 bg-bg-primary" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">{t('badge')}</Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-brand-primary/30 shadow-glow ring-1 ring-brand-primary/20">
              {/* Gradient BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-accent-purple/5 pointer-events-none" />
              
              <div className="relative z-10 p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary mb-2">{t('card.title')}</h3>
                    <p className="text-text-secondary">{t('card.subtitle')}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="flex items-baseline gap-2 justify-center md:justify-end">
                      <span className="text-5xl font-display font-bold text-text-primary">{t('card.price')}</span>
                    </div>
                    <p className="text-text-tertiary mt-1">{t('card.priceLabel')}</p>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {highlights.map((highlight) => (
                    <div key={highlight.title} className="p-4 bg-white/50 rounded-xl text-center">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
                        <highlight.icon className="w-5 h-5 text-brand-primary" />
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm">{highlight.title}</h4>
                      <p className="text-xs text-text-tertiary mt-1">{highlight.description}</p>
                    </div>
                  ))}
                </div>

                {/* Usage Pricing */}
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 mb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-emerald-800">{t('card.usageTitle')}</h4>
                      <p className="text-emerald-700">{t('card.usageSubtitle')}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <span className="text-4xl font-bold text-emerald-800">{t('card.usagePrice')}</span>
                      <span className="text-emerald-600 ml-2">/ minute</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {featureList.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-10 text-lg shadow-lg shadow-brand-primary/20 rounded-full">
                    {t('card.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-text-tertiary mt-8 max-w-xl mx-auto">
          {t('bottomNote')}
        </p>
      </div>
    </section>
  );
}
