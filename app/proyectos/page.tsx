import Breadcrumb from "@/components/layout/Breadcrumb";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import type { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portafolio de proyectos de HYM Construcciones.",
};

export default function ProyectosPage() {
  return (
    <>
      <Breadcrumb
        title="Portafolio"
        backgroundImage={`${BASE}/images/web/inicio/estructura.jpg`}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

