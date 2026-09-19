import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen opacity-[0.035] film-grain-overlay" 
    />
  );
};
