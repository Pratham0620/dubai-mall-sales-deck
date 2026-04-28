import React from 'react';
import { motion } from 'motion/react';
import { LUXURY_EASE, MOTION_TIMING, FILMIC_EASE, staggerDelay } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const OverviewSection: React.FC = () => {
  const scaleMarkers = [
    { value: '12M+', label: 'Square Feet', detail: 'Total Built-up Area' },
    { value: '100M+', label: 'Annual Visitors', detail: 'World\'s Most Visited Site' },
    { value: '1,200+', label: 'Retail Stores', detail: 'Global Flagship Dominance' },
    { value: '200+', label: 'F&B Outlets', detail: 'Culinary Diversity' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: MOTION_TIMING.reveal, ease: FILMIC_EASE }}
      className="relative w-full h-screen h-[100dvh] pl-20 md:pl-64 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${SECTION_MEDIA.overview.background})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-black/34 to-black/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,rgba(255,255,255,0.2),transparent_42%)]" />

      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-[-4%] bg-[radial-gradient(circle_at_24%_74%,rgba(255,255,255,0.12),transparent_48%)]"
      />

      {/* Structural lines for cinematic architectural framing */}
      <div className="absolute left-20 md:left-64 top-0 bottom-0 w-px bg-white/35" />
      <div className="absolute left-20 md:left-64 right-0 top-[26%] h-px bg-white/22" />
      <div className="absolute left-20 md:left-64 right-0 bottom-[20%] h-px bg-white/16" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl min-w-0 flex-col px-6 md:px-10 lg:px-16 py-10 md:py-14 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="my-auto py-8">
          <motion.span
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
            className="mb-6 md:mb-10 block text-[10px] md:text-xs font-black uppercase tracking-[0.45em] text-white/78"
          >
            The Vision // Chapter 02
          </motion.span>

          <motion.h2
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: MOTION_TIMING.slow, ease: FILMIC_EASE }}
            className="max-w-[16ch] font-display text-[clamp(2.4rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            A Global
            <br />
            <span className="text-white">Empire of Experience.</span>
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.56, duration: MOTION_TIMING.slow, ease: LUXURY_EASE }}
            className="mt-8 md:mt-12 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end"
          >
            <div>
              <p className="max-w-[48rem] text-base md:text-xl font-bold uppercase leading-[1.14] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                The Dubai Mall is the ultimate international landmark. Strategically located in Downtown Dubai, 
                it defines the standard for global retail and luxury lifestyle.
              </p>
              <p className="mt-5 max-w-[50rem] text-[11px] md:text-xs font-black uppercase tracking-[0.25em] text-white/90">
                Downtown Dubai // Emaar Group // Global Commercial Standard
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.72, duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
              className="border-l-2 border-white/35 pl-6 md:pl-8 hidden md:block"
            >
              <div className="text-[10px] font-black uppercase tracking-[0.42em] text-white/56">
                Cultural Positioning
              </div>
              <p className="mt-3 text-sm md:text-base font-bold uppercase leading-[1.25] tracking-wide text-white/88">
                Not a mall.
                <br />
                A global stage for commerce, culture, and prestige.
              </p>
            </motion.div>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {scaleMarkers.map((marker, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: staggerDelay(idx, 0.75, 0.09), duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
                className="group relative"
              >
                <DeckCard className="p-4 md:p-6 min-h-40 md:min-h-48 border-white/10 flex flex-col justify-end bg-black/30 backdrop-blur-xl overflow-hidden group-hover:bg-white group-hover:text-black transition-all duration-700">
                  {/* Atmospheric Background */}
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110">
                    <img 
                      src={SECTION_MEDIA.overview.images[idx]} 
                      alt={marker.label}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000" 
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-white/60 group-hover:via-white/20 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="text-2xl md:text-4xl font-black tracking-tighter text-white group-hover:text-black transition-colors">
                      {marker.value}
                    </div>
                    <div className="mt-1 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-black/60 transition-colors">
                      {marker.label}
                    </div>
                  </div>
                </DeckCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-black/62 via-black/24 to-transparent"
      />
    </motion.section>
  );
};
