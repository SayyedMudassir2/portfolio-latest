// components/layout/Header.tsx
"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import StarBackground from "@/components/layout/StarBackground";
import CurveBackground from "@/components/layout/CurveBackground";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden px-4 md:px-8">
      {/* Background Layers */}
      <StarBackground />
      <CurveBackground />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center px-4 pointer-events-auto">
          {/* Hero Title */}
          <h1 className="font-extrabold text-gray-900 dark:text-white leading-tight">
            <span className="block text-[clamp(2rem,7vw,5rem)]">
              Turning thoughts into
            </span>
            <span className="block text-[clamp(2.3rem,8vw,6rem)] bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              beautiful web stories
            </span>
          </h1>

          {/* Introduction */}
          <div className="mt-8 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
            <span>Hello, I&apos;m</span>
            <span className="inline-block -skew-x-12 bg-purple-700 px-5 py-2 text-white rounded-md shadow-lg">
              Sayyed Mudassir
            </span>

            {/* Profile Image with CSS-only Hover Popup */}
            <div className="relative cursor-pointer group">
              {/* Small Image */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl ring-4 ring-purple-500/30 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/profile.jpg"
                  alt="Sayyed Mudassir - Full Stack Developer"
                  width={56}
                  height={56}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Popup Image on Hover (CSS-only, hidden on mobile) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out z-50 hidden sm:group-hover:block sm:group-hover:scale-100 sm:group-hover:opacity-100 sm:scale-0 sm:opacity-0 origin-center">
                <div className="relative">
                  {/* Large Circular Image */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-purple-600 shadow-2xl ring-8 ring-purple-400/40">
                    <Image
                      src="/profile.jpg"
                      alt="Sayyed Mudassir"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="absolute bottom-1 md:bottom-3 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-6 pointer-events-none">
        <div className="pointer-events-auto mx-auto rounded-none sm:rounded-full bg-white/20 sm:bg-white/20 dark:bg-black/5 sm:dark:bg-black/5 border border-white/30 dark:border-white/30 backdrop-blur-none sm:backdrop-blur-xl border-none sm:border sm:border-white/30 sm:dark:border-white/50 py-2 sm:py-4 px-4 sm:px-8 shadow-none sm:shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="contact"
              className="group flex items-center gap-3 rounded-full bg-purple-600 hover:bg-purple-700 px-8 py-3.5 text-white font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Let's Connect</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-600 hover:border-purple-700 px-8 py-3.5 font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>My Resume</span>
              <Download className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}