"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: "JS" },
      { name: "React", icon: "Re" },
      { name: "HTML5", icon: "H5" },
      { name: "CSS3", icon: "C3" },
      { name: "Tailwind CSS", icon: "TW" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "NJ" },
      { name: "Express", icon: "Ex" },
      { name: "MongoDB", icon: "Mo" },
      { name: "SQL", icon: "SQ" },
      { name: "REST APIs", icon: "AP" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "Gi" },
      { name: "GitHub", icon: "GH" },
      { name: "VS Code", icon: "VS" },
      { name: "Postman", icon: "PM" },
      { name: "Vercel", icon: "Vc" },
    ],
  },
]

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="skills" className="relative px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Skills & Technologies
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${catIdx * 200}ms` }}
            >
              <h3 className="mb-5 font-mono text-sm font-semibold tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 transition-colors hover:bg-primary/10"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-secondary-foreground group-hover:text-primary">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
