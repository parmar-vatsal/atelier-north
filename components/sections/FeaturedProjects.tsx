import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A]">
              Selected Architectural Works
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] hover:text-[#B68D5D] transition-colors group"
            >
              <span>View All 5 Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
