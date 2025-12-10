"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "DeviScript@gmail.com",
      href: "mailto:DeviScript@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/DeviScript",
      href: "https://github.com/DeviScript",
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "brianlockhart-deviscript",
      href: "https://www.linkedin.com/in/brianlockhart-deviscript/",
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: ExternalLink,
      label: "OuterWave App",
      value: "outerwaveapp.com",
      href: "https://www.outerwaveapp.com/",
      color: "text-primary-600 dark:text-primary-400",
    },
  ];

  return (
    <section id="contact" className="section bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Let&apos;s Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Ready to bring your ideas to life? Let&apos;s connect
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-body mb-8 max-w-2xl mx-auto">
                I&apos;m always interested in new opportunities, whether
                it&apos;s an exciting project, a collaboration, or just a chat
                about technology and innovation. Feel free to reach out through any of my platforms!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto:") ? "_self" : "_blank"
                  }
                  rel={
                    contact.href.startsWith("mailto:")
                      ? ""
                      : "noopener noreferrer"
                  }
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="card p-6 text-center group"
                >
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-200 mb-4`}
                  >
                    <contact.icon size={28} />
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {contact.value}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl text-center border border-green-100 dark:border-green-900/20"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  Available for New Projects
                </span>
              </div>
              <p className="text-body max-w-2xl mx-auto">
                I&apos;m currently open to full-time opportunities, freelance
                projects, and collaborative ventures. You can also reach out through the contact forms on{" "}
                <a
                  href="https://www.outerwaveapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  OuterWave App
                </a>{" "}
                or{" "}
                <a
                  href="https://outerwavelogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  OuterWave Logistics
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
