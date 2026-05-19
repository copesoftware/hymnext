import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
}

export default function Breadcrumb({
  title,
  backgroundImage,
}: BreadcrumbProps) {
  return (
    <div
      className={`relative flex items-center justify-center pt-36 pb-16 bg-cover bg-center ${!backgroundImage ? "bg-[#8898b0]" : ""}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-[#172a64]/70" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <ol className="flex items-center justify-center gap-2 text-sm text-white/80">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
          </li>
          <li className="before:content-['/'] before:mr-2">{title}</li>
        </ol>
      </div>
    </div>
  );
}
