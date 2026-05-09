"use client";
import dynamic from "next/dynamic";

const ProjectsMap = dynamic(
  () => import("@/components/sections/ProjectsMap"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[500px] bg-gray-100 animate-pulse rounded-lg" />
    ),
  }
);

export default function ProjectsMapClient() {
  return <ProjectsMap />;
}
