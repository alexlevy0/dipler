"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, CreditCard, Users, Clock, ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export function AgencyCTA() {
  const t = useTranslations('AgencyCTA');

  const benefits = [
    { icon: TrendingUp, title: t('benefits.revenue.title'), description: t('benefits.revenue.desc') },
    { icon: CreditCard, title: t('benefits.billing.title'), description: t('benefits.billing.desc') },
    { icon: Users, title: t('benefits.multi.title'), description: t('benefits.multi.desc') },
    { icon: Clock, title: t('benefits.cycles.title'), description: t('benefits.cycles.desc') },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">{t('badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 whitespace-pre-line">
            {t.rich('title', {
                
            })}
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Revenue Model Highlight */}
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-blue-100">
              {t.rich('example', {
                bold: (chunks) => <span className="font-bold text-white">{chunks}</span>
              })}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendar.app.google/your-booking-link" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-blue-50 shadow-xl">
                {t('cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              <Calendar className="mr-2 w-4 h-4" />
              {t('demo')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
