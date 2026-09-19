import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FilmBurnProps {
  triggerKey: string;
}

export const FilmBurnTransition: React.FC<FilmBurnProps> = ({ triggerKey }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 480);
    return () => clearTimeout(timer);
  }, [triggerKey]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={`burn-${triggerKey}`}
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
        >
          {/* Subtle amber & silver organic light leak simulation */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-white/20 to-orange-600/10 mix-blend-color-dodge" />
          <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,245,230,0.18)_0%,transparent_60%)] mix-blend-screen" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
