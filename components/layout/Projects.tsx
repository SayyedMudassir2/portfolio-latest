"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

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
  github: string;
  gradient: string;
  accentColor: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

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
    link: "https://school-management-system.vercel.app",
    github:
      "https://github.com/SayyedMudassir2/School-Management-System-FY-Project",
    gradient: "from-red-500 to-red-700",
    accentColor: "from-red-500 to-red-700",
  },
  {
    id: "2",
    title: "LearnSet – Study Material Platform",
    description:
      "Developed and deployed a full-stack, AI-powered SaaS web application providing curriculum-specific study materials and academic support for MSBTE diploma students.",
    features: [
      {
        text: "Curriculum-aware AI Study Assistant using a custom RAG pipeline",
      },
      {
        text: "Firebase authentication with role-based access control",
      },
      {
        text: "Responsive UI with Next.js and real-time AI streaming",
      },
      {
        text: "Production deployment on Vercel with background jobs via Inngest",
      },
    ],
    image: "/images/learnset.webp",
    alt: "LearnSet",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Inngest",
      "RAG",
    ],
    link: "https://learnset.vercel.app",
    github: "https://github.com/SayyedMudassir2/LearnSet",
    gradient: "from-emerald-500 to-emerald-700",
    accentColor: "from-emerald-500 to-emerald-700",
  },
  {
    id: "3",
    title: "PicturaAI",
    description:
      "Developed and deployed an AI-powered image-editing SaaS with advanced tools including generative fill, object removal, and recoloring.",
    features: [
      { text: "Stripe-based credit system with webhook usage tracking" },
      { text: "Clerk authentication with MongoDB webhook sync" },
      { text: "Next.js Server Actions with dynamic routing" },
      { text: "Responsive UI with paginated galleries" },
    ],
    image: "/images/picturaai.webp",
    alt: "PicturaAI",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe", "Cloudinary"],
    link: "https://pictura-ai.vercel.app",
    github: "https://github.com/SayyedMudassir2/pictura",
    gradient: "from-purple-500 to-purple-700",
    accentColor: "from-purple-500 to-purple-700",
  },
  {
    id: "4",
    title: "3D Animation Website",
    description:
      "A multimedia-rich platform offering tools, tutorials, and resources for creating professional 3D animations.",
    features: [
      { text: "Beginner to advanced 3D animation tutorials" },
      { text: "Library of 3D assets, textures, and effects" },
      { text: "Built-in multimedia creation tools" },
      { text: "Beginner-friendly and professional UI" },
      { text: "Production-ready animation resources" },
    ],
    image: "/images/3d-animation.webp",
    alt: "3D Animation Website",
    tags: ["HTML", "CSS", "JavaScript", "3D Assets"],
    link: "https://3d-animation-website.vercel.app",
    github: "https://github.com/SayyedMudassir2/3D-animation-website",
    gradient: "from-cyan-500 to-cyan-700",
    accentColor: "from-cyan-500 to-cyan-700",
  },
  {
    id: "5",
    title: "AICareerMentor",
    description:
      "AI-powered SaaS platform offering real-time career Q&A, resume analysis, and roadmap generation.",
    features: [
      {
        text: "Multi-agent orchestration using Inngest for async workflows",
      },
      {
        text: "Resume analysis using LangChain with 90%+ accuracy",
      },
      {
        text: "Clerk authentication and Stripe billing with credit gating",
      },
      {
        text: "Persistent chat history using Neon PostgreSQL",
      },
      {
        text: "CI/CD with GitHub and Vercel",
      },
    ],
    image: "/images/aicareermentor.webp",
    alt: "AICareerMentor",
    tags: [
      "Next.js",
      "React",
      "Clerk",
      "Stripe",
      "Neon",
      "Inngest",
      "LangChain",
    ],
    link: "https://aicareermentor.vercel.app",
    github: "https://github.com/SayyedMudassir2/ai-career-hub",
    gradient: "from-blue-500 to-blue-700",
    accentColor: "from-blue-500 to-blue-700",
  },
  {
    id: "6",
    title: "Cario – AI Career Coach Course",
    description:
      "AI-driven career coach platform built as part of a full-stack training course.",
    features: [
      { text: "AI Career Coach built with Next.js and React" },
      { text: "Secure authentication using Clerk" },
      { text: "Serverless PostgreSQL with Neon" },
      { text: "Background job orchestration using Inngest" },
      { text: "Production deployment on Vercel" },
    ],
    image: "/images/cario.webp",
    alt: "Cario AI Career Coach",
    tags: ["Next.js", "React", "Clerk", "Neon", "Inngest"],
    link: "https://cario.example.com",
    github: "https://github.com/SayyedMudassir2/cario",
    gradient: "from-slate-500 to-slate-700",
    accentColor: "from-slate-500 to-slate-700",
  },
  {
    id: "7",
    title: "Portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and experience with a modern UI.",
    features: [
      { text: "Fully responsive layout" },
      { text: "Interactive project showcase" },
      { text: "Clean and accessible Tailwind UI" },
      { text: "Optimized performance with Next.js" },
      { text: "Professional presentation" },
    ],
    image: "/images/portfolio-v2.webp",
    alt: "Portfolio",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://mudassir-sayyed.vercel.app/",
    github: "https://github.com/SayyedMudassir2/portfolio-latest",
    gradient: "from-purple-500 to-purple-700",
    accentColor: "from-purple-500 to-purple-700",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Animation Variants                            */
/* -------------------------------------------------------------------------- */

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.3 },
  },
};

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-gray-50 pb-15 pt-40 dark:bg-[#0f001a] md:pt-32">
      <div className="mx-auto max-w-7xl px-4 pt-5 md:px-10">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <motion.h2
            className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-zinc-400 md:text-sm"
            variants={itemVariants}
          >
            Code Meets Creativity
          </motion.h2>

          <motion.div
            className="text-3xl font-bold md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            <span className="text-gray-900 dark:text-zinc-200">Crafted </span>
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
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
              className="flex flex-col items-start gap-8 lg:flex-row"
            >
              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-linear-to-br ${project.gradient} p-1 lg:w-1/2`}
              >
                <motion.div
                  className="relative h-64 w-full overflow-hidden rounded-xl bg-white/10 lg:h-80"
                  whileHover="hover"
                  variants={imageVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              <div className="w-full space-y-4 lg:w-1/2">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-lg text-gray-700 dark:text-zinc-300">
                  {project.description}
                </CardDescription>

                <ul className="space-y-2 text-sm text-gray-600 dark:text-zinc-400">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400 dark:bg-zinc-500" />
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

                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-gray-900/10 to-gray-900/20 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm transition-all hover:from-gray-900/20 hover:to-gray-900/30 dark:from-zinc-800/20 dark:to-zinc-800/20 dark:text-zinc-100"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    View on GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
