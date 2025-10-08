/**
 * Environment Configuration
 * Centralizes all environment variable access and validation
 */

// Site Configuration
export const siteConfig = {
  name:
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "Brian Lockhart - Full Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Professional portfolio of Brian Lockhart - Full Stack Developer and Entrepreneur",
  author: "Brian Lockhart",
  email: "DeviScript@gmail.com",
  github: "https://github.com/DeviScript",
  linkedin: "https://www.linkedin.com/in/brianlockhart-deviscript/",
  outerwave: "https://www.outerwaveapp.com/",
};

// Analytics Configuration
export const analytics = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
};

// Contact Form Configuration
export const contactConfig = {
  formspreeEndpoint: process.env.FORMSPREE_ENDPOINT,
  emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
  emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
  emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
};

// Development Configuration
export const devConfig = {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
};

// Feature Flags
export const features = {
  enableAnalytics: Boolean(
    analytics.googleAnalyticsId || analytics.vercelAnalyticsId
  ),
  enableContactForm: Boolean(
    contactConfig.formspreeEndpoint || contactConfig.emailjsServiceId
  ),
  enableBlog: false, // Set to true when blog is implemented
  enableCMS: false, // Set to true when CMS is implemented
};

// Validation helper
export const validateEnvVars = () => {
  const requiredVars = ["NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_SITE_NAME"];

  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    console.warn("Missing environment variables:", missing);
    if (devConfig.isProd) {
      throw new Error(
        `Missing required environment variables: ${missing.join(", ")}`
      );
    }
  }
};

// Social Media Links
export const socialLinks = {
  github: {
    url: siteConfig.github,
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "DeviScript",
    label: "GitHub Profile",
  },
  linkedin: {
    url: siteConfig.linkedin,
    username:
      process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || "brianlockhart-deviscript",
    label: "LinkedIn Profile",
  },
  email: {
    url: `mailto:${siteConfig.email}`,
    address: process.env.NEXT_PUBLIC_EMAIL || siteConfig.email,
    label: "Email Contact",
  },
  outerwave: {
    url: siteConfig.outerwave,
    label: "OuterWave App",
  },
};

// SEO Configuration
export const seoConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: "@DeviScript",
    site: "@DeviScript",
    cardType: "summary_large_image",
  },
};

export default {
  siteConfig,
  analytics,
  contactConfig,
  devConfig,
  features,
  socialLinks,
  seoConfig,
  validateEnvVars,
};
