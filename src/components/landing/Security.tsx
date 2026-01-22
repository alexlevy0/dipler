"use client";

import { motion } from "framer-motion";
import { Lock, Server, FileKey, CheckCircle2, MapPin, Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

export function Security() {
  const t = useTranslations('Security');
  const compliance = t.raw('items') as string[];

  return (
    <section className="py-32 bg-bg-secondary overflow-hidden relative">
      {/* Abstract Security Mesh */}
      <div className="absolute inset-0 bg-dot-slate-200 opacity-50 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <Badge variant="success" className="mb-6">{t('badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-primary whitespace-pre-line">
              {t.rich('title', {
                color: (chunks) => <span className="text-emerald-500">{chunks}</span>
              })}
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
               {t('subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {compliance.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
                 <div className="h-12 px-6 rounded-lg bg-white border border-border-light shadow-sm flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span className="font-bold text-text-secondary">{t('cards.france')}</span>
                 </div>
                 <div className="h-12 px-6 rounded-lg bg-white border border-border-light shadow-sm flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold text-text-secondary">{t('cards.rgpd')}</span>
                 </div>
                 <div className="h-12 px-6 rounded-lg bg-white border border-border-light shadow-sm flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4 text-purple-500" />
                    <span className="font-bold text-text-secondary">{t('cards.encryption')}</span>
                 </div>
            </div>
          </div>

          {/* Visual: Animated Shield */}
          <div className="lg:w-1/2 flex justify-center">
             <div className="relative w-80 h-[400px]">
                {/* Shield Backing */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-emerald-100 rounded-[4rem] border border-emerald-200 shadow-2xl"
                    style={{ clipPath: "path('M160 0 C250 20 320 80 320 180 C320 300 240 380 160 400 C80 380 0 300 0 180 C0 80 70 20 160 0 Z')" }}
                >
                    {/* Floating Icons */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                        <Lock className="w-20 h-20 text-emerald-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Scanning Line */}
                    <motion.div 
                        className="absolute w-full h-1 bg-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div 
                    className="absolute -right-8 top-20 p-4 bg-white border border-emerald-200 rounded-xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="p-2 bg-emerald-100 rounded-lg">
                        <Server className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="text-xs">
                        <div className="text-emerald-600 font-bold mb-0.5">{t('shield.encryption.title')}</div>
                        <div className="text-text-tertiary">{t('shield.encryption.desc')}</div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute -left-8 bottom-32 p-4 bg-white border border-purple-200 rounded-xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <FileKey className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-xs">
                        <div className="text-purple-600 font-bold mb-0.5">{t('shield.access.title')}</div>
                        <div className="text-text-tertiary">{t('shield.access.desc')}</div>
                    </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
