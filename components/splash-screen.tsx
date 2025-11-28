"use client"

import { useEffect, useState } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="text-7xl md:text-9xl font-bold tracking-wider">
          <span className="inline-block animate-fade-in duration-700">
            <span className="text-cyan-400 glow">A</span>
            <span className="text-purple-500 glow ml-2">Y</span>
          </span>
        </div>

        <div className="mt-8 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-slide-left"></div>
        </div>

        <p className="mt-4 text-cyan-400 text-sm tracking-widest animate-fade-in">Loading Portfolio</p>
      </div>
    </div>
  )
}
