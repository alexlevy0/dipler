"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Wifi } from "lucide-react";

const locations = [
  { name: "New York", x: "28%", y: "40%", latency: "12ms" },
  { name: "London", x: "48%", y: "35%", latency: "18ms" },
  { name: "Frankfurt", x: "52%", y: "38%", latency: "22ms" },
  { name: "Tokyo", x: "85%", y: "45%", latency: "45ms" },
  { name: "Singapore", x: "78%", y: "58%", latency: "38ms" },
  { name: "San Francisco", x: "15%", y: "45%", latency: "15ms" },
];

export function GlobalLatency() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/3">
                <Badge variant="brand" className="mb-6">Global Edge Network</Badge>
                <h2 className="text-4xl font-display font-bold mb-6 text-text-primary">
                    Faster than the speed of <span className="text-brand-primary">thought</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    Our voice agents run on the edge. With 35 data centers worldwide, we guarantee sub-500ms audio-to-audio latency, creating a conversation that feels truly human.
                </p>
                
                <div className="space-y-4">
                    {locations.slice(0, 3).map((loc) => (
                        <div key={loc.name} className="flex items-center justify-between p-4 rounded-xl bg-white border border-border-light shadow-sm">
                            <div className="flex items-center gap-3">
                                <Wifi size={18} className="text-green-500" />
                                <span className="font-semibold text-text-primary">{loc.name}</span>
                            </div>
                            <span className="font-mono text-brand-primary font-bold">{loc.latency}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Design: Abstract Map */}
            <div className="lg:w-2/3 w-full relative aspect-[16/9] bg-bg-secondary rounded-3xl border border-border-light shadow-xl overflow-hidden group">
                {/* World Map Silhouette (Simplified via CSS/SVG) */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center grayscale" />
                
                {/* Connecting Lines (Decor) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <motion.path 
                        d="M200,250 Q400,100 600,250 T1000,300" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>

                {/* Locations */}
                {locations.map((loc) => (
                    <div 
                        key={loc.name}
                        className="absolute w-4 h-4"
                        style={{ left: loc.x, top: loc.y }}
                    >
                        <div className="relative flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
                            
                            {/* Tooltip */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-xs px-2 py-1 rounded shadow-md border border-border-light text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                {loc.name}: {loc.latency}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
