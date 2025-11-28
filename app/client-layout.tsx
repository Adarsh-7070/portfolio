"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SplashScreen } from "@/components/splash-screen"
import { ParticleBackground } from "@/components/particle-background"
import { ParallaxScroll } from "@/components/parallax-scroll"
import { CursorEffects } from "@/components/cursor-effects"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SplashScreen />
      <ParticleBackground />
      <ParallaxScroll />
      <CursorEffects />
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
