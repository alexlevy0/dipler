"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Mic } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const voices = [
  { id: "voice_01", name: "Rachel", accent: "American", style: "Professional", gender: "Female", color: "bg-pink-500" },
  { id: "voice_02", name: "Drew", accent: "British", style: "Newsreader", gender: "Male", color: "bg-blue-500" },
  { id: "voice_03", name: "Clyde", accent: "American", style: "Deep", gender: "Male", color: "bg-amber-500" },
  { id: "voice_04", name: "Mimi", accent: "Australian", style: "Conversational", gender: "Female", color: "bg-emerald-500" },
  { id: "voice_05", name: "Fin", accent: "Irish", style: "Energetic", gender: "Male", color: "bg-purple-500" },
  { id: "voice_06", name: "Sarah", accent: "Canadian", style: "Soft", gender: "Female", color: "bg-rose-500" },
];

export function VoiceGallery() {
  const [playing, setPlaying] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
      // Simulate finish
      setTimeout(() => setPlaying(null), 3000);
    }
  };

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge variant="brand" className="mb-6">Global Voices</Badge>
          <h2 className="text-4xl font-display font-bold text-text-primary mb-6">
            Styles that match <span className="text-gradient">your brand</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Choose from over 50 ultra-realistic voices or clone your own top agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {voices.map((voice, idx) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={cn(
                  "p-6 group cursor-pointer transition-all duration-300",
                  playing === voice.id ? "border-brand-primary ring-1 ring-brand-primary/20 shadow-lg" : "hover:border-border-medium"
                )}
                onClick={() => togglePlay(voice.id)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md font-bold text-lg", voice.color)}>
                        {voice.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-lg">{voice.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-text-tertiary">
                         <span>{voice.accent}</span>
                         <span>•</span>
                         <span>{voice.style}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        playing === voice.id ? "bg-brand-primary text-white" : "bg-bg-tertiary text-text-primary group-hover:bg-brand-primary group-hover:text-white"
                    )}
                  >
                    {playing === voice.id ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                  </button>
                </div>

                {/* Animated Waveform Visualization */}
                <div className="h-12 bg-bg-secondary/50 rounded-lg flex items-center justify-center gap-1 overflow-hidden px-4">
                    {playing === voice.id ? (
                        Array.from({ length: 12 }).map((_, i) => (
                            <motion.div 
                                key={i}
                                className="w-1 bg-brand-primary rounded-full"
                                animate={{ height: [8, 24, 8] }}
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: 0.5 + Math.random() * 0.5, 
                                    delay: i * 0.05,
                                    ease: "easeInOut"
                                }}
                            />
                        ))
                    ) : (
                        Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-1 h-2 bg-border-medium/30 rounded-full" />
                        ))
                    )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
