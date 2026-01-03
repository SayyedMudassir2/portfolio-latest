"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

interface Feature {
  text: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  features: Feature[];
  image: string;
  alt: string;
  tags: string[];
  link: string;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "School Management System",
    description:
      "A complete school management system built as a final year project to streamline student, teacher, and administrative operations.",
    features: [
      { text: "Student, faculty, and class management" },
      { text: "Attendance tracking and performance records" },
      { text: "Role-based authentication for admin, staff, and students" },
      { text: "Centralized dashboard for school operations" },
      { text: "Optimized database design for efficient data storage" },
    ],
    image: "/images/school-management.webp",
    alt: "School Management System",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://schoolms.example.com",
    gradient: "from-red-500 to-red-700",
    accentColor: "from-red-500 to-red-700",
  },

  {
    id: "2",
    title: "ExpenseTrackerApp",
    description:
      "Developed and deployed a full-stack MERN application for tracking income and expenses with real-time visual summaries, charts, and Excel export.",
    features: [
      { text: "Implemented secure JWT authentication with login/signup, profile upload, and protected routes" },
      { text: "Dynamic dashboard with pie/bar charts, summary cards, and auto-updating financial data" },
      { text: "Enabled Excel export for offline analysis and backups, improving control and flexibility by 50%+" },
      { text: "Optimized for mobile with collapsible menus and responsive UI components" },
    ],
    image: "/images/expense-tracker.webp",
    alt: "Expense Tracker App",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Chart.js", "XLSX", "Tailwind CSS"],
    link: "https://expensetracker.example.com",
    gradient: "from-emerald-500 to-emerald-700",
    accentColor: "from-emerald-500 to-emerald-700",
  },

  {
    id: "3",
    title: "PicturaAI",
    description:
      "Developed and deployed an AI-powered image-editing SaaS with 5+ advanced tools including generative fill, object removal, and recoloring using Cloudinary AI.",
    features: [
      { text: "Integrated Stripe payments with credits, secure checkout, and webhook-based usage tracking" },
      { text: "Clerk authentication with MongoDB webhook sync ensuring 99.9% session consistency" },
      { text: "Scalable backend using Next.js Server Actions, dynamic routing, and MongoDB connection caching" },
      { text: "Responsive UI with mobile nav, sidebar layout, auto-tag search, and paginated galleries" },
    ],
    image: "/images/picturaai.webp",
    alt: "PicturaAI",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Clerk", "Stripe", "Cloudinary", "Tailwind CSS"],
    link: "https://picturaai.example.com",
    gradient: "from-purple-500 to-purple-700",
    accentColor: "from-purple-500 to-purple-700",
  },

  {
    id: "4",
    title: "3D Animation Website",
    description:
      "A multimedia-rich platform offering tools, tutorials, and resources for creating professional 3D animations. Designed for both beginners and experts to learn, create, and master 3D animation techniques.",
    features: [
      { text: "Extensive tutorials from beginner to advanced 3D animation techniques" },
      { text: "Library of 3D objects, textures, effects, and creative assets" },
      { text: "Built-in multimedia tools for crafting polished animations" },
      { text: "User-friendly interface suitable for learners and professionals" },
      { text: "Resources to help become proficient in 3D animation production" },
    ],
    image: "/images/3d-animation.webp",
    alt: "3D Animation Website",
    tags: ["HTML", "CSS", "JavaScript", "Graphics Tools", "3D Assets"],
    link: "https://3danimation.example.com",
    gradient: "from-cyan-500 to-cyan-700",
    accentColor: "from-cyan-500 to-cyan-700",
  },

  {
    id: "5",
    title: "AICareerMentor",
    description:
      "Built and deployed a full-stack AI-powered SaaS platform offering real-time career Q&A, resume analysis, roadmap generation, and cover-letter writing.",
    features: [
      { text: "Orchestrated 4+ AI agents using Inngest for stepwise async workflows, reducing latency by 40%" },
      { text: "Processed resumes via LangChain + ImageKit with 90%+ accuracy for actionable insights" },
      { text: "Integrated Clerk authentication and Stripe billing for fully gated premium access via credits" },
      { text: "Implemented UUID-based session tracking and persistent chat history using Neon PostgreSQL" },
      { text: "Configured CI/CD with GitHub + Vercel and secure multi-environment setup" },
    ],
    image: "/images/aicareermentor.webp",
    alt: "AICareerMentor",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk",
      "Stripe",
      "Neon",
      "Inngest",
      "LangChain",
      "React Flow",
      "Vercel",
    ],
    link: "https://aicareermentor.vercel.app",
    gradient: "from-blue-500 to-blue-700",
    accentColor: "from-blue-500 to-blue-700",
  },

  {
    id: "6",
    title: "Cario – AI Career Coach Course",
    description:
      "An AI-driven career coach platform built as part of a training course. Implements authentication, AI workflows, and a modern full stack architecture for career guidance automation.",
    features: [
      { text: "Full-stack AI Career Coach built using Next.js and React" },
      { text: "Secure authentication implemented with Clerk" },
      { text: "Serverless PostgreSQL database using Neon" },
      { text: "Background job handling using Inngest and AgentKit" },
      { text: "Deployed with optimized production workflows on Vercel" },
    ],
    image: "/images/cario.webp",
    alt: "Cario AI Career Coach",
    tags: ["Next.js", "React", "Clerk", "Neon", "Inngest", "Tailwind CSS"],
    link: "https://cario.example.com",
    gradient: "from-slate-500 to-slate-700",
    accentColor: "from-slate-500 to-slate-700",
  },

  {
    id: "7",
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with a modern UI and smooth user experience.",
    features: [
      { text: "Fully responsive layout optimized for all devices" },
      { text: "Interactive project showcase and smooth animations" },
      { text: "Clean and accessible UI designed with Tailwind CSS" },
      { text: "Fast loading speeds with Next.js optimization" },
      { text: "Professional presentation of skills and experience" },
    ],
    image: "/images/portfolio-v2.webp",
    alt: "Portfolio",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://portfolio.example.com",
    gradient: "from-purple-500 to-purple-700",
    accentColor: "from-purple-500 to-purple-700",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const imageVariants = {
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-[#0f001a] min-h-screen pb-15 pt-40 md:pt-32 w-full">
      <div className="pt-5 px-4 md:px-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <motion.h2
            className="text-gray-600 dark:text-zinc-400 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
            variants={itemVariants}
          >
            Code Meets Creativity
          </motion.h2>
          <motion.div
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            variants={itemVariants}
          >
            <span className="text-gray-900 dark:text-zinc-200">Crafted </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-purple-500">
              Projects
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-8 items-start"
            >
              <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden relative bg-linear-to-br ${project.gradient} p-1">
                <motion.div
                  className="relative h-64 lg:h-80 w-full overflow-hidden bg-white/10 rounded-xl"
                  whileHover="hover"
                  variants={imageVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltocRLPMjDVfKVlY3j5bCKm0iD9XjS0f8A1Q3j/wA7j1f8A//Z"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              <div className="lg:w-1/2 w-full space-y-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 dark:text-zinc-300">
                  {project.description}
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-zinc-400">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gray-400 dark:bg-zinc-500 rounded-full mt-2 shrink-0"></span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 rounded-lg bg-linear-to-r from-gray-900/10 to-gray-900/20 dark:from-zinc-800/20 dark:to-zinc-800/20 hover:from-gray-900/20 hover:to-gray-900/30 dark:hover:from-zinc-800/30 dark:hover:to-zinc-800/40 backdrop-blur-sm px-4 py-2 text-sm font-medium transition-all text-gray-900 dark:text-zinc-100"
                >
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}