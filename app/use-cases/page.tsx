"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCases } from "@/data/use-cases";

export default function UseCasesPage() {
  const [cases] = useState(useCases);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(cases.flatMap(c => c.tags)));

  // Filter use cases by selected tag
  const filteredCases = selectedTag 
    ? cases.filter(c => c.tags.includes(selectedTag))
    : cases;

  return (
    <main className="max-w-full pt-24 min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto p-8 text-white">
        {/* Header with distinct styling */}
        <section className="text-center bg-gradient-to-r from-indigo-700 to-purple-700 p-10 rounded-lg shadow-lg mb-12">
          <h1 className="text-4xl font-bold">Data Science Case Studies</h1>
          <p className="mt-4 text-lg">In-depth solutions to real-world business problems</p>
        </section>

        {/* Explanation of difference */}
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300">
            While my <Link href="/projects" className="text-blue-400 hover:underline">Projects</Link> showcase 
            my technical capabilities, these case studies demonstrate how I've applied data science 
            to solve specific business problems. Each case study is structured to 
            highlight the full project lifecycle from problem definition to measurable business impact.
          </p>
        </div>

        {/* Filters as dropdown */}
<div className="mb-8">
  <div className="relative w-64 mx-auto">
    <select
      onChange={(e) => setSelectedTag(e.target.value === "all" ? null : e.target.value)}
      className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
    >
      <option value="all">All Skills</option>
      {allTags.map(tag => (
        <option key={tag} value={tag}>{tag}</option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</div>

        {/* Use cases */}
        <div className="space-y-12">
          {filteredCases.map(useCase => (
            <motion.div 
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image 
                    src={useCase.coverImage} 
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {useCase.tags.map(tag => (
                      <span key={tag} className="text-xs bg-indigo-900 text-indigo-200 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{useCase.title}</h2>
                  <p className="text-gray-400 mb-4 text-sm">{useCase.date}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Business Problem</h3>
                    <p className="text-gray-300">{useCase.businessProblem}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Key Results</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {useCase.results.slice(0, 2).map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/use-cases/${useCase.slug}`}
                    className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                  >
                    View Full Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}