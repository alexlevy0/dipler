"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/voice/Avatar";
import { WaveformVisualizer } from "@/components/hero/WaveformVisualizer";
import { ArrowRight, Mic, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
  { 
    id: "healthcare", 
    label: "Healthcare", 
    role: "Medical Receptionist",
    greeting: "Hi, this is Sarah from MedCare Clinic. I'm calling to confirm your appointment for tomorrow at 2 PM. Can you still make it?",
    prompts: ["Yes, I can make it.", "I need to reschedule.", "Is there a preparation instruction?"]
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
    <section className="py-24 bg-bg-secondary" id="demo">
      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Left Column: Controls & Context */}
            <div className="md:w-1/3 space-y-8 sticky top-24">
                <div>
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
                        Experience Dipler in action
                    </h2>
                    <p className="text-text-secondary">
                        Try different industry scenarios to hear how natural and intelligent our agents sound.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">Select Use Case</p>
                    {useCases.map((useCase) => (
                        <button
                            key={useCase.id}
                            onClick={() => handleCaseChange(useCase)}
                            className={cn(
                                "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                                activeCase.id === useCase.id 
                                    ? "bg-white border-brand-primary shadow-md" 
                                    : "bg-transparent border-transparent hover:bg-white hover:shadow-sm"
                            )}
                        >
                            <span className={cn("font-medium", activeCase.id === useCase.id ? "text-brand-primary" : "text-text-secondary")}>
                                {useCase.label}
                            </span>
                            {activeCase.id === useCase.id && (
                                <Check className="w-5 h-5 text-brand-primary" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Column: Interactive Widget */}
            <div className="md:w-2/3 w-full">
                <Card className="min-h-[600px] flex flex-col relative overflow-hidden ring-4 ring-bg-secondary/50">
                    {/* Header */}
                    <div className="p-6 border-b border-border-light bg-bg-tertiary/30 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar type={activeCase.label} isSpeaking={!isTalking && conversation.length % 2 === 0 && conversation.length > 0} />
                            <div>
                                <h3 className="font-bold text-lg text-text-primary">{activeCase.role}</h3>
                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Online • AI Agent
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <WaveformVisualizer isActive={isTalking || conversation.length === 0} />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-grow p-6 space-y-6 overflow-y-auto bg-bg-accent/30 max-h-[400px]">
                        {/* Initial Greeting */}
                        <motion.div 
                            key={`greeting-${activeCase.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex-shrink-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-brand-primary">AI</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-text-primary border border-border-light max-w-[80%]">
                                {activeCase.greeting}
                            </div>
                        </motion.div>

                        {/* History */}
                        <AnimatePresence>
                            {conversation.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn("flex gap-4", msg.role === 'user' ? "flex-row-reverse" : "")}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
                                        msg.role === 'user' ? "bg-bg-tertiary" : "bg-brand-primary/10"
                                    )}>
                                        <span className={cn("text-xs font-bold", msg.role === 'user' ? "text-text-secondary" : "text-brand-primary")}>
                                            {msg.role === 'user' ? 'ME' : 'AI'}
                                        </span>
                                    </div>
                                    <div className={cn(
                                        "p-4 rounded-2xl shadow-sm text-text-primary border border-border-light max-w-[80%]",
                                        msg.role === 'user' ? "bg-brand-primary text-white border-transparent rounded-tr-none" : "bg-white rounded-tl-none"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTalking && (
                             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-brand-primary">AI</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-border-light">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce delay-75" />
                                        <span className="w-2 h-2 bg-text-tertiary rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                             </motion.div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="p-6 border-t border-border-light bg-white mt-auto">
                        <p className="text-sm font-medium text-text-tertiary mb-3">Suggested responses:</p>
                        <div className="flex flex-wrap gap-2">
                            {activeCase.prompts.map((prompt) => (
                                <button
                                    key={prompt}
                                    onClick={() => handlePromptClick(prompt)}
                                    className="px-4 py-2 rounded-lg bg-bg-secondary hover:bg-bg-tertiary text-sm text-text-secondary transition-colors border border-border-light hover:border-brand-primary/50 text-left"
                                >
                                    "{prompt}"
                                </button>
                            ))}
                        </div>
                        
                        <div className="mt-6 flex items-center gap-4">
                            <Button className="w-full h-12 gap-2 text-lg shadow-lg shadow-brand-primary/20">
                                <Mic className="w-5 h-5" /> Tap to Speak
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
         </div>
      </div>
    </section>
  );
}
