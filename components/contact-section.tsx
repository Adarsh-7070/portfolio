"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
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

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className={`max-w-4xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-cyan-400 glow">Let's Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`flex items-start gap-4 ${isVisible ? "slide-in-left" : "opacity-0"}`}>
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:adarshyadav0594@gmail.com" className="text-accent hover:underline">
                  adarshyadav0594@gmail.com
                </a>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${isVisible ? "slide-in-left fade-in-delay-1" : "opacity-0"}`}>
              <Linkedin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/adarsh-yadav-764983291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Adarsh Yadav
                </a>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${isVisible ? "slide-in-left fade-in-delay-2" : "opacity-0"}`}>
              <Github className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                <a
                  href="https://github.com/Adarsh-7070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  github.com/Adarsh-7070
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-4 ${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                  errors.name ? "focus:ring-red-500" : ""
                }`}
                style={{
                  background: "rgba(26, 31, 58, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                  errors.email ? "focus:ring-red-500" : ""
                }`}
                style={{
                  background: "rgba(26, 31, 58, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none ${
                  errors.message ? "focus:ring-red-500" : ""
                }`}
                style={{
                  background: "rgba(26, 31, 58, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all hover:scale-105"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
