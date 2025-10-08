/**
 * Custom Hook for Smooth Scrolling Navigation
 * Separates navigation logic from UI components
 */

import { useCallback, useEffect, useState } from "react";
import { scrollToElement, debounce } from "@/lib/utils/dom";

export interface UseScrollNavigationOptions {
  offset?: number;
  debounceDelay?: number;
  updateActiveSection?: boolean;
}

export interface UseScrollNavigationReturn {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isScrolling: boolean;
}

export const useScrollNavigation = (
  sections: readonly string[] = [],
  options: UseScrollNavigationOptions = {}
): UseScrollNavigationReturn => {
  const {
    offset = 100,
    debounceDelay = 100,
    updateActiveSection = true,
  } = options;

  const [activeSection, setActiveSection] = useState<string>(sections[0] || "");
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll to a specific section
  const scrollToSection = useCallback(
    (sectionId: string) => {
      setIsScrolling(true);
      scrollToElement(sectionId, offset);

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 1000);
    },
    [offset]
  );

  // Update active section based on scroll position
  const updateActiveOnScroll = useCallback(() => {
    if (!updateActiveSection || isScrolling) return;

    const scrollY = window.pageYOffset;
    let currentSection = sections[0] || "";

    for (const sectionId of sections) {
      const element = document.querySelector(`#${sectionId}`);
      if (!element) continue;

      const { top } = element.getBoundingClientRect();
      const elementTop = top + scrollY;

      if (scrollY >= elementTop - offset) {
        currentSection = sectionId;
      }
    }

    setActiveSection(currentSection);
  }, [sections, offset, updateActiveSection, isScrolling]);

  // Debounced scroll handler
  const debouncedScrollHandler = useCallback(
    debounce(updateActiveOnScroll, debounceDelay),
    [updateActiveOnScroll, debounceDelay]
  );

  // Set up scroll listener
  useEffect(() => {
    if (!updateActiveSection) return;

    window.addEventListener("scroll", debouncedScrollHandler);

    // Initial check
    updateActiveOnScroll();

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debouncedScrollHandler, updateActiveOnScroll, updateActiveSection]);

  return {
    activeSection,
    scrollToSection,
    isScrolling,
  };
};
