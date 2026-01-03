"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Sun, Moon, Youtube, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaPersonBooth } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  const socials = [
    {
      name: "WhatsApp",
      desc: "+91 9892846294",
      href: "https://wa.me/919892846294",
      icon: <FaWhatsapp className="text-green-500 w-6 h-6" />,
    },
    {
      name: "Instagram",
      desc: "Follow my journey",
      href: "https://www.instagram.com/sayyedmudassir_/",
      icon: <FaInstagram className="text-pink-500 w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      desc: "Professional network",
      href: "https://www.linkedin.com/in/sayyedmudassir/",
      icon: <FaLinkedin className="text-blue-600 w-6 h-6" />,
    },
    {
      name: "GitHub",
      desc: "See my work on GitHub",
      href: "https://www.github.com/SayyedMudassir2",
      icon: <FaGithub className="text-black w-6 h-6" />,
    },
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!message) {
      setError("Please enter your message");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          setSuccess("Your message has been sent successfully. I will get back to you soon!");
        },
        (error) => {
          setError(
            "Some error occurred. Please send me a direct email using the address provided above."
          );
          console.error(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 transition-colors bg-gray-50 dark:bg-[#0f001a] text-gray-900 dark:text-gray-300">
      <br /><br /><br />

      <h1 className="text-center font-bold text-3xl md:text-4xl mb-2">Get in Touch</h1>
      <p className="mb-10 max-w-lg text-center text-gray-500 dark:text-gray-400">
        Feel free to reach out, I&apos;ll get back to you soon.
      </p>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        {/* Contact Links */}
        <section className="flex-1 rounded-md p-6 transition-colors bg-zinc-100 dark:bg-zinc-900">
          <h2 className="font-semibold text-yellow-400 mb-3">Let&apos;s Connect</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-400">
            Ready to start your project? Reach out through any of these channels.
          </p>

          <Link
            href="https://wa.me/919892846294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md px-4 py-3 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition mb-6"
          >
            <FaWhatsapp className="text-green-500 w-6 h-6" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+91 9892846294</p>
            </div>
          </Link>

          <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-300">Follow Me</h3>
          <div className="flex flex-col gap-4">
            {socials.slice(1).map(({ name, desc, href, icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md px-4 py-3 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition"
              >
                {icon}
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="flex-1 rounded-md p-6 transition-colors bg-zinc-100 dark:bg-zinc-900">
          <h2 className="font-semibold text-yellow-400 mb-5">Send a Message</h2>
          <form className="flex flex-col gap-5" onSubmit={sendEmail} noValidate>
            <Label>
                Name
                <div className="relative">
                  <IoPersonSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="pl-10 bg-transparent text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
                    aria-label="Name"
                    disabled={isLoading}
                  />
                </div>
            </Label>
            <Label>
  Email
  <div className="relative">
    <MdAlternateEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="john@example.com"
      required
      className="pl-10 bg-transparent text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
      aria-label="Email"
      disabled={isLoading}
    />
  </div>
</Label>
            <Label>
  Message
  <div className="relative">
    <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
    <Textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Tell me about your project..."
      rows={5}
      required
      className="pl-10 pt-10 bg-transparent text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
      aria-label="Message"
      disabled={isLoading}
    />
  </div>
</Label>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <Button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500 flex items-center justify-center disabled:opacity-60"
              disabled={isLoading}
              aria-label="Send Message"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}