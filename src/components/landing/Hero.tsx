"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";
import { FloatingBadges } from "@/components/hero/FloatingBadges";
import { Mic, Play, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section 
        className="relative pt-40 pb-32 overflow-hidden bg-bg-primary"
        onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Mesh & Spotlight */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 animate-pulse-slow" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.05]" />
      
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px -z-10 opacity-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/50 backdrop-blur-md border border-brand-primary/20 text-brand-primary text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-default">
              <Sparkles className="w-4 h-4 text-accent-warning fill-accent-warning" />
              <span>🚀 Now shipping: Low-Latency Turbo Model</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold tracking-tight text-text-primary mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Give your software a human voice. <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-accent-purple pb-2">
              In under 100ms
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            The first voice infrastructure designed for interruptions, heavy accents, and complex logic. Deploy AI agents that actually listen.
          </motion.p>

          <motion.div
             className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 gap-3 rounded-full">
              <Play size={20} fill="currentColor" /> Listen to Samples
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white border border-border-light hover:border-brand-primary/30 hover:bg-bg-secondary hover:-translate-y-1 transition-all duration-300 gap-3 rounded-full shadow-sm">
              Start Building (Free) <ArrowRight size={20} />
            </Button>
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
             <div className="relative glass rounded-[2.5rem] border border-white/40 shadow-2xl shadow-brand-primary/10 overflow-hidden p-8 md:p-14 z-20">
                
                {/* Decorative blobs inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
                
                <div className="flex flex-col items-center gap-10">
                  <div className="text-center space-y-2">
                    <p className="text-xs font-bold font-mono text-brand-primary tracking-widest uppercase bg-brand-primary/5 py-1 px-3 rounded-md inline-block">Interactive Demo</p>
                    <h3 className="text-3xl font-bold text-text-primary">
                      "Hi, I'm Dipler. Ask me anything..."
                    </h3>
                  </div>

                  <div className="w-full h-32 bg-white/60 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/50 shadow-inner relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
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
                    {isDemoActive ? "Listening..." : "Tap the mic to talk"}
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="mt-12 pt-10 border-t border-border-light/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white/30 -mx-8 md:-mx-14 -mb-8 md:-mb-14 p-8 backdrop-blur-sm">
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">50ms median</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">Global Latency</p>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">French, Spanish +98 more</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">Polyglot</p>
                  </div>
                  <div className="group cursor-default">
                    <p className="text-3xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">10k+ concurrent calls</p>
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">Scalability</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
