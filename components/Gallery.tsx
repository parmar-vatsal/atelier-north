"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, idx) => {
          const isSpan = idx === 0 && images.length % 2 !== 0;
          return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl bg-[#EAE4DC] group cursor-pointer ${
                isSpan ? "md:col-span-2 aspect-16/9" : "aspect-4/3"
              }`}
              onClick={() => setActiveModalImage(img)}
            >
              <Image
                src={img}
                alt={`${title} photography ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 bg-[#FAF8F5]/90 rounded-full text-[#1C1C1A] shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveModalImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveModalImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeModalImage}
              alt={title}
              width={1600}
              height={1000}
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
