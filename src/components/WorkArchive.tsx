import React, { useState, useRef, useEffect } from 'react';
import { Project, ProjectCategory } from '../types';
import { LayoutGrid, List } from 'lucide-react';

interface WorkArchiveProps {
  projects: Project[];
  initialCategory?: ProjectCategory;
  initialViewMode?: 'archive' | 'grid';
  onSelectProject: (slug: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'COMMERCIAL',
  'NARRATIVE',
  'FILMS',
  'MUSIC VIDEOS',
  'FASHION',
  'OTHER',
];

export const WorkArchive: React.FC<WorkArchiveProps> = ({
  projects,
  initialCategory = 'ALL',
  initialViewMode = 'archive',
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);
  const [viewMode, setViewMode] = useState<'archive' | 'grid'>(initialViewMode);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0] || null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  // Filter projects by category
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.category === selectedCategory;
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (previewVideoRef.current && hoveredProject) {
      previewVideoRef.current.currentTime = 0;
      previewVideoRef.current.play().catch(() => {});
    }
  }, [hoveredProject]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 md:pt-40 pb-32 bg-[#080808] select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Title & Archive Header */}
        <div className="mb-14 md:mb-20 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block mb-3">
              FILMOGRAPHY &amp; COMMERCIAL INDEX
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.05em] text-[#f4f3ef] uppercase"
            >
              ARCHIVE
            </h1>
          </div>

          {/* View Mode Toggle: List vs Grid */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setViewMode('archive')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
                viewMode === 'archive'
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#8e8c85] hover:text-white border border-white/10'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>INDEX</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#8e8c85] hover:text-white border border-white/10'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar pb-8 mb-12 border-b border-white/5 text-xs font-mono tracking-[0.2em] uppercase">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'ALL'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            if (cat !== 'ALL' && count === 0) return null;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white/10 text-white border border-white/30 font-semibold'
                    : 'text-[#8e8c85] hover:text-white border border-transparent'
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] ml-1.5 opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* ----------------- ARCHIVE LIST MODE ----------------- */}
        {viewMode === 'archive' && (
          <div className="relative">
            {/* Project rows */}
            <div className="divide-y divide-white/10">
              {filteredProjects.map((project, idx) => {
                const num = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
                const isHovered = hoveredProject?.id === project.id;

                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setHoveredProject(project)}
                    onClick={() => onSelectProject(project.slug)}
                    data-cursor="VIEW FILM"
                    className={`group py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer transition-colors ${
                      isHovered ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="text-xs font-mono tracking-[0.25em] text-[#8e8c85] group-hover:text-amber-400 transition-colors">
                        {num}
                      </span>
                      <div>
                        <h2
                          style={{ fontFamily: 'var(--font-display)' }}
                          className="text-xl sm:text-3xl md:text-4xl font-bold tracking-[0.02em] uppercase text-[#f4f3ef] group-hover:text-white transition-colors"
                        >
                          {project.title}
                        </h2>
                        <span className="text-xs sm:text-sm text-[#8e8c85] font-light tracking-[0.1em] mt-1 block">
                          {project.brand} {project.director ? `— Dir. ${project.director}` : ''}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 sm:gap-12 text-xs font-mono tracking-[0.2em] text-[#8e8c85] pl-16 md:pl-0">
                      <span className="uppercase text-white/50">{project.category}</span>
                      <span className="hidden lg:inline text-white/40">
                        {project.cameraSpecs.camera}
                      </span>
                      <span className="text-white/80">{project.year}</span>
                      <span className="text-[11px] group-hover:translate-x-1 group-hover:text-white transition-all">
                        ↗
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Floating Cinema Still / Video Preview Container */}
            {hoveredProject && (
              <div
                className="hidden lg:block fixed right-16 top-1/2 -translate-y-1/2 pointer-events-none z-30 transition-all duration-300 w-[420px] aspect-[2.39/1] overflow-hidden rounded shadow-2xl border border-white/20 bg-black"
                style={{
                  transform: `translate3d(0, ${Math.min(Math.max((mousePos.y - window.innerHeight / 2) * 0.15, -120), 120)}px, 0)`,
                }}
              >
                <img
                  src={hoveredProject.posterImage}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover"
                />
                <video
                  ref={previewVideoRef}
                  src={hoveredProject.hoverVideo || hoveredProject.heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-white">
                  <span>{hoveredProject.brand}</span>
                  <span>{hoveredProject.cameraSpecs.aspectRatio}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------- VISUAL GRID MODE ----------------- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.slug)}
                data-cursor="VIEW FILM"
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#121212] mb-3">
                  <img
                    src={project.posterImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 text-[9px] font-mono tracking-widest bg-black/60 px-2 py-0.5 border border-white/10 text-white/90">
                    {project.year}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/80">
                    <span className="uppercase">{project.category}</span>
                    <span>{project.cameraSpecs.aspectRatio}</span>
                  </div>
                </div>

                <div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-lg font-bold uppercase text-[#f4f3ef] group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8e8c85] tracking-wider mt-0.5">
                    {project.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
