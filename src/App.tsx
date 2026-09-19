import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS } from './data/projects';
import { PageRoute, ProjectCategory } from './types';
import { Navbar } from './components/Navbar';
import { HeroCinematic } from './components/HeroCinematic';
import { IntroStatement } from './components/IntroStatement';
import { SelectedWork } from './components/SelectedWork';
import { CareerMetrics } from './components/CareerMetrics';
import { AboutTeaser } from './components/AboutTeaser';
import { Clients } from './components/Clients';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { WorkArchive } from './components/WorkArchive';
import { ProjectDetail } from './components/ProjectDetail';
import { AboutView } from './components/AboutView';
import { ShowreelModal } from './components/ShowreelModal';
import { FilmGrain } from './components/FilmGrain';
import { FilmBurnTransition } from './components/FilmBurnTransition';
import { CinemaCursor } from './components/CinemaCursor';
import { OpeningLoader } from './components/OpeningLoader';
import { toggleCinemaAmbience } from './lib/cinemaAudio';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'home' });
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [transitionKey, setTransitionKey] = useState('init');
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  // Parse path to route
  const parsePathToRoute = useCallback((path: string): PageRoute => {
    const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
    if (cleanPath === '' || cleanPath === '/') {
      return { type: 'home' };
    }
    if (cleanPath === '/work') {
      return { type: 'work' };
    }
    if (cleanPath.startsWith('/work/')) {
      const slug = cleanPath.replace('/work/', '');
      return { type: 'project', slug };
    }
    if (cleanPath === '/about') {
      return { type: 'about' };
    }
    if (cleanPath === '/contact') {
      return { type: 'contact' };
    }
    return { type: 'home' };
  }, []);

  // Initialize route from window.location
  useEffect(() => {
    const initialRoute = parsePathToRoute(window.location.pathname);
    setCurrentRoute(initialRoute);

    const handlePopState = () => {
      const nextRoute = parsePathToRoute(window.location.pathname);
      setCurrentRoute(nextRoute);
      setTransitionKey(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parsePathToRoute]);

  // Navigate function updating URL
  const navigate = (route: PageRoute) => {
    let url = '/';
    if (route.type === 'work') {
      url = '/work';
    } else if (route.type === 'project') {
      url = `/work/${route.slug}`;
    } else if (route.type === 'about') {
      url = '/about';
    } else if (route.type === 'contact') {
      url = '/contact';
    }

    if (window.location.pathname !== url) {
      window.history.pushState({}, '', url);
    }
    setCurrentRoute(route);
    setTransitionKey(url + '-' + Date.now());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (slug: string) => {
    navigate({ type: 'project', slug });
  };

  const handleScrollToWork = () => {
    const workEl = document.getElementById('selected-work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ type: 'work' });
    }
  };

  const handleToggleAudio = () => {
    const active = toggleCinemaAmbience();
    setIsAudioPlaying(active);
  };

  // Find current project if in project view
  const currentProject =
    currentRoute.type === 'project'
      ? PROJECTS.find((p) => p.slug === currentRoute.slug) || PROJECTS[0]
      : null;

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f3f1ec] selection:bg-white selection:text-black">
      {/* 1. Cinematic Opening Loader (Frame Counter) */}
      <OpeningLoader onComplete={() => setIsLoaderFinished(true)} />

      {/* 2. Cinema Desktop Custom Cursor ("VIEW FILM" reticle) */}
      <CinemaCursor />

      {/* 3. Subtle 35mm Analog Film Grain Overlay */}
      <FilmGrain />

      {/* 4. Film Burn / Organic Exposure Flash on Route Switches */}
      <FilmBurnTransition triggerKey={transitionKey} />

      {/* 5. Minimal Editorial Fixed Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenShowreel={() => setShowreelOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* 6. Dynamic Main Page Views */}
      <main id="main-content" className="w-full">
        {/* HOMEPAGE VIEW */}
        {currentRoute.type === 'home' && (
          <>
            <HeroCinematic
              onScrollToWork={handleScrollToWork}
              onOpenShowreel={() => setShowreelOpen(true)}
            />
            <IntroStatement />
            <SelectedWork
              projects={PROJECTS}
              onSelectProject={handleSelectProject}
              onViewAllWork={() => navigate({ type: 'work' })}
            />
            <CareerMetrics />
            <AboutTeaser
              onReadStory={() => navigate({ type: 'about' })}
            />
            <Clients />
            <ContactCTA />
          </>
        )}

        {/* WORK ARCHIVE VIEW (/work) */}
        {currentRoute.type === 'work' && (
          <>
            <WorkArchive
              projects={PROJECTS}
              initialCategory={(currentRoute.category as ProjectCategory) || 'ALL'}
              initialViewMode={currentRoute.viewMode || 'archive'}
              onSelectProject={handleSelectProject}
            />
            <ContactCTA />
          </>
        )}

        {/* PROJECT DETAIL VIEW (/work/[slug]) */}
        {currentRoute.type === 'project' && currentProject && (
          <ProjectDetail
            project={currentProject}
            allProjects={PROJECTS}
            onSelectProject={handleSelectProject}
            onBackToWork={() => navigate({ type: 'work' })}
          />
        )}

        {/* ABOUT / BIOGRAPHY VIEW (/about) */}
        {currentRoute.type === 'about' && (
          <>
            <AboutView
              onContactClick={() => navigate({ type: 'contact' })}
              onOpenShowreel={() => setShowreelOpen(true)}
            />
            <ContactCTA />
          </>
        )}

        {/* CONTACT VIEW (/contact) */}
        {currentRoute.type === 'contact' && (
          <div className="pt-24 min-h-screen flex flex-col justify-between">
            <ContactCTA />
          </div>
        )}
      </main>

      {/* 7. Minimal Editorial Footer */}
      <Footer />

      {/* 8. Full Cinema Showreel Modal Player */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </div>
  );
}
