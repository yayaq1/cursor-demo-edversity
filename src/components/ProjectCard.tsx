import React from "react";
import Link from "next/link";
import { Github, ExternalLink, Calendar } from "lucide-react";

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  longDescription,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  category,
  date,
  featured = false,
}) => {
  return (
    <div className={`group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-300 ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
            Featured
          </span>
        </div>
      )}

      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-slate-300 dark:text-slate-500">
              {title.slice(0, 2).toUpperCase()}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                {category}
              </span>
              <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="h-3 w-3" />
                {date}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {longDescription && (
          <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed mb-4">
            {longDescription}
          </p>
        )}

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {!githubUrl && !liveUrl && (
            <span className="text-slate-400 dark:text-slate-500 text-xs">
              Private Repository
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 