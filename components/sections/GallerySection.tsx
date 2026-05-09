"use client";
import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded transition-colors duration-200 ${
                activeFilter === cat.key
                  ? "bg-[#172a64] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setLightbox(img.src)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#172a64]/0 group-hover:bg-[#172a64]/60 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl leading-none hover:text-gray-300"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Imagen ampliada"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
