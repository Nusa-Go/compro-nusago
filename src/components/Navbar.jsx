import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  // Monitor scroll position to toggle navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm'
        : 'bg-transparent py-6 border-b border-transparent'
      }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">

        {/* Logo - Click to scroll to top (Home) */}
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Nusa<span className="text-brand-red">Go</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-slate-700">
          {/* ADDED: Home Link */}
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.home') || 'Home'}
          </a>

          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.about') || 'About'}
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.products') || 'Products'}
          </a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.promo') || 'Promo'}
          </a>
          <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.partners') || 'Partners'}
          </a>
          <a href="#footer" onClick={(e) => scrollToSection(e, 'footer')} className="transition-all duration-300 hover:text-brand-red">
            {t('nav.help') || 'Help'}
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 border ${isScrolled ? 'text-slate-500 border-slate-200 hover:bg-slate-100' : 'text-slate-700 border-slate-300 hover:bg-white/20'
              }`}
          >
            <Globe size={14} />
            <span className="uppercase tracking-widest">{lang}</span>
          </button>

          <a href="https://nusago.id/login" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-700 hover:text-brand-red transition-all duration-300">
            {t('nav.login') || 'Login'}
          </a>
          <a href="https://nusago.id/register" target="_blank" rel="noreferrer" className="text-sm font-bold px-6 py-2.5 rounded-full bg-brand-red text-white hover:bg-rose-700 transition-all duration-300 flex items-center gap-1 group shadow-lg shadow-rose-200">
            {t('nav.register') || 'Register'}
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleLanguage} className="p-2 text-slate-500 border border-slate-200 rounded-full">
            <Globe size={18} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 text-slate-900">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {/* ADDED: Mobile Home Link */}
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-slate-900 font-bold text-lg">{t('nav.home') || 'Home'}</a>

              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-slate-900 font-bold text-lg">{t('nav.about') || 'About'}</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-slate-900 font-bold text-lg">{t('nav.products') || 'Products'}</a>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-slate-900 font-bold text-lg">{t('nav.promo') || 'Promo'}</a>
              <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className="text-slate-900 font-bold text-lg">{t('nav.partners') || 'Partners'}</a>
              <a href="#footer" onClick={(e) => scrollToSection(e, 'footer')} className="text-slate-900 font-bold text-lg">{t('nav.help') || 'Help'}</a>

              <div className="h-px w-full bg-slate-100 my-2"></div>

              <div className="flex flex-col gap-3">
                <a href="https://nusago.id/login" target="_blank" rel="noreferrer" className="w-full py-3.5 text-slate-700 font-bold border border-slate-200 rounded-xl text-center">
                  {t('nav.login') || 'Login'}
                </a>
                <a href="https://nusago.id/register" target="_blank" rel="noreferrer" className="w-full py-3.5 bg-brand-red text-white font-bold rounded-xl text-center shadow-lg shadow-rose-100">
                  {t('nav.register') || 'Register'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}