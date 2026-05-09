import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PersonalCarousel from "@/components/sections/PersonalCarousel";
import type { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


export const metadata: Metadata = {
  title: "Nuestra empresa",
  description:
    "Conoce la historia y valores de HYM Construcciones, empresa constructora en Navojoa, Sonora desde 2017.",
};

export default function NuestraEmpresaPage() {
  return (
    <>
      <Breadcrumb title="Nuestra empresa" backgroundImage={`${BASE}/images/personal/P_01.jpeg`} />

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#172a64] uppercase mb-6">
                Quienes somos
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify mb-5">
                HyM Construcciones, es una firma orgullosamente mexicana que desde sus
                inicios ha mantenido un firme compromiso con la excelencia y el desarrollo
                sostenible de infraestructura en nuestro país.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Con una filosofía centrada en la mejora continua, la responsabilidad y la
                innovación, HyM Construcciones ha participado en la ejecución de
                proyectos clave, destacándose por su capacidad técnica, cumplimiento
                riguroso de los plazos y un enfoque humano que distingue cada una de sus
                obras.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-72 lg:h-[360px] overflow-hidden rounded shadow-lg">
              <Image
                src={`${BASE}/images/personal/P_01.jpeg`}
                alt="Personal HYM Construcciones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal / Carrusel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PersonalCarousel />
            <div>
              <p className="text-gray-700 leading-relaxed text-justify mb-5">
                Uno de los grandes diferenciadores de HyM Construcciones es
                su enfoque en el desarrollo humano y profesional de su equipo.
                La compañía invierte activamente en la capacitación continua
                de su personal, fomenta un entorno de trabajo seguro y
                equitativo, y promueve la inclusión como parte de su cultura
                organizacional.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                El talento humano es considerado el recurso más valioso de la
                empresa. Su equipo está conformado por ingenieros,
                arquitectos, técnicos, operadores y personal administrativo
                con amplio conocimiento del sector, lo que se traduce en
                ejecución impecable de obras, soluciones creativas y un
                servicio de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section id="filosofia" className="py-16 bg-gray-50 relative">
        {/* Vertical label */}
        <div className="absolute right-0 top-0 flex items-start pointer-events-none pt-4">
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold tracking-widest uppercase text-[#172a64]/40 pr-2">
            Filosofía
          </span>
        </div>
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172a64] uppercase tracking-widest">
              Valores empresariales
            </h2>
          </div>

          {/* 5 value cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              {
                title: "Innovación",
                text: "Implementamos soluciones constructivas vanguardistas para mejorar tiempos y resultados.",
                dark: false,
                icon: (
                  <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Calidad",
                text: "Ejecutamos proyectos con altas estándares técnicos, garantizando seguridad y durabilidad.",
                dark: true,
                icon: (
                  <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "Honestidad",
                text: "Actuamos con claridad en cada proceso, garantizando la confianza y relaciones duraderas con clientes, colaboradores y proveedores.",
                dark: false,
                icon: (
                  <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: "Trabajo en equipo",
                text: "Fomentamos la colaboración, el respeto y la coordinación entre colaboradores, clientes y aliados estratégicos para resultados exitosos.",
                dark: true,
                icon: (
                  <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Compromiso Social",
                text: "Contribuimos al desarrollo de comunidades mediante la generación de empleo local.",
                dark: false,
                icon: (
                  <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map(({ title, text, dark, icon }) => (
              <div
                key={title}
                className={`rounded-lg p-5 text-center flex flex-col items-center transition-shadow hover:shadow-lg ${
                  dark ? "bg-[#172a64] text-white" : "bg-gray-200 text-[#172a64]"
                }`}
              >
                {icon}
                <h3 className={`font-bold text-sm uppercase mb-3 ${dark ? "text-white" : "text-[#172a64]"}`}>
                  {title}
                </h3>
                <p className={`text-xs leading-relaxed text-center ${dark ? "text-white/90" : "text-gray-600"}`}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Visión + Misión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 leading-relaxed text-justify text-sm">
                <span className="font-bold text-[#172a64]">VISIÓN: </span>
                Ser reconocidos como una empresa confiable e innovadora, que satisface las necesidades de sus clientes con calidad y puntualidad.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed text-justify text-sm">
                <span className="font-bold text-[#172a64]">MISIÓN: </span>
                Generar un alto nivel de calidad en el suministro de servicios y productos logrando con esto una relación de trabajo seria con nuestros clientes, apoyándolos siempre para alcanzar sus metas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presencia */}
      <section id="presencia" className="py-16 bg-gray-200 relative">
        {/* Vertical label */}
        <div className="absolute right-0 top-0 flex items-start pointer-events-none pt-4">
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold tracking-widest uppercase text-[#172a64]/40 pr-2">
            Presencia
          </span>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: text + icons */}
            <div>
              <p className="text-gray-700 leading-relaxed text-justify text-sm mb-8">
                Con una trayectoria sólida y en constante evolución, la empresa ha intervenido
                en proyectos de carácter industrial, mineros, urbanización, edificación,
                infraestructura vial, hidráulica y obras de alto impacto social, en diferentes
                estados del país.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="border border-[#172a64]/30 rounded p-3 flex items-center justify-center bg-white/50 aspect-square relative">
                    <Image
                      src={`${BASE}/images/presencia/${n}.png`}
                      alt={`Sector ${n}`}
                      fill
                      className="object-contain p-3"
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: map image */}
            <div className="relative w-full h-72 lg:h-96">
              <Image
                src={`${BASE}/images/mapa.png`}
                alt="Presencia de HYM Construcciones en México"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bottom quote */}
          <p className="text-center text-gray-600 italic text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            Cada obra ejecutada refleja un estándar superior, donde la planeación, el
            control de calidad y la seguridad son pilares fundamentales.
          </p>
        </div>
      </section>
    </>
  );
}
