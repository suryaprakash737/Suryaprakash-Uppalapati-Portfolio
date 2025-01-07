"use client";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Dynamic Object Detection System",
      description: "Real-time object detection using YOLO. Improved accuracy by 40%.",
      category: "ai",
      image: "/project1.png",
      link: "https://github.com/suryaprakash737/ObjectDetectionUsingYOLO",
    },
    {
      id: 2,
      title: "Meta Llama 2 Fine-Tuning",
      description: "Fine-tuned Llama 2 for specific domain tasks, improving response accuracy by 30%.",
      category: "ml",
      image: "/project2.png",
      link: "https://github.com/suryaprakash737/DomainSpecificLanguageModel",
    },
    {
      id: 3,
      title: "Visualizing COVID-19 Data",
      description: "Developed a Power BI dashboard to analyze global pandemic data.",
      category: "data-analysis",
      image: "/project3.png",
      link: "covid-project.html",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      {/* Header Section */}
      <section className="text-center bg-gradient-to-r from-orange-500 to-blue-400 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg">A showcase of my work in AI, Machine Learning, and Data Science.</p>
      </section>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        {["all", "ai", "ml", "data-analysis"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md ${
              filter === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category === "all" ? "All" : category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects
          .filter((project) => filter === "all" || project.category === filter)
          .map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-800"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
