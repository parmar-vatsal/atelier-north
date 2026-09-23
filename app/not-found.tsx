import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-xl mx-auto text-center bg-[#FFFFFF] border border-[#EAE4DC] p-10 sm:p-14 rounded-3xl shadow-xs">
        <div className="w-14 h-14 bg-[#FAF8F5] border border-[#EAE4DC] rounded-full flex items-center justify-center mx-auto mb-6 text-[#B68D5D]">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#B68D5D] font-semibold block mb-2">
          Spatial Boundary 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] mb-4">
          This room does not exist in our archive.
        </h1>

        <p className="text-[#6B6864] text-sm leading-relaxed mb-8 max-w-md mx-auto">
          The project or resource you requested may have been repositioned or archived. Please explore our portfolio or search the collection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors text-xs uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio</span>
          </Link>

          <Link
            href="/search"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#1C1C1A] border border-[#EAE4DC] hover:border-[#1C1C1A] transition-colors text-xs uppercase tracking-wider font-semibold"
          >
            <span>Search Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
