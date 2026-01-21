"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Cloud, Shield, Server, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  {
    title: "Public Cloud",
    description: "Shared infrastructure with enterprise-grade security. Perfect for most use cases.",
    icon: Cloud,
    features: ["Multi-region availability", "Auto-scaling", "99.9% SLA", "SOC2 Compliant"],
    color: "text-blue-500",
    gradient: "from-blue-500/10 to-cyan-500/10",
    recommended: false,
  },
  {
    title: "Private VPC",
    description: "Dedicated infrastructure via AWS PrivateLink. Recommended for regulated industries.",
    icon: Shield,
    features: ["Dedicated tenancy", "AWS PrivateLink", "HIPAA BAA available", "Custom data residency"],
    color: "text-emerald-500",
    gradient: "from-emerald-500/10 to-green-500/10",
    recommended: true,
  },
  {
    title: "Self-Hosted",
    description: "Deploy Dipler in your own data center or air-gapped environment.",
    icon: Server,
    features: ["Full data control", "Air-gapped support", "Kubernetes or Docker", "Premium support SLA"],
    color: "text-purple-500",
    gradient: "from-purple-500/10 to-pink-500/10",
    recommended: false,
  },
];

export function Infrastructure() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6">Flexible Deployment</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Deploy <span className="text-gradient">your way</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From shared cloud to fully air-gapped on-premise, Dipler adapts to your compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {options.map((option, idx) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={cn(
                "h-full p-8 relative overflow-hidden",
                option.recommended && "border-emerald-500/50 ring-1 ring-emerald-500/20"
              )}>
                {/* Gradient BG */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", option.gradient)} />

                <div className="relative z-10">
                  {option.recommended && (
                    <Badge variant="success" className="absolute top-0 right-0 text-xs">Recommended</Badge>
                  )}
                  
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", option.gradient)}>
                    <option.icon className={cn("w-7 h-7", option.color)} />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-3">{option.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <ul className="space-y-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-primary">
                        <Check className={cn("w-4 h-4", option.color)} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
