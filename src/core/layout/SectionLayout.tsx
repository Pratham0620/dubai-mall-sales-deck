import React from 'react';
import { motion } from 'motion/react';

interface SectionLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayColor?: string;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  children, 
  backgroundImage,
  overlayColor = 'rgba(255,255,255,0.85)' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen flex items-center justify-center pl-20 md:pl-64 bg-white overflow-x-hidden"
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: 'grayscale(1) contrast(1.2) opacity(0.2)'
          }}
        />
      )}
      
      <div 
        className="absolute inset-0 z-1" 
        style={{ backgroundColor: overlayColor }}
      />
      
      {/* Decorative Bold Lines */}
      <div className="absolute top-0 right-0 w-12 h-screen border-l-8 border-black z-1 opacity-5" />
      <div className="absolute top-1/2 left-20 md:left-64 right-0 h-px bg-black z-1 opacity-5" />

      <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 lg:px-24 min-h-screen py-24 flex flex-col justify-center">
        {children}
      </div>
    </motion.div>
  );
};
