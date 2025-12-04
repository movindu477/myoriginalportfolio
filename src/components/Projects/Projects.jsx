import React, { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const backgroundRef = useRef(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

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

    },
    {
      id: 2,
      title: "SEDEK Caritas National Center Site Sri Lanka",
      description: "Productivity application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://sedek-caritas-web-site.vercel.app/",

    },
    {
      id: 3,
      title: "ST. Francis De Sales Church Website",
      description: "Real-time weather application with beautiful UI, location-based forecasts, and interactive charts.",
      tech: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://movindu477.github.io/ST.-Francis-De-Sales-Church-Site/",

    },
    {
      id: 4,
      title: "Moelys POS Frontend Interface",
      description: "Modern social platform with real-time messaging, post sharing, and user engagement features.",
      tech: ["Dart", "C++", "CMake", "Swift", "HTML"],
      liveDemo: "https://demo-social.com",

    },
    {
      id: 5,
      title: "Clay Art Portfolio Website",
      description: "Creative portfolio showcase with smooth animations, dark mode, and responsive design.",
      tech: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://clay-art-web-site-portfolio.vercel.app/",

    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "Intelligent chat application powered by AI with natural language processing and smart responses.",
      tech: ["React", "OpenAI API", "Node.js", "WebSockets"],
      liveDemo: "https://demo-aichat.com",

    },
    {
      id: 7,
      title: "PetMart (Ecommerce) Mobile App",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["Dart", "C++", "CMake", "Swift", "HTML"],
      liveDemo: "https://demo-ecommerce.com",

    },
    {
      id: 8,
      title: "Nuwan Fernando PVT(Ltd) Company Website",
      description: "Personal finance management app with expense tracking, budgeting, and financial insights.",
      tech: ["JavaScript", "CSS"],
      liveDemo: "https://demo-finance.com",

    },
    {
      id: 9,
      title: "AI Fashion Assistant Mobile App",
      description: "Recipe discovery platform with advanced filtering, meal planning, and shopping list features.",
      tech: ["Dart", "C++", "CMake", "Swift", "HTML"],
      liveDemo: "https://demo-recipe.com",

    },
    {
      id: 10,
      title: "Law Portfolio Website",
      description: "Workout tracking application with exercise library, progress monitoring, and social features.",
      tech: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://demo-fitness.com",

    },
    {
      id: 11,
      title: "Music Player",
      description: "Modern music streaming application with playlist management, audio visualization, and offline support.",
      tech: ["React", "Web Audio API", "IndexedDB", "PWA"],
      liveDemo: "https://demo-music.com",

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
                <ProjectCard project={project} onLiveDemoClick={() => setShowComingSoon(true)} />
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Modal */}
        {showComingSoon && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowComingSoon(false)}
          >
            <div 
              className="bg-black border border-white/20 rounded-2xl p-8 sm:p-10 max-w-md w-full mx-4 transform transition-all animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Coming Soon</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Some projects are currently ongoing and will be available soon. We're working hard to bring you the best experience.
                </p>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
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
