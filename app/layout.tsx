import "./globals.css";
import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";

// import Navbar from "./components/Navbar";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import StarBackground from "@/components/layout/StarBackground";

/**
 * Load Rethink Sans font from Google Fonts
 */
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Metadata for the website
 */
export const metadata: Metadata = {
  title: "Mudassir | Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description: "A personal portfolio website of Sayyed Mudassir.",
};

/**
 * RootLayout Component
 * Wraps the entire app with font, theme provider, and global components (Navbar & Footer).
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="favicon.ico?v=2" type="image/x-icon" />
      </head>
      <body
        className={`font-body text-foreground/90 antialiased ${rethinkSans.className}`}
        suppressHydrationWarning
      >
        {/* Theme Provider wraps the app for light/dark/system themes */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Content */}
          {children}

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
