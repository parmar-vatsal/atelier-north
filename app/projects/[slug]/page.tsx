import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import Gallery from "@/components/Gallery";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Layers } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.title} — ${project.location}`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#6B6864] hover:text-[#1C1C1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#B68D5D] uppercase tracking-widest font-semibold mb-3">
            <span>{project.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#6B6864]">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#6B6864]">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A] leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6B6864] leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Gallery Showcase */}
        <div className="mb-16">
          <Gallery images={project.images} title={project.title} />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-[#EAE4DC] mb-20">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] mb-4">
                The Spatial Concept
              </h2>
              <p className="text-[#6B6864] text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">
                Architectural Approach
              </h3>
              <p className="text-[#6B6864] text-sm leading-relaxed">
                {project.designApproach}
              </p>
            </div>

            {/* Key Architectural Highlights */}
            <div className="pt-4">
              <h3 className="font-serif text-xl text-[#1C1C1A] mb-4">
                Architectural Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#6B6864]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B9E8B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#EAE4DC] rounded-2xl p-8 space-y-6 h-fit shadow-2xs">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#B68D5D] font-bold mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Material Palette</span>
              </h3>
              <ul className="space-y-2">
                {project.materials.map((mat, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-medium text-[#1C1C1A] bg-[#FAF8F5] px-3 py-1.5 rounded-md border border-[#EAE4DC]"
                  >
                    {mat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#F2ECE4]">
              <h3 className="text-xs uppercase tracking-widest text-[#8C867D] font-bold mb-3">
                Services Rendered
              </h3>
              <ul className="space-y-1.5 text-xs text-[#6B6864]">
                {project.services.map((serv, idx) => (
                  <li key={idx}>• {serv}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#F2ECE4]">
              <h3 className="text-xs uppercase tracking-widest text-[#8C867D] font-bold mb-2">
                Inquire About Similar Space
              </h3>
              <p className="text-xs text-[#6B6864] mb-4">
                Commission a bespoke architectural interior inspired by {project.title}.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(project.title)}`}
                className="w-full inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-xl bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors"
              >
                Request Case Study Brief
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-16 border-t border-[#EAE4DC]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A]">
              Explore Other Works
            </h2>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] hover:text-[#B68D5D] transition-colors"
            >
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
