export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  idealClient: string;
  deliverables: string[];
  process: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "residential-styling",
    title: "Residential Styling",
    tagline: "Cultivated sanctuaries designed around personal cadence.",
    description:
      "Comprehensive interior curation for private residences, townhouses, and vacation homes. We orchestrate furniture, artwork, textiles, and lighting into cohesive environments that feel collected over generations.",
    idealClient: "Discerning homeowners seeking timeless elegance, bespoke character, and intentional living spaces.",
    deliverables: [
      "Concept mood boards and spatial layout schematics",
      "Full furniture, lighting, and art curation schedules",
      "Procurement management and white-glove installation",
      "Styling and accessory placement detailing"
    ],
    process: [
      "Discovery & Lifestyle Analysis",
      "Spatial & Material Schematics",
      "Sourcing & Artisan Commissioning",
      "White-Glove Turnkey Installation"
    ],
    icon: "Home"
  },
  {
    id: "hospitality-spaces",
    title: "Hospitality Spaces",
    tagline: "Immersive culinary and boutique hospitality environments.",
    description:
      "Memorable commercial atmospheres for boutique hotels, specialty coffee houses, and fine dining establishments. We balance brand narrative with commercial resilience and operational ergonomics.",
    idealClient: "Hospitality brands and restaurateurs aiming to create distinctive dining destinations with lasting atmosphere.",
    deliverables: [
      "Customer journey and seating capacity zoning",
      "Custom commercial banquette and joinery designs",
      "Commercial-grade material selection schedules",
      "Architectural lighting and acoustic treatments"
    ],
    process: [
      "Brand Narrative & Flow Mapping",
      "Schematic Design & Seating Plans",
      "Technical Millwork Drafting",
      "Coordination & Site Execution"
    ],
    icon: "UtensilsCrossed"
  },
  {
    id: "workspace-design",
    title: "Workspace Design",
    tagline: "Serene productivity environments for high-focus teams.",
    description:
      "Acoustically tuned, human-centric workspaces for creative studios, tech ateliers, and executive suites. We merge ergonomic science with warm residential aesthetics to inspire daily clarity.",
    idealClient: "Modern enterprises and creative agencies wishing to elevate focus, culture, and team wellbeing.",
    deliverables: [
      "Collaborative vs. quiet zone acoustic spatial planning",
      "Bespoke ergonomic desking and millwork details",
      "Circadian lighting schemes",
      "Storage, server, and presentation integration"
    ],
    process: [
      "Work Pattern & Team Workflow Audits",
      "Acoustic & Lighting Modeling",
      "Bespoke Joinery Prototyping",
      "Turnkey Fit-out & Handover"
    ],
    icon: "Briefcase"
  },
  {
    id: "material-finish-selection",
    title: "Material & Finish Selection",
    tagline: "Tactile material palettes grounded in honest craft.",
    description:
      "Specialized consultation for architects, developers, and homeowners seeking rigorous material integrity. We source natural stone slabs, sustainable timbers, mineral plasters, and architectural metals.",
    idealClient: "Architects and clients seeking exquisite, tactile material palettes that age with graceful patina.",
    deliverables: [
      "Physical sample box presentation",
      "Detailed specifications with supplier contacts",
      "Maintenance and aging guidance schedules",
      "Eco-certification and durability ratings"
    ],
    process: [
      "Architectural Language Review",
      "Physical Sample Sourcing",
      "Sensory & Durability Testing",
      "Specification Documentation"
    ],
    icon: "Palette"
  },
  {
    id: "custom-furniture-planning",
    title: "Custom Furniture Planning",
    tagline: "Singular heirloom pieces designed and built to measure.",
    description:
      "Design and fabrication oversight of bespoke furniture pieces. We collaborate with master woodworkers, stone carvers, and upholsterers to create one-of-a-kind heirlooms tailored precisely to room proportions.",
    idealClient: "Collectors and homeowners who demand bespoke proportions, rare timbers, and artisanal craftsmanship.",
    deliverables: [
      "1:1 scale construction joint drawings and 3D renderings",
      "Material provenance and grain matching selection",
      "Artisan workshop oversight and progress logs",
      "Certificate of authenticity and craft dossier"
    ],
    process: [
      "Proportional & Ergonomic Study",
      "Artisan Partner Selection",
      "Full-scale Mockups & Joinery Reviews",
      "Precision Delivery & Installation"
    ],
    icon: "Armchair"
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    tagline: "Strategic clarity and creative direction for evolving spaces.",
    description:
      "Intensive advisory sessions for clients needing high-level aesthetic guidance, art advisory, color consultancy, or layout optimization without committing to full turnkey management.",
    idealClient: "Homeowners and founders seeking expert curation, second opinions, or immediate aesthetic direction.",
    deliverables: [
      "Targeted design audit report",
      "Curated shopping and artisan sourcing guide",
      "Color and fabric swatch recommendations",
      "Step-by-step implementation roadmap"
    ],
    process: [
      "Pre-Session Questionnaire & Photo Review",
      "Dedicated 2-Hour Intensive Workshop",
      "Digital Action Blueprint Delivery",
      "Follow-up Q&A Session"
    ],
    icon: "Compass"
  }
];
