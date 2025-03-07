"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/(main)";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Name on the left */}
        <span className="text-white font-bold text-xl">
          Suryaprakash Uppalapati
        </span>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex space-x-6">
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="home" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
                activeClass="text-cyan-400"
              >
                Home
              </ScrollLink>
            ) : (
              <Link 
                href="/"
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
              >
                Home
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="about" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
                activeClass="text-cyan-400"
              >
                About
              </ScrollLink>
            ) : (
              <Link 
                href="/#about"
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
              >
                About
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="skills" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
                activeClass="text-cyan-400"
              >
                Skills
              </ScrollLink>
            ) : (
              <Link 
                href="/#skills"
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
              >
                Skills
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="projects" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
                activeClass="text-cyan-400"
              >
                Projects
              </ScrollLink>
            ) : (
              <Link 
                href="/#projects"
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
              >
                Projects
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="contact" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
                activeClass="text-cyan-400"
              >
                Contact
              </ScrollLink>
            ) : (
              <Link 
                href="/#contact"
                className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
              >
                Contact
              </Link>
            )}
          </li>
          <li>
            <Link 
              href="/use-cases"
              className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
            >
              Use Cases
            </Link>
          </li>
          <li>
            <Link 
              href="/models"
              className="cursor-pointer hover:text-cyan-400 transition-colors text-xl font-bold"
            >
              ML Models
            </Link>
          </li>
        </ul>

        {/* Hamburger menu button - Visible only on mobile */}
        <button 
          className="md:hidden flex items-center text-white" 
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <ul className="flex flex-col space-y-3 pb-3">
            <li>
              {isHomePage ? (
                <ScrollLink 
                  to="home" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  activeClass="text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </ScrollLink>
              ) : (
                <Link 
                  href="/"
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink 
                  to="about" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  activeClass="text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </ScrollLink>
              ) : (
                <Link 
                  href="/#about"
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink 
                  to="skills" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  activeClass="text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </ScrollLink>
              ) : (
                <Link 
                  href="/#skills"
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink 
                  to="projects" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  activeClass="text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </ScrollLink>
              ) : (
                <Link 
                  href="/#projects"
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink 
                  to="contact" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  activeClass="text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </ScrollLink>
              ) : (
                <Link 
                  href="/#contact"
                  className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              )}
            </li>
            <li>
              <Link 
                href="/use-cases"
                className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link 
                href="/models"
                className="block cursor-pointer hover:text-cyan-400 transition-colors text-lg font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                ML Models
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}