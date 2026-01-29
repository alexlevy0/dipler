"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { 
  Calendar, 
  Zap, 
  MousePointer, 
  ArrowRight,
  Mail,
  UserPlus,
  RefreshCw,
  FileText,
  Bell,
  Database
} from "lucide-react";
import { useTranslations } from "next-intl";

export function InternalAutomation() {
  const t = useTranslations('InternalAutomation');

  const triggers = [
    {
      key: "scheduled",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      examples: [
        { icon: FileText, text: "Rapport de ventes chaque lundi" },
        { icon: RefreshCw, text: "Sync CRM → Compta" },
        { icon: Bell, text: "Relance devis J+3" },
      ]
    },
    {
      key: "event",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      examples: [
        { icon: Mail, text: "Nouvel email → Ticket créé" },
        { icon: UserPlus, text: "Lead entrant → Qualification" },
        { icon: Database, text: "Changement statut CRM → Action" },
      ]
    },
    {
      key: "manual",
      icon: MousePointer,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      examples: [
        { icon: FileText, text: "Générer un rapport" },
        { icon: Bell, text: "Lancer une campagne" },
        { icon: UserPlus, text: "Créer un dossier client" },
      ]
    }
  ];

  return (
    <section className="py-32 bg-bg-secondary relative" id="internal-automation">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 justify-center mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              {t('badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
          >
            {t.rich('title', {
              gradient: (chunks) => <span className="text-gradient">{chunks}</span>
            })}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {triggers.map((trigger, index) => (
            <motion.div
              key={trigger.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <Card className="h-full bg-white/50 dark:bg-slate-900/50 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-500 backdrop-blur-sm border-white/60 dark:border-slate-700/60 p-8 group">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${trigger.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <trigger.icon className={`w-7 h-7 bg-gradient-to-br ${trigger.color} bg-clip-text text-transparent`} style={{ color: trigger.color.includes('blue') ? '#3b82f6' : trigger.color.includes('amber') ? '#f59e0b' : '#a855f7' }} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {t(`triggers.${trigger.key}.title`)}
                </h3>
                <p className="text-text-secondary mb-6">
                  {t(`triggers.${trigger.key}.desc`)}
                </p>

                {/* Examples */}
                <div className="space-y-3">
                  {trigger.examples.map((example, exIndex) => (
                    <motion.div
                      key={exIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 + exIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-text-secondary group/item hover:text-text-primary transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-primary/10 transition-colors">
                        <example.icon className="w-4 h-4 text-text-tertiary group-hover/item:text-brand-primary transition-colors" />
                      </div>
                      <span>{example.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex justify-end">
                  <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.rich('bottomNote', {
              bold: (chunks) => <span className="font-semibold text-text-primary">{chunks}</span>
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
