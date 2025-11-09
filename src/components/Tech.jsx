import React, { useState, useEffect, useRef } from 'react';

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  const technologies = [
    { 
      name: 'HTML', 
      color: '#E34F26',
      description: 'Markup Language'
    },
    { 
      name: 'CSS', 
      color: '#1572B6',
      description: 'Styling'
    },
    { 
      name: 'JavaScript', 
      color: '#F7DF1E',
      description: 'Programming Language'
    },
    { 
      name: 'React', 
      color: '#61DAFB',
      description: 'Frontend Library'
    },
    { 
      name: 'Next.js', 
      color: '#000000',
      description: 'React Framework'
    },
    { 
      name: 'Tailwind CSS', 
      color: '#06B6D4',
      description: 'CSS Framework'
    },
    { 
      name: 'C#', 
      color: '#239120',
      description: 'Backend Language'
    },
    { 
      name: 'WPF', 
      color: '#512BD4',
      description: 'Desktop Framework'
    },
    { 
      name: 'PHP', 
      color: '#777BB4',
      description: 'Server Language'
    },
    { 
      name: 'SQL', 
      color: '#4479A1',
      description: 'Database'
    },
    { 
      name: 'Git', 
      color: '#F05032',
      description: 'Version Control'
    },
    { 
      name: 'XAMPP', 
      color: '#FB7A24',
      description: 'Development Server'
    },
  ];

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
          rgba(236, 72, 153, 0.08) 15%,
          rgba(244, 63, 94, 0.05) 30%,
          transparent 60%
        ),
        linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const TechCard = ({ tech, index }) => {
    // Function to get the first letter of the technology name
    const getInitial = (name) => {
      return name.charAt(0);
    };

    return (
      <div 
        className={`group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 transform hover:scale-105 hover:border-white/20 hover:bg-white/10 ${
          isVisible ? 'animate-slideIn opacity-100' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          animationDelay: `${index * 100}ms`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ 
            background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon Container */}
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ 
              background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
              border: `1px solid ${tech.color}30`
            }}
          >
            {/* Technology Initial */}
            <span 
              className="text-2xl font-bold transition-all duration-500 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {getInitial(tech.name)}
            </span>
          </div>
          
          {/* Name */}
          <h3 
            className="text-lg font-bold mb-2 transition-colors duration-300"
            style={{ color: tech.color }}
          >
            {tech.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm font-medium">
            {tech.description}
          </p>
        </div>

        {/* Hover border effect */}
        <div 
          className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ 
            borderColor: tech.color,
            boxShadow: `0 0 20px ${tech.color}40`
          }}
        ></div>
      </div>
    );
  };

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background with mouse interaction */}
      <div ref={backgroundRef} className="absolute inset-0 transition-all duration-300">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#f43f5e'
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium text-gray-300">TECH STACK</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Technologies
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              I Use
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 sm:mb-12"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed sm:leading-loose font-light">
            A comprehensive toolkit of technologies and frameworks I work with to build 
            <span className="text-purple-400 font-medium"> modern</span>, 
            <span className="text-pink-400 font-medium"> scalable</span>, and 
            <span className="text-rose-400 font-medium"> efficient</span> applications.
          </p>
        </div>

        {/* Technologies Grid - Glassy Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 max-w-7xl">
            {technologies.map((tech, index) => (
              <TechCard 
                key={tech.name} 
                tech={tech} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`text-center mt-20 lg:mt-24 transition-all duration-1000 ${
          isVisible ? 'animate-slideIn opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1200ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                {technologies.length}
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="p-6 rounded-2xl border border-pink-500/20 bg-pink-500/5 backdrop-blur-xl">
              <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">
                1+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 backdrop-blur-xl">
              <div className="text-2xl sm:text-3xl font-bold text-rose-400 mb-2">
                10+
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;