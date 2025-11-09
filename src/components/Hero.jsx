import React, { useState, useEffect } from "react";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Full Stack Developer", "Mobile App Developer"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const current = texts[currentText];

    if (!isDeleting && displayText === current) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentText((prev) => (prev + 1) % texts.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          isDeleting 
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, typeSpeed);

      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, currentText, texts]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-white">
            Video not supported
          </div>
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Hello I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Movindu Weerabahu
          </span>
        </h1>

        {/* Animated Text */}
        <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold min-h-[1.2em]">
            <span className="text-white">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          I create beautiful and functional web and mobile applications 
          that deliver exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-10 lg:mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto min-w-[160px]">
            View My Work
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[160px]">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;