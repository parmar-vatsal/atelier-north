import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Philosophy from "@/components/sections/Philosophy";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <Philosophy />
      <ProcessSection />
      <CTASection />
    </>
  );
}
