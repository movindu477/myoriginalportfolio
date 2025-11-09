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
      className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/80 hover:from-gray-800/40 hover:to-black/60 backdrop-blur-sm transition-all duration-500 h-full"
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
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Project Number */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono text-gray-500">0{project.id}</div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>

        {/* GIF/Image Placeholder */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 aspect-video flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
          {project.gif ? (
            <img 
              src={project.gif} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-sm font-medium">Project Preview</p>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed font-light">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 border border-purple-500/30"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 min-w-[100px] border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;