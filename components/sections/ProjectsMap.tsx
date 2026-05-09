"use client";
import { useEffect, useRef, useState } from "react";
import { getSupabase } from "@/lib/supabase";

interface MapPoint {
  name: string;
  texto: string;
  lat: number;
  lon: number;
  country: string;
}

// Fallback data shown in local dev (when PHP backend is unavailable)
const FALLBACK_POINTS: MapPoint[] = [
  { name: "Tijuana", texto: "Proyectos en Baja California", lat: 32.53, lon: -117.03, country: "Baja California" },
  { name: "Navojoa", texto: "Sede principal — Sonora", lat: 27.07, lon: -109.44, country: "Sonora" },
  { name: "Los Mochis", texto: "Proyectos en Sinaloa", lat: 25.79, lon: -108.99, country: "Sinaloa" },
  { name: "Monterrey", texto: "Proyectos en Nuevo León", lat: 25.67, lon: -100.31, country: "Nuevo León" },
  { name: "Guadalajara", texto: "Proyectos en Jalisco", lat: 20.66, lon: -103.35, country: "Jalisco" },
];

export default function ProjectsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const chartRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        // Dynamically import Highcharts to avoid SSR issues
        const [Highcharts, topology] = await Promise.all([
          import("highcharts/highmaps"),
          fetch(
            "https://code.highcharts.com/mapdata/countries/mx/mx-all.topo.json"
          ).then((r) => r.json()),
        ]);

        // Try to fetch project points from Supabase
        let points: MapPoint[] = [];
        try {
          const client = getSupabase();
          if (!client) throw new Error("Supabase no configurado");

          const { data, error: dbError } = await client
            .from("tblPuntos")
            .select("nombres, texto, latitud, longitud, nombreEstado")
            .eq("status", 1);

          console.log("[ProjectsMap] Supabase response:", { data, dbError });

          if (dbError) throw new Error(dbError.message);
          if (!data || data.length === 0) throw new Error("Tabla vacía o sin datos con status=1");

          points = data.map((r) => ({
            name: r.nombres,
            texto: r.texto,
            lat: r.latitud,
            lon: r.longitud,
            country: r.nombreEstado,
          }));
        } catch (err) {
          console.warn("[ProjectsMap] Usando datos de ejemplo:", err);
          // Supabase unavailable or not configured — use fallback data
          points = FALLBACK_POINTS;
          if (!cancelled) setUsingFallback(true);
        }

        if (cancelled || !containerRef.current) return;

        const seriesData = points.map((p) => ({
          name: p.name,
          lat: p.lat,
          lon: p.lon,
          description: p.texto,
          estado: p.country,
        }));

        // @ts-expect-error Highcharts maps typing
        chartRef.current = Highcharts.mapChart(containerRef.current, {
          chart: { map: topology, backgroundColor: "#b0bec5" },
          title: { text: "" },
          credits: { enabled: false },
          mapNavigation: {
            enabled: true,
            buttonOptions: { verticalAlign: "bottom" },
          },
          tooltip: {
            formatter: function (
              this: { point: { name: string; description: string; estado: string } }
            ) {
              return `<b>${this.point.name}</b><br/>${this.point.estado}<br/><em>${this.point.description}</em>`;
            },
          },
          series: [
            {
              type: "map",
              name: "México",
              mapData: topology,
              color: "#172a64",
              borderColor: "#2a4a8a",
              borderWidth: 0.5,
              states: { hover: { color: "#1e3a7a" } },
              showInLegend: false,
            },
            {
              type: "mappoint",
              name: "Proyectos",
              color: "#ffffff",
              marker: { symbol: "mapmarker", radius: 8, fillColor: "#ffffff" },
              data: seriesData,
              dataLabels: { enabled: false },
            },
          ],
        });

        if (!cancelled) setLoading(false);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Error al cargar el mapa.");
          setLoading(false);
        }
      }
    }

    init();
    return () => {
      cancelled = true;
      if (
        chartRef.current &&
        typeof (chartRef.current as { destroy: () => void }).destroy === "function"
      ) {
        (chartRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10 min-h-[400px]">
          <div className="text-[#172a64] text-center">
            <div className="w-10 h-10 border-4 border-[#172a64] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Cargando mapa de proyectos…</p>
          </div>
        </div>
      )}
      {error && (
        <div className="min-h-[200px] flex items-center justify-center text-red-600 text-sm bg-red-50 rounded-lg p-6">
          {error}
        </div>
      )}
      {usingFallback && !loading && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded px-3 py-1.5 mb-2">
          Mostrando datos de ejemplo. Los proyectos reales se cargarán en producción.
        </p>
      )}
      <div ref={containerRef} className="w-full min-h-[500px]" />
    </div>
  );
}

