"use client"

import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Phoenix -Audio based product website",
      description:
        "Phoenix Audio is your destination for premium sound. We craft high-quality audio products designed for crystal-clear performance, immersive experiences, and unmatched durability — built to rise above the ordinary, just like the Phoenix itself.",
      image: "/ecommerce-platform-website.png",
      tags: ["Html", "CSS", "JavaScript", "MongoDB", "Python"],
      link: "https://phoenix-audio.netlify.app/",
    },
    {
      id: 2,
      title: "Academic Hub -Book solution website",
      description:
        "Book Solution for Students is a web-based platform designed to help students find detailed solutions and summaries for academic textbooks. It provides easy access to chapter-wise answers, explanations, and study materials — making learning more convenient and organized.",
      image: "/academic-hub-dashboard-app.png",
      tags: ["HTML", "CSS", "JavaScript", "MongoDB", "React.js"],
      link: "https://academic-hub-book-solution.netlify.app/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Weather App is a web-based application that provides real-time weather updates using an external Weather API. It displays temperature, humidity, and forecast details for any city entered by the user.",
      image: "/weather-dashboard-app.png",
      tags: ["HTML", "CSS", "JavaScript", "Python", "JSON"],
      link: "https://weather-dashboard-api.netlify.app/",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className={`max-w-7xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-cyan-400 glow">Featured</span>
            <span className="text-foreground"> Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                isVisible ? `scale-in fade-in-delay-${Math.min(index + 1, 3)}` : "opacity-0 scale-95"
              }`}
              style={{
                background: "rgba(26, 31, 58, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 255, 255, 0.2)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.5)"
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 255, 255, 0.2), 0 10px 10px -5px rgba(0, 255, 255, 0.1)"
                e.currentTarget.style.transform = "translateY(-8px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)"
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-20"></div>
              </div>

              {/* Content Container */}
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs sm:text-xs lg:text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-accent px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/link"
                >
                  <span>View Project</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
