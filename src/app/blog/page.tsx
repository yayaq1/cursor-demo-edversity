import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

// Sample blog posts - in a real app, these would come from a CMS or MDX files
const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is reshaping the way we write, test, and deploy code.",
    content: "As a computer science student passionate about AI, I've been fascinated by the rapid evolution of AI-powered development tools...",
    date: "2024-12-15",
    readTime: "5 min read",
    tags: ["AI", "Software Development", "Future Tech"],
    featured: true,
  },
  {
    id: "2",
    title: "My Journey Learning Machine Learning at NUST",
    excerpt: "Reflecting on the challenges and breakthroughs in my AI education journey.",
    content: "Starting my machine learning journey as a third-year CS student has been both exciting and challenging...",
    date: "2024-12-01",
    readTime: "7 min read",
    tags: ["Education", "Machine Learning", "Personal"],
    featured: false,
  },
  {
    id: "3",
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A deep dive into modern web development practices and the power of React Server Components.",
    content: "Next.js has revolutionized how we think about full-stack web development...",
    date: "2024-11-20",
    readTime: "6 min read",
    tags: ["Web Development", "Next.js", "React"],
    featured: false,
  },
  {
    id: "4",
    title: "The Ethics of AI: A Student's Perspective",
    excerpt: "Discussing the moral implications of artificial intelligence from a young developer's viewpoint.",
    content: "As someone entering the field of AI development, I often find myself grappling with the ethical implications...",
    date: "2024-11-05",
    readTime: "8 min read",
    tags: ["AI Ethics", "Philosophy", "Technology"],
    featured: true,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Thoughts on AI, software development, and the intersection of technology with human potential.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle 
                title="Featured Articles" 
                subtitle="Highlighting some of my most popular and impactful posts"
                className="mb-16"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Featured Badge */}
                    <div className="p-6 pb-0">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                        Featured
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs border border-slate-200 dark:border-slate-600"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="All Articles" 
              subtitle="Explore my complete collection of thoughts and tutorials"
              className="mb-16"
            />
            
            <div className="space-y-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get notified when I publish new articles about AI, development, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-white focus:border-white transition-colors"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Coming Soon Note */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
                🚧 Blog Under Construction
              </h3>
              <p className="text-blue-800 dark:text-blue-400 mb-4">
                I'm currently working on setting up my blog with proper MDX integration and a content management system. 
                The posts above are sample content to demonstrate the design and functionality.
              </p>
              <p className="text-blue-700 dark:text-blue-500 text-sm">
                Stay tuned for real articles coming soon!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 