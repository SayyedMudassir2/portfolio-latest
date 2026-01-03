"use client"

import { useState, useRef, useEffect, useCallback } from "react"

interface Experience {
  id: number
  date: string
  title: string
  affiliation: string
  location: string
  description: string
  bullets: string[]
  skills?: string[]
}

const experienceData: Experience[] = [
  {
    id: 1,
    date: "JUL 2023 - PRESENT",
    title: "Full-Stack Developer",
    affiliation: "Freelance & Personal Projects",
    location: "Mumbai, India • Remote",
    description:
      "Full-stack developer specializing in building scalable web applications, AI-powered SaaS platforms, and intuitive user interfaces. Experienced in modern JavaScript frameworks, backend APIs, cloud services, and database systems.",
    bullets: [
      "Built and deployed **AI Career Mentor**, a full-stack AI-driven SaaS platform offering career Q&A, resume analysis, roadmap generation, and cover-letter writing using Next.js, LangChain, Clerk, Stripe, and Inngest.",
      "Orchestrated **4+ AI agents** with Inngest for stepwise async workflows, reducing response latency by **40%**, and implemented resume processing pipelines with **90%+ accuracy**.",
      "Engineered a robust payments & authentication system using Clerk and Stripe, enabling **100% gated access** to premium features with credit-based usage.",
      "Developed **Pictura AI**, a solo SaaS project featuring 5+ AI image tools including generative fill, object removal, and recoloring using Cloudinary AI.",
      "Created a scalable backend using Next.js Server Actions, MongoDB caching, Stripe webhooks, and dynamic routing for high reliability.",
      "Built a complete **Expense Tracker MERN** application with secure JWT auth, dynamic dashboards, charts, and Excel export functionality for financial analytics.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "LangChain",
      "Stripe",
      "Clerk",
      "Inngest",
      "Cloudinary",
    ],
  },
  {
    id: 2,
    date: "2023 - PRESENT",
    title: "DSA Problem Solver",
    affiliation: "Competitive Programming",
    location: "India • Remote",
    description:
      "Actively practicing data structures and algorithms using C++, Java, and Python while participating in global coding competitions and challenges.",
    bullets: [
      "Achieved **419 Global Rank** in Google Kickstart Round B.",
      "Secured **65 Global Rank** in CodeChef August Challenge.",
      "Solved hundreds of DSA problems across arrays, trees, linked lists, graphs, dynamic programming, and greedy algorithms.",
      "Improved algorithmic thinking and optimized solutions for time and space efficiency by practicing on platforms like CodeChef and GeeksforGeeks.",
    ],
    skills: [
      "C++",
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "Competitive Programming",
    ],
  },
  {
    id: 3,
    date: "JUL 2024",
    title: "Computer Vision & Machine Learning Intern",
    affiliation: "NIST University, Berhampur",
    location: "Berhampur, Odisha, India",
    description:
      "Internship focused on applying machine learning and computer vision techniques to real-world problems using Python and OpenCV.",
    bullets: [
      "Developed a **Predictions & Visualization module** enabling real-time inference and graphical analysis of computer vision models.",
      "Built a custom **handwritten alphabet detection model** using Python, OpenCV, and ML libraries for accurate character classification.",
      "Presented the complete solution — from data collection to model deployment — to university faculty.",
    ],
    skills: ["Python", "Computer Vision", "OpenCV", "Machine Learning", "Google Colab"],
  },
  {
    id: 4,
    date: "2021 - PRESENT",
    title: "Technical Content Writer",
    affiliation: "Medium",
    location: "Mumbai, India • Remote",
    description:
      "Technical blogger writing about JavaScript, web APIs, productivity tools, and modern web development best practices.",
    bullets: [
      "Published **5+ technical articles** on Medium covering JavaScript fundamentals, Web APIs, and developer productivity.",
      "Created beginner-friendly technical content with clear explanations, diagrams, and practical examples.",
      "Improved content visibility and readership through SEO-focused writing and consistent posting.",
    ],
    skills: ["Writing", "JavaScript", "Web APIs", "Technical Documentation", "Blogging"],
  },
];


export default function ExperienceTimeline() {
  const [selectedExp, setSelectedExp] = useState<number>(1)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true

    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight
      const triggerPoint = windowHeight * 0.3 
      let newSelected = selectedExp

      for (let i = 0; i < contentRefs.current.length; i++) {
        const el = contentRefs.current[i]
        if (!el) continue

        const rect = el.getBoundingClientRect()

        // Check if section is in the trigger zone
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          newSelected = experienceData[i].id
          break
        }
      }

      if (newSelected !== selectedExp) {
        setSelectedExp(newSelected)
      }
      ticking.current = false
    })
  }, [selectedExp])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    // Initialize on mount
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  const scrollTo = (index: number) => {
    const element = contentRefs.current[index]
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 0)
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0f001a] pt-16 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">My {" "}
        <span className="bg-clip-text text-purple-600">Experience</span></h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A journey through my professional growth and achievements
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Timeline - Sticky on desktop, scrolls with content on mobile */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <nav className="relative" aria-label="Experience timeline">
              <div className="flex flex-col gap-12">
                {experienceData.map((exp, idx) => {
                  const isActive = selectedExp === exp.id
                  return (
                    <button
                      key={exp.id}
                      onClick={() => scrollTo(idx)}
                      type="button"
                      aria-current={isActive ? "page" : undefined}
                      aria-label={`Navigate to: ${exp.title}`}
                      className={`flex items-start gap-4 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg p-2 -ml-2
                        ${isActive ? "text-white" : "text-slate-500 hover:text-slate-400"}`}
                    >
                      {/* Timeline dot */}
                      <div className="relative flex items-center justify-center flex-shrink-0 mt-1">
                        <span
                          className={`h-4 w-4 rounded-full ring-4 transition-all duration-300 ${
                            isActive
                              ? "bg-purple-500 ring-purple-500 shadow-lg shadow-purple-500/50"
                              : "bg-slate-600 ring-slate-800 hover:bg-slate-500"
                          }`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Date and Title */}
                      <div className="flex flex-col gap-1 min-w-0">
                        <p
                          className={`text-xs font-semibold tracking-wider transition-colors ${
                            isActive ? "text-purple-400" : "text-slate-500"
                          }`}
                        >
                          {exp.date}
                        </p>
                        <p
                          className={`font-semibold line-clamp-2 transition-colors ${
                            isActive ? "text-white" : "text-slate-400"
                          }`}
                        >
                          {exp.title}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div
                aria-hidden="true"
                className="absolute left-1.5 top-6 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-slate-700 rounded-full"
                style={{ zIndex: 0, pointerEvents: "none" }}
              />
            </nav>
          </div>

          {/* Scrollable Experience Content */}
          <div className="lg:w-2/3 space-y-20 text-slate-300">
            {experienceData.map((exp, idx) => (
              <section
                key={exp.id}
                data-id={exp.id}
                ref={(el) => {
                  contentRefs.current[idx] = el as HTMLDivElement | null
                }}
                tabIndex={-1}
                aria-labelledby={`exp-title-${exp.id}`}
                className="space-y-6 scroll-mt-32 focus-visible:outline-none"
              >
                {/* Section Header */}
                <div className="space-y-4">
                  <h3
                    id={`exp-title-${exp.id}`}
                    className="text-3xl md:text-4xl font-bold text-white transition-colors"
                  >
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-linear-to-r from-purple-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {exp.affiliation}
                    </span>
                    <span className="text-slate-400 text-sm flex items-center gap-1">📍 {exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-slate-300 text-lg">{exp.description}</p>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                        <span className="text-purple-400 font-bold shrink-0 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="pt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-800 hover:bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Divider between sections */}
                {idx < experienceData.length - 1 && (
                  <div className="pt-8 border-t border-slate-700/50" aria-hidden="true" />
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
