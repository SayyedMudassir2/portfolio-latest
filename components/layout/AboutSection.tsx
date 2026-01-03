"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import IconCloud from "./IconCloud";
import Earth from "@/components/globe";
import Link from "next/link";

const skills = [
  {
    title: "Project Planning & Strategy",
    description:
      "I work closely with clients to define clear goals and develop a strategic roadmap for each project.",
  },
  {
    title: "Design & User Experience",
    description:
      "I create intuitive and aesthetically pleasing designs that focus on user-centered experiences.",
  },
  {
    title: "Custom Development",
    description:
      "I write clean, efficient code to build custom solutions tailored to the specific needs of the project.",
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrate third-party services and APIs to enhance functionality and improve user experience.",
  },
  {
    title: "Testing & Optimization",
    description:
      "Conduct rigorous testing to ensure functionality, performance, and security across all platforms.",
  },
  {
    title: "Continuous Support & Maintenance",
    description:
      "Provide ongoing support and updates to ensure the product remains relevant and fully functional over time.",
  },
];

const SkillCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="h-40 bg-gray-100 dark:bg-zinc-800 rounded-lg p-3 w-36 shrink-0 border border-gray-200/50 dark:border-zinc-700/50">
    <h4 className="text-xs font-medium text-gray-900 dark:text-zinc-200 mb-2 line-clamp-1">{title}</h4>
    <p className="text-xs text-gray-600 dark:text-zinc-400 line-clamp-3">{description}</p>
  </Card>
);

export default function AboutSection() {
  return (
    <section className="pt-20 py-8 bg-gray-50 dark:bg-[#0f001a] min-h-screen">
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 mx-auto max-w-7xl">
        {/* Tech Enthusiast Card */}
        <Card className="group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg dark:shadow-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-purple-200/50 dark:hover:border-zinc-700 h-full p-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-600 dark:text-zinc-400 text-sm font-medium mb-1">
              Tech Enthusiast
            </CardTitle>
            <CardDescription className="font-semibold text-gray-900 dark:text-zinc-200 text-lg">
              Always excited to build cool stuff with the latest tech.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex-1 relative">
            <div className="relative flex w-full h-full items-center justify-center overflow-hidden">
              <IconCloud />
            </div>
          </CardContent>
        </Card>

        {/* Let's Work Together Card */}
        <Card className="group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg dark:shadow-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-purple-200/50 dark:hover:border-zinc-700 h-full flex flex-col justify-between p-6">
          <CardHeader className="pb-2">
            <CardTitle className="font-semibold text-gray-900 dark:text-zinc-200 text-lg">
              Let&apos;s work together
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-zinc-400">
              on your next project
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SM</span>
            </div>
          </div>
          <Link
            href="mailto:sayyedmudassir443@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-300/50 dark:border-zinc-700/50 px-4 py-2.5 text-sm font-medium text-gray-900 dark:text-zinc-200 hover:bg-gray-200/50 dark:hover:bg-zinc-700/50 hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
            aria-label="Email Sayyed Mudassir"
          >
            <Mail size={16} />
            <span className="whitespace-nowrap">sayyedmudassir443@gmail.com</span>
          </Link>
        </Card>

        {/* Remote Card */}
        <Card className="group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg dark:shadow-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-purple-200/50 dark:hover:border-zinc-700 h-full p-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-600 dark:text-zinc-400 text-sm font-medium mb-1">
              Remote
            </CardTitle>
            <CardTitle className="font-semibold text-gray-900 dark:text-zinc-200 text-lg mb-2">
              India
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-zinc-300">
              I&apos;m very flexible with the time zone communications
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex-1 relative">
            <div className="relative flex w-full h-full items-center justify-center overflow-hidden">
              <Earth />
            </div>
          </CardContent>
        </Card>

        {/* Behind the Scenes Card - Full Width */}
        <Card className="group relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg dark:shadow-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-purple-200/50 dark:hover:border-zinc-700 lg:col-span-3 h-full p-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-600 dark:text-zinc-400 text-sm font-medium mb-1">
              Behind the scenes
            </CardTitle>
            <CardDescription className="font-semibold text-gray-900 dark:text-zinc-200 text-lg">
              Currently crafting a Business Portfolio for Client.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-6 overflow-hidden">
              <div className="relative w-full">
                <div className="flex animate-scroll-left gap-4 will-change-transform">
                  {skills.concat(skills).map((skill, index) => (
                    <SkillCard key={index} title={skill.title} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}