import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/sections/ContactForm";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos. HYM Construcciones, Navojoa, Sonora. " + COMPANY.telefono,
};

export default function ContactoPage() {
  return (
    <>
      <Breadcrumb title="Contacto" />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Dirección */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
              <svg className="w-8 h-8 text-[#172a64] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2.5M20 6a2 2 0 00-2-2h-2.5M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6h16M8 10h8M8 14h5" />
              </svg>
              <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
              <p className="text-sm text-[#172a64]">{COMPANY.direccion}</p>
            </div>

            {/* Correo */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
              <svg className="w-8 h-8 text-[#172a64] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-800 mb-1">Correo</h3>
              <a href={`mailto:${COMPANY.correo}`} className="text-sm text-[#172a64] hover:underline">
                {COMPANY.correo}
              </a>
            </div>

            {/* Teléfono */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
              <svg className="w-8 h-8 text-[#172a64] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
              <a href={`tel:${COMPANY.telefono.replace(/\D/g, "")}`} className="text-sm text-[#172a64] hover:underline">
                {COMPANY.telefono}
              </a>
            </div>
          </div>

          {/* Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-96 lg:h-auto">
              <iframe
                src={COMPANY.gMapsIframe}
                className="w-full h-full min-h-[384px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación HYM Construcciones"
              />
            </div>
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
