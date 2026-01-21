"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";
import { CountUp } from "@/components/animations/CountUp";

export function ROICalculator() {
  const [volume, setVolume] = useState(5000); // Calls per month
  const [cost, setCost] = useState(1.50); // Cost per min (human)
  const [duration, setDuration] = useState(5); // Msg duration in mins

  // AI Cost assumption: $0.20 / min
  const aiCostPerMin = 0.20;
  
  const monthlyHumanCost = volume * duration * cost;
  const monthlyAICost = volume * duration * aiCostPerMin;
  const monthlySavings = monthlyHumanCost - monthlyAICost;
  const yearlySavings = monthlySavings * 12;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="success" className="mb-6">Pure Profit</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Calculate your savings
          </h2>
          <p className="text-xl text-text-secondary">
            See how much you save by switching from BPOs to Dipler Agents.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-xl border-white/60 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Inputs */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-text-primary">Monthly Call Volume</label>
                                <span className="text-brand-primary font-bold">{volume.toLocaleString()} calls</span>
                            </div>
                            <input 
                                type="range" 
                                min="1000" max="50000" step="1000" 
                                value={volume} 
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-brand-primary"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-text-primary">Human Agent Cost</label>
                                <span className="text-brand-primary font-bold">${cost.toFixed(2)} / min</span>
                            </div>
                            <input 
                                type="range" 
                                min="0.50" max="5.00" step="0.10" 
                                value={cost} 
                                onChange={(e) => setCost(Number(e.target.value))}
                                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-brand-primary"
                            />
                            <p className="text-xs text-text-tertiary mt-2">Industry average: $1.50/min</p>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="font-semibold text-text-primary">Avg. Call Duration</label>
                                <span className="text-brand-primary font-bold">{duration} mins</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" max="30" step="1" 
                                value={duration} 
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-brand-primary"
                            />
                        </div>
                    </div>

                    {/* Outputs */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-8 opacity-10">
                                 <TrendingUp size={120} />
                             </div>
                             
                             <div className="relative z-10">
                                 <div className="mb-8">
                                     <p className="text-blue-100 font-medium mb-1">Estimated Monthly Savings</p>
                                     <div className="text-4xl md:text-5xl font-bold">
                                         {formatCurrency(monthlySavings)}
                                     </div>
                                 </div>
                                 
                                 <div className="pt-8 border-t border-white/20">
                                     <p className="text-blue-100 font-medium mb-1">Yearly Savings</p>
                                     <div className="text-2xl md:text-3xl font-bold opacity-90">
                                         {formatCurrency(yearlySavings)}
                                     </div>
                                 </div>
                             </div>
                        </div>
                        <p className="text-center text-sm text-text-tertiary mt-6 italic">
                            *Based on Dipler Pro pricing ($0.20/min) vs your current metrics.
                        </p>
                    </div>

                </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
