# Project Structure Documentation

## Overview

This document provides a comprehensive overview of the project structure for Brian Lockhart's professional portfolio website.

## 📁 Root Directory Structure

```
personal-site/
├── .github/                    # GitHub configuration
│   └── copilot-instructions.md # GitHub Copilot workspace instructions
├── .next/                      # Next.js build output (auto-generated)
├── app/                        # Next.js App Router directory
├── components/                 # React components
├── node_modules/               # Dependencies (auto-generated)
├── public/                     # Static assets
├── .gitignore                  # Git ignore rules
├── next-env.d.ts              # Next.js TypeScript declarations
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── project-structure.md       # This file
├── README.md                  # Project documentation
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 📱 App Directory (Next.js App Router)

```
app/
├── globals.css                # Global styles and Tailwind imports
├── layout.tsx                 # Root layout component
├── page.tsx                   # Homepage (main landing page)
├── robots.ts                  # SEO robots.txt generation
└── sitemap.ts                 # SEO sitemap generation
```

### Key App Files

- **`layout.tsx`**: Root layout with navigation, footer, theme provider, and analytics
- **`page.tsx`**: Main homepage combining all sections
- **`globals.css`**: Global styles, Tailwind imports, custom animations, and design system
- **`sitemap.ts`**: Dynamic sitemap generation for SEO
- **`robots.ts`**: Search engine crawling rules

## 🧩 Components Directory

```
components/
├── layout/                    # Layout-related components
│   ├── Footer.tsx            # Site footer with links and contact info
│   └── Navigation.tsx        # Main navigation with dark mode toggle
├── providers/                 # Context providers
│   └── theme-provider.tsx    # Dark/light theme context provider
└── sections/                  # Main page sections
    ├── About.tsx             # About me section with highlights
    ├── Contact.tsx           # Contact form and information
    ├── Education.tsx         # Education and certifications
    ├── Experience.tsx        # Work experience timeline
    ├── Hero.tsx             # Landing/hero section
    ├── Projects.tsx         # Portfolio projects showcase
    └── Skills.tsx           # Skills and technologies display
```

### Component Categories

#### Layout Components

- **Navigation**: Responsive navbar with smooth scrolling, social links, and theme toggle
- **Footer**: Site footer with quick links, featured projects, and contact information

#### Providers

- **ThemeProvider**: Wraps the app to provide dark/light mode functionality

#### Section Components

- **Hero**: Eye-catching introduction with animated elements and tech stack preview
- **About**: Personal story, professional background, and key highlights
- **Skills**: Interactive skills showcase with progress bars and categorized technologies
- **Experience**: Professional timeline with UNC Chapel Hill bootcamp and OuterWave ventures
- **Projects**: Portfolio showcase with project cards, technologies, and live links
- **Education**: Academic background, bootcamp details, and certifications
- **Contact**: Contact form, professional information, and availability status

## 🌐 Public Directory

```
public/
├── images/                    # Project and personal images
├── icon-192.png              # PWA icon (192x192)
├── icon-512.png              # PWA icon (512x512)
├── manifest.json             # PWA manifest
└── og-image.jpg              # Open Graph social media image
```

## ⚙️ Configuration Files

### Package.json

- **Dependencies**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, etc.
- **Scripts**: Development, build, start, and lint commands
- **Type**: Module with proper dependency management

### TypeScript Configuration (tsconfig.json)

- **Target**: ES5 with modern library support
- **Module Resolution**: Bundler for Next.js compatibility
- **Path Mapping**: Absolute imports with `@/` prefix
- **Strict Mode**: Enabled for type safety

### Tailwind Configuration (tailwind.config.js)

- **Content**: Scans all TypeScript/JSX files
- **Dark Mode**: Class-based dark mode
- **Extended Theme**: Custom colors, fonts, animations, and spacing
- **Plugins**: Typography plugin for rich text content

### Next.js Configuration (next.config.js)

- **MDX Support**: Configured for blog functionality
- **Image Domains**: Optimized image loading
- **React Strict Mode**: Enabled for development
- **SWC Minification**: Performance optimization

## 🎨 Design System

### Color Palette

```css
Primary: Blue (#0ea5e9) with full scale (50-900)
Gray: Neutral grays (50-950) for text and backgrounds
Success: Green shades for positive actions
Warning: Orange/red for errors and alerts
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono for code
- **Hierarchy**: h1-h6 with consistent sizing and weights

### Component Patterns

- **Cards**: Consistent shadow, border, and hover effects
- **Buttons**: Primary, secondary, and outline variants
- **Sections**: Standardized padding and max-width containers
- **Animations**: Entrance animations and hover micro-interactions

## 🔧 Key Features Implementation

### Responsive Design

- **Mobile-First**: Tailwind responsive prefixes (sm:, md:, lg:, xl:)
- **Breakpoints**: Optimized for mobile, tablet, and desktop
- **Navigation**: Hamburger menu for mobile, full nav for desktop

### Dark Mode

- **Implementation**: next-themes with class-based switching
- **Persistence**: User preference saved in localStorage
- **Smooth Transitions**: CSS transitions for seamless switching

### Animations

- **Library**: Framer Motion for React components
- **Patterns**: Entrance animations, scroll-triggered reveals, hover effects
- **Performance**: Hardware-accelerated transforms and opacity changes

### SEO Optimization

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Dynamic generation with proper priorities
- **Performance**: Image optimization and lazy loading

## 📊 Performance Optimizations

### Next.js Features

- **App Router**: Modern routing with React Server Components
- **Image Component**: Automatic optimization and lazy loading
- **Font Optimization**: Google Fonts with display swap
- **Static Generation**: Pre-rendered pages for fast loading

### Code Organization

- **Tree Shaking**: Only used components and utilities included
- **Dynamic Imports**: Lazy loading for heavy components
- **TypeScript**: Compile-time optimizations and error catching

## 🚀 Development Workflow

### Local Development

1. `npm run dev` - Start development server
2. Hot reload enabled for instant feedback
3. TypeScript checking in real-time
4. Tailwind JIT compilation for fast styling

### Build Process

1. `npm run build` - Production build with optimizations
2. Static analysis and type checking
3. Asset optimization and minification
4. Bundle analysis for performance insights

## 📈 Future Enhancement Areas

### Potential Additions

- **Blog System**: MDX-based blog with dynamic routing
- **CMS Integration**: Contentful or Sanity for content management
- **Analytics**: Detailed visitor tracking and insights
- **Contact Form**: Backend integration with email service
- **Portfolio Expansion**: More detailed project case studies

### Performance Monitoring

- **Core Web Vitals**: LCP, FID, CLS optimization
- **Lighthouse Scores**: Maintaining 90+ across all metrics
- **Bundle Analysis**: Regular monitoring of bundle size

## 🛠️ Maintenance Guidelines

### Code Standards

- **TypeScript**: Maintain strict type checking
- **ESLint**: Follow Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Git**: Conventional commit messages

### Updates

- **Dependencies**: Regular security and feature updates
- **Next.js**: Stay current with latest stable versions
- **Tailwind**: Utilize new utility classes and features

This structure provides a solid foundation for a professional portfolio website while maintaining scalability and performance.
