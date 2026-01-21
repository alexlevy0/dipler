"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, FileKey, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const compliance = [
  "SOC2 Type II Certified",
  "HIPAA Compliant",
  "GDPR & CCPA Ready",
  "AES-256 Encryption",
  "Single Sign-On (SSO)",
  "Audit Logs & RBAC",
];

export function Security() {
  return (
    <section className="py-32 bg-[#020408] text-white overflow-hidden relative">
      {/* Abstract Security Mesh */}
      <div className="absolute inset-0 bg-[url('/hex-grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <Badge variant="brand" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Enterprise Trust</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Bank-grade security,<br /> 
              <span className="text-emerald-400">built-in.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
               Dipler processes sensitive voice data with the highest security standards. 
               We help you meet your compliance obligations from day one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {compliance.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
                 <div className="h-12 px-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-gray-400">SOC2</span>
                 </div>
                 <div className="h-12 px-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-gray-400">HIPAA</span>
                 </div>
                 <div className="h-12 px-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-gray-400">ISO</span>
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
                    className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[4rem] border border-white/10 shadow-2xl"
                    style={{ clipPath: "path('M160 0 C250 20 320 80 320 180 C320 300 240 380 160 400 C80 380 0 300 0 180 C0 80 70 20 160 0 Z')" }}
                >
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c3/Python_logo_notext.svg')] opacity-5 bg-repeat opacity-5" />
                    
                    {/* Floating Icons */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                        <Lock className="w-20 h-20 text-emerald-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Scanning Line */}
                    <motion.div 
                        className="absolute w-full h-1 bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div 
                    className="absolute -right-8 top-20 p-4 bg-[#0B0F19] border border-emerald-500/30 rounded-xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <Server className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-xs">
                        <div className="text-emerald-400 font-bold mb-0.5">Encrypted</div>
                        <div className="text-gray-500">Data at rest</div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute -left-8 bottom-32 p-4 bg-[#0B0F19] border border-purple-500/30 rounded-xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                        <FileKey className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-xs">
                        <div className="text-purple-400 font-bold mb-0.5">Access Control</div>
                        <div className="text-gray-500">Role-Based</div>
                    </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
