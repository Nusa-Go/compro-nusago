import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <footer className="bg-[#0a0204] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Top Call to Action in Footer */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-20 border-b border-white/10 mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">{isEn ? 'Ready for' : 'Siap untuk'} <span className="text-brand-red">{isEn ? 'transformation?' : 'transformasi?'}</span></h2>
            <p className="text-slate-400 text-xl font-medium">{isEn ? 'Join our ecosystem and experience limitless mobility.' : 'Bergabunglah dengan ekosistem kami dan rasakan kemudahan mobilitas tanpa batas.'}</p>
          </div>
          <button className="shrink-0 bg-brand-red hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-colors">
            {isEn ? 'Contact Our Team' : 'Hubungi Tim Kami'}
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <span className="text-3xl font-black tracking-tighter text-white mb-6 block">
              Nusa<span className="text-brand-red">Go</span>
            </span>
            <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-lg text-white mb-6 uppercase tracking-widest">{t('services.title')}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-brand-red transition-colors">{isEn ? 'Hotel Booking' : 'Booking Hotel'}</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">{isEn ? 'Boarding House & Villa' : 'Sewa Kost & Villa'}</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">{isEn ? 'Car Rental' : 'Sewa Kendaraan'}</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">{isEn ? 'Travel Packages' : 'Paket Perjalanan'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-bold text-lg text-white mb-6 uppercase tracking-widest">{t('footer.contact')}</h4>
            <div className="space-y-6 text-slate-400 font-medium">
              <p className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                <span>{t('footer.address')}</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                <span className="flex flex-col">
                  <span>Admin 1: 0811-2550-2261</span>
                  <span>Admin 2: 0811-2550-2262</span>
                </span>
              </p>
              <p className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                <a href="https://partner.nusago.id" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">partner.nusago.id</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© 2026 PT NusaGo Digital Travelindo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}