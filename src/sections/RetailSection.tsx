import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const RetailSection: React.FC = () => {
  const categories = [
    { title: 'Global Dominance', count: '1,200+', desc: 'Unparalleled international brand concentration in one destination.' },
    { title: 'Market Velocity', count: '100M+', desc: 'Highest annual footfall for any retail asset on the planet.' },
    { title: 'Economic Core', count: 'Downtown', desc: 'Centralized in the world\'s most affluent developmental hub.' }
  ];

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.retail.background} variant="dark">
      <div className="flex flex-col justify-center relative transform-gpu">
        <div className="mb-8 md:mb-10 border-b-8 border-white pb-6 relative z-10 transform-gpu">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
            className="transform-gpu"
          >
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6.25rem)] font-black uppercase leading-[0.82] mb-4 tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Synergistic<br />
              <span className="text-white/60">Retail Power</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="transform-gpu"
          >
            <p className="text-white font-black uppercase text-lg md:text-xl max-w-xl tracking-tight drop-shadow-md">
              A high-velocity platform where commerce is the ultimate lifestyle activation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 relative z-10 transform-gpu">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: staggerDelay(idx, 0.2, 0.1) }}
              className="group cursor-none transform-gpu"
            >
              <DeckCard className="p-6 md:p-8 border-white/10 hover:bg-white hover:text-black flex flex-col justify-between min-h-64 md:min-h-72 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-700 transform-gpu">
                {/* Atmospheric Background */}
                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 transform-gpu">
                  <img 
                    src={SECTION_MEDIA.retail.images[idx]} 
                    alt={cat.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 transform-gpu" 
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-white/80 group-hover:via-white/40 transition-all duration-700" />
                
                <div className="relative z-10 text-5xl md:text-6xl font-black mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left text-white group-hover:text-black">
                  {cat.count}
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 opacity-50 group-hover:opacity-100 group-hover:text-black/50 transition-all duration-500">
                    {cat.title} // MKT_CORE
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-tight leading-relaxed opacity-40 group-hover:opacity-80 transition-opacity">
                    {cat.desc}
                  </p>
                </div>
              </DeckCard>
            </motion.div>
          ))}
        </div>
        
        {/* Kinetic Accent */}
        <motion.div 
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 top-0 bottom-0 w-1 bg-white origin-top hidden md:block opacity-20"
        />
      </div>
    </SectionLayout>
  );
};
