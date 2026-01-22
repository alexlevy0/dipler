"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { Clock, Euro, BookOpen, Globe, Headphones, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export function Metrics() {
  const t = useTranslations('Metrics');

  const metrics = [
    { icon: Clock, value: 500, suffix: "ms", label: t('latency'), description: t('latencyDesc') },
    { icon: Euro, value: 0.06, suffix: "€/min", label: t('price'), description: t('priceDesc'), decimals: 2 },
    { icon: BookOpen, value: 100, suffix: " romans", label: t('rag'), description: t('ragDesc') },
    { icon: Globe, value: 150, suffix: "+", label: t('languages'), description: t('languagesDesc') },
    { icon: Headphones, value: 2, suffix: "h", label: t('support'), description: t('supportDesc'), prefix: "<" },
    { icon: Calendar, value: 3, suffix: " jours", label: t('setup'), description: t('setupDesc'), prefix: "1-" },
  ];

  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border-light bg-bg-secondary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-bg-primary shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <metric.icon size={24} />
                </div>
                <div className="text-3xl font-bold font-display text-text-primary">
                  {'prefix' in metric && <span>{metric.prefix}</span>}
                  <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">{metric.label}</h3>
              <p className="text-text-secondary">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
