import Link from "next/link";
import { Service } from "@/data/services";
import {
  Home,
  UtensilsCrossed,
  Briefcase,
  Palette,
  Armchair,
  Compass,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  UtensilsCrossed,
  Briefcase,
  Palette,
  Armchair,
  Compass
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] || Compass;

  return (
    <div
      id={service.id}
      className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-2xl p-8 sm:p-9 flex flex-col justify-between hover-lift group"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-center text-[#B68D5D] mb-6 group-hover:bg-[#1C1C1A] group-hover:text-[#FAF8F5] transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2 group-hover:text-[#B68D5D] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#B68D5D] font-medium mb-4">
          {service.tagline}
        </p>

        <p className="text-sm text-[#6B6864] leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="mb-6 pt-4 border-t border-[#F2ECE4]">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-3">
            Key Deliverables
          </h4>
          <ul className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#6B6864]">
                <CheckCircle2 className="w-4 h-4 text-[#8B9E8B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-[#F2ECE4] flex items-center justify-between">
        <span className="text-xs text-[#8C867D]">
          Tailored to your architectural scope
        </span>
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] group-hover:text-[#B68D5D] transition-colors"
        >
          <span>Inquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
