"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-xs py-4" : "bg-[#FAF8F5]/90 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl tracking-tight text-[#1C1C1A] group-hover:text-[#B68D5D] transition-colors">
            Atelier North
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#6B6864] font-medium">
            Interior Architecture
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  isActive ? "text-[#1C1C1A] font-semibold" : "text-[#6B6864] hover:text-[#1C1C1A]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B68D5D] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/search"
            aria-label="Search projects and services"
            className="p-2 text-[#6B6864] hover:text-[#1C1C1A] hover:bg-[#EAE4DC]/50 rounded-full transition-all flex items-center gap-2 text-xs font-medium"
            title="Search collection"
          >
            <Search className="w-4 h-4" />
            <span className="text-xs text-[#6B6864]">Search</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors shadow-sm"
          >
            <span>Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu & Search Icon */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link
            href="/search"
            aria-label="Search"
            className="p-2 text-[#1C1C1A] hover:bg-[#EAE4DC]/50 rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#1C1C1A] focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#FAF8F5] border-b border-[#E6DFD5] px-6 py-8 shadow-xl transition-all">
          <nav className="flex flex-col space-y-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl text-[#1C1C1A] hover:text-[#B68D5D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E6DFD5] flex flex-col space-y-4">
              <Link
                href="/search"
                className="flex items-center gap-3 text-sm text-[#6B6864] hover:text-[#1C1C1A]"
              >
                <Search className="w-4 h-4 text-[#B68D5D]" />
                <span>Search Portfolio & Services</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-medium px-6 py-3 rounded-full bg-[#1C1C1A] text-[#FAF8F5] hover:bg-[#B68D5D] transition-colors"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
