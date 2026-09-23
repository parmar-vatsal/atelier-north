import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1C1C1A] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C2C28] border border-[#3D3D37] text-[#C4A882] text-xs uppercase tracking-widest font-medium mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Commission an Atelier Project</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight mb-6">
            Ready to craft an intentional architectural sanctuary?
          </h2>

          <p className="text-[#A39E96] text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether embarking on a ground-up private residence, boutique restaurant, or bespoke workspace, our studio is taking select commissions for the coming season.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#1C1C1A] hover:bg-[#B68D5D] hover:text-[#FAF8F5] transition-all text-xs uppercase tracking-wider font-semibold shadow-lg"
            >
              <span>Schedule Initial Dialogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-[#FAF8F5] hover:bg-[#2C2C28] border border-[#3D3D37] transition-all text-xs uppercase tracking-wider font-semibold"
            >
              <span>Browse All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
