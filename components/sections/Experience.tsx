"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      title: "Founder & Full Stack Developer",
      company: "OuterWave Ventures",
      period: "2023 - Present",
      location: "Remote",
      type: "Entrepreneurship",
      description:
        "Founded and developed multiple digital ventures including OuterWave App and OuterWave Logistics. Led full-stack development using MERN stack, managed project timelines, and implemented scalable solutions.",
      achievements: [
        "Built and launched OuterWave App (outerwaveapp.com) - a comprehensive digital platform",
        "Developed OuterWave Logistics (outerwavelogistics.com) - streamlining logistics operations",
        "Implemented modern web technologies including React, Node.js, and MongoDB",
        "Managed end-to-end product development from concept to deployment",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "Next.js",
      ],
      link: "https://www.outerwaveapp.com/",
    },
    {
      title: "Full Stack Web Development Student",
      company: "UNC Chapel Hill Coding Bootcamp",
      period: "2022 - 2023",
      location: "Chapel Hill, NC",
      type: "Education",
      description:
        "Completed an intensive 24-week coding bootcamp covering full-stack web development fundamentals and advanced concepts. Gained hands-on experience with modern web technologies and development methodologies.",
      achievements: [
        "Mastered front-end and back-end technologies including HTML, CSS, JavaScript, React.js",
        "Developed proficiency in server-side technologies: Node.js, Express.js, MongoDB, MySQL",
        "Learned database management with both SQL (MySQL) and NoSQL (MongoDB) databases",
        "Gained experience with version control (Git), command line operations, and deployment",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Git",
      ],
      link: "https://bootcamp.unc.edu/",
    },
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Work Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My professional journey and key accomplishments in web development
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-950 z-10" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } ml-12 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              experience.type === "Entrepreneurship"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                            }`}
                          >
                            {experience.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted">
                          <div className="flex items-center gap-1">
                            <strong className="text-primary-600 dark:text-primary-400">
                              {experience.company}
                            </strong>
                          </div>
                          {experience.link && (
                            <a
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-body mb-4">{experience.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-body flex items-start"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                                •
                              </span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to collaborate on your next project?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Let&apos;s Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
