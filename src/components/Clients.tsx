import React from 'react';
import { CLIENTS_LIST } from '../data/projects';

export const Clients: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#050505] text-[#f3f1ec] border-b border-white/[0.12] overflow-hidden select-none">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 mb-10 flex items-center justify-between">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
          04 // SELECT DIRECTORS, AGENCIES &amp; BRANDS
        </span>
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase hidden sm:inline">
          CAIRO • RIYADH • DUBAI • EUROPE
        </span>
      </div>

      {/* Infinite Horizontal Cinematic Marquee */}
      <div className="relative w-full overflow-hidden flex select-none group">
        {/* Soft edge fades */}
        <div className="absolute left-0 inset-y-0 w-16 md:w-36 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 md:w-36 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center space-x-12 md:space-x-20 pr-12 md:pr-20">
          {CLIENTS_LIST.map((client, idx) => (
            <div key={`c1-${idx}`} className="flex items-center space-x-12 md:space-x-20">
              <span
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.15em] text-[#8e8c85]/70 hover:text-[#f3f1ec] uppercase transition-colors whitespace-nowrap"
              >
                {client}
              </span>
              <span className="text-white/20 text-xs">/</span>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center space-x-12 md:space-x-20 pr-12 md:pr-20">
          {CLIENTS_LIST.map((client, idx) => (
            <div key={`c2-${idx}`} className="flex items-center space-x-12 md:space-x-20">
              <span
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.15em] text-[#8e8c85]/70 hover:text-[#f3f1ec] uppercase transition-colors whitespace-nowrap"
              >
                {client}
              </span>
              <span className="text-white/20 text-xs">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
