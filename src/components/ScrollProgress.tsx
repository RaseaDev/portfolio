import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gradient scroll progress bar fixed to the top of the viewport.
 * Fills amber → cyan → violet as you scroll down.
 * A small but distinctive touch — AI-generated templates never include this.
 */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #FBBF24 0%, #06B6D4 50%, #8B5CF6 100%)',
      }}
    />
  );
};
