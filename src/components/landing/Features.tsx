"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Workflow, Zap, Mic, Globe, Phone, BarChart3, Lock, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["All", "Build", "Deploy", "Scale", "Analyze"];

const features = [
  {
    category: "Build",
    title: "Visual Flow Builder",
    description: "Design conversation flows with our drag-and-drop no-code editor. Visualize logic and state.",
    icon: Workflow,
    color: "text-blue-500",
  },
  {
    category: "Deploy",
    title: "Sub-100ms Latency",
    description: "In-house telephony infrastructure optimized for lightning-fast voice responses.",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    category: "Build",
    title: "Voice Cloning",
    description: "Clone any voice in minutes. Use your brand voice across all agents consistently.",
    icon: Mic,
    color: "text-purple-500",
  },
  {
    category: "Scale",
    title: "Global Infrastructure",
    description: "Multi-region deployment. 100+ languages with native accents supported out of the box.",
    icon: Globe,
    color: "text-emerald-500",
  },
  {
    category: "Deploy",
    title: "In-house Telephony",
    description: "Carrier-grade reliability. Bring your own numbers or purchase directly from us.",
    icon: Phone,
    color: "text-indigo-500",
  },
  {
    category: "Analyze",
    title: "Deep Analytics",
    description: "Real-time dashboards, sentiment analysis, and automated call scoring.",
    icon: BarChart3,
    color: "text-pink-500",
  },
  {
    category: "Scale",
    title: "Enterprise Security",
    description: "SOC2 Type II, HIPAA, and GDPR compliant. Your data is always encrypted and secure.",
    icon: Lock,
    color: "text-slate-500",
  },
  {
    category: "Build",
    title: "40+ Integrations",
    description: "Connect natively to CRMs, calendars, and automation tools like Zapier and Make.",
    icon: Blocks,
    color: "text-orange-500",
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredFeatures = activeTab === "All" 
    ? features 
    : features.filter(f => f.category === activeTab);

  return (
    <section className="py-24 bg-bg-secondary" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
            Everything you need to build world-class voice experiences
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  activeTab === tab ? "text-white" : "text-text-secondary hover:bg-bg-tertiary"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-primary rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group cursor-pointer hover:border-brand-primary/30 transition-colors">
                  <div className={`p-3 w-fit rounded-xl bg-bg-accent mb-4 ${feature.color} bg-opacity-10`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-brand-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
            <Button variant="outline" className="group">
                View all features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
    </section>
  );
}
