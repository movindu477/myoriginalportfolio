import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Github, Monitor, Smartphone, Code2, ShoppingBag } from 'lucide-react';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';

const ProjectRow = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const getIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <Code2 className="w-4 h-4" />;
      case 'Mobile App': return <Smartphone className="w-4 h-4" />;
      case 'E-Commerce': return <ShoppingBag className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div
      ref={rowRef}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 w-full transition-all duration-1000 transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} 
        ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-[55%] group relative">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center p-4 sm:p-8">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out drop-shadow-2xl"
          />

          {/* Overlay Details (Hidden by default, shown on hover/desktop) */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 z-20">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#FF5400] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full lg:w-[45%] flex flex-col ${index % 2 === 1 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"} items-start`}>
        {/* Project Index */}
        <span className="text-white/10 font-black text-5xl sm:text-8xl mb-[-1rem] sm:mb-[-1.5rem] select-none italic tracking-tighter transition-colors duration-500 group-hover:text-[#FF5400]/10">
          0{index + 1}
        </span>

        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full">
          <div className="text-[#FF5400]">{getIcon(project.category)}</div>
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter leading-none group-hover:text-[#FF5400] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-md font-medium">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 mb-10 ${index % 2 === 1 ? "lg:justify-end" : "justify-start"}`}>
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[9px] font-bold text-white/20 tracking-wider">
              {t}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="flex items-center gap-4">
          <a
            href={project.liveDemo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#FF5400] hover:text-white transition-all duration-500 shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Case Study
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const projects = [
    {
      id: 1,
      title: "SafariHub",
      description: "A premium tourism booking engine tailored for Sri Lanka. Features seamless scheduling, secure payments, and a dynamic real-time inventory management backend.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Redux"],
      category: "Full Stack",
      liveDemo: "https://safarihub-main.vercel.app/",
      github: "https://github.com/movindu477/safarihub-main",
      image: image1,
    },
    {
      id: 2,
      title: "SEDEK Caritas",
      description: "An organizational management system designed for SEDEK National Center. Focused on optimizing resource allocation and project tracking across multiple regions.",
      tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      category: "Web App",
      liveDemo: "https://sedek-caritas-web-site.vercel.app/",
      github: "https://github.com/movindu477/SEDEK-CARITAS-WebSite",
      image: image2,
    },
    {
      id: 3,
      title: "SFDS Church",
      description: "Modern community-driven platform for St. Francis De Sales Church. Built with engagement in mind, featuring live events, donations, and media galleries.",
      tech: ["Vite", "JS", "Tailwind", "Framer"],
      category: "Website",
      liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",
      github: "https://github.com/movindu477/ST.-Francis-De-Sales-Church-Site",
      image: image3,
    },
    {
      id: 4,
      title: "Moley UI",
      description: "Experimental design system and interface playground. Explores advanced animations, glassmorphism principles, and fluid modern layouts.",
      tech: ["React", "CSS Modules", "GSAP"],
      category: "Interface",
      liveDemo: "",
      github: "https://github.com/movindu477/Moley-s-Frontend-Interface",
      image: image4,
    },
    {
      id: 5,
      title: "PetMart Web",
      description: "Scalable e-commerce infrastructure for pet supplies. Implements advanced filtering, cart synchronization, and administrative dashboarding with Laravel.",
      tech: ["Laravel", "PHP", "MySQL", "Blade"],
      category: "E-Commerce",
      liveDemo: "https://web-production-de68aa.up.railway.app/",
      github: "https://github.com/movindu477/SSPLaravel",
      image: image5,
    },
    {
      id: 6,
      title: "PetMart Mobile",
      description: "Full-feature mobile commerce application. Leverages Flutter's native performance to provide a smooth, fast, and secure user experience forpet owners.",
      tech: ["Flutter", "Dart", "Provider", "Firebase"],
      category: "Mobile App",
      liveDemo: "",
      github: "https://github.com/movindu477/PetMart-Mobile-App",
      image: image6,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full bg-[#0d0d0d] text-white relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-blue-500 opacity-[0.02] blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[#FF5400] opacity-[0.02] blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Section */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 sm:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 sm:w-10 bg-[#FF5400]"></div>
              <span className="text-[#FF5400] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[1.1] sm:leading-none">
              Selected <span className="text-white/20 italic">Works</span>.
            </h2>
          </div>
        </div>

        {/* Projects List (Rows) */}
        <div className="flex flex-col gap-32 sm:gap-48 overflow-visible">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
