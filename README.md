# Brian Lockhart - Personal Portfolio Website

[![Live Site](https://img.shields.io/badge/Live%20Site-deviscript.github.io-blue)](https://deviscript.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-green)](https://pages.github.com/)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS, showcasing my skills as a Full Stack Developer and Entrepreneur.

> **Live Site**: [deviscript.github.io](https://deviscript.github.io)

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with dark mode support
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Built with Next.js App Router for optimal performance
- **Animations**: Smooth transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Accessibility**: WCAG compliant with keyboard navigation
- **Type Safe**: Built with TypeScript for reliability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📱 Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal story and professional background
- **Skills**: Interactive showcase of technical skills and proficiencies
- **Experience**: Professional timeline with UNC Chapel Hill bootcamp
- **Projects**: Featured work including OuterWave ventures
- **Education**: Academic background and certifications
- **Contact**: Form and contact information

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/DeviScript/personal-site.git
   cd personal-site
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

To create a production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

## 📁 Project Structure

\`\`\`
personal-site/
├── app/ # Next.js App Router
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ ├── sitemap.ts # SEO sitemap
│ └── robots.ts # SEO robots.txt
├── components/ # React components
│ ├── layout/ # Layout components
│ ├── providers/ # Context providers
│ └── sections/ # Page sections
├── public/ # Static assets
└── styles/ # Additional styles
\`\`\`

## 🎨 Customization

### Colors

Update the color scheme in \`tailwind.config.js\`:
\`\`\`javascript
colors: {
primary: {
// Your brand colors
}
}
\`\`\`

### Content

Update personal information in the component files:

- \`components/sections/Hero.tsx\` - Name, title, tagline
- \`components/sections/About.tsx\` - Bio and personal story
- \`components/sections/Experience.tsx\` - Professional experience
- \`components/sections/Projects.tsx\` - Portfolio projects

### SEO

Update metadata in \`app/layout.tsx\`:
\`\`\`typescript
export const metadata: Metadata = {
title: 'Your Name - Your Title',
description: 'Your description',
// ... other metadata
}
\`\`\`

## 🤝 Contact

- **Email**: DeviScript@gmail.com
- **GitHub**: [github.com/DeviScript](https://github.com/DeviScript)
- **LinkedIn**: [linkedin.com/in/brianlockhart-deviscript](https://www.linkedin.com/in/brianlockhart-deviscript/)
- **Website**: [outerwaveapp.com](https://www.outerwaveapp.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built during my journey through the UNC Chapel Hill Coding Bootcamp
- Inspired by modern web design principles and best practices
- Thank you to the open source community for the amazing tools and libraries

---

**⭐ Star this repository if you found it helpful!**
# deviscript.github.io
