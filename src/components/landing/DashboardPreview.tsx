"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Activity, 
  Bell, 
  Lightbulb, 
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap
} from "lucide-react";
import { useTranslations } from "next-intl";

export function DashboardPreview() {
  const t = useTranslations('DashboardPreview');

  const widgets = [
    { icon: BarChart3, key: "kpis", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Activity, key: "processes", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Bell, key: "alerts", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Lightbulb, key: "insights", color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  const features = [
    { key: "realtime", icon: Zap },
    { key: "custom", icon: Users },
    { key: "alerts", icon: Bell },
    { key: "mobile", icon: Activity },
  ];

  const kpiCards = [
    { label: "Leads qualifiés", value: "127", change: "+23%", positive: true },
    { label: "Tickets résolus", value: "89%", change: "+5%", positive: true },
    { label: "Temps moyen", value: "2.3min", change: "-18%", positive: true },
  ];

  const activityItems = [
    { type: "success", text: "Lead qualifié • Score: 85", time: "Il y a 2min" },
    { type: "info", text: "Rapport hebdo envoyé", time: "Il y a 15min" },
    { type: "success", text: "Ticket #1234 résolu", time: "Il y a 23min" },
    { type: "warning", text: "3 leads en attente", time: "Il y a 1h" },
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden" id="dashboard">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-primary/5 to-transparent opacity-60 pointer-events-none" />
      
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

        {/* Widget Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
        >
          {widgets.map((widget, index) => (
            <motion.div
              key={widget.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`${widget.bg} rounded-2xl p-4 border border-white/20 backdrop-blur-sm text-center group hover:scale-105 transition-transform cursor-default`}
            >
              <widget.icon className={`w-8 h-8 ${widget.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
              <p className="text-sm font-medium text-text-primary">{t(`widgets.${widget.key}`)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", bounce: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative glass rounded-3xl border border-white/40 dark:border-slate-700/40 shadow-2xl shadow-brand-primary/10 overflow-hidden bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-light/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm font-mono text-text-tertiary">dashboard.dipler.agency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* KPI Cards */}
                <div className="lg:col-span-2 grid grid-cols-3 gap-4">
                  {kpiCards.map((kpi, index) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-white/40 dark:border-slate-700/40"
                    >
                      <p className="text-xs text-text-tertiary mb-1">{kpi.label}</p>
                      <p className="text-2xl md:text-3xl font-bold text-text-primary">{kpi.value}</p>
                      <div className={`flex items-center gap-1 mt-2 ${kpi.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-medium">{kpi.change}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Activity Feed */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-white/40 dark:border-slate-700/40">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-text-primary">Activité récente</p>
                    <Activity className="w-4 h-4 text-text-tertiary" />
                  </div>
                  <div className="space-y-3">
                    {activityItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        {item.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />}
                        {item.type === 'info' && <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />}
                        {item.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-text-primary truncate">{item.text}</p>
                          <p className="text-[10px] text-text-tertiary">{item.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Status Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: "Leads", count: 12, status: "actifs" },
                  { label: "Support", count: 3, status: "en cours" },
                  { label: "Rapports", count: 7, status: "programmés" },
                  { label: "Syncs", count: 5, status: "automatiques" },
                ].map((process, index) => (
                  <div
                    key={process.label}
                    className="flex items-center gap-3 bg-white/30 dark:bg-slate-800/30 rounded-lg px-4 py-3 border border-white/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{process.label}</p>
                      <p className="text-xs text-text-tertiary">{process.count} {process.status}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {features.map((feature) => (
            <div key={feature.key} className="flex items-center gap-2 text-text-secondary">
              <feature.icon className="w-4 h-4 text-brand-primary" />
              <span className="text-sm">{t(`features.${feature.key}`)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
