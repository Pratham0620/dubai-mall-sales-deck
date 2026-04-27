import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { MagneticButton } from '../core/ui/MagneticButton';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';
import { DeckCard } from '../core/ui/DeckCard';
import { LeasingIntelligence } from '../components/LeasingIntelligence';
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
      <div className="flex flex-col justify-center relative font-sans">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* ... (rest of the branding) ... */}
          <div className="lg:col-span-12 border-b-[10px] border-white pb-6 mb-8 md:mb-10 relative">
            <motion.div
              variants={BOLD_HEADING}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-5xl md:text-[clamp(4rem,9vw,8.5rem)] font-black uppercase text-white leading-[0.8] tracking-tighter">
                INVEST<span className="text-white/20">_DM26</span>
              </h2>
            </motion.div>
            <div className="absolute top-0 right-0 text-[8px] md:text-[10px] font-black uppercase tracking-[0.35em] md:tracking-[0.5em] text-white/40">
              STRATEGIC_OPPORTUNITY // CORE_PORTFOLIO
            </div>
          </div>

          {/* Left: Intelligence */}
          <div className="lg:col-span-7 flex flex-col lg:pr-8">
            <motion.section 
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="mb-8 md:mb-10"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-white/40">EXECUTIVE_BRIEFING</h4>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[1.1] max-w-2xl border-l-[10px] border-white pl-6 md:pl-8">
                Securing 12M+ square feet of the world's most premium retail real estate in Downtown Dubai.
              </p>
            </motion.section>

            <div className="grid grid-cols-2 gap-6 md:gap-8 border-t-8 border-white pt-8 relative">
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-white/40">ANNUAL_REACH</h4>
                <p className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-white">100M+</p>
                <p className="text-[10px] font-black uppercase mt-4 tracking-widest text-white/30">Verified Footfall // Global Audience</p>
              </motion.div>
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.75 }}
              >
                <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-white/40">MARKET_RETENTION</h4>
                <p className="text-5xl md:text-6xl font-black leading-none tracking-tighter text-white">94%</p>
                <p className="text-[10px] font-black uppercase mt-4 tracking-widest text-white/30">Historical Tenant Excellence</p>
              </motion.div>
            </div>
          </div>

          {/* Right: Response Protocol */}
          <div className="lg:col-span-5 border-l-[6px] border-white pl-6 lg:pl-10 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">RESPONSE_PROTOCOL</h4>
              <div className="space-y-6">
                {ctaItems.map((item) => (
                  <MagneticButton key={item.action} className="w-full text-left" onClick={() => handleAction(item.id)}>
                    <div className="border-b-2 border-white/60 pb-6 group cursor-none w-full">
                      <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.label}
                      </span>
                      <div className="flex justify-between items-center text-2xl md:text-3xl font-black transition-all group-hover:translate-x-4 text-white">
                        <span>{item.action}</span>
                        <span className="text-white/20 group-hover:text-white group-hover:translate-x-4 transition-all">→</span>
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
              className="mt-8 md:mt-10"
            >
              <DeckCard className="bg-white text-black p-6 md:p-8 border-none">
              <div className="absolute top-0 right-0 text-[10px] font-black p-4 opacity-20">REF: CTA_99</div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-6 border-b border-black/20 pb-3">IMMEDIATE_ACTIONS</h4>
              <ul className="space-y-4 font-black text-sm uppercase tracking-widest">
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-black group-hover:scale-150 transition-transform" />
                  <span>Download Infrastructure Specs</span>
                </li>
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-black group-hover:scale-150 transition-transform" />
                  <span>View Traffic Heatmaps</span>
                </li>
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-black group-hover:scale-150 transition-transform" />
                  <span>Schedule Site Protocol</span>
                </li>
              </ul>
              </DeckCard>
            </motion.div>
          </div>
        </div>
        
        {/* Footer Meta Accent */}
        <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-4 lg:right-0 text-[8px] font-black uppercase tracking-[0.5em] text-white/30">
          PRODUCED_BY // STRATEGIC_DM_MEDIA_LABS
        </div>
      </div>

      <LeasingIntelligence isOpen={isLeasingOpen} onClose={() => setIsLeasingOpen(false)} />
    </SectionLayout>
  );
};
