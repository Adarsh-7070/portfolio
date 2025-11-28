"use client"

import { useEffect, useState } from "react"

export function ParallaxScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none -z-20">
      <div
        className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
    </div>
  )
}
