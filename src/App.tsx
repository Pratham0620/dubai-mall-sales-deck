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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = React.useRef(false);

  // Sync ref with state
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  const handleSectionChange = React.useCallback((section: Section) => {
    if (isTransitioningRef.current) return;
    
    // Check if it's the same section
    setCurrentSection(prev => {
      if (prev === section) return prev;
      
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1200); // Cinematic duration lockout
      return section;
    });
  }, []);

  const changeSectionBy = React.useCallback((direction: 1 | -1) => {
    const sectionIndex = SECTION_ORDER.indexOf(currentSection);
    const nextIndex = sectionIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < SECTION_ORDER.length) {
      handleSectionChange(SECTION_ORDER[nextIndex] as Section);
    }
  }, [currentSection, handleSectionChange]);

  // Keep section switching predictable and avoid native/page scroll conflicts.
  useEffect(() => {
    let wheelAccumulator = 0;
    let wheelTimeout: NodeJS.Timeout | null = null;
    const WHEEL_THRESHOLD = 80; // Balanced threshold

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      // Check if we are inside a scrollable container
      const scrollable = target?.closest('.overflow-y-auto');
      if (scrollable instanceof HTMLElement) {
        const isScrollingDown = e.deltaY > 0;
        const isAtBottom = Math.abs(scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight) < 4;
        const isAtTop = scrollable.scrollTop < 4;

        if (isScrollingDown && !isAtBottom) {
          wheelAccumulator = 0;
          return;
        }
        if (!isScrollingDown && !isAtTop) {
          wheelAccumulator = 0;
          return;
        }
      }

      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      
      // Normalize delta to normalize across devices (mice vs trackpads)
      const normalizedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 100);
      wheelAccumulator += normalizedDelta;
      
      if (wheelTimeout) clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        wheelAccumulator = 0;
      }, 150);

      if (Math.abs(wheelAccumulator) >= WHEEL_THRESHOLD) {
        const direction = wheelAccumulator > 0 ? 1 : -1;
        changeSectionBy(direction);
        wheelAccumulator = 0;
        if (wheelTimeout) clearTimeout(wheelTimeout);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      const isDown = e.key === 'ArrowDown' || e.key === 'PageDown';
      const isUp = e.key === 'ArrowUp' || e.key === 'PageUp';

      if (isDown || isUp) {
        // Find if there's an active scrollable container
        const scrollable = document.querySelector('.overflow-y-auto');
        if (scrollable instanceof HTMLElement) {
          const isAtBottom = Math.abs(scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight) < 4;
          const isAtTop = scrollable.scrollTop < 4;

          if (isDown && !isAtBottom) return; 
          if (isUp && !isAtTop) return;
        }

        e.preventDefault();
        changeSectionBy(isDown ? 1 : -1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      // Minimum swipe distance
      if (Math.abs(deltaY) > 50) {
        // Check for scrollable containers on mobile
        const target = e.target as HTMLElement | null;
        const scrollable = target?.closest('.overflow-y-auto');
        if (scrollable instanceof HTMLElement) {
          const isScrollingDown = deltaY > 0;
          const isAtBottom = Math.abs(scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight) < 4;
          const isAtTop = scrollable.scrollTop < 4;
          if (isScrollingDown && !isAtBottom) return;
          if (!isScrollingDown && !isAtTop) return;
        }

        changeSectionBy(deltaY > 0 ? 1 : -1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [changeSectionBy]);

  const renderSection = () => {
    if (currentSection === Section.HERO) {
      return <HeroSection key="hero" onNext={() => changeSectionBy(1)} />;
    }
    const SectionComponent = SECTION_COMPONENTS[currentSection];
    return SectionComponent ? (
      <SectionComponent key={currentSection} />
    ) : (
      <HeroSection key="hero-fallback" onNext={() => changeSectionBy(1)} />
    );
  };

  return (
    <div className="relative w-full min-h-screen min-h-[100dvh] bg-black overflow-hidden selection:bg-[--color-brand-gold] selection:text-black">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
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
          <div className="text-white font-black text-sm uppercase tracking-tighter mb-1 drop-shadow-md">
            {NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1} / {NAVIGATION_ITEMS.length}
          </div>
          <div className="text-[10px] uppercase font-black tracking-[0.3em] text-white/60 drop-shadow-sm">
            {NAVIGATION_ITEMS.find(i => i.id === currentSection)?.shortLabel}
          </div>
        </div>
        <div className="w-16 h-4 border-2 border-white/40 backdrop-blur-sm">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ 
              width: `${((NAVIGATION_ITEMS.findIndex(i => i.id === currentSection) + 1) / NAVIGATION_ITEMS.length) * 100}%` 
            }}
            transition={{ duration: MOTION_TIMING.fast, ease: LUXURY_EASE }}
          />
        </div>
      </div>

      <div className="fixed bottom-8 left-28 md:left-72 z-50 hidden lg:block">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 animate-pulse hidden md:block drop-shadow-sm">
          Explore_The_Journey // Scroll_To_Navigate
        </div>
      </div>

      <IntelligenceConsole />
    </div>
  );
}

