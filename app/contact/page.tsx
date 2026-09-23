import { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { studioInfo } from "@/data/site-content";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description: "Initiate a spatial dialogue with Atelier North. Schedule an architectural consultation for residences, hospitality, or workspace commissions."
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info & Context */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
                Initiate Dialogue
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1C1A] leading-tight mb-6">
                Tell us about your space.
              </h1>
              <p className="text-[#6B6864] text-base leading-relaxed">
                Whether you are breaking ground on a coastal home, seeking bespoke joinery for a culinary space, or curating a material palette, we welcome private commissions.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#EAE4DC]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#EAE4DC] flex items-center justify-center text-[#B68D5D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1">
                    Studio Address
                  </h3>
                  <p className="text-sm text-[#6B6864]">
                    {studioInfo.address}
                    <br />
                    {studioInfo.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#EAE4DC] flex items-center justify-center text-[#B68D5D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1">
                    Direct Correspondence
                  </h3>
                  <p className="text-sm text-[#6B6864]">
                    {studioInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#EAE4DC] flex items-center justify-center text-[#B68D5D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1">
                    Telephone
                  </h3>
                  <p className="text-sm text-[#6B6864]">
                    {studioInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#EAE4DC] flex items-center justify-center text-[#B68D5D] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] mb-1">
                    Consultation Hours
                  </h3>
                  <p className="text-sm text-[#6B6864]">
                    {studioInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form wrapped in Suspense for useSearchParams */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-3xl p-12 text-center text-sm text-[#6B6864]">
                  Loading consultation form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
