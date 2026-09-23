export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  address: string;
  city: string;
  email: string;
  phone: string;
  hours: string;
}

export const studioInfo: StudioInfo = {
  name: "Atelier North",
  tagline: "Architecture of Calm & Tactile Elegance",
  shortDescription:
    "Atelier North is an architectural interior styling consultancy crafting restrained, emotive spaces grounded in organic materials, daylight modulation, and enduring artisanal craft.",
  address: "Studio 402, North Terrace, Bandra West",
  city: "Mumbai & Pune, India",
  email: "curate@ateliernorth.studio",
  phone: "+91 22 8492 7300",
  hours: "Monday – Friday: 10:00 AM – 6:30 PM (By Appointment)"
};

export const brandPhilosophy = [
  {
    title: "Honest Materiality",
    description: "We favor raw, untreated textures that deepen with character over time—quarter-sawn oak, honed limestone, woven linen, and unlacquered bronze."
  },
  {
    title: "Sculptural Restraint",
    description: "Luxury is found in subtraction. By stripping away extraneous ornament, we uncover the serene geometric truth and emotional cadence of each volume."
  },
  {
    title: "Light as Medium",
    description: "Every surface is positioned to catch the changing poetry of the sun, casting gentle chiaroscuro shadows across limewash surfaces throughout the day."
  },
  {
    title: "Artisanal Continuity",
    description: "We bridge ancient joinery techniques and regional craft guilds with contemporary architectural sensibilities to create soulful heirlooms."
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Immersion & Spatial Discovery",
    description: "We listen to your daily rituals, aesthetic affinities, and natural habits, analyzing architectural light patterns and acoustic context.",
    deliverables: "Spatial Vision Dossier, Tactile Moodboard & Lifestyle Blueprint"
  },
  {
    number: "02",
    title: "Schematic Concept & Prototyping",
    description: "We draft measured plans, elevation studies, bespoke millwork details, and assemble a tactile material library of stone, timber, and weaves.",
    deliverables: "Full 2D/3D Schematics, Finish Schedule & Physical Swatch Box"
  },
  {
    number: "03",
    title: "Curated Procurement & Fabrication",
    description: "Collaborating with master cabinetmakers, stone masons, and international textile houses, every element is custom fabricated to exact specifications.",
    deliverables: "Production Milestones, Provenance Certificates & Quality Audits"
  },
  {
    number: "04",
    title: "White-Glove Turnkey Installation",
    description: "Our studio directors supervise complete styling, art hanging, architectural light balancing, and final touches down to scented botanical arrangements.",
    deliverables: "Turnkey Reveal, Care Manual & Ongoing Curatorial Support"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Elena Rostova",
    role: "Founding Principal & Creative Director",
    bio: "Educated in Copenhagen and Milan, Elena spent fifteen years directing residential ateliers before establishing Atelier North. Her signature lies in harmonizing Japanese wabi-sabi with Scandinavian modernism.",
    image: "/images/team-elena.jpg"
  },
  {
    name: "Marcus Vance",
    role: "Head of Architecture & Joinery",
    bio: "Marcus oversees architectural millwork, bespoke timber engineering, and structural finish execution, drawing upon his background in master timber joinery and digital fabrication.",
    image: "/images/team-marcus.jpg"
  },
  {
    name: "Sarah Kulkarni",
    role: "Director of Materiality & Sourcing",
    bio: "Sarah travels across artisanal stone quarries, regional handloom clusters, and antique auctions to discover rare finishes with authentic geological and cultural provenance.",
    image: "/images/team-sarah.jpg"
  }
];

export const statistics = [
  { value: "48+", label: "Bespoke Residences & Spaces Completed" },
  { value: "14", label: "International Design Accolades" },
  { value: "100%", label: "Artisanal Provenance & Natural Materials" },
  { value: "10", label: "Years of Curatorial Excellence" }
];
