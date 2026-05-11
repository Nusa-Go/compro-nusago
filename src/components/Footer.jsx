import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Icon } from '@iconify/react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full font-roboto overflow-hidden">

      {/* SECTION ATAS: Area Putih dengan Background Shape */}
      <div className="relative bg-white pt-20">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[80px] md:h-[150px] fill-slate-50"
          >
            <path d="M0,120 L0,0 C300,0 450,100 600,100 C750,100 900,0 1200,0 L1200,120 Z"></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center border-4 border-slate-50 shadow-xl transform translate-y-1/2 transition-transform duration-500 hover:scale-110">
            <div className="w-full h-full p-4 flex items-center justify-center bg-white rounded-[1.4rem]">
              <img src="/nus.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION BAWAH: Area Content (Slate-50) */}
      <div className="bg-slate-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col items-center mb-16 pt-6">
            <span className="text-3xl font-bold tracking-tight text-brand-red">
              NusaGo
            </span>
            <div className="h-1 w-10 bg-brand-red/20 rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Kolom 1: Brand & Contact */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="font-bold text-slate-900 text-[16px]">
                PT NusaGo Digital Travelindo
              </h4>
              <div className="space-y-4 text-slate-500 text-[14px] font-medium font-roboto">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-brand-red shrink-0" />
                  <span>{t('footer.address')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-brand-red shrink-0" />
                  <span>0811-2550-2261</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-brand-red shrink-0" />
                  <span>hello@nusago.id</span>
                </div>
              </div>
            </div>

            {/* Kolom 2: Navigasi - Sinkron dengan Navbar */}
            <div className="md:col-span-4 flex flex-col md:items-center">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 text-[16px] md:text-center">
                  {t('footer.nav_title')}
                </h4>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-slate-600 text-[14px] font-bold tracking-tight font-roboto">
                  <a href="#home" className="hover:text-brand-red transition-all">{t('nav.home')}</a>
                  <a href="#about" className="hover:text-brand-red transition-all">{t('nav.about')}</a>
                  <a href="#services" className="hover:text-brand-red transition-all">{t('nav.services')}</a>
                  <a href="#features" className="hover:text-brand-red transition-all">{t('nav.features')}</a>
                  <a href="#partners" className="hover:text-brand-red transition-all">{t('nav.partners')}</a>
                  <a href="#help" className="hover:text-brand-red transition-all">{t('nav.help')}</a>
                </div>
              </div>
            </div>

            {/* Kolom 3: Newsletter */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                {t('footer.sub_title')}
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                {t('footer.sub_desc')}
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-white border-2 border-slate-100 py-4 pl-5 pr-28 rounded-2xl text-[13px] font-bold outline-none focus:border-brand-red/30 transition-all shadow-sm font-roboto"
                />
                <button className="absolute right-2 top-2 bg-[#0F172A] text-white px-6 py-2.5 rounded-xl text-[12px] font-bold hover:bg-brand-red transition-all active:scale-95 shadow-lg">
                  {t('footer.sub_button')} →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Social & Copyright */}
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-slate-400 mr-2">{t('footer.follow')}</span>
              {[
                { icon: 'ri:instagram-line', link: '#' },
                { icon: 'ri:facebook-circle-line', link: '#' },
                { icon: 'ri:twitter-x-line', link: '#' },
                { icon: 'ri:linkedin-box-line', link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="text-slate-400 hover:text-brand-red transition-colors"
                >
                  <Icon icon={social.icon} width="22" />
                </a>
              ))}
            </div>
            <p className="text-[11px] font-bold text-slate-400 font-roboto">
              Copyright © 2026 NusaGo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}