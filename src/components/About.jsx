import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import resumeFile from "../assets/me.png";

const About = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Back Button - Modern */}
      <div className="relative z-20 pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 mb-8 sm:mb-12"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm sm:text-base font-light">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-center w-full space-y-8 sm:space-y-12">
          {/* Header Section */}
          <div 
            className={`text-center space-y-4 sm:space-y-6 transition-all duration-1000 ease-out ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div 
            className={`w-full max-w-3xl space-y-6 sm:space-y-8 transition-all duration-1000 ease-out delay-200 ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                I'm <span className="text-pink-300 font-semibold">Movindu Weerabahu</span>, a passionate developer who loves crafting
                beautiful, functional, and user-friendly digital experiences.
                My expertise spans <span className="text-purple-300">full-stack web development</span> and <span className="text-cyan-300">mobile app creation</span>. I enjoy solving real world problems through
                innovative tech solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 transition-all duration-1000 ease-out delay-300 ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href={resumeFile}
                download="Movindu_Resume.jpg"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-base sm:text-lg w-full sm:w-auto sm:min-w-[200px]"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <button 
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group inline-flex items-center justify-center border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-base sm:text-lg w-full sm:w-auto sm:min-w-[200px]"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
