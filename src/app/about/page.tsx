import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Code, Brain, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++"] },
    { category: "AI/ML Technologies", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"] },
    { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "Express", "MongoDB"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Vercel", "VS Code"] },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Started Computer Science at NUST",
      description: "Began my journey at the National University of Sciences and Technology, focusing on computer science fundamentals and programming."
    },
    {
      year: "2023",
      title: "Discovered AI Passion",
      description: "Dove deep into artificial intelligence and machine learning, starting with Python and various ML frameworks."
    },
    {
      year: "2024",
      title: "Full-Stack Development",
      description: "Expanded skills to include modern web development, building end-to-end applications and exploring cloud technologies."
    },
    {
      year: "Present",
      title: "AI-Focused Projects",
      description: "Currently working on innovative AI projects and contributing to open-source communities while completing my degree."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ali Hamza</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A passionate computer science student driven by curiosity and a love for building intelligent systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      AH
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="h-5 w-5" />
                  <span>Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Calendar className="h-5 w-5" />
                  <span>Third-year Computer Science Student</span>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I'm currently pursuing my Bachelor's degree in Computer Science at the prestigious 
                    National University of Sciences and Technology (NUST). My journey in technology 
                    began with a fascination for how computers can simulate human intelligence and solve 
                    complex problems.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    What drives me is the endless possibility of creating intelligent systems that can 
                    make a meaningful impact on people's lives. Whether it's developing machine learning 
                    models, building web applications, or exploring the latest in AI research, I'm 
                    always eager to learn and experiment with new technologies.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    When I'm not coding, you'll find me reading about the latest AI breakthroughs, 
                    contributing to open-source projects, or mentoring fellow students who share 
                    the same passion for technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Technical Skills" 
              subtitle="Technologies and tools I work with to bring ideas to life"
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    {index === 0 && <Code className="h-5 w-5 text-blue-600" />}
                    {index === 1 && <Brain className="h-5 w-5 text-purple-600" />}
                    {index === 2 && <Zap className="h-5 w-5 text-green-600" />}
                    {index === 3 && <Zap className="h-5 w-5 text-orange-600" />}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="My Journey" 
              subtitle="Key milestones in my academic and technical growth"
              className="mb-16"
            />
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and discuss new opportunities in AI and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-medium transition-all"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 