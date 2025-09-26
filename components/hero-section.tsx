"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/modern-engineering-workspace-with-computer-screens.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
          {"Hi, I'm "}
          <span className="text-primary">Amaan Achhava</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
          {"Final Year Electrical Engineering Student"}
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          {
            "Passionate about innovative electrical solutions, EV powertrains, Motors and power electronics. Specializing in circuit design, Control of EV motors and embedded electronics."
          }
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="outline" size="lg" className="rounded-full bg-transparent">
            <Github className="h-5 w-5 mr-2" />
            {"GitHub"}
          </Button>
          <Button variant="outline" size="lg" className="rounded-full bg-transparent">
            <Linkedin className="h-5 w-5 mr-2" />
            {"LinkedIn"}
          </Button>
          <Button variant="outline" size="lg" className="rounded-full bg-transparent">
            <Mail className="h-5 w-5 mr-2" />
            {"Email"}
          </Button>
        </div>

        {/* CTA Button */}
        <Button size="lg" className="rounded-full px-8" onClick={scrollToAbout}>
          {"View My Work"}
          <ArrowDown className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </section>
  )
}
