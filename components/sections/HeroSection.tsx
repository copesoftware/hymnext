export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/web/inicio/obra_civil.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Bienvenido
        </h2>
        <div className="inline-block border border-white/60 px-6 py-4 max-w-2xl">
          <p className="text-lg md:text-xl italic font-light tracking-wider">
            INNOVACIÓN EN CADA DISEÑO, EXCELENCIA EN CADA CONSTRUCCIÓN.
          </p>
        </div>
      </div>
    </section>
  );
}
