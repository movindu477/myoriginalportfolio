import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Code, Award, TrendingUp, Download, MessageCircle } from "lucide-react";
import resumeFile from "../assets/Movindu.pdf";

const About = () => {
  const navigate = useNavigate();
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
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600 rounded-full mix-blend-soft-light filter blur-[120px] opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Back Button - Modern - Fixed Position */}
      <div className="relative z-30 pt-20 sm:pt-24 md:pt-28 lg:pt-20 xl:pt-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <button
            onClick={() => navigate("/")}
            className="group relative flex items-center gap-2 text-white hover:text-white/90 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10 transition-all duration-300 mb-4 sm:mb-6 md:mb-8 cursor-pointer z-40"
            type="button"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-xs sm:text-sm font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] py-4 sm:py-6 md:py-10 flex flex-col justify-start lg:justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          {/* Content Section - Always First on Mobile */}
          <div className="flex flex-col space-y-4 sm:space-y-6 w-full order-1">
            {/* Header Section */}
            <div 
              className={`space-y-3 sm:space-y-4 transition-all duration-1000 ease-out ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent leading-tight">
                About Me
              </h1>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Here's what's happening with my development journey.
              </p>
              <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </div>

            {/* About Content */}
            <div 
              className={`space-y-4 sm:space-y-6 transition-all duration-1000 ease-out delay-200 ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="backdrop-blur-sm bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 shadow-xl">
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  I'm <span className="text-indigo-400 font-semibold">Movindu Weerabahu</span>, a passionate developer who loves crafting
                  beautiful, functional, and user-friendly digital experiences.
                  My expertise spans <span className="text-purple-400 font-semibold">full-stack web development</span> and <span className="text-violet-400 font-semibold">mobile app creation</span>. I enjoy solving real world problems through
                  innovative tech solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 ease-out delay-300 ${
                  mounted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href={resumeFile}
                  download="Movindu_Resume.pdf"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 text-sm sm:text-base w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  <span className="whitespace-nowrap">Download Resume</span>
                </a>
                
                <button 
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group inline-flex items-center justify-center border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  <span className="whitespace-nowrap">Let's Talk</span>
                </button>
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
                  className="group relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-5 md:p-6 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className={`${stat.iconBg} p-2.5 sm:p-3 rounded-lg`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${
                      stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <TrendingUp className={`w-3 h-3 ${stat.changeType === 'positive' ? '' : 'rotate-180'}`} />
                      <span>{stat.change}</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                      {stat.label === "Years Experience" ? "+" : stat.label === "Technologies" ? "+" : ""}
                    </h3>
                  </div>

                  {/* Label */}
                  <p className="text-slate-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {stat.label}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stat.progressColor} rounded-full transition-all duration-1000 ease-out`}
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
