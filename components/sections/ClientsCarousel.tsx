"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";

const PER_PAGE = 3;
const TOTAL = CLIENT_LOGOS.length;
const PAGES = Math.ceil(TOTAL / PER_PAGE);

const INTERVAL_MS = 3500;

export default function ClientsCarousel() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % PAGES);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const visible = CLIENT_LOGOS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172a64] uppercase tracking-widest mb-4">
            Nuestros clientes
          </h2>
          <div className="w-2/3 mx-auto border-b-2 border-[#172a64]" />
        </div>

        {/* Logos */}
        <div
          className="bg-gray-100 rounded-sm py-10 px-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center min-h-[160px]">
            {visible.map((src, i) => (
              <div key={src} className="relative w-full h-36 flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Cliente ${page * PER_PAGE + i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 30vw, 20vw"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setPage(i); setPaused(true); setTimeout(() => setPaused(false), INTERVAL_MS * 2); }}
                aria-label={`Página ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  i === page ? "bg-[#172a64]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

