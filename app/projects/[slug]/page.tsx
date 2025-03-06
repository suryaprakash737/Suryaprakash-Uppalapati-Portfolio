"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";

export default function ProjectPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    // Find the project based on the slug (using title for simplicity)
    // In a real app, you might want to use an ID or a proper slug field
    const foundProject = projects.find(p => 
      p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );
    
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params.slug]);

  if (!project) {
    return <div className="text-center p-12">Project not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      <ProjectDetails project={project} />
    </main>
  );
}