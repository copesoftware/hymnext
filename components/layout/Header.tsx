"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  {
    href: "/nuestra-empresa",
    label: "Nuestra empresa",
    dropdown: [
      { href: "/nuestra-empresa#quienes-somos", label: "Acerca de HyM" },
      { href: "/nuestra-empresa#filosofia", label: "Filosofía" },
      { href: "/nuestra-empresa#presencia", label: "Presencia" },
    ],
  },
  // { href: "/servicios", label: "Servicios" }, // oculto temporalmente
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contactos" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent only on homepage hero
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    // Trigger immediately on mount
    setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={transparent ? `${BASE}/images/logoTrazo_blanco.png` : `${BASE}/images/logoTrazo_gris.png`}
            alt="HYM Construcciones"
            width={120}
            height={40}
            className="h-10 w-auto object-contain transition-opacity duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label, dropdown }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            const linkClass = `text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
              transparent
                ? active
                  ? "text-white border-b-2 border-white pb-0.5"
                  : "text-white/90 hover:text-white"
                : active
                ? "text-[#172a64] border-b-2 border-[#172a64] pb-0.5"
                : "text-gray-700 hover:text-[#172a64]"
            }`;

            if (dropdown) {
              return (
                <div key={href} className="relative group">
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#172a64] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={href} href={href} className={linkClass}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            transparent ? "text-white" : "text-gray-700 hover:text-[#172a64]"
          }`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label, dropdown }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <div key={href}>
                  <Link
                    href={href}
                    className={`block py-2 text-sm font-semibold uppercase tracking-wide border-b border-gray-100 ${
                      active ? "text-[#172a64]" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </Link>
                  {dropdown && (
                    <div className="pl-4 pb-1">
                      {dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1.5 text-sm text-gray-500 hover:text-[#172a64] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
