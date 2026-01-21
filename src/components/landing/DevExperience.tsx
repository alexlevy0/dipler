"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Terminal, Code2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const codeSnippet = `// Initialize Dipler client
const client = new Dipler({
  apiKey: process.env.DIPLER_KEY,
});

// Create a voice agent
const agent = await client.agents.create({
  voice: "nova-2",
  prompt: "You are a helpful assistant.",
  tools: ["calendar", "crm_sync"],
});

// Connect directly to phone call
await agent.connect({
  phoneNumber: "+15550123",
  record: true,
});

console.log("Agent active on call.");`;

const benefits = [
  { icon: Terminal, text: "Typed SDKs for TS, Python, Go" },
  { icon: Zap, text: "Websockets for <100ms latency" },
  { icon: Code2, text: "Drop-in React Hooks" },
];

export function DevExperience() {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) clearInterval(interval);
    }, 20); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <Badge variant="brand" className="mb-6">Developer First</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6 text-balance">
              10 lines of code to <br />
              <span className="text-gradient">replace your call center</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed text-balance">
              Forget complex SIP trucking and VoIP servers. Dipler abstracts the telephony layer so you can focus on agent intelligence.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                    <benefit.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-lg font-medium text-text-primary">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Code Block */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-[#0f172a] border border-brand-primary/20 shadow-2xl overflow-hidden"
            >
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-xs text-text-tertiary font-mono">agent.ts</div>
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-blue-300">
                    {displayedCode}
                    <span className="animate-pulse inline-block w-2 h-4 bg-brand-primary ml-1 align-middle" />
                  </code>
                </pre>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
