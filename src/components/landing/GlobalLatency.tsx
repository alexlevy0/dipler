"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Headphones, PhoneOff, Shield, Clock, Server } from "lucide-react";
import { useTranslations } from "next-intl";

export function GlobalLatency() {
  const t = useTranslations('GlobalLatency');

  const features = [
    {
      icon: MapPin,
      title: t('features.servers.title'),
      description: t('features.servers.desc'),
      highlight: true,
    },
    {
      icon: Headphones,
      title: t('features.iris.title'),
      description: t('features.iris.desc'),
      highlight: true,
    },
    {
      icon: PhoneOff,
      title: t('features.detection.title'),
      description: t('features.detection.desc'),
      highlight: false,
    },
    {
      icon: Shield,
      title: t('features.isolation.title'),
      description: t('features.isolation.desc'),
      highlight: false,
    },
    {
      icon: Clock,
      title: t('features.latency.title'),
      description: t('features.latency.desc'),
      highlight: false,
    },
    {
      icon: Server,
      title: t('features.data.title'),
      description: t('features.data.desc'),
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">{t('badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t.rich('title', {
                highlight: (chunks) => <span className="text-brand-primary">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                feature.highlight 
                  ? "bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 border-brand-primary/20 shadow-lg" 
                  : "bg-white border-border-light hover:shadow-md"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                feature.highlight ? "bg-brand-primary/10" : "bg-bg-secondary"
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.highlight ? "text-brand-primary" : "text-text-secondary"}`} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>{t('trust.paris')}</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span>{t('trust.rgpd')}</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>{t('trust.iris')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
