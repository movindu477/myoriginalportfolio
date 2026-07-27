import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Code2, ShoppingBag } from 'lucide-react';

const getIcon = (category) => {
  switch (category) {
    case 'Full Stack': return <Code2 className="w-3.5 h-3.5" />;
    case 'Mobile App': return <Smartphone className="w-3.5 h-3.5" />;
    case 'E-Commerce': return <ShoppingBag className="w-3.5 h-3.5" />;
    default: return <Monitor className="w-3.5 h-3.5" />;
  }
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-xl flex flex-col justify-between transition-all duration-500 hover:border-[#FF5400]/50 hover:shadow-2xl hover:shadow-orange-500/10">
      {/* Image Box Container (100% Opacity, Proper Object Fit) */}
      <div className="relative w-full aspect-[16/11] bg-[#1c1c1f] p-4 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 text-xs font-medium">
            No Preview
          </div>
        )}

        {/* Category Badge */}
        {project.category && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded-full text-white/90">
            <span className="text-[#FF5400]">{getIcon(project.category)}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
          </div>
        )}
      </div>

      {/* Bottom Translucent Dark Overlay Banner */}
      <div className="p-6 bg-black/80 backdrop-blur-md border-t border-white/10 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-black text-white/40 group-hover:text-[#FF5400] transition-colors tracking-tighter">
              0{project.id}
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-xs text-white/60 font-medium leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5 max-w-[65%]">
            {project.tech && project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FF5400] hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-orange-500/20"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
