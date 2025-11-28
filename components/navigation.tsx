"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-40 px-8 py-4 rounded-full transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "bg-transparent"
        }`}
        style={
          isScrolled
            ? {
                background: "rgba(26, 31, 58, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 255, 255, 0.2)",
              }
            : undefined
        }
      >
        <div className="flex items-center gap-8">
          <Link href="#" className="text-xl font-bold">
            <span className="glow">AY</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              href="#home"
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === "home" ? "text-cyan-400" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === "about" ? "text-cyan-400" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="#technical-skills"
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === "technical-skills" ? "text-cyan-400" : "text-muted-foreground"
              }`}
            >
              Technical Skills
            </Link>
            <Link
              href="#projects"
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === "projects" ? "text-cyan-400" : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === "contact" ? "text-cyan-400" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <Link
            href="#resume"
            className="hidden sm:block px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
          >
            Resume
          </Link>
        </div>
      </nav>
    </>
  )
}
