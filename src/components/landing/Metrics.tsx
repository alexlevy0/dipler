"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { Activity, Globe, Shield, Zap, Users, Server } from "lucide-react";

const metrics = [
  { icon: Zap, value: 99, suffix: "ms", label: "Average Latency", description: "Lightning fast responses" },
  { icon: Activity, value: 50, suffix: "M+", label: "Calls Processed", description: "Proven at scale" },
  { icon: Server, value: 99.99, suffix: "%", label: "Uptime SLA", description: "Enterprise reliability", decimals: 2 },
  { icon: Globe, value: 100, suffix: "+", label: "Languages", description: "Native accents supported" },
  { icon: Users, value: 40, suffix: "+", label: "Integrations", description: "Connects with everything" },
  { icon: Shield, value: 100, suffix: "%", label: "Secure", description: "SOC2 & HIPAA Compliant", decimals: 0, isStatic: true }, // Static value example
];

export function Metrics() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border-light bg-bg-secondary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-bg-primary shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <metric.icon size={24} />
                </div>
                <div className="text-3xl font-bold font-display text-text-primary">
                  {metric.isStatic ? (
                    <span>{metric.value}{metric.suffix}</span>
                  ) : (
                    <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">{metric.label}</h3>
              <p className="text-text-secondary">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
