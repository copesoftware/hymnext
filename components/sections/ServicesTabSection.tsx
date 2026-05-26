"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES_GRID = [
  { label: "OBRA CIVIL", image: `${B}/images/proyectos/1-obra-civil/8-Centro-recreativo/CR_02.JPG` },
  { label: "MOVIMIENTO DE TIERRAS", image: `${B}/images/web/inicio/movimiento_de_tierras.jpg` },
  { label: "ARQUITECTURA", image: `${B}/images/proyectos/3-arquitectura/2-Oficinas/Of_05.JPG` },
  { label: "ESTRUCTURA", image: `${B}/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_02.jpeg` },
  { label: "INSTALACIONES", image: `${B}/images/proyectos/5-instalaciones/1-Laboratorio/Inst_01.JPG` },
  { label: "ELECTROMECÁNICO", image: `${B}/images/proyectos/6-electromecanico/2-Laboratorio/Elec_01.JPEG` },
  { label: "TUBERÍAS", image: `${B}/images/proyectos/7-tuberias/2-Acero-inoxidable/Ac_01.jpeg` },
  { label: "RECUBRIMIENTOS", image: `${B}/images/proyectos/8-recubrimientos/3. Envasado 2020/Ri_03.JPG` },
];

export default function ServicesTabSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 mt-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172a64] uppercase text-center tracking-widest mb-4">
            Nuestros servicios
          </h2>
          <div className="w-2/3 mx-auto border-b-2 border-[#172a64] mb-8" />
          <div className="flex flex-col gap-10">
            <p className="text-gray-700 leading-relaxed">
              Cada proyecto está realizado mediante el trabajo en equipo, creemos
              en la gran calidad moral de cada persona que forma parte de nuestra
              empresa e impulsamos su sentido de la responsabilidad, fomentando la
              motivación y superación creando un entorno laboral sano y productivo.
            </p>
            <div className="flex justify-end">
              <Link
                href="/nuestra-empresa"
                className="bg-[#172a64] text-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-center hover:bg-[#0e1c45] transition-colors"
              >
                CONOCE MÁS DE<br />NOSOTROS
              </Link>
            </div>
          </div>
        </div>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-gray-200">
          {SERVICES_GRID.map((service, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hovered === i ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hovered === i ? "bg-[#172a64]/50" : "bg-[#172a64]/65"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-white font-bold text-sm uppercase tracking-wider leading-tight text-center">
                  {service.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

