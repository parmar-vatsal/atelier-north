import { processSteps } from "@/data/site-content";

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#F4EFEB] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-3">
            Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A]">
            How We Shape Living Environments
          </h2>
          <p className="text-[#6B6864] text-base leading-relaxed mt-4">
            From initial acoustic and light studies to hand-crafted joinery assembly, our disciplined four-stage workflow assures architectural precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#EAE4DC] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#B68D5D] block mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6864] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE4]">
                <span className="text-[10px] uppercase tracking-wider text-[#8C867D] block font-semibold mb-1">
                  Key Deliverables
                </span>
                <p className="text-xs text-[#1C1C1A] font-medium">
                  {step.deliverables}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
