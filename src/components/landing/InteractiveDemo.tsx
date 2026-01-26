"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/voice/Avatar";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";
import { Mic, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Moved useCases inside component to use translations



export function InteractiveDemo() {
  const t = useTranslations('InteractiveDemo');

  const useCases = [
    { 
      id: "healthcare", 
      label: t('cases.healthcare.label'), 
      role: t('cases.healthcare.role'),
      greeting: t('cases.healthcare.greeting'),
      prompts: [t('cases.healthcare.prompts.0'), t('cases.healthcare.prompts.1'), t('cases.healthcare.prompts.2')]
    },
    { 
      id: "realestate", 
      label: t('cases.realestate.label'), 
      role: t('cases.realestate.role'),
      greeting: t('cases.realestate.greeting'),
      prompts: [t('cases.realestate.prompts.0'), t('cases.realestate.prompts.1'), t('cases.realestate.prompts.2')]
    },
    { 
      id: "support", 
      label: t('cases.support.label'), 
      role: t('cases.support.role'),
      greeting: t('cases.support.greeting'),
      prompts: [t('cases.support.prompts.0'), t('cases.support.prompts.1'), t('cases.support.prompts.2')]
    },
  ];

  const [activeCaseId, setActiveCaseId] = useState("healthcare");
  const activeCase = useCases.find(c => c.id === activeCaseId) || useCases[0];

  const [isTalking, setIsTalking] = useState(false);
  const [conversation, setConversation] = useState<{role: 'ai' | 'user', text: string}[]>([]);

  // Reset conversation when switching cases
  const handleCaseChange = (c: typeof useCases[0]) => {
      setActiveCaseId(c.id);
      setConversation([]);
      setIsTalking(false);
  };

  const handlePromptClick = (text: string) => {
      setConversation(prev => [...prev, { role: 'user', text }]);
      setIsTalking(true);
      
      // Simulate AI response delay
      setTimeout(() => {
          setIsTalking(false);
          setConversation(prev => [...prev, { role: 'ai', text: "I can certainly help with that. [Simulated AI Response]" }]);
      }, 2000);
  };

  return (
    <section className="py-32 bg-bg-primary relative overflow-hidden" id="demo">
        {/* Background blobs */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row gap-16 items-start">
            
            {/* Left Column: Controls & Context */}
            <div className="md:w-1/3 space-y-8 sticky top-32">
                <div>
                   <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6">
                        {t.rich('title', {
                            gradient: (chunks) => <span className="text-brand-primary">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="space-y-3">
                    {useCases.map((useCase) => (
                        <button
                            key={useCase.id}
                            onClick={() => handleCaseChange(useCase)}
                            className={cn(
                                "w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group",
                                activeCase.id === useCase.id 
                                    ? "bg-white shadow-lg shadow-brand-primary/5 border border-brand-primary/20 scale-105" 
                                    : "bg-transparent border border-transparent hover:bg-white/50"
                            )}
                        >
                            <span className={cn("font-medium", activeCase.id === useCase.id ? "text-brand-primary" : "text-text-secondary")}>
                                {useCase.label}
                            </span>
                            {activeCase.id === useCase.id && (
                                <motion.div layoutId="active-check">
                                    <Check className="w-5 h-5 text-brand-primary" />
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Column: Interactive Widget - Minimalist */}
            <div className="md:w-2/3 w-full">
                <Card className="min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl shadow-brand-primary/20 border-white/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2rem]">
                    
                    {/* Minimal Header */}
                        <div className="p-8 pb-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar type={activeCase.label} isSpeaking={!isTalking && conversation.length % 2 === 0 && conversation.length > 0} />
                                <div>
                                    <h3 className="font-bold text-xl text-text-primary">Dipler Neural</h3>
                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        {t('activeNow')}
                                    </div>
                                </div>
                            </div>
                        <div className="hidden sm:block opacity-50">
                            <WaveformVisualizer isActive={isTalking || conversation.length === 0} />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow p-8 space-y-6 overflow-y-auto max-h-[450px] scrollbar-hide">
                        {/* Initial Greeting */}
                        <motion.div 
                            key={`greeting-${activeCase.id}`}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex gap-4"
                        >
                            <div className="bg-bg-secondary p-5 rounded-2xl rounded-tl-none text-text-primary max-w-[85%] leading-relaxed shadow-sm">
                                {activeCase.greeting}
                            </div>
                        </motion.div>

                        {/* History */}
                        <AnimatePresence mode="popLayout">
                            {conversation.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={cn("flex gap-4", msg.role === 'user' ? "flex-row-reverse" : "")}
                                >
                                    <div className={cn(
                                        "p-5 rounded-2xl shadow-sm text-text-primary max-w-[85%] leading-relaxed",
                                        msg.role === 'user' 
                                            ? "bg-brand-primary text-white rounded-tr-none shadow-brand-primary/20" 
                                            : "bg-bg-secondary rounded-tl-none"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTalking && (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                className="flex gap-4"
                             >
                                <div className="bg-bg-secondary p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-12">
                                    <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" />
                                    <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce delay-75" />
                                    <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce delay-150" />
                                </div>
                             </motion.div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md mt-auto border-t border-white/50 dark:border-slate-700/50">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeCase.prompts.map((prompt) => (
                                <motion.button
                                    key={prompt}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handlePromptClick(prompt)}
                                    className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm hover:shadow-md text-sm text-text-secondary dark:text-text-primary border border-border-light dark:border-slate-700 hover:border-brand-primary/30 dark:hover:border-brand-primary/50 transition-all font-medium"
                                >
                                    {prompt}
                                </motion.button>
                            ))}
                        </div>
                        
                        <Button className="w-full h-14 rounded-full text-lg shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all">
                             <Mic className="w-5 h-5 mr-2" /> {t('startTalking')}
                        </Button>
                    </div>
                </Card>
            </div>
         </div>
      </div>
    </section>
  );
}
