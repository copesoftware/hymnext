import HeroSection from "@/components/sections/HeroSection";
import ServicesTabSection from "@/components/sections/ServicesTabSection";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYM Construcciones — Inicio",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesTabSection />
      <ClientsCarousel />
    </>
  );
}

