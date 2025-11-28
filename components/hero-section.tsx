"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/2 -right-40 w-80 h-80 bg-gradient-to-l from-purple-500/30 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className={`max-w-5xl w-full text-center ${isVisible ? "fade-in" : "opacity-0"}`}>
        <div className={isVisible ? "slide-up" : "opacity-0"}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
              Adarsh Yadav
            </span>
          </h1>
        </div>

        <div className={isVisible ? "slide-up-delay-1" : "opacity-0"}>
          <h2 className="text-xl md:text-3xl text-cyan-400 font-light mb-6 glow">
            Creative Web Developer
          </h2>
        </div>

        <div className={isVisible ? "fade-in-delay-2" : "opacity-0"}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Turning ideas into beautiful digital experiences. I specialize in crafting modern, efficient, and
            user-friendly web solutions with a passion for elegant design and clean code.
          </p>
        </div>

        <div
          className={`flex flex-col md:flex-row gap-6 justify-center items-center ${isVisible ? "slide-up-delay-3" : "opacity-0"}`}
        >
          <Link
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>

        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 mt-20 ${isVisible ? "fade-in-delay-4" : "opacity-0"}`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
