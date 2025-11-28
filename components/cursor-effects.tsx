"use client"

import { useEffect, useRef } from "react"

export function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorFollowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorFollower = cursorFollowerRef.current

    if (!cursor || !cursorFollower) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      cursorFollower.style.left = `${cursorX}px`
      cursorFollower.style.top = `${cursorY}px`

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-screen"
        style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)" }}
      ></div>

      <div
        ref={cursorFollowerRef}
        className="fixed w-8 h-8 border-2 border-cyan-400/50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-40"
        style={{
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.1)",
        }}
      ></div>
    </>
  )
}
