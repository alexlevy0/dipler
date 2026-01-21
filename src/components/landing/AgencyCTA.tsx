"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Users, Palette, DollarSign, ArrowRight, BookOpen } from "lucide-react";

const features = [
  { icon: Palette, title: "Whitelabel Dashboard", description: "Your brand, your logo, your colors." },
  { icon: Users, title: "Sub-account Management", description: "Manage multiple clients from one portal." },
  { icon: DollarSign, title: "Custom Margins", description: "Set your own pricing and keep the profit." },
];

export function AgencyCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Partner Program</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Build your own Voice Agency <br /> on Dipler
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 200+ agencies already reselling Dipler under their brand. Get exclusive margins, priority support, and co-marketing opportunities.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-blue-50 shadow-xl">
              Apply for Partner Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              <BookOpen className="mr-2 w-4 h-4" />
              View Agency Docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
