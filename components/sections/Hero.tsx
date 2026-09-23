import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE4DC]/60 border border-[#CEC4B5]/60 text-[#6B6864] text-xs uppercase tracking-widest font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B68D5D]" />
            <span>Architectural Interior Styling & Spatial Curation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C1C1A] leading-[1.1] tracking-tight mb-6">
            Spaces calibrated for quiet contemplation & tactile beauty.
          </h1>

          <p className="text-[#6B6864] text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Atelier North shapes residences, culinary havens, and workspaces through honest materials, warm daylight, and generational joinery.
          </p>

          {/* Integrated Quick Search & CTAs */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full">
              <SearchBar placeholder="Search projects (e.g. 'oak', 'café', 'stone')..." size="large" />
            </div>
          </div>

          <div className="flex items-center gap-6 mt-6 text-xs text-[#8C867D]">
            <span>Explore curated spaces:</span>
            <Link href="/projects" className="underline hover:text-[#1C1C1A] transition-colors">
              Residential
            </Link>
            <Link href="/projects" className="underline hover:text-[#1C1C1A] transition-colors">
              Hospitality
            </Link>
            <Link href="/projects" className="underline hover:text-[#1C1C1A] transition-colors">
              Ateliers
            </Link>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-16/9 max-h-[640px] w-full bg-[#EAE4DC]">
          <Image
            src="/images/hero.jpg"
            alt="Atelier North interior architectural living space"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FAF8F5]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C4A882] font-semibold block mb-1">
                Featured Residence
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                Willow House & Botanical Courtyard
              </h2>
              <p className="text-xs sm:text-sm text-[#E8E2DA] mt-1 max-w-md">
                Quarter-sawn white oak, rough-hewn travertine, and western evening light.
              </p>
            </div>

            <Link
              href="/projects/willow-house"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#1C1C1A] hover:bg-[#B68D5D] hover:text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold transition-all self-start sm:self-auto shadow-md"
            >
              <span>Explore Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
