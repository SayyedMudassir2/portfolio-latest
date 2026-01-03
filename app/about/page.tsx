"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Layout from "@/components/layout/Layout";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/sayyedmudassir",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/SayyedMudassir2",
    label: "GitHub",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/SayedMudasir443",
    label: "Twitter / X",
  },
  {
    icon: FaEnvelope,
    href: "mailto:sayyedmudassir443@gmail.com",
    label: "Email",
  },
];

export default function AboutMe() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f001a] text-gray-900 dark:text-white pt-16 md:pt-32 px-4 sm:px-8 md:px-16 transition-colors duration-300">
        <section className="max-w-7xl mx-auto mb-20 relative">
          {/* Title */}
          <p className="uppercase tracking-wider font-medium text-xs md:text-sm mb-6 ml-5 md:ml-0 text-gray-700 dark:text-gray-300">
            More about me
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center sm:items-start lg:items-center">
            {/* Profile Image */}
            <div className="w-full sm:w-1/3 max-w-[250px] md:max-w-full mx-auto sm:mx-0">
              <div className="rounded-full overflow-hidden border-4 border-purple-600 dark:border-purple-500">
                <Image
                  src="/profile.jpg"
                  alt="Profile Image"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full sm:w-2/3 lg:w-2/3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center sm:text-left text-black dark:text-white">
                Hi there! I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-200">
                  Mudassir
                </span>
              </h1>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base text-center sm:text-left">
                <p>
                  I'm Sayyed Mudassir, a passionate web developer dedicated to
                  building impactful and user-friendly websites. I specialize in
                  React, Next.js, and modern frontend technologies, while
                  exploring AI & ML to integrate into web solutions.
                </p>

                <p>
                  When I'm not coding, I&apos;m learning new technologies,
                  brainstorming new ideas, or helping others grow. I strongly
                  believe in consistency, curiosity, and leveling up every day.
                </p>

                <p>
                  Every morning, I wake up excited to build something meaningful
                  and work toward becoming a top-tier developer.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center sm:justify-start space-x-5 gap-4 pt-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-full transition-all duration-300 
                      hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 
                      text-gray-500 dark:text-gray-300 
                      hover:text-black dark:hover:text-white 
                      transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Layout />
      </div>
    </>
  );
}
