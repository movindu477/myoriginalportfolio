import React from "react";
import resumeFile from "../assets/me.png";
import ProfileCard from "./ProfileCard/ProfileCard";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-6xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
        {/* ProfileCard - Centered on mobile, left on desktop */}
        <div className="flex justify-center items-center order-1 lg:order-1 w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full flex justify-center">
            <ProfileCard
              name="Movindu Weerabahu"
              title="Full Stack Developer"
              handle="movindu"
              status="Available for work"
              contactText="Hire Me"
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
              className="w-full"
            />
          </div>
        </div>

        {/* Content - Shows second on mobile, right on desktop */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-2 w-full space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-lg backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            I'm <span className="text-pink-300 font-semibold">Movindu Weerabahu</span> a passionate developer who loves crafting
            beautiful, functional, and user-friendly digital experiences.
            My expertise spans <span className="text-purple-300">full-stack web development</span>, <span className="text-cyan-300">mobile app creation</span>. I enjoy solving real world problems through
            innovative tech solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <a
              href={resumeFile}
              download="Movindu_Resume.jpg"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-base sm:text-lg min-w-[200px]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            
            <button className="inline-flex items-center justify-center border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-base sm:text-lg min-w-[200px]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;