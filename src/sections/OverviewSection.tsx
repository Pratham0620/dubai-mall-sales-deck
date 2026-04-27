import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { Stat } from '../types';
import { BOLD_HEADING, FADE_IN, SLIDE_UP } from '../core/animations/variants';

export const OverviewSection: React.FC = () => {
  const stats: Stat[] = [
    { value: '3M+', label: 'Square Feet', detail: 'Gross Leasable Area' },
    { value: '40M+', label: 'Annual Visitors', detail: 'Projected Regional Draw' },
    { value: '20M', label: 'Primary Catchment', detail: 'High Net-Worth Population' },
    { value: '30%', label: 'Tourist Composition', detail: 'International & Domestic' }
  ];

  return (
    <SectionLayout backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start relative">
        {/* Cinematic Header */}
        <div className="border-t-8 border-black pt-12 relative z-10 lg:pr-8">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-5xl md:text-[clamp(3.5rem,7vw,8rem)] font-black uppercase mb-12 leading-[0.8] tracking-tighter max-w-[12ch] lg:max-w-none">
              Impossible<br />
              <span className="text-gray-300">Scale.</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
          >
            <p className="text-black font-black uppercase text-2xl leading-tight max-w-lg mb-8 tracking-tight">
              Located at the crossroads of the world's most affluent market.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                Audit_Protocol // Metric_Analysis
              </span>
              <div className="h-px flex-grow bg-black/10" />
            </div>
          </motion.div>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-2 gap-4 relative lg:max-w-2xl ml-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 }}
              className="border-4 border-black p-8 flex flex-col justify-between h-64 group hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair relative overflow-hidden"
            >
              {/* Background Number Accent */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="text-4xl md:text-6xl font-black tracking-tighter z-10">
                {stat.value}
              </div>
              
              <div className="z-10">
                <div className="text-xs font-black uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] font-bold uppercase opacity-40 group-hover:opacity-70">
                  {stat.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer Meta */}
      <div className="absolute bottom-12 left-20 md:left-64 flex items-center gap-12 w-full pr-32">
        <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">Data Integrity</span>
          <span className="text-[10px] font-bold uppercase">Verified Q1_2026</span>
        </div>
        <div className="h-[2px] flex-grow bg-gray-100/10" />
      </div>
    </SectionLayout>
  );
};
