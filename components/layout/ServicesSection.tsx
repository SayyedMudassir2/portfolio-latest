"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Search, 
  Palette, 
  Smartphone, 
  Zap,
  X 
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  href: string;
}

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 p-6 text-center transition-all duration-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
    <div className="mb-4 flex justify-center">
      <div className="p-3 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 group-hover:bg-purple-500/10 transition-colors duration-300">
        {service.icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 leading-tight">{service.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">{service.description}</p>
    <button
      onClick={() => onLearnMore(service)}
      className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-200 group-hover:translate-x-1 cursor-pointer"
    >
      Learn more <span aria-hidden="true">→</span>
    </button>
  </div>
);

const services: Service[] = [
  {
    icon: <Monitor className="h-6 w-6 text-blue-400" />,
    title: "Website Development",
    description: "Custom-built websites tailored to your vision.",
    details: "I specialize in creating fully custom web applications using modern technologies like Next.js, React, and Node.js. From concept to deployment, I ensure your site is scalable, performant, and aligned with your business goals.",
    href: "#web-development",
  },
  {
    icon: <Search className="h-6 w-6 text-green-400" />,
    title: "SEO Optimized",
    description: "Engineered for better visibility and higher rankings.",
    details: "Implementing best practices in on-page and technical SEO to drive organic traffic. Keyword research, site speed optimization, and schema markup ensure your site ranks higher and converts better.",
    href: "#seo",
  },
  {
    icon: <Palette className="h-6 w-6 text-pink-400" />,
    title: "Modern Design",
    description: "Clean, contemporary UI that reflects your brand.",
    details: "I use modern UI/UX design principles to craft visually appealing and user-friendly interfaces. My focus is on clarity, consistency, and engagement—using minimal design aesthetics, smooth interactions, and accessible layouts that leave a lasting impression.",
    href: "#design",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-indigo-400" />,
    title: "Responsive",
    description: "Perfect experience across devices and screen sizes.",
    details: "Mobile-first approach with fluid grids, flexible images, and media queries to ensure seamless performance on desktops, tablets, and phones. Cross-browser compatibility and touch-friendly navigation included.",
    href: "#responsive",
  },
  // Second row
  {
    icon: <Search className="h-6 w-6 text-green-400" />,
    title: "Optimized",
    description: "Engineered for better visibility and higher rankings.",
    details: "Performance optimization through code minification, lazy loading, and CDN integration. Core Web Vitals focus to achieve lightning-fast load times and improved user satisfaction scores.",
    href: "#optimized",
  },
  {
    icon: <Palette className="h-6 w-6 text-pink-400" />,
    title: "Modern Design",
    description: "Clean, contemporary UI that reflects your brand.",
    details: "Collaborative design process with wireframing, prototyping, and user testing. Tailored color palettes, typography, and animations that embody your brand identity while prioritizing usability.",
    href: "#design-2",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-indigo-400" />,
    title: "Responsive",
    description: "Perfect experience across devices and screen sizes.",
    details: "Adaptive layouts that adjust intelligently to any viewport. Progressive enhancement for older devices and PWAs for offline capabilities, ensuring accessibility for all users.",
    href: "#responsive-2",
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Landing Pages",
    description: "High-converting pages built for maximum impact and speed.",
    details: "Conversion-optimized landing pages with compelling CTAs, A/B testing setups, and analytics integration. Designed to capture leads and drive actions with minimal friction.",
    href: "#landing-pages",
  },
];

const Modal: React.FC<{ service: Service | null; onClose: () => void }> = ({ service, onClose }) => (
  <AnimatePresence>
    {service && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-gray-900/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-purple-500/5">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
          <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Details</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{service.details}</p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="bg-gray-50 dark:bg-[#0f001a] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-gray-600 dark:text-zinc-400 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Where design meets functionality.
          </motion.h2>
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gray-900 dark:text-zinc-200">What </span>
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              I Offer
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
      <Modal service={selectedService} onClose={closeModal} />
    </section>
  );
}
