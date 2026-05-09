export const COMPANY = {
  name: "HYM Construcciones",
  direccion:
    "Calle circuito Revolución entre Granito y Bacobampo, C.P. 85890  Navojoa Sonora.",
  telefono: "(642) 422 5105",
  correo: "contacto@hymconstrucciones.com.mx",
  gMapsIframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5!2d-109.4383711!3d27.0624316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b81b6dc026f3db%3A0x3c097febd40b6dff!2sHyM%20Construcciones!5e0!3m2!1ses!2smx!4v1715000000000!5m2!1ses!2smx",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const SERVICES = [
  {
    id: 1,
    key: "obra-civil",
    label: "OBRA CIVIL",
    title: "Obra civil",
    image: "/images/web/inicio/obra_civil.jpg",
    items: [
      "Construcción de losas de concreto.",
      "Demoliciones de vialidades y edificios.",
      "Construcción de cruces vehiculares y ferroviarios.",
      "Instalación de tubería sanitaria y de agua potable.",
      "Pavimentación de vialidades.",
      "Edificaciones de concreto.",
    ],
  },
  {
    id: 2,
    key: "movimiento-de-tierras",
    label: "MOVIMIENTO DE TIERRAS",
    title: "Movimiento de tierras",
    image: "/images/web/inicio/movimiento_de_tierras.jpg",
    items: [
      "Excavaciones con maquinaria pesada.",
      "Carga y acarreo.",
      "Compactación de terrenos.",
      "Cambios de relieve.",
      "Instalación de tuberías de drenaje.",
    ],
  },
  {
    id: 3,
    key: "arquitectura",
    label: "ARQUITECTURA",
    title: "Arquitectura",
    image: "/images/web/inicio/arquitectura.jpg",
    items: [
      "Remodelación de oficinas.",
      "Construcción de cuartos de control.",
      "Construcción de losas con acabados arquitectónicos.",
      "Instalación de piso falso.",
      "Construcciones de edificios.",
    ],
  },
  {
    id: 4,
    key: "estructura",
    label: "ESTRUCTURA",
    title: "Estructura",
    image: "/images/web/inicio/estructura.jpg",
    items: [
      "Fabricación y montaje de estructura.",
      "Instalaciones multipanel.",
      "Montaje de equipos.",
      "Instalación de lámina (KR-18, R72, R101).",
    ],
  },
  {
    id: 5,
    key: "tuberias",
    label: "TUBERÍAS",
    title: "Tuberías",
    image: "/images/web/inicio/instalaciones.jpg",
    items: [
      "Tubería de acero al carbón.",
      "Tubería de acero inoxidable.",
      "Tubería HDPE.",
      "Tubería polipropileno.",
    ],
  },
  {
    id: 6,
    key: "recubrimientos",
    label: "RECUBRIMIENTOS INDUSTRIALES",
    title: "Recubrimientos industriales",
    image: "/images/web/inicio/recubrimientos_industriales.jpg",
    items: [
      "Pinturas epóxicas.",
      "Pinturas industriales.",
      "Pinturas comerciales.",
      "Sandblast / arenado.",
      "Relleno autonivelante.",
      "Recubrimientos industriales.",
    ],
  },
];

export const GALLERY_CATEGORIES = [
  { key: "all", label: "TODO" },
  { key: "01", label: "OBRA CIVIL" },
  { key: "02", label: "MOVIMIENTO DE TIERRAS" },
  { key: "03", label: "ARQUITECTURA" },
  { key: "04", label: "ESTRUCTURA" },
  { key: "05", label: "TUBERÍAS" },
  { key: "06", label: "RECUBRIMIENTOS INDUSTRIALES" },
];

export const GALLERY_IMAGES = [
  // Obra Civil
  ...Array.from({ length: 5 }, (_, i) => ({
    src: `/images/web/servicios/1/1.${i + 1}.jpg`,
    category: "01",
    title: "Obra civil",
  })),
  // Movimiento de tierras
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `/images/web/servicios/2/2.${i + 1}.jpg`,
    category: "02",
    title: "Movimiento de tierras",
  })),
  // Arquitectura
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `/images/web/servicios/3/3.${i + 1}.jpg`,
    category: "03",
    title: "Arquitectura",
  })),
  // Estructura
  ...Array.from({ length: 9 }, (_, i) => ({
    src: `/images/web/servicios/4/4.${i + 1}.jpg`,
    category: "04",
    title: "Estructura",
  })),
  // Tuberías (mix of jpg and jpeg)
  ...[
    { src: `/images/web/servicios/5/5.1.jpg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.2.jpg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.3.jpg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.4.jpeg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.5.jpeg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.6.jpg`, category: "05", title: "Tuberías" },
    { src: `/images/web/servicios/5/5.7.jpg`, category: "05", title: "Tuberías" },
  ],
  // Recubrimientos
  ...Array.from({ length: 3 }, (_, i) => ({
    src: `/images/web/servicios/6/6.${i + 1}.jpg`,
    category: "06",
    title: "Recubrimientos industriales",
  })),
];

export const CLIENT_LOGOS = Array.from({ length: 25 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/clientes/${n}.png`;
});
