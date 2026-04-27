import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Brand } from '../types';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const LuxurySection: React.FC = () => {
  const brands: Brand[] = [
    { name: 'Hermès', category: 'Haute Couture' },
    { name: 'Louis Vuitton', category: 'Art de Vivre' },
    { name: 'Cartier', category: 'Joaillerie' },
    { name: 'Rolex', category: 'Precision Horology' }
  ];

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.luxury.background} variant="dark">
      <div className="flex flex-col justify-center relative font-sans">
        {/* Editorial Heading */}
        <div className="mb-8 md:mb-10 border-b-8 border-white pb-6 relative z-10">
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.45em] md:tracking-[0.6em] mb-4 block opacity-70">
              FASHION_AVENUE // CURATED_DOMINANCE
            </span>
          </motion.div>
          
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6.5rem)] font-black text-white leading-[0.82] uppercase tracking-tighter">
              Fashion<br />
              <span className="text-white/40">Avenue</span>
            </h2>
          </motion.div>
        </div>

        {/* Global Brand Grid */}
        <div className="grid md:grid-cols-4 gap-4 relative z-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: staggerDelay(idx, 0.4, 0.15) }}
              className="group cursor-none"
            >
              <DeckCard className="p-5 md:p-6 min-h-64 md:min-h-72 border-white/30 flex flex-col justify-between hover:bg-white hover:text-black duration-700 ease-out bg-black/40 backdrop-blur-sm">
              {/* Dynamic Number Gradient */}
              <div className="absolute top-0 right-0 p-8 text-6xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity italic">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="z-10 mt-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 opacity-40 group-hover:opacity-100 group-hover:text-gray-400 transition-all duration-500">
                  {brand.category}
                </div>
                <div className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] uppercase group-hover:translate-x-4 transition-transform duration-500">
                  {brand.name}
                </div>
              </div>
              
              {/* Luxury Detail */}
              <div className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mt-4 h-0 group-hover:h-auto overflow-hidden">
                The Avenue Flagship // Core_Asset
              </div>
              </DeckCard>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Quote Overlay */}
        <motion.div 
          variants={FADE_IN}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.8 }}
          className="mt-8 md:mt-10 flex items-center gap-6 md:gap-8"
        >
          <div className="h-4 w-4 bg-white animate-pulse" />
          <p className="max-w-2xl text-white font-black text-base md:text-lg uppercase tracking-tight italic border-l-4 border-white pl-5 md:pl-6 leading-tight">
            "A curated masterpiece of global luxury, designed for the most discerning international clientele."
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
