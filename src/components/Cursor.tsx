import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom spring cursor — replaces the default OS cursor on desktop.
 * A precise amber dot + a larger ring that lags behind with spring physics.
 * This is a premium interaction pattern used by Stripe, Linear, Vercel.
 * Hidden automatically on touch devices via `pointer: fine` CSS.
 */
export const Cursor: React.FC = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows mouse precisely
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 40, mass: 0.1 });

  // Ring lags behind with heavier spring
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    // Only rendered on fine-pointer (mouse) devices
    <div className="pointer-only">
      {/* Precise amber dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-amber-400"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          top: 0,
          left: 0,
        }}
      />
      {/* Lagging translucent ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          top: 0,
          left: 0,
          border: '1px solid rgba(251, 191, 36, 0.35)',
          backgroundColor: 'rgba(251, 191, 36, 0.04)',
        }}
      />
    </div>
  );
};
