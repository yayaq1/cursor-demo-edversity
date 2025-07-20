import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      value: "ali.hamza@example.com",
      href: "mailto:ali.hamza@example.com",
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call or WhatsApp",
      value: "+92 300 1234567",
      href: "tel:+923001234567",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Usually responds within",
      value: "24 hours",
      href: "#",
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/alihamza",
      icon: Github,
      description: "Check out my code and contributions",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/alihamza",
      icon: Linkedin,
      description: "Connect with me professionally",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/alihamza",
      icon: Twitter,
      description: "Follow for tech updates",
      color: "hover:text-sky-500 dark:hover:text-sky-400",
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
                Let's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Connect</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Get In Touch" 
              subtitle="Choose your preferred way to reach out"
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      {method.description}
                    </p>
                    {method.href !== "#" ? (
                      <a
                        href={method.href}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        {method.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Send a Message" 
              subtitle="Fill out the form below and I'll get back to you as soon as possible"
              className="mb-12"
            />
            
            <ContactForm />
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Follow Me" 
              subtitle="Stay connected and follow my journey in tech"
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className={`h-8 w-8 text-slate-500 dark:text-slate-400 ${social.color} transition-colors`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {social.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {social.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Quick answers to common questions"
              className="mb-16"
            />
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  What type of projects are you interested in?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I'm particularly passionate about AI/ML projects, full-stack web applications, and innovative software solutions. 
                  I'm always open to learning new technologies and taking on challenging problems.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Are you available for internships or part-time work?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! As a third-year CS student, I'm actively looking for internship opportunities and part-time work 
                  that align with my studies and interests in AI and software development.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Do you offer mentoring or tutoring?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Absolutely! I enjoy helping fellow students with programming, AI concepts, and project development. 
                  Feel free to reach out if you need guidance or want to discuss tech topics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start a Conversation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you have a project idea, want to collaborate, or just want to say hi, I'd love to hear from you.
            </p>
            <Link
              href="mailto:ali.hamza@example.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-all"
            >
              <Mail className="h-5 w-5" />
              Send Email Directly
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 