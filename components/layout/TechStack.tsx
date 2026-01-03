"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  alt: string;
}

const techStack: TechItem[] = [
  { name: "HTML", icon: "/icons/html.webp", alt: "HTML" },
  { name: "CSS", icon: "/icons/css.webp", alt: "CSS" },
  { name: "JavaScript", icon: "/icons/javascript.webp", alt: "JavaScript" },
  { name: "TypeScript", icon: "/icons/typescript.svg", alt: "TypeScript" },
  { name: "React", icon: "/icons/react.webp", alt: "React" },
  { name: "Next.js", icon: "/icons/nextjs.webp", alt: "Next.js" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.webp", alt: "Tailwind CSS" },
  { name: "Framer Motion", icon: "/icons/framermotion.webp", alt: "Framer Motion" },
  { name: "Shadcn", icon: "/icons/shadcn.webp", alt: "Shadcn" },
  { name: "Node.js", icon: "/icons/nodejs.webp", alt: "Node.js" },
  { name: "Express.js", icon: "/icons/expressjs.webp", alt: "Express.js" },
  { name: "MongoDB", icon: "/icons/mongodb.webp", alt: "MongoDB" },
  { name: "SQL", icon: "/icons/sql.webp", alt: "SQL" },
  { name: "Python", icon: "/icons/python.webp", alt: "Python" },
  { name: "Java", icon: "/icons/java.webp", alt: "Java" },
  { name: "npm", icon: "/icons/npm.webp", alt: "npm" },
  { name: "GitHub", icon: "/icons/github.webp", alt: "GitHub" },
  { name: "Vercel", icon: "/icons/vercel.webp", alt: "Vercel" },
  { name: "Figma", icon: "/icons/figma.webp", alt: "Figma" },
  { name: "Firebase", icon: "/icons/firebase.webp", alt: "Firebase" },
  { name: "Postman", icon: "/icons/postman.webp", alt: "Postman" },
  { name: "REST API", icon: "/icons/restapi.webp", alt: "REST API" },
];

export default function TechStack() {
  return (
    <section className="bg-gray-50 dark:bg-[#0f001a] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-gray-600 dark:text-zinc-400 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Progress over perfection.
          </motion.h2>
          <motion.div
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gray-900 dark:text-zinc-200">What </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-purple-500">
              I work with
            </span>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 lg:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="rounded-full py-2 px-3 flex items-center gap-2 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 group shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                <Image
                  src={tech.icon}
                  alt={tech.alt}
                  height={20}
                  width={20}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-zinc-100 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}