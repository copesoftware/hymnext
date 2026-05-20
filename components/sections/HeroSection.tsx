const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        poster={`${BASE}/images/web/inicio/obra_civil.jpg`}
        aria-hidden="true"
      >
        <source src={`${BASE}/video/hero.mp4`} type="video/mp4" />
      </video>



      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Bienvenido
        </h2>
      </div>
    </section>
  );
}
