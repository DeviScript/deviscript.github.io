"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Mongoose ODM", level: 85 },
        { name: "Sequelize ORM", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "JWT", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Webpack", level: 75 },
        { name: "NPM", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Chrome DevTools", level: 90 },
        { name: "Command Line", level: 85 },
      ],
    },
    {
      title: "Methodologies & Concepts",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Agile Development", level: 85 },
        { name: "Object-oriented Programming", level: 88 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "Big O Notation", level: 75 },
        { name: "Database Management", level: 85 },
        { name: "Progressive Web Apps", level: 80 },
        { name: "Client-Side Storage", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Core Technologies
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { name: "JavaScript", icon: "🟨" },
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Express.js", icon: "🚂" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Next.js", icon: "▲" },
              { name: "Tailwind", icon: "💨" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
