"use client";

import { Search, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  initialQuery?: string;
  placeholder?: string;
  className?: string;
  size?: "default" | "large";
}

export default function SearchBar({
  initialQuery = "",
  placeholder = "Search projects, materials, styles...",
  className = "",
  size = "default"
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push("/search");
    }
  };

  const isLarge = size === "large";

  return (
    <form
      action="/search"
      method="GET"
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full ${className}`}
    >
      <div className="relative w-full flex items-center">
        <div className="absolute left-4 pointer-events-none text-[#8C867D]">
          <Search className={isLarge ? "w-5 h-5" : "w-4 h-4"} />
        </div>

        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-[#FFFFFF] border border-[#E6DFD5] rounded-full text-[#1C1C1A] placeholder-[#8C867D] focus:outline-hidden focus:border-[#B68D5D] focus:ring-2 focus:ring-[#B68D5D]/20 transition-all ${
            isLarge
              ? "pl-12 pr-28 py-4 text-base shadow-xs"
              : "pl-11 pr-24 py-2.5 text-sm shadow-2xs"
          }`}
        />

        <button
          type="submit"
          className={`absolute right-2 inline-flex items-center gap-1.5 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors font-medium ${
            isLarge
              ? "px-5 py-2.5 text-xs uppercase tracking-wider"
              : "px-3.5 py-1.5 text-xs"
          }`}
        >
          <span>Search</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
