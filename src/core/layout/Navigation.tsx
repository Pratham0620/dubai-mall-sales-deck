import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../../types';
import { NAVIGATION_ITEMS } from '../../content/deck-content';
import { ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 z-50 flex flex-col justify-between py-12 px-6 border-r-4 border-black bg-white/95 backdrop-blur-sm">
      <div className="flex flex-col items-center md:items-start space-y-12">
        <div className="text-black font-display text-2xl font-black uppercase leading-none tracking-tighter">
          AD<span className="hidden md:inline"> / 26</span>
        </div>
        
        <div className="flex flex-col space-y-6 w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`group flex items-center space-x-4 text-left transition-all duration-200 border-l-4 ${
                currentSection === item.id 
                  ? 'border-black pl-4' 
                  : 'border-transparent pl-0 hover:pl-2'
              }`}
            >
              <div className="flex flex-col">
                <span className={`font-display text-xs md:text-sm font-black uppercase tracking-tight transition-colors ${
                  currentSection === item.id ? 'text-black' : 'text-gray-300'
                }`}>
                  {item.label.split('. ')[1]}
                </span>
                <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:block border-t-4 border-black pt-6">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed text-black/40">
          American Dream<br />New Jersey // USA
        </div>
      </div>
    </nav>
  );
};
