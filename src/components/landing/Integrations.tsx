"use client";

import { cn } from "@/lib/utils";
import { Mic, Database, MessageSquare, Phone, Webhook, CloudLightning } from "lucide-react";
import { WordReveal } from "@/components/text/WordReveal";

export function Integrations() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <WordReveal 
                    as="h2"
                    text="The Neural Network of your stack"
                    className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
                />
                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                    Dipler connects seamlessly with your existing tools. Real-time sync with CRMs, databases, and communication platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                    {['HubSpot', 'Salesforce', 'Zendesk', 'Slack', 'Zapier', 'Postgres'].map((tool) => (
                        <div key={tool} className="flex items-center gap-2 text-text-secondary font-medium p-3 rounded-lg bg-bg-secondary hover:bg-white hover:shadow-md transition-all cursor-default border border-transparent hover:border-border-light">
                            <div className="w-2 h-2 rounded-full bg-brand-primary" />
                            {tool}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Animation: Solar System Orbit */}
            <div className="lg:w-1/2 flex items-center justify-center relative min-h-[500px] w-full">
                
                {/* Center Core */}
                <div className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-glow animate-float">
                    <Mic className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
                </div>

                {/* Orbit 1 */}
                <div className="absolute w-[280px] h-[280px] border border-brand-primary/10 rounded-full animate-[spin_20s_linear_infinite]">
                    <OrbitIcon icon={Database} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-600" />
                    <OrbitIcon icon={MessageSquare} className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-100 text-green-600" />
                </div>

                {/* Orbit 2 (Reverse) */}
                <div className="absolute w-[420px] h-[420px] border border-brand-primary/10 rounded-full animate-[spin_25s_linear_infinite_reverse]">
                     <OrbitIcon icon={Webhook} className="top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-purple-100 text-purple-600" />
                     <OrbitIcon icon={Phone} className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-amber-100 text-amber-600" />
                     <OrbitIcon icon={CloudLightning} className="bottom-[15%] right-[15%] bg-pink-100 text-pink-600" />
                </div>
                
                {/* Decorative gradients */}
                <div className="absolute inset-0 bg-gradient-radial from-brand-primary/5 to-transparent blur-3xl -z-10" />
            </div>
        </div>
      </div>
    </section>
  );
}

function OrbitIcon({ icon: Icon, className }: { icon: any, className?: string }) {
    return (
        <div className={cn(
            "absolute w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white/50 animate-[spin_20s_linear_infinite_reverse]", // Counter-rotate to keep icon upright
            className
        )}>
            <Icon size={20} />
        </div>
    )
}
