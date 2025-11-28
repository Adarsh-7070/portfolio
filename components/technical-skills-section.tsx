"use client"

import { useEffect, useRef, useState } from "react"

export function TechnicalSkillsSection() {
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

  const frontendTech = [
    { name: "HTML", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30" },
    { name: "CSS", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-500", bgColor: "bg-yellow-400/10", borderColor: "border-yellow-400/30" },
  ]

  const programmingLanguages = [
    { name: "C", color: "from-blue-600 to-blue-700", bgColor: "bg-blue-600/10", borderColor: "border-blue-600/30" },
    { name: "C++", color: "from-blue-700 to-blue-800", bgColor: "bg-blue-700/10", borderColor: "border-blue-700/30" },
    { name: "PHP", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-500/10", borderColor: "border-indigo-500/30" },
    { name: "Python", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
  ]

  const databases = [
    { name: "MongoDB", color: "from-green-500 to-green-600", bgColor: "bg-green-500/10", borderColor: "border-green-500/30" },
    { name: "MySQL", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
    { name: "Flask", color: "from-gray-600 to-gray-700", bgColor: "bg-gray-600/10", borderColor: "border-gray-600/30" },
  ]

  const webDev = [
    { name: "Responsive Design", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30" },
  ]

  const devTools = [
    { name: "Git", color: "from-orange-600 to-orange-700", bgColor: "bg-orange-600/10", borderColor: "border-orange-600/30" },
    { name: "GitHub", color: "from-gray-700 to-gray-800", bgColor: "bg-gray-700/10", borderColor: "border-gray-700/30" },
    { name: "VS Code", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
  ]

  const SkillCard = ({ skill, index }: { skill: typeof frontendTech[0]; index: number }) => {
    const getLogoContent = () => {
      if (skill.name === "HTML") return "HTML"
      if (skill.name === "CSS") return "CSS"
      if (skill.name === "JavaScript") return "JS"
      if (skill.name === "C") return "C"
      if (skill.name === "C++") return "C++"
      if (skill.name === "PHP") return "PHP"
      if (skill.name === "Python") return "Py"
      if (skill.name === "Flask") return "F"
      if (skill.name === "MongoDB") return "M"
      if (skill.name === "MySQL") return "SQL"
      if (skill.name === "Responsive Design") return "📱"
      if (skill.name === "Git") return "G"
      if (skill.name === "GitHub") return "GH"
      if (skill.name === "VS Code") return "VS"
      return skill.name[0]
    }

    const isShield = skill.name === "HTML" || skill.name === "CSS"
    const isSquare = skill.name === "JavaScript" || skill.name === "C" || skill.name === "C++" || skill.name === "PHP" || skill.name === "Python" || skill.name === "Flask" || skill.name === "MongoDB" || skill.name === "MySQL" || skill.name === "Responsive Design"

    return (
      <div
        className={`group relative rounded-xl p-6 border transition-all hover:scale-105 hover:shadow-xl ${skill.bgColor} ${skill.borderColor} ${
          isVisible ? `fade-in-delay-${Math.min(index % 3, 2) + 1}` : "opacity-0"
        }`}
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(26, 31, 58, 0.6)",
        }}
      >
        <div
          className={`w-20 h-20 mx-auto mb-4 ${
            isShield ? "rounded-t-lg rounded-b-3xl" : isSquare ? "rounded-lg" : "rounded-full"
          } ${
            skill.name === "JavaScript" ? "bg-yellow-400" : `bg-gradient-to-br ${skill.color}`
          } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
        >
          <span className={`font-bold ${
            skill.name === "JavaScript" ? "text-black" : "text-white"
          } ${
            skill.name.length > 8 ? "text-base" : "text-xl"
          }`}>
            {getLogoContent()}
          </span>
        </div>
        <h3 className="text-center text-foreground font-semibold text-sm mt-2">{skill.name}</h3>
      </div>
    )
  }

  return (
    <section id="technical-skills" ref={sectionRef} className="relative py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
      </div>

      <div className={`max-w-6xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-cyan-400 glow">Technical</span>
          <span className="text-foreground"> Skills</span>
        </h2>

        <div className="space-y-12">
          {/* Frontend Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Frontend Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {frontendTech.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 3} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Databases</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {databases.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 6} />
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Web Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {webDev.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 9} />
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Development Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {devTools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 10} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

