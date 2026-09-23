export interface Inquiry {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  approxBudget: string;
  message: string;
  createdAt: string;
}

export interface Review {
  id: number;
  author: string;
  location: string;
  project: string;
  rating: number;
  comment: string; // Intentionally rendered unescaped (Stored XSS)
  date: string;
}

// Global in-memory storage for test environment
declare global {
  // eslint-disable-next-line no-var
  var __inquiriesStore: Inquiry[] | undefined;
  // eslint-disable-next-line no-var
  var __reviewsStore: Review[] | undefined;
}

const initialInquiries: Inquiry[] = [
  {
    id: 101,
    fullName: "Karan Singhania",
    email: "karan.singhania@apexcapital.in",
    phone: "+91 98201 12345",
    projectType: "Residential Styling",
    location: "Worli Sea Face, Mumbai",
    approxBudget: "₹1 Cr+",
    message: "Looking for turnkey curation of our 6,000 sq ft duplex. We require extreme confidentiality and custom Italian limestone work.",
    createdAt: "2026-09-15T10:30:00.000Z"
  },
  {
    id: 102,
    fullName: "Radhika Merchant-Mehta",
    email: "radhika@serenedesign.org",
    phone: "+91 97110 54321",
    projectType: "Hospitality Spaces",
    location: "Indiranagar, Bengaluru",
    approxBudget: "₹50L – ₹1 Cr",
    message: "Planning a specialty tea pavilion with fluted timber joinery and Japanese wabi-sabi lighting.",
    createdAt: "2026-09-18T14:15:00.000Z"
  },
  {
    id: 103,
    fullName: "Vikramaditya Rao",
    email: "v.rao@solarisventures.com",
    phone: "+91 99450 99887",
    projectType: "Workspace Design",
    location: "Koregaon Park, Pune",
    approxBudget: "₹50L – ₹1 Cr",
    message: "Bespoke executive retreat and high-focus library design. Timeline is Q4 2026.",
    createdAt: "2026-09-20T09:00:00.000Z"
  }
];

const initialReviews: Review[] = [
  {
    id: 1,
    author: "Arjun & Radhika Kapoor",
    location: "Pune",
    project: "Willow House",
    rating: 5,
    comment: "Atelier North transformed our chaotic villa into a <em>serene haven of natural stone and oak</em>. The light throughout the day is breathtaking.",
    date: "August 2024"
  },
  {
    id: 2,
    author: "Chef Devendra Joshi",
    location: "Bengaluru",
    project: "Meridian Café",
    rating: 5,
    comment: "The fluted banquette seating and terracotta tones have defined our identity. Customers constantly ask who curated our acoustics.",
    date: "November 2023"
  },
  {
    id: 3,
    author: "Ananya Deshmukh",
    location: "Kochi",
    project: "North Quay Residence",
    rating: 5,
    comment: "Exquisite attention to coastal humidity and tactile linen textures. Truly <strong>transformative spatial storytelling</strong>.",
    date: "January 2024"
  }
];

if (!globalThis.__inquiriesStore) {
  globalThis.__inquiriesStore = [...initialInquiries];
}

if (!globalThis.__reviewsStore) {
  globalThis.__reviewsStore = [...initialReviews];
}

export function getInquiries(): Inquiry[] {
  return globalThis.__inquiriesStore || initialInquiries;
}

export function getInquiryById(id: number): Inquiry | undefined {
  return (globalThis.__inquiriesStore || initialInquiries).find((i) => i.id === id);
}

export function addInquiry(inquiry: Omit<Inquiry, "id" | "createdAt">): Inquiry {
  const store = globalThis.__inquiriesStore || [];
  const nextId = store.length > 0 ? Math.max(...store.map((i) => i.id)) + 1 : 101;
  const newRecord: Inquiry = {
    ...inquiry,
    id: nextId,
    createdAt: new Date().toISOString()
  };
  store.push(newRecord);
  globalThis.__inquiriesStore = store;
  return newRecord;
}

export function getReviews(): Review[] {
  return globalThis.__reviewsStore || initialReviews;
}

export function addReview(review: Omit<Review, "id" | "date">): Review {
  const store = globalThis.__reviewsStore || [];
  const nextId = store.length > 0 ? Math.max(...store.map((r) => r.id)) + 1 : 1;
  const newRecord: Review = {
    ...review,
    id: nextId,
    date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
  };
  store.unshift(newRecord);
  globalThis.__reviewsStore = store;
  return newRecord;
}
