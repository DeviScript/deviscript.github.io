"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  TrendingUp,
} from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section
      id="resume"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Interdisciplinary Analyst · Full-Stack Learner · Founder
            </p>
            <a
              href="/documents/resume.pdf"
              download="Brian_Lockhart_Resume.pdf"
              className="btn-primary group inline-flex items-center"
            >
              Download PDF Resume
              <Download
                size={18}
                className="ml-2 group-hover:translate-y-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 mb-12 border border-primary-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <MapPin
                  className="text-primary-600 dark:text-primary-400"
                  size={20}
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    Pittsboro, NC 27312
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="text-primary-600 dark:text-primary-400"
                  size={20}
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    (919) 444-0167
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="text-primary-600 dark:text-primary-400"
                  size={20}
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    deviscript@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe
                  className="text-primary-600 dark:text-primary-400"
                  size={20}
                />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    outerwaveapp.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Executive Profile */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="text-primary-600" size={28} />
              Executive Profile
            </h3>
            <div className="card p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Strategic, systems-minded professional with a rare blend of{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Interdisciplinary Studies + Accounting
                </span>{" "}
                rigor and{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  hands-on programming
                </span>
                . 4.0 GPA (twice) and{" "}
                <span className="font-semibold">Phi Kappa Phi</span> honoree.
                Comfortable moving from data structures and SQL to market
                research and go-to-market mechanics. Known for turning ambiguity
                into structure, building clean pipelines in Excel/SQL/JS, and
                delivering analysis that drives decisions.
              </p>
            </div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Edge & Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rigorous Thinker",
                  description:
                    "Dual 4.0s (B.A. Interdisciplinary Studies; B.S. Accounting coursework) → disciplined analysis, clean logic, defensible conclusions.",
                },
                {
                  title: "Code-Capable Operator",
                  description:
                    "Trained in Full-Stack Web Development (UNC Chapel Hill, 24-week bootcamp). Comfortable with JavaScript, HTML, CSS, Node.js, Express.js, SQL/NoSQL, React, Git, Web APIs.",
                },
                {
                  title: "Market-Literate",
                  description:
                    "Led research at X-Culture, translating trend signals into actionable marketing moves.",
                },
                {
                  title: "Global Collaborator",
                  description:
                    "Selected as one of 150 worldwide for X-Culture Global Symposium; delivered strategy for a real client in Poland.",
                },
                {
                  title: "Owner's POV",
                  description:
                    "Currently building and operating Outerwave Logistics and Outerwave App—bias to execution, clarity, and measurable outcomes.",
                },
              ].map((strength, index) => (
                <div
                  key={index}
                  className="card p-5 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-primary-600" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {/* Outerwave Logistics */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Business Owner
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      Outerwave Logistics
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Current
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Build and operate a logistics venture with an emphasis on
                      structured processes, cost clarity, and customer
                      reliability
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Implement spreadsheet/SQL-first data hygiene for quotes,
                      margins, and service levels; automate repeatable ops where
                      feasible
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Apply accounting discipline to pricing, reconciliation,
                      and reporting
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://outerwavelogistics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    outerwavelogistics.com →
                  </a>
                </div>
              </div>

              {/* Outerwave App */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Business Owner
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      Outerwave App
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Current
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Develop and iterate on a product experience informed by
                      real-world constraints (users, data, and distribution)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Leverage full-stack training to prototype features, manage
                      basic CI/gitflow, and integrate Web APIs as needed
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      •
                    </span>
                    <span>
                      Translate market feedback into a prioritized,
                      metrics-aware roadmap
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://www.outerwaveapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    outerwaveapp.com →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary-600" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {/* UNC Greensboro - Interdisciplinary Studies */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      B.A., Interdisciplinary Studies
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      University of North Carolina at Greensboro
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Sep 2020 – Dec 2023
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-semibold">
                    GPA: 4.0
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full font-semibold">
                    Phi Kappa Phi Honor Society
                  </span>
                </div>
              </div>

              {/* UNCG - Accounting */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      B.S., Accounting (Coursework)
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      Bryan School of Business & Economics (UNCG)
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Sep 2019 – Sep 2020
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-semibold">
                    GPA: 4.0
                  </span>
                </div>
              </div>

              {/* UNC Chapel Hill Bootcamp */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Full-Stack Web Development Bootcamp Certificate
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      University of North Carolina at Chapel Hill
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Jul 2022 – Jan 2023
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">
                  Intensive 24-week program: Excel, HTML, CSS, Git, JavaScript,
                  Web APIs, Node.js, OOP, Express.js, SQL, ORM, NoSQL, PWAs,
                  React, MERN, CS fundamentals
                </p>
              </div>

              {/* Florida State College */}
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Pre-Major, Business Administration
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      Florida State College
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    Aug 2011 – Dec 2013
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-semibold">
                    GPA: 3.95
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects & Activities */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Projects & Activities
            </h3>
            <div className="card p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                X-Culture Global Symposium — Participant & Team Collaborator
              </h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                July 2023
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">
                    •
                  </span>
                  <span>
                    One of <strong>150</strong> global students selected
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">
                    •
                  </span>
                  <span>
                    Co-authored a comprehensive business strategy for{" "}
                    <strong>Avros Engineering (Poland)</strong>; delivered
                    proposal and presentation with positive industry feedback
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">
                    •
                  </span>
                  <span>
                    Practiced cross-cultural collaboration, time-boxed research,
                    and structured problem-solving
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Technical Toolkit */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Code className="text-primary-600" size={28} />
              Technical Toolkit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Languages & Runtime
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript (ES6+)", "HTML", "CSS", "Node.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Frameworks/Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Express.js", "React", "PWAs", "MERN"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Data & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "NoSQL", "ORM", "Excel", "Git/GitHub"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Methods
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Requirements Capture",
                    "Rapid Prototyping",
                    "A/B Thinking",
                    "Metrics Wiring",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business & Analytical Strengths */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Business & Analytical Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  category: "Analysis",
                  skills:
                    "Pattern detection, trend mapping, structured problem-solving",
                },
                {
                  category: "Operational Fluency",
                  skills: "Process definition, documentation, light automation",
                },
                {
                  category: "Marketing Literacy",
                  skills:
                    "Positioning basics, audience insight, campaign assessment",
                },
                {
                  category: "Communication",
                  skills:
                    "Clear, concise writing; translate technical findings for non-technical stakeholders",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card p-5 border-l-4 border-primary-600 dark:border-primary-400"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.category}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Honors */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="text-primary-600" size={28} />
              Honors & Affiliations
            </h3>
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <Award className="text-yellow-500 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Phi Kappa Phi Honor Society
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Active Member — Academic excellence, service & scholarship
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Selected Highlights */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Selected Highlights
            </h3>
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 border-2 border-primary-200 dark:border-primary-900">
              <ul className="space-y-3">
                {[
                  "Dual 4.0 academic record across disciplines (Interdisciplinary Studies & Accounting)",
                  "Global strategy delivery for a real client at an international symposium",
                  "Founder-operator executing in the real economy while maintaining code competency",
                ].map((highlight, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-800 dark:text-gray-200 font-medium"
                  >
                    <span className="text-primary-600 dark:text-primary-400 text-xl">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
