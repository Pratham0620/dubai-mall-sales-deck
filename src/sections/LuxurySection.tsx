import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Brand } from '../types';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const LuxurySection: React.FC = () => {
  const brands = [
    { name: 'Hermès', category: 'Haute Couture', image: (SECTION_MEDIA.luxury as any).brands[0] },
    { name: 'Louis Vuitton', category: 'Art de Vivre', image: (SECTION_MEDIA.luxury as any).brands[1] },
    { name: 'Cartier', category: 'Joaillerie', image: (SECTION_MEDIA.luxury as any).brands[2] },
    { name: 'Rolex', category: 'Precision Horology', image: (SECTION_MEDIA.luxury as any).brands[3] }
  ];

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.luxury.background} variant="dark">
      <div className="flex flex-col justify-center relative font-sans transform-gpu">
        {/* Editorial Heading */}
        <div className="mb-8 md:mb-10 border-b border-white/20 pb-6 relative z-10 transform-gpu">
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            className="transform-gpu"
          >
            <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.45em] md:tracking-[0.6em] mb-4 block opacity-70">
              FASHION_AVENUE // CURATED_DOMINANCE
            </span>
          </motion.div>
          
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
            className="transform-gpu"
          >
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6.5rem)] font-black text-white leading-[0.82] uppercase tracking-tighter drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Fashion<br />
              <span className="text-white/60">Avenue</span>
            </h2>
          </motion.div>
        </div>

        {/* Global Brand Grid */}
        <div className="grid md:grid-cols-4 gap-4 relative z-10 transform-gpu">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: staggerDelay(idx, 0.4, 0.15) }}
              className="group cursor-none transform-gpu"
            >
              <DeckCard className="p-5 md:p-6 min-h-64 md:min-h-72 border-white/10 flex flex-col justify-between hover:bg-white hover:text-black duration-700 ease-out bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl transform-gpu">
              {/* Brand Image Background */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 transform-gpu">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover filter grayscale-[0.85] contrast-125 group-hover:grayscale-0 transition-all duration-1000 transform-gpu" 
                />
              </div>

              {/* Atmospheric Glow */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-white/80 group-hover:via-white/40 transition-all duration-700" />
              
              {/* Scanline Detail */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20 group-hover:bg-black/20 -translate-y-full group-hover:translate-y-[200px] transition-all duration-[2000ms] ease-in-out opacity-0 group-hover:opacity-100" />

              {/* Dynamic Number Gradient */}
              <div className="absolute top-0 right-0 p-8 text-7xl font-black opacity-[0.05] group-hover:opacity-10 transition-opacity italic z-10 select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="z-10 mt-auto relative">
                <div className="text-[9px] font-black uppercase tracking-[0.5em] mb-4 opacity-50 group-hover:opacity-100 group-hover:text-black/50 transition-all duration-500">
                  {brand.category} // LVL_26
                </div>
                <div className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.85] uppercase transition-all duration-700 group-hover:-translate-y-1">
                  {brand.name}
                </div>
              </div>
              
              {/* Luxury Detail Crosshair */}
              <div className="z-10 relative flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 translate-y-4 group-hover:translate-y-0">
                <div className="h-px w-8 bg-black/20" />
                <div className="text-[10px] font-black uppercase tracking-[0.2em]">
                  The Avenue Flagship
                </div>
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
