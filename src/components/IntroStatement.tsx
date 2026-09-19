import React from 'react';

export const IntroStatement: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 md:py-48 bg-[#050505] text-[#f3f1ec] overflow-hidden border-t border-white/[0.12]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        
        {/* Editorial Sub-index Header */}
        <div className="flex items-center justify-between pb-8 mb-14 sm:mb-20 border-b border-white/[0.12]">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
            01 // ARTISTIC STATEMENT &amp; PROFILE
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase hidden sm:inline">
            CAIRO • MIDDLE EAST &amp; NORTH AFRICA
          </span>
        </div>

        {/* Main Content Layout: Huge Typography Mixed with One Cropped Cinematic BTS Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Monumental Statement */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.01em] sm:tracking-[0.02em] leading-[0.96] text-[#f3f1ec] uppercase"
            >
              KARIM MOHAMED
              <br />
              IS AN EGYPTIAN
              <br />
              CINEMATOGRAPHER
              <br />
              <span className="text-[#8e8c85]">&amp; DIRECTOR</span>
              <br />
              OF PHOTOGRAPHY.
            </h2>

            {/* Concise Supporting Sentence */}
            <div className="pt-4 max-w-3xl space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#f3f1ec] leading-relaxed">
                Crafting light, movement and atmosphere across commercials, film, drama and visual storytelling.
              </p>
              <p className="text-sm sm:text-base font-light text-[#8e8c85] leading-relaxed max-w-2xl">
                Trained at the prestigious Higher Institute of Cinema in Cairo and forged on high-demand film sets alongside master Middle Eastern cinematographers. Karim combines organic lighting discipline with modern large-format digital optics.
              </p>
            </div>
          </div>

          {/* Right: One Smaller Cinematic Still / Cropped Behind-The-Scenes Frame */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-md space-y-3">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#0b0b0b] border border-white/[0.12] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop"
                  alt="Karim Mohamed on camera set"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                
                {/* Overlay Metadata Stamp */}
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-white/70">
                  <span>SET // CAIRO NIGHT INT.</span>
                  <span>OPTICS: ANAMORPHIC</span>
                </div>
              </div>

              {/* Caption */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] px-1 w-full">
                <span>FIG. 01 — CINEMA RIG</span>
                <span className="text-white/60">35MM FORMAT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
