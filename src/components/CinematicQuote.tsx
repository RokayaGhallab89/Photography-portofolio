import React from 'react';

export const CinematicQuote: React.FC = () => {
  return (
    <section className="relative w-full py-32 sm:py-44 md:py-56 bg-[#050505] text-[#f3f1ec] overflow-hidden select-none border-t border-b border-white/[0.12]">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-radial from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 text-center flex flex-col items-center justify-center">
        {/* Subtle Frame Marker */}
        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-mono tracking-[0.4em] text-[#8e8c85] uppercase mb-10 sm:mb-14">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span>PAUSE // ARTISTIC CREED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>

        {/* Full-Screen Monumental Typography */}
        <blockquote className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight sm:tracking-[0.02em] leading-[0.92] text-[#f3f1ec] uppercase"
          >
            EVERY FRAME
            <br />
            <span className="text-white/40">HAS A REASON.</span>
          </h2>

          <p
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-xl sm:text-3xl md:text-4xl italic font-light text-[#8e8c85] pt-4 sm:pt-6"
          >
            Light. Movement. Atmosphere. Story.
          </p>
        </blockquote>

        {/* Sub-label */}
        <div className="mt-12 sm:mt-16 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
          KARIM MOHAMED // DIRECTOR OF PHOTOGRAPHY
        </div>
      </div>
    </section>
  );
};
