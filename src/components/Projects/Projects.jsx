import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const backgroundRef = useRef(null);
  const navigate = useNavigate();

  // Mouse move effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      backgroundRef.current.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%,
          rgba(168, 85, 247, 0.1) 0%,
          rgba(147, 51, 234, 0.08) 15%,
          rgba(236, 72, 153, 0.05) 30%,
          transparent 60%
        ),
        linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewAllProjects = () => {
    setIsTransitioning(true);
    
    // Add fade out animation
    setTimeout(() => {
      navigate('/projects');
    }, 500);
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://demo-ecommerce.com",
      github: "https://github.com/username/ecommerce",
      gif: "/gifs/ecommerce.gif"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      liveDemo: "https://demo-taskapp.com",
      github: "https://github.com/username/taskapp",
      gif: "/gifs/taskapp.gif"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful UI, location-based forecasts, and interactive charts.",
      tech: ["React", "API Integration", "Chart.js", "Geolocation"],
      liveDemo: "https://demo-weather.com",
      github: "https://github.com/username/weather",
      gif: "/gifs/weather.gif"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social platform with real-time messaging, post sharing, and user engagement features.",
      tech: ["React", "Express", "Socket.io", "Redis"],
      liveDemo: "https://demo-social.com",
      github: "https://github.com/username/social",
      gif: "/gifs/social.gif"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Creative portfolio showcase with smooth animations, dark mode, and responsive design.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
      liveDemo: "https://demo-portfolio.com",
      github: "https://github.com/username/portfolio",
      gif: "/gifs/portfolio.gif"
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "Intelligent chat application powered by AI with natural language processing and smart responses.",
      tech: ["React", "OpenAI API", "Node.js", "WebSockets"],
      liveDemo: "https://demo-aichat.com",
      github: "https://github.com/username/aichat",
      gif: "/gifs/aichat.gif"
    }
  ];

  return (
    <section
      id="projects" // ✅ Make sure this ID is present
      ref={backgroundRef}
      className={`w-full min-h-screen bg-black text-white relative overflow-hidden transition-all duration-500 ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-pink-500 rounded-full animate-float animation-delay-1000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-float animation-delay-2000 opacity-50"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-3000 opacity-30"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium text-gray-300">MY WORK</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 sm:mb-12"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed sm:leading-loose font-light">
            Transforming ideas into <span className="text-purple-400 font-medium">digital experiences</span> through innovative solutions. 
            Each project represents a unique challenge solved with cutting-edge technology and creative design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {projects.slice(0, 6).map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slideIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllProjects}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-black to-black hover:from-purple-900/20 hover:to-pink-900/20 text-white font-semibold px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm"
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-[1px] rounded-2xl bg-black"></div>
            </div>

            {/* Button content */}
            <span className="relative z-10 text-sm sm:text-base lg:text-lg font-medium mr-3 sm:mr-4">
              Explore All Projects
            </span>
            
            {/* Animated arrow */}
            <div className="relative z-10 flex items-center">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
          </button>

          {/* Scroll indicator */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Scroll to discover more</span>
              <div className="w-4 h-4 border-r-2 border-b-2 border-gray-500 transform rotate-45 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Projects;