"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Brain, Volume2, Clock, Zap, Webhook, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function VisualBuilder() {
  const t = useTranslations('VisualBuilder');

  const capabilities = [
    {
      icon: Brain,
      title: t('capabilities.adaptation.title'),
      description: t('capabilities.adaptation.desc'),
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: Volume2,
      title: t('capabilities.interruptions.title'),
      description: t('capabilities.interruptions.desc'),
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      title: t('capabilities.noTree.title'),
      description: t('capabilities.noTree.desc'),
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      icon: Zap,
      title: t('capabilities.context.title'),
      description: t('capabilities.context.desc'),
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Webhook,
      title: t('capabilities.api.title'),
      description: t('capabilities.api.desc'),
      color: "text-rose-500",
      bgColor: "bg-rose-100",
    },
    {
      icon: MessageSquare,
      title: t('capabilities.memory.title'),
      description: t('capabilities.memory.desc'),
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
    },
  ];

  return (
    <section className="py-24 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">{t('badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t.rich('title', {
                gradient: (chunks) => <span className="text-gradient">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-border-light shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", capability.bgColor)}>
                <capability.icon className={cn("w-6 h-6", capability.color)} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integration callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-brand-primary/5 to-accent-purple/5 rounded-3xl border border-brand-primary/10"
        >
          <p className="text-lg text-text-secondary">
             {t.rich('integration', {
                bold: (chunks) => <span className="font-semibold text-text-primary">{chunks}</span>
             })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
