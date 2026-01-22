"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";


export function Comparison() {
  const t = useTranslations('Comparison');

  const features = [
    { name: t('rows.latency.name'), dipler: t('rows.latency.dipler'), ivr: t('rows.latency.ivr'), generic: t('rows.latency.generic') },
    { name: t('rows.setup.name'), dipler: t('rows.setup.dipler'), ivr: t('rows.setup.ivr'), generic: t('rows.setup.generic') },
    { name: t('rows.interruptions.name'), dipler: true, ivr: false, generic: t('rows.interruptions.generic') },
    { name: t('rows.sentiment.name'), dipler: true, ivr: false, generic: true },
    { name: t('rows.llm.name'), dipler: true, ivr: false, generic: false },
    { name: t('rows.price.name'), dipler: t('rows.price.dipler'), ivr: t('rows.price.ivr'), generic: t('rows.price.generic') },
  ];
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
           <Badge variant="brand" className="mb-4">{t('badge')}</Badge>
           <h2 className="text-4xl font-display font-bold text-text-primary">
               {t.rich('title', {
                   strike: (chunks: React.ReactNode) => <span className="text-text-tertiary decoration-line-through">{chunks}</span>
               })}
           </h2>
        </div>

        <div className="overflow-x-auto max-w-4xl mx-auto rounded-2xl border border-border-light shadow-lg">
            <table className="w-full text-left border-collapse bg-white">
                <thead>
                    <tr className="bg-bg-secondary border-b border-border-light">
                        <th className="p-6 text-sm font-semibold text-text-secondary uppercase tracking-wider w-1/4">{t('cols.feature')}</th>
                        <th className="p-6 text-sm font-semibold text-text-secondary uppercase tracking-wider w-1/4 text-center">{t('cols.ivr')}</th>
                        <th className="p-6 text-sm font-semibold text-text-secondary uppercase tracking-wider w-1/4 text-center">{t('cols.generic')}</th>
                        <th className="p-6 text-lg font-bold text-brand-primary w-1/4 text-center bg-brand-primary/5 border-l border-r border-brand-primary/10 relative">
                             <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
                             {t('cols.dipler')}
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                    {features.map((row, i) => (
                        <tr key={row.name} className="hover:bg-bg-secondary/30 transition-colors">
                            <td className="p-6 font-medium text-text-primary">{row.name}</td>
                            
                            {/* IVR */}
                            <td className="p-6 text-center text-text-secondary">
                                <CellContent value={row.ivr} />
                            </td>
                            
                            {/* Generic */}
                            <td className="p-6 text-center text-text-secondary">
                                <CellContent value={row.generic} />
                            </td>

                            {/* Dipler */}
                            <td className="p-6 text-center font-bold text-text-primary bg-brand-primary/5 border-l border-r border-brand-primary/10">
                                <CellContent value={row.dipler} isBrand />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
}

function CellContent({ value, isBrand = false }: { value: string | boolean, isBrand?: boolean }) {
    if (typeof value === 'boolean') {
        if (value) return <div className="flex justify-center"><Check className={cn("w-6 h-6", isBrand ? "text-brand-primary" : "text-green-500")} /></div>;
        return <div className="flex justify-center"><X className="w-6 h-6 text-gray-300" /></div>;
    }
    return <span>{value}</span>;
}
