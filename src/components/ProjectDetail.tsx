import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (slug: string) => void;
  onBackToWork: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToWork,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [timecode, setTimecode] = useState('00:00:00:00');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlaying(true);
  }, [project.slug]);

  // Find prev and next project
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const mins = Math.floor(cur / 60);
    const secs = Math.floor(cur % 60);
    const frames = Math.floor((cur % 1) * 24);
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    setTimecode(`00:${pad(mins)}:${pad(secs)}:${pad(frames)}`);
  };

  return (
    <article className="min-h-screen bg-[#080808] text-[#e8e6e1] select-none">
      {/* 1. Fullscreen Hero Video / Film Frame */}
      <section className="relative w-full h-[85vh] sm:h-[92vh] min-h-[500px] overflow-hidden bg-black flex flex-col justify-between">
        {/* Back Navigation Button */}
        <div className="relative z-20 pt-28 px-6 md:px-12 flex justify-between items-center text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
          <button
            onClick={onBackToWork}
            className="group flex items-center gap-2 text-[#8e8c85] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO ARCHIVE</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-white/80">{project.cameraSpecs.aspectRatio}</span>
          </div>
        </div>

        {/* Video Player */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src={project.heroVideo}
            poster={project.posterImage}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60 pointer-events-none" />
        </div>

        {/* Bottom Video Controls Overlay */}
        <div className="relative z-20 pb-8 px-6 md:px-12 flex justify-between items-end text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:border-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Film' : 'Play Film'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:border-white transition-colors cursor-pointer"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="hidden sm:inline text-white/70">{timecode}</span>
          </div>

          <div className="text-right">
            <span className="text-white/40 text-[10px] block">EXP. {project.year}</span>
            <span className="text-[#f4f3ef] uppercase text-xs">{project.category}</span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Title & Overview */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] text-[#8e8c85] uppercase">
              <span>{project.brand}</span>
              <span>/</span>
              <span>{project.year}</span>
              {project.curatorNote && (
                <>
                  <span>/</span>
                  <span className="text-amber-400 font-semibold">{project.curatorNote}</span>
                </>
              )}
            </div>

            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.02em] text-[#f4f3ef] uppercase leading-[0.95]"
            >
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-light text-[#c2bfb6] leading-relaxed max-w-3xl pt-2">
              {project.synopsis}
            </p>
          </div>

          {/* Technical Camera Specifications */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4 font-mono text-xs">
            <p className="text-[10px] tracking-[0.3em] text-[#8e8c85] uppercase border-b border-white/10 pb-3">
              TECHNICAL SPECIFICATIONS
            </p>
            <div className="space-y-3 pt-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#8e8c85]">CAMERA SENSOR</span>
                <span className="text-white font-medium">{project.cameraSpecs.camera}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8c85]">OPTICS</span>
                <span className="text-white font-medium text-right">{project.cameraSpecs.lenses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8c85]">ASPECT RATIO</span>
                <span className="text-white font-medium">{project.cameraSpecs.aspectRatio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8c85]">CAPTURE FORMAT</span>
                <span className="text-white font-medium">{project.cameraSpecs.format}</span>
              </div>
              {project.cameraSpecs.colorGrade && (
                <div className="flex justify-between">
                  <span className="text-[#8e8c85]">COLOR GRADE</span>
                  <span className="text-white font-medium text-right">
                    {project.cameraSpecs.colorGrade}
                  </span>
                </div>
              )}
              {project.cameraSpecs.iso && (
                <div className="flex justify-between">
                  <span className="text-[#8e8c85]">NATIVE BASE</span>
                  <span className="text-white font-medium">{project.cameraSpecs.iso}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Credits Roll */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-12 border-b border-white/10">
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase">
            PRODUCTION CREDITS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6">
          {project.credits.map((credit, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#8e8c85] uppercase block">
                {credit.role}
              </span>
              <span
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-sm sm:text-base font-semibold text-[#f4f3ef] uppercase block"
              >
                {credit.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Curated Cinematographer's Treatment Book (Stills Gallery) */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] font-mono tracking-[0.35em] text-[#8e8c85] uppercase block mb-2">
              CINEMATOGRAPHY FRAMES
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-2xl sm:text-4xl font-bold uppercase text-[#f4f3ef]"
            >
              TREATMENT STILLS
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8e8c85] uppercase hidden sm:inline">
            GRADED IN D65 // ARRIRAW
          </span>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {project.stills.map((still, idx) => {
            return (
              <div key={idx} className="space-y-3">
                <div
                  className={`overflow-hidden bg-[#121212] border border-white/5 ${
                    still.span === 'portrait'
                      ? 'max-w-xl mx-auto aspect-[3/4]'
                      : still.span === 'half'
                      ? 'w-full aspect-[16/9]'
                      : 'w-full aspect-[2.39/1]'
                  }`}
                >
                  <img
                    src={still.url}
                    alt={still.caption || `Production still ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                  />
                </div>
                {still.caption && (
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-[#8e8c85] pt-1 px-1">
                    <span>FRAME // 0{idx + 1}</span>
                    <span className="text-right text-white/70">{still.caption}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Next Project Takeover Transition */}
      <section
        onClick={() => onSelectProject(nextProject.slug)}
        data-cursor="NEXT FILM"
        className="group relative w-full h-[65vh] min-h-[420px] overflow-hidden bg-black cursor-pointer flex items-center justify-center border-t border-white/10"
      >
        <img
          src={nextProject.posterImage}
          alt={nextProject.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-75 group-hover:scale-103 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl px-6 space-y-4">
          <span className="text-xs font-mono tracking-[0.4em] text-[#8e8c85] uppercase group-hover:text-amber-300 transition-colors">
            NEXT PROJECT ↗
          </span>
          <h3
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.05em] text-[#f4f3ef] uppercase group-hover:text-white transition-colors"
          >
            {nextProject.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#8e8c85] uppercase">
            {nextProject.brand} — {nextProject.year}
          </p>
        </div>
      </section>
    </article>
  );
};
