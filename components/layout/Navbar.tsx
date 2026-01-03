"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/app/components/ModeToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hydration-safe theme loading
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setMounted(true);
  }, []);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) {
    return <div className="h-16 w-full" aria-hidden="true" />;
  }

  const navLinks = (
    <>
      <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Home</Link>
      <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">About</Link>
      <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Projects</Link>
      <Link href="/experience" onClick={() => setMenuOpen(false)} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Experience</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Contact</Link>
    </>
  );

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-white dark:bg-neutral-900/90 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between py-3 px-4 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight select-none">
          <Link href="/" className="inline-block">{theme === "dark" ? "SM" : "SM"}</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 max-w-3xl mx-auto">
          <div className="flex items-center gap-10 bg-white dark:bg-neutral-900/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200 dark:border-neutral-700 px-8 py-4">
            <div className="flex gap-8 text-gray-700 dark:text-gray-300 text-sm font-medium">
              {navLinks}
            </div>

            <div className="ml-10 flex items-center gap-4">
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full font-semibold px-6 hover:shadow-md transition-all duration-200"
            asChild
          >
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden text-3xl font-light focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-4 left-4 z-50 mx-4 mt-2">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-700 overflow-hidden">
            <nav className="flex flex-col p-6 space-y-5 text-lg font-medium text-gray-800 dark:text-gray-200">
              {navLinks}
            </nav>

            <div className="px-6 pb-6 space-y-4 border-t border-gray-200 dark:border-neutral-700 pt-6">
              <div className="flex justify-center">
                <ModeToggle />
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full rounded-full font-semibold shadow-lg"
                onClick={() => setMenuOpen(false)}
                asChild
              >
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
