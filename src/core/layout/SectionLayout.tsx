import React from 'react';
import { motion } from 'motion/react';

interface SectionLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayColor?: string;
  variant?: 'light' | 'dark';
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  children, 
  backgroundImage,
  backgroundVideo,
  overlayColor,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  const defaultOverlay = isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.85)';
  const finalOverlay = overlayColor || defaultOverlay;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`relative w-full h-screen h-[100dvh] flex items-stretch justify-center pl-20 md:pl-64 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {backgroundVideo ? (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 grayscale contrast-125"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: isDark ? 'grayscale(0.4) brightness(0.7)' : 'grayscale(1) contrast(1.2) opacity(0.2)'
          }}
        />
      )}
      
      {isDark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.4))] z-[1]" />
        </>
      )}

      <div 
        className="absolute inset-0 z-[1]" 
        style={{ backgroundColor: finalOverlay }}
      />
      
      {/* Decorative Bold Lines */}
      <div className={`absolute top-0 bottom-0 right-0 w-12 border-l-8 z-[1] opacity-5 ${isDark ? 'border-white' : 'border-black'}`} />
      <div className={`absolute top-1/2 left-20 md:left-64 right-0 h-px z-[1] opacity-5 ${isDark ? 'bg-white' : 'bg-black'}`} />

      <div className="relative z-10 w-full max-w-6xl min-w-0 px-4 md:px-8 lg:px-14 h-screen h-[100dvh] py-6 md:py-8 lg:py-10 flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="my-auto w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
