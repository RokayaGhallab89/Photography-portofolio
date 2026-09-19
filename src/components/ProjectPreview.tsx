import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';

interface ProjectPreviewProps {
  project: Project;
  layoutVariant?: 'fullwidth' | 'landscape-large' | 'two-column' | 'cinema-banner';
  index: number;
  onSelectProject: (slug: string) => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  layoutVariant = 'landscape-large',
  index,
  onSelectProject,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Play video on hover
  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => {
          // Autoplay policy fallback
        });
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [isHovered]);

  const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <article
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectProject(project.slug)}
      data-cursor="VIEW FILM"
      className="group relative cursor-pointer block select-none"
    >
      {/* Media Canvas Container */}
      <div
        className={`relative overflow-hidden bg-[#121212] transition-transform duration-700 ease-out ${
          layoutVariant === 'fullwidth'
            ? 'w-full aspect-[21/9] sm:aspect-[2.39/1] min-h-[300px]'
            : layoutVariant === 'two-column'
            ? 'w-full aspect-[16/10]'
            : 'w-full aspect-[16/9] sm:aspect-[2.1/1]'
        }`}
      >
        {/* Cinematic Poster Image */}
        <img
          src={project.posterImage}
          alt={`${project.brand} — ${project.title}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isVideoPlaying ? 'opacity-0 scale-102' : 'opacity-90 group-hover:scale-103'
          }`}
        />

        {/* Video Hover Preview Layer */}
        <video
          ref={videoRef}
          src={project.hoverVideo || project.heroVideo}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Cinematic Letterbox / Shadow Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

        {/* Top Floating Badge: Index & Aspect Ratio */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#e8e6e1]/80 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-white/40">{indexStr} //</span>
            <span className="uppercase">{project.category}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 text-white/90">
            {project.cameraSpecs.aspectRatio}
          </div>
        </div>

        {/* Bottom Floating Technical Details (Camera & Lenses) */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end pointer-events-none">
          <div className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] hidden sm:block">
            <span>{project.cameraSpecs.camera}</span>
            <span className="mx-2 text-white/20">|</span>
            <span>{project.cameraSpecs.lenses}</span>
          </div>

          <div className="text-[10px] font-mono tracking-[0.25em] text-white/90 uppercase flex items-center gap-1.5 ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-amber-300 transition-colors" />
            <span className="group-hover:translate-x-0.5 transition-transform">EXP. {project.year}</span>
          </div>
        </div>
      </div>

      {/* Project Editorial Metadata Below Image */}
      <div className="pt-5 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 group-hover:border-white/30 transition-colors">
        <div>
          <div className="flex items-center gap-3">
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.02em] text-[#f4f3ef] uppercase group-hover:text-white transition-colors"
            >
              {project.title}
            </h3>
            {project.curatorNote && (
              <span className="hidden md:inline text-[9px] font-mono tracking-[0.2em] text-amber-400/90 border border-amber-400/30 px-2 py-0.5 rounded">
                AWARDED
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-[#8e8c85] tracking-[0.1em] mt-1 font-light">
            {project.brand} {project.director ? `— Dir. ${project.director}` : ''}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-[#8e8c85]">
          <span className="text-white/60">{project.year}</span>
          <span className="text-[11px] group-hover:translate-x-1 group-hover:text-white transition-all">
            VIEW FILM ↗
          </span>
        </div>
      </div>
    </article>
  );
};
