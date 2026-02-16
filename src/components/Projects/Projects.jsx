import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png'; // Imported new image

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
      { threshold: 0.2 }
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        } ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 group relative cursor-pointer">
        <div className="relative overflow-hidden rounded-[20px] bg-gray-100 border border-gray-200 shadow-lg aspect-[4/3] md:aspect-[16/10]">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
          {/* Changed object-cover to object-contain and added optional padding if needed to simulate 'fit' */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700 ease-out rounded-[10px]"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        {/* Pill Tag */}
        <div className="px-5 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse"></span>
          <span className="text-xs font-bold text-black uppercase tracking-wider">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight uppercase">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed max-w-md">
          {project.description}
        </p>

        {/* Link */}
        <a
          href={project.liveDemo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-3 text-lg font-bold text-black hover:text-[#FF5400] transition-colors border-b border-black/20 pb-1 hover:border-[#FF5400]"
        >
          See Details
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "SafariHub",
      description: "Full-stack e-commerce solution for Sri Lanka Safari designed for seamless booking experiences.",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      liveDemo: "https://safarihub-main.vercel.app/",
      github: "https://github.com/movindu477/safarihub-main",
      status: "Completed",
      image: image1,
    },
    {
      id: 2,
      title: "SEDEK Caritas",
      description: "Productivity and management application built effectively for the SEDEK National Center.",
      tech: ["HTML", "JS", "CSS"],
      category: "Web App",
      liveDemo: "https://sedek-caritas-web-site.vercel.app/",
      github: "https://github.com/movindu477/SEDEK-CARITAS-WebSite",
      status: "Ongoing",
      image: image2,
    },
    {
      id: 3,
      title: "SFDS Church",
      description: "Comprehensive church website featuring real-time event updates and community management.",
      tech: ["HTML", "CSS", "JS"],
      category: "Website",
      liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",
      github: "https://github.com/movindu477/ST.-Francis-De-Sales-Church-Site",
      status: "Completed",
      image: image3,
    },
    {
      id: 4,
      title: "Moelyes Interface",
      description: "A visually stunning modern frontend interface focusing on responsive design and user interaction.",
      tech: ["React", "CSS"],
      category: "Interface",
      liveDemo: "",
      github: "https://github.com/movindu477/Moley-s-Frontend-Interface",
      status: "Completed",
      image: image4,
    },
    {
      id: 5,
      title: "PetMart Web",
      description: "A robust PetMart e-commerce platform offering a seamless shopping experience for pet lovers.",
      tech: ["Laravel", "PHP"],
      category: "E-Commerce",
      liveDemo: "https://web-production-de68aa.up.railway.app/",
      github: "https://github.com/movindu477/SSPLaravel",
      status: "Completed",
      image: image5,
    },
    {
      id: 6,
      title: "PetMart Mobile",
      description: "The mobile app companion for PetMart, built with Flutter for iOS and Android.",
      tech: ["Flutter", "Dart"],
      category: "Mobile App",
      liveDemo: "", // Add link if available
      github: "https://github.com/movindu477/PetMart-Mobile-App",
      status: "Completed",
      image: image6,
    },
  ];

  // Added "Mobile App" to categories
  const categories = ["All", "Full Stack", "Web App", "Website", "Mobile App", "Interface", "E-Commerce"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="w-full bg-white text-black relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter uppercase mb-4">
              Selected <br /> <span className="text-gray-200">Works</span>
            </h2>
          </div>

          {/* Minimalist Filter */}
          {/* Minimalist Filter Removed */}
        </div>

        {/* Projects List (Rows) */}
        <div className="flex flex-col gap-24 md:gap-32">
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-20 flex flex-col items-center justify-center text-gray-400">
            <Sparkles className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
