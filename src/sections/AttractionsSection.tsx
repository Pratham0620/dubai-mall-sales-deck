import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Play, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { BOLD_HEADING, FADE_IN } from '../core/animations/variants';
import { staggerDelay, LUXURY_EASE, MOTION_TIMING } from '../core/animations/presets';
import { SECTION_MEDIA } from '../content/section-media';
import { DeckCard } from '../core/ui/DeckCard';

export const AttractionsSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const images = (SECTION_MEDIA.attractions as any).gallery || [SECTION_MEDIA.attractions.showcase];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const attractions = [
    { 
      title: 'Dubai Aquarium', 
      description: 'The world\'s most sophisticated aquatic ecosystem.', 
      meta: 'LEVEL_02 // AQUA_CORE',
      icon: <Globe size={18} />,
      image: images[0]
    },
    { 
      title: 'Dubai Ice Rink', 
      description: 'Olympic precision in a desert environment.', 
      meta: 'LEVEL_01 // THERMAL_BASE',
      icon: <ShieldCheck size={18} />,
      image: images[1]
    },
    { 
      title: 'Play DXB', 
      description: 'Next-generation immersive reality architecture.', 
      meta: 'LEVEL_03 // NEURAL_GRID',
      icon: <Zap size={18} />,
      image: images[2]
    }
  ];

  return (
    <SectionLayout 
      backgroundImage={SECTION_MEDIA.attractions.background} 
      variant="dark"
    >
      {/* Cinematic Depth Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transform-gpu">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px] animate-pulse transform-gpu" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-white/3 rounded-full blur-[80px] transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] transform-gpu" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-center transform-gpu">
        {/* Editorial Heading Block */}
        <div className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end transform-gpu">
          <div className="md:col-span-8 transform-gpu">
            <motion.div
              variants={BOLD_HEADING}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col transform-gpu"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/30 mb-6 block">
                GLOBAL_PRECEDENCE // DESTINATION_STORYTELLING
              </span>
              <h2 className="text-6xl md:text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.8] tracking-tighter text-white transform-gpu">
                Core <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Legends</span>
              </h2>
            </motion.div>
          </div>
          <div className="md:col-span-4 hidden md:block transform-gpu">
            <div className="h-px w-full bg-white/10 mb-6 transform-gpu" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 leading-relaxed max-w-xs">
              Strategic entertainment assets designed for high-density impact and global retention across the asset portfolio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: Cinematic Briefing Media */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              className="relative aspect-[16/9] bg-black/40 backdrop-blur-xl border border-white/5 overflow-hidden group shadow-2xl transform-gpu"
            >
              {/* Media Container */}
              <div className="absolute inset-2 border border-white/10 overflow-hidden transform-gpu">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.2, ease: LUXURY_EASE }}
                    className="absolute inset-0 transform-gpu"
                  >
                    <img 
                      src={images[currentImageIndex]}
                      alt="Briefing Visual"
                      className="w-full h-full object-cover filter brightness-[0.85] contrast-110 saturate-125 transform-gpu"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>
                
                {/* HUD Elements */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">LIVE_SATELLITE_FEED</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/40">ASSET_MAPPING // UAE.DUBAI.MALL</span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Visual_Briefing_026</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer"
                  >
                    <Play fill="currentColor" size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/5 z-30">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
            
            {/* Visual Metadata Footer */}
            <div className="mt-8 flex flex-wrap gap-8 items-center text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
              <div className="flex items-center gap-2">
                <span className="text-white/40">LAT:</span> 25.1972° N
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">LONG:</span> 55.2744° E
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">TEMP:</span> 24°C / STABLE
              </div>
              <div className="ml-auto flex gap-1">
                {images.slice(0, 4).map((_: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`h-1 transition-all duration-700 ${idx === currentImageIndex % 4 ? 'w-4 bg-white/40' : 'w-1 bg-white/5'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Attraction Cards */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 transform-gpu">
            {attractions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: staggerDelay(idx, 0.4, 0.1), duration: 0.6, ease: LUXURY_EASE }}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
                className="group transform-gpu"
              >
                <DeckCard className={`p-6 md:p-8 flex flex-col justify-between transition-all duration-700 h-44 md:h-48 overflow-hidden bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/20 cursor-pointer transform-gpu ${isHovered === idx ? 'bg-white text-black' : ''}`}>
                  {/* Background Image Ghost Reveal */}
                  <div className={`absolute inset-0 z-0 opacity-0 transition-all duration-1000 scale-105 transform-gpu ${isHovered === idx ? 'opacity-30 scale-100' : ''}`}>
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-full h-full object-cover filter grayscale contrast-125 transform-gpu"
                    />
                  </div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className={`text-[8px] font-black uppercase tracking-[0.5em] transition-colors duration-500 ${isHovered === idx ? 'text-black/40' : 'text-white/20'}`}>
                        {item.meta}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-500 ${isHovered === idx ? '-translate-y-1' : ''}`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={`transition-all duration-500 ${isHovered === idx ? 'text-black scale-110' : 'text-white/20'}`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-end justify-between">
                    <p className={`text-[10px] font-bold uppercase tracking-tight leading-relaxed max-w-[180px] transition-colors duration-500 ${isHovered === idx ? 'text-black/70' : 'text-white/40'}`}>
                      {item.description}
                    </p>
                    <div className={`transition-all duration-700 translate-x-4 opacity-0 ${isHovered === idx ? 'translate-x-0 opacity-100' : ''}`}>
                      <ArrowRight size={20} />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-12 h-12 transition-all duration-700 ${isHovered === idx ? 'opacity-10' : 'opacity-0'}`}>
                    <div className="absolute top-4 right-4 text-4xl font-black italic select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                </DeckCard>
              </motion.div>
            ))}
            
            {/* View All Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 flex items-center justify-between group cursor-pointer"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white/60 transition-colors">
                DOWNLOAD_PORTFOLIO_PDF
              </span>
              <div className="h-px bg-white/5 flex-grow mx-6 translate-y-px" />
              <div className="p-2 border border-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={14} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

