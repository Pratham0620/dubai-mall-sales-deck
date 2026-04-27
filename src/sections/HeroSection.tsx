import React from 'react';
import { motion } from 'motion/react';
import { SectionLayout } from '../core/layout/SectionLayout';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNext }) => {
  return (
    <SectionLayout backgroundImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80">
      <div className="flex flex-col space-y-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="border-b-8 border-black pb-8"
        >
          <span className="text-black font-black text-xs uppercase tracking-[0.5em] mb-4 block">
            Documenting the Future // 001
          </span>
          <h1 className="text-6xl md:text-[clamp(4rem,10vw,10rem)] font-black tracking-tighter leading-[0.8] text-black">
            American<br />
            <span className="text-gray-200">Dream</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-xl text-xl text-black font-bold leading-none tracking-tight uppercase"
          >
            A high-velocity destination platform where culture, commerce, and curiosity converge.
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            onClick={onNext}
            className="group flex items-center bg-black text-white px-10 py-6 border-4 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="font-black text-sm uppercase tracking-tighter">
              Execute Experience
            </span>
            <ChevronRight className="ml-4 transition-transform group-hover:translate-x-2" size={24} strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </SectionLayout>
  );
};
