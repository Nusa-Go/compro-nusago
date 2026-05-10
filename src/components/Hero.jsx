import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Car, Users, Headset, ShieldCheck, AtSign, Phone, Globe, Quote, Rocket } from 'lucide-react';
import heroImage from '../assets/home1.png';
import { useLanguage } from '../context/LanguageContext';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50 flex flex-col items-start hover:-translate-y-1 transition-all duration-300 w-full"
  >
    <Icon className="text-brand-red mb-3" size={28} strokeWidth={2.5} />
    <h3 className="font-bold text-sm lg:text-base text-slate-800 mb-1.5">{title}</h3>
    <p className="text-[11px] text-slate-500 leading-snug font-medium">{desc}</p>
  </motion.div>
);

const StatItem = ({ icon: Icon, val, text }) => (
  <div className="flex items-center gap-2.5 px-2 w-full sm:w-auto">
    <Icon className="text-brand-red shrink-0" size={24} strokeWidth={2.5} />
    <div className="flex flex-col">
      <span className="font-black text-sm lg:text-base text-slate-800 leading-none">{val}</span>
      <span className="text-[9px] text-slate-500 mt-1 font-medium whitespace-nowrap">{text}</span>
    </div>
  </div>
);

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    /* 
       PEMBARUAN: 
       1. Menambahkan id="home" agar bisa diakses dari navigasi.
       2. Menambahkan scroll-mt-20 sebagai margin saat di-scroll.
    */
    <section id="home" className="relative w-full bg-white overflow-hidden font-sans scroll-mt-20">

      {/* GAMBAR HERO — hanya tampil di desktop sebagai absolute */}
      <div className="hidden lg:flex absolute right-0 top-0 h-[100dvh] w-[50vw] z-0 pointer-events-none justify-end items-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={heroImage}
          alt="Hero NusaGo"
          className="w-full h-full object-contain object-[right_center] xl:translate-x-[5%]"
        />
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Kontainer Utama */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10 pt-28 lg:pt-32 pb-12 lg:pb-16 lg:min-h-[100dvh]">

        {/* SISI KIRI: Konten Teks & Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col justify-center h-full max-w-[600px]"
        >
          {/* Teks Utama */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.1] mb-2 tracking-tight">
            {lang === 'en' ? 'All-in-One' : 'Platform Travel'} <br />
            <span className="text-brand-red">{lang === 'en' ? 'Travel Platform' : 'Terpadu'}</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-brand-red mb-6 rounded-full"
          ></motion.div>

          <p className="text-slate-600 text-xs sm:text-sm mb-8 max-w-[420px] leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          {/* GAMBAR HERO — hanya tampil di mobile, di dalam flow konten */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:hidden w-full mb-6 rounded-2xl overflow-hidden"
          >
            <img
              src={heroImage}
              alt="Hero NusaGo"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Feature Cards - 3 Kolom */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <FeatureCard icon={Building2} title="Hotel" desc={lang === 'en' ? "A variety of the best hotel choices in various cities." : "Beragam pilihan hotel terbaik di berbagai kota."} delay={0.2} />
            <FeatureCard icon={Home} title="Kost & Villa" desc={lang === 'en' ? "Comfortable accommodation for short or long term." : "Akomodasi nyaman untuk jangka pendek maupun panjang."} delay={0.4} />
            <FeatureCard icon={Car} title={lang === 'en' ? "Car Rental" : "Rental Kendaraan"} desc={lang === 'en' ? "Practical car rental for more flexible travel." : "Sewa mobil praktis untuk perjalanan lebih fleksibel."} delay={0.6} />
          </div>

          {/* Contact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-start gap-4 lg:gap-6 bg-white rounded-3xl lg:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 lg:py-3.5 lg:px-6 w-fit border border-slate-50"
          >
            <a href="https://www.instagram.com/nusagoofficial?igsh=MjlsdjE5MjR2NjNk" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 text-[11px] font-bold hover:text-brand-red transition-colors">
              <AtSign size={14} className="text-brand-red" /> @nusagoofficial
            </a>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <a href="tel:+6288125502262" className="flex items-center gap-2 text-slate-600 text-[11px] font-bold hover:text-brand-red transition-colors">
              <Phone size={14} className="text-brand-red" /> +62 881-2550-2262
            </a>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <a href="https://partner.nusago.id" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 text-[11px] font-bold hover:text-brand-red transition-colors">
              <Globe size={14} className="text-brand-red" /> https://partner.nusago.id
            </a>
          </motion.div>

          {/* Tombol Join With Us — mobile */}
          <motion.a
            href="https://partner.nusago.id"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:hidden mt-5 flex items-center self-start bg-[#1A1A1A] rounded-full p-1.5 pr-8 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
          >
            <div className="bg-[#B30000] w-11 h-11 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <Rocket size={20} className="text-white fill-white" />
            </div>
            <span className="text-white font-bold text-[15px] ml-4 tracking-wide">
              {lang === 'en' ? 'Join With Us' : 'Gabung Bersama Kami'}
            </span>
          </motion.a>
        </motion.div>

        {/* SISI KANAN: Tombol Join With Us — desktop */}
        <div className="hidden lg:flex lg:col-span-6 relative h-full flex-col justify-end items-end pb-8 pr-4 pointer-events-none z-20">
          <motion.a
            href="https://partner.nusago.id"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center bg-[#1A1A1A] rounded-full p-1.5 pr-8 hover:-translate-y-1 transition-all duration-300 shadow-2xl pointer-events-auto group"
          >
            <div className="bg-[#B30000] w-11 h-11 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <Rocket size={20} className="text-white fill-white" />
            </div>
            <span className="text-white font-bold text-[15px] ml-4 tracking-wide">
              {lang === 'en' ? 'Join With Us' : 'Gabung Bersama Kami'}
            </span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}