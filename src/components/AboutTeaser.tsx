import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutTeaserProps {
  onReadStory: () => void;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ onReadStory }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 md:py-48 bg-[#050505] text-[#f3f1ec] overflow-hidden border-b border-white/[0.12]">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        
        {/* Editorial Sub-index */}
        <div className="flex items-center justify-between pb-8 mb-14 sm:mb-20 border-b border-white/[0.12]">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
            04 // BIOGRAPHY TEASER &amp; CRAFT
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase hidden sm:inline">
            HIGHER INSTITUTE OF CINEMA // CAIRO
          </span>
        </div>

        {/* Large Asymmetrical Spread (No Traditional Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Large Powerful Portrait / Behind-the-Scenes Cinematography Frame */}
          <div className="lg:col-span-7">
            <div
              onClick={onReadStory}
              data-cursor="BIOGRAPHY"
              className="group relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.1/1] overflow-hidden bg-[#0b0b0b] border border-white/[0.12] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=85&w=2200&auto=format&fit=crop"
                alt="Karim Mohamed Director of Photography behind camera"
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-115 brightness-95 group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 pointer-events-none" />
              
              {/* Floating Technical HUD Stamp */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-white/80">
                <span>ON SET // CAIRO 35MM CINEMA RIG</span>
                <span className="group-hover:text-amber-300 transition-colors">VIEW BIOGRAPHY ↗</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Typography Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block">
                BACKGROUND &amp; PHILOSOPHY
              </span>
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.95]"
              >
                ABOUT
                <br />
                KARIM
                <br />
                MOHAMED
              </h2>
            </div>

            {/* Very Short Introduction */}
            <div className="space-y-4 text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
              <p>
                An Egyptian Director of Photography whose visual language combines classical Mediterranean lighting traditions with contemporary international realism.
              </p>
              <p className="text-sm text-[#8e8c85]">
                Educated at Cairo's historic Higher Institute of Cinema. Over a decade behind anamorphic and spherical optics, framing narratives where light is not merely illumination, but the emotional truth of the scene.
              </p>
            </div>

            {/* READ STORY ↗ Action */}
            <div className="pt-2">
              <button
                onClick={onReadStory}
                data-cursor="READ"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#f3f1ec] hover:text-white border-b border-white/40 pb-2 transition-all cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform">READ STORY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
