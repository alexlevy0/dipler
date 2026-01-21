import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "Changelog", href: "/changelog" },
    { name: "Status", href: "/status" },
  ],
  solutions: [
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Real Estate", href: "/solutions/real-estate" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "Finance", href: "/solutions/finance" },
    { name: "BPO", href: "/solutions/bpo" },
  ],
  developers: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs/api" },
    { name: "SDKs", href: "/docs/sdks" },
    { name: "Community", href: "/community" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-10 relative overflow-hidden">
        {/* Giant Background Text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden">
            <span className="text-[20vw] font-display font-bold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
                DIPLER
            </span>
        </div>

        {/* Magnetic CTA Section */}
         <div className="container mx-auto px-4 md:px-6 relative z-10 mb-24">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
                    Ready to scale your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                        voice operations?
                    </span>
                </h2>
                <div className="flex gap-4">
                     <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-glow">
                        Get Started Now
                     </Button>
                </div>
            </div>
         </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16 border-t border-white/10 pt-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20">
                D
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Dipler</span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-lg">
              The Voice AI Platform for modern teams. Build, deploy, and scale intelligent voice agents in minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-colors rounded-full border border-white/5 hover:border-white/20">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-colors rounded-full border border-white/5 hover:border-white/20">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-colors rounded-full border border-white/5 hover:border-white/20">
                <Github size={20} />
              </a>
               <a href="#" className="p-3 text-slate-400 hover:text-white hover:bg-white/10 transition-colors rounded-full border border-white/5 hover:border-white/20">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-white mb-6 text-lg">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-white mb-6 text-lg">Developers</h4>
            <ul className="space-y-4">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            © 2025 Dipler Inc. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇫🇷</span> Made in France
          </div>
        </div>
      </div>
    </footer>
  );
}
