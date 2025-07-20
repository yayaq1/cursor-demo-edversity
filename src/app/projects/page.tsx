"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category: string;
  date: string;
  featured?: boolean;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample projects - in a real app, this would come from a CMS or database
  const projects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Code Assistant",
      description: "An intelligent code completion and review tool powered by machine learning algorithms.",
      longDescription: "Built using transformer models and fine-tuned on code repositories to provide context-aware suggestions and automated code reviews.",
      techStack: ["Python", "TensorFlow", "OpenAI API", "React", "Node.js"],
      githubUrl: "https://github.com/alihamza/ai-code-assistant",
      liveUrl: "https://ai-code-assistant.vercel.app",
      category: "AI/ML",
      date: "Dec 2024",
      featured: true,
    },
    {
      id: "2",
      title: "Smart Campus Navigation",
      description: "A mobile app that uses computer vision and indoor positioning to help students navigate NUST campus.",
      longDescription: "Implements SLAM algorithms and AR overlay to provide real-time navigation assistance with crowd-sourced data integration.",
      techStack: ["React Native", "Python", "OpenCV", "ARCore", "Firebase"],
      githubUrl: "https://github.com/alihamza/campus-nav",
      category: "Mobile App",
      date: "Oct 2024",
      featured: true,
    },
    {
      id: "3",
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for analyzing student performance and predicting academic outcomes.",
      longDescription: "Uses ensemble learning methods to analyze multiple data sources and provide actionable insights for academic advisors.",
      techStack: ["React", "D3.js", "Python", "Scikit-learn", "PostgreSQL"],
      githubUrl: "https://github.com/alihamza/analytics-dashboard",
      liveUrl: "https://analytics-dashboard.vercel.app",
      category: "Web App",
      date: "Sep 2024",
    },
    {
      id: "4",
      title: "Natural Language Query Engine",
      description: "A system that allows users to query databases using natural language instead of SQL.",
      longDescription: "Leverages NLP and semantic parsing to translate natural language into optimized database queries with high accuracy.",
      techStack: ["Python", "NLTK", "spaCy", "PostgreSQL", "FastAPI"],
      githubUrl: "https://github.com/alihamza/nl-query-engine",
      category: "AI/ML",
      date: "Aug 2024",
    },
    {
      id: "5",
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      longDescription: "Implements smart contracts for tamper-proof voting with cryptographic verification and real-time result tracking.",
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/alihamza/blockchain-voting",
      category: "Blockchain",
      date: "Jul 2024",
    },
    {
      id: "6",
      title: "Real-time Collaboration Tool",
      description: "A collaborative workspace with real-time editing, video calls, and project management features.",
      longDescription: "Built with WebRTC for peer-to-peer communication and operational transformation for conflict-free collaborative editing.",
      techStack: ["Next.js", "Socket.io", "WebRTC", "MongoDB", "Redis"],
      githubUrl: "https://github.com/alihamza/collab-tool",
      liveUrl: "https://collab-tool.vercel.app",
      category: "Web App",
      date: "Jun 2024",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A collection of projects showcasing my journey in AI development, software engineering, and problem-solving.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <div className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 mr-4">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {selectedCategory === "All" && featuredProjects.length > 0 && (
          <section className="py-20 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle 
                title="Featured Projects" 
                subtitle="Highlighting some of my most impactful and innovative work"
                className="mb-16"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className={`py-20 ${selectedCategory === "All" ? "bg-slate-50 dark:bg-slate-900" : "bg-white dark:bg-slate-900/50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title={selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
              subtitle="Explore the full range of my work and technical explorations"
              className="mb-16"
            />
            
            {regularProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and explore new challenges in AI and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/alihamza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-all"
              >
                View GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 