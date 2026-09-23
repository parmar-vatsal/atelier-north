import { Metadata } from "next";
import Link from "next/link";
import { performSearch, SearchResultItem } from "@/lib/search";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Search Studio Portfolio & Services",
  description: "Search across Atelier North projects, interior materials, locations, and studio services."
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const rawQuery = resolvedParams?.q || "";
  const query = rawQuery.trim();
  const results = performSearch(query);

  // Search query summary display
  // Developer intended to bold the active query in the feedback message using <strong> tags
  const highlightedQuery = query
    ? `Showing results for: <strong>${query}</strong>`
    : `Showing all archive works and studio offerings`;

  const popularTags = [
    "Oak",
    "Limestone",
    "Terracotta",
    "Residential",
    "Café",
    "Workspace",
    "Courtyard",
    "Joinery"
  ];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header & Search Bar */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B68D5D] font-semibold block mb-2">
            Archive Search
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] mb-6">
            Search Works & Disciplines
          </h1>

          <div className="w-full">
            <SearchBar
              initialQuery={query}
              placeholder="Search by material, typology, or project name..."
              size="large"
            />
          </div>

          {/* Quick Filter Suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
            <span className="text-[#8C867D] font-medium mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#B68D5D]" /> Popular:
            </span>
            {popularTags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EAE4DC] text-[#6B6864] hover:text-[#1C1C1A] hover:border-[#B68D5D] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Query Summary & Status */}
        <div className="mb-10 pb-4 border-b border-[#EAE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* 
            Search term formatting sink:
            Developer intended to format the search query inside <strong> tags,
            using dangerouslySetInnerHTML instead of safe React children.
          */}
          <p
            id="search-summary-output"
            className="search-summary text-sm text-[#6B6864]"
            dangerouslySetInnerHTML={{ __html: highlightedQuery }}
          />

          <span className="text-xs text-[#8C867D] font-mono">
            {results.length} {results.length === 1 ? "entry" : "entries"} found
          </span>
        </div>

        {/* Results List */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((item: SearchResultItem) => (
              <article
                key={item.id}
                className="bg-[#FFFFFF] border border-[#EAE4DC] rounded-2xl overflow-hidden hover-lift flex flex-col justify-between"
              >
                <div>
                  {item.image && (
                    <Link href={item.url} className="block relative aspect-16/10 bg-[#EAE4DC] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </Link>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#8C867D] mb-2 font-medium">
                      <span className="text-[#B68D5D] uppercase tracking-wider font-semibold">
                        {item.category}
                      </span>
                      {item.meta && <span>{item.meta}</span>}
                    </div>

                    <h2 className="font-serif text-2xl text-[#1C1C1A] hover:text-[#B68D5D] transition-colors mb-3">
                      <Link href={item.url}>{item.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#6B6864] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C867D]">
                      {item.type === "project" ? "Architectural Commission" : "Studio Capability"}
                    </span>

                    <Link
                      href={item.url}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#1C1C1A] hover:text-[#B68D5D] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FFFFFF] border border-[#EAE4DC] rounded-3xl p-8 max-w-2xl mx-auto shadow-2xs">
            <div className="w-14 h-14 bg-[#FAF8F5] border border-[#EAE4DC] rounded-full flex items-center justify-center mx-auto mb-4 text-[#8C867D]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#1C1C1A] mb-2">
              No architectural matches found
            </h3>
            <p className="text-sm text-[#6B6864] mb-6 max-w-md mx-auto">
              We couldn&apos;t find entries matching &quot;{query}&quot;. Try exploring our natural material keywords or view all projects.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <span>Browse All Projects</span>
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF8F5] text-[#1C1C1A] border border-[#EAE4DC] hover:border-[#1C1C1A] text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <span>Clear Query</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
