export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: "Residential" | "Hospitality" | "Workspace";
  description: string;
  longDescription: string;
  designApproach: string;
  tags: string[];
  services: string[];
  materials: string[];
  highlights: string[];
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "willow-house",
    title: "Willow House",
    location: "Pune, Maharashtra",
    year: 2024,
    category: "Residential",
    description: "A sanctuary of warm timber and rough-hewn natural stone, seamlessly blending indoor living with an olive tree courtyard.",
    longDescription:
      "Commissioned by a family of artists, Willow House was conceived as an unhurried retreat from urban bustle. We stripped away excess partitions to celebrate natural circulation, bringing gentle western sunlight across tactile limewash walls, custom quarter-sawn oak cabinetry, and monolith limestone counters. Every piece was calibrated to feel rooted, grounded, and timeless.",
    designApproach:
      "By harmonizing monolithic stone volumes with delicate cane joinery, the residence establishes visual weight while maintaining light and breathable spatial flow.",
    tags: ["Residential", "Minimalism", "Natural Stone", "Warm Timber", "Courtyard"],
    services: ["Residential Styling", "Material & Finish Selection", "Custom Furniture Planning"],
    materials: ["Quarter-sawn White Oak", "Travertine & Limestone", "Lime Plaster Walls", "Belgian Linen"],
    highlights: [
      "Monolithic waterfall kitchen island in honed silver travertine",
      "Floor-to-ceiling slim-profile steel apertures overlooking private gardens",
      "Bespoke solid oak dining ensemble crafted with artisanal wood joints",
      "Concealed architectural lighting with museum-grade CRI 98 fidelity"
    ],
    coverImage: "/images/willow-house.jpg",
    images: ["/images/willow-house.jpg", "/images/hero.jpg", "/images/elm-courtyard.jpg"]
  },
  {
    slug: "meridian-cafe",
    title: "Meridian Café",
    location: "Bengaluru, Karnataka",
    year: 2023,
    category: "Hospitality",
    description: "An artisan coffee atelier celebrating daylit terracotta, curved plaster banquettes, and tactile fluted oak detailing.",
    longDescription:
      "Meridian Café transforms a corner warehouse in Bengaluru into an intimate coffee roastery and gathering sanctuary. The spatial experience revolves around a sweeping fluted oak brew bar and continuous hand-troweled lime banquettes that soften acoustic reverberation while inviting leisurely conversation. Terracotta floor pavers sourced from regional kilns ground the airy palette.",
    designApproach:
      "A delicate balance between commercial durability and residential intimacy, anchored by curved contours and warm daylight modulation.",
    tags: ["Hospitality", "Café", "Terracotta", "Fluted Oak", "Acoustic Design"],
    services: ["Hospitality Spaces", "Material & Finish Selection", "Custom Furniture Planning"],
    materials: ["Handmade Terracotta Tiles", "Fluted White Oak", "Natural Microcement", "Brushed Brass"],
    highlights: [
      "Custom 7-meter curved fluted oak brew station with integrated drip trays",
      "Sculptural built-in wall niches showcasing handcrafted ceramic vessels",
      "Woven rattan pendants emitting a welcoming 2400K golden aura",
      "Dual acoustic plaster layering to maintain tranquil ambient soundscapes"
    ],
    coverImage: "/images/meridian-cafe.jpg",
    images: ["/images/meridian-cafe.jpg", "/images/hero.jpg", "/images/cedar-lane.jpg"]
  },
  {
    slug: "cedar-lane-studio",
    title: "Cedar Lane Studio",
    location: "Ahmedabad, Gujarat",
    year: 2024,
    category: "Workspace",
    description: "A compact creative workspace designed for focused industrial design, tactile material curation, and mindful productivity.",
    longDescription:
      "Cedar Lane Studio explores the intersection of disciplined utility and sensory calm for a multidisciplinary design practice. The studio is anchored by a central library of material drawers, collaborative solid oak planning tables, and recessed magnetic pinboards that display drawings without visual clutter. Brass detailing patinas gracefully with daily touch.",
    designApproach:
      "Optimized spatial efficiency designed with ergonomic precision, warm acoustic textiles, and bespoke storage solutions.",
    tags: ["Workspace", "Creative Studio", "Ergonomics", "Brass Detailing", "Modular Joinery"],
    services: ["Workspace Design", "Custom Furniture Planning", "Material & Finish Selection"],
    materials: ["Smoked Oak", "Satin Brushed Brass", "Acoustic Wool Felt", "Matte Linoleum"],
    highlights: [
      "Modular joinery system reconfigurable for varying project scales",
      "Dedicated tactile material curation laboratory with custom flat files",
      "Ergonomic workstations with integrated cable and pneumatic channels",
      "Zoned circadian lighting adapting to natural daylight fluctuations"
    ],
    coverImage: "/images/cedar-lane.jpg",
    images: ["/images/cedar-lane.jpg", "/images/willow-house.jpg", "/images/meridian-cafe.jpg"]
  },
  {
    slug: "north-quay-residence",
    title: "North Quay Residence",
    location: "Kochi, Kerala",
    year: 2023,
    category: "Residential",
    description: "A tranquil coastal penthouse prioritizing panoramic waterscape vistas, soft textured textiles, and chalky mineral tones.",
    longDescription:
      "Perched above the Kochi waterfront, North Quay Residence embraces horizontal vistas and changing sea breezes. The interior strategy employed a disciplined reductive palette: chalky micro-cement flooring that stays cool in tropical climates, weathered driftwood dining tables, and flowing unbleached linen drapery that billows gently with morning tides.",
    designApproach:
      "Restrained minimalism responding sensitively to tropical coastal conditions, emphasizing sea breeze and soft diffused light.",
    tags: ["Residential", "Coastal", "Penthouse", "Linen", "Microcement"],
    services: ["Residential Styling", "Design Consultation", "Material & Finish Selection"],
    materials: ["Cool Microcement", "Bleached Teakwood", "Raw Linen Gauze", "Honed Calacatta Marble"],
    highlights: [
      "Wraparound terrace loggia featuring seamless stone transition thresholds",
      "Bespoke low-profile lounge furniture emphasizing expansive horizon views",
      "Hand-loomed natural jute and wool rugs providing tactile barefoot comfort",
      "Subtle maritime-inspired joinery hardware in unlacquered marine bronze"
    ],
    coverImage: "/images/north-quay.jpg",
    images: ["/images/north-quay.jpg", "/images/willow-house.jpg", "/images/hero.jpg"]
  },
  {
    slug: "elm-courtyard",
    title: "Elm Courtyard",
    location: "Jaipur, Rajasthan",
    year: 2024,
    category: "Residential",
    description: "A contemporary reinvention of the traditional haveli courtyard home, balancing privacy, passive cooling, and refined stonework.",
    longDescription:
      "Elm Courtyard translates centuries-old regional architectural wisdom into a contemporary residential sanctuary. Organized around an open-air central court with reflection pool and endemic foliage, the interiors feature soft Dholpur sandstone columns, fluted glass screens, and warm amber accents that celebrate golden hour reflections.",
    designApproach:
      "Heritage architectural memory distilled into razor-sharp contemporary geometry and honest regional materiality.",
    tags: ["Residential", "Courtyard", "Sandstone", "Regional Craft", "Heritage"],
    services: ["Residential Styling", "Material & Finish Selection", "Custom Furniture Planning"],
    materials: ["Dholpur Sandstone", "Burnished Teak", "Hand-beaten Copper", "Textured Plaster"],
    highlights: [
      "Central water court acting as a natural micro-climate cooling engine",
      "Perforated timber jali screens filtering harsh desert solar radiation",
      "Custom copper and brass sanitary fittings handcrafted by local coppersmiths",
      "Private rooftop stargazing pavilion lined with polished terrazzo"
    ],
    coverImage: "/images/elm-courtyard.jpg",
    images: ["/images/elm-courtyard.jpg", "/images/willow-house.jpg", "/images/hero.jpg"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
