"use client";

import { motion } from "framer-motion";
import { Headphones, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function FloatingBadges() {
  const t = useTranslations('FloatingBadges');

  const floatAnimation = (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  });

  return (
    <>
      <motion.div
        animate={floatAnimation(0)}
        className="absolute -top-12 -right-8 hidden lg:block z-0"
      >
        <div className="glass p-3 rounded-2xl shadow-xl border border-white/60 transform rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-110 cursor-pointer">
           <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
                  <Headphones size={20} />
              </div>
              <div>
                  <div className="text-xs text-text-secondary font-semibold">{t('partner')}</div>
                  <div className="text-sm font-bold text-text-primary">{t('partnerName')}</div>
              </div>
           </div>
        </div>
      </motion.div>

      <motion.div
        animate={floatAnimation(1.5)}
        className="absolute top-1/3 -left-20 hidden lg:block z-30"
      >
         <div className="glass p-3 rounded-2xl shadow-xl border border-white/60 transform -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-110 cursor-pointer">
           <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                  <MapPin size={20} />
              </div>
              <div>
                  <div className="text-xs text-text-secondary font-semibold">{t('servers')}</div>
                  <div className="text-sm font-bold text-text-primary">{t('serversName')}</div>
              </div>
           </div>
        </div>
      </motion.div>

      <motion.div
        animate={floatAnimation(2.5)}
        className="absolute -bottom-10 -right-12 hidden lg:block z-30"
      >
         <div className="glass p-3 rounded-2xl shadow-xl border border-white/60 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-110 cursor-pointer">
           <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-xl text-green-600">
                  <ShieldCheck size={20} />
              </div>
              <div>
                  <div className="text-xs text-text-secondary font-semibold">{t('compliance')}</div>
                  <div className="text-sm font-bold text-text-primary">{t('complianceName')}</div>
              </div>
           </div>
        </div>
      </motion.div>
      
      {/* Additional Decorative Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/20 blur-[60px] rounded-full -z-10"
      />
    </>
  );
}
