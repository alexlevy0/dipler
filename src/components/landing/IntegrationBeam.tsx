"use client";

import { motion } from "framer-motion";
import { Phone, Webhook, MessageSquare, Database, Slack, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function IntegrationBeam() {
  const t = useTranslations('IntegrationBeam');

  return (
    <section className="py-32 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
             <Badge variant="brand" className="mb-6">{t('badge')}</Badge>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
                 {t.rich('title', {
                     gradient: (chunks) => <span className="text-gradient">{chunks}</span>
                 })}
             </h2>
        </div>

        <div className="relative max-w-5xl mx-auto h-[400px] flex items-center justify-between">
            {/* Left: Triggers */}
            <div className="flex flex-col gap-12 z-10">
                <Node icon={Phone} label={t('nodes.phone')} color="text-green-500" />
                <Node icon={Webhook} label={t('nodes.webhook')} color="text-blue-500" />
                <Node icon={MessageSquare} label={t('nodes.sms')} color="text-purple-500" />
            </div>

            {/* Middle: Dipler Core */}
            <div className="relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-white shadow-2xl flex items-center justify-center border border-border-light relative z-20">
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Dipler
                    </div>
                </div>
                {/* Pulse */}
                <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl blur-xl animate-pulse" />
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col gap-12 z-10">
                <Node icon={Database} label={t('nodes.crm')} color="text-amber-500" align="right" />
                <Node icon={Slack} label={t('nodes.slack')} color="text-rose-500" align="right" />
                <Node icon={Mail} label={t('nodes.email')} color="text-cyan-500" align="right" />
            </div>

            {/* SVG Beams */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full">
                    <defs>
                        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    
                    {/* Paths from left to center */}
                    <BeamPath d="M100,60 C250,60 350,200 500,200" delay={0} />
                    <BeamPath d="M100,200 C250,200 350,200 500,200" delay={1} />
                    <BeamPath d="M100,340 C250,340 350,200 500,200" delay={2} />

                    {/* Paths from center to right */}
                    <BeamPath d="M500,200 C650,200 750,60 900,60" delay={0.5} />
                    <BeamPath d="M500,200 C650,200 750,200 900,200" delay={1.5} />
                    <BeamPath d="M500,200 C650,200 750,340 900,340" delay={2.5} />
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
}

function Node({ icon: Icon, label, color, align = "left" }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn("p-4 bg-white rounded-xl shadow-md border border-border-light flex items-center gap-3 w-48", align === 'right' && "flex-row-reverse text-right")}
        >
            <div className={cn("p-2 rounded-lg bg-bg-secondary", color)}>
                <Icon size={20} />
            </div>
            <span className="font-semibold text-text-primary text-sm">{label}</span>
        </motion.div>
    )
}

function BeamPath({ d, delay }: { d: string, delay: number }) {
    return (
        <>
            {/* Background Line */}
            <path d={d} stroke="#e2e8f0" strokeWidth="2" fill="none" />
            
            {/* Animated Beam */}
            <motion.path 
                d={d}
                stroke="url(#beam-gradient)"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                animate={{ pathLength: 0.4, pathOffset: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay }}
            />
        </>
    )
}
