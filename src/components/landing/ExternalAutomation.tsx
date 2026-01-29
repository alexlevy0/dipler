"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Phone, 
  Globe, 
  MessageCircle, 
  UserCheck, 
  PhoneCall,
  ArrowRight,
  Bot,
  Users
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ExternalAutomation() {
  const t = useTranslations('ExternalAutomation');

  const channels = [
    { key: "support", icon: MessageSquare, color: "bg-blue-500" },
    { key: "phone", icon: Phone, color: "bg-emerald-500" },
    { key: "widget", icon: Globe, color: "bg-purple-500" },
    { key: "messaging", icon: MessageCircle, color: "bg-pink-500" },
    { key: "qualification", icon: UserCheck, color: "bg-amber-500" },
    { key: "callback", icon: PhoneCall, color: "bg-cyan-500" },
  ];

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden" id="external-automation">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
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

        {/* Central Visual + Channels */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Channels */}
            <div className="space-y-4">
              {channels.slice(0, 3).map((channel, index) => (
                <motion.div
                  key={channel.key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-white/40 dark:border-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all cursor-default">
                    <div className={`w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {t(`channels.${channel.key}.title`)}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {t(`channels.${channel.key}.desc`)}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary group-hover:translate-x-1 transition-all hidden lg:block" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Animated Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-brand-primary/20 animate-pulse" />
                <div className="absolute w-48 h-48 rounded-full border border-brand-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-32 h-32 rounded-full border border-brand-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Central Icon */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/30">
                <Bot className="w-12 h-12 text-white" />
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent origin-left"
                    style={{ transform: `rotate(${angle}deg)` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Channels */}
            <div className="space-y-4">
              {channels.slice(3, 6).map((channel, index) => (
                <motion.div
                  key={channel.key}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-white/40 dark:border-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all cursor-default">
                    <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary group-hover:-translate-x-1 transition-all rotate-180 hidden lg:block" />
                    <div className={`w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {t(`channels.${channel.key}.title`)}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {t(`channels.${channel.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Human in the Loop Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 bg-gradient-to-r from-brand-primary/10 to-accent-purple/10 rounded-2xl p-6 border border-brand-primary/20">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-brand-primary" />
            </div>
            <p className="text-text-secondary">
              {t.rich('bottomNote', {
                bold: (chunks) => <span className="font-semibold text-text-primary">{chunks}</span>
              })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
