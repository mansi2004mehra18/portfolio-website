"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Cpu, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "End-to-end development with the MERN stack and modern frameworks.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Building intelligent features with AI/ML into real-world applications.",
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "Crafting fast, accessible, and responsive web experiences.",
  },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 py-24 md:py-32"
    >
      <div className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">About Me</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              {"I'm a Full Stack Developer with a passion for creating clean, efficient, and user-friendly web applications. My journey in tech started with curiosity about how things work on the internet, and it has evolved into a career building solutions that make a real impact."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I specialize in the{" "}
              <span className="text-primary">MERN stack</span> (MongoDB,
              Express, React, Node.js) and have hands-on experience integrating{" "}
              <span className="text-primary">AI solutions</span> into web
              applications. I love turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              When {"I'm"} not coding, you can find me exploring new technologies,
              contributing to open source, or learning about the latest
              advancements in artificial intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
