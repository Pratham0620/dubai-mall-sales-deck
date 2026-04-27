import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { BOLD_HEADING, SLIDE_UP, FADE_IN } from '../core/animations/variants';

export const RetailSection: React.FC = () => {
  const categories = [
    { title: 'Flagship Excellence', count: '450+', desc: 'Global brands choosing American Dream for their US identity.' },
    { title: 'Market Synergy', count: '98%', desc: 'Cross-visitation between retail and world-class entertainment.' },
    { title: 'Growth Radius', count: '20M', desc: 'Active high-spending consumers within a 45-minute drive.' }
  ];

  return (
    <SectionLayout backgroundImage="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80">
      <div className="flex flex-col h-full justify-center relative">
        <div className="mb-16 border-b-8 border-black pb-8 relative z-10">
          <motion.div
            variants={BOLD_HEADING}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-6xl md:text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.8] mb-6 tracking-tighter">
              Synergistic<br />
              <span className="text-gray-100/50">Retail Power</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
          >
            <p className="text-black font-black uppercase text-xl max-w-xl tracking-tight">
              A high-velocity platform where commerce is the ultimate lifestyle activation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={SLIDE_UP}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 + 0.3 }}
              className="group border-4 border-black p-10 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between h-72 cursor-none"
            >
              <div className="text-6xl font-black mb-6 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                {cat.count}
              </div>
              <div>
                <div className="text-sm font-black uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100">
                  {cat.title}
                </div>
                <p className="text-xs font-bold uppercase tracking-tight leading-tight opacity-40 group-hover:opacity-70">
                  {cat.desc}
                </p>
              </div>
              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        {/* Kinetic Accent */}
        <motion.div 
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 top-0 bottom-0 w-1 bg-black origin-top hidden md:block"
        />
      </div>
    </SectionLayout>
  );
};
