"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Brain,
  Zap,
  Target,
  Rocket,
  Code,
  TrendingUp,
} from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Technology icon mapping
  const getTechIcon = (tech: string): string => {
    const iconMap: { [key: string]: string } = {
      JavaScript: "🟨",
      "JavaScript (ES6+)": "🟨",
      TypeScript: "🔷",
      React: "⚛️",
      "Next.js": "▲",
      "Node.js": "🟢",
      "Express.js": "🚂",
      MongoDB: "🍃",
      SQL: "🗄️",
      Git: "📦",
      GitHub: "📦",
      HTML5: "🌐",
      CSS3: "🎨",
      "Tailwind CSS": "💨",
      "REST APIs": "🔌",
      "Web APIs": "🔌",
      PWA: "📱",
      PWAs: "📱",
      Excel: "📊",
      ORM: "🔗",
      NoSQL: "🍃",
      "Database Management": "🗄️",
      "CI/CD": "🔄",
      "MERN Stack": "⚛️",
    };
    return iconMap[tech] || "⚙️"; // Default gear icon
  };

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
      title: "Business Owner",
      company: "Outerwave Logistics",
      period: "Current",
      location: "Remote",
      type: "Entrepreneurship",
      description:
        "Build and operate a logistics venture with an emphasis on structured processes, cost clarity, and customer reliability.",
      achievements: [
        "Implement spreadsheet/SQL-first data hygiene for quotes, margins, and service levels",
        "Automate repeatable operations where feasible for improved efficiency",
        "Apply accounting discipline to pricing, reconciliation, and reporting",
        "Manage end-to-end logistics operations with focus on customer satisfaction",
      ],
      technologies: [
        "Excel",
        "SQL",
        "JavaScript",
        "Process Automation",
        "Data Analysis",
        "Node.js",
        "CLI Tools",
        "Web APIs",
        "Git",
        "Cost Modeling",
        "Financial Reporting",
        "Database Management",
        "ORM",
        "Spreadsheet Engineering",
      ],
      link: "https://outerwavelogistics.com",
    },
    {
      title: "Business Owner",
      company: "Outerwave App",
      period: "Current",
      location: "Remote",
      type: "Entrepreneurship",
      description:
        "Develop and iterate on a product experience informed by real-world constraints (users, data, and distribution).",
      achievements: [
        "Leverage full-stack training to prototype features and integrate Web APIs",
        "Manage basic CI/gitflow workflows for efficient development cycles",
        "Translate market feedback into a prioritized, metrics-aware roadmap",
        "Built comprehensive digital platform from concept to deployment",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
        "Next.js",
        "Git",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "REST APIs",
        "Web APIs",
        "PWAs",
        "CI/CD",
        "GitHub",
        "NoSQL",
        "MERN Stack",
        "OOP",
        "Responsive Design",
        "Vercel",
        "A/B Testing",
        "Metrics Analytics",
      ],
      link: "https://www.outerwaveapp.com/",
    },
  ];

  const philosophyCards = [
    {
      title: "Strategic Integration",
      subtitle: "Cutting-Edge Leverage",
      description:
        "Leveraging advanced tools and frameworks to build scalable, monetized systems with competitive advantage.",
      quote:
        "Learning how to learn will be the most essential skill for the next generation.",
      author: "— Demis Hassabis",
      icon: Brain,
      gradient: "from-purple-500 via-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br",
      iconColor: "text-purple-200",
      stats: "Top 3% Power User",
    },
    {
      title: "Precision Engineering",
      subtitle: "No-Fluff Methodology",
      description:
        "Demanding implementation-ready solutions with streamlined workflows that integrate seamlessly into production systems.",
      quote: "AI will eventually be as good a tutor as any human ever could.",
      author: "— Bill Gates",
      icon: Target,
      gradient: "from-emerald-500 via-teal-500 to-blue-500",
      bgPattern: "bg-gradient-to-br",
      iconColor: "text-emerald-200",
      stats: "Zero-Waste Approach",
    },
    {
      title: "Technical Sophistication",
      subtitle: "Full-Stack Mastery",
      description:
        "Advanced framework expertise from React/Next.js to database optimization, with emphasis on modular architecture.",
      quote:
        "Learning how to learn will be the most essential skill for the next generation.",
      author: "— Demis Hassabis",
      icon: Code,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgPattern: "bg-gradient-to-br",
      iconColor: "text-orange-200",
      stats: "15+ Technologies",
    },
    {
      title: "Entrepreneurial Innovation",
      subtitle: "Growth-Focused Building",
      description:
        "Monetization-first approach with multi-layer revenue stacks, A/B testing, and metrics-driven optimization.",
      quote: "AI will eventually be as good a tutor as any human ever could.",
      author: "— Bill Gates",
      icon: Rocket,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br",
      iconColor: "text-indigo-200",
      stats: "Business Builder",
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
                            className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            <span className="text-sm">{getTechIcon(tech)}</span>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2">
                  {/* Philosophy Card */}
                  {philosophyCards[index] && (
                    <motion.div
                      variants={itemVariants}
                      className={`${
                        index % 2 === 0 ? "ml-12" : "mr-12"
                      } relative group h-full`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          rotateY: 3,
                          rotateX: 3,
                        }}
                        className={`${philosophyCards[index].bgPattern} ${philosophyCards[index].gradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between min-h-[500px]`}
                      >
                        {/* Animated background pattern */}
                        <motion.div
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-50"
                        />

                        {/* Floating particles */}
                        <motion.div
                          animate={{
                            y: [-10, 10, -10],
                            x: [-5, 5, -5],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"
                        />
                        <motion.div
                          animate={{
                            y: [10, -10, 10],
                            x: [5, -5, 5],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full"
                        />

                        <div className="relative z-10 h-full flex flex-col">
                          {/* Header Section */}
                          <div className="flex-shrink-0">
                            {/* Icon with pulsing effect */}
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="mb-4"
                            >
                              {(() => {
                                const IconComponent =
                                  philosophyCards[index].icon;
                                return (
                                  <IconComponent
                                    size={32}
                                    className={`${philosophyCards[index].iconColor} drop-shadow-lg`}
                                  />
                                );
                              })()}
                            </motion.div>

                            {/* Stats badge */}
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white mb-4"
                            >
                              {philosophyCards[index].stats}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">
                              {philosophyCards[index].title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-white/80 text-sm font-medium mb-4">
                              {philosophyCards[index].subtitle}
                            </p>
                          </div>

                          {/* Content Section - Flexible */}
                          <div className="flex-grow flex flex-col justify-center">
                            {/* Description */}
                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                              {philosophyCards[index].description}
                            </p>

                            {/* Inspiring Quote */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="relative mb-6"
                            >
                              {/* Quote mark */}
                              <div className="absolute -top-2 -left-2 text-4xl text-amber-300/40 font-bold">
                                "
                              </div>

                              {/* Quote content */}
                              <div className="bg-amber-500/10 backdrop-blur-sm rounded-lg p-4 border border-amber-400/30">
                                <p className="text-amber-100 text-sm italic leading-relaxed mb-2 font-medium">
                                  {philosophyCards[index].quote}
                                </p>
                                <p className="text-amber-200/80 text-xs font-semibold text-right">
                                  {philosophyCards[index].author}
                                </p>
                              </div>
                            </motion.div>

                            {/* Key Points */}
                            <div className="space-y-2 mb-4">
                              {index === 0 && (
                                <>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center text-white/80 text-xs"
                                  >
                                    <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                                    Advanced Tool Integration
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex items-center text-white/80 text-xs"
                                  >
                                    <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                                    Competitive Positioning
                                  </motion.div>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center text-white/80 text-xs"
                                  >
                                    <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                                    Production-Ready Solutions
                                  </motion.div>
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex items-center text-white/80 text-xs"
                                  >
                                    <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                                    Seamless Integration
                                  </motion.div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Footer Section */}
                          <div className="flex-shrink-0">
                            {/* Animated progress bar */}
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.5, duration: 1.5 }}
                              className="h-1 bg-white/30 rounded-full overflow-hidden"
                            >
                              <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                                className="h-full w-1/3 bg-white/60 rounded-full"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
