"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description:
        "Experienced with MERN stack, building scalable web applications from concept to deployment.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Passionate about finding creative solutions to complex technical challenges.",
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description:
        "Strong communication skills with experience in Agile development methodologies.",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description:
        "Adaptable and eager to learn new technologies and frameworks as needed.",
    },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Passionate developer with a love for creating innovative digital
            solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full Stack Developer & Entrepreneur
              </h3>
              <p className="text-body">
                I&apos;m a passionate Full Stack Developer with expertise in the
                MERN stack (MongoDB, Express.js, React, Node.js). As a graduate
                of the UNC Chapel Hill Coding Bootcamp, I&apos;ve built a strong
                foundation in modern web development technologies and best
                practices.
              </p>
              <p className="text-body">
                Beyond coding, I&apos;m an entrepreneur who founded OuterWave
                ventures, focusing on innovative digital solutions that solve
                real-world problems. I believe in the power of technology to
                transform ideas into impactful products.
              </p>
              <p className="text-body">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or working
                on my next entrepreneurial venture. I&apos;m always excited to
                collaborate on projects that push the boundaries of what&apos;s
                possible.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                "Problem Solving",
                "Team Leadership",
                "Agile Development",
                "UI/UX Design",
                "Project Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  <highlight.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-body">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            {
              number: "24",
              label: "Week Bootcamp",
              sublabel: "UNC Chapel Hill",
            },
            { number: "2+", label: "Years", sublabel: "Coding Experience" },
            { number: "10+", label: "Technologies", sublabel: "Mastered" },
            { number: "2", label: "Startups", sublabel: "Founded" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </div>
              <div className="text-xs text-muted">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
