"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";
import { FloatingBadges } from "@/components/hero/FloatingBadges";
import { Mic, Play, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isDemoActive, setIsDemoActive] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/5 via-bg-primary to-bg-primary opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              New: Voice Cloning 2.0 is here →
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Voice AI Platform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              That Actually Scales
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build, deploy, and manage AI voice agents that sound human and act intelligently. From prototype to millions of calls.
          </motion.p>

          <motion.div
             className="flex flex-col sm:flex-row gap-4 items-center"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Play size={18} fill="currentColor" /> Try Live Demo
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
              Start Building Free <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>

        {/* Demo Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-3xl mx-auto"
        >
          <FloatingBadges />
          <div className="relative bg-white rounded-3xl border border-border-light shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <p className="text-sm font-mono text-text-tertiary mb-2">INTERACTIVE DEMO</p>
                <h3 className="text-2xl font-bold text-text-primary">
                  "Hi, I'm Dipler. Ask me anything..."
                </h3>
              </div>

              <div className="w-full h-24 bg-bg-secondary rounded-2xl flex items-center justify-center border border-border-light relative overflow-hidden">
                <WaveformVisualizer isActive={isDemoActive} />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDemoActive(!isDemoActive)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDemoActive 
                    ? "bg-red-500 shadow-glow animate-pulse text-white" 
                    : "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                }`}
              >
                <Mic size={28} />
              </motion.button>
              
              <p className="text-sm text-text-tertiary">
                {isDemoActive ? "Listening..." : "Click to talk"}
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border-light grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-text-primary">&lt;100ms</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider">Latency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text-primary">100+</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider">Languages</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text-primary">1M+</p>
                <p className="text-xs text-text-tertiary uppercase tracking-wider">Concurrent</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
