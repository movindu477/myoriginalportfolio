import React, { useRef, useEffect, useState } from 'react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/80 hover:from-gray-800/40 hover:to-black/60 backdrop-blur-sm transition-all duration-500 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.1) 20%, transparent 50%), linear-gradient(to bottom right, rgba(30, 30, 30, 0.8), rgba(0, 0, 0, 0.9))`
          : 'linear-gradient(to bottom right, rgba(30, 30, 30, 0.6), rgba(0, 0, 0, 0.8))'
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-cyan-500/30 bg-clip-border bg-origin-border opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
        <div className="rounded-3xl bg-black absolute inset-[2px]"></div>
      </div>

      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col">
        {/* Project Number */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono text-gray-500">0{project.id}</div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>

        {/* Project Image */}
        <div className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 aspect-video flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-xs font-medium">Project Preview</p>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (project.liveDemo) {
                window.open(project.liveDemo, '_blank', 'noopener,noreferrer');
              }
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 border border-purple-500/30"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
