import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ project, showGithub = true }) => {
  return (
    <div
      className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm h-full flex flex-col cursor-pointer"
    >

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col">
        {/* Project Number and Status */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono text-white/50">0{project.id}</div>
          <div className="flex items-center gap-2">
            {project.status && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${project.status === 'Completed'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                {project.status}
              </span>
            )}
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden bg-white/5 aspect-video flex items-center justify-center border border-white/10">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-xs font-medium">Project Preview</p>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 sm:py-1 bg-white/5 text-white/70 text-xs font-medium rounded border border-white/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 sm:py-1 bg-white/5 text-white/70 text-xs font-medium rounded border border-white/10">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          {project.liveDemo && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.liveDemo, '_blank', 'noopener,noreferrer');
              }}
              className="flex-1 bg-white text-black hover:bg-white/90 text-xs sm:text-sm font-medium py-2.5 px-4 rounded-lg text-center transition-all duration-300 shadow-lg"
            >
              Live Demo
            </button>
          )}
          {showGithub && project.github && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.github, '_blank', 'noopener,noreferrer');
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
