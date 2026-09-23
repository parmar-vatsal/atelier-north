import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Studio Services & Spatial Capabilities",
  description: "Explore Atelier North's disciplines: from turnkey residential styling and boutique hospitality to material specification and custom millwork."
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-0 sm:pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
            Disciplines
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A] leading-tight mb-6">
            Architectural Curation & Bespoke Services
          </h1>
          <p className="text-[#6B6864] text-base sm:text-lg leading-relaxed">
            Every commission begins with deep listening. Whether guiding full architectural transformations or curating individual bespoke furniture heirlooms, we work across residential, hospitality, and workspace typologies.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <ProcessSection />
      <CTASection />
    </div>
  );
}
