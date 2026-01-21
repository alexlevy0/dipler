"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Phone, Calendar, Search, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";

const templates = [
  {
    title: "Inbound Support Agent",
    description: "Handles Level 1 support queries, routes complex issues, and updates CRM tickets automatically.",
    prompt: "You are a helpful support agent for specialized tech support...",
    icon: Phone,
    color: "from-blue-500/20 to-cyan-500/20",
    text: "text-blue-600",
    colSpan: "md:col-span-2",
  },
  {
    title: "Appointment Setter",
    description: "Qualifies leads and books meetings directly into Google Calendar.",
    prompt: "Your goal is to find a suitable time for a demo...",
    icon: Calendar,
    color: "from-purple-500/20 to-pink-500/20",
    text: "text-purple-600",
    colSpan: "md:col-span-1",
  },
  {
    title: "Outbound Survey",
    description: "Conducts market research surveys with high completion rates.",
    prompt: "Ask the user about their recent shopping experience...",
    icon: Search,
    color: "from-amber-500/20 to-orange-500/20",
    text: "text-amber-600",
    colSpan: "md:col-span-1",
  },
  {
    title: "Real Estate Qualifier",
    description: "Screens tenants and schedules property viewings 24/7.",
    prompt: "Verify income requirements and move-in date...",
    icon: Home,
    color: "from-emerald-500/20 to-green-500/20",
    text: "text-emerald-600",
    colSpan: "md:col-span-2",
  },
];

export function Templates() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6">Explore Library</Badge>
          <h2 className="text-4xl font-display font-bold text-text-primary mb-6">
            Don't start from <span className="text-gradient">scratch</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Deploy proven agent templates in seconds. Customizable to your needs.
          </p>
        </div>

        <SpotlightGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {templates.map((template, idx) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn("h-full", template.colSpan)}
            >
              <Card className={cn("h-full p-8 flex flex-col justify-between hover:border-transparent", "bg-white")}>
                 {/* Gradient BG */}
                 <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", template.color)} />
                 
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={cn("p-3 rounded-xl bg-white/80 shadow-sm", template.text)}>
                            <template.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">{template.title}</h3>
                    </div>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                        {template.description}
                    </p>

                    <div className="p-4 rounded-lg bg-white/60 border border-black/5 font-mono text-xs text-text-tertiary">
                        <span className="opacity-50">System Prompt:</span><br/>
                        {template.prompt}
                    </div>
                 </div>
              </Card>
            </motion.div>
          ))}
        </SpotlightGrid>
      </div>
    </section>
  );
}
