import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-red font-black uppercase tracking-[0.2em] mb-4 text-xs">Testimoni</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black mb-6 tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ribuan pelanggan telah mempercayakan perjalanan mereka kepada NusaGo. Berikut adalah pengalaman tak terlupakan mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-gray-100"
            >
              <Quote size={40} className="absolute top-6 right-6 text-gray-100" />
              
              <div className="flex items-center gap-1 mb-6 text-brand-red">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-red" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-red/20" />
                <div>
                  <h4 className="font-bold text-brand-black">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
