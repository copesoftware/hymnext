import Breadcrumb from "@/components/layout/Breadcrumb";
import GallerySection from "@/components/sections/GallerySection";
import type { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Galería de servicios de HYM Construcciones: obra civil, movimiento de tierras, arquitectura, estructura, tuberías y recubrimientos industriales.",
};

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumb
        title="Servicios"
        backgroundImage={`${BASE}/images/web/inicio/obra_civil.jpg`}
      />
      <GallerySection />
    </>
  );
}
