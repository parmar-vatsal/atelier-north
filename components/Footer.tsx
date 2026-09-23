import Link from "next/link";
import { studioInfo } from "@/data/site-content";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1A] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2C2C28]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#383733]">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-tight text-[#FAF8F5]">
                {studioInfo.name}
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B68D5D] mt-1 font-medium">
                {studioInfo.tagline}
              </p>
            </div>
            <p className="text-[#A39E96] text-sm leading-relaxed max-w-md">
              {studioInfo.shortDescription}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FAF8F5] hover:text-[#B68D5D] transition-colors group"
              >
                <span>Initiate a spatial dialogue</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C867D] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/projects" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Studio Services
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Search Archive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#D4CEC5] hover:text-[#FAF8F5] transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C867D] font-semibold">
              Typologies
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A39E96]">
              <li>Private Residences</li>
              <li>Artisan Cafés & Dining</li>
              <li>Creative Ateliers</li>
              <li>Material Specification</li>
              <li>Custom Millwork</li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8C867D] font-semibold">
              Studios
            </h4>
            <div className="space-y-3 text-sm text-[#D4CEC5]">
              <p>
                <strong className="text-[#FAF8F5] block font-medium">Bandra Studio:</strong>
                {studioInfo.address}
                <br />
                {studioInfo.city}
              </p>
              <p className="text-xs text-[#8C867D] pt-1">
                Direct: {studioInfo.phone}
                <br />
                Inquiries: {studioInfo.email}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C867D] gap-4">
          <p>© {new Date().getFullYear()} Atelier North Studio. All architectural rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-[#FAF8F5] cursor-pointer transition-colors">Material Ethics</span>
            <Link href="/search" className="hover:text-[#B68D5D] transition-colors">
              Archive Index
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
