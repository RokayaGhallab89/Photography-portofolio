import React, { useEffect, useState, useRef } from 'react';
import { CINEMA_HERO_REEL } from '../data/projects';
import { Play } from 'lucide-react';

interface HeroShowreelProps {
  onScrollToWork: () => void;
  onOpenShowreel: () => void;
}

export const HeroShowreel: React.FC<HeroShowreelProps> = ({
  onScrollToWork,
  onOpenShowreel,
}) => {
  const [timecode, setTimecode] = useState('00:01:24:18');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Generate realistic incrementing camera timecode
    let sec = 24;
    let frames = 18;
    const interval = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        sec++;
      }
      const s = sec < 10 ? `0${sec}` : `${sec}`;
      const f = frames < 10 ? `0${frames}` : `${frames}`;
      setTimecode(`00:01:${s}:${f}`);
    }, 41.6); // ~24 fps

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until interaction
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#080808] select-none flex flex-col justify-between">
      {/* Background Cinematography Reel Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={CINEMA_HERO_REEL}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {/* Subtle Dark Cinematic Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Top Camera HUD details (subtle, camera-inspired) */}
      <div className="relative z-10 pt-28 md:pt-32 px-6 md:px-12 flex justify-between items-start text-[10px] md:text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[#f4f3ef]">REC</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">24.00 FPS</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline">2.39:1 ANAMORPHIC</span>
        </div>

        <button
          onClick={onOpenShowreel}
          className="flex items-center gap-2 group cursor-pointer text-[#8e8c85] hover:text-[#f4f3ef] transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="tracking-[0.2em]">{timecode}</span>
          <span className="hidden sm:inline group-hover:underline">PLAYING SHOWREEL</span>
          <Play className="w-2.5 h-2.5 fill-current text-white/70 group-hover:text-white" />
        </button>
      </div>

      {/* Center Film Title Sequence */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto text-left">
        <div className="max-w-4xl space-y-4 md:space-y-6">
          <div className="overflow-hidden">
            <p className="text-[11px] md:text-xs font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
              CINEMATOGRAPHER / DIRECTOR OF PHOTOGRAPHY
            </p>
          </div>

          <div className="overflow-hidden">
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.08em] text-[#f4f3ef] leading-[0.9] uppercase"
            >
              KARIM
              <br />
              MOHAMED
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs md:text-sm font-light text-[#8e8c85] tracking-[0.15em]">
            <span>CAIRO, EGYPT</span>
            <span className="text-white/20">•</span>
            <span>MENA &amp; INTERNATIONAL</span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs text-white/60">2016 — PRESENT</span>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Interactive Bar */}
      <div className="relative z-10 pb-8 md:pb-12 px-6 md:px-12 flex justify-between items-end text-[11px] font-mono tracking-[0.25em] text-[#8e8c85]">
        <button
          onClick={onScrollToWork}
          className="flex items-center gap-3 text-[#f4f3ef] hover:text-white transition-colors cursor-pointer group py-2"
        >
          <span className="tracking-[0.3em] uppercase text-[10px] md:text-xs">
            SCROLL TO EXPLORE
          </span>
          <span className="text-xs group-hover:translate-y-1 transition-transform">↓</span>
        </button>

        <div className="hidden sm:block text-right">
          <span className="text-[10px] text-[#8e8c85] uppercase">
            SELECTED COMMERCIAL &amp; NARRATIVE ARCHIVE
          </span>
        </div>
      </div>
    </section>
  );
};
