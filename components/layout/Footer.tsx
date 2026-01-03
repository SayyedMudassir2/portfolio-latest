// components/Footer.tsx
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
}

interface SocialLink extends NavLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/sayyedmudassir",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/SayyedMudassir2",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://wa.me/919892846294",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

const websiteLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const projectLinks: NavLink[] = [
  { href: "/projects", label: "AICareerMentor" },
  { href: "/projects", label: "ExpenseTrackerApp" },
  { href: "/projects", label: "PicturaAI" },
  { href: "/projects", label: "School Management System" },
  { href: "/projects", label: "Cario" },
  { href: "/projects", label: "Portfolio" },
];

const contact = {
  email: "sayyedmudassir443@gmail.com",
  phone: "+91 9892846294",
  phoneLink: "+919892846294",
} as const;

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f001a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Left: Brand & Social Links */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sayyed Mudassir
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xs">
              Creating web solutions that balance elegance and reliability
              perfectly.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow me on ${label}`}
                  className="group relative p-2 -m-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <Icon
                    size={24}
                    className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Center: Navigation & Projects */}
          <div className="grid grid-cols-2 gap-10 md:col-span-1 md:gap-16">
            {/* Website Navigation */}
            <nav aria-labelledby="footer-nav-website">
              <h3
                id="footer-nav-website"
                className="font-semibold text-gray-900 dark:text-white mb-5"
              >
                Navigation
              </h3>
              <ul className="space-y-3 text-sm">
                {websiteLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Featured Projects */}
            <nav aria-labelledby="footer-nav-projects">
              <h3
                id="footer-nav-projects"
                className="font-semibold text-gray-900 dark:text-white mb-5"
              >
                Projects
              </h3>
              <ul className="space-y-3 text-sm">
                {projectLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
                    >
                      {label.length > 17 ? label.slice(0, 17) + "..." : label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Contact Information */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-sm">
              I&apos;m open to freelance projects, full-time opportunities, or
              innovative collaborations.
              <br />
              Let&apos;s create something amazing together.
            </p>

            <address className="not-italic space-y-5">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
              >
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <FaEnvelope
                    size={18}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <span className="font-medium underline-offset-4 group-hover:underline">
                  {contact.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contact.phoneLink}`}
                className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
              >
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <FaPhone
                    size={18}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <span className="font-medium underline-offset-4 group-hover:underline">
                  {contact.phone}
                </span>
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-200 dark:border-gray-800" />

        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/SayyedMudassir2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Sayyed Mudassir
            </a>{" "}
            | All rights reserved |{" "}
            <a
              href="https://github.com/SayyedMudassir2/portfolio-latest"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              View Source Code
            </a>
          </p>

          <p className="text-gray-500 dark:text-gray-400">
            Built with React & Next.js (App Router + Server Actions),
            TypeScript, Tailwind CSS, Framer Motion, EmailJS, React Toaster,
            React Vertical Timeline — deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
