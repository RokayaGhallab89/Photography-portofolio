import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 md:py-16 bg-[#050505] border-t border-white/[0.12] text-[11px] font-mono tracking-[0.25em] text-[#8e8c85] uppercase">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-[#f4f3ef] font-semibold block text-xs tracking-[0.25em]">
            KARIM MOHAMED
          </span>
          <span className="text-[10px] text-[#8e8c85] block mt-0.5">
            CINEMATOGRAPHER • CAIRO — EGYPT
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[#8e8c85]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            VIMEO
          </a>
          <a
            href="mailto:contact@kemokono.com"
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-white/40">© {currentYear} ALL RIGHTS RESERVED</span>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
