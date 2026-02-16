import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="group flex flex-col gap-4 cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm font-medium">No Preview</span>
          </div>
        )}

        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <a
            href={project.liveDemo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-16 h-16 rounded-full bg-white flex items-center justify-center transform transition-all duration-300 text-black shadow-xl hover:bg-[#FF5400] hover:text-white hover:scale-110 ${isActive ? 'scale-100' : 'scale-50 group-hover:scale-100'}`}
            onClick={(e) => e.stopPropagation()}
            title={project.liveDemo ? "View Live Site" : "View Code"}
          >
            <ArrowUpRight className="w-6 h-6" />
          </a>

          {/* Corner labels on hover */}
          <div className={`absolute bottom-6 left-6 text-xs text-white font-medium transition-transform duration-300 delay-75 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
            {project.tech ? project.tech[0] : 'Project'}
          </div>
          <div className={`absolute bottom-6 right-6 text-xs text-white font-medium transition-transform duration-300 delay-100 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
            {project.liveDemo ? 'Visit Site' : 'View Code'}
          </div>
        </div>
      </div>

      {/* Minimal Text Content Below */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-xl font-bold text-black group-hover:text-[#FF5400] transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">{project.status || "Development"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
