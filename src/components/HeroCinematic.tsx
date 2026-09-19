import React, { useEffect, useState, useRef } from 'react';
import { Play, ArrowDown } from 'lucide-react';

interface HeroCinematicProps {
  onScrollToWork: () => void;
  onOpenShowreel: () => void;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({
  onScrollToWork,
  onOpenShowreel,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Initial cinematic reveal sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Subtle scroll tracking for editorial parallax / scroll handoff
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extremely subtle mouse movement for imperceptible depth
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return; // Disable on touch/mobile
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12; // max ±6px
    const y = (clientY / innerHeight - 0.5) * 10; // max ±5px
    setMousePos({ x, y });
  };

  // Parallax scroll calculations
  const scrollRatio = Math.min(scrollY / 800, 1);
  const imageScale = 1 + scrollRatio * 0.05;
  const textTranslateY = scrollRatio * 60;
  const imageTranslateY = scrollRatio * 30;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100svh] lg:min-h-[105vh] bg-[#050505] text-[#f3f1ec] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* 1. TOP SUBTLE METADATA BAR */}
      <header className="relative z-30 pt-24 sm:pt-28 md:pt-32 px-6 sm:px-10 md:px-14 lg:px-18 max-w-[1720px] mx-auto w-full flex justify-between items-start text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#8e8c85]">
        {/* Left: Project / Frame index */}
        <div
          className={`flex items-center gap-3 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f3f1ec]/80" />
          <span className="text-[#f3f1ec]/90">01 / ARCHIVE</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">FRAME 001</span>
        </div>

        {/* Center: Subtle status (hidden on small mobile) */}
        <div
          className={`hidden md:flex items-center gap-2.5 text-white/50 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span>ARRI 35</span>
          <span className="text-white/20">•</span>
          <span>ANAMORPHIC 2.39:1</span>
          <span className="text-white/20">•</span>
          <span className="text-white/80">CAIRO // KSA</span>
        </div>

        {/* Right: Interactive Showreel Trigger */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <button
            onClick={onOpenShowreel}
            data-cursor="PLAY REEL"
            className="group flex items-center gap-2.5 text-[#8e8c85] hover:text-[#f3f1ec] transition-colors cursor-pointer py-1"
            aria-label="Open Cinematography Reel"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="tracking-[0.25em] text-[10px] sm:text-[11px] group-hover:underline underline-offset-4">
              SHOWREEL
            </span>
            <span className="hidden sm:inline text-white/30 text-[9px] font-mono">
              [02:18]
            </span>
            <Play className="w-2.5 h-2.5 fill-current text-[#f3f1ec]/70 group-hover:text-white transition-transform group-hover:scale-110" />
          </button>
        </div>
      </header>

      {/* 2. MAIN ASYMMETRICAL POSTER COMPOSITION */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 my-auto pt-6 pb-12 flex-1 flex flex-col justify-center">
        {/* Asymmetrical Canvas Area */}
        <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
          
          {/* A. HERO CINEMATIC IMAGE CANVAS (75-90% Viewport, Asymmetrically Offset) */}
          <div
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y + imageTranslateY}px, 0) scale(${imageScale})`,
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
            className="relative ml-auto w-full sm:w-[88%] md:w-[82%] lg:w-[78%] xl:w-[75%] h-[56vh] sm:h-[64vh] lg:h-[72vh] max-h-[820px] overflow-hidden border border-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
          >
            {/* Cinematic Image with Smooth Mask & Film Contrast */}
            <div
              className={`w-full h-full relative transition-all duration-[1400ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                isLoaded
                  ? 'opacity-100 scale-100 filter-none'
                  : 'opacity-0 scale-[1.06] blur-[2px]'
              }`}
            >
              <img
                src="/media/hero-karim.jpg"
                alt="Karim Mohamed — Cinematographer & Director of Photography"
                className="w-full h-full object-cover object-[center_35%] contrast-[1.12] brightness-[0.92] saturate-[0.92]"
                onError={(e) => {
                  // Resilient fallback to high-end cinematography still if needed
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src =
                      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=85&w=2400&auto=format&fit=crop';
                  }
                }}
              />

              {/* Controlled Vignette & Shadows for Typography Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent w-full sm:w-[60%] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 pointer-events-none" />
              
              {/* Very Subtle Lens Flares & Halation Texture */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />

              {/* Sub-label inside image corner */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 pointer-events-none text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-white/60 bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10 uppercase">
                DIR. OF PHOTOGRAPHY // 35MM
              </div>
            </div>
          </div>

          {/* B. MONUMENTAL EDITORIAL TYPOGRAPHY (Layered Across Negative Space & Image Edge) */}
          <div
            style={{
              transform: `translate3d(${-mousePos.x * 0.5}px, ${textTranslateY}px, 0)`,
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
            className="absolute left-0 sm:left-2 md:left-4 lg:left-6 inset-y-0 flex flex-col justify-center z-20 pointer-events-none max-w-full"
          >
            {/* 1. Eyebrow Discipline */}
            <div
              className={`overflow-hidden mb-3 sm:mb-4 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
                <span>CINEMATOGRAPHER</span>
                <span className="text-white/30">•</span>
                <span>DIRECTOR OF PHOTOGRAPHY</span>
              </div>
            </div>

            {/* 2. Monumental Headline: KARIM MOHAMED */}
            <div className="overflow-hidden">
              <h1
                style={{ fontFamily: 'var(--font-display)' }}
                className={`text-[3.2rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10.5rem] font-bold tracking-[-0.01em] sm:tracking-[0.02em] leading-[0.88] uppercase text-[#f3f1ec] transition-all duration-1200 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                KARIM
                <br />
                <span className="text-[#f3f1ec] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                  MOHAMED
                </span>
              </h1>
            </div>

            {/* 3. Refined Editorial Serif Touch & Location */}
            <div
              className={`mt-4 sm:mt-6 max-w-xl transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-lg sm:text-2xl md:text-3xl italic font-light text-[#f3f1ec]/80 tracking-wide"
              >
                The Architecture of Light &amp; Shadow
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#8e8c85] uppercase">
                <span>CAIRO — EGYPT</span>
                <span className="text-white/20">/</span>
                <span>MIDDLE EAST &amp; INTERNATIONAL</span>
                <span className="text-white/20">/</span>
                <span>2016 — PRESENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM CINEMATIC EXPLORE BAR */}
      <footer className="relative z-30 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-10 md:px-14 lg:px-18 max-w-[1720px] mx-auto w-full flex justify-between items-end text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#8e8c85]">
        {/* Left: Scroll cue */}
        <button
          onClick={onScrollToWork}
          data-cursor="SCROLL"
          className="group flex items-center gap-3 text-[#f3f1ec] hover:text-white transition-colors cursor-pointer py-1"
        >
          <span className="tracking-[0.35em] uppercase text-[10px] sm:text-[11px]">
            SCROLL TO EXPLORE ARCHIVE
          </span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1.5 transition-transform duration-300" />
        </button>

        {/* Right: Subtle film specs */}
        <div className="hidden sm:flex items-center gap-4 text-right text-[10px] text-[#8e8c85]">
          <span>300+ COMMERCIALS</span>
          <span className="text-white/20">•</span>
          <span>10+ FESTIVAL FILMS</span>
          <span className="text-white/20">•</span>
          <span className="text-[#f3f1ec]">SELECTED WORK ↓</span>
        </div>
      </footer>
    </section>
  );
};
