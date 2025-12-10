"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Heart,
  Code,
  Rocket,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand with animated emoji */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Brian<span className="text-primary-600">.</span>dev
              </h3>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                👋
              </motion.span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Full Stack Developer & Entrepreneur passionate about creating
              innovative digital solutions that make a difference.
            </p>

            {/* Social Links with hover effects */}
            <div className="flex space-x-3 mb-6">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/DeviScript",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/brianlockhart-deviscript/",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  href: "mailto:DeviScript@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Rocket
                size={18}
                className="text-primary-600 dark:text-primary-400"
              />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase()}`
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Code
                size={18}
                className="text-primary-600 dark:text-primary-400"
              />
              My Ventures
            </h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="https://www.outerwaveapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex items-center gap-1">
                    OuterWave App
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Digital Solutions Platform
                  </div>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="https://outerwavelogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="text-gray-900 dark:text-white font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex items-center gap-1">
                    OuterWave Logistics
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Logistics Management
                  </div>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section with quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Quote */}
            <p className="text-gray-700 dark:text-gray-300 italic max-w-3xl">
              &ldquo;AI is acceleration; direction is still human. Genius is
              choosing the objective function.&rdquo;
              <span className="text-primary-600 dark:text-primary-400 font-semibold not-italic">
                {" "}
                — Brian
              </span>
            </p>
            {/* Copyright */}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Brian Lockhart
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
