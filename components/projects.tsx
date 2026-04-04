"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: "BinWise - AI Waste Management System",
    description:
      "Developing an AI-powered waste classification system that identifies waste types using image input and suggests eco-friendly disposal methods. Currently implemented core UI, backend structure, and initial ML integration, with ongoing work on improving model accuracy and real-time processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TensorFlow"],
    github: "https://github.com/mansi2004mehra18/BinWise-pn",
    live: "https://v0-binwise.vercel.app/",
    featured: true,
  },

  {
    title: "Impetus 9.0 Website Features",
    description:
      "Contributed to the development of multiple production-ready UI components including sponsor section, team (IAM) page, and about page. Built a draggable notification banner positioned at the bottom-right, improving user interaction by enabling quick navigation to alerts.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/mansi2004mehra18/impetus9.0",
    live: "https://impetus90.vercel.app/",
    featured: true,
  },

  {
    title: "TradeFlow (Ongoing) - High-Performance Equity Trading Interface",
    description:
      'A minimalist trading terminal designed for speed and clarity. Built with a focus on clean UI/UX, the platform features a responsive dashboard, interactive price charting, and a streamlined order-management system. Engineered to handle high-frequency data visualization with a "clutter-free" approach to financial markets.',
    tech: ["React", "Tailwind CSS", "JavaScript", "Express"],
    github: "https://github.com/mansi2004mehra18/StockTradingPlatform",
    live: "https://stock-trading-platform-one.vercel.app/",
    featured: false,
  },
  {
    title: "Voyaa(Ongoing) - Travel Discovery Platform",
    description:
      "A high-performance web platform inspired by Airbnb, built to bridge the gap between visual discovery and travel planning. Users can explore global stays via an interactive map, browse high-resolution galleries, and book instantly. Features a comprehensive Host Dashboard for property management and real-time location tracking.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/mansi2004mehra18/Voyaa",
    live: "https://voyaa-kappa.vercel.app/",
    featured: false,
  },
  // {
  //   title: "GitHub Clone",
  //   description:
  //     "A functional clone of GitHub's core UI and features including repository browsing, user profiles, search functionality, and a responsive layout mimicking the original GitHub experience.",
  //   tech: ["React", "GitHub API", "Tailwind CSS", "Node.js"],
  //   github: "https://github.com/mansimehra/github-clone",
  //   live: "#",
  //   featured: true,
  // },
]

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`group relative grid items-center gap-4 md:grid-cols-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Project image/visual placeholder */}
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-secondary/50 md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"
        }`}
      >
        <div className="flex aspect-video items-center justify-center bg-card transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="text-center">
            <Folder size={48} className="mx-auto mb-3 text-primary/40" />
            <p className="font-mono text-sm text-muted-foreground">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div
        className={`relative z-10 md:col-span-6 ${isEven
            ? "md:col-start-7 md:text-right"
            : "md:col-start-1 md:row-start-1 md:text-left"
        }`}
      >
        <p className="mb-1 font-mono text-xs text-primary">Featured Project</p>
        <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
          {project.title}
        </h3>
        <div className="rounded-xl border border-border bg-card p-5 shadow-lg">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div
          className={`mt-4 flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div
          className={`mt-4 flex items-center gap-4 ${isEven ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function OtherProject({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-5 flex items-center justify-between">
        <Folder size={36} className="text-primary" />
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section ref={ref} id="projects" className="relative px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Things {"I've"} Built
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="mt-12 space-y-24">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="mt-24">
            <h3 className="mb-10 text-center text-xl font-bold text-foreground">
              Other Noteworthy Projects
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((project, i) => (
                <OtherProject key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
