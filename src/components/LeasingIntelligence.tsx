import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, BarChart2, Users, MapPin } from 'lucide-react';
import { FILMIC_EASE, LUXURY_EASE, MOTION_TIMING } from '../core/animations/presets';

interface LeasingIntelligenceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeasingIntelligence: React.FC<LeasingIntelligenceProps> = ({ isOpen, onClose }) => {
  const dataPoints = [
    { label: 'Annual Visitors', value: '100M+', icon: <Users size={20} />, trend: '+14% YoY' },
    { label: 'GLA Occupancy', value: '98.5%', icon: <BarChart2 size={20} />, trend: 'At Capacity' },
    { label: 'Fashion Avenue', value: '150+', icon: <MapPin size={20} />, trend: 'Luxury Brands' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: FILMIC_EASE }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-2xl bg-white text-black p-8 md:p-12 shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">
                Intelligence_Module // L-01
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-black hover:text-white transition-colors rounded-full"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                Leasing<br />
                <span className="text-black/40 text-4xl md:text-5xl">Intelligence</span>
              </h2>

              <p className="text-lg font-black uppercase tracking-tight leading-tight mb-12 border-l-8 border-black pl-8">
                The Dubai Mall offers world-class retail environments with unmatched consumer velocity. We don't just lease space; we architect brand legacies.
              </p>

              <div className="grid gap-6 mb-12">
                {dataPoints.map((point) => (
                  <div key={point.label} className="border-2 border-black p-6 flex items-center justify-between group hover:bg-black hover:text-white transition-all bg-gray-50">
                    <div className="flex items-center gap-6">
                      <div className="p-4 border-2 border-black group-hover:border-white bg-white group-hover:bg-transparent transition-colors">
                        {point.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{point.label}</div>
                        <div className="text-3xl font-black tracking-tighter">{point.value}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black uppercase tracking-widest text-emerald-700 group-hover:text-emerald-400">{point.trend}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-6 opacity-40">Available Paths</h3>
                {['Luxury Flagship', 'High-Street Retail', 'F&B Signature', 'Pop-up Activation'].map((path) => (
                  <button key={path} className="w-full flex items-center justify-between p-6 border-b border-black/10 hover:border-black transition-all group">
                    <span className="text-xl font-black uppercase tracking-tight">{path}</span>
                    <ArrowRight className="group-hover:translate-x-3 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-black/10">
              <button className="w-full bg-black text-white py-5 font-black uppercase tracking-widest hover:bg-gray-900 transition-colors">
                Request Protocol Access
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
