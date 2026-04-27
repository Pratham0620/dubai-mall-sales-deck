import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { PlatformEvent } from '../types';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const EventsSection: React.FC = () => {
  const events: PlatformEvent[] = [
    { title: 'Shopping Festival', venue: 'City-Wide Activation', icon: '🛍️' },
    { title: 'Global Fashion Week', venue: 'Fashion Avenue Gantry', icon: '✨' },
    { title: 'Brand Takeovers', venue: 'Waterfront Platform', icon: '🏙️' },
    { title: 'New Year Gala', venue: 'Burj Khalifa Stage', icon: '🎆' }
  ];

  return (
    <SectionLayout 
      backgroundImage={SECTION_MEDIA.events.background} 
      backgroundVideo="https://cdn.coverr.co/videos/coverr-dubai-marina-skyscrapers-at-night-5437/1080p.mp4"
      variant="dark"
    >
      <div className="flex flex-col justify-center relative font-sans">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6 border-b-[10px] border-white pb-8 relative z-10">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-5xl md:text-[clamp(3.25rem,7.5vw,7rem)] font-black uppercase text-white leading-[0.8] tracking-tighter">
              Global<br />
              <span className="text-white/40">Platform</span>
            </h2>
          </motion.div>
          <motion.div 
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
            className="max-w-sm md:mb-2"
          >
            <p className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-3 leading-tight">
              Position your brand on the world's most active stage.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 bg-white animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                MASSIVE_CULTURAL_MOMENTS
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
              INFRASTRUCTURE_READY // BCAST_ENABLED
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: staggerDelay(idx, 0.6, 0.15) }}
              className="group cursor-none"
            >
              <DeckCard className="bg-black/40 border-white/30 backdrop-blur-sm p-5 md:p-6 min-h-56 md:min-h-60 flex flex-col justify-between hover:bg-white hover:text-black ease-out duration-500">
              <div className="absolute top-0 right-0 p-8 text-5xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity italic text-white group-hover:text-black">
                EVT_{String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-500 origin-left">
                {event.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 leading-none group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-black/60 transition-colors">
                  {event.venue}
                </div>
              </div>
              </DeckCard>
            </motion.div>
          ))}
        </div>
        
        {/* Cinematic Sweep Accent */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-0 bottom-0 right-0 h-1 bg-white/10 origin-left"
        />
      </div>
    </SectionLayout>
  );
};
