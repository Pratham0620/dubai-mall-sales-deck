import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../types';
import { NAVIGATION_ITEMS } from '../../content/deck-content';
import { LUXURY_EASE, MOTION_TIMING, NAV_SPRING } from '../animations/presets';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  return (
    <nav className="fixed left-0 top-0 h-[100dvh] w-20 md:w-64 z-50 flex flex-col justify-between py-8 md:py-12 px-4 md:px-6 border-r border-white/5 bg-black/80 backdrop-blur-3xl overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center md:items-start space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
          className="text-white font-display text-2xl font-black uppercase leading-none tracking-tighter"
        >
          DM<span className="opacity-20 hidden md:inline"> / 26</span>
        </motion.div>
        
        <div className="flex flex-col space-y-6 w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => onSectionChange(item.id)}
              className={`group relative flex items-center space-x-4 text-left transition-all duration-500 ${
                currentSection === item.id 
                  ? 'text-white' 
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              {currentSection === item.id && (
                <motion.span
                  layoutId="active-nav-dot"
                  aria-hidden
                  className="absolute -left-2 w-1 h-4 bg-white"
                  transition={NAV_SPRING}
                />
              )}

              <div className="flex flex-col">
                <motion.span
                  className="font-display text-xs md:text-sm font-black uppercase tracking-widest"
                >
                  {item.shortLabel}
                </motion.span>
                <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {item.description}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="hidden md:block border-t border-white/5 pt-6">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed text-white/20">
          Downtown Dubai<br />Asset_Mgmt // V.26
        </div>
      </div>
    </nav>
  );
};
