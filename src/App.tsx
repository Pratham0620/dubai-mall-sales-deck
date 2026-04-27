import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './types';
import { NAVIGATION_ITEMS } from './content/deck-content';
import { Navigation } from './core/layout/Navigation';

// Sections
import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { RetailSection } from './sections/RetailSection';
import { LuxurySection } from './sections/LuxurySection';
import { DiningSection } from './sections/DiningSection';
import { AttractionsSection } from './sections/AttractionsSection';
import { EventsSection } from './sections/EventsSection';
import { DataSection } from './sections/DataSection';

import { IntelligenceConsole } from './components/IntelligenceConsole';
import { FILMIC_EASE, LUXURY_EASE, MOTION_TIMING } from './core/animations/presets';

const SECTION_ORDER = Object.values(Section);
const SECTION_COMPONENTS: Record<Exclude<Section, Section.HERO>, React.ComponentType> = {
  [Section.OVERVIEW]: OverviewSection,
  [Section.RETAIL]: RetailSection,
  [Section.LUXURY]: LuxurySection,
  [Section.DINING]: DiningSection,
  [Section.ATTRACTIONS]: AttractionsSection,
  [Section.EVENTS]: EventsSection,
  [Section.DATA]: DataSection,
};

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);

  const changeSectionBy = (direction: 1 | -1) => {
    setCurrentSection((previous) => {
      const sectionIndex = SECTION_ORDER.indexOf(previous);
      const nextIndex = sectionIndex + direction;
      if (nextIndex < 0 || nextIndex >= SECTION_ORDER.length) return previous;
      return SECTION_ORDER[nextIndex] as Section;
    });
  };

  // Keep section switching predictable and avoid native/page scroll conflicts.
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      // Threshold to prevent over-scrolling
      if (Math.abs(e.deltaY) < 30) return;

      const now = Date.now();
      if (now - lastScrollTime < 700) return;

      e.preventDefault();
      changeSectionBy(e.deltaY > 0 ? 1 : -1);
      lastScrollTime = now;
    };

    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        changeSectionBy(1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        changeSectionBy(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const renderSection = () => {
    if (currentSection === Section.HERO) {
      return <HeroSection key="hero" onNext={() => setCurrentSection(Section.OVERVIEW)} />;
    }
    const SectionComponent = SECTION_COMPONENTS[currentSection];
    return SectionComponent ? (
      <SectionComponent key={currentSection} />
    ) : (
      <HeroSection key="hero-fallback" onNext={() => setCurrentSection(Section.OVERVIEW)} />
    );
  };

  return (
    <div className="relative w-full min-h-screen min-h-[100dvh] bg-black overflow-hidden selection:bg-[--color-brand-gold] selection:text-black">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />

      <main className="w-full min-h-screen min-h-[100dvh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: MOTION_TIMING.base, ease: FILMIC_EASE }}
            className="w-full min-h-screen min-h-[100dvh]"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center space-x-6">
        <div className="flex flex-col items-end">
          <div className="text-black font-black text-sm uppercase tracking-tighter mb-1">
            {NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1} / {NAVIGATION_ITEMS.length}
          </div>
          <div className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400">
            {NAVIGATION_ITEMS.find(i => i.id === currentSection)?.shortLabel}
          </div>
        </div>
        <div className="w-16 h-4 border-2 border-black">
          <motion.div 
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ 
              width: `${((NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1) / NAVIGATION_ITEMS.length) * 100}%` 
            }}
            transition={{ duration: MOTION_TIMING.fast, ease: LUXURY_EASE }}
          />
        </div>
      </div>

      <div className="fixed bottom-8 left-28 md:left-72 z-50 hidden lg:block">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 animate-pulse hidden md:block">
          Explore_The_Journey // Scroll_To_Navigate
        </div>
      </div>

      <IntelligenceConsole />
    </div>
  );
}

