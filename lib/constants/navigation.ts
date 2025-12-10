/**
 * Navigation Constants
 * Centralized navigation configuration
 */

export const NAVIGATION_SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

export const NAVIGATION_ITEMS = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#contact",
    label: "Contact",
  },
] as const;

export const SCROLL_OFFSET = 100;
