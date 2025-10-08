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
      title: "OuterWave App",
      category: "Full Stack Web Application",
      description:
        "A comprehensive digital platform offering innovative solutions and services. Built with modern web technologies to provide a seamless user experience across all devices.",
      longDescription:
        "OuterWave App represents the flagship product of my entrepreneurial journey. This full-stack web application demonstrates advanced React patterns, secure backend APIs, and responsive design principles. The platform includes user authentication, real-time features, and a scalable architecture.",
      image: "/images/outerwave-app.jpg",
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
      image: "/images/outerwave-logistics.jpg",
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
    {
      title: "MERN Stack E-Commerce",
      category: "Full Stack Application",
      description:
        "A complete e-commerce solution built during my bootcamp training, featuring product management, shopping cart, user authentication, and payment processing.",
      longDescription:
        "This project showcases my mastery of the MERN stack through a comprehensive e-commerce platform. It includes all essential e-commerce features while demonstrating best practices in full-stack development, state management, and security.",
      image: "/images/ecommerce-demo.jpg",
      liveUrl: null,
      githubUrl: "https://github.com/DeviScript/mern-ecommerce",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Redux",
        "JWT",
        "Stripe API",
        "Bootstrap",
      ],
      features: [
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "User authentication and profiles",
        "Admin dashboard",
        "Payment processing with Stripe",
        "Order tracking system",
      ],
      status: "Demo",
      year: "2023",
    },
    {
      title: "Task Management App",
      category: "Productivity Tool",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project organization capabilities.",
      longDescription:
        "Built to demonstrate proficiency in real-time applications and collaborative features. This task management app includes advanced features like real-time synchronization, team workspaces, and comprehensive project management tools.",
      image: "/images/task-manager.jpg",
      liveUrl: null,
      githubUrl: "https://github.com/DeviScript/task-manager",
      technologies: [
        "React",
        "Socket.io",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Material-UI",
      ],
      features: [
        "Real-time collaboration",
        "Drag-and-drop task organization",
        "Team workspaces",
        "Project timelines",
        "File attachments",
        "Notification system",
      ],
      status: "Demo",
      year: "2022",
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Tag
                        size={14}
                        className="text-primary-600 dark:text-primary-400"
                      />
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>

                {/* Description */}
                <p className="text-body mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-body flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                            •
                          </span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline text-center text-sm py-2"
                    >
                      View Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="flex-1 text-center text-sm py-2 text-muted">
                      Private Repository
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more projects */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/DeviScript"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
