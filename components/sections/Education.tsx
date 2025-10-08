"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
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

  const education = [
    {
      degree: "Full Stack Web Development Certificate",
      institution: "UNC Chapel Hill Coding Bootcamp",
      period: "2022 - 2023",
      location: "Chapel Hill, NC",
      type: "Intensive Bootcamp",
      description:
        "Completed a comprehensive 24-week full-stack web development program covering modern web technologies, best practices, and real-world application development.",
      highlights: [
        "Graduated from a highly selective and intensive coding program",
        "Gained hands-on experience with industry-standard tools and technologies",
        "Developed multiple full-stack applications using modern frameworks",
        "Learned collaborative development practices and version control",
      ],
      skills: [
        "Front-end Technologies: HTML5, CSS3, JavaScript, jQuery, Bootstrap, React.js",
        "Back-end Technologies: Node.js, Express.js, Database Theory",
        "Database Management: MySQL, NoSQL (MongoDB), Mongoose ODM, Sequelize ORM",
        "Development Tools: Git, Command Line, Progressive Web Applications",
        "Programming Concepts: Object-oriented Programming, Data Structures, Algorithms, Big O Notation",
        "Project Management: Agile Project Delivery methodologies",
      ],
      certificationUrl: "#", // Add actual certificate URL if available
      gpa: null,
      honors: ["Certificate of Completion"],
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "UNC Chapel Hill",
      date: "2023",
      icon: "🎓",
      description:
        "Comprehensive certification covering MERN stack development",
    },
    {
      name: "JavaScript Fundamentals",
      issuer: "Bootcamp Curriculum",
      date: "2022",
      icon: "🟨",
      description: "Advanced JavaScript programming concepts and ES6+ features",
    },
    {
      name: "React Development",
      issuer: "Bootcamp Curriculum",
      date: "2023",
      icon: "⚛️",
      description:
        "Modern React development with hooks, context, and state management",
    },
    {
      name: "Node.js & Express",
      issuer: "Bootcamp Curriculum",
      date: "2023",
      icon: "🟢",
      description: "Server-side development with Node.js and Express framework",
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
            Education & Learning
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My educational background and continuous learning journey in web
            development
          </motion.p>
        </motion.div>

        {/* Main Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent rounded-bl-full" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <GraduationCap
                        className="text-primary-600 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                          {edu.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium">
                        <strong>{edu.institution}</strong>
                        <ExternalLink size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-2 text-sm text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-body mb-6">{edu.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-sm text-body flex items-start"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Learned */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <BookOpen
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    Curriculum & Skills
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {edu.skills.map((skillArea, skillIndex) => (
                      <div key={skillIndex} className="text-sm text-body">
                        <strong className="text-gray-900 dark:text-white">
                          {skillArea.split(":")[0]}:
                        </strong>
                        <span className="ml-1">{skillArea.split(":")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honors */}
                {edu.honors && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Recognition
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, honorIndex) => (
                        <span
                          key={honorIndex}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Certifications & Specializations
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted mb-3">{cert.date}</p>
                <p className="text-sm text-body">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning Mindset
          </h3>
          <p className="text-lg text-body max-w-3xl mx-auto">
            Technology evolves rapidly, and I&apos;m committed to staying
            current with the latest developments. I actively pursue new learning
            opportunities, contribute to open-source projects, and engage with
            the developer community to continuously expand my skills and
            knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
