"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
import { useState, useEffect } from "react"; // useEffect kept for mobile menu close on route change

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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#172a64] shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-28">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={`${BASE}/images/logoBlanco.png`}
            alt="HYM Construcciones"
            width={360}
            height={128}
            className="w-auto object-contain h-24"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label, dropdown }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            const linkClass = `text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
              active
                ? "text-white border-b-2 border-white pb-0.5"
                : "text-white/80 hover:text-white"
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
          className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
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
        <div className="lg:hidden bg-[#172a64] border-t border-white/20 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label, dropdown }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <div key={href}>
                  <Link
                    href={href}
                    className={`block py-2 text-sm font-semibold uppercase tracking-wide border-b border-white/20 ${
                      active ? "text-white" : "text-white/80"
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
                          className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors"
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
