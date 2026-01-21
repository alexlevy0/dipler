"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp", "TechStart", "GlobalHealth", "FinServe", "EduTech", "LogistiCo", "CloudNine", "DataFlow"
];

export function SocialProof() {
  return (
    <section className="py-12 border-b border-border-light bg-bg-secondary/50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
          Trusted by innovative teams at
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 text-xl font-bold text-text-tertiary grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused] hidden">
           {/* Duplicate for seamless loop if needed, but CSS animation usually handles this with one long strip */}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
