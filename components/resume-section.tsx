"use client"

import { useEffect, useRef, useState } from "react"

export function ResumeSection() {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { label: "Major Academic Projects", value: "3" },
    { label: "Certifications Earned", value: "3" },
    { label: "CGPA", value: "8.00" },
    { label: "Technologies Mastered", value: "10+" },
  ]

  const certifications = [
    "3-day Hackathon: AI Hackathon at Build Storm 2025",
    "Fundamentals of Full Stack Development by EXCELR Raising Excellence",
    "Workshop on “Data Analytics Using Microsoft Power BI”",
  ]

  return (
    <section id="resume" ref={sectionRef} className="relative py-20 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-cyan-400 glow">My Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg">Download and learn more about my qualifications</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={isVisible ? "slide-in-left" : "opacity-0"}>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">Statistics</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-6 text-centzer rounded-lg ${
                    isVisible ? `scale-in-delay-${Math.min(idx + 1, 3)}` : "opacity-0"
                  }`}
                  style={{
                    background: "rgba(26, 31, 58, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 255, 255, 0.2)",
                    transition: "all 300ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.5)"
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={isVisible ? "slide-in-right" : "opacity-0"}>
            {/* Download Button */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Download Resume</h3>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all hover:scale-105 justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF Resume
              </a>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Certifications & Achievements</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      isVisible ? `slide-up-delay-${Math.min(idx + 1, 3)}` : "opacity-0"
                    }`}
                    style={{
                      background: "rgba(26, 31, 58, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0, 255, 255, 0.2)",
                      transition: "all 300ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.5)"
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.2)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.2)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
