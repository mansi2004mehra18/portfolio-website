"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const roles = [
  "Full Stack Developer",
  "AI Integration Engineer",
  "MERN Stack Developer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < role.length) {
            setDisplayed(role.slice(0, displayed.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(role.slice(0, displayed.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentRole])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary">
          Hi, my name is
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">Mansi Mehra</span>
        </h1>
        <div className="mb-8 h-12 md:h-14">
          <h2 className="text-2xl font-medium text-muted-foreground md:text-4xl">
            {displayed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary text-transparent">
              |
            </span>
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build accessible, performant, and visually engaging web applications.
          Specializing in full-stack development with a passion for integrating
          AI into modern solutions.
        </p>

        <div className="mb-12 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/mansimehra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/mansimehra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:mansi@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  )
}
