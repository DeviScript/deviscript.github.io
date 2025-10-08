"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  floatingElement,
} from "@/lib/utils/animations";
import { useScrollNavigation } from "@/lib/hooks/useScrollNavigation";
import { TECH_STACK } from "@/lib/constants/data";
import { NAVIGATION_SECTIONS } from "@/lib/constants/navigation";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollToSection } = useScrollNavigation(NAVIGATION_SECTIONS);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
          {...floatingElement(0, 20, 6)}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          {...floatingElement(0, 30, 8)}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"
          {...floatingElement(0, 25, 7)}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
          >
            👋 Hello, I&apos;m Brian Lockhart
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
          >
            Full Stack Developer
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              & Entrepreneur
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative digital solutions with the MERN
            stack. UNC Chapel Hill Coding Bootcamp graduate and founder of
            OuterWave ventures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary group"
            >
              View My Work
              <ExternalLink
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-outline group"
            >
              Download Resume
              <Download
                size={18}
                className="ml-2 group-hover:translate-y-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech}
                variants={staggerItem}
                className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
