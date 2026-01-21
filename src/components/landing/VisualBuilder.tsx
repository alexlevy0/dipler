"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Phone, MessageSquare, Calendar, GitBranch, CheckCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "start", label: "Start Call", icon: Phone, x: 50, y: 150, color: "bg-green-500" },
  { id: "input", label: "Wait for Input", icon: MessageSquare, x: 250, y: 80, color: "bg-blue-500" },
  { id: "api", label: "Check Calendar", icon: Calendar, x: 250, y: 220, color: "bg-purple-500" },
  { id: "decision", label: "Decision Split", icon: GitBranch, x: 450, y: 150, color: "bg-amber-500" },
  { id: "end", label: "End Call", icon: CheckCircle, x: 650, y: 150, color: "bg-emerald-500" },
];

const connections = [
  { from: "start", to: "input", path: "M100,165 C175,165 175,95 300,95" },
  { from: "start", to: "api", path: "M100,165 C175,165 175,235 300,235" },
  { from: "input", to: "decision", path: "M350,95 C425,95 425,165 500,165" },
  { from: "api", to: "decision", path: "M350,235 C425,235 425,165 500,165" },
  { from: "decision", to: "end", path: "M550,165 C600,165 650,165 700,165" },
];

export function VisualBuilder() {
  return (
    <section className="py-24 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">No-Code Builder</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Design conversations <span className="text-gradient">visually</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Drag, drop, and connect nodes to build complex agent logic without writing a single line of code.
          </p>
        </div>

        {/* Builder Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-border-light overflow-hidden"
        >
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-light">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm text-text-tertiary font-medium">Flow Builder - Appointment Agent</span>
          </div>

          {/* Canvas */}
          <div className="flex">
            {/* Toolbar */}
            <div className="w-16 bg-bg-tertiary border-r border-border-light flex flex-col items-center gap-4 py-6">
              <Zap className="w-5 h-5 text-text-tertiary" />
              <Phone className="w-5 h-5 text-text-tertiary" />
              <MessageSquare className="w-5 h-5 text-text-tertiary" />
              <Calendar className="w-5 h-5 text-text-tertiary" />
              <GitBranch className="w-5 h-5 text-text-tertiary" />
            </div>

            {/* Graph Area */}
            <div className="flex-1 h-[350px] relative bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Crect%20fill%3D%22%23f8fafc%22%20width%3D%2220%22%20height%3D%2220%22/%3E%3Ccircle%20fill%3D%22%23e2e8f0%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22/%3E%3C/svg%3E')]">  
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {connections.map((conn, i) => (
                  <g key={conn.from + conn.to}>
                    {/* Background line */}
                    <path d={conn.path} stroke="#e2e8f0" strokeWidth="2" fill="none" />
                    
                    {/* Animated signal */}
                    <motion.circle
                      r="5"
                      fill="#3b82f6"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                      style={{ offsetPath: `path('${conn.path}')` }}
                    />
                  </g>
                ))}
              </svg>

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute w-28 bg-white rounded-xl shadow-md border border-border-light p-3 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow cursor-grab"
                  style={{ left: node.x, top: node.y }}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white", node.color)}>
                    <node.icon size={16} />
                  </div>
                  <span className="text-xs font-semibold text-text-primary text-center">{node.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
