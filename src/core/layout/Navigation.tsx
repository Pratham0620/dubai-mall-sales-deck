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
    <nav className="fixed left-0 top-0 h-[100dvh] w-20 md:w-64 z-50 flex flex-col justify-between py-8 md:py-12 px-4 md:px-6 border-r-4 border-black bg-white/95 backdrop-blur-sm overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center md:items-start space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
          className="text-black font-display text-2xl font-black uppercase leading-none tracking-tighter"
        >
          DM<span className="hidden md:inline"> / 26</span>
        </motion.div>
        
        <div className="flex flex-col space-y-6 w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => onSectionChange(item.id)}
              className={`group relative flex items-center space-x-4 text-left transition-all duration-300 border-l-4 ${
                currentSection === item.id 
                  ? 'border-black pl-4' 
                  : 'border-transparent pl-0 hover:pl-2'
              }`}
            >
              <motion.span
                aria-hidden
                className={`absolute -left-[7px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black transition-opacity duration-300 ${
                  currentSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                }`}
                animate={currentSection === item.id ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.8, repeat: currentSection === item.id ? Infinity : 0, ease: 'easeInOut' }}
              />

              {currentSection === item.id && (
                <motion.span
                  layoutId="active-nav-rail"
                  aria-hidden
                  className="absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-black"
                  transition={NAV_SPRING}
                />
              )}

              <div className="flex flex-col">
                <motion.span
                  animate={currentSection === item.id ? { x: 1 } : { x: 0 }}
                  transition={{ duration: MOTION_TIMING.fast, ease: LUXURY_EASE }}
                  className={`font-display text-xs md:text-sm font-black uppercase tracking-tight transition-colors duration-300 ${
                  currentSection === item.id ? 'text-black' : 'text-gray-300'
                }`}>
                  {item.shortLabel}
                </motion.span>
                <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="hidden md:block border-t-4 border-black pt-6">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed text-black/40">
          The Dubai Mall<br />Downtown // UAE
        </div>
      </div>
    </nav>
  );
};
