import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';

export const DiningSection: React.FC = () => {
  const highlights = [
    { title: 'Michelin Star', venue: 'Fashion Avenue Elite' },
    { title: 'Fountain Views', venue: 'Waterfront Promenade' },
    { title: 'Global Concepts', venue: 'World Culinary Hall' }
  ];

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.dining.background} variant="dark">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center font-sans h-full">
        <div className="space-y-8 md:space-y-10 border-l-[10px] border-white pl-8 md:pl-12 relative">
          {/* Vertical Label */}
          <div className="absolute -left-16 top-0 origin-bottom-left -rotate-90 text-[10px] font-black uppercase tracking-[0.8em] text-white/20 hidden xl:block">
            LIFESTYLE_MOMENTS // 004
          </div>

          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-white/40 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
              PHASE_04 // CULINARY_EXCELLENCE
            </span>
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.82] tracking-tighter text-white">
              Global <br />
              <span className="text-white/40">Palate</span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
            className="text-white font-black uppercase text-xl md:text-2xl leading-tight max-w-md tracking-tight"
          >
            Food is a primary lifestyle draw. A frictionless journey from street food to Michelin-star prestige.
          </motion.p>

          <div className="flex flex-col space-y-5 md:space-y-6">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: staggerDelay(idx, 0.6, 0.15) }}
                className="flex items-center space-x-5 md:space-x-6 group cursor-none"
              >
                <div className="h-4 w-4 bg-white group-hover:scale-150 transition-transform duration-500" />
                <div>
                  <span className="text-base md:text-lg font-black uppercase tracking-tight block group-hover:translate-x-2 transition-transform duration-500 text-white">{item.title}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">/ {item.venue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] max-h-[46vh] lg:max-h-[58vh] bg-black border-[8px] border-white overflow-hidden group shadow-2xl"
        >
          <motion.img 
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={SECTION_MEDIA.dining.showcase}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt="Dining Experience"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-2">Premium Experience</div>
            <div className="text-2xl md:text-3xl font-black uppercase text-black tracking-tighter italic">Fashion Avenue Dining</div>
            <div className="mt-4 h-1 w-24 bg-black/10" />
          </div>
          
          {/* Corner Decal */}
          <div className="absolute top-8 right-8 bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest pointer-events-none">
            Asset_Ref // 4022
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
