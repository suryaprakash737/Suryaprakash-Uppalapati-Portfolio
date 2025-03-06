"use client";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/(main)";

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="home" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                activeClass="text-cyan-400"
              >
                Home
              </ScrollLink>
            ) : (
              <Link 
                href="/"
                className="cursor-pointer hover:text-cyan-400 transition-colors"
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
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                activeClass="text-cyan-400"
              >
                About
              </ScrollLink>
            ) : (
              <Link 
                href="/#about"
                className="cursor-pointer hover:text-cyan-400 transition-colors"
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
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                activeClass="text-cyan-400"
              >
                Skills
              </ScrollLink>
            ) : (
              <Link 
                href="/#skills"
                className="cursor-pointer hover:text-cyan-400 transition-colors"
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
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                activeClass="text-cyan-400"
              >
                Projects
              </ScrollLink>
            ) : (
              <Link 
                href="/#projects"
                className="cursor-pointer hover:text-cyan-400 transition-colors"
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
                className="cursor-pointer hover:text-cyan-400 transition-colors"
                activeClass="text-cyan-400"
              >
                Contact
              </ScrollLink>
            ) : (
              <Link 
                href="/#contact"
                className="cursor-pointer hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            )}
          </li>
          <li>
          <Link 
  href="/use-cases"
  className="cursor-pointer hover:text-cyan-400 transition-colors"
>
  Use Cases
</Link>
          </li>
          <li>
            <Link 
              href="/models"
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              ML Models
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}