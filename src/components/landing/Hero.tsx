"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { FloatingBadges } from "@/components/hero/FloatingBadges";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export function Hero() {
  const t = useTranslations('Hero');
  
  // Parallax Logic
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x * 0.05);
      mouseY.set(y * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients with Parallax */}
      <motion.div style={{ y: y1, x: springX }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-radial from-brand-primary/10 to-transparent opacity-60 pointer-events-none -z-10" />
      <motion.div style={{ y: y2, x: useTransform(springX, (x) => -x) }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative mb-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-brand-primary/20 dark:border-brand-primary/40 text-brand-primary dark:text-brand-primary text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-default hover:scale-105 duration-300">
              <Sparkles className="w-4 h-4 text-accent-warning fill-accent-warning animate-pulse" />
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
              gradient: (chunks) => <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-accent-purple pb-2 hover:brightness-110 transition-all duration-500">{chunks}<svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg></span>
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
            <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all duration-300 gap-3 rounded-full">
                 {t('bookCall')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white border border-border-light hover:border-brand-primary/30 hover:bg-bg-secondary transition-all duration-300 gap-3 rounded-full shadow-sm">
              <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> {t('bookDemo')}
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Visual replaces old voice demo */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
          style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }} // Scroll effect
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative transform-style-3d hover:scale-[1.01] transition-transform duration-500">
             <FloatingBadges />
             
             {/* Main Card */}
             <div className="relative glass rounded-[2.5rem] border border-white/40 dark:border-slate-700/40 shadow-2xl shadow-brand-primary/10 overflow-hidden z-20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl group">
                
                {/* Decorative blobs inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-primary/10 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2 group-hover:bg-accent-purple/10 transition-colors duration-700" />
                
                {/* Embedded Dashboard Preview (simplified for Hero) */}
                <div className="p-2 md:p-4">
                  <img 
                    src="/dashboard-mockup.png" 
                    alt="Dashboard Preview" 
                    className="w-full h-auto rounded-2xl shadow-inner border border-white/20 dark:border-slate-700/50 hidden" 
                  />
                  {/* Since we don't have the image yet, we use a placeholder or the actual component content if appropriate, but keeping it light here */}
                  <div className="w-full aspect-video bg-bg-secondary/50 rounded-2xl flex items-center justify-center border border-dashed border-border-light overflow-hidden relative">
                     <p className="text-text-tertiary relative z-10">Dashboard Interactive Visual</p>
                     <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
                     />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="border-t border-border-light/50 dark:border-slate-700/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white/30 dark:bg-slate-800/30 p-8 backdrop-blur-sm">
                  {[
                    { val: t('stats.processes'), label: t('stats.processesLabel') },
                    { val: t('stats.availability'), label: t('stats.availabilityLabel') },
                    { val: t('stats.savings'), label: t('stats.savingsLabel') }
                  ].map((stat, i) => (
                    <div key={i} className="group/stat cursor-default">
                      <p className="text-3xl font-bold text-text-primary group-hover/stat:text-brand-primary transition-colors duration-300 group-hover/stat:scale-110 transform inline-block">{stat.val}</p>
                      <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
