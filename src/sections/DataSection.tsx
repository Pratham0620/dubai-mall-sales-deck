import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { MagneticButton } from '../core/ui/MagneticButton';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { DeckCard } from '../core/ui/DeckCard';
import { LeasingIntelligence } from '../components/LeasingIntelligence';
import { Globe, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { SECTION_MEDIA } from '../content/section-media';

interface CtaItem {
  label: string;
  action: string;
  id: string;
}

export const DataSection: React.FC = () => {
  const [isLeasingOpen, setIsLeasingOpen] = useState(false);

  const ctaItems: CtaItem[] = [
    { label: 'Retail & Leasing', action: 'INQUIRY_HUB', id: 'leasing' },
    { label: 'Global Partnerships', action: 'PARTNER_TIER', id: 'partner' },
  ];

  const handleAction = (id: string) => {
    if (id === 'leasing') setIsLeasingOpen(true);
  };

  return (
    <SectionLayout backgroundImage={SECTION_MEDIA.data.background} variant="dark">
      {/* Cinematic Ambient Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transform-gpu">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60" />
      </div>

      <div className="flex flex-col justify-center relative font-sans h-full z-10 transform-gpu">
        {/* Monolithic Heading Composition */}
        <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start transform-gpu">
          <div className="md:col-span-9 border-l border-white/10 pl-6 md:pl-10 transform-gpu">
            <motion.div
              variants={BOLD_HEADING}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col transform-gpu"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">
                  INSTITUTIONAL_CORE // ASSET_STORY
                </span>
              </div>
              <h2 className="text-7xl md:text-[clamp(5rem,12vw,11rem)] font-black uppercase leading-[0.75] tracking-[-0.05em] text-white transform-gpu">
                Capital <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>Intelligence</span>
              </h2>
            </motion.div>
          </div>
          <div className="md:col-span-3 pt-6 transform-gpu">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-4 block">REFERENCE: ASSET_26</div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Portfolio Integrity</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 truncate">Downtown Dubai // UAE</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start transform-gpu">
          {/* Left Side: Strategic Metrics */}
          <div className="lg:col-span-7 flex flex-col pt-4 transform-gpu">
            <motion.section 
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="mb-12 border-l border-white/10 pl-6 md:pl-10 transform-gpu"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 text-white/30">EXECUTIVE_SYNOPSIS</h4>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-[1.05] max-w-xl">
                Securing the most dominant retail ecosystem on Earth. A multi-billion dollar confluence of luxury, culture, and scale.
              </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 transform-gpu">
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4 }}
                className="group transform-gpu"
              >
                <DeckCard className="p-8 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/20 transition-all duration-700 min-h-[220px] flex flex-col justify-between overflow-hidden shadow-2xl transform-gpu">
                  {/* Metric Detail Overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/10 -translate-y-full group-hover:translate-y-[210px] transition-all duration-[3000ms] ease-in-out opacity-0 group-hover:opacity-40" />
                  
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/20">KPI_STREAM_01</span>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">ANNUAL_REACH</h4>
                  </div>
                  
                  <div className="relative z-10 transform-gpu">
                    <div className="text-6xl md:text-7xl font-black leading-none tracking-tighter text-white">100M+</div>
                    <p className="text-[10px] font-bold uppercase mt-4 tracking-[0.2em] text-white/30">Verified Global Footfall</p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Globe size={16} />
                  </div>
                </DeckCard>
              </motion.div>
              
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.75 }}
                className="group"
              >
                <DeckCard className="p-8 bg-black/40 backdrop-blur-3xl border-white/5 hover:border-white/20 transition-all duration-700 min-h-[220px] flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/10 -translate-y-full group-hover:translate-y-[210px] transition-all duration-[3000ms] ease-in-out opacity-0 group-hover:opacity-40" />

                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/20">KPI_STREAM_02</span>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">RETENTION_RATE</h4>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl md:text-7xl font-black leading-none tracking-tighter text-white">94%</div>
                    <p className="text-[10px] font-bold uppercase mt-4 tracking-[0.2em] text-white/30">Strategic Market Stability</p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <ShieldCheck size={16} />
                  </div>
                </DeckCard>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Action Console */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="mb-12">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-white/20">RESPONSE_PROTOCOLS</h4>
              <div className="flex flex-col">
                {ctaItems.map((item, idx) => (
                  <MagneticButton key={item.id} className="w-full text-left" onClick={() => handleAction(item.id)}>
                    <div className="border-b border-white/10 py-8 group cursor-none w-full relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700" />
                      <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3 group-hover:text-white/60 transition-colors">
                        {item.label} // 0{idx + 1}
                      </span>
                      <div className="flex justify-between items-center text-3xl md:text-4xl font-black transition-all group-hover:translate-x-6 text-white leading-none tracking-tighter">
                        <span>{item.action}</span>
                        <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                      </div>
                    </div>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <motion.div 
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.9 }}
              className="mt-auto group"
            >
              <DeckCard className="bg-black/60 backdrop-blur-3xl text-white p-8 md:p-10 border border-white/10 group-hover:border-white/30 transition-all duration-700 shadow-3xl">
                <div className="absolute top-6 right-6 text-[9px] font-black tracking-[0.3em] opacity-20 select-none">CODE: PORTAL_99</div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] mb-10 text-white/40 pb-4 border-b border-white/5">PRIVATE_TERMINAL</h4>
                
                <div className="space-y-8">
                  {[
                    'Download Infrastructure Specs',
                    'View Traffic Heatmaps',
                    'Schedule Site Protocol'
                  ].map((text, i) => (
                    <motion.div 
                      key={text}
                      whileHover={{ x: 12 }}
                      className="flex items-center gap-6 cursor-pointer group/item"
                    >
                      <div className="flex flex-col items-center gap-1 group-hover/item:text-white text-white/10 transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        <div className="h-6 w-px bg-current opacity-50" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black tracking-[0.5em] text-white/20 mb-1">0{i + 1}_EXEC</span>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60 group-hover/item:text-white transition-colors">{text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[8px] font-black uppercase tracking-widest text-white/20">
                    Status: Encrypted_Session
                  </div>
                  <Zap size={12} className="text-white/10 animate-pulse" />
                </div>
              </DeckCard>
            </motion.div>
          </div>
        </div>
      </div>

      <LeasingIntelligence isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
    </SectionLayout>
  );
};
