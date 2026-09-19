import { Project } from '../types';

export const SHOWREEL_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";
// Ultra high quality cinematic preview videos (h.264 mp4, mobile safe, cross-browser)
export const CINEMA_HERO_REEL = "https://assets.mixkit.co/videos/preview/mixkit-dramatic-view-of-a-desert-sunset-with-sand-dunes-43840-large.mp4";

export const PROJECTS: Project[] = [
  {
    id: "mountain-view",
    slug: "mountain-view",
    title: "The Lighthouse Horizon",
    brand: "Mountain View",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-dramatic-view-of-a-desert-sunset-with-sand-dunes-43840-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 1,
    layoutType: "fullwidth",
    director: "Omar El Zohairy",
    productionCompany: "Good People Films",
    agency: "FP7 McCann Cairo",
    synopsis: "A sensorial meditation on the meeting of Aegean architecture and North Coast twilight. Shot on custom tuned anamorphic primes to render coastal mist with painterly halation and deep dimensional rolloff.",
    curatorNote: "Winner of Best Cinematography at Dubai Lynx 2024 (Craft Category).",
    cameraSpecs: {
      camera: "ARRI Alexa 35",
      lenses: "Hawk V-Lite 2x Anamorphic",
      aspectRatio: "2.39:1 CinemaScope",
      format: "4.6K Open Gate ARRIRAW",
      colorGrade: "FilmLight Baselight (5219 Print Emulation)",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Omar El Zohairy" },
      { role: "Executive Producer", name: "Khaled Zaki" },
      { role: "Production Designer", name: "Assem Ali" },
      { role: "Colorist", name: "Ahmed El Gendy" },
      { role: "Gaffer", name: "Tarek Saber" },
      { role: "1st AC / Focus Puller", name: "Mohamed Fathy" },
      { role: "Editor", name: "Baher Rasheed" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop",
        caption: "Opening frame — dawn mist across Ras El Hekma coastline at 2.39:1",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
        caption: "Natural bounce negative fill on travertine colonnade",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        caption: "Architecture framing in low-contrast ambient blue hour",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop",
        caption: "Wide anamorphic dusk landscape shot at T2.0 with minimal artificial sources",
        span: "ultrawide"
      }
    ]
  },
  {
    id: "abdul-samad-al-qurashi",
    slug: "abdul-samad-al-qurashi",
    title: "Scent of Eternity",
    brand: "Abdul Samad Al Qurashi",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-in-front-of-a-sunset-41484-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-smoke-and-fire-particles-in-slow-motion-42617-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 2,
    layoutType: "landscape-large",
    director: "Ali Ali",
    productionCompany: "Elephant Cairo",
    agency: "Leo Burnett MEA",
    synopsis: "An exploration of ancient Arabian oud distillation, capturing tactile textures of burning agarwood embers, smoke rising in 1000fps macro, and deep obsidian shadows punctuated by golden tungsten rim lights.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "Cooke Anamorphic /i Full Frame Plus SF",
      aspectRatio: "2.39:1",
      format: "4.5K ARRIRAW",
      colorGrade: "Warm Amber & Obsidian Noir",
      shutterAngle: "90° / 180°",
      iso: "EI 1280"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Ali Ali" },
      { role: "Phantom High-Speed Tech", name: "Youssef Nabil" },
      { role: "Production Designer", name: "Sherif Mostafa" },
      { role: "Colorist", name: "Marina Starke" },
      { role: "Sound Design", name: "Fady Garas" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop",
        caption: "Desert dune silhouette captured during 6-minute magic hour window",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
        caption: "Macro ember lighting through vintage cylindrical anamorphic glass",
        span: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
        caption: "Chiaroscuro portraiture with tungsten book lighting",
        span: "half"
      }
    ]
  },
  {
    id: "konty-fe-khayaly",
    slug: "konty-fe-khayaly",
    title: "Konty Fe Khayaly",
    brand: "Short Film / Cinema",
    year: "2023",
    category: "FILMS",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-tunnel-with-lights-passing-by-in-a-loop-42861-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-car-traveling-on-a-road-at-night-42878-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 3,
    layoutType: "two-column",
    director: "Ahmed Fawzi Saleh",
    productionCompany: "Red Star Films",
    synopsis: "A poignant psychological narrative unfolding in the dense alleyways of historic Cairo at 3:00 AM. Using practical street sodium vapor and gentle bounce cards to preserve the authentic emotional cadence of memory.",
    curatorNote: "Official Selection — Cairo International Film Festival & Clermont-Ferrand.",
    cameraSpecs: {
      camera: "Sony Venice 2 (Rialto System)",
      lenses: "Canon K35 Vintage Primes",
      aspectRatio: "1.85:1 European Theatrical",
      format: "8.6K X-OCN XT",
      colorGrade: "Kodak 2383 D65 Emulation",
      shutterAngle: "180°",
      iso: "Dual Base EI 3200"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Ahmed Fawzi Saleh" },
      { role: "Steadicam Operator", name: "Nader Galal" },
      { role: "Key Grip", name: "Sayed 'Kimo' Hassan" },
      { role: "Colorist", name: "Walter Volpatto" },
      { role: "Editor", name: "Dina Farouk" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1920&auto=format&fit=crop",
        caption: "Night exterior street sequence utilizing existing practical fixtures",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        caption: "Intimate two-shot framed through antique leaded glass",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop",
        caption: "Dawn light penetrating rain-washed apartment interior",
        span: "half"
      }
    ]
  },
  {
    id: "azimut",
    slug: "azimut",
    title: "Architects of Momentum",
    brand: "Azimut Global Assets",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42930-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-business-center-building-facade-at-night-42866-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 4,
    layoutType: "landscape-large",
    director: "Tarek El Erian",
    productionCompany: "The Producers Film",
    agency: "Publicis Middle East",
    synopsis: "High-contrast architectural cinematography spanning Cairo, Milan, and Dubai financial districts. Capturing geometric reflections, crystalline glass textures, and the relentless velocity of modern capital.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "ARRI / Zeiss Master Anamorphic",
      aspectRatio: "2.39:1",
      format: "4.5K Open Gate",
      colorGrade: "Cool Cobalt & Platinum Highlights",
      shutterAngle: "144° / 180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Tarek El Erian" },
      { role: "Drone Specialist", name: "Ahmed 'Zico' Adel" },
      { role: "Lighting Director", name: "Mahmoud Amer" },
      { role: "Colorist", name: "Charley Ingram" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
        caption: "Geometric symmetry of corporate glass towers at golden hour",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        caption: "Interior boardroom lighting using high-output diffused softboxes",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        caption: "Panoramic skyline transition at blue hour",
        span: "half"
      }
    ]
  },
  {
    id: "the-family-office-ksa",
    slug: "the-family-office-ksa",
    title: "Generations of Light",
    brand: "The Family Office – KSA",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-rocky-mountain-range-at-sunset-41487-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-sun-rays-passing-through-clouds-over-hills-41488-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 5,
    layoutType: "fullwidth",
    director: "Bader AlHomoud",
    productionCompany: "Muvi Studios Riyadh",
    synopsis: "Filmed across the dramatic sandstone canyons of AlUla and contemporary Riyadh architectures. Balancing natural solar flares with subtle bounce cards to render intimate multi-generational familial bonds.",
    cameraSpecs: {
      camera: "RED V-Raptor XL 8K VV",
      lenses: "Leitz HUGO Full Frame Primes",
      aspectRatio: "2.39:1",
      format: "8K RedCode RAW",
      colorGrade: "Warm Terracotta & Desert Sand",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Bader AlHomoud" },
      { role: "Location Manager", name: "Fahad Al-Saud" },
      { role: "Gaffer", name: "Hassan El Kourdi" },
      { role: "Colorist", name: "Emiliano Serantoni" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop",
        caption: "AlUla desert expanse captured with 28mm wide angle Leitz prime",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        caption: "Evening sky gradation over ancient stone formations",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1200&auto=format&fit=crop",
        caption: "Extreme closeup of artisanal craftsmanship in low backlight",
        span: "half"
      }
    ]
  },
  {
    id: "mens-club",
    slug: "mens-club",
    title: "Sartorial Nocturne",
    brand: "Men's Club",
    year: "2024",
    category: "FASHION",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-the-city-at-night-42863-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-young-man-posing-in-a-studio-under-colored-lights-42875-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 6,
    layoutType: "two-column",
    director: "Youssef Taha",
    productionCompany: "Blackbox Production",
    synopsis: "High-contrast editorial fashion campaign shot on location in downtown Cairo during a rain storm. Reflective asphalt, deep rich wool textures, tungsten pools of light, and stylized slow-motion tracking moves.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "Tribe7 Blackwing7 (T-Tuned)",
      aspectRatio: "1.33:1 Academy Format",
      format: "4.5K Open Gate",
      colorGrade: "Deep Monochromatic & Amber Accents",
      shutterAngle: "45° / 180°",
      iso: "EI 1600"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Youssef Taha" },
      { role: "Stylist", name: "Aya El-Dessouky" },
      { role: "Colorist", name: "Hany Magdy" },
      { role: "Grip", name: "Kareem Saber" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop",
        caption: "Rain soaked cobblestone framing in 1.33:1 Academy ratio",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
        caption: "Chiaroscuro portraiture with severe single-source side key",
        span: "portrait"
      }
    ]
  },
  {
    id: "eva-pharma-milga",
    slug: "eva-pharma-milga",
    title: "Pulse of Resilience",
    brand: "Eva Pharma / Milga",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-athlete-getting-ready-to-run-41480-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-in-a-dark-gym-41481-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
    featured: true,
    featuredOrder: 7,
    layoutType: "landscape-large",
    director: "Marwan Hamed",
    productionCompany: "Lighthouse Films",
    synopsis: "An energetic visual journey through the physical endurance of everyday Egyptian workers and athletes. Handheld camera movement with rhythmic breathing cues, naturalistic sweating textures, and dramatic dawn rays.",
    cameraSpecs: {
      camera: "ARRI Alexa 35",
      lenses: "ARRI Signature Primes",
      aspectRatio: "2.00:1 Univisium",
      format: "4.6K ARRIRAW",
      colorGrade: "Organic Filmstock Grain & True Skintones",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Marwan Hamed" },
      { role: "Production Designer", name: "Mohamed Attia" },
      { role: "Editor", name: "Ahmed Hafez" },
      { role: "Colorist", name: "Mahmoud Essam" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
        caption: "Industrial workshop dawn light streaming through glass clerestory",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
        caption: "Human texture portrait captured at T1.8 on 73mm Signature Prime",
        span: "half"
      }
    ]
  },
  {
    id: "al-marasem",
    slug: "al-marasem",
    title: "Fifth Square Epilogue",
    brand: "Al Marasem Development",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-reflective-windows-42931-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-sun-reflecting-in-the-glass-windows-of-a-building-42867-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Ahmed Al-Naggar",
    productionCompany: "Aroma Studios",
    synopsis: "Lyrical study of architectural stillness in New Cairo. Balancing brutalist shadow lines against translucent water features and warm cedar details under twilight skies.",
    cameraSpecs: {
      camera: "Sony Venice 2",
      lenses: "Cooke S7/i Full Frame Plus",
      aspectRatio: "2.39:1",
      format: "8.6K RAW",
      colorGrade: "Soft Sand & Slate Grey",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Ahmed Al-Naggar" },
      { role: "Colorist", name: "Sherif Fathy" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
        caption: "Architectural reflection pools at twilight",
        span: "full"
      }
    ]
  },
  {
    id: "ulker",
    slug: "ulker",
    title: "The Golden Moment",
    brand: "Ulker Biscuits",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-pouring-milk-into-a-cup-of-coffee-in-slow-motion-42864-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-baking-cookies-in-the-oven-42869-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Hazem El Biely",
    productionCompany: "Dejavu Films",
    synopsis: "Tactile high-speed macro food cinematography capturing golden crumbs, hot chocolate swirls, and warm family breakfast rituals lit with large muslin diffusion frames.",
    cameraSpecs: {
      camera: "Phantom Flex 4K + Alexa Mini LF",
      lenses: "Laowa 24mm Probe + Master Macros",
      aspectRatio: "16:9",
      format: "ProRes 4444 XQ",
      colorGrade: "Golden Honey & Cream",
      shutterAngle: "90°",
      iso: "EI 640"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Hazem El Biely" },
      { role: "Food Stylist", name: "Dina Morad" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop",
        caption: "1000fps liquid motion backlit through custom fiber optics",
        span: "full"
      }
    ]
  },
  {
    id: "kelloggs",
    slug: "kelloggs",
    title: "First Light",
    brand: "Kellogg's",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-running-on-a-sunny-morning-41482-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-pouring-orange-juice-into-a-glass-42870-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Mohamed Shaker",
    productionCompany: "The Planet Studios",
    synopsis: "High-vibrancy kinetic morning light captured with motorized Ronin 2 gimbal tracking through bustling Cairo streets and modern breakfast tables.",
    cameraSpecs: {
      camera: "RED V-Raptor 8K",
      lenses: "Atlas Orion Anamorphic",
      aspectRatio: "2.39:1",
      format: "8K RAW",
      colorGrade: "Vivid Morning Amber",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Mohamed Shaker" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1920&auto=format&fit=crop",
        caption: "Sun flare transition through morning kitchen windows",
        span: "full"
      }
    ]
  },
  {
    id: "egyptian-exchange",
    slug: "egyptian-exchange",
    title: "Century of Trust",
    brand: "The Egyptian Exchange (EGX)",
    year: "2023",
    category: "FILMS",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-historic-building-with-classical-columns-42871-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-people-walking-in-a-grand-marble-hall-42872-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Sherif El Bendary",
    productionCompany: "Film Clinic",
    synopsis: "Historic documentary film tracing over 140 years of the Cairo Stock Exchange. Utilizing historical optical filters, 35mm film simulation, and stately architectural tracking shots.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "Cooke Panchro/i Classic FF",
      aspectRatio: "1.66:1 Theatrical",
      format: "4.5K ARRIRAW",
      colorGrade: "Kodachrome 64 & Silver Halide Emulation",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Sherif El Bendary" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1920&auto=format&fit=crop",
        caption: "Grand trading hall marble colonnades lit with soft 18K Arrimax bounces",
        span: "full"
      }
    ]
  },
  {
    id: "coffee-lab",
    slug: "coffee-lab",
    title: "The Alchemy of Roast",
    brand: "Coffee Lab",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-roasting-coffee-beans-in-a-machine-42873-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-coffee-dripping-from-a-filter-42874-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Kareem El Shenawy",
    productionCompany: "Good People Films",
    synopsis: "Sensory cinema celebrating artisanal bean sourcing and flame roasting. Rich roasted umber tones, steam caught in crisp rim lights, and intimate macro details.",
    cameraSpecs: {
      camera: "Sony Venice 2",
      lenses: "Atlas Orion Anamorphic 2x",
      aspectRatio: "2.39:1",
      format: "8.6K RAW",
      colorGrade: "Smoked Espresso & Warm Cream",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Kareem El Shenawy" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop",
        caption: "Smoke curling through single spotlight beam at 120fps",
        span: "full"
      }
    ]
  },
  {
    id: "dubai-phone",
    slug: "dubai-phone",
    title: "City of Signals",
    brand: "Dubai Phone",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-street-with-neon-lights-42876-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-using-a-smartphone-at-night-42877-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Youssef Salem",
    productionCompany: "Tarek Nour Communications",
    synopsis: "A nocturnal sci-fi aesthetic blending anamorphic lens streaks with vibrant metropolitan neon pulses and high-speed motion control arm rigs.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "Todd-AO 2x Vintage Anamorphic",
      aspectRatio: "2.39:1",
      format: "4.5K ARRIRAW",
      colorGrade: "Cyan & Magenta Neon Noir",
      shutterAngle: "180°",
      iso: "EI 1280"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Youssef Salem" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop",
        caption: "Rain slicked neon reflections with horizontal blue anamorphic flare",
        span: "full"
      }
    ]
  },
  {
    id: "stopadol",
    slug: "stopadol",
    title: "The Release",
    brand: "Stopadol",
    year: "2024",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-woman-closing-her-eyes-in-peace-41483-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-sunlight-filtering-through-green-leaves-41485-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Tamer Ashry",
    productionCompany: "Kay-Oh Productions",
    synopsis: "Visualizing the sudden lifting of sensory tension through an expressive transition from claustrophobic low-key tungsten into expansive open-air golden sunlight.",
    cameraSpecs: {
      camera: "ARRI Alexa 35",
      lenses: "Zeiss Supreme Primes Radiance",
      aspectRatio: "2.00:1",
      format: "4.6K ARRIRAW",
      colorGrade: "Transition from Slate Blue to Golden Daylight",
      shutterAngle: "180°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Tamer Ashry" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        caption: "Serene sunlight breaking across face in 4K high resolution",
        span: "full"
      }
    ]
  },
  {
    id: "busch",
    slug: "busch",
    title: "Forged Precision",
    brand: "Busch Vacuum Solutions",
    year: "2023",
    category: "COMMERCIAL",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-welder-working-with-sparks-flying-in-a-dark-workshop-42879-large.mp4",
    hoverVideo: "https://assets.mixkit.co/videos/preview/mixkit-metal-gears-turning-in-slow-motion-42880-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    featured: false,
    layoutType: "landscape-large",
    director: "Karim El Shenawy",
    productionCompany: "Production House Germany / Cairo",
    synopsis: "Industrial cinematography elevating heavy machinery, laser milling, and metal quenching into a theatrical ballet of sparks and steel.",
    cameraSpecs: {
      camera: "ARRI Alexa Mini LF",
      lenses: "Cooke Anamorphic /i FF+",
      aspectRatio: "2.39:1",
      format: "4.5K ARRIRAW",
      colorGrade: "Gunmetal Steel & Sodium Spark",
      shutterAngle: "45°",
      iso: "EI 800"
    },
    credits: [
      { role: "Director of Photography", name: "Karim Mohamed" },
      { role: "Director", name: "Karim El Shenawy" }
    ],
    stills: [
      {
        url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
        caption: "Sparks cascading across molten steel ingot at 150fps",
        span: "full"
      }
    ]
  }
];

export const CLIENTS_LIST = [
  "MOUNTAIN VIEW",
  "EMAAR",
  "KELLOGG'S",
  "EVA PHARMA",
  "ABDUL SAMAD AL QURASHI",
  "AZIMUT",
  "THE FAMILY OFFICE KSA",
  "AL MARASEM",
  "ULKER",
  "UNIONAIRE",
  "MEN'S CLUB",
  "CENTRADA",
  "FOOM KSA",
  "DREEM",
  "SUDANI",
  "DUBAI PHONE",
  "THE EGYPTIAN EXCHANGE",
  "STOPADOL",
  "BUSCH",
  "EXCEPTION"
];

export const CAREER_STATS = {
  commercials: "300+",
  commercialsLabel: "TV COMMERCIALS",
  films: "10+",
  filmsLabel: "FEATURE & SHORT FILMS",
  series: "20+",
  seriesLabel: "DRAMA SERIES",
  since: "2016",
  sinceLabel: "ACTIVE SINCE"
};
