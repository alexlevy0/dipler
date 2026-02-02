"use client";

import { motion } from "framer-motion";
import { 
  Settings2, 
  MessageSquare, 
  LayoutDashboard,
  ArrowRight
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ValueProposition() {
  const t = useTranslations('ValueProposition');

  const pillars = [
    { 
      key: "internal", 
      icon: Settings2, 
      color: "bg-blue-500",
      gradient: "from-blue-500/20 to-cyan-500/20" 
    },
    { 
      key: "external", 
      icon: MessageSquare, 
      color: "bg-purple-500",
      gradient: "from-purple-500/20 to-pink-500/20" 
    },
    { 
      key: "dashboard", 
      icon: LayoutDashboard, 
      color: "bg-emerald-500",
      gradient: "from-emerald-500/20 to-green-500/20" 
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
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
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/60 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 shadow-lg shadow-${pillar.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {t(`pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {t(`pillars.${pillar.key}.desc`)}
                  </p>

                  <div className="flex items-center text-brand-primary font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                    <span className="mr-2">Explorer</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
