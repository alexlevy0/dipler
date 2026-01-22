"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Sparkles, Mic } from "lucide-react";
import { FloatingBadges } from "@/components/hero/FloatingBadges";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";

export function Hero() {
  const t = useTranslations('Hero');
  const [isDemoActive, setIsDemoActive] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-radial from-brand-primary/10 to-transparent opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative mb-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 backdrop-blur-md border border-brand-primary/20 text-brand-primary text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-default">
              <Sparkles className="w-4 h-4 text-accent-warning fill-accent-warning" />
              <span>{t('badge')}</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-text-primary mb-8 leading-[1.1] whitespace-pre-line"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {t.rich('title', {
              gradient: (chunks) => <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-accent-purple pb-2">{chunks}<svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg></span>
            })}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
             className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 gap-3 rounded-full">
              <Play size={20} fill="currentColor" /> {t('listenSamples')}
            </Button>
            <a href="https://calendar.app.google/your-booking-link" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white border border-border-light hover:border-brand-primary/30 hover:bg-bg-secondary hover:-translate-y-1 transition-all duration-300 gap-3 rounded-full shadow-sm">
                {t('bookCall')} <ArrowRight size={20} />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Demo Widget Container with 3D Tilt Effect Potential */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
          className="relative max-w-4xl mx-auto perspective-1000"
        >
          <div className="relative transform-style-3d transition-transform hover:scale-[1.01] duration-500">
             <FloatingBadges />
             
             {/* Main Card */}
             <div className="relative glass rounded-[2.5rem] border border-white/40 shadow-2xl shadow-brand-primary/10 overflow-hidden p-8 md:p-14 z-20 bg-white/60 backdrop-blur-xl">
                
                {/* Decorative blobs inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
                
                <div className="flex flex-col items-center gap-10">
                  <div className="text-center space-y-2">
                    <p className="text-xs font-bold font-mono text-brand-primary tracking-widest uppercase bg-brand-primary/5 py-1 px-3 rounded-md inline-block">
                        {t('demo.label')}
                    </p>
                    <h3 className="text-3xl font-bold text-text-primary">
                      {t('demo.greeting')}
                    </h3>
                  </div>

                  <div className="w-full h-32 bg-white/60 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/50 shadow-inner relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
                     {/* Ensure WaveformVisualizer accepts isActive prop */}
                    <WaveformVisualizer isActive={isDemoActive} />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px var(--brand-glow)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsDemoActive(!isDemoActive)}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 text-white relative z-50 ${
                      isDemoActive 
                        ? "bg-accent-coral shadow-glow animate-pulse" 
                        : "bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/30"
                    }`}
                  >
                    <Mic size={32} />
                    {/* Ring animation */}
                    <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-75" />
                  </motion.button>
                  
                  <p className="text-sm font-medium text-text-tertiary">
                    {isDemoActive ? t('demo.listening') : t('demo.tap')}
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="mt-12 pt-10 border-t border-border-light/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white/30 -mx-8 md:-mx-14 -mb-8 md:-mb-14 p-8 backdrop-blur-sm">
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">{t('stats.latency')}</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">{t('stats.latencyLabel')}</p>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">{t('stats.polyglot')}</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">{t('stats.polyglotLabel')}</p>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">{t('stats.scalability')}</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">{t('stats.scalabilityLabel')}</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
