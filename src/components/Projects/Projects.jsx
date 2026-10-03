import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Code2, ShoppingBag } from 'lucide-react';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image7 from '../../assets/7.png';

const projects = [
  {
    id: 1,
    index: "01",
    title: "APIIT Graduation Website",
    description: "Official graduation registration and ceremony management portal for APIIT Sri Lanka — Class of 2026 (Updatable). Built with React. Covers student registration, guest invitations, kit collection, payments, and alumni onboarding.",
    category: "Website",
    liveDemo: "https://graduation.apiit.lk/",
    github: "",
    image: image7,
  },
  {
    id: 2,
    index: "02",
    title: "SFDS Church",
    description: "Modern community-driven platform for St. Francis De Sales Church. Built with engagement in mind, featuring live events, donations, and media galleries.",
    category: "Website",
    liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",
    github: "https://github.com/movindu477/ST.-Francis-De-Sales-Church-Site",
    image: image3,
  },
  {
    id: 3,
    index: "03",
    title: "Moley UI",
    description: "Experimental design system and interface playground. Explores advanced animations, glassmorphism principles, and fluid modern layouts.",
    category: "Interface",
    liveDemo: "",
    github: "https://github.com/movindu477/Moley-s-Frontend-Interface",
    image: image4,
  },
];

const getIcon = (category) => {
  switch (category) {
    case 'Full Stack': return <Code2 className="w-3.5 h-3.5" />;
    case 'Mobile App': return <Smartphone className="w-3.5 h-3.5" />;
    case 'E-Commerce': return <ShoppingBag className="w-3.5 h-3.5" />;
    default: return <Monitor className="w-3.5 h-3.5" />;
  }
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full bg-[#0d0d0d] text-white relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FF5400]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FF5400]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-[#FF5400]" />
              <span className="text-[#FF5400] font-bold text-xs uppercase tracking-[0.3em]">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-none">
              Selected <span className="text-white/30 italic font-normal">Works</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base max-w-md font-medium leading-relaxed">
            A showcase of my recent full-stack web solutions, mobile applications, and interface developments.
          </p>
        </div>

        {/* Projects Grid (Responsive 3-Column Layout using theme color #FF5400) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-xl flex flex-col justify-between transition-all duration-500 hover:border-[#FF5400]/50 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Image Box Container (100% Opacity, Proper Object Fit) */}
              <div className="relative w-full aspect-[16/11] bg-[#1c1c1f] p-4 sm:p-5 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out opacity-100"
                />

                {/* Category Badge (Top Right) */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded-full text-white/90">
                  <span className="text-[#FF5400]">{getIcon(project.category)}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
                </div>
              </div>

              {/* Bottom Translucent Dark Overlay Banner */}
              <div className="p-6 bg-black/80 backdrop-blur-md border-t border-white/10 flex flex-col justify-between flex-1">
                <div>
                  {/* Top Row: Big Number + Title */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-black text-white/40 group-hover:text-[#FF5400] transition-colors tracking-tighter">
                      {project.index}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-white/60 font-medium leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Row: GitHub & Live Demo Action Buttons */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-end gap-3">
                  {/* Action Buttons */}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
