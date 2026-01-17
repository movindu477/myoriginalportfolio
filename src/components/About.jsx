import React, { useState, useEffect } from "react";
import { Users, Code, Award, TrendingUp, Download } from "lucide-react";
import resumeFile from "../assets/Movindu.pdf";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    clients: 0
  });

  useEffect(() => {
    setMounted(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, interval);
    };

    setTimeout(() => {
      animateCounter('projects', 11);
      animateCounter('experience', 1);
      animateCounter('technologies', 13);
      animateCounter('clients', 2);
    }, 500);
  }, []);

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: counters.projects,
      change: "+12%",
      changeType: "positive",
      progress: 75,
      color: "blue",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      progressColor: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      label: "Years Experience",
      value: counters.experience,
      change: "+8.2%",
      changeType: "positive",
      progress: 80,
      color: "green",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      progressColor: "bg-green-500"
    },
    {
      icon: Award,
      label: "Technologies",
      value: counters.technologies,
      change: "+15%",
      changeType: "positive",
      progress: 65,
      color: "purple",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      progressColor: "bg-purple-500"
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      change: "+22%",
      changeType: "positive",
      progress: 90,
      color: "orange",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
      progressColor: "bg-orange-500"
    }
  ];

  return (
    <section id="about" className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-[120px] opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-start lg:justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          {/* Content Section - Centered on Mobile */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 w-full order-1 items-center lg:items-start text-center lg:text-left">
            {/* Header Section */}
            <div 
              className={`space-y-2 sm:space-y-3 transition-all duration-1000 ease-out ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
                About Me
              </h1>
              <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
                Here's what's happening with my development journey.
              </p>
              <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mx-auto lg:mx-0"></div>
            </div>

            {/* About Content */}
            <div 
              className={`space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-1000 ease-out delay-200 ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl w-full">
                <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                  I'm <span className="text-purple-400 font-semibold">Movindu Weerabahu</span>, a passionate developer who loves crafting
                  beautiful, functional, and user-friendly digital experiences.
                  My expertise spans <span className="text-purple-400 font-semibold">full-stack web development</span> and <span className="text-purple-400 font-semibold">mobile app creation</span>. I enjoy solving real world problems through
                  innovative tech solutions.
                </p>
              </div>

              {/* Download Resume Button */}
              <div 
                className={`transition-all duration-1000 ease-out delay-300 ${
                  mounted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href={resumeFile}
                  download="Movindu_Resume.pdf"
                  className="group inline-flex items-center justify-center bg-white text-black hover:bg-white/90 font-medium px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base w-full sm:w-auto"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  <span className="whitespace-nowrap">Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Cards - Below Content on Mobile, Right Side on Desktop */}
          <div 
            className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 transition-all duration-1000 ease-out delay-200 order-2 lg:order-2 w-full ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="bg-purple-500/20 p-2 sm:p-2.5 rounded-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${
                      stat.changeType === 'positive' ? 'text-purple-400' : 'text-red-400'
                    }`}>
                      <TrendingUp className={`w-3 h-3 ${stat.changeType === 'positive' ? '' : 'rotate-180'}`} />
                      <span>{stat.change}</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-1 sm:mb-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                      {stat.label === "Years Experience" ? "+" : stat.label === "Technologies" ? "+" : ""}
                    </h3>
                  </div>

                  {/* Label */}
                  <p className="text-white/60 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    {stat.label}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: mounted ? `${stat.progress}%` : '0%',
                        transitionDelay: `${(index * 100) + 300}ms`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
