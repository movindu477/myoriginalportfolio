import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Database,
  Terminal,
  Server,
  Cpu,
  Globe,
  Smartphone,
  Layers,
  Layout,
  GitBranch,
  Cloud,
  Box
} from 'lucide-react';

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: <Layout className="w-6 h-6" />,
      gradient: "from-pink-500/20 via-purple-500/20 to-indigo-500/20",
      skills: [
        { name: "React", description: "Frontend Library", color: "#61DAFB", icon: <Code2 className="w-4 h-4" /> },
        { name: "TypeScript", description: "Type Safety", color: "#3178C6", icon: <Terminal className="w-4 h-4" /> },
        { name: "JavaScript (ES6+)", description: "Core Language", color: "#F7DF1E", icon: <Code2 className="w-4 h-4" /> },
        { name: "HTML5", description: "Structure", color: "#E34F26", icon: <Globe className="w-4 h-4" /> },
        { name: "CSS3", description: "Styling", color: "#1572B6", icon: <Layers className="w-4 h-4" /> },
        { name: "Responsive Design", description: "Layout Strategy", color: "#38B2AC", icon: <Layout className="w-4 h-4" /> },
        { name: "Flutter (Dart)", description: "Mobile Frontend", color: "#02569B", icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      skills: [
        { name: "Laravel 12", description: "PHP Framework", color: "#FF2D20", icon: <Box className="w-4 h-4" /> },
        { name: "PHP", description: "Server Scripting", color: "#777BB4", icon: <Code2 className="w-4 h-4" /> },
        { name: "REST API", description: "Architecture", color: "#009688", icon: <Globe className="w-4 h-4" /> },
        { name: "Auth", description: "Security", color: "#4CAF50", icon: <Box className="w-4 h-4" /> },
        { name: "API Integration", description: "Connectivity", color: "#FF9800", icon: <Cloud className="w-4 h-4" /> }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
      skills: [
        { name: "SQL Server", description: "Enterprise RDBMS", color: "#CC2927", icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", description: "Open Source RDBMS", color: "#4479A1", icon: <Database className="w-4 h-4" /> },
        { name: "Sqflite", description: "Offline Storage", color: "#003B57", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      title: "Tools & Skills",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      skills: [
        { name: "Git & GitHub", description: "Version Control", color: "#F05032", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Postman", description: "API Testing", color: "#FF6C37", icon: <Terminal className="w-4 h-4" /> },
        { name: "Railway", description: "Deployment", color: "#0B0D0E", icon: <Cloud className="w-4 h-4" /> },
        { name: "Mobile Dev", description: "Cross-platform", color: "#673AB7", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Full-Stack", description: "End-to-End", color: "#3F51B5", icon: <Layers className="w-4 h-4" /> },
        { name: "UI/UX", description: "Implementation", color: "#E91E63", icon: <Layout className="w-4 h-4" /> }
      ]
    }
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
          rgba(168, 85, 247, 0.08) 0%,
          rgba(236, 72, 153, 0.05) 15%,
          rgba(244, 63, 94, 0.03) 30%,
          transparent 60%
        ),
        linear-gradient(135deg, #050505 0%, #0a0a0a 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const CategoryCard = ({ category, index }) => {
    return (
      <div
        className={`group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Dynamic Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

        {/* Category Header */}
        <div className="relative flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
              {category.title}
            </h3>
            <div className="h-0.5 w-12 bg-white/10 mt-2 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-transparent transition-all duration-700"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="group/skill flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 hover:translate-x-1"
            >
              {/* Skill Icon/Color Indicator */}
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/5 shadow-inner group-hover/skill:scale-110 transition-transform duration-300"
                style={{ color: skill.color }}
              >
                {skill.icon || <div className="w-2 h-2 rounded-full bg-current" />}
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white/90 group-hover/skill:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40 group-hover/skill:text-purple-400/80 transition-colors font-medium">
                  {skill.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="w-full min-h-screen bg-[#050505] text-white relative overflow-hidden border-t border-white/5 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Background Ambience */}
      <div ref={backgroundRef} className="absolute inset-0 transition-opacity duration-700 opacity-60"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-widest">Tech Stack</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 pb-2">
              Technologies
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/60 mt-2">
              I Work With
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting digital experiences using a powerful suite of
            <span className="text-white/90 font-medium"> modern technologies </span>
            and
            <span className="text-white/90 font-medium"> industry standards</span>.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {techCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tech;