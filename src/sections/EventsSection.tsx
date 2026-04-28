import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { BOLD_HEADING, FADE_IN } from '../core/animations/variants';
import { staggerDelay, LUXURY_EASE, MOTION_TIMING } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';
import { Zap, Globe, Star, Camera } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const events = [
    { 
      title: 'Shopping Festival', 
      venue: 'City-Wide Activation', 
      tag: 'GLOBAL_REACH',
      icon: <Globe size={20} />, 
      image: (SECTION_MEDIA.events as any).images[0],
      span: 'lg:col-span-8 lg:row-span-2' // The dominant card
    },
    { 
      title: 'Fashion Week', 
      venue: 'Fashion Avenue', 
      tag: 'VIP_ACTIVATION',
      icon: <Star size={20} />, 
      image: (SECTION_MEDIA.events as any).images[1],
      span: 'lg:col-span-4' 
    },
    { 
      title: 'Brand Takeovers', 
      venue: 'Waterfront', 
      tag: 'MASSIVE_IMPACT',
      icon: <Zap size={20} />, 
      image: (SECTION_MEDIA.events as any).images[2],
      span: 'lg:col-span-4'
    },
    { 
      title: 'New Year Gala', 
      venue: 'Burj Khalifa Stage', 
      tag: 'ICON_MOMENT',
      icon: <Camera size={20} />, 
      image: (SECTION_MEDIA.events as any).images[3],
      span: 'lg:col-span-12' // Full width bottom accent
    }
  ];

  return (
    <SectionLayout 
      backgroundImage={SECTION_MEDIA.events.background} 
      backgroundVideo="https://cdn.coverr.co/videos/coverr-dubai-marina-skyscrapers-at-night-5437/1080p.mp4"
      variant="dark"
    >
      {/* Cinematic Environmental Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_40%)]" />
        
        {/* Ghost Typography Background */}
        <div className="absolute -left-20 -bottom-20 rotate-90 select-none opacity-[0.02] pointer-events-none transform-gpu">
          <span className="text-[20rem] font-black uppercase tracking-tighter text-white">PLATFORM</span>
        </div>
      </div>

      <div className="flex flex-col relative z-10 h-full transform-gpu">
        {/* Monumental Hero Header */}
        <div className="mb-12 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end transform-gpu">
          <div className="lg:col-span-8">
            <motion.div
              variants={BOLD_HEADING}
              initial="hidden"
              whileInView="visible"
              className="relative transform-gpu"
            >
              <div className="absolute -top-12 left-0 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-6">
                <div className="w-12 h-px bg-white/20" />
                <span>ASSET_STRATEGY // MEDIA_PLATFORM</span>
              </div>
              <h2 className="text-7xl md:text-[clamp(5rem,14vw,14rem)] font-black uppercase leading-[0.75] tracking-[-0.05em] text-white flex flex-col transform-gpu">
                <span className="relative z-10">Global</span>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>Platform</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-4 pb-4">
            <motion.div
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="border-l border-white/10 pl-8 transform-gpu"
            >
              <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1]">
                The world's most <br />
                <span className="text-white/40">iconic stage</span> for <br />
                luxury activation.
              </p>
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 leading-relaxed max-w-xs">
                Leveraging the scale of 100M+ annual visitors to create global cultural moments that define brand legacy.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[repeat(2,minmax(250px,1fr))] gap-4 md:gap-6 flex-grow pb-12 transform-gpu">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: staggerDelay(idx, 0.4, 0.1), duration: 0.6, ease: LUXURY_EASE }}
              className={`group relative ${event.span} transform-gpu`}
            >
              <DeckCard className="bg-black/40 border-white/5 backdrop-blur-xl h-full p-8 md:p-10 flex flex-col justify-end overflow-hidden shadow-2xl transition-all duration-700 hover:border-white/20 transform-gpu">
                {/* Image Media with Parallax/Zoom Effect */}
                <div className="absolute inset-0 z-0 transition-transform duration-[4000ms] ease-out group-hover:scale-105 transform-gpu">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.4] group-hover:brightness-[0.7] group-hover:grayscale-0 transition-all duration-1000 transform-gpu" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* HUD Metadata */}
                <div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-start opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">{event.tag}</span>
                    <div className="flex items-center gap-2">
                       <div className="h-1 w-4 bg-white/20" />
                       <span className="text-[8px] font-bold text-white/30">ACT_CODE_{String(idx + 1).padStart(3, '0')}</span>
                    </div>
                  </div>
                  <div className="text-white">
                    {event.icon}
                  </div>
                </div>

                {/* Typography Reveal */}
                <div className="relative z-10 transform transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                      {event.venue} // DOWNTOWN_DXB
                    </span>
                    <div className="h-px flex-grow bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                </div>

                {/* Active Underline */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/0 group-hover:bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-1000 origin-left" />
              </DeckCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

