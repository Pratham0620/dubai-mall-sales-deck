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

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);

  // Simple scroll listener to prevent multiple accidental scrolls but allow changing sections
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      // Threshold to prevent over-scrolling
      if (Math.abs(e.deltaY) < 30) return;

      const now = Date.now();
      if (now - lastScrollTime < 1000) return;
      
      const sections = Object.values(Section);
      const currentIndex = sections.indexOf(currentSection);
      
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentSection(sections[currentIndex + 1] as Section);
        lastScrollTime = now;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentSection(sections[currentIndex - 1] as Section);
        lastScrollTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case Section.HERO:
        return <HeroSection key="hero" onNext={() => setCurrentSection(Section.OVERVIEW)} />;
      case Section.OVERVIEW:
        return <OverviewSection key="overview" />;
      case Section.RETAIL:
        return <RetailSection key="retail" />;
      case Section.LUXURY:
        return <LuxurySection key="luxury" />;
      case Section.DINING:
        return <DiningSection key="dining" />;
      case Section.ATTRACTIONS:
        return <AttractionsSection key="attractions" />;
      case Section.EVENTS:
        return <EventsSection key="events" />;
      case Section.DATA:
        return <DataSection key="data" />;
      default:
        return <HeroSection key="hero" onNext={() => setCurrentSection(Section.OVERVIEW)} />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-y-auto overflow-x-hidden selection:bg-[--color-brand-gold] selection:text-black">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />

      <main className="w-full h-full">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>

      {/* Progress Indicator */}
      <div className="fixed bottom-12 right-12 z-50 flex items-center space-x-6">
        <div className="flex flex-col items-end">
          <div className="text-black font-black text-sm uppercase tracking-tighter mb-1">
            {NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1} / {NAVIGATION_ITEMS.length}
          </div>
          <div className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400">
            {NAVIGATION_ITEMS.find(i => i.id === currentSection)?.label.split('. ')[1]}
          </div>
        </div>
        <div className="w-16 h-4 border-2 border-black">
          <motion.div 
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ 
              width: `${((NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1) / NAVIGATION_ITEMS.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="fixed bottom-12 left-28 md:left-72 z-50">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 animate-pulse hidden md:block">
          Explore_The_Journey // Scroll_To_Navigate
        </div>
      </div>

      <IntelligenceConsole />
    </div>
  );
}

