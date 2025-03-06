import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="relative h-80 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        
        <div className="mb-6">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-300 text-lg mb-8">{project.description}</p>
        
        <div className="mt-8">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}