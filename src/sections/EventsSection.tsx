import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { PlatformEvent } from '../types';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';

export const EventsSection: React.FC = () => {
  const events: PlatformEvent[] = [
    { title: 'Global Concerts', venue: 'Live @ American Dream', icon: '🎤' },
    { title: 'Fashion Week', venue: 'The Avenue Runway', icon: '✨' },
    { title: 'Brand Activations', venue: 'Grand Court Platform', icon: '🚀' },
    { title: 'Esports Arena', venue: 'MetLife Integration', icon: '🎮' }
  ];

  return (
    <SectionLayout backgroundImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80">
      <div className="flex flex-col h-full justify-center relative font-sans">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-[12px] border-black pb-12 relative z-10">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-6xl md:text-[clamp(5.5rem,11vw,11rem)] font-black uppercase text-black leading-[0.75] tracking-tighter">
              Global<br />
              <span className="text-gray-100/50">Platform</span>
            </h2>
          </motion.div>
          <motion.div 
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
            className="max-w-xs md:mb-4"
          >
            <p className="text-lg font-black uppercase tracking-tight text-black mb-4 leading-none">
              Position your brand on the world's most active stage.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 bg-black animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                MASSIVE_CULTURAL_MOMENTS
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">
              INFRASTRUCTURE_READY // BCAST_ENABLED
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 + 0.6 }}
              className="bg-white border-4 border-black p-10 h-80 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-500 ease-out group overflow-hidden relative cursor-none"
            >
              <div className="absolute top-0 right-0 p-8 text-5xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
                EVT_{String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="text-6xl filter grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-500 origin-left">
                {event.icon}
              </div>
              <div>
                <div className="text-3xl font-black uppercase tracking-tighter mb-2 leading-none group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-300 transition-colors">
                  {event.venue}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Cinematic Sweep Accent */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-0 bottom-0 right-0 h-1 bg-black/10 origin-left"
        />
      </div>
    </SectionLayout>
  );
};
