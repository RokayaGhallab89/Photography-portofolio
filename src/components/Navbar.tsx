import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Play, Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenShowreel: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenShowreel,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (type: PageRoute['type']) => {
    return currentRoute.type === type;
  };

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 md:py-5 bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.12]'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 flex items-center justify-between">
          {/* Brand / Name */}
          <button
            onClick={() => handleLinkClick({ type: 'home' })}
            className="group flex flex-col text-left cursor-pointer select-none"
            aria-label="Karim Mohamed Home"
          >
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-xs md:text-sm tracking-[0.25em] font-semibold text-[#f4f3ef] uppercase group-hover:text-white transition-colors"
            >
              KARIM MOHAMED
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase transition-opacity">
              DIRECTOR OF PHOTOGRAPHY
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[11px] font-mono tracking-[0.25em] uppercase">
            <button
              onClick={() => handleLinkClick({ type: 'work' })}
              className={`transition-colors cursor-pointer py-1 ${
                isActive('work') || isActive('project')
                  ? 'text-white font-semibold'
                  : 'text-[#8e8c85] hover:text-white'
              }`}
            >
              WORK
            </button>
            <button
              onClick={() => handleLinkClick({ type: 'about' })}
              className={`transition-colors cursor-pointer py-1 ${
                isActive('about')
                  ? 'text-white font-semibold'
                  : 'text-[#8e8c85] hover:text-white'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick({ type: 'contact' })}
              className={`transition-colors cursor-pointer py-1 ${
                isActive('contact')
                  ? 'text-white font-semibold'
                  : 'text-[#8e8c85] hover:text-white'
              }`}
            >
              CONTACT
            </button>

            {/* Showreel Quick Action */}
            <button
              onClick={onOpenShowreel}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-current text-white" />
              <span>SHOWREEL ↗</span>
            </button>

            {/* Cinema Audio Drone Ambience Toggle */}
            <button
              onClick={onToggleAudio}
              className="text-[#8e8c85] hover:text-white transition-colors p-1 cursor-pointer"
              title={isAudioPlaying ? "Mute Cinema Ambience" : "Enable Cinema Ambience"}
              aria-label="Toggle Cinema Ambience"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenShowreel}
              className="px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono tracking-widest text-white flex items-center gap-1.5"
            >
              <Play className="w-2 h-2 fill-current" />
              <span>REEL</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1.5 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Cinematic Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="space-y-6">
            <p className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
              // NAVIGATION
            </p>
            <div className="flex flex-col space-y-5">
              <button
                onClick={() => handleLinkClick({ type: 'home' })}
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl font-bold tracking-[0.1em] text-left uppercase text-white"
              >
                INDEX
              </button>
              <button
                onClick={() => handleLinkClick({ type: 'work' })}
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl font-bold tracking-[0.1em] text-left uppercase text-white"
              >
                SELECTED WORK
              </button>
              <button
                onClick={() => handleLinkClick({ type: 'about' })}
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl font-bold tracking-[0.1em] text-left uppercase text-white"
              >
                ABOUT / BIO
              </button>
              <button
                onClick={() => handleLinkClick({ type: 'contact' })}
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl font-bold tracking-[0.1em] text-left uppercase text-white"
              >
                CONTACT
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10 font-mono text-xs text-[#8e8c85]">
            <div className="flex justify-between items-center">
              <span>CINEMA AMBIENCE</span>
              <button
                onClick={onToggleAudio}
                className="text-white uppercase tracking-wider flex items-center gap-1.5"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>MUTED: NO</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>MUTED: YES</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[#8e8c85]">
              CAIRO, EGYPT — MENA & INTERNATIONAL
            </div>
          </div>
        </div>
      )}
    </>
  );
};
