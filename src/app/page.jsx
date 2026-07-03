import Contact from "@/components/sections/home/Contact";
import Experience from "@/components/sections/home/Experience";
import Hero from "@/components/sections/home/Hero";
import Projects from "@/components/sections/home/Projects";
import Skills from "@/components/sections/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}