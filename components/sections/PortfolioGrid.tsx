"use client";
import { useState } from "react";
import Image from "next/image";

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface Project {
  cat: string;
  folder: string;
  label: string;
  nombre: string;
  ubicacion: string;
  anio: string;
  images: string[];
}

const PROJECTS: Project[] = [
  // 1. Obra Civil
  { cat: "OBRA CIVIL", folder: "1-obra-civil/6-Vialidades-2025", label: "1.Obra Civil / 6. Vialidades 2025", nombre: "Vialidades", ubicacion: "La Terronera, Jalisco.", anio: "2025", images: [
    "/images/proyectos/1-obra-civil/6-Vialidades-2025/V_07.jpeg",
    "/images/proyectos/1-obra-civil/6-Vialidades-2025/V_08.jpeg",
    "/images/proyectos/1-obra-civil/6-Vialidades-2025/V_09.jpeg",
    "/images/proyectos/1-obra-civil/6-Vialidades-2025/V_10.JPEG",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/7-Canales-2025", label: "1.Obra Civil / 7. Canales 2025", nombre: "Canales", ubicacion: "La Terronera, Jalisco.", anio: "2025", images: [
    "/images/proyectos/1-obra-civil/7-Canales-2025/Can_01.jpeg",
    "/images/proyectos/1-obra-civil/7-Canales-2025/Can_02.jpeg",
    "/images/proyectos/1-obra-civil/7-Canales-2025/Can_03.jpeg",
    "/images/proyectos/1-obra-civil/7-Canales-2025/Can_04.jpeg",
    "/images/proyectos/1-obra-civil/7-Canales-2025/Can_05.jpeg",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/3-Ampliacion-de-almacen-de-rollo-cerrado-2024", label: "1.Obra Civil / 3. Almacen 2024", nombre: "Almacen", ubicacion: "Navojoa, Sonora.", anio: "2024", images: [
    "/images/proyectos/1-obra-civil/3-Ampliacion-de-almacen-de-rollo-cerrado-2024/Alm_01.jpeg",
    "/images/proyectos/1-obra-civil/3-Ampliacion-de-almacen-de-rollo-cerrado-2024/Alm_02.jpeg",
    "/images/proyectos/1-obra-civil/3-Ampliacion-de-almacen-de-rollo-cerrado-2024/Alm_03.jpeg",
    "/images/proyectos/1-obra-civil/3-Ampliacion-de-almacen-de-rollo-cerrado-2024/Alm_04.jpeg",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/2-Subestación-2023", label: "1.Obra Civil / 2. Subestación 2023", nombre: "Subestación", ubicacion: "Navojoa, Sonora.", anio: "2023", images: [
    "/images/proyectos/1-obra-civil/2-Subestación-2023/SUB_01.JPG",
    "/images/proyectos/1-obra-civil/2-Subestación-2023/SUB_03.jpg",
    "/images/proyectos/1-obra-civil/2-Subestación-2023/SUB_04.jpg",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/5-Vialidades-2022", label: "1.Obra Civil / 5. Vialidades 2022", nombre: "Vialidades", ubicacion: "Navojoa, Sonora.", anio: "2022", images: [
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_01.jpg",
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_02.jpg",
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_03.jpeg",
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_04.jpg",
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_05.jpg",
    "/images/proyectos/1-obra-civil/5-Vialidades-2022/V_06.jpg",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/10. Cimentación", label: "1. Obra Civil / 10. Cimentación", nombre: "Cimentación para prensa de extrusión.", ubicacion: "Tijuana, Baja California.", anio: "2022", images: [
    "/images/proyectos/1-obra-civil/10. Cimentación/C_01.JPEG",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_02.JPEG",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_03.JPEG",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_04.jpg",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_05.JPEG",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_06.JPEG",
    "/images/proyectos/1-obra-civil/10. Cimentación/C_07.JPEG",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/1-L60-2022", label: "1.Obra Civil / 1. L60 2022", nombre: "Linea 60", ubicacion: "Navojoa, Sonora.", anio: "2022", images: [
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_01.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_02.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_03.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_04.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_05.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_06.jpg",
    "/images/proyectos/1-obra-civil/1-L60-2022/L60_07.jpg",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/9. Pavimentacion Tecate", label: "1. Obra Civil / 9. Pavimentación Tecate", nombre: "Pavimentación planta.", ubicacion: "Tecate, Baja California.", anio: "2021", images: [
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_01.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_02.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_03.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_04.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_05.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_06.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_07.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_08.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_09.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_10.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_11.JPEG",
    "/images/proyectos/1-obra-civil/9. Pavimentacion Tecate/PT_12.JPEG",
  ]},
  { cat: "OBRA CIVIL", folder: "1-obra-civil/8-Centro-recreativo", label: "1.Obra Civil / 8. Centro recreativo", nombre: "Centro recreativo", ubicacion: "Tecate, Baja California.", anio: "2019", images: [
    "/images/proyectos/1-obra-civil/8-Centro-recreativo/CR_01.JPG",
    "/images/proyectos/1-obra-civil/8-Centro-recreativo/CR_02.JPG",
    "/images/proyectos/1-obra-civil/8-Centro-recreativo/CR_03.JPG",
    "/images/proyectos/1-obra-civil/8-Centro-recreativo/CR_04.JPG",
  ]},
  // 2. Movimiento de Tierras
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/6-Canales", label: "2. Movimiento de Tierras / 6. Canales", nombre: "Canales", ubicacion: "La Terronera, Jalisco.", anio: "2025", images: [
    "/images/proyectos/2-movimiento-tierras/6-Canales/Cal_01.jpeg",
    "/images/proyectos/2-movimiento-tierras/6-Canales/Cal_02.jpeg",
    "/images/proyectos/2-movimiento-tierras/6-Canales/Cal_03.jpeg",
    "/images/proyectos/2-movimiento-tierras/6-Canales/Cal_04.jpeg",
  ]},
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/2-Tanques-2025", label: "2. Movimiento de Tierras / 2. Calderas 2025", nombre: "Calderas", ubicacion: "Navojoa, Sonora.", anio: "2025", images: [
    "/images/proyectos/2-movimiento-tierras/2-Tanques-2025/WhatsApp Image 2025-02-06 at 10.09.04 AM (1).jpeg",
    "/images/proyectos/2-movimiento-tierras/2-Tanques-2025/WhatsApp Image 2025-02-06 at 10.24.31 AM (2).jpeg",
    "/images/proyectos/2-movimiento-tierras/2-Tanques-2025/WhatsApp Image 2025-02-06 at 10.24.32 AM (3).jpeg",
    "/images/proyectos/2-movimiento-tierras/2-Tanques-2025/WhatsApp Image 2025-02-06 at 10.24.32 AM.jpeg",
  ]},
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/3-L20-2024", label: "2. Movimiento de Tierras / 3. L20 2024", nombre: "Linea 20", ubicacion: "Navojoa, Sonora.", anio: "2024", images: [
    "/images/proyectos/2-movimiento-tierras/3-L20-2024/L20_01.jpeg",
    "/images/proyectos/2-movimiento-tierras/3-L20-2024/L20_02.JPEG",
    "/images/proyectos/2-movimiento-tierras/3-L20-2024/L20_03.jpeg",
  ]},
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/4-Vialidades", label: "2. Movimiento de Tierras / 4. Vialidades", nombre: "4. Vialidades", ubicacion: "Navojoa, Sonora.", anio: "2023", images: [
    "/images/proyectos/2-movimiento-tierras/4-Vialidades/V_01.jpg",
    "/images/proyectos/2-movimiento-tierras/4-Vialidades/V_02.jpg",
    "/images/proyectos/2-movimiento-tierras/4-Vialidades/V_03.jpg",
  ]},
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/1-L60-2022", label: "2. Movimiento de Tierras / 1. L60 2022", nombre: "Linea 60", ubicacion: "Navojoa, Sonora.", anio: "2022", images: [
    "/images/proyectos/2-movimiento-tierras/1-L60-2022/IMG_20220629_170524276.jpg",
    "/images/proyectos/2-movimiento-tierras/1-L60-2022/IMG_20220701_124633837.jpg",
    "/images/proyectos/2-movimiento-tierras/1-L60-2022/IMG_20220720_095733583.jpg",
    "/images/proyectos/2-movimiento-tierras/1-L60-2022/IMG_20220723_130010357.jpg",
    "/images/proyectos/2-movimiento-tierras/1-L60-2022/IMG_20220804_103538884.jpg",
  ]},
  { cat: "MOVIMIENTO DE TIERRAS", folder: "2-movimiento-tierras/7. Pavimentacion", label: "2. Movimiento de Tierras / 7. Pavimentación", nombre: "Pavimentación planta.", ubicacion: "Tecate, Baja California.", anio: "2021", images: [
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_01.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_02.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_03.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_04.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_05.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_06.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_07.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_08.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_09.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_10.JPEG",
    "/images/proyectos/2-movimiento-tierras/7. Pavimentacion/P_11.JPEG",
  ]},
  // 3. Arquitectura
  { cat: "ARQUITECTURA", folder: "3-arquitectura/3. Remodelación Comedor", label: "3. Arquitectura / 3. Remodelación Comedor", nombre: "Remodelación comedor.", ubicacion: "Tecate, Baja California.", anio: "2026", images: [
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_00.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_01.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_02.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_03.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_04.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_05.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_06.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_07.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_08.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_09.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_10.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_11.jpeg",
    "/images/proyectos/3-arquitectura/3. Remodelación Comedor/C_12.jpeg",
  ]},
  { cat: "ARQUITECTURA", folder: "3-arquitectura/2-Oficinas", label: "3. Arquitectura / 2. Oficinas", nombre: "Oficinas", ubicacion: "Navojoa, Sonora.", anio: "2022", images: [
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_01.JPG",
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_02.jpg",
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_03.jpg",
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_04.JPG",
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_05.JPG",
    "/images/proyectos/3-arquitectura/2-Oficinas/Of_06.JPG",
  ]},
  { cat: "ARQUITECTURA", folder: "3-arquitectura/1-Centro-recreativo", label: "3. Arquitectura / 1. Centro recreativo", nombre: "Centro recreativo", ubicacion: "Tecate, Baja California.", anio: "2019", images: [
    "/images/proyectos/3-arquitectura/1-Centro-recreativo/CR_01.JPG",
    "/images/proyectos/3-arquitectura/1-Centro-recreativo/CR_02.JPG",
    "/images/proyectos/3-arquitectura/1-Centro-recreativo/CR_03.JPG",
    "/images/proyectos/3-arquitectura/1-Centro-recreativo/CR_04.JPG",
  ]},
  // 4. Estructura
  { cat: "ESTRUCTURAS", folder: "4-estructura/0. Domo", label: "4. Estructura / 0. Domo", nombre: "Domo de Mineral.", ubicacion: "Monterrey, Nuevo León.", anio: "2026", images: [
    "/images/proyectos/4-estructura/0. Domo/D_01.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_02.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_03.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_04.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_05.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_06.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_07.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_08.jpeg",
    "/images/proyectos/4-estructura/0. Domo/D_09.jpeg",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/3-Tuberias", label: "4. Estructura / 3. Tuberías", nombre: "Rack Tuberías.", ubicacion: "Navojoa, Sonora.", anio: "2025", images: [
    "/images/proyectos/4-estructura/3-Tuberias/Tub_01.jpeg",
    "/images/proyectos/4-estructura/3-Tuberias/Tub_02.jpeg",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/Alm_01", label: "4. Estructura / Alm_01", nombre: "Plataforma Maquina 3.", ubicacion: "Navojoa, Sonora.", anio: "2025", images: [
    "/images/proyectos/4-estructura/Alm_01/Alm_01.jpeg",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/Lam_01", label: "4. Estructura / Lam_01", nombre: "Laminación en Edificio de Pastas.", ubicacion: "Navojoa, Sonora.", anio: "2025", images: [
    "/images/proyectos/4-estructura/Lam_01/Lam_01.jpeg",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/Tec_01", label: "4. Estructura / Tec_01", nombre: "Calderas.", ubicacion: "Navojoa, Sonora.", anio: "2025", images: [
    "/images/proyectos/4-estructura/Tec_01/Tec_01.jpeg",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/1-Taller-de-Mantenimiento", label: "4. Estructura / 1. Taller de Mantenimiento", nombre: "Taller de mantenimiento", ubicacion: "La Terronera, Jalisco.", anio: "2024", images: [
    "/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_01.jpeg",
    "/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_02.jpeg",
    "/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_03.JPEG",
    "/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_04.png",
    "/images/proyectos/4-estructura/1-Taller-de-Mantenimiento/TM_05.png",
  ]},
  { cat: "ESTRUCTURAS", folder: "4-estructura/2-Laboratorio", label: "4. Estructura / 2. Laboratorio", nombre: "Laboratorio", ubicacion: "La Terronera, Jalisco.", anio: "2024", images: [
    "/images/proyectos/4-estructura/2-Laboratorio/Lab_01.jpg",
    "/images/proyectos/4-estructura/2-Laboratorio/Lab_02.jpeg",
    "/images/proyectos/4-estructura/2-Laboratorio/Lab_03.JPG",
    "/images/proyectos/4-estructura/2-Laboratorio/Lab_04.JPG",
  ]},
  // 5. Instalaciones
  { cat: "INSTALACIONES", folder: "5-instalaciones/1-Laboratorio", label: "5. Instalaciones / 1. Laboratorio", nombre: "Laboratorio", ubicacion: "La Terronera, Jalisco.", anio: "2024", images: [
    "/images/proyectos/5-instalaciones/1-Laboratorio/Inst_01.JPG",
    "/images/proyectos/5-instalaciones/1-Laboratorio/Inst_02.JPG",
    "/images/proyectos/5-instalaciones/1-Laboratorio/Inst_03.JPEG",
    "/images/proyectos/5-instalaciones/1-Laboratorio/Inst_04.JPEG",
    "/images/proyectos/5-instalaciones/1-Laboratorio/Inst_05.JPEG",
  ]},
  // 6. Electromecánico
  { cat: "ELECTROMECÁNICO", folder: "6-electromecanico/1-Taller-de-Mantenimiento", label: "6. Electromecánico / 1. Taller de Mantenimiento", nombre: "Taller de mantenimiento", ubicacion: "La Terronera, Jalisco.", anio: "2024", images: [
    "/images/proyectos/6-electromecanico/1-Taller-de-Mantenimiento/Elec_02.JPEG",
    "/images/proyectos/6-electromecanico/1-Taller-de-Mantenimiento/Elec_03.JPEG",
    "/images/proyectos/6-electromecanico/1-Taller-de-Mantenimiento/Elec_04.JPEG",
  ]},
  { cat: "ELECTROMECÁNICO", folder: "6-electromecanico/2-Laboratorio", label: "6. Electromecánico / 2. Laboratorio", nombre: "Laboratorio", ubicacion: "La Terronera, Jalisco.", anio: "2024", images: [
    "/images/proyectos/6-electromecanico/2-Laboratorio/Elec_00.jpeg",
    "/images/proyectos/6-electromecanico/2-Laboratorio/Elec_01.JPEG",
  ]},
  // 7. Tuberías
  { cat: "TUBERÍAS", folder: "7-tuberias/1-Acero-al-carbon/1-Tuberia-de-condensados-maquina-3", label: "7. Tuberías / 1. Acero al carbon / 1. Tuberia de condensados maquina 3", nombre: "Tuberia de condensados maquina 3", ubicacion: "Navojoa, Sonora.", anio: "2024", images: [
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/1-Tuberia-de-condensados-maquina-3/Ac_06.jpeg",
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/1-Tuberia-de-condensados-maquina-3/Ac_07.jpeg",
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/1-Tuberia-de-condensados-maquina-3/Ac_08.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/1-Acero-al-carbon/2-Tuberia-de-vapor-y-condensados-maq-3-2024", label: "7. Tuberías / 1. Acero al carbon / 2. Tuberia de vapor y condensados maq. 3 2024", nombre: "Tuberia de vapor y condensados maquina 3.", ubicacion: "Navojoa, Sonora.", anio: "2024", images: [
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/2-Tuberia-de-vapor-y-condensados-maq-3-2024/Ac_02.jpeg",
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/2-Tuberia-de-vapor-y-condensados-maq-3-2024/Ac_03.jpeg",
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/2-Tuberia-de-vapor-y-condensados-maq-3-2024/Ac_04.jpeg",
    "/images/proyectos/7-tuberias/1-Acero-al-carbon/2-Tuberia-de-vapor-y-condensados-maq-3-2024/Ac_05.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/2-Acero-inoxidable", label: "7. Tuberías / 2. Acero inoxidable", nombre: "Tuberias", ubicacion: "Navojoa, Sonora.", anio: "2023", images: [
    "/images/proyectos/7-tuberias/2-Acero-inoxidable/Ac_01.jpeg",
    "/images/proyectos/7-tuberias/2-Acero-inoxidable/Ac_02.jpg",
    "/images/proyectos/7-tuberias/2-Acero-inoxidable/Ac_03.jpg",
    "/images/proyectos/7-tuberias/2-Acero-inoxidable/Ac_04.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/3-HDPE/1. Tecate/1. Vialidad 2024", label: "7. Tuberías / 3. HDPE / 1. Tecate / 1. Vialidad 2024", nombre: "Vialidad", ubicacion: "Tecate, Baja California.", anio: "2024", images: [
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/1. Vialidad 2024/HDPE_01.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/1. Vialidad 2024/HDPE_02.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/1. Vialidad 2024/HDPE_03.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/1. Vialidad 2024/HDPE_04.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024", label: "7. Tuberías / 3. HDPE / 1. Tecate / 2. Biogas 2024", nombre: "Tubería subterránea biogas", ubicacion: "Tecate, Baja California.", anio: "2024", images: [
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024/HDPE_01.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024/HDPE_02.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024/HDPE_03.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024/HDPE_04.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/1. Tecate/2. Biogas 2024/HDPE_05.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/3-HDPE/2. Bachoco/1. Sinaloa", label: "7. Tuberías / 3. HDPE / 2. Bachoco / 1. Sinaloa", nombre: "Red hidráulica exterior", ubicacion: "Los Mochis, Sinaloa.", anio: "2023", images: [
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/1. Sinaloa/HDPE_01.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/1. Sinaloa/HDPE_02.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/1. Sinaloa/HDPE_03.jpeg",
  ]},
  { cat: "TUBERÍAS", folder: "7-tuberias/3-HDPE/2. Bachoco/2. Caborca", label: "7. Tuberías / 3. HDPE / 2. Bachoco / 2. Caborca", nombre: "Red hidráulica", ubicacion: "Caborca, Sonora.", anio: "2024", images: [
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_01.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_02.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_03.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_04.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_05.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_06.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_07.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_08.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_10.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_11.jpeg",
    "/images/proyectos/7-tuberias/3-HDPE/2. Bachoco/2. Caborca/HDPE_12.jpeg",
  ]},
  // 8. Recubrimientos
  { cat: "RECUBRIMIENTOS INDUSTRIALES", folder: "8-recubrimientos/1. Cuarto de Baterias 2024", label: "8. Recubrimientos / 1. Cuarto de Baterías 2024", nombre: "Cuarto de baterías.", ubicacion: "Tecate, Baja California.", anio: "2024", images: [
    "/images/proyectos/8-recubrimientos/1. Cuarto de Baterias 2024/CB_01.jpeg",
    "/images/proyectos/8-recubrimientos/1. Cuarto de Baterias 2024/CB_02.jpeg",
    "/images/proyectos/8-recubrimientos/1. Cuarto de Baterias 2024/CB_03.jpeg",
    "/images/proyectos/8-recubrimientos/1. Cuarto de Baterias 2024/CB_04.jpeg",
  ]},
  { cat: "RECUBRIMIENTOS INDUSTRIALES", folder: "8-recubrimientos/2. L60 2022", label: "8. Recubrimientos / 2. Línea 60 2022", nombre: "Línea 60.", ubicacion: "Navojoa, Sonora.", anio: "2022", images: [
    "/images/proyectos/8-recubrimientos/2. L60 2022/L60_01.jpeg",
    "/images/proyectos/8-recubrimientos/2. L60 2022/L60_02.jpeg",
    "/images/proyectos/8-recubrimientos/2. L60 2022/L60_03.jpeg",
    "/images/proyectos/8-recubrimientos/2. L60 2022/L60_04.jpeg",
  ]},
  { cat: "RECUBRIMIENTOS INDUSTRIALES", folder: "8-recubrimientos/3. Envasado 2020", label: "8. Recubrimientos / 3. Envasado 2020", nombre: "Planta de envasado.", ubicacion: "Tecate, Baja California.", anio: "2020", images: [
    "/images/proyectos/8-recubrimientos/3. Envasado 2020/Ri_00.jpg",
    "/images/proyectos/8-recubrimientos/3. Envasado 2020/Ri_02.JPG",
    "/images/proyectos/8-recubrimientos/3. Envasado 2020/Ri_03.JPG",
  ]},
];

const CATS = ["TODO", "OBRA CIVIL", "MOVIMIENTO DE TIERRAS", "ARQUITECTURA", "ESTRUCTURAS", "INSTALACIONES", "ELECTROMECÁNICO", "TUBERÍAS", "RECUBRIMIENTOS INDUSTRIALES"];

const PROJECTS_PREFIXED = PROJECTS.map(p => ({ ...p, images: p.images.map(src => `${B}${src}`) }));

// Modal component
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const imgs = project.images;
  if (!imgs.length) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-3xl leading-none">&times;</button>
        <div className="relative aspect-video bg-black rounded overflow-hidden">
          <Image src={imgs[idx]} alt={project.nombre} fill className="object-contain" sizes="800px" />
        </div>
        {imgs.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {imgs.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeCat, setActiveCat] = useState("TODO");
  const [modal, setModal] = useState<Project | null>(null);
  const [modalIdx, setModalIdx] = useState(0);

  const filtered = activeCat === "TODO" ? PROJECTS_PREFIXED : PROJECTS_PREFIXED.filter(p => p.cat === activeCat);

  return (
    <>
      {/* Filter bar */}
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {CATS.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-3 py-3 text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeCat === cat
                  ? "border-[#172a64] text-[#172a64]"
                  : "border-transparent text-gray-500 hover:text-[#172a64]"
              } ${i > 0 ? "before:content-['|'] before:mr-3 before:text-gray-300" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((project) => {
          const thumb = project.images[0];
          return (
            <div key={project.label} className="rounded overflow-hidden flex flex-col relative h-[320px]">
              {/* Background image */}
              <Image
                src={thumb}
                alt={project.nombre}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#172a64]/70" />
              {/* Body */}
              <div className="relative px-4 py-4 flex-1 text-white text-xs space-y-0.5">
                {project.nombre && <p><span className="font-semibold">Proyecto:</span> {project.nombre}</p>}
                <p><span className="font-semibold">Ubicación:</span> {project.ubicacion}</p>
                <p><span className="font-semibold">Año:</span> {project.anio}</p>
              </div>
              {/* CTA */}
              <button
                onClick={() => { setModal(project); setModalIdx(0); }}
                className="relative flex items-center gap-2 px-4 py-3 text-white text-xs font-semibold hover:text-[#f0c040] transition-colors"
              >
                <svg className="w-8 h-3" fill="none" stroke="currentColor" viewBox="0 0 32 12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M0 6h28M22 1l6 5-6 5" />
                </svg>
                Ver proyecto
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal con galería real */}
      {modal && (
        <div className="fixed inset-0 bg-black/85 z-50 overflow-y-auto" onClick={() => setModal(null)}>
          <div className="min-h-full flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl" onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button onClick={() => setModal(null)} className="absolute -top-8 right-0 text-white text-4xl leading-none hover:text-gray-300">&times;</button>
            {/* Title */}
            <p className="text-white text-base font-semibold text-center mb-3">{modal.nombre || modal.label}</p>
            {/* Image */}
            <div className="relative aspect-video bg-black rounded overflow-hidden">
              <Image
                src={modal.images[modalIdx]}
                alt={modal.nombre}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              {/* Prev */}
              {modal.images.length > 1 && (
                <>
                  <button
                    onClick={() => setModalIdx(i => (i - 1 + modal.images.length) % modal.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button
                    onClick={() => setModalIdx(i => (i + 1) % modal.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </button>
                </>
              )}
            </div>
            {/* Dots */}
            {modal.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {modal.images.map((_, i) => (
                  <button key={i} onClick={() => setModalIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === modalIdx ? "bg-white" : "bg-white/40"}`} />
                ))}
              </div>
            )}
            {/* Counter */}
            <p className="text-center text-white/60 text-xs mt-2">{modalIdx + 1} / {modal.images.length}</p>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
