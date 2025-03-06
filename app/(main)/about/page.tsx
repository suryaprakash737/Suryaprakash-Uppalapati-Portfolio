"use client";
import { useState } from "react";

import { FaBriefcase, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";


export default function About() {
  const [showResume, setShowResume] = useState(false);

  return (


    
    <main className="max-w-6xl mx-auto p-8 text-white">
      {/* Hero Section */}
      
      {/* Hero Section */}
<section className="relative flex flex-col items-center text-center p-10 bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg shadow-lg">

{/* Under Development Badge */}
<motion.div
  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-8 py-2 rounded-lg text-sm md:text-base font-bold shadow-xl flex items-center space-x-2 w-auto whitespace-nowrap"
  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
>
  🚀 <span>This Portfolio is Under Development – Stay Tuned for ML Models & Chatbot Assistance!</span> ⚡
</motion.div>

{/* Main Title */}
<h1 className="text-5xl font-extrabold mt-6 animate-pulse">
  👋 Hello, I&apos;m <span className="text-yellow-400">Suryaprakash Uppalapati</span>
</h1>

</section>


      {/* Why Hire Me Section */}
      <section className="mt-12 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-yellow-400">✨ Why Work With Me?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
            <FaStar className="text-yellow-400 text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold">AI & ML Expertise</h3>
            <p className="text-gray-300 mt-2">Deep experience in **ML, NLP, Deep Learning**, and scalable AI solutions.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
            <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold">Data-Driven Solutions</h3>
            <p className="text-gray-300 mt-2">Skilled in **data science, predictive modeling, and cloud deployment (AWS, GCP).**</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
            <FaBriefcase className="text-blue-400 text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-semibold">Industry-Level Projects</h3>
            <p className="text-gray-300 mt-2">Built **real-time object detection systems** and **AI-powered recommendation engines**.</p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-center text-yellow-400">🚀 Experience & Achievements</h2>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
            <h3 className="text-2xl font-semibold">Research Assistant - GMU</h3>
            <p className="text-gray-300">📍 Community Informatics Lab | <span className="text-yellow-300">2024 - Present</span></p>
            <p className="text-gray-400 mt-2">Conducting **AI-driven research on real-time machine learning models**.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-400">
            <h3 className="text-2xl font-semibold">Machine Learning Engineer</h3>
            <p className="text-gray-300">📍 Freelance | <span className="text-green-300">2023 - Present</span></p>
            <p className="text-gray-400 mt-2">Developed **predictive analytics models & AI-powered tools** for real-world applications.</p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-center text-yellow-400">📚 Education</h2>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-400">
            <h3 className="text-2xl font-semibold">M.S. in Computer Science (ML)</h3>
            <p className="text-gray-300">📍 George Mason University | <span className="text-blue-300">2023 - Present</span></p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-400">
            <h3 className="text-2xl font-semibold">Machine Learning Specialization</h3>
            <p className="text-gray-300">📍 DeepLearning.AI | <span className="text-purple-300">2023</span></p>
          </div>
        </div>
      </section>

      {/* Resume Toggle */}
      <section className="mt-12 text-center">
        <button onClick={() => setShowResume(!showResume)} className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition shadow-lg">
          {showResume ? "Hide Resume" : "📄 View My Resume"}
        </button>
        {showResume && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <iframe src="/resume.pdf" className="w-full h-[600px] mt-4 border-2 border-gray-700 rounded-lg" title="Resume" />
            <a href="/resume.pdf" download className="mt-4 inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
              ⬇ Download Resume
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
