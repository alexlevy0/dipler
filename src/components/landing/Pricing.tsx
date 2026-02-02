"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check, Search, ListTodo, Map, FileText, ArrowRight, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

export function Pricing() {
  const t = useTranslations('Pricing');

  const highlights = [
    { icon: Search, title: t('card.highlights.analysis.title'), description: t('card.highlights.analysis.desc') },
    { icon: ListTodo, title: t('card.highlights.priority.title'), description: t('card.highlights.priority.desc') },
    { icon: Map, title: t('card.highlights.roadmap.title'), description: t('card.highlights.roadmap.desc') },
    { icon: FileText, title: t('card.highlights.quote.title'), description: t('card.highlights.quote.desc') },
  ];

  const includes = t.raw('card.includes') as string[];
  const afterAuditPoints = t.raw('afterAudit.points') as string[];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Audit Card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative overflow-hidden border-brand-primary/30 shadow-glow ring-1 ring-brand-primary/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-accent-purple/5 pointer-events-none" />
                
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{t('card.title')}</h3>
                      <p className="text-text-secondary">{t('card.subtitle')}</p>
                    </div>
                    <div className="text-left md:text-right bg-brand-primary/10 px-4 py-2 rounded-xl border border-brand-primary/20">
                      <span className="text-3xl font-display font-bold text-brand-primary">{t('card.price')}</span>
                      <p className="text-xs text-text-tertiary uppercase tracking-wider font-bold mt-1">{t('card.priceLabel')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {highlights.map((highlight) => (
                      <div key={highlight.title} className="p-4 bg-white/40 dark:bg-slate-800/40 rounded-xl border border-white/20 dark:border-slate-700/30">
                        <div className="flex items-center gap-3 mb-2">
                          <highlight.icon className="w-5 h-5 text-brand-primary" />
                          <h4 className="font-semibold text-text-primary text-sm">{highlight.title}</h4>
                        </div>
                        <p className="text-xs text-text-tertiary ml-8">{highlight.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      {t('card.includesTitle')}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8 border-t border-border-light/50 flex justify-center md:justify-start">
                    <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <Button size="lg" className="w-full md:w-auto h-12 px-8 text-lg shadow-lg shadow-brand-primary/20 rounded-full">
                        {t('card.cta')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar / After Audit */}
          <div className="space-y-6">
            {/* After Audit Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 bg-bg-secondary/50 border-dashed border-2 border-border-light h-full">
                <h3 className="text-xl font-bold text-text-primary mb-2">{t('afterAudit.title')}</h3>
                <p className="text-sm text-text-secondary mb-6">{t('afterAudit.subtitle')}</p>
                <ul className="space-y-4">
                  {afterAuditPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary text-xs font-bold">
                        {i + 1}
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Free Call CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20 text-center">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">{t('freeCall.title')}</h3>
                <p className="text-xs text-text-secondary mb-4">{t('freeCall.subtitle')}</p>
                <a href="https://calendly.com/free-call" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10">
                    <Phone className="w-3 h-3 mr-2" />
                    {t('freeCall.cta')}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-text-tertiary mt-12 text-sm max-w-xl mx-auto italic">
          {t('bottomNote')}
        </p>
      </div>
    </section>
  );
}
