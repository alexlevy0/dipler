"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { Shield, BarChart3, Globe, Code2, Users, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "The 'Zero-Lag' Network",
    description: "Don't let lag kill the vibe. Our edge network guarantees human-like pauses regardless of user location.",
    icon: Globe,
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hasBeam: true
  },
  {
    title: "See what your agents hear",
    description: "Monitor call quality, sentiment, and conversion rates live.",
    icon: BarChart3,
    className: "col-span-1",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Ship agents without shipping code",
    description: "Drag-and-drop flow editor for non-technical teams.",
    icon: Code2,
    className: "col-span-1",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Bank-grade Compliance (SOC2)",
    description: "SOC2 Type II compliant, HIPAA ready, and data encrypted at rest.",
    icon: Shield,
    className: "col-span-1 md:col-span-2 lg:col-span-1",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    title: "Collaborative Workspaces",
    description: "Invite your team, manage permissions, and share call logs.",
    icon: Users,
    className: "col-span-1 md:col-span-3 lg:col-span-2",
    gradient: "from-indigo-500/20 to-violet-500/20",
    hasBeam: true
  }
];

export function Features() {
  return (
    <section className="py-32 bg-bg-secondary relative" id="features">
      {/* Background decoration */}
     <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
     
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 justify-center mb-6"
           >
              <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                  Why Dipler?
              </span>
           </motion.div>
           
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
          >
            Everything you need to scale <br/>
            <span className="text-gradient">Voice AI Operations</span>
          </motion.h2>
        </div>

        <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn("group relative", feature.className)}
            >
              <Card className="h-full bg-white/50 hover:bg-white/80 transition-colors duration-500 backdrop-blur-sm border-white/60 p-8 flex flex-col justify-between overflow-hidden">
                {/* Border Beam Effect */}
                {feature.hasBeam && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                        <span className="absolute top-0 left-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-shimmer" />
                    </div>
                )}
                
                {/* Gradient Blob Background */}
                <div className={cn(
                    "absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700",
                    feature.gradient
                )} />

                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-bg-primary shadow-sm border border-border-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>

                {feature.hasBeam && (
                    <div className="mt-8 flex justify-end">
                        <ArrowUpRight className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary transition-colors" />
                    </div>
                )}
              </Card>
            </motion.div>
          ))}
        </SpotlightGrid>
      </div>
    </section>
  );
}
