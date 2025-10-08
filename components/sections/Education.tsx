"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  FileText,
  BookOpen,
} from "lucide-react";

const Education = () => {
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

  const certifications = [
    {
      name: "Full Stack Web Development",
      icon: "🎓",
      description: "MERN Stack Development",
    },
    {
      name: "JavaScript ES6+",
      icon: "🟨",
      description: "Advanced Programming",
    },
    {
      name: "React Development",
      icon: "⚛️",
      description: "Modern Frontend",
    },
    {
      name: "Node.js & Express",
      icon: "🟢",
      description: "Backend Development",
    },
  ];

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education & Certifications
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Formal education and specialized training in web development
          </motion.p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="card p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent rounded-bl-full" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <GraduationCap className="text-white" size={48} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-3">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                      Intensive Bootcamp
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Full Stack Web Development
                  </h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    UNC Chapel Hill Coding Bootcamp
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>2022 - 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Chapel Hill, NC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>24-Week Program</span>
                    </div>
                  </div>
                  <p className="text-body mb-6 max-w-2xl">
                    Completed comprehensive training in modern web development
                    technologies including MERN stack, databases, APIs, and
                    full-stack application development.
                  </p>
                  <Link
                    href="/resume"
                    className="btn-outline inline-flex items-center gap-2 group"
                  >
                    View Complete Education History
                    <FileText
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Key Certifications
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center"
              >
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20"
        >
          <BookOpen
            className="mx-auto mb-4 text-primary-600 dark:text-primary-400"
            size={40}
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning Mindset
          </h3>
          <p className="text-lg text-body max-w-3xl mx-auto">
            Technology evolves rapidly, and I&apos;m committed to staying
            current with the latest developments through continuous learning,
            open-source contributions, and community engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
