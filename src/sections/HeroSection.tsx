import React, { useMemo } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SECTION_MEDIA } from '../content/section-media';
import { FILMIC_EASE, LUXURY_EASE, MOTION_TIMING } from '../core/animations/presets';

interface HeroSectionProps {
  onNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNext }) => {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 32, damping: 20, mass: 0.9 });
  const springY = useSpring(pointerY, { stiffness: 32, damping: 20, mass: 0.9 });

  const overlayStyle = useMemo(
    () =>
      prefersReducedMotion
        ? {}
        : {
            x: springX,
            y: springY,
          },
    [prefersReducedMotion, springX, springY]
  );

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 18;
    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: MOTION_TIMING.reveal, ease: FILMIC_EASE }}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative w-full h-screen h-[100dvh] pl-20 md:pl-64 overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={SECTION_MEDIA.hero.video}
        poster={SECTION_MEDIA.hero.background}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Layered cinematic atmosphere */}
      <div className="absolute inset-0 bg-black/8" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.2),transparent_42%)]" />
      <motion.div
        style={overlayStyle}
        className="pointer-events-none absolute inset-[-6%] bg-[radial-gradient(circle_at_28%_74%,rgba(255,255,255,0.15),transparent_46%)]"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.012, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Architectural edge framing */}
      <div className="absolute left-20 md:left-64 top-0 bottom-0 w-px bg-white/35" />
      <div className="absolute right-0 top-0 bottom-0 w-16 border-l-4 border-white/22" />
      <div className="absolute left-20 md:left-64 right-0 top-[22%] h-px bg-white/18" />

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-6xl min-w-0 px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <div className="max-w-[56rem]">
            <motion.span
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
              className="mb-8 md:mb-10 block text-[10px] md:text-xs font-black uppercase tracking-[0.42em] md:tracking-[0.45em] text-white/90 drop-shadow-sm"
            >
              Documenting the Future // 001
            </motion.span>

            <motion.h1
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.38, duration: MOTION_TIMING.slow, ease: FILMIC_EASE }}
              className="font-display text-[clamp(2.5rem,7vw,7.5rem)] font-black uppercase leading-[0.75] tracking-[-0.032em] text-white drop-shadow-[0_12px_45px_rgba(0,0,0,0.7)]"
            >
              The Dubai
              <br />
              <span className="text-white">Mall</span>
            </motion.h1>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.62, duration: MOTION_TIMING.slow, ease: LUXURY_EASE }}
              className="mt-12 md:mt-16 grid gap-10 md:gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
            >
              <p className="max-w-[42rem] text-base md:text-xl text-white font-black uppercase leading-[1.15] tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
                The epicenter of global commerce, luxury, and entertainment — positioned at the heart of Downtown Dubai.
              </p>

              <motion.button
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.005 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                onClick={onNext}
                className="group inline-flex items-center border-2 border-white/80 bg-white/16 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <span className="text-xs font-black uppercase tracking-[0.16em]">
                  Execute Experience
                </span>
                <ChevronRight
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5"
                  size={20}
                  strokeWidth={2.75}
                />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: MOTION_TIMING.base, ease: LUXURY_EASE }}
            className="mt-14 md:mt-20 flex items-center gap-6 md:gap-9"
          >
            <div className="h-[2px] w-12 md:w-16 bg-white/45" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.45em] text-white/65">
              Immersive Briefing // Premium Sequence
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: MOTION_TIMING.reveal, ease: FILMIC_EASE }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-36 bg-gradient-to-t from-black/52 via-black/18 to-transparent"
      />
    </motion.section>
  );
};
