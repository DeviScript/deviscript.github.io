/**
 * Technology Stack Constants
 * Centralized technology and skills data
 */

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Next.js",
  "Tailwind CSS",
] as const;

export const SKILLS_DATA = {
  frontend: {
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  backend: {
    title: "Backend Development",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "JWT", level: 85 },
      { name: "Mongoose", level: 80 },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
    ],
  },
} as const;

export const EXPERIENCE_DATA = [
  {
    id: "outerwave",
    company: "OuterWave Ventures",
    position: "Founder & Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    description: [
      "Founded and developed OuterWave App, a comprehensive logistics management platform",
      "Built scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
      "Implemented responsive design principles ensuring optimal user experience across all devices",
      "Developed RESTful APIs and integrated third-party services for enhanced functionality",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "CSS3",
      "HTML5",
    ],
    achievements: [
      "Successfully launched OuterWave App with positive user feedback",
      "Achieved 100% responsive design across all major devices and browsers",
      "Implemented efficient database design reducing query times by 40%",
    ],
  },
  {
    id: "unc-bootcamp",
    company: "UNC Chapel Hill",
    position: "Full Stack Development Student",
    duration: "2023",
    location: "Chapel Hill, NC",
    description: [
      "Completed intensive 24-week Full Stack Web Development Bootcamp",
      "Gained hands-on experience with modern web development technologies and frameworks",
      "Developed multiple full-stack applications as part of curriculum requirements",
      "Collaborated with fellow students on group projects using Git and GitHub workflows",
    ],
    technologies: [
      "MERN Stack",
      "MySQL",
      "Handlebars.js",
      "jQuery",
      "Bootstrap",
      "Git",
    ],
    achievements: [
      "Successfully completed all assignments and projects with high marks",
      "Demonstrated proficiency in both frontend and backend development",
      "Built a portfolio of applications showcasing various technical skills",
    ],
  },
] as const;

export const PROJECTS_DATA = [
  {
    id: "outerwave-app",
    title: "OuterWave App",
    description:
      "Comprehensive logistics management platform for modern businesses",
    longDescription:
      "OuterWave App is a full-featured logistics management platform designed to streamline operations for businesses of all sizes. Built with the MERN stack, it features real-time tracking, inventory management, and comprehensive reporting capabilities.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Chart.js",
    ],
    liveUrl: "https://www.outerwaveapp.com/",
    githubUrl: "https://github.com/DeviScript/outerwave-app",
    image: "/images/outerwave-app-screenshot.jpg",
    featured: true,
    status: "completed",
    category: "web",
  },
  {
    id: "outerwave-logistics",
    title: "OuterWave Logistics",
    description: "Advanced supply chain management solution",
    longDescription:
      "A sophisticated supply chain management system that provides end-to-end visibility and control over logistics operations. Features include route optimization, vendor management, and predictive analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    liveUrl: "https://logistics.outerwaveapp.com/",
    image: "/images/outerwave-logistics-screenshot.jpg",
    featured: true,
    status: "in-progress",
    category: "web",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with Next.js",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/DeviScript/deviscript.github.io",
    liveUrl: "https://deviscript-github-io.vercel.app",
    image: "/images/portfolio-screenshot.jpg",
    featured: false,
    status: "completed",
    category: "web",
  },
] as const;

export const EDUCATION_DATA = [
  {
    id: "unc-bootcamp",
    institution: "University of North Carolina at Chapel Hill",
    degree: "Full Stack Web Development Bootcamp",
    duration: "2023",
    description:
      "Intensive 24-week program covering modern web development technologies and best practices",
    achievements: [
      "Mastered the MERN stack (MongoDB, Express.js, React, Node.js)",
      "Developed proficiency in database design and management",
      "Gained experience with version control using Git and GitHub",
      "Built multiple full-stack applications from concept to deployment",
    ],
  },
] as const;
