import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/mockData';

export default function Stats() {
  return (
    <section className="py-20 bg-brand-black text-white relative overflow-hidden border-y border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-red rounded-[100%] blur-[120px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-4 md:gap-x-8 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <stat.icon size={32} className="mb-4 text-white/80" />
              <h3 className="text-3xl md:text-5xl font-black mb-2">{stat.value}</h3>
              <p className="text-white/80 font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
