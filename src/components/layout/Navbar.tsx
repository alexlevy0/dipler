"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@/navigation"; 
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const t = useTranslations('Navbar');
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const { scrollY } = useScroll();
  
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navTop = useTransform(scrollY, [0, 100], ["0px", "20px"]);
  const navRadius = useTransform(scrollY, [0, 100], ["0px", "9999px"]);

  const navLinks = [
    { name: t('features'), href: "#features" },
    { name: t('demo'), href: "#demo" },
    { name: t('useCases'), href: "#solutions" },
    { name: t('pricing'), href: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{ width: navWidth, top: navTop, borderRadius: navRadius }}
        className={cn(
            "fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ease-out border",
            "max-w-5xl", // Constrain max width for the floating island effect
            isScrolled 
                ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-glass border-white/20 dark:border-slate-700/50" 
                : "bg-transparent border-transparent"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-text-primary">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
              D
            </div>
            Dipler
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-bg-tertiary/50 p-1 rounded-full border border-white/10 dark:border-slate-700/30 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setActiveTab(link.name)}
                onMouseLeave={() => setActiveTab("")}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-text-secondary hover:text-text-primary transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
                aria-label={t('themeToggle')}
                title={theme === 'dark' ? t('themeLight') : t('themeDark')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-text-secondary hover:text-brand-primary transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-text-secondary hover:text-brand-primary transition-colors" />
                )}
              </button>
            )}
            <Button size="sm" variant="primary" className="hidden md:flex shadow-lg hover:shadow-glow transition-all">
              {t('login')}
            </Button>
            <button
              className="md:hidden p-2 text-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "100vh" : 0
        }}
        className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl md:hidden overflow-hidden"
      >
          <div className="pt-24 px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-bold text-text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                </Link>
            ))}
            <hr className="border-border-light" />
             <Button size="lg" className="w-full">
              {t('getStarted')} <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>
            <div className="flex justify-center items-center gap-4 pt-4">
                <LanguageSwitcher />
                {/* Theme Toggle in Mobile Menu */}
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
                    aria-label={t('themeToggle')}
                    title={theme === 'dark' ? t('themeLight') : t('themeDark')}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-text-secondary hover:text-brand-primary transition-colors" />
                    ) : (
                      <Moon className="w-5 h-5 text-text-secondary hover:text-brand-primary transition-colors" />
                    )}
                  </button>
                )}
            </div>
          </div>
      </motion.div>
    </>
  );
}
