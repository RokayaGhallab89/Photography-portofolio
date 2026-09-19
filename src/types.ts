export type ProjectCategory = 
  | 'ALL'
  | 'COMMERCIAL'
  | 'NARRATIVE'
  | 'FILMS'
  | 'MUSIC VIDEOS'
  | 'FASHION'
  | 'OTHER';

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface CameraSpecs {
  camera: string;
  lenses: string;
  aspectRatio: string;
  format: string;
  colorGrade?: string;
  shutterAngle?: string;
  iso?: string;
}

export interface ProjectStill {
  url: string;
  caption?: string;
  span?: 'full' | 'half' | 'portrait' | 'ultrawide';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  brand: string;
  year: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  heroVideo: string;
  hoverVideo: string;
  posterImage: string;
  featured: boolean;
  featuredOrder?: number;
  layoutType?: 'landscape-large' | 'fullwidth' | 'two-column' | 'split-vertical' | 'cinema-banner';
  director?: string;
  productionCompany?: string;
  agency?: string;
  synopsis: string;
  curatorNote?: string;
  cameraSpecs: CameraSpecs;
  credits: ProjectCredit[];
  stills: ProjectStill[];
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'work'; category?: ProjectCategory; viewMode?: 'archive' | 'grid' }
  | { type: 'project'; slug: string }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'showreel' };
