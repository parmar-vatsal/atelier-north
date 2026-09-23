import { brandPhilosophy, statistics } from "@/data/site-content";

export default function Philosophy() {
  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-3">
            Core Beliefs
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] leading-tight mb-6">
            We believe that a space should hold silence as gracefully as it holds conversation.
          </h2>
          <p className="text-[#6B6864] text-base leading-relaxed">
            Our creative ethos refuses decorative excess. Instead, we study how natural illumination, acoustic dampening, and honest raw materials shape physiological wellbeing and calm.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Stats Row */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1C1A] text-[#FAF8F5] grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
}
