"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";

const Projects = () => {
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

  const projects = [
    {
      title: "OuterWave Digital",
      category: "Full Stack Web Application",
      description:
        "A comprehensive digital platform offering innovative solutions and services. Built with modern web technologies to provide a seamless user experience across all devices.",
      longDescription:
        "OuterWave App represents the flagship product of my entrepreneurial journey. This full-stack web application demonstrates advanced React patterns, secure backend APIs, and responsive design principles. The platform includes user authentication, real-time features, and a scalable architecture.",
      image: "/images/projects/outerwave-digital.webp",
      liveUrl: "https://www.outerwaveapp.com/",
      githubUrl: null, // Private repository
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "JWT",
      ],
      features: [
        "Responsive design for all devices",
        "User authentication and authorization",
        "Real-time data synchronization",
        "Modern UI/UX with smooth animations",
        "Scalable backend architecture",
        "SEO optimization",
      ],
      status: "Live",
      year: "2023",
    },
    {
      title: "OuterWave Logistics",
      category: "Business Platform",
      description:
        "A logistics management platform designed to streamline operations and improve efficiency for businesses. Features comprehensive tracking, analytics, and management tools.",
      longDescription:
        "OuterWave Logistics addresses real-world business challenges in the logistics industry. This platform provides comprehensive tools for tracking, management, and analytics, helping businesses optimize their operations and improve customer satisfaction.",
      image: "/images/projects/outerwave-logistics.webp",
      liveUrl: "https://outerwavelogistics.com/",
      githubUrl: null, // Private repository
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "CSS3",
        "Bootstrap",
      ],
      features: [
        "Real-time tracking system",
        "Analytics dashboard",
        "User management system",
        "Automated reporting",
        "Mobile-responsive design",
        "Integration capabilities",
      ],
      status: "Live",
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A showcase of my work, from entrepreneurial ventures to technical
            demonstrations
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-6xl text-primary-300 dark:text-primary-600">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Live"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Tag
                        size={12}
                        className="text-primary-600 dark:text-primary-400"
                      />
                      <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Calendar size={12} />
                    {project.year}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-body mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Key Features:
                  </h4>
                  <ul className="space-y-0.5">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-xs text-body flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5">
                            •
                          </span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-xs py-2"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline text-center text-xs py-2"
                    >
                      View Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="flex-1 text-center text-xs py-2 text-muted">
                      Private Repository
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
