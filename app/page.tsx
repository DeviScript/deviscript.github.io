import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Education = dynamic(() => import("@/components/sections/Education"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
