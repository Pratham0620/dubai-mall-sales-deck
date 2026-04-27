import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Attraction } from '../types';
import { Play } from 'lucide-react';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';

export const AttractionsSection: React.FC = () => {
  const attractions: Attraction[] = [
    { title: 'DreamWorks Water Park', description: 'Largest indoor water park in North America // Record_Breaking' },
    { title: 'Big SNOW', description: 'Real-snow indoor ski & snowboard park // Year-Round' },
    { title: 'Nickelodeon Universe', description: 'Western Hemisphere’s largest indoor theme park // Global_Dest' }
  ];

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.attractions.background}>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center font-sans">
        {/* Kinetic Video Player */}
        <div className="lg:w-1/2 relative group">
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            className="relative aspect-video bg-white border-[10px] border-black overflow-hidden flex items-center justify-center cursor-none transition-transform duration-700 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-1000" />
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 90 }}
              className="z-20 p-5 md:p-6 bg-black text-white border-4 border-white transition-all duration-500"
            >
              <Play fill="currentColor" size={40} />
            </motion.div>
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2 }}
              src={SECTION_MEDIA.attractions.showcase}
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay filter grayscale"
              alt="Attractions"
            />
            {/* Decal */}
            <div className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-[0.4em] bg-black text-white px-3 py-1">
              PLAY_REEL // 01
            </div>
          </motion.div>
          <div className="mt-5 md:mt-6 flex items-center justify-between">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
              WATCH_EXPERIENCE_FILM // 01:24
            </div>
            <div className="h-px w-32 bg-black opacity-10" />
          </div>
        </div>

        {/* Scalable Content */}
        <div className="lg:w-1/2 flex flex-col space-y-8 md:space-y-10">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
            className="border-b-[10px] border-black pb-8"
          >
            <h2 className="text-5xl md:text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.82] tracking-tighter">
              Global <br />
              <span className="text-gray-100/50">Drift</span>
            </h2>
          </motion.div>

          <div className="space-y-4 md:space-y-5">
            {attractions.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: staggerDelay(idx, 0.5, 0.15) }}
                className="group border-l-[8px] border-black pl-6 md:pl-8 transition-all hover:bg-black hover:text-white p-4 md:p-5 relative overflow-hidden"
              >
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-6xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity italic">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-[11px] font-black uppercase text-gray-400 group-hover:text-gray-300 tracking-wide">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
