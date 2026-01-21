"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/voice/Avatar";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";
import { Mic, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
  { 
    id: "healthcare", 
    label: "Healthcare", 
    role: "Medical Receptionist",
    greeting: "Hi, this is Sarah from MedCare Clinic. I'm calling to confirm your appointment for tomorrow at 2 PM. Can you still make it?",
    prompts: ["Yes, I can make it.", "Actually, I can't make 2PM, do you have anything later in the evening?", "Is there a preparation instruction?"]
  },
  { 
    id: "realestate", 
    label: "Real Estate", 
    role: "Leasing Agent",
    greeting: "Hello, Eric here from LuxLiving. I saw you were interested in the 2-bedroom unit downtown. Are you looking to move in soon?",
    prompts: ["Yes, looking for next month.", "What are the amenities?", "Can I schedule a tour?"]
  },
  { 
    id: "support", 
    label: "Customer Support", 
    role: "Support Hero",
    greeting: "Thanks for calling Dipler Support. I see you're asking about API rate limits. Would you like me to upgrade your plan or explain the limits?",
    prompts: ["Explain the limits, please.", "Upgrade my plan.", "Speak to a human."]
  },
];

export function InteractiveDemo() {
  const [activeCase, setActiveCase] = useState(useCases[0]);
  const [isTalking, setIsTalking] = useState(false);
  const [conversation, setConversation] = useState<{role: 'ai' | 'user', text: string}[]>([]);

  // Reset conversation when switching cases
  const handleCaseChange = (c: typeof useCases[0]) => {
      setActiveCase(c);
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
                        Experience <span className="text-brand-primary">Conversation</span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Dipler agents understand context, nuance, and interruptions. Try it yourself.
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
                <Card className="min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl shadow-brand-primary/20 border-white/50 bg-white/80 backdrop-blur-xl rounded-[2rem]">
                    
                    {/* Minimal Header */}
                        <div className="p-8 pb-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar type={activeCase.label} isSpeaking={!isTalking && conversation.length % 2 === 0 && conversation.length > 0} />
                                <div>
                                    <h3 className="font-bold text-xl text-text-primary">Dipler Neural</h3>
                                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        Active Now
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
                    <div className="p-6 bg-white/50 backdrop-blur-md mt-auto border-t border-white/50">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeCase.prompts.map((prompt) => (
                                <motion.button
                                    key={prompt}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handlePromptClick(prompt)}
                                    className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md text-sm text-text-secondary border border-border-light hover:border-brand-primary/30 transition-all font-medium"
                                >
                                    {prompt}
                                </motion.button>
                            ))}
                        </div>
                        
                        <Button className="w-full h-14 rounded-full text-lg shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all">
                             <Mic className="w-5 h-5 mr-2" /> Start Talking
                        </Button>
                    </div>
                </Card>
            </div>
         </div>
      </div>
    </section>
  );
}
