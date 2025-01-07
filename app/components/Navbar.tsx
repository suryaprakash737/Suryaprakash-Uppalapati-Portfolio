"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-gray-300 py-4 px-8 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo / Site Name */}
        <h1 className="text-xl font-bold">
          <Link href="/">Suryaprakash Uppalapati</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-gray-300 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-gray-800 p-4 rounded-lg">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/skills" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/projects" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
