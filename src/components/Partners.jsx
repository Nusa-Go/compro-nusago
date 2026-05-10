import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  ArrowUpRight,
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

/* IMPORT IMAGES */
import travel1 from '../assets/travel1.jpeg';
import travel2 from '../assets/travel4.jpeg';
import travel3 from '../assets/travel3.jpeg';
import travel4 from '../assets/travel4.webp';

const RED = '#E50914';

export default function Partners() {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  return (
    <section
      id="partners"
      className="
        relative
        overflow-hidden
        bg-white
        pt-0
        pb-24
        lg:pb-28
        -mt-10
        scroll-mt-20
      "
    >
      {/* subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px,#000 1px,transparent 0)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-red-600 rounded-full" />

              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-red-600">
                {isEn
                  ? 'Strategic Ecosystem'
                  : 'Ekosistem Strategis'}
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="
                text-[2.4rem]
                md:text-[3rem]
                lg:text-[3.2rem]
                font-black
                tracking-[-0.05em]
                leading-[1]
                text-slate-900
              "
            >
              {isEn ? 'Connected' : 'Terhubung'} <br />

              <span className="text-red-600">
                {isEn
                  ? 'Across Indonesia.'
                  : 'Di Seluruh Indonesia.'}
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="
                mt-7
                text-lg
                lg:text-[18px]
                text-slate-500
                leading-relaxed
                font-medium
                max-w-xl
              "
            >
              {isEn
                ? 'NusaGo connects users, transportation, hotels, tourism, and local services into one seamless digital ecosystem with nationwide reach.'
                : 'NusaGo menghubungkan pengguna, transportasi, hotel, pariwisata, dan layanan lokal ke dalam satu ekosistem digital modern dengan jangkauan nasional.'}
            </motion.p>

            {/* MINI INFO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-9
                flex
                items-start
                gap-5
                rounded-[2rem]
                bg-white
                px-6
                py-5
                border border-slate-200
                shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                max-w-lg
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <Globe2
                  size={28}
                  color={RED}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-slate-900 font-black text-lg leading-snug">
                  {isEn
                    ? 'NusaGo continues to expand its digital ecosystem across Indonesia.'
                    : 'NusaGo terus memperluas ekosistem digitalnya ke seluruh Indonesia.'}
                </p>

                <p className="text-slate-500 text-sm font-medium mt-2 leading-relaxed">
                  {isEn
                    ? 'Building stronger connections between users and modern local services.'
                    : 'Membangun koneksi yang lebih kuat antara pengguna dan layanan lokal modern.'}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="text-red-600 shrink-0 mt-1"
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            {/* NETWORK LINES */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.05]"
                viewBox="0 0 600 600"
                fill="none"
              >
                <path
                  d="M120 200C220 120 380 120 480 200"
                  stroke={RED}
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />

                <path
                  d="M150 340C280 240 360 260 500 360"
                  stroke={RED}
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />

                <path
                  d="M200 470C320 380 420 400 520 300"
                  stroke={RED}
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />
              </svg>
            </motion.div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

              {/* IMAGE 1 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden rounded-[2.2rem]
                  h-[280px]
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
              >
                <img
                  src={travel1}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[28px] font-black leading-tight">
                    {t('partner.card1.title')}
                  </p>

                  <p className="text-[15px] text-white/85 mt-2 leading-relaxed">
                    {t('partner.card1.desc')}
                  </p>
                </div>
              </motion.div>

              {/* IMAGE 2 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden rounded-[2.2rem]
                  h-[340px]
                  sm:mt-10
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
              >
                <img
                  src={travel2}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[28px] font-black leading-tight">
                    {t('partner.card2.title')}
                  </p>

                  <p className="text-[15px] text-white/85 mt-2 leading-relaxed">
                    {t('partner.card2.desc')}
                  </p>
                </div>
              </motion.div>

              {/* IMAGE 3 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden rounded-[2.2rem]
                  h-[330px]
                  sm:-mt-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
              >
                <img
                  src={travel3}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[28px] font-black leading-tight">
                    {t('partner.card3.title')}
                  </p>

                  <p className="text-[15px] text-white/85 mt-2 leading-relaxed">
                    {t('partner.card3.desc')}
                  </p>
                </div>
              </motion.div>

              {/* IMAGE 4 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -6 }}
                className="
                  relative overflow-hidden rounded-[2.2rem]
                  h-[280px]
                  sm:mt-6
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
              >
                <img
                  src={travel4}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[28px] font-black leading-tight">
                    {t('partner.card4.title')}
                  </p>

                  <p className="text-[15px] text-white/85 mt-2 leading-relaxed">
                    {t('partner.card4.desc')}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
