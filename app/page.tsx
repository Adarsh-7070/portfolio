import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ResumeSection } from "@/components/resume-section"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
