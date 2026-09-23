import { projects, Project } from "@/data/projects";
import { services, Service } from "@/data/services";

export interface SearchResultItem {
  id: string;
  type: "project" | "service";
  title: string;
  category: string;
  description: string;
  url: string;
  tags?: string[];
  image?: string;
  meta?: string;
}

export function performSearch(query: string): SearchResultItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    // Return all items if query is empty
    const allProjects: SearchResultItem[] = projects.map((p) => ({
      id: p.slug,
      type: "project",
      title: p.title,
      category: `${p.category} · ${p.location}`,
      description: p.description,
      url: `/projects/${p.slug}`,
      tags: p.tags,
      image: p.coverImage,
      meta: `${p.year}`
    }));

    const allServices: SearchResultItem[] = services.map((s) => ({
      id: s.id,
      type: "service",
      title: s.title,
      category: "Specialized Service",
      description: s.description,
      url: `/services#${s.id}`,
      tags: [s.tagline],
      meta: "Studio Offering"
    }));

    return [...allProjects, ...allServices];
  }

  const terms = trimmed.split(/\s+/).filter(Boolean);

  const matchedProjects: SearchResultItem[] = projects
    .filter((project) => {
      const corpus = [
        project.title,
        project.category,
        project.location,
        project.description,
        project.longDescription,
        project.designApproach,
        ...project.tags,
        ...project.services,
        ...project.materials,
        ...project.highlights
      ]
        .join(" ")
        .toLowerCase();

      return terms.some((term) => corpus.includes(term));
    })
    .map((p) => ({
      id: p.slug,
      type: "project",
      title: p.title,
      category: `${p.category} · ${p.location}`,
      description: p.description,
      url: `/projects/${p.slug}`,
      tags: p.tags,
      image: p.coverImage,
      meta: `${p.year}`
    }));

  const matchedServices: SearchResultItem[] = services
    .filter((service) => {
      const corpus = [
        service.title,
        service.tagline,
        service.description,
        service.idealClient,
        ...service.deliverables,
        ...service.process
      ]
        .join(" ")
        .toLowerCase();

      return terms.some((term) => corpus.includes(term));
    })
    .map((s) => ({
      id: s.id,
      type: "service",
      title: s.title,
      category: "Specialized Service",
      description: s.description,
      url: `/services#${s.id}`,
      tags: [s.tagline],
      meta: "Studio Offering"
    }));

  return [...matchedProjects, ...matchedServices];
}
