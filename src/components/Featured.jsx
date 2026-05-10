import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { featuredItems } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function Featured() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{isEn ? 'Top Recommendations' : 'Rekomendasi Terbaik'}</h2>
            <p className="text-gray-500 text-lg md:text-xl font-light">{isEn ? 'Exclusive accommodation and vehicle choices favored by customers.' : 'Pilihan akomodasi dan kendaraan eksklusif favorit pelanggan.'}</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-black font-bold hover:text-brand-red transition-colors">
            {isEn ? 'See All' : 'Lihat Semua'} <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-soft-hover hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-brand-red uppercase tracking-widest shadow-sm">
                  {item.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                   <h3 className="font-bold text-xl text-white truncate drop-shadow-md">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-sm text-brand-black">{item.rating}</span>
                  <span className="text-gray-400 text-xs ml-1">({item.reviews} {isEn ? 'reviews' : 'ulasan'})</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5 font-medium">
                  <MapPin size={16} className="text-brand-red" /> {item.location}
                </div>
                <div className="border-t border-gray-100 pt-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 block mb-0.5 uppercase tracking-wider">{isEn ? 'Starts from' : 'Mulai dari'}</span>
                    <span className="font-black text-brand-red text-xl tracking-tight">{item.price}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
