"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { programmingSkills, tools, certifications } from "@/data/skills";

import type AOS from 'aos';
let aosInstance: typeof AOS | undefined;
if (typeof window !== 'undefined') {
  // Use dynamic import to avoid SSR issues
  aosInstance = require('aos');
  require('aos/dist/aos.css');
}

export default function Skills() {
  useEffect(() => {
    if (aosInstance) {
      aosInstance.init({ duration: 1200, once: true });
    }
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-lg shadow-lg transform hover:scale-105 transition"
        data-aos="fade-up"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
          My Technical Skills
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Discover my expertise in AI, Machine Learning, and Data Science.
        </p>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="mt-12">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Programming Languages</h3>
            {programmingSkills.map((skill, index) => (
              <motion.div key={index} className="mb-2">
                <p className="text-lg">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-5">
                  <motion.div
                    className={`${skill.color} h-5 rounded-full text-center text-sm text-white`}
                    style={{ width: skill.level }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1 }}
                  >
                    {skill.level}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Tools & Frameworks</h3>
            {tools.map((tool, index) => (
              <motion.div key={index} className="mb-2">
                <p className="text-lg">{tool.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-5">
                  <motion.div
                    className={`${tool.color} h-5 rounded-full text-center text-sm text-white`}
                    style={{ width: tool.level }}
                    animate={{ width: tool.level }}
                    transition={{ duration: 1 }}
                  >
                    {tool.level}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-400">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition"
              data-aos="zoom-in"
              whileHover={{ scale: 1.05 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover"
                />
              </a>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-400">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}