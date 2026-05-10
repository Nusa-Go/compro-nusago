import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Partners from './components/Partners';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Features />
        <Partners />
        <AppDownload />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
