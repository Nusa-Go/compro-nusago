import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import mockup2 from '../assets/hp2.jpeg';
import mockup3 from '../assets/hp3.jpeg';
import mockup4 from '../assets/hp4.jpeg';

const RED = '#E50914';
const RED_LIGHT = '#FF2E2E';
const RED_DARK = '#8B0000';

export default function AppDownload() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      id="app-download"
      className="relative overflow-hidden py-6 md:py-8 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* MAIN CONTAINER */}
        <div className="relative overflow-hidden rounded-[2.5rem] min-h-[500px]">

          {/* RED BACKGROUND */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${RED_LIGHT} 0%, ${RED} 45%, ${RED_DARK} 100%)`,
            }}
          />

          {/* SOFT GLOW & NOISE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_35%)]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* CONTENT */}
          <motion.div
            style={{ y: textY }}
            className="relative z-20 flex flex-col justify-center h-full max-w-[520px] px-8 md:px-14 py-12"
          >

            {/* LABEL */}
            <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Get Application
              </span>
            </div>

            {/* TITLE - FUNGSI BAHASA DITERAPKAN DISINI */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-[2.6rem] md:text-[3.2rem] font-black leading-[1.05] tracking-[-0.04em] text-white"
            >
              {t('app.download.title')} <br />
              <span className="relative inline-block">
                {t('app.download.brand')}

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                  }}
                  className="absolute left-0 right-0 -bottom-2 h-[4px] rounded-full bg-white/30 origin-left"
                />
              </span>
            </motion.h1>

            {/* DESC - FUNGSI BAHASA DITERAPKAN DISINI */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-7 text-white/80 text-base md:text-lg leading-relaxed max-w-[420px] font-medium"
            >
              {t('app.download.desc')}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">Download on the</p>
                  <p className="text-white font-bold text-lg leading-tight">App Store</p>
                </div>
              </button>

              <button className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-black hover:scale-[1.03] transition-all duration-300">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-black">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/50 font-semibold">Get it on</p>
                  <p className="text-black font-bold text-lg leading-tight">Google Play</p>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* PHONE MOCKUPS (Dimensi sesuai permintaan sebelumnya) */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="absolute top-[60px] right-[8%] rotate-[18deg] z-10">
              <div className="relative w-[200px] h-[410px] rounded-[2.5rem] bg-[#111] border-[6px] border-[#1a1a1a] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <img src={mockup2} alt="Mockup 2" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="absolute bottom-[-60px] right-[2%] rotate-[18deg]">
              <div className="relative w-[150px] h-[310px] rounded-[2rem] bg-[#111] border-[6px] border-[#1a1a1a] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                <img src={mockup3} alt="Mockup 3" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }} className="absolute top-[-50px] right-[-30px] rotate-[18deg]">
              <div className="relative w-[140px] h-[280px] rounded-[2rem] bg-[#111] border-[6px] border-[#1a1a1a] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                <img src={mockup4} alt="Mockup 4" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}