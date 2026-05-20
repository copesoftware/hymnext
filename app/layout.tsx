import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HYM Construcciones",
    template: "%s | HYM Construcciones",
  },
  description:
    "Empresa constructora en Navojoa, Sonora. Obra civil, movimiento de tierras, arquitectura, estructura, tuberías y recubrimientos industriales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={openSans.variable}>
      <body className="flex flex-col min-h-screen font-[family-name:var(--font-open-sans)]">
        <Header />
        <main className="flex-1 pt-20 lg:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
