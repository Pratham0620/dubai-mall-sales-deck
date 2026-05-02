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
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [blurLoaded, setBlurLoaded] = React.useState(false);

  React.useEffect(() => {
    if (backgroundImage) {
      setIsLoaded(false);
      setBlurLoaded(false);
      
      // Load tiny blur placeholder
      const tinyImg = new Image();
      tinyImg.src = `${backgroundImage}&w=50&blur=10`;
      tinyImg.onload = () => setBlurLoaded(true);

      // Load full resolution
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setIsLoaded(true);
    }
  }, [backgroundImage]);

  const defaultOverlay = isDark 
    ? 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)' 
    : 'rgba(255,255,255,0.88)';
  const finalOverlay = overlayColor || defaultOverlay;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-screen h-[100dvh] flex items-stretch justify-center pl-20 md:pl-64 overflow-hidden transform-gpu will-change-opacity ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'}`}
    >
      {backgroundVideo ? (
        <video
          className={`absolute inset-0 z-0 h-full w-full object-cover transform-gpu pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-40 grayscale-[0.2] brightness-95' : 'opacity-30 grayscale contrast-125'}`}
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : backgroundImage && (
        <>
          {/* Low Quality Placeholder */}
          <motion.div 
            animate={{ opacity: blurLoaded && !isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0 bg-cover bg-center transform-gpu scale-105 pointer-events-none"
            style={{ 
              backgroundImage: `url(${backgroundImage}&w=50&blur=10)`,
              filter: isDark ? 'grayscale(0.1) brightness(0.7)' : 'grayscale(1) contrast(1.1) opacity(0.1)'
            }}
          />
          
          {/* Full Resolution */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ 
              opacity: isLoaded ? (isDark ? 1 : 1) : 0,
              scale: isLoaded ? 1.05 : 1.08
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0 bg-cover bg-center transform-gpu will-change-[opacity,transform]"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              filter: isDark ? 'grayscale(0.1) brightness(0.85)' : 'grayscale(1) contrast(1.1) opacity(0.15)'
            }}
          />
        </>
      )}
      
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_60%)] z-[1] transform-gpu pointer-events-none" />
      )}

      <div 
        className="absolute inset-0 z-[1] transform-gpu pointer-events-none" 
        style={{ background: finalOverlay }}
      />
      
      {/* Decorative Bold Lines */}
      <div className={`absolute top-0 bottom-0 right-0 w-12 border-l-8 z-[1] opacity-5 pointer-events-none ${isDark ? 'border-white' : 'border-black'}`} />
      <div className={`absolute top-1/2 left-20 md:left-64 right-0 h-px z-[1] opacity-5 pointer-events-none ${isDark ? 'bg-white' : 'bg-black'}`} />

      <div className="relative z-10 w-full max-w-6xl min-w-0 px-4 md:px-8 lg:px-14 h-screen h-[100dvh] py-6 md:py-8 lg:py-10 flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none">
        <div className="my-auto w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
