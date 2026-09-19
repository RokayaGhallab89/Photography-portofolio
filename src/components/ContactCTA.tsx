import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@kemokono.com";
  const phone = "+20 100 000 0000";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-section" className="relative w-full py-32 sm:py-44 md:py-56 bg-[#050505] text-[#f3f1ec] overflow-hidden border-t border-white/[0.12] select-none">
      {/* Subtle cinematic background silhouette texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2200&auto=format&fit=crop"
          alt="Cinematography dusk silhouette background"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        {/* Editorial Sub-index */}
        <div className="flex items-center justify-between pb-8 mb-16 sm:mb-24 border-b border-white/[0.12]">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
            05 // FILM OUTRO &amp; REPRESENTATION
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase hidden sm:inline">
            WORLDWIDE INQUIRIES // CAIRO BASE
          </span>
        </div>

        {/* Ending of a Film: Monumental Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">
          
          {/* Left: Giant Cinematic Statement */}
          <div className="lg:col-span-8 space-y-12">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.88]"
            >
              LET'S
              <br />
              CREATE
              <br />
              THE NEXT
              <br />
              <span className="text-white/40">FRAME.</span>
            </h2>

            {/* Direct Email Link with Copy Utility */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                data-cursor="EMAIL"
                className="group inline-flex items-center gap-3 text-xl sm:text-3xl md:text-4xl font-light text-[#f3f1ec] hover:text-white border-b border-white/40 pb-2 transition-colors"
              >
                <span>{email}</span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <button
                onClick={copyEmail}
                className="px-3 py-1.5 border border-white/20 text-[10px] font-mono tracking-widest text-[#8e8c85] hover:text-white hover:border-white/50 transition-colors flex items-center gap-1.5 cursor-pointer uppercase"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-white" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Channels & Production Base */}
          <div className="lg:col-span-4 space-y-12 lg:border-l lg:border-white/[0.12] lg:pl-10">
            {/* Primary Channels */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase block">
                DIRECT CHANNELS &amp; REEL CUTS
              </span>
              <div className="space-y-3 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase">
                <div>
                  <a
                    href="mailto:contact@kemokono.com"
                    className="text-[#8e8c85] hover:text-white flex items-center justify-between group transition-colors py-1 border-b border-white/5"
                  >
                    <span>EMAIL</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8e8c85] hover:text-white flex items-center justify-between group transition-colors py-1 border-b border-white/5"
                  >
                    <span>INSTAGRAM</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8e8c85] hover:text-white flex items-center justify-between group transition-colors py-1 border-b border-white/5"
                  >
                    <span>VIMEO (FULL CUTS)</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#8e8c85] hover:text-white flex items-center justify-between group transition-colors py-1 border-b border-white/5"
                  >
                    <span>CAIRO LINE</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Production Representation */}
            <div className="space-y-2 pt-4 border-t border-white/[0.12] text-xs font-mono text-[#8e8c85]">
              <span className="text-[10px] tracking-[0.25em] text-[#8e8c85] uppercase block">
                PRODUCTION BASE
              </span>
              <p className="text-[#f3f1ec] font-light leading-relaxed">
                Cairo, Egypt — Available across KSA, UAE, Europe &amp; International Sets
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
