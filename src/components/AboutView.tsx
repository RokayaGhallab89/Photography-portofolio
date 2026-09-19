import React from 'react';
import { CAREER_STATS, CLIENTS_LIST } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onContactClick: () => void;
  onOpenShowreel: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onContactClick,
  onOpenShowreel,
}) => {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-32 bg-[#080808] text-[#e8e6e1] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Top Title */}
        <div className="mb-14 md:mb-20 pb-8 border-b border-white/10">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block mb-3">
            BIOGRAPHY &amp; ARTISTIC PROFILE
          </span>
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-[0.05em] text-[#f4f3ef] uppercase leading-[0.9]"
          >
            KARIM
            <br />
            MOHAMED
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#8e8c85] uppercase mt-4">
            CINEMATOGRAPHER / DIRECTOR OF PHOTOGRAPHY
          </p>
        </div>

        {/* Large Portrait / Behind-the-Scenes Cinematography Frame */}
        <div className="mb-20 md:mb-28 overflow-hidden bg-[#121212] aspect-[16/9] sm:aspect-[2.39/1] border border-white/10 relative">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop"
            alt="Karim Mohamed on set with cinema camera"
            className="w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-white/80">
            <span>LOCATION: CAIRO FILM SET</span>
            <span>ARRI ALEXA MINI LF // ANAMORPHIC</span>
          </div>
        </div>

        {/* Editorial Content Sections (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Left Column: Story & Background */}
          <div className="lg:col-span-8 space-y-16">
            {/* 1. Introduction */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block">
                01 // INTRODUCTION
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#f4f3ef] leading-relaxed">
                Karim Mohamed Abdel-Fattah is an Egyptian Director of Photography whose visual language bridges classical Middle Eastern storytelling with international cinematic realism.
              </p>
              <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed pt-2">
                Beginning his professional cinematography career in 2016, Karim has established a distinguished body of work spanning high-end television commercials, award-winning festival narrative films, and landmark prime-time television drama series.
              </p>
            </div>

            {/* 2. Academic & Apprenticeship */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block">
                02 // ACADEMIC &amp; MASTER APPRENTICESHIP
              </span>
              <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
                Karim studied the art and technical sciences of motion-picture cinematography at the prestigious Higher Institute of Cinema in Cairo—the historical cradle of Arab cinema.
              </p>
              <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
                During his formative years, he trained and worked alongside leading Egyptian and Middle Eastern master cinematographers on demanding multi-camera feature films and television series, internalizing a deep respect for naturalistic illumination, shadow modulation, and disciplined camera blocking.
              </p>
            </div>

            {/* 3. Narrative & Festival Recognition */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block">
                03 // NARRATIVE CINEMA &amp; FESTIVAL RECOGNITION
              </span>
              <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
                Alongside high-profile commercial campaigns, Karim’s cinematography on narrative short films has been officially selected and recognized at prominent regional and international film festivals, earning critical praise for evocative atmospheric night photography and sensitive character framing.
              </p>
            </div>

            {/* 4. Philosophy of Light & Optics */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block">
                04 // PHILOSOPHY OF OPTICS &amp; LIGHT
              </span>
              <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
                "Light is not merely illumination—it is the emotional subtext of the frame. Whether capturing the searing midday sun of the Sahara or the gentle amber bounce of a night interior in historic Cairo, our goal is always truthfulness: framing humanity with reverence and textural depth."
              </p>
            </div>
          </div>

          {/* Right Column: Career Numbers & Quick Actions */}
          <div className="lg:col-span-4 space-y-12 lg:border-l lg:border-white/10 lg:pl-10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block mb-6">
                CAREER VOLUME AT A GLANCE
              </span>
              <div className="space-y-8">
                <div>
                  <span
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-4xl sm:text-5xl font-bold text-[#f4f3ef] block"
                  >
                    {CAREER_STATS.commercials}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] uppercase block mt-1">
                    {CAREER_STATS.commercialsLabel}
                  </span>
                </div>

                <div>
                  <span
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-4xl sm:text-5xl font-bold text-[#f4f3ef] block"
                  >
                    {CAREER_STATS.films}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] uppercase block mt-1">
                    {CAREER_STATS.filmsLabel}
                  </span>
                </div>

                <div>
                  <span
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-4xl sm:text-5xl font-bold text-[#f4f3ef] block"
                  >
                    {CAREER_STATS.series}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] uppercase block mt-1">
                    {CAREER_STATS.seriesLabel}
                  </span>
                </div>

                <div>
                  <span
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-4xl sm:text-5xl font-bold text-[#f4f3ef] block"
                  >
                    {CAREER_STATS.since}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] uppercase block mt-1">
                    {CAREER_STATS.sinceLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <button
                onClick={onOpenShowreel}
                className="w-full py-3 px-4 border border-white/20 hover:border-white text-xs font-mono tracking-[0.25em] text-[#f4f3ef] hover:bg-white/5 transition-all text-center uppercase cursor-pointer"
              >
                PLAY SHOWREEL ↗
              </button>
              <button
                onClick={onContactClick}
                className="w-full py-3 px-4 bg-white text-black text-xs font-mono tracking-[0.25em] font-semibold hover:bg-[#e8e6e1] transition-all text-center uppercase cursor-pointer"
              >
                INQUIRE BOOKING →
              </button>
            </div>
          </div>
        </div>

        {/* Selected Clients Typography Wall */}
        <div className="pt-16 border-t border-white/10">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block mb-8">
            SELECT CLIENT &amp; AGENCY COLLABORATIONS
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm sm:text-lg font-mono tracking-[0.15em] text-[#8e8c85]">
            {CLIENTS_LIST.map((client, idx) => (
              <span key={idx} className="hover:text-white transition-colors">
                {client}
                {idx < CLIENTS_LIST.length - 1 && (
                  <span className="text-white/20 ml-8">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
