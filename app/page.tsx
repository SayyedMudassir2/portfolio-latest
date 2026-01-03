
import Hero from "@/components/layout/Header"
import AboutSection from '@/components/layout/AboutSection';
import Projects from "@/components/layout/Projects";
import TechStack from "@/components/layout/TechStack";
import ServicesSection from "@/components/layout/ServicesSection";
import { ScrollingText } from "@/components/layout/ScrollingText";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutSection />
    <Projects />
    <TechStack />
    <ServicesSection />
    <ScrollingText />
    </>
  );
}
