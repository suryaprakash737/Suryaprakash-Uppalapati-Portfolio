// app/projects/[slug]/page.tsx
// Remove the "use client" directive
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";

// Use the proper typing for page props in Next.js App Router
export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project on the server side
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  ) || projects[0];

  if (!project) {
    return <div className="text-center p-12">Project not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      <ProjectDetails project={project} />
    </main>
  );
}