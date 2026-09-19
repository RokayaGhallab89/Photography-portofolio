import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Play } from 'lucide-react';
import { CinematicQuote } from './CinematicQuote';

interface SelectedWorkProps {
  projects: Project[];
  onSelectProject: (slug: string) => void;
  onViewAllWork: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
  onViewAllWork,
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Extract flagship projects
  const p1 = projects.find((p) => p.slug === 'mountain-view') || projects[0];
  const p2 = projects.find((p) => p.slug === 'abdul-samad-al-qurashi') || projects[1];
  const p3 = projects.find((p) => p.slug === 'konty-fe-khayaly') || projects[2];
  const p4 = projects.find((p) => p.slug === 'azimut') || projects[3];
  const p5 = projects.find((p) => p.slug === 'the-family-office-ksa') || projects[4];

  return (
    <section id="selected-work" className="relative w-full bg-[#050505] text-[#f3f1ec] select-none">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. INTENTIONAL SELECTED WORK INTRODUCTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 border-t border-white/[0.12]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 border-b border-white/[0.12]">
          <div className="lg:col-span-8">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block mb-4">
              02 // CURATED FILMOGRAPHY
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.9]"
            >
              SELECTED
              <br />
              WORK
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-3">
            <p className="text-base sm:text-lg font-light text-[#c2bfb6] leading-relaxed">
              A curated selection of commercial, narrative and visual projects.
            </p>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#8e8c85] uppercase flex items-center gap-4 pt-2">
              <span>2016 — 2026</span>
              <span className="text-white/20">/</span>
              <span>DIRECTOR OF PHOTOGRAPHY</span>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. PROJECT 01 — FULL WIDTH HERO-SCALE CINEMATIC STILL
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {p1 && (
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mb-28 sm:mb-40">
          <ProjectFullWidth
            project={p1}
            index="01"
            isActiveVideo={activeVideoId === p1.id}
            onHoverStart={() => setActiveVideoId(p1.id)}
            onHoverEnd={() => setActiveVideoId(null)}
            onSelect={() => onSelectProject(p1.slug)}
          />
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. PROJECT 02 & PROJECT 03 — ASYMMETRICAL EDITORIAL SPREAD
          (Project 02 large left / Project 03 smaller right)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 mb-28 sm:mb-40 space-y-28 sm:space-y-36">
        
        {/* PROJECT 02 — LARGE IMAGE ALIGNED LEFT */}
        {p2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: 8 cols large image */}
            <div className="lg:col-span-8">
              <ProjectEditorialItem
                project={p2}
                index="02"
                aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
                isActiveVideo={activeVideoId === p2.id}
                onHoverStart={() => setActiveVideoId(p2.id)}
                onHoverEnd={() => setActiveVideoId(null)}
                onSelect={() => onSelectProject(p2.slug)}
              />
            </div>

            {/* Right: 4 cols editorial metadata & typography */}
            <div className="lg:col-span-4 space-y-6 lg:pl-6">
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase">
                <span>PROJECT // 02</span>
                <span className="text-white/20">/</span>
                <span>{p2.category}</span>
              </div>

              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.95]"
              >
                {p2.brand}
              </h3>

              <p
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-lg sm:text-xl italic text-white/70"
              >
                "{p2.title}"
              </p>

              <p className="text-sm text-[#8e8c85] font-light leading-relaxed">
                {p2.synopsis}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(p2.slug)}
                  data-cursor="VIEW FILM"
                  className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-[#f3f1ec] hover:text-white border-b border-white/30 pb-1 cursor-pointer"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 03 — SMALLER IMAGE ALIGNED RIGHT */}
        {p3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: 5 cols typography & negative space */}
            <div className="lg:col-span-5 space-y-6 lg:pr-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] text-[#8e8c85] uppercase">
                <span>PROJECT // 03</span>
                <span className="text-white/20">/</span>
                <span>{p3.category}</span>
              </div>

              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.95]"
              >
                {p3.title}
              </h3>

              <p
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-lg sm:text-xl italic text-white/70"
              >
                {p3.brand}
              </p>

              <p className="text-sm text-[#8e8c85] font-light leading-relaxed">
                {p3.synopsis}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(p3.slug)}
                  data-cursor="VIEW FILM"
                  className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-[#f3f1ec] hover:text-white border-b border-white/30 pb-1 cursor-pointer"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: 7 cols smaller, intimate offset frame */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex justify-end">
              <div className="w-full max-w-2xl">
                <ProjectEditorialItem
                  project={p3}
                  index="03"
                  aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                  isActiveVideo={activeVideoId === p3.id}
                  onHoverStart={() => setActiveVideoId(p3.id)}
                  onHoverEnd={() => setActiveVideoId(null)}
                  onSelect={() => onSelectProject(p3.slug)}
                />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. CINEMATIC TEXT MOMENT (ARTISTIC PAUSE)
          "EVERY FRAME HAS A REASON"
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <CinematicQuote />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. PROJECT 04 & PROJECT 05
          (Project 04 almost full viewport / Project 05 horizontal cinematic frame)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="pt-28 sm:pt-40 pb-24 sm:pb-36 max-w-[1720px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-28 sm:space-y-40">
        
        {/* PROJECT 04 — ALMOST FULL VIEWPORT */}
        {p4 && (
          <div className="space-y-6">
            <div className="px-2 sm:px-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block mb-1">
                  04 // ARCHITECTURAL SCALE
                </span>
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#f3f1ec]"
                >
                  {p4.brand} — {p4.title}
                </h3>
              </div>
              <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#8e8c85] uppercase">
                {p4.category} • {p4.year}
              </div>
            </div>

            <div className="w-full">
              <ProjectFullWidth
                project={p4}
                index="04"
                aspectRatio="aspect-[16/9] sm:aspect-[2.1/1]"
                isActiveVideo={activeVideoId === p4.id}
                onHoverStart={() => setActiveVideoId(p4.id)}
                onHoverEnd={() => setActiveVideoId(null)}
                onSelect={() => onSelectProject(p4.slug)}
              />
            </div>
          </div>
        )}

        {/* PROJECT 05 — HORIZONTAL CINEMATIC FRAME */}
        {p5 && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex justify-between items-baseline px-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block">
                  05 // MONUMENTAL PANORAMA
                </span>
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-2xl sm:text-4xl font-bold uppercase text-[#f3f1ec] mt-1"
                >
                  {p5.brand}
                </h3>
              </div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
                EXP. {p5.year}
              </span>
            </div>

            <ProjectEditorialItem
              project={p5}
              index="05"
              aspectRatio="aspect-[2.39/1]"
              isActiveVideo={activeVideoId === p5.id}
              onHoverStart={() => setActiveVideoId(p5.id)}
              onHoverEnd={() => setActiveVideoId(null)}
              onSelect={() => onSelectProject(p5.slug)}
            />
          </div>
        )}

        {/* Bottom Archive Transition Prompt */}
        <div className="pt-20 text-center border-t border-white/[0.12]">
          <button
            onClick={onViewAllWork}
            data-cursor="ALL WORK"
            className="group inline-flex flex-col items-center gap-4 cursor-pointer"
          >
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.4em] text-[#8e8c85] uppercase group-hover:text-[#f3f1ec] transition-colors">
              EXPLORE COMPLETE ARCHIVE (30+ PROJECTS)
            </span>
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#f3f1ec] group-hover:text-white transition-colors"
            >
              VIEW ALL WORK ↗
            </span>
          </button>
        </div>

      </div>

    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   PROJECT 01 & 04: FULL-WIDTH CINEMATIC STILL (HERO SCALE)
   ───────────────────────────────────────────────────────────── */
interface ProjectFullWidthProps {
  project: Project;
  index: string;
  aspectRatio?: string;
  isActiveVideo: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelect: () => void;
}

const ProjectFullWidth: React.FC<ProjectFullWidthProps> = ({
  project,
  index,
  aspectRatio = 'aspect-[16/9] sm:aspect-[2.39/1]',
  isActiveVideo,
  onHoverStart,
  onHoverEnd,
  onSelect,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActiveVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isActiveVideo]);

  return (
    <article
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      data-cursor="VIEW FILM"
      className="group relative w-full overflow-hidden bg-[#0b0b0b] border border-white/[0.12] cursor-pointer"
    >
      {/* Visual Canvas Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
        {/* Still Frame Image */}
        <img
          src={project.posterImage}
          alt={`${project.brand} — ${project.title}`}
          loading="lazy"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isActiveVideo ? 'opacity-0 scale-101' : 'opacity-90 group-hover:scale-103'
          }`}
        />

        {/* Video Preview Layer */}
        <video
          ref={videoRef}
          src={project.hoverVideo || project.heroVideo}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isActiveVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75" />

        {/* Overlay Editorial Typography & Index */}
        <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between pointer-events-none">
          {/* Top Info */}
          <div className="flex justify-between items-start text-[10px] sm:text-xs font-mono tracking-[0.3em] text-white/80 uppercase">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold">{index}</span>
              <span className="text-white/30">/</span>
              <span>{project.category}</span>
            </div>
            <div className="bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10 text-white/90">
              {project.cameraSpecs.aspectRatio}
            </div>
          </div>

          {/* Bottom Title & Specs */}
          <div className="space-y-3">
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f3f1ec] uppercase leading-[0.9] group-hover:text-white transition-colors"
            >
              {project.brand}
            </h3>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/20">
              <p
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-base sm:text-xl md:text-2xl italic text-white/90 font-light"
              >
                {project.title}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
                <span>EXP. {project.year}</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">
                  VIEW PROJECT ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ─────────────────────────────────────────────────────────────
   PROJECT 02, 03 & 05: EDITORIAL ASYMMETRICAL ITEM
   ───────────────────────────────────────────────────────────── */
interface ProjectEditorialItemProps {
  project: Project;
  index: string;
  aspectRatio?: string;
  isActiveVideo: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelect: () => void;
}

const ProjectEditorialItem: React.FC<ProjectEditorialItemProps> = ({
  project,
  index,
  aspectRatio = 'aspect-[16/10]',
  isActiveVideo,
  onHoverStart,
  onHoverEnd,
  onSelect,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActiveVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isActiveVideo]);

  return (
    <article
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      data-cursor="VIEW FILM"
      className="group relative w-full overflow-hidden bg-[#0b0b0b] border border-white/[0.12] cursor-pointer"
    >
      <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
        {/* Still Frame */}
        <img
          src={project.posterImage}
          alt={`${project.brand} — ${project.title}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isActiveVideo ? 'opacity-0 scale-101' : 'opacity-90 group-hover:scale-103'
          }`}
        />

        {/* Video Preview */}
        <video
          ref={videoRef}
          src={project.hoverVideo || project.heroVideo}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isActiveVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#e8e6e1]/90 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-white/60">{index} //</span>
            <span className="uppercase">{project.category}</span>
          </div>
          <span className="text-[9px] bg-black/60 px-2 py-0.5 border border-white/10 uppercase">
            {project.cameraSpecs.aspectRatio}
          </span>
        </div>

        {/* Bottom Floating Technical Details */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end pointer-events-none">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] hidden sm:block">
            {project.cameraSpecs.camera}
          </span>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase group-hover:translate-x-1 transition-transform ml-auto">
            EXP. {project.year} ↗
          </span>
        </div>
      </div>
    </article>
  );
};
