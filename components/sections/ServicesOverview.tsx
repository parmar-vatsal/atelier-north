import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const topServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-[#F4EFEB] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A]">
              Disciplines & Studio Services
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] hover:text-[#B68D5D] transition-colors group"
            >
              <span>Explore All 6 Offerings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
