import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image6 from '../../assets/6.png';

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
      image: image1,
    },
    {
      id: 2,
      title: "SEDEK Caritas National Center Site Sri Lanka",
      description: "Productivity application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://sedek-caritas-web-site.vercel.app/",
      image: image2,
    },
    {
      id: 3,
      title: "ST. Francis De Sales Church Website",
      description: "Real-time weather application with beautiful UI, location-based forecasts, and interactive charts.",
      tech: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",
      image: image3,
    },
    {
      id: 4,
      title: "Nuwan Fernando PVT(Ltd) Company Website",
      description: "Personal finance management app with expense tracking, budgeting, and financial insights.",
      tech: ["JavaScript", "CSS"],
      liveDemo: "https://demo-finance.com",
      image: image6,
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slideIn group h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2 h-full">
                <ProjectCard project={project} />
              </div>
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
