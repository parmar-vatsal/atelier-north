import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#EAE4DC] hover-lift ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block relative aspect-16/10 overflow-hidden bg-[#EAE4DC]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[11px] font-medium tracking-wider uppercase px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-md text-[#1C1C1A] rounded-full shadow-2xs">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#1C1C1A] flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </Link>

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#8C867D] mb-2 font-medium">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-serif text-2xl text-[#1C1C1A] group-hover:text-[#B68D5D] transition-colors mb-3">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-[#6B6864] text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.materials.slice(0, 2).map((material) => (
              <span
                key={material}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[#6B6864] border border-[#EAE4DC]"
              >
                {material}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] group-hover:text-[#B68D5D] inline-flex items-center gap-1 transition-colors"
          >
            <span>View Case</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
