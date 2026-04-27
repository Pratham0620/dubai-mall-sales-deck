import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Brand } from '../types';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';

export const LuxurySection: React.FC = () => {
  const brands: Brand[] = [
    { name: 'Hermès', category: 'Haute Couture' },
    { name: 'Ferrari', category: 'Precision' },
    { name: 'Saint Laurent', category: 'Ready-to-wear' },
    { name: 'Tiffany & Co.', category: 'Jewelry' }
  ];

  return (
    <SectionLayout backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80">
      <div className="flex flex-col h-full justify-center relative font-sans">
        {/* Editorial Heading */}
        <div className="mb-16 border-b-8 border-black pb-8 relative z-10">
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-black font-black text-xs uppercase tracking-[0.6em] mb-6 block">
              COLLECTION_AVENUE // CURATED_003
            </span>
          </motion.div>
          
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-6xl md:text-[clamp(5rem,10vw,10rem)] font-black text-black leading-[0.8] uppercase tracking-tighter">
              Absolute<br />
              <span className="text-gray-100/50">Excellence</span>
            </h2>
          </motion.div>
        </div>

        {/* Global Brand Grid */}
        <div className="grid md:grid-cols-4 gap-6 relative z-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 + 0.4 }}
              className="group relative border-4 border-black p-10 h-96 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700 ease-out cursor-none overflow-hidden"
            >
              {/* Dynamic Number Gradient */}
              <div className="absolute top-0 right-0 p-8 text-6xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity italic">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="z-10 mt-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 opacity-40 group-hover:opacity-100 group-hover:text-gray-400 transition-all duration-500">
                  {brand.category}
                </div>
                <div className="text-4xl font-black tracking-tighter leading-[0.9] uppercase group-hover:translate-x-4 transition-transform duration-500">
                  {brand.name}
                </div>
              </div>
              
              {/* Luxury Detail */}
              <div className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mt-4 h-0 group-hover:h-auto overflow-hidden">
                The Avenue Flagship // Core_Asset
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Quote Overlay */}
        <motion.div 
          variants={FADE_IN}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center gap-12"
        >
          <div className="h-4 w-4 bg-black animate-pulse" />
          <p className="max-w-2xl text-black font-black text-lg uppercase tracking-tight italic border-l-4 border-black pl-8 leading-tight">
            "A curated masterpiece of global luxury, designed for the most discerning international clientele."
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
