"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, MessageCircle, FileText } from "lucide-react";

const topics = ["Pricing Mentioned", "Competitor: Vapi", "Feature Request", "Decision Maker"];
const transcript = [
  { speaker: "Agent", text: "Hi! Thanks for calling Dipler support. How can I help you today?" },
  { speaker: "Caller", text: "I'm interested in your Enterprise plan. Can you tell me about pricing?" },
  { speaker: "Agent", text: "Absolutely! Our Enterprise plan starts at $0.12 per minute with volume discounts." },
  { speaker: "Caller", text: "That's competitive. We were also looking at Vapi, but your latency claims are impressive." },
];

export function AnalyticsPreview() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleTopics, setVisibleTopics] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setVisibleLines((v) => Math.min(v + 1, transcript.length));
    }, 1500);
    const topicInterval = setInterval(() => {
      setVisibleTopics((v) => Math.min(v + 1, topics.length));
    }, 2000);
    return () => {
      clearInterval(lineInterval);
      clearInterval(topicInterval);
    };
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0f] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30">Real-Time Insights</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            See what your agents <span className="text-purple-400">hear</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Live sentiment, topic detection, and full transcripts — all in one dashboard.
          </p>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#111118] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-semibold text-sm">Live Call: +1 (555) 123-4567</span>
            </div>
            <span className="text-xs text-gray-500 font-mono">Duration: 02:34</span>
          </div>

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {/* Sentiment Widget */}
            <div className="p-6 bg-[#111118]">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <TrendingUp size={16} />
                <span className="text-xs uppercase tracking-wider font-semibold">Sentiment</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                {Array.from({ length: 20 }).map((_, i) => {
                  const isPositive = i > 5 && i < 12;
                  const isNegative = i >= 15;
                  return (
                    <motion.div
                      key={i}
                      className={`w-2 rounded-t ${isNegative ? "bg-red-500" : isPositive ? "bg-green-500" : "bg-gray-600"}`}
                      initial={{ height: 0 }}
                      animate={{ height: 20 + Math.random() * 60 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    />
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-3">Overall: <span className="text-green-400 font-bold">Positive (78%)</span></p>
            </div>

            {/* Topics Widget */}
            <div className="p-6 bg-[#111118]">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <MessageCircle size={16} />
                <span className="text-xs uppercase tracking-wider font-semibold">Topics Detected</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.slice(0, visibleTopics).map((topic, i) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Transcript Widget */}
            <div className="p-6 bg-[#111118] row-span-1 md:row-span-2 overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <FileText size={16} />
                <span className="text-xs uppercase tracking-wider font-semibold">Live Transcript</span>
              </div>
              <div className="space-y-3 text-sm max-h-48 overflow-y-auto hide-scrollbar">
                {transcript.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2"
                  >
                    <span className={`font-bold ${line.speaker === "Agent" ? "text-blue-400" : "text-gray-400"}`}>
                      {line.speaker}:
                    </span>
                    <span className="text-gray-300">{line.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
