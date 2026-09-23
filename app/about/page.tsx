import { Metadata } from "next";
import Image from "next/image";
import { studioInfo, teamMembers, brandPhilosophy, statistics } from "@/data/site-content";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Our Studio & Leadership",
  description: "Learn about Atelier North, our design philosophy, and the multidisciplinary team behind our architectural sanctuaries."
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0 sm:pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-3">
              The Atelier Story
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A] leading-tight mb-6">
              Founded on the belief that spaces shape the quiet soul.
            </h1>
            <p className="text-[#6B6864] text-base sm:text-lg leading-relaxed mb-6">
              Atelier North was born out of a desire to create counterpoints to the frantic speed of modern life. We approach interior architecture not as decoration, but as an ongoing dialogue between natural stone, hand-worked timber, tactile textiles, and the movement of daylight.
            </p>
            <p className="text-[#6B6864] text-base leading-relaxed">
              Based between Mumbai and Pune, our practice collaborates with distinguished craftsmen, third-generation joiners, and regional quarries across the subcontinent and Europe to bring rare, tactile character into private residences and commercial ateliers.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl bg-[#EAE4DC]">
            <Image
              src="/images/willow-house.jpg"
              alt="Atelier North studio craft and materials"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Studio Statistics */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1C1A] text-[#FAF8F5] grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#B68D5D] mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-[#A39E96] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
              Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A]">
              Principals & Curators
            </h2>
            <p className="text-[#6B6864] text-base mt-3">
              A collective of interior architects, material scholars, and timber craft specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#EAE4DC] hover-lift flex flex-col"
              >
                <div className="relative aspect-4/5 bg-[#EAE4DC] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#1C1C1A] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#B68D5D] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#6B6864] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A]">
              Pillars of Architectural Styling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandPhilosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DC] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#B68D5D] block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6864] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
