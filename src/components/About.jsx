import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Car, Plane, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import mascotImage from '../assets/mascot.png';

const orbitIcons = [
  { icon: Building2, label: 'Hotel', angle: 0, radius: 130, color: '#B30000' },
  { icon: Home, label: 'Kost', angle: 60, radius: 130, color: '#1A1A1A' },
  { icon: Car, label: 'Mobil', angle: 120, radius: 130, color: '#B30000' },
  { icon: Plane, label: 'Travel', angle: 180, radius: 130, color: '#1A1A1A' },
  { icon: MapPin, label: 'Destinasi', angle: 240, radius: 130, color: '#B30000' },
  { icon: Star, label: 'Terbaik', angle: 300, radius: 130, color: '#1A1A1A' },
];

export default function About() {
  const { t, lang } = useLanguage();

  return (
    /* 
      PEMBARUAN: Menambahkan id="about" agar bisa diakses dari Navbar.
      Menambahkan scroll-mt-20 agar saat di-scroll, section tidak tertutup navbar.
    */
    <section
      id="about"
      className="relative pt-4 pb-24 lg:pt-8 lg:pb-32 bg-white overflow-hidden font-sans scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* SISI KIRI: MASKOT & ORBIT */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">

              {/* Lingkaran Orbit Dekoratif */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-200/60 scale-95" />

              {/* Maskot Sentral NusaGo */}
              <motion.img
                src={mascotImage}
                alt="NusaGo Mascot"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-40 lg:w-48 drop-shadow-2xl"
              />

              {/* Kontainer Rotasi Icon */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                {orbitIcons.map(({ icon: Icon, label, angle, radius, color }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  // Penyesuaian center agar responsif
                  const center = 150; // default mobile
                  const desktopCenter = 190;
                  const currentCenter = typeof window !== 'undefined' && window.innerWidth < 1024 ? center : desktopCenter;

                  const x = currentCenter + Math.cos(rad) * radius;
                  const y = currentCenter + Math.sin(rad) * radius;

                  return (
                    <div
                      key={i}
                      className="absolute flex flex-col items-center pointer-events-auto"
                      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div
                          className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center shadow-md border-2 border-white transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        >
                          <Icon size={16} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                          {label}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* SISI KANAN: KONTEN TEKS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-red"></div>
              <h4 className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">
                {t('about.title')}
              </h4>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-8">
              {lang === 'en' ? 'Building' : 'Membangun'}{' '}
              {lang === 'en' ? 'Mobility' : 'Ekosistem'}{' '}
              <span className="text-brand-red">
                {lang === 'en' ? 'Ecosystem' : 'Mobilitas'}
              </span>
            </h2>

            <div className="max-w-[580px] space-y-5">
              <p className="text-lg lg:text-xl leading-relaxed font-semibold text-slate-800">
                {t('about.desc1')}
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-slate-500 font-medium italic border-l-2 border-brand-red/20 pl-4">
                {t('background.desc1')} {t('background.desc2')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}