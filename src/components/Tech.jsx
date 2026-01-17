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
    { 
      name: 'Flutter', 
      color: '#02569B',
      description: 'Mobile Framework'
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Also set visible on mount as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const TechCard = ({ tech, index }) => {
    return (
      <div 
        className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms`
        }}
      >
        {/* Top Section - Tags */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
          <div className="px-2 sm:px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium rounded">
            {tech.name}
          </div>
          <div className="px-2 sm:px-3 py-1 bg-white/5 text-white/70 text-xs font-medium rounded border border-white/10">
            {tech.description}
          </div>
        </div>

        {/* Main Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
          {tech.name}
        </h3>

        {/* Description with Purple Accent Line */}
        <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
          {/* Purple vertical accent line */}
          <div className="w-0.5 sm:w-1 bg-purple-500 flex-shrink-0"></div>
          {/* Description text */}
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
            {tech.description} technology for building modern applications and solutions.
          </p>
        </div>

        {/* Bottom Section - Technology Info */}
        <div className="pt-3 sm:pt-4 border-t border-white/10">
          <div className="text-white text-xs sm:text-sm font-medium">
            {tech.name}
          </div>
          <div className="text-white/50 text-xs font-light mt-1">
            Technology Stack
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden border-t border-white/10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
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
            className="absolute w-1 h-1 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              background: '#a855f7'
            }}
          />
        ))}
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
            <span className="text-xs sm:text-sm font-medium text-white/70">TECH STACK</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 md:mb-6">
            <span className="text-white">
              Technologies
            </span>
            <br />
            <span className="text-purple-400">
              I Use
            </span>
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"></div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit of technologies and frameworks I work with to build 
            <span className="text-purple-400 font-medium"> modern</span>, 
            <span className="text-purple-400 font-medium"> scalable</span>, and 
            <span className="text-purple-400 font-medium"> efficient</span> applications.
          </p>
        </div>

        {/* Technologies Grid - Modern Card Design */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full">
            {technologies.map((tech, index) => (
              <TechCard 
                key={tech.name} 
                tech={tech} 
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tech;