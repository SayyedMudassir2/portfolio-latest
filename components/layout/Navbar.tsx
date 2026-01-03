"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/app/components/ModeToggle";
import { X, Menu } from 'lucide-react';

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link href="/" onClick={onClick} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Home</Link>
    <Link href="/about" onClick={onClick} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">About</Link>
    <Link href="/projects" onClick={onClick} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Projects</Link>
    <Link href="/experience" onClick={onClick} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Experience</Link>
    <Link href="/contact" onClick={onClick} className="hover:underline underline-offset-4 transition-all duration-200 font-medium">Contact</Link>
  </>
);

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }
    return () => {
      if(body) {
        body.style.overflow = 'auto';
      }
    }
  }, [menuOpen]);

  if (!mounted) {
    return <div className="h-16 w-full" aria-hidden="true" />;
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight select-none">
          <Link href="/" className="inline-block">SM</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 text-sm">
          <NavLinks />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-semibold px-4 transition-all duration-200"
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
              className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2 -mr-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg z-50">
            <div className="h-full flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center gap-8 text-2xl font-medium text-gray-800 dark:text-gray-200">
                  <NavLinks onClick={() => setMenuOpen(false)} />
                </nav>
                <div className="mt-12">
                  <Button
                    variant="default"
                    size="lg"
                    className="rounded-full font-semibold shadow-lg px-8 py-4 text-lg"
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
