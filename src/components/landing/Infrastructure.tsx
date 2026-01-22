"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Shield, Database, Lock, Eye, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function Infrastructure() {
  const t = useTranslations('Infrastructure');

  const pillars = [
    {
      title: t('pillars.rgpd.title'),
      description: t('pillars.rgpd.desc'),
      icon: Shield,
      features: t.raw('pillars.rgpd.features') as string[],
      color: "text-emerald-500",
      gradient: "from-emerald-500/10 to-green-500/10",
    },
    {
      title: t('pillars.europe.title'),
      description: t('pillars.europe.desc'),
      icon: Database,
      features: t.raw('pillars.europe.features') as string[],
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: t('pillars.security.title'),
      description: t('pillars.security.desc'),
      icon: Lock,
      features: t.raw('pillars.security.features') as string[],
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: t('pillars.privacy.title'),
      description: t('pillars.privacy.desc'),
      icon: Eye,
      features: t.raw('pillars.privacy.features') as string[],
      color: "text-amber-500",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6">{t('badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t.rich('title', {
                gradient: (chunks) => <span className="text-gradient">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 relative overflow-hidden">
                {/* Gradient BG */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", pillar.gradient)} />

                <div className="relative z-10">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", pillar.gradient)}>
                    <pillar.icon className={cn("w-7 h-7", pillar.color)} />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-primary">
                        <Check className={cn("w-4 h-4", pillar.color)} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
