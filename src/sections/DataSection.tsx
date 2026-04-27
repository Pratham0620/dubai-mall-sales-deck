import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { MagneticButton } from '../core/ui/MagneticButton';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';

export const DataSection: React.FC = () => {
  return (
    <SectionLayout overlayColor="rgba(255,255,255,0.95)">
      <div className="flex flex-col h-full justify-center relative font-sans">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Massive Branding */}
          <div className="lg:col-span-12 border-b-[12px] border-black pb-8 mb-16 relative">
            <motion.div
              variants={BOLD_HEADING}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-7xl md:text-[clamp(7rem,14vw,14rem)] font-black uppercase text-black leading-[0.75] tracking-tighter">
                INVEST<span className="text-gray-200">_AD26</span>
              </h2>
            </motion.div>
            <div className="absolute top-0 right-0 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
              STRATEGIC_OPPORTUNITY // CORE_PORTFOLIO
            </div>
          </div>

          {/* Left: Intelligence */}
          <div className="lg:col-span-7 flex flex-col pr-12">
            <motion.section 
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-gray-400">EXECUTIVE_BRIEFING</h4>
              <p className="text-3xl font-black uppercase tracking-tight text-black leading-[1.1] max-w-2xl border-l-[12px] border-black pl-12">
                Securing a presence at American Dream signifies alignment with global retail leaders and unprecedented consumer velocity.
              </p>
            </motion.section>

            <div className="grid grid-cols-2 gap-12 border-t-8 border-black pt-12 relative">
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-400">PRIMARY_CATCHMENT</h4>
                <p className="text-7xl font-black leading-none tracking-tighter">20.4M</p>
                <p className="text-[10px] font-black uppercase mt-4 tracking-widest opacity-50">Active Shoppers // Tri-State Area</p>
              </motion.div>
              <motion.div
                variants={SLIDE_UP}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.75 }}
              >
                <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-400">MARKET_RETENTION</h4>
                <p className="text-7xl font-black leading-none tracking-tighter">94%</p>
                <p className="text-[10px] font-black uppercase mt-4 tracking-widest opacity-50">Historical Tenant Excellence</p>
              </motion.div>
            </div>
          </div>

          {/* Right: Response Protocol */}
          <div className="lg:col-span-5 border-l-[6px] border-black pl-16 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-gray-400">RESPONSE_PROTOCOL</h4>
              <div className="space-y-10">
                <MagneticButton className="w-full text-left">
                  <div className="border-b-2 border-black pb-6 group cursor-none w-full">
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Retail & Leasing</span>
                    <div className="flex justify-between items-center text-3xl font-black transition-all group-hover:translate-x-4">
                      <span>INQUIRY_HUB</span>
                      <span className="text-gray-200 group-hover:text-black group-hover:translate-x-4 transition-all">→</span>
                    </div>
                  </div>
                </MagneticButton>
                
                <MagneticButton className="w-full text-left">
                  <div className="border-b-2 border-black pb-6 group cursor-none w-full">
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Global Partnerships</span>
                    <div className="flex justify-between items-center text-3xl font-black transition-all group-hover:translate-x-4">
                      <span>PARTNER_TIER</span>
                      <span className="text-gray-200 group-hover:text-black group-hover:translate-x-4 transition-all">→</span>
                    </div>
                  </div>
                </MagneticButton>
              </div>
            </div>

            <motion.div 
              variants={FADE_IN}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.9 }}
              className="mt-20 bg-black text-white p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[10px] font-black p-4 opacity-20">REF: CTA_99</div>
              <h4 className="text-xs font-black uppercase tracking-[0.5em] mb-8 border-b border-white/20 pb-4">IMMEDIATE_ACTIONS</h4>
              <ul className="space-y-4 font-black text-sm uppercase tracking-widest">
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-white group-hover:scale-150 transition-transform" />
                  <span>Download Infrastructure Specs</span>
                </li>
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-white group-hover:scale-150 transition-transform" />
                  <span>View Traffic Heatmaps</span>
                </li>
                <li className="hover:translate-x-4 transition-transform cursor-pointer flex items-center gap-4 group">
                  <div className="h-2 w-2 bg-white group-hover:scale-150 transition-transform" />
                  <span>Schedule Site Protocol</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Footer Meta Accent */}
        <div className="absolute bottom-4 right-0 text-[8px] font-black uppercase tracking-[0.5em] text-gray-200">
          PRODUCED_BY // STRATEGIC_AD_MEDIA_LABS
        </div>
      </div>
    </SectionLayout>
  );
};
