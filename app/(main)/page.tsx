"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBriefcase, FaStar, FaCheckCircle, FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const fullText = "AI Engineer | Data Scientist | ML Innovator";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(100); // Typing speed

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setTimeout(() => setIsDeleting(!isDeleting), 1000); // Pause before deleting/retyping
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer); // Cleanup function
  }, [index, isDeleting, fullText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await res.json();
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-black text-white overflow-hidden">
      {/* Blinking Background Layers */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-transparent opacity-20 blur-3xl"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing Floating Orbs (AI Themed) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400 opacity-20 rounded-full blur-[120px]"
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500 opacity-20 rounded-full blur-[120px]"
        animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <motion.div className="relative text-center">
          {/* Under Development Banner */}
          <motion.div
            className="absolute -top-12 left-[48%] transform -translate-x-[48%] bg-yellow-500 text-black px-6 py-2 rounded-lg text-sm md:text-base font-bold shadow-xl flex items-center space-x-2"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            🚀 <span>This Portfolio is Under Development – Stay Tuned! </span> ⚡
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            👋 Welcome to My Portfolio!! <br />
            I&apos;m <span className="text-cyan-300">Suryaprakash Uppalapati</span>
          </motion.h1>
        </motion.div>

        {/* AI Terminal-Like Typing Effect */}
        <motion.p
          className="mt-4 text-2xl text-green-300 font-mono bg-black px-4 py-2 rounded-lg border border-green-500 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-yellow-400">AI Terminal:</span> {text}
          <span className="animate-blink">|</span>
        </motion.p>

        {/* Glowing Buttons */}
        <div className="mt-6 flex space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link href="#about">
              <div className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 shadow-md hover:shadow-cyan-500 transition">
                🔍 Learn More About Me
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link href="#projects">
              <div className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 shadow-md hover:shadow-green-500 transition">
                🚀 Explore My AI Projects
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section with Skills */}
      <section id="about" className="min-h-screen w-full">
        <div className="max-w-6xl mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg shadow-lg p-10"
          >
            {/* Why Hire Me Section */}
            <h2 className="text-4xl font-bold text-center text-yellow-400">✨ Why Work With Me?</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
                <FaStar className="text-yellow-400 text-5xl mx-auto mb-3" />
                <h3 className="text-2xl font-semibold">AI & ML Expertise</h3>
                <p className="text-gray-300 mt-2">Deep experience in ML, NLP, Deep Learning, and scalable AI solutions.</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
                <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-3" />
                <h3 className="text-2xl font-semibold">Data-Driven Solutions</h3>
                <p className="text-gray-300 mt-2">Skilled in data science, predictive modeling, and cloud deployment (AWS, GCP).</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition hover:scale-105">
                <FaBriefcase className="text-blue-400 text-5xl mx-auto mb-3" />
                <h3 className="text-2xl font-semibold">Industry-Level Projects</h3>
                <p className="text-gray-300 mt-2">Built real-time object detection systems and AI-powered recommendation engines.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Experience Timeline */}
<section className="w-full bg-gray-900 py-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="max-w-6xl mx-auto p-8"
  >
    <h2 className="text-4xl font-bold text-center text-yellow-400">🚀 Experience & Achievements</h2>
    <div className="mt-6 space-y-6">
      {/* Updated Research Assistant Entry */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
        <h3 className="text-2xl font-semibold">Voluntary Research Assistant - George Mason University</h3>
        <p className="text-gray-300">📍 Machine Learning Research | <span className="text-yellow-300">2024 - Present</span></p>
        <ul className="list-disc pl-6 mt-2 text-gray-400">
          <li>Built ML models (Random Forest, SVM) with 85% accuracy</li>
          <li>Implemented K-means clustering with silhouette analysis</li>
          <li>Automated ETL pipeline processing 100GB+ spatial data</li>
          <li>Created interactive choropleth maps using GeoPandas</li>
        </ul>
      </div>

      {/* Updated Software Developer Entry */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-400">
        <h3 className="text-2xl font-semibold">Software Developer - Virgoys Software</h3>
        <p className="text-gray-300">📍 Data Engineering | <span className="text-green-300">2023 - Present</span></p>
        <ul className="list-disc pl-6 mt-2 text-gray-400">
          <li>Developed data pipelines reducing processing time by 30%</li>
          <li>Implemented automated testing with pytest</li>
          <li>Led code reviews for ML model deployment</li>
        </ul>
      </div>
    </div>
  </motion.div>
</section>

      {/* Education Section */}
      <section className="w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto p-8"
        >
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
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-400 mt-6">
  <h3 className="text-2xl font-semibold">Certifications</h3>
  <ul className="list-disc pl-6 mt-2 text-gray-300">
    <li>
      <a 
        href="https://www.credly.com/badges/c314fb64-d2be-4aa9-8e77-fa5e9069afce?source=linked_in_profile" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
      >
        AWS Machine Learning Foundations
      </a>
    </li>
    <li>
      <a 
        href="https://www.udacity.com/certificate/e/159f2a22-769c-11ef-bbaf-531a1a6740b4" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
      >
        Introducing Generative AI (Udacity)
      </a>
    </li>
    <li>
      <a 
        href="https://www.coursera.org/account/accomplishments/verify/2IUSEAXSMMYQ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
      >
        Supervised ML: Regression/Classification
      </a>
    </li>
    <li>
      <a 
        href="/skills" 
        className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
      >
        View all certifications →
      </a>
    </li>
  </ul>
</div>

        </motion.div>
      </section>

    {/* Resume Section */}
<section className="w-full bg-gray-900 py-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="max-w-6xl mx-auto p-8 text-center relative"  // Added `relative` to parent div
  >
    <button
      onClick={() => setShowResume(!showResume)}
      className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition shadow-lg z-10" // Added z-index
    >
      {showResume ? "Hide Resume" : "📄 View My Resume"}
    </button>

    {showResume && (
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Displaying the Resume PDF in an iframe */}
        <iframe
          src="/documents/resume.pdf"
          className="w-full h-[600px] mt-4 border-2 border-gray-700 rounded-lg"
          title="Resume"
        />
        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          ⬇ Download Resume
        </a>
      </div>
    )}
  </motion.div>
</section>



      {/* Skills Section */}
      <section id="skills" className="min-h-screen w-full bg-gray-900">
        <div className="max-w-6xl mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-lg shadow-lg p-10"
          >
            <h2 className="text-4xl font-bold text-center text-yellow-400">🛠️ Technical Skills</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {/* AI & ML Skills */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Deep Learning & Neural Networks</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>TensorFlow & PyTorch</li>
                </ul>
              </div>

              {/* Programming */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Programming</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Python & JavaScript</li>
                  <li>React & Next.js</li>
                  <li>SQL & NoSQL Databases</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              {/* Cloud & Tools */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Cloud & DevOps</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>AWS & Google Cloud</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="min-h-screen py-20 w-full">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="max-w-6xl mx-auto p-8"
  >
    <h2 className="text-4xl font-bold mb-8">Featured AI Projects</h2>
    
    {/* AWS DeepRacer Project */}
    <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
      <h3 className="text-2xl font-bold text-cyan-400">🏎️ AWS DeepRacer Competition (Top 7% Nationally)</h3>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>Trained PPO model for 500+ episodes across 3 tracks</li>
        <li>Developed custom reward functions with collision avoidance</li>
        <li>Optimized hyperparameters achieving 7.5s average lap time</li>
      </ul>
    </div>

    {/* Llama 2 Fine-Tuning Project */}
    <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
      <h3 className="text-2xl font-bold text-purple-400">🦙 Domain-Specific LLM Fine-Tuning</h3>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>30% accuracy gain using LORA adaptation</li>
        <li>Reduced hallucination rate by 45% with prompt templates</li>
        <li>ROUGE-L: 0.85 | BLEU: 0.78</li>
      </ul>
    </div>

    {/* House Price Prediction */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-green-400">🏠 House Price Prediction Engine</h3>
      <ul className="list-disc pl-6 mt-2 text-gray-300">
        <li>90% prediction accuracy with 15+ engineered features</li>
        <li>Automated feature selection using RFE</li>
        <li>Interactive dashboards for stakeholder decisions</li>
      </ul>
    </div>

    <Link href="/projects" className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg">
      View All Projects →
    </Link>
  </motion.div>
</section>

      {/* Contact Section */}
      <section id = "contact" className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg">Feel free to reach out for collaborations, job opportunities, or just a chat!</p>
      </section>

      {/* Contact Section */}
<section className="mt-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
  <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Let's Connect
  </h2>

  {/* Interactive Contact Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {/* Email Card - Improved Version 📌 */}
  <button
    className="contact-card group relative bg-gray-700 p-6 rounded-xl transition-all 
              hover:transform hover:scale-105 hover:bg-gray-600 cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" // 📌 Added focus styles + full width
    onClick={async () => {
      try {
        await navigator.clipboard.writeText('suppala6@gmu.edu');
        setStatus('Email copied to clipboard! 📋');
      } catch (err) {
        setStatus('Failed to copy. Please manually copy the email.');
      }
    }}
    aria-label="Copy email address to clipboard" // 📌 Accessibility
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        navigator.clipboard.writeText('suppala6@gmu.edu');
        setStatus('Email copied to clipboard! 📋');
      }
    }}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition">
        <FaEnvelope className="text-2xl text-blue-400 group-hover:text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Email Me</h3>
        <p className="text-gray-400 group-hover:text-gray-200">suppala6@gmu.edu</p>
      </div>
    </div>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition" />
  </button> {/* 📌 Changed from div to button */}

  

    {/* LinkedIn Card */}
    <Link 
      href="https://www.linkedin.com/in/suryaprakash55" 
      target="_blank"
      className="contact-card group relative bg-gray-700 p-6 rounded-xl transition-all hover:transform hover:scale-105 hover:bg-gray-600"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition">
          <FaLinkedin className="text-2xl text-blue-400 group-hover:text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
          <p className="text-gray-400 group-hover:text-gray-200">Let's network professionally</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition" />
    </Link>

    {/* GitHub Card */}
    <Link 
      href="https://github.com/suryaprakash737" 
      target="_blank"
      className="contact-card group relative bg-gray-700 p-6 rounded-xl transition-all hover:transform hover:scale-105 hover:bg-gray-600"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-purple-600 transition">
          <FaGithub className="text-2xl text-purple-400 group-hover:text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">GitHub</h3>
          <p className="text-gray-400 group-hover:text-gray-200">Check out my code</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-xl transition" />
    </Link>

    {/* Resume Card */}
    <Link 
      href="/resume.pdf" 
      download
      className="contact-card group relative bg-gray-700 p-6 rounded-xl transition-all hover:transform hover:scale-105 hover:bg-gray-600"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-green-600 transition">
          <FaFilePdf className="text-2xl text-green-400 group-hover:text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Resume</h3>
          <p className="text-gray-400 group-hover:text-gray-200">Download my CV</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-xl transition" />
    </Link>
  </div>

  {/* Status Message */}
  {status && (
    <div className="mt-6 text-center animate-fade-in">
      <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-green-400">
        <FaCheckCircle /> {status}
      </p>
    </div>
  )}

  {/* Map with Overlay */}
  <div className="mt-12 relative rounded-2xl overflow-hidden border-2 border-gray-700">
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    <iframe
      className="w-full h-64"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.707505496899!2d-77.30504992385953!3d38.82978857194964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b5c361345b17%3A0x3b169c9b1cb3fc8e!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1704579600000!5m2!1sen!2sus"
      loading="lazy"
    />
  </div>
</section>
      </main>
  );
}
