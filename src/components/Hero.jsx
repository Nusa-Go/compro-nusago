import React from 'react';
import { AtSign, Phone, Globe, Rocket, Headset, ShieldCheck, Clock, Award, Building2, BedSingle, Palmtree, Home, Car } from 'lucide-react';
import heroImage from '../assets/home1.png';
import { useLanguage } from '../context/LanguageContext';

const FeatureCard = ({ icon: Icon, title }) => (
  <div className="bg-white rounded-[14px] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_10px_25px_rgb(0,0,0,0.08)] transition-all duration-300 w-20 h-20 lg:w-24 lg:h-24 group">
    <Icon className="text-brand-red mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0" size={24} strokeWidth={2} />
    <h3 className="font-bold text-[11px] lg:text-[12px] text-slate-900 leading-tight">{title}</h3>
  </div>
);

const StatItem = ({ icon: Icon, val, text }) => (
  <div className="flex items-center gap-2.5">
    <Icon className="text-brand-red shrink-0" size={26} strokeWidth={2} />
    <div className="flex flex-col justify-center">
      <span className="font-bold text-[14px] lg:text-[15px] text-slate-900 leading-tight">{val}</span>
      <span className="text-[10px] lg:text-[11px] text-slate-500 font-medium leading-tight">{text}</span>
    </div>
  </div>
);

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative w-full bg-white overflow-hidden font-sans scroll-mt-20">

      {/* GAMBAR HERO — hanya tampil di desktop sebagai absolute */}
      <div className="hidden lg:flex absolute right-0 top-0 h-[100dvh] w-[45vw] xl:w-[50vw] z-0 pointer-events-none justify-end items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero NusaGo"
          className="w-full h-[85%] object-contain object-[right_center] xl:translate-x-4 origin-right"
        />
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Kontainer Utama */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center relative z-10 pt-28 lg:pt-32 pb-8 lg:pb-8 lg:min-h-[100dvh]">

        {/* Bagian Atas: Teks & Tombol */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 w-full mb-4 lg:mb-4 flex-1">
          {/* SISI KIRI: Konten Teks */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full max-w-[650px]">
            {/* Teks Utama */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-black text-slate-900 leading-[1.1] mb-3 tracking-tight relative z-10 drop-shadow-sm">
              {lang === 'en' ? 'All-in-One' : 'Platform Travel'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-[#E60000]">
                {lang === 'en' ? 'Travel Platform' : 'Terpadu'}
              </span>
            </h1>

            <div className="h-1.5 lg:h-2 bg-gradient-to-r from-brand-red to-red-500 mb-4 lg:mb-6 rounded-full w-16 lg:w-20"></div>

            <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-[480px] leading-relaxed font-medium relative z-10">
              {t('hero.subtitle')}
            </p>

            {/* GAMBAR HERO — hanya tampil di mobile, di dalam flow konten */}
            <div className="lg:hidden w-full mb-8 rounded-2xl overflow-hidden relative z-10">
              <img
                src={heroImage}
                alt="Hero NusaGo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Feature Cards Row (Hotel, Kost, dll) */}
            <div className="flex flex-wrap items-center justify-start gap-3 lg:gap-4 mb-6 relative z-10 w-full">
              <FeatureCard icon={Building2} title="Hotel" />
              <FeatureCard icon={BedSingle} title="Kost" />
              <FeatureCard icon={Palmtree} title="Villa" />
              <FeatureCard icon={Home} title="Homestay" />
              <FeatureCard icon={Car} title={lang === 'en' ? "Car Rental" : "Rental"} />
            </div>

            {/* Stat Icons Row (24/7, Aman, dll) */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-3 lg:p-4 w-fit mb-5 relative z-10">
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-4 sm:gap-0 sm:divide-x sm:divide-slate-200">
                <div className="sm:pr-5"><StatItem icon={Headset} val="24/7" text={lang === 'en' ? "Customer Support" : "Layanan Pelanggan"} /></div>
                <div className="sm:px-5"><StatItem icon={ShieldCheck} val={lang === 'en' ? "Secure" : "Aman"} text={lang === 'en' ? "And Trusted" : "dan Terpercaya"} /></div>
                <div className="sm:px-5"><StatItem icon={Clock} val={lang === 'en' ? "Fast" : "Cepat"} text={lang === 'en' ? "Instant Booking" : "Booking Instan"} /></div>
                <div className="sm:pl-5"><StatItem icon={Award} val={lang === 'en' ? "Quality" : "Kualitas"} text={lang === 'en' ? "Best Service" : "Terjamin"} /></div>
              </div>
            </div>

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center justify-start gap-3 lg:gap-5 bg-white/80 backdrop-blur-md rounded-3xl lg:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3 lg:py-2.5 lg:px-5 w-fit border border-slate-100 mb-0 relative z-10">
              <a href="https://www.instagram.com/nusagoofficial?igsh=MjlsdjE5MjR2NjNk" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 text-[10px] lg:text-[11px] font-bold hover:text-brand-red transition-colors">
                <AtSign size={14} className="text-brand-red" /> @nusagoofficial
              </a>
              <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
              <a href="tel:+6288125502262" className="flex items-center gap-1.5 text-slate-600 text-[10px] lg:text-[11px] font-bold hover:text-brand-red transition-colors">
                <Phone size={14} className="text-brand-red" /> +62 881-2550-2262
              </a>
              <div className="w-px h-4 bg-slate-200 hidden md:block"></div>
              <a href="https://partner.nusago.id" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-600 text-[10px] lg:text-[11px] font-bold hover:text-brand-red transition-colors w-full md:w-auto mt-2 md:mt-0">
                <Globe size={14} className="text-brand-red" /> https://partner.nusago.id
              </a>
            </div>

            {/* Tombol Join With Us — mobile only */}
            <a
              href="https://partner.nusago.id"
              target="_blank"
              rel="noreferrer"
              className="lg:hidden mt-6 flex items-center self-start bg-[#1A1A1A] rounded-full p-1.5 pr-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] group relative z-10 w-fit"
            >
              <div className="bg-[#B30000] w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Rocket size={18} className="text-white fill-white" />
              </div>
              <span className="text-white font-bold text-[13px] ml-3 tracking-wide">
                {lang === 'en' ? 'Join Partner Now' : 'Gabung Mitra Sekarang'}
              </span>
            </a>
          </div>

          {/* SISI KANAN: Tombol Join With Us — desktop */}
          <div className="hidden lg:flex lg:col-span-5 relative h-full flex-col justify-end items-end pointer-events-none z-20 pb-2">
            <a
              href="https://partner.nusago.id"
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-[#1A1A1A] rounded-full p-1 pr-6 hover:-translate-y-1 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-auto group mt-auto mr-2"
            >
              <div className="bg-[#B30000] w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Rocket size={18} className="text-white fill-white" />
              </div>
              <span className="text-white font-bold text-[13px] lg:text-[14px] ml-3 tracking-wide">
                {lang === 'en' ? 'Join Partner Now' : 'Gabung Mitra Sekarang'}
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}