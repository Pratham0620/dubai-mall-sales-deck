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
      <div className="flex flex-col justify-center relative">
        <div className="mb-8 md:mb-10 border-b-8 border-white pb-6 relative z-10">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6.25rem)] font-black uppercase leading-[0.82] mb-4 tracking-tighter text-white">
              Synergistic<br />
              <span className="text-white/40">Retail Power</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
          >
            <p className="text-white font-black uppercase text-lg md:text-xl max-w-xl tracking-tight">
              A high-velocity platform where commerce is the ultimate lifestyle activation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative z-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: staggerDelay(idx, 0.3, 0.15) }}
              className="group cursor-none"
            >
              <DeckCard className="p-6 md:p-7 border-white hover:bg-white hover:text-black flex flex-col justify-between min-h-56 md:min-h-60 bg-black/40 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                {cat.count}
              </div>
              <div>
                <div className="text-sm font-black uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100">
                  {cat.title}
                </div>
                <p className="text-xs font-bold uppercase tracking-tight leading-tight opacity-40 group-hover:opacity-70">
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
