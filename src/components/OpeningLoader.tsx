import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningLoaderProps {
  onComplete: () => void;
}

export const OpeningLoader: React.FC<OpeningLoaderProps> = ({ onComplete }) => {
  const [frame, setFrame] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user already saw the loader this session
    const hasSeen = sessionStorage.getItem('km_cinema_loader_seen');
    if (hasSeen === 'true') {
      onComplete();
      setIsDone(true);
      return;
    }

    const interval = setInterval(() => {
      setFrame((prev) => {
        if (prev >= 24) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('km_cinema_loader_seen', 'true');
            setIsDone(true);
            onComplete();
          }, 250);
          return 24;
        }
        return prev + 1;
      });
    }, 45); // 24 frames in ~1.1 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinema-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-[#080808] flex flex-col justify-between p-8 md:p-14 select-none cursor-default"
      >
        {/* Top Camera Metadata HUD */}
        <div className="flex justify-between items-center text-[10px] md:text-xs font-mono tracking-[0.25em] text-[#8e8c85] uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>CALIBRATING SENSOR</span>
          </div>
          <div className="tracking-[0.3em]">
            <span>24.000 FPS // 2.39:1</span>
          </div>
        </div>

        {/* Center Title */}
        <div className="my-auto text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs font-mono tracking-[0.4em] text-[#8e8c85] uppercase"
          >
            Director of Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl md:text-6xl font-bold tracking-[0.2em] text-[#f4f3ef] uppercase"
          >
            KARIM MOHAMED
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] md:text-xs tracking-[0.3em] text-[#8e8c85] uppercase font-light"
          >
            Cairo / MENA / International
          </motion.div>
        </div>

        {/* Bottom Timecode & Frame Counter */}
        <div className="flex justify-between items-end text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
          <div className="text-[11px]">
            <span>TC 00:00:00:</span>
            <span className="text-[#f4f3ef] font-semibold">{frame < 10 ? `0${frame}` : frame}</span>
          </div>
          <button
            onClick={() => {
              sessionStorage.setItem('km_cinema_loader_seen', 'true');
              setIsDone(true);
              onComplete();
            }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#8e8c85] hover:text-[#f4f3ef] transition-colors cursor-pointer"
          >
            SKIP REEL →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
