import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const AllProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
          rgba(168, 85, 247, 0.2) 0%,
          rgba(147, 51, 234, 0.15) 20%,
          rgba(236, 72, 153, 0.1) 40%,
          transparent 70%
        ),
        linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #831843 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBackToHome = () => {
    setIsLoaded(false);
    setTimeout(() => {
      navigate('/');
      // Scroll to projects section on home page
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 500);
  };

  const projects = [
    // Same projects array as in Projects.jsx
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
    },
    // Additional projects for the all projects page
    {
      id: 7,
      title: "Finance Tracker",
      description: "Personal finance management app with expense tracking, budgeting, and financial insights.",
      tech: ["React", "Chart.js", "Firebase", "PWA"],
      liveDemo: "https://demo-finance.com",
      github: "https://github.com/username/finance",
      gif: "/gifs/finance.gif"
    },
    {
      id: 8,
      title: "Recipe Finder",
      description: "Recipe discovery platform with advanced filtering, meal planning, and shopping list features.",
      tech: ["React", "API Integration", "Redux", "Material-UI"],
      liveDemo: "https://demo-recipe.com",
      github: "https://github.com/username/recipe",
      gif: "/gifs/recipe.gif"
    },
    {
      id: 9,
      title: "Fitness App",
      description: "Workout tracking application with exercise library, progress monitoring, and social features.",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      liveDemo: "https://demo-fitness.com",
      github: "https://github.com/username/fitness",
      gif: "/gifs/fitness.gif"
    }
  ];

  return (
    <section
      ref={backgroundRef}
      className={`w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden transition-all duration-500 ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header with Back Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/10 backdrop-blur-sm transform hover:scale-105 text-sm sm:text-base"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-center">
            All Projects
          </h2>
          
          <div className="w-10 opacity-0 sm:opacity-100"></div> {/* Spacer for flex alignment */}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slideIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/10 backdrop-blur-sm transform hover:scale-105 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;