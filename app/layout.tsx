import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adarsh Yadav - Web Developer & UI/UX Enthusiast",
  description: "Passionate web developer focused on creating modern, efficient, and user-friendly digital experiences.",
  generator: "v0.app",
  keywords: ["Web Developer", "UI/UX Designer", "Full Stack Developer", "Next.js", "React"],
  authors: [{ name: "Adarsh Yadav" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Adarsh Yadav - Web Developer Portfolio",
    description: "Explore my projects and skills",
    url: "https://adarsh-yadav.com",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Adarsh Yadav - Web Developer & UI/UX Enthusiast Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00ADB5" />
      </head>
      <body className={geist.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
