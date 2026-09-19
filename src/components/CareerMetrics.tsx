import React from 'react';
import { CAREER_STATS } from '../data/projects';

export const CareerMetrics: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 bg-[#050505] text-[#f3f1ec] overflow-hidden border-t border-b border-white/[0.12]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        
        {/* Editorial Sub-index Header */}
        <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-white/[0.12]">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
            03 // CAREER VOLUME &amp; RECORD
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase hidden sm:inline">
            NARRATIVE • COMMERCIAL • PRIME-TIME
          </span>
        </div>

        {/* Editorial Horizontal Stretched Typography Grid (No Cards!) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-0 lg:divide-x lg:divide-white/[0.12]">
          
          {/* Stat 1: Commercials */}
          <div className="flex flex-col justify-between py-4 lg:px-8 first:lg:pl-0">
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight text-[#f3f1ec] leading-none block"
            >
              {CAREER_STATS.commercials}
            </span>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#8e8c85] uppercase">
                {CAREER_STATS.commercialsLabel}
              </span>
              <span className="text-[10px] font-mono text-white/30 hidden sm:inline">01</span>
            </div>
          </div>

          {/* Stat 2: Films */}
          <div className="flex flex-col justify-between py-4 lg:px-8">
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight text-[#f3f1ec] leading-none block"
            >
              {CAREER_STATS.films}
            </span>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#8e8c85] uppercase">
                {CAREER_STATS.filmsLabel}
              </span>
              <span className="text-[10px] font-mono text-white/30 hidden sm:inline">02</span>
            </div>
          </div>

          {/* Stat 3: Drama Series */}
          <div className="flex flex-col justify-between py-4 lg:px-8">
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight text-[#f3f1ec] leading-none block"
            >
              {CAREER_STATS.series}
            </span>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#8e8c85] uppercase">
                {CAREER_STATS.seriesLabel}
              </span>
              <span className="text-[10px] font-mono text-white/30 hidden sm:inline">03</span>
            </div>
          </div>

          {/* Stat 4: Active Since */}
          <div className="flex flex-col justify-between py-4 lg:px-8 last:lg:pr-0">
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-mono text-[#8e8c85] uppercase">SINCE</span>
              <span
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight text-[#f3f1ec] leading-none block"
              >
                {CAREER_STATS.since}
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.28em] text-[#8e8c85] uppercase">
                {CAREER_STATS.sinceLabel}
              </span>
              <span className="text-[10px] font-mono text-white/30 hidden sm:inline">04</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
