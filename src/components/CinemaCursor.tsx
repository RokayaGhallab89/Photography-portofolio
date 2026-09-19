import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CinemaCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const customCursorEl = target?.closest('[data-cursor]');
      if (customCursorEl) {
        const text = customCursorEl.getAttribute('data-cursor');
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.35,
        }}
      >
        {cursorText ? (
          <div className="px-3.5 py-1.5 rounded-full bg-[#f4f3ef] text-[#080808] font-mono text-[10px] tracking-[0.25em] font-semibold uppercase shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
            <span>{cursorText}</span>
            <span className="text-[8px]">↗</span>
          </div>
        ) : (
          <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white/70" />
          </div>
        )}
      </motion.div>
    </div>
  );
};
