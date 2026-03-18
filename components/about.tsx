"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Cpu, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications using modern technologies and best practices.",
  },
  {
    icon: Cpu,
    title: "AI Exploration",
    description: "Learning and applying AI concepts to enhance real-world applications.",
  },
  {
    icon: Globe,
    title: "Practical Projects",
    description: "Focused on solving real problems through scalable and meaningful projects.",
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
              I'm a developer who focuses on building real-world applications, not just following tutorials.
              Currently in my engineering journey, I’ve been actively working on full-stack projects to strengthen my problem-solving and development skills.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              I primarily work with the{" "}
              <span className="text-primary">MERN stack</span> (MongoDB, Express, React, Node.js)
              and have started exploring{" "}
              <span className="text-primary">AI integration</span> to make applications smarter and more practical.
              My focus is on writing clean code, understanding systems deeply, and building projects that actually solve problems.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Right now, I'm focused on improving my development skills, building strong projects,
              and preparing for software engineering internships. I enjoy learning by building and continuously pushing myself beyond basics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/50 ${isVisible
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
