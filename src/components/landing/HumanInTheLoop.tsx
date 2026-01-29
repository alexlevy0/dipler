"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  GitMerge, 
  ShieldCheck, 
  Lock, 
  FileSearch,
  Check
} from "lucide-react";
import { useTranslations } from "next-intl";

export function HumanInTheLoop() {
  const t = useTranslations('HumanInTheLoop');

  const rules = [
    { key: "escalation", icon: GitMerge, color: "text-blue-500", bg: "bg-blue-500/10" },
    { key: "validation", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { key: "override", icon: Lock, color: "text-amber-500", bg: "bg-amber-500/10" },
    { key: "transparency", icon: FileSearch, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <section className="py-24 bg-bg-secondary relative" id="human-in-the-loop">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                {t('badge')}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">
              {t.rich('title', {
                gradient: (chunks) => <span className="text-gradient">{chunks}</span>
              })}
            </h2>

            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-6">
              {rules.map((rule, index) => (
                <motion.div
                  key={rule.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`mt-1 w-10 h-10 rounded-lg ${rule.bg} flex items-center justify-center flex-shrink-0`}>
                    <rule.icon className={`w-5 h-5 ${rule.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">
                      {t(`rules.${rule.key}.title`)}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {t(`rules.${rule.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-border-light dark:border-slate-700 shadow-2xl p-8 overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Chat Simulation */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-brand-primary">AI</span>
                  </div>
                  <div className="bg-bg-secondary p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-text-secondary">Analyse de la demande... Complexité détectée: Haute (Score 0.85). Besoin validation humaine.</p>
                  </div>
                </div>

                <div className="flex justify-center my-4">
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Escalade Agent
                  </span>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-2xl rounded-tr-none max-w-[80%] border border-purple-500/20">
                    <p className="text-text-primary">Je prends le relai. Merci.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-500 justify-center mt-2">
                  <Check className="w-3 h-3" />
                  <span>Passation effectuée sans friction</span>
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-8 pt-6 border-t border-border-light dark:border-slate-700 flex justify-between items-center text-xs text-text-tertiary">
                <span>Session ID: #8X92-LA</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Système Actif
                </span>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-white/20 dark:border-slate-700 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-accent-purple flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">100% Sécurisé</p>
                  <p className="text-xs text-text-tertiary">Validation manuelle active</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
