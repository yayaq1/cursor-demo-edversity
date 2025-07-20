"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alihamza",
      icon: Github,
      hoverColor: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/alihamza",
      icon: Linkedin,
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:ali.hamza@example.com",
      icon: Mail,
      hoverColor: "hover:text-red-500 dark:hover:text-red-400",
    },
    {
      name: "Resume",
      href: "/resume.pdf",
      icon: FileText,
      hoverColor: "hover:text-green-600 dark:hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200/20 dark:bg-slate-900/80 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Ali Hamza
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Computer Science student at NUST, passionate about AI development and building intelligent software systems.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-500 dark:text-slate-400 ${link.hoverColor} transition-colors`}
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                Open to collaboration and new opportunities
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Let's connect
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-200/20 dark:border-slate-700/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {currentYear} Ali Hamza. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 