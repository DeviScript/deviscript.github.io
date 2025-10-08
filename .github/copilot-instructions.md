<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is Brian Lockhart's professional personal website - a complete, production-ready portfolio showcasing his skills as a Full Stack Developer and Entrepreneur. Built with Next.js App Router, TypeScript, and Tailwind CSS, featuring a dark modern theme with minimalist/tech-focused aesthetic.

## Project Status

✅ **PRODUCTION READY** - Successfully deployed to GitHub Pages at https://deviscript.github.io

## Deployment Status

- **Live Website**: https://deviscript.github.io
- **Deployment Method**: GitHub Actions with Next.js static export
- **Build Status**: ✅ Successfully building and deploying
- **Environment**: Production-ready with proper environment configuration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Typography**: @tailwindcss/typography

## Implemented Features

✅ **Hero/Landing Section** - Eye-catching intro with animated elements
✅ **About Me** - Personal story and professional background
✅ **Skills & Technologies** - Interactive skill showcase with progress bars
✅ **Work Experience** - Professional timeline (UNC Chapel Hill bootcamp + OuterWave)
✅ **Projects Portfolio** - Featured projects with live links
✅ **Education** - Academic background and certifications
✅ **Contact Form** - Professional contact section with form
✅ **Navigation** - Responsive navbar with smooth scrolling
✅ **Footer** - Complete site footer with links
✅ **Dark Mode Toggle** - Persistent theme switching
✅ **Responsive Design** - Mobile-first, fully responsive
✅ **SEO Optimization** - Meta tags, sitemap, robots.txt
✅ **GitHub Actions Deployment** - Automated CI/CD pipeline for GitHub Pages
✅ **Environment Configuration** - Proper environment variables for production
✅ **Static Export** - Next.js configured for static site generation
✅ **Production Optimization** - Built and optimized for production deployment

## Architecture

- **App Router Structure**: Modern Next.js 13+ patterns
- **Component Organization**: Logical separation of layout, sections, and providers
- **TypeScript**: Full type safety throughout
- **Tailwind**: Custom design system with consistent spacing/colors
- **Animation System**: Framer Motion with entrance animations and hover effects

## Development Guidelines

- Maintain TypeScript strict mode
- Follow responsive design patterns (mobile-first)
- Use semantic HTML for accessibility
- Implement proper error boundaries
- Keep animations performant (transform/opacity)
- Follow Next.js best practices for SEO
- Maintain consistent component patterns

## Design System

- **Colors**: Primary blue theme with dark mode support
- **Typography**: Inter font family with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Animations**: Subtle, purposeful micro-interactions
- **Components**: Reusable card, button, and section patterns

## Content Information

- **Name**: Brian Lockhart
- **Title**: Full Stack Developer & Entrepreneur
- **Email**: DeviScript@gmail.com
- **GitHub**: https://github.com/DeviScript
- **LinkedIn**: https://www.linkedin.com/in/brianlockhart-deviscript/
- **Projects**: OuterWave App (https://www.outerwaveapp.com/), OuterWave Logistics
- **Education**: UNC Chapel Hill Coding Bootcamp (24-week MERN stack program)
- **Skills**: JavaScript, TypeScript, React, Node.js, MongoDB, Express.js, Next.js, Tailwind CSS

## File Structure

```
personal-site/
├── app/
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with navigation and theme
│   ├── page.tsx              # Homepage combining all sections
│   ├── sitemap.ts            # SEO sitemap generation
│   └── robots.ts             # SEO robots configuration
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx    # Responsive navbar with dark mode
│   │   └── Footer.tsx        # Site footer with links
│   ├── providers/
│   │   └── theme-provider.tsx # Dark/light theme provider
│   └── sections/
│       ├── Hero.tsx          # Landing section with animations
│       ├── About.tsx         # Personal story and highlights
│       ├── Skills.tsx        # Interactive skills showcase
│       ├── Experience.tsx    # Professional timeline
│       ├── Projects.tsx      # Portfolio with OuterWave projects
│       ├── Education.tsx     # UNC bootcamp details
│       └── Contact.tsx       # Contact form and information
├── public/
│   ├── images/               # Project screenshots and assets
│   └── manifest.json         # PWA configuration
└── [config files]           # package.json, tailwind.config.js, etc.
```

## Current State & Next Steps

### ✅ Completed

- All core website sections implemented and styled
- Responsive design tested across devices
- Dark/light mode fully functional
- SEO optimization with meta tags and sitemaps
- Performance optimized with Next.js best practices
- **Production deployment on GitHub Pages**
- **Automated CI/CD pipeline with GitHub Actions**
- **Environment configuration for production**

### 🔄 Potential Enhancements

- **Contact Form Integration**: Connect to email service (Formspree/EmailJS)
- **Blog Section**: Implement MDX-based blog with dynamic routing
- **Analytics Enhancement**: Add detailed visitor tracking
- **Custom Domain**: Configure custom domain if desired
- **Performance Monitoring**: Add Core Web Vitals tracking

### 🚀 Quick Start Commands

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

## Development Context

- **Development Server**: Running on http://localhost:3000
- **Build Status**: All components compiling successfully
- **Dependencies**: All packages installed and up to date
- **TypeScript**: Strict mode enabled, all files properly typed
- **Responsive**: Mobile-first design tested and working
- **Performance**: Optimized for Core Web Vitals

## Deployment Ready

✅ **Production build optimized**
✅ **SEO meta tags configured**  
✅ **Sitemap and robots.txt generated**
✅ **Performance optimized**
✅ **Live on GitHub Pages: https://deviscript.github.io**
✅ **Automated deployment pipeline**
✅ **Documentation complete**
