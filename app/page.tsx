"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fullText = "AI Engineer | Data Scientist | ML Innovator";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // Typing speed

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

    const timer = setTimeout(handleTyping, isDeleting ? 50 : speed); // Faster deletion

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black text-white p-8 overflow-hidden">
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

      {/* Cyberpunk Hero Section */}
      <motion.h1
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-xl animate-glitch"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👋 Welcome to the Future, <br />
        I&apos;m <span className="text-cyan-300">Suryaprakash Uppalapati</span>
      </motion.h1>

      {/* AI Terminal-Like Typing Effect (Now Loops Infinitely) */}
      <motion.p
        className="mt-4 text-2xl text-green-300 font-mono bg-black px-4 py-2 rounded-lg border border-green-500 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-yellow-400">AI Terminal:</span> {text}
        <span className="animate-blink">|</span>
      </motion.p>

      {/* Glowing Buttons with Futuristic UI */}
      <div className="mt-6 flex space-x-4">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link href="/about">
            <div className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-900 shadow-md hover:shadow-cyan-500 transition">
              🔍 Learn More About Me
            </div>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link href="/projects">
            <div className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 shadow-md hover:shadow-green-500 transition">
              🚀 Explore My AI Projects
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
