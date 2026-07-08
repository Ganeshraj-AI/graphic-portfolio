import React from "react";
import { notFound } from "next/navigation";
import { getProjects } from "@/data/projectsServer";
import ProjectClientPage from "@/components/ProjectClientPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClientPage project={project} />;
}
