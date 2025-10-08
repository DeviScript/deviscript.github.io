"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Brian<span className="text-primary-600">.</span>dev
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer & Entrepreneur passionate about creating
              innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DeviScript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/brianlockhart-deviscript/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:DeviScript@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase()}`
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.outerwaveapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  OuterWave App
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://outerwavelogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  OuterWave Logistics
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} Brian Lockhart. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
