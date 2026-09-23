import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Portfolio & Selected Works",
  description: "Browse our architectural interior commissions across private residences, culinary ateliers, and creative studios."
};

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-[#EAE4DC]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
              Our Archive
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A]">
              Selected Works
            </h1>
            <p className="text-[#6B6864] text-base max-w-xl mt-3">
              A curated collection of spaces honoring raw materiality, tactile joinery, and calm spatial geometry.
            </p>
          </div>

          <div className="w-full md:w-80">
            <SearchBar placeholder="Search by material or city..." />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
