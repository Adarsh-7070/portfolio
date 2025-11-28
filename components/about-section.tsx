"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Development",
    "Responsive Design",
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
      </div>

      <div className={`max-w-4xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-cyan-400 glow">About</span>
          <span className="text-foreground"> Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={isVisible ? "slide-in-left" : "opacity-0"}>
            <h3 className="text-xl font-semibold mb-4 text-accent">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate web developer with a focus on creating beautiful and functional digital experiences. My
              journey in tech started with a curiosity about how things work, which evolved into a career dedicated to
              building innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in clean code, great design, and the power of technology to solve real-world problems. When I'm
              not coding, you can find me exploring new design trends or contributing to open-source projects.
            </p>
          </div>

          <div className={isVisible ? "slide-in-right" : "opacity-0"}>
            <h3 className="text-xl font-semibold mb-4 text-accent">Education & Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Lovely Professional University</h4>
                <p className="text-sm text-muted-foreground">Master of Computer Application</p>
                <p className="text-sm text-muted-foreground">Pursuing</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Savitribai Phule Pune University</h4>
                <p className="text-sm text-muted-foreground">Bachelor of Business Administration in (Computer Application)</p>
                <p className="text-sm text-muted-foreground">August 2022 – April 2025</p>
                <p className="text-sm text-muted-foreground">CGPA : 8.00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-cyan-400"></h3>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`bg-primary/10 border border-accent/30 rounded-lg px-4 py-3 text-center hover:bg-accent/20 transition-colors cursor-default ${
                  isVisible ? `fade-in-delay-${Math.min(index % 3, 2) + 1}` : "opacity-0"
                }`}
              >
                <span className="text-sm font-medium text-accent">{skill}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
