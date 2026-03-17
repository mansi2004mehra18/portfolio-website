"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="contact" className="relative px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="mb-4 block font-mono text-sm text-primary">04. {"What's"} Next?</span>
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          {"I'm"} currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, {"I'll"} try my best
          to get back to you!
        </p>
        <a
          href="mailto:mansi2004mehra18@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
        >
          <Mail size={18} />
          Say Hello
        </a>

        <div className="mt-16 flex items-center justify-center gap-6">
          <a
            href="https://github.com/mansi2004mehra18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/mansi-mehra-65325738a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:mansi2004mehra18@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
