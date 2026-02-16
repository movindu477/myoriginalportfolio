import React, { useState, useEffect, useRef } from "react";
import meImage from "../assets/me3.png";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const ShuffleNumber = ({ end, duration = 2000 }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const interval = setInterval(() => {
            if (Date.now() - startTime < duration) {
              // Rapidly show random numbers for a "decoding" effect
              setDisplay(Math.floor(Math.random() * 50));
            } else {
              setDisplay(end);
              clearInterval(interval);
            }
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{display}</span>;
};

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col justify-center">

      {/* Orange Background Shape - Desktop (Right Side) */}
      {/* Orange Background Shape - Desktop (Right Side) & Image Container */}
      <div className="hidden lg:flex absolute top-0 right-0 w-[45%] h-full z-0 translate-x-[5%] flex-col justify-end items-end pb-0 pointer-events-none">

        {/* Orange Shape (Background) */}
        <div className="absolute inset-0 bg-[#FF5400] rounded-bl-[400px] rounded-tl-[150px] z-0"></div>

        {/* Experience Card (Middle Layer - Behind Image, In Front of Shape) */}
        <div className="absolute top-[45%] -left-12 z-10 bg-[#1A1A1A] text-white p-6 rounded-2xl shadow-2xl flex flex-col items-start min-w-[160px] pointer-events-auto">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold leading-tight text-white">"Turning Ideas into Reality."</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">- Movindu W.</span>
          </div>
        </div>

        {/* Image Container (Front Layer - Clipped) */}
        <div className="relative w-full h-full overflow-hidden flex flex-col justify-end items-end z-20 rounded-bl-[400px] rounded-tl-[150px]">
          <img
            src={meImage}
            alt="Movindu Weerabahu"
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl scale-105 origin-bottom"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-center relative z-10">

        {/* --- MOBILE LAYOUT (Image Clipped in Circle) --- */}
        <div className="lg:hidden w-full flex flex-col items-center mb-8 relative pt-8">
          <div className="relative w-[280px] h-[280px] bg-[#FF5400] rounded-full overflow-hidden flex items-end justify-center">
            <img
              src={meImage}
              alt="Movindu Weerabahu"
              className="w-full h-full object-contain object-bottom scale-125"
            />
          </div>
        </div>

        {/* --- LEFT CONTENT (Text) --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-32">
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] text-black mb-6">
            <span className="font-light block">My name</span>
            <span className="font-bold block">is Movindu</span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-lg mb-8 font-medium leading-relaxed">
            I am a professional Full Stack and Mobile Application Developer with over 2 years of experience in crafting innovative digital solutions.
            From robust back-end architecture to seamless front-end interfaces, I bring ideas to life with clean, efficient code and modern design principles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#FF5400] text-white px-8 py-3.5 rounded-[10px] font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-black text-black px-8 py-3.5 rounded-[10px] font-bold text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              My Projects
            </button>
          </div>

          {/* Social Icons */}


        </div>



      </div>
    </section>
  );
};

export default Hero;