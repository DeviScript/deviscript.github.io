<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is Brian Lockhart's professional personal website - a complete, production-ready portfolio showcasing his skills as a Full Stack Developer and Entrepreneur. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS, featuring a dark modern theme with minimalist/tech-focused aesthetic and enterprise-level architecture.

## Project Status

✅ **PRODUCTION READY** - Successfully deployed to Vercel at https://deviscript-github-io.vercel.app

## Deployment Status

- **Live Website**: https://deviscript-github-io.vercel.app
- **Deployment Method**: Vercel with automatic CI/CD from GitHub
- **Build Status**: ✅ Successfully building and deploying on Vercel
- **Environment**: Production-ready with proper environment configuration
- **Previous GitHub Pages**: Migrated to Vercel for better performance and features

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics (integrated)
- **Typography**: @tailwindcss/typography
- **Architecture**: Separation of Concerns (SoC) with clean organization

## Implemented Features

✅ **Hero/Landing Section** - Eye-catching intro with animated elements
✅ **About Me** - Personal story and professional background
✅ **Skills & Technologies** - Interactive skill showcase with progress bars
✅ **Work Experience** - Professional timeline (UNC Chapel Hill bootcamp + OuterWave)
✅ **Projects Portfolio** - Featured projects with live links
✅ **Education** - Academic background and certifications
✅ **Contact Form** - Professional contact section with form (ready for integration)
✅ **Navigation** - Responsive navbar with smooth scrolling
✅ **Footer** - Complete site footer with links
✅ **Dark Mode Toggle** - Persistent theme switching
✅ **Responsive Design** - Mobile-first, fully responsive
✅ **SEO Optimization** - Meta tags, sitemap, robots.txt
✅ **Vercel Deployment** - Automated CI/CD pipeline
✅ **Environment Configuration** - Production environment variables
✅ **Clean Architecture** - Enterprise-level Separation of Concerns
✅ **Type Safety** - Comprehensive TypeScript implementation
✅ **Professional Organization** - Structured docs, scripts, and configs

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

## Architecture & Principles

### **Separation of Concerns (SoC)**

This project follows enterprise-level architectural principles with clear separation of responsibilities:

- **Presentation Layer**: Components focus only on UI rendering
- **Business Logic Layer**: Custom hooks handle state management and logic
- **Data Layer**: Constants and configuration manage static data
- **Utility Layer**: Helper functions for common operations
- **Type Layer**: Comprehensive TypeScript definitions

### **Core Architecture**

- **App Router Structure**: Modern Next.js 14+ patterns
- **Component Organization**: Logical separation of layout, sections, and providers
- **TypeScript**: Full type safety throughout with strict mode
- **Custom Hooks**: Business logic separated from UI components
- **Animation System**: Reusable Framer Motion variants
- **Utility Functions**: DRY principles with shared helpers
- **Constants**: Centralized data management

## Development Guidelines

### **Code Organization**

- Follow Separation of Concerns principles
- Use custom hooks for business logic (lib/hooks/)
- Import utilities from lib/utils/ for common operations
- Reference constants from lib/constants/ for static data
- Maintain comprehensive TypeScript types in lib/types/

### **Component Development**

- Components should focus on presentation only
- Import business logic from custom hooks
- Use animation variants from lib/utils/animations.ts
- Follow responsive design patterns (mobile-first)
- Use semantic HTML for accessibility
- Implement proper error boundaries

### **TypeScript Standards**

- Maintain strict mode enabled
- Use proper type definitions from lib/types/
- No any types allowed
- Comprehensive interface definitions for all data structures

### **Performance & SEO**

- Keep animations performant (transform/opacity)
- Follow Next.js best practices for SEO
- Optimize images and assets
- Maintain excellent Core Web Vitals scores

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

## File Structure & Organization

This project follows professional software architecture with clear Separation of Concerns:

```
personal-site/
├── 📱 app/                    # Next.js App Router
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with navigation and theme
│   ├── page.tsx              # Homepage combining all sections
│   ├── sitemap.ts            # SEO sitemap generation
│   └── robots.ts             # SEO robots configuration
├── 🧩 components/             # React UI Components
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
├── 🛠️ lib/                    # Core Application Logic
│   ├── index.ts              # Centralized exports
│   ├── config.ts             # Environment configuration
│   ├── types/
│   │   └── index.ts          # TypeScript definitions
│   ├── hooks/                # Custom React hooks (business logic)
│   │   ├── useContactForm.ts # Form state management
│   │   └── useScrollNavigation.ts # Navigation logic
│   ├── utils/                # Utility functions
│   │   ├── animations.ts     # Framer Motion variants
│   │   └── dom.ts           # DOM manipulation helpers
│   └── constants/            # Static data and configuration
│       ├── navigation.ts     # Navigation configuration
│       └── data.ts          # Application data
├── 📄 docs/                   # Documentation
│   ├── setup/               # Setup and requirements
│   ├── development/         # Development guides and architecture
│   └── deployment/          # Deployment instructions
├── ⚙️ config/                 # Configuration files
│   ├── postcss.config.js    # PostCSS configuration
│   └── tailwind.config.js   # Tailwind CSS configuration
├── 📜 scripts/                # Development automation
│   ├── setup.sh             # Environment setup
│   └── development/         # Development scripts
├── 🌐 public/                 # Static assets
│   ├── images/
│   │   ├── projects/        # Project screenshots
│   │   └── profile/         # Profile images
│   ├── icons/               # Favicons and app icons
│   ├── documents/           # Downloadable files
│   └── manifest.json        # PWA configuration
└── Root configuration files   # Package.json, Next.js config, etc.
```

## Import Patterns

### **Recommended Import Structure**

```typescript
// 1. React and Next.js imports
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 2. Library utilities (centralized imports)
import { fadeInUp, useScrollNavigation, TECH_STACK } from "@/lib";

// 3. Component imports
import SomeComponent from "@/components/SomeComponent";

// 4. Types (when needed separately)
import type { SomeSpecificType } from "@/lib/types";
```

### **Key Library Exports**

- **Hooks**: `useContactForm`, `useScrollNavigation`
- **Utils**: `fadeInUp`, `staggerContainer`, `scrollToElement`, `debounce`
- **Constants**: `TECH_STACK`, `NAVIGATION_SECTIONS`, `SKILLS_DATA`
- **Types**: All TypeScript definitions available from `@/lib/types`

## Current State & Next Steps

### ✅ Completed

- All core website sections implemented and styled
- Responsive design tested across devices
- Dark/light mode fully functional
- SEO optimization with meta tags and sitemaps
- Performance optimized with Next.js best practices
- **Production deployment on Vercel**
- **Automated CI/CD pipeline with Vercel**
- **Environment configuration for production**
- **Complete Separation of Concerns architecture**
- **Professional project organization**
- **Comprehensive TypeScript implementation**

### 🔄 Potential Enhancements

- **Contact Form Integration**: Connect to email service (Formspree/EmailJS)
- **Blog Section**: Implement MDX-based blog with dynamic routing
- **Analytics Enhancement**: Add detailed visitor tracking
- **Custom Domain**: Configure custom domain if desired
- **Performance Monitoring**: Add Core Web Vitals tracking

### 🚀 Quick Start Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint checks

# Quick Git Workflow (using organized scripts)
./quick.sh "commit message"     # Quick git add, commit, push
./scripts/setup.sh              # Initial environment setup
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
✅ **Live on Vercel: https://deviscript-github-io.vercel.app**
✅ **Automated deployment pipeline**
✅ **Documentation complete**
✅ **Professional architecture implemented**
