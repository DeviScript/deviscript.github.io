/**
 * DOM Utilities
 * Helper functions for DOM manipulation and navigation
 */

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to (without #)
 * @param offset - Optional offset from the top (useful for fixed headers)
 */
export const scrollToElement = (
  elementId: string,
  offset: number = 0
): void => {
  const element = document.querySelector(`#${elementId}`);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

/**
 * Checks if an element is in the viewport
 * @param element - The element to check
 * @param threshold - How much of the element should be visible (0-1)
 */
export const isElementInViewport = (
  element: Element,
  threshold: number = 0.1
): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible =
    rect.top + rect.height * threshold < windowHeight &&
    rect.bottom - rect.height * threshold > 0;
  const horizontalVisible =
    rect.left + rect.width * threshold < windowWidth &&
    rect.right - rect.width * threshold > 0;

  return verticalVisible && horizontalVisible;
};

/**
 * Gets the current scroll progress (0-1)
 */
export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit the rate at which a function can fire
 * @param func - The function to throttle
 * @param limit - The delay in milliseconds
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Copies text to clipboard
 * @param text - The text to copy
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand("copy");
      textArea.remove();
      return success;
    }
  } catch (error) {
    console.error("Failed to copy text:", error);
    return false;
  }
};

/**
 * Triggers a file download
 * @param url - The URL of the file to download
 * @param filename - The desired filename
 */
export const downloadFile = (url: string, filename: string): void => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Generates a unique ID
 * @param prefix - Optional prefix for the ID
 */
export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Checks if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Gets the device type based on screen size
 */
export const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

/**
 * Checks if the user is on a touch device
 */
export const isTouchDevice = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
