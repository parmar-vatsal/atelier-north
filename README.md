# Atelier North — Interior Architecture & Spatial Curationn

Atelier North is a modern web platform for a high-end interior architecture and spatial curation consultancy. The studio specializes in restrained, emotive environments grounded in organic materiality, daylight modulation, and artisanal joinery across private residences, culinary ateliers, and creative studios.

---

## Features

- **Editorial Design System**: Built with modern typography (Inter + Playfair Display), custom warm neutral palettes, glassmorphism headers, and smooth micro-interactions.
- **Architectural Portfolio**: Comprehensive showcase of selected works with bespoke photography, project timelines, materials schedules, and architectural concept narratives.
- **Interactive Lightbox Galleries**: Multi-perspective photography viewing with keyboard-friendly inspection modals.
- **Full Studio Disciplines**: Detailed breakdowns of turnkey services including Residential Styling, Hospitality Spaces, Workspace Design, Material Selection, and Custom Millwork.
- **Intelligent Archive Search**: Real-time filtering across project categories, materials (e.g. travertine, oak, terracotta), design approaches, and deliverables.
- **Consultation Dossier Intake**: Interactive project inquiry form with validation and custom design questionnaire.
- **Fully Responsive & Accessible**: Fluid typography, responsive grids, and semantic HTML5 markup.

---

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Playfair Display & Inter via `next/font/google`

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ or v20+) and npm installed.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Running Locally

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Compile the production bundle and start the optimized standalone server:

```bash
npm run build
npm run start
```

---

## Project Structure

```text
├── app/
│   ├── about/             # Studio story, philosophy & leadership
│   ├── contact/           # Consultation inquiry form & details
│   ├── globals.css        # Design system tokens & global styling
│   ├── layout.tsx         # Root layout with fonts, header, footer
│   ├── not-found.tsx      # Custom 404 page
│   ├── page.tsx           # Editorial homepage
│   ├── projects/          # Selected works portfolio & detail routes
│   │   ├── [slug]/        # Individual case studies
│   │   └── page.tsx       # Portfolio overview
│   ├── search/            # Archive search & discovery
│   └── services/          # Studio disciplines & offerings
├── components/            # Reusable UI components
│   ├── ContactForm.tsx    # Consultation booking form
│   ├── Footer.tsx         # Studio footer
│   ├── Gallery.tsx        # Project photography lightbox
│   ├── Navigation.tsx     # Responsive navigation header
│   ├── ProjectCard.tsx    # Portfolio card
│   ├── SearchBar.tsx      # Archive search input
│   ├── ServiceCard.tsx    # Discipline offering card
│   └── sections/          # Modular homepage sections
├── data/                  # Seeded portfolio, services, and content
│   ├── projects.ts
│   ├── services.ts
│   └── site-content.ts
└── lib/                   # Utility and search functions
    ├── search.ts
    └── validation.ts
```

---

## License

Private and confidential. © Atelier North Studio.
