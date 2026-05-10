import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, Home, Car, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const RED = 'oklch(0.55 0.22 25.5)';
const RED_DARK = 'oklch(0.48 0.20 25.5)';
const RED_GLOW = 'oklch(0.55 0.22 25.5 / 0.28)';

const services = (isEn) => [
  {
    icon: Building2, num: '01',
    title: isEn ? 'Hotels' : 'Hotel',
    tagline: isEn ? 'Star-rated comfort' : 'Kenyamanan bintang',
    desc: isEn
      ? 'Curated star-rated stays with seamless end-to-end management for every traveler.'
      : 'Kurasi penginapan bintang dengan manajemen menyeluruh untuk setiap pelancong.',
    dark: false,
  },
  {
    icon: Car, num: '02',
    title: isEn ? 'Fleet' : 'Armada',
    tagline: isEn ? 'Keyless freedom' : 'Bebas tanpa kunci',
    desc: isEn
      ? 'Premium keyless vehicles that give independent travelers full control on the road.'
      : 'Kendaraan premium tanpa kunci untuk kebebasan penuh di perjalanan.',
    dark: true,
  },
  {
    icon: Home, num: '03',
    title: isEn ? 'Stays' : 'Hunian',
    tagline: isEn ? 'Long-term living' : 'Hunian jangka panjang',
    desc: isEn
      ? 'Verified villas and kost curated for extended stays with full comfort.'
      : 'Villa dan kost terverifikasi untuk kenyamanan hunian jangka panjang.',
    dark: false,
  },
  {
    icon: Map, num: '04',
    title: isEn ? 'Voyage' : 'Wisata',
    tagline: isEn ? 'Bespoke journeys' : 'Perjalanan eksklusif',
    desc: isEn
      ? 'Tailored tour packages crafted for both corporate teams and personal adventures.'
      : 'Paket wisata personal yang dirancang untuk korporat maupun wisata pribadi.',
    dark: true,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Spotlight Card ─────────────────────────────────────── */
function SpotlightCard({ children, dark, style, className }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  }, []);

  const spotColor = dark
    ? 'rgba(255,255,255,0.10)'
    : 'oklch(0.55 0.22 25.5 / 0.07)';

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, ${spotColor}, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[2.5rem]"
        style={{
          opacity: dark ? 0.06 : 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full z-0 transition-opacity duration-700"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)'
            : `radial-gradient(circle, oklch(0.55 0.22 25.5 / 0.08) 0%, transparent 70%)`,
          opacity: 0.6,
        }}
      />

      <div
        className="pointer-events-none absolute top-0 left-8 h-px w-16 z-30 transition-all duration-700 group-hover:w-24"
        style={{ background: dark ? 'rgba(255,255,255,0.15)' : 'oklch(0.55 0.22 25.5 / 0.2)' }}
      />

      <div className="relative z-30">{children}</div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function Services() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';
  const data = services(isEn);

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const headerY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section
      ref={sectionRef}
      /* 
         PEMBARUAN UTAMA: 
         - Menambahkan id="services" sebagai target navigasi.
         - Menambahkan scroll-mt-20 agar tidak tertutup Navbar saat di-scroll.
      */
      id="services"
      className="relative pt-0 pb-28 lg:pb-36 bg-white font-sans overflow-hidden lg:-mt-10 scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-[1.5px] w-8 rounded-full origin-left"
                style={{ background: RED }}
              />
              <span className="font-bold uppercase tracking-[0.25em] text-[10px]" style={{ color: RED }}>
                {isEn ? 'The Solutions' : 'Solusi Kami'}
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
                className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight"
              >
                {isEn ? 'Integrated' : 'Ekosistem'}<br />
                <span style={{ color: RED }}>{isEn ? 'Ecosystem.' : 'Terintegrasi.'}</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-slate-400 text-sm lg:text-base font-medium max-w-[350px] leading-relaxed italic"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── CARDS GRID ── */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {data.map(({ icon: Icon, num, title, tagline, desc, dark }, i) => (
            <SpotlightCard
              key={i}
              dark={dark}
              className="rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between min-h-[340px] border"
              style={
                dark
                  ? { background: RED, borderColor: RED_DARK }
                  : { background: 'rgba(248,249,250,0.5)', borderColor: 'transparent' }
              }
              onHoverStart={(e) => {
                if (dark) e.currentTarget.style.boxShadow = `0 20px 50px ${RED_GLOW}`;
                else {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)';
                }
              }}
              onHoverEnd={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                if (!dark) {
                  e.currentTarget.style.background = 'rgba(248,249,250,0.5)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-[10px] font-black tracking-widest"
                  style={{ color: dark ? 'rgba(255,255,255,0.25)' : '#e2e8f0' }}
                >
                  {num}
                </span>

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={
                    dark
                      ? { background: 'rgba(255,255,255,0.15)', color: '#ffffff' }
                      : { background: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', color: '#94a3b8' }
                  }
                >
                  <Icon size={22} strokeWidth={1.5} />
                </motion.div>
              </div>

              <div className="mt-12 flex-1">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.2em] mb-2"
                  style={{ color: dark ? 'rgba(255,255,255,0.45)' : 'oklch(0.55 0.22 25.5 / 0.55)' }}
                >
                  {tagline}
                </p>
                <h3
                  className="text-2xl font-black tracking-tighter mb-4"
                  style={{ color: dark ? '#ffffff' : '#0f172a' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-6 font-medium"
                  style={{ color: dark ? 'rgba(255,255,255,0.65)' : '#64748b' }}
                >
                  {desc}
                </p>
              </div>

              <div className="mt-8">
                <motion.div
                  initial={{ width: 32 }}
                  whileHover={{ width: 56 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-[1.5px] rounded-full"
                  style={{ background: dark ? 'rgba(255,255,255,0.3)' : '#e2e8f0', width: 32 }}
                />
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}