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
    <footer className="bg-bg-secondary pt-20 pb-10 border-t border-border-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="font-display font-bold text-xl text-text-primary">Dipler</span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-sm leading-relaxed">
              The Voice AI Platform for modern teams. Build, deploy, and scale intelligent voice agents in minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 text-text-tertiary hover:text-brand-primary transition-colors bg-white rounded-lg shadow-sm hover:shadow-md border border-border-light">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 text-text-tertiary hover:text-brand-primary transition-colors bg-white rounded-lg shadow-sm hover:shadow-md border border-border-light">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 text-text-tertiary hover:text-brand-primary transition-colors bg-white rounded-lg shadow-sm hover:shadow-md border border-border-light">
                <Github size={20} />
              </a>
               <a href="#" className="p-2 text-text-tertiary hover:text-brand-primary transition-colors bg-white rounded-lg shadow-sm hover:shadow-md border border-border-light">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-text-primary mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-text-primary mb-4">Developers</h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border-light pt-10 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h4 className="font-semibold text-text-primary mb-1">Subscribe to updates</h4>
                    <p className="text-sm text-text-secondary">Get the latest news and specialized developer tips.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="px-4 py-2 rounded-lg border border-border-medium focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none w-full md:w-64"
                    />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
          <div>
            © 2025 Dipler Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-text-secondary">Privacy</Link>
            <Link href="/terms" className="hover:text-text-secondary">Terms</Link>
            <Link href="/security" className="hover:text-text-secondary">Security</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇫🇷</span> Made in France
          </div>
        </div>
      </div>
    </footer>
  );
}
