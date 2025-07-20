import React from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Profile Section */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      AH
                    </span>
                  </div>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Ali Hamza
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                  Computer Science Student at NUST
                </p>
                <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Building with code, dreaming in algorithms. Passionate about AI development and creating intelligent software systems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                >
                  Get In Touch
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-medium text-lg transition-all"
                >
                  View Projects
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/alihamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/alihamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:ali.hamza@example.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  aria-label="Resume"
                >
                  <FileText className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick About Section */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I'm a third-year Computer Science student at the National University of Sciences and Technology (NUST), 
                with a deep passion for artificial intelligence and software engineering. I love building innovative 
                solutions and exploring the intersection of technology and human potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Development</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Exploring machine learning, deep learning, and intelligent systems
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Software Engineering</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Building scalable applications with modern technologies
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Continuous Learning</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Always exploring new technologies and expanding my skillset
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Learn more about me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
