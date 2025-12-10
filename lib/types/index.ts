/**
 * Global Type Definitions
 * Centralized type system for the entire application
 */

// Form Data Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormSubmitStatus = "idle" | "loading" | "success" | "error";

// Navigation Types
export interface NavigationItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

// Contact Information Types
export interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  color: string;
  target?: "_blank" | "_self";
}

// Skills Types
export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "languages";
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

// Experience Types
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
  logo?: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "api";
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  description?: string;
  achievements?: string[];
  logo?: string;
}

// Social Media Types
export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// Animation Types
export interface MotionVariants {
  [key: string]: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

// Configuration Types
export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  author: string;
  email: string;
  github: string;
  linkedin: string;
  outerwave: string;
}

export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  vercelAnalyticsId?: string;
}

export interface ContactConfig {
  formspreeEndpoint?: string;
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
}

export interface FeatureFlags {
  enableAnalytics: boolean;
  enableContactForm: boolean;
  enableBlog: boolean;
  enableCMS: boolean;
}

// Environment Types
export interface Environment {
  isDev: boolean;
  isProd: boolean;
  isTest: boolean;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
}

// Component Props Types
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

// Utility Types
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type OptionalProps<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
