import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';

const Projects = () => {
  const backgroundRef = useRef(null);

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

  const projects = [
    {
      id: 1,
      title: "SafariHub (Sri Lanka Safari All in One Website)",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "JavaScript"],
      liveDemo: "https://safarihub-main.vercel.app/",
      github: "https://github.com/movindu477/safarihub-main",
      status: "Ongoing",
      image: image1,
    },
    {
      id: 2,
      title: "SEDEK Caritas National Center Site Sri Lanka",
      description: "Productivity application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://sedek-caritas-web-site.vercel.app/",
      github: "https://github.com/movindu477/SEDEK-CARITAS-WebSite",
      status: "Ongoing",
      image: image2,
    },
    {
      id: 3,
      title: "ST. Francis De Sales Church Website",
      description: "Real-time weather application with beautiful UI, location-based forecasts, and interactive charts.",
      tech: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",
      github: "https://github.com/movindu477/ST.-Francis-De-Sales-Church-Site",
      status: "Completed",
      image: image3,
    },
    {
      id: 4,
      title: "Moelyes Frontend Interface",
      description: "Modern frontend interface with responsive design, interactive components, and seamless user experience.",
      tech: ["React", "JavaScript", "CSS"],
      liveDemo: "",
      github: "https://github.com/movindu477/Moley-s-Frontend-Interface",
      status: "Completed",
      image: image4,
    },
  ];

  return (
    <section
      id="projects" // ✅ Make sure this ID is present
      ref={backgroundRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-20"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-2000 opacity-25"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-3000 opacity-15"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-white/70">MY WORK</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 md:mb-6">
            <span className="text-white">
              Creative
            </span>
            <br />
            <span className="text-purple-400">
              Projects
            </span>
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"></div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light">
            Transforming ideas into <span className="text-purple-400 font-medium">digital experiences</span> through innovative solutions.
            Each project represents a unique challenge solved with cutting-edge technology and creative design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slideIn h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
