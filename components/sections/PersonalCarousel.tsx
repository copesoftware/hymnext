"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  `${B}/images/personal/P_01.jpeg`,
  `${B}/images/personal/P_02.jpg`,
  `${B}/images/personal/P_03.jpeg`,
  `${B}/images/personal/P_05.jpeg`,
  `${B}/images/personal/P_06.jpeg`,
];

const INTERVAL_MS = 3500;

export default function PersonalCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => {
    setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
    setPaused(true);
    setTimeout(() => setPaused(false), INTERVAL_MS * 2);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % IMAGES.length);
    setPaused(true);
    setTimeout(() => setPaused(false), INTERVAL_MS * 2);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] bg-[#172a64] rounded overflow-hidden shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Personal HYM ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), INTERVAL_MS * 2); }}
            aria-label={`Foto ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${i === current ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}
