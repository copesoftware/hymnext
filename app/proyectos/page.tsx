import Breadcrumb from "@/components/layout/Breadcrumb";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Portafolio de proyectos de HYM Construcciones.",
};

export default function ProyectosPage() {
  return (
    <>
      <Breadcrumb
        title="Portafolio"
        backgroundImage="/images/web/inicio/estructura.jpg"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

