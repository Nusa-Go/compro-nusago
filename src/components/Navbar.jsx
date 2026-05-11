import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-4 md:px-10 transition-all duration-500">
      <div className={`max-w-[1200px] mx-auto flex items-center justify-between px-3 py-2 transition-all duration-500 rounded-full border border-slate-200/60 shadow-sm ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}>

        {/* LOGO SECTION */}
        <div
          className="flex items-center gap-3 pl-1 cursor-pointer group" // Disesuaikan: pl-1 & gap-3
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
            <img src="/nus.png" alt="Logo" className="w-6 h-6 object-contain" />
          </div>
          <div className="h-8 w-[1px] bg-slate-200" />
          {/* Logo Full Merah sesuai permintaan sebelumnya */}
          <span className="text-[17px] font-bold tracking-tight text-brand-red pr-2">
            NusaGo
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-bold text-slate-600 font-roboto">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-brand-red transition-colors">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-brand-red transition-colors">About</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brand-red transition-colors">Services</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-brand-red transition-colors">Feature</a>
          <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className="hover:text-brand-red transition-colors">Partners</a>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 pr-1">
          <div className="hidden md:flex items-center gap-4 mr-2">
            <div className="h-8 w-[1px] bg-slate-200" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-slate-100/80 hover:bg-slate-200/50 px-5 py-2.5 rounded-full text-[13px] font-bold text-slate-800 transition-all font-roboto"
            >
              <span className="capitalize">{lang === 'id' ? 'Indonesia' : 'English'}</span>
              <ChevronDown size={14} className="text-slate-500" />
            </button>
          </div>

          <button
            onClick={(e) => scrollToSection(e, 'app-download')}
            className="bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-slate-800 transition-all active:scale-95 font-roboto"
          >
            Get the app
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors ml-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL - OPTIMIZED FOR NEATNESS */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            // Menggunakan absolute top-20 agar tidak menutupi navbar dan tetap simetris
            className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden z-40"
          >
            <div className="p-8 flex flex-col gap-1 font-roboto">
              {/* Menu Links */}
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Feature', id: 'features' },
                { name: 'Partners', id: 'partners' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="py-4 text-center text-slate-700 font-bold text-lg hover:text-brand-red active:bg-slate-50 rounded-2xl transition-all"
                >
                  {item.name}
                </a>
              ))}

              <div className="h-px w-full bg-slate-100 my-4" />

              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-3 py-4 text-slate-500 font-bold text-sm uppercase tracking-widest bg-slate-50 rounded-2xl active:scale-[0.98] transition-transform"
              >
                <Globe size={18} />
                {lang === 'id' ? 'Bahasa Indonesia' : 'English Language'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}