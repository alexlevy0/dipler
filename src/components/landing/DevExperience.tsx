"use client";

import { motion } from "framer-motion";
import { Webhook, Phone, Database, Brain, Plug, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

const codeExample = `// Exemple : Trigger un appel depuis n8n
const response = await fetch('https://api.dipler.io/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    agent_id: 'agent_abc123',
    phone_number: '+33612345678',
    context: {
      client_name: 'Jean Dupont',
      last_order: '2024-01-15',
      crm_id: 'hubspot_12345'
    }
  })
});`;

export function DevExperience() {
  const t = useTranslations('DevExperience');

  const integrations = [
    { icon: Webhook, title: t('integrations.n8n.title'), description: t('integrations.n8n.desc') },
    { icon: Phone, title: t('integrations.outbound.title'), description: t('integrations.outbound.desc') },
    { icon: Database, title: t('integrations.crm.title'), description: t('integrations.crm.desc') },
    { icon: Brain, title: t('integrations.memory.title'), description: t('integrations.memory.desc') },
    { icon: Plug, title: t('integrations.api.title'), description: t('integrations.api.desc') },
    { icon: MessageSquare, title: t('integrations.pbx.title'), description: t('integrations.pbx.desc') },
  ];

  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">{t('badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {t.rich('title', {
                gradient: (chunks) => <span className="text-gradient">{chunks}</span>
            })}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <integration.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{integration.title}</h3>
                <p className="text-text-secondary">{integration.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-[#0f172a] border border-brand-primary/20 shadow-2xl overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-auto text-xs text-text-tertiary font-mono">{t('windowTitle')}</div>
            </div>

            {/* Code Area */}
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-blue-300">{codeExample}</code>
              </pre>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
          </div>
        </motion.div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
             {t.rich('bottomNote', {
                bold: (chunks) => <span className="font-semibold text-text-primary">{chunks}</span>
             })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
