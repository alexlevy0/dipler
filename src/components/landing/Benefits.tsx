"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Shield, 
  Wallet, 
  Clock, 
  Target, 
  Zap, 
  Lightbulb, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Benefits() {
  const t = useTranslations('Benefits');

  const benefits = [
    { key: "scale", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { key: "quality", icon: Shield, color: "from-emerald-500 to-green-500" },
    { key: "cost", icon: Wallet, color: "from-amber-500 to-orange-500" },
    { key: "availability", icon: Clock, color: "from-purple-500 to-pink-500" },
    { key: "leads", icon: Target, color: "from-red-500 to-rose-500" },
    { key: "speed", icon: Zap, color: "from-yellow-500 to-amber-500" },
    { key: "insights", icon: Lightbulb, color: "from-indigo-500 to-violet-500" },
    { key: "evolution", icon: RefreshCw, color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section className="py-32 bg-bg-secondary relative" id="benefits">
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="group relative"
            >
              <div className="h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  {t(`items.${benefit.key}.title`)}
                </h3>
                <p className="relative text-sm text-text-secondary leading-relaxed">
                  {t(`items.${benefit.key}.desc`)}
                </p>

                {/* Check Mark */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "-70%", label: "Temps répétitif" },
            { value: "24/7", label: "Disponibilité" },
            { value: "0", label: "Lead perdu" },
            { value: "3x", label: "Productivité" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
