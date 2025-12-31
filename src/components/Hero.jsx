import React, { useState, useEffect } from "react";
import heroVideo from "../assets/hero.mp4";
import ProfileCard from "./ProfileCard/ProfileCard";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const texts = ["Full Stack Developer", "Mobile App Developer"];

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-visible bg-black pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      {/* Abstract Light Effects Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video Background with reduced opacity */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Abstract Ripple Effects */}
        <div className="absolute inset-0">
          {/* Central Light Pillar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[120%] bg-gradient-to-b from-white/20 via-white/10 to-transparent blur-3xl opacity-60 animate-pulse"></div>

          {/* Ripple Patterns */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/20 animate-ripple"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                top: `${20 + i * 10}%`,
                left: `${30 + i * 5}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
          ))}

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content - Modern Minimalist Layout with ProfileCard */}
      <div className="relative z-10 w-full min-h-screen flex items-start lg:items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-start lg:items-center">
          {/* Main Content - Left Side */}
          <div className="order-2 lg:order-1 mt-6 sm:mt-8 md:mt-10 lg:mt-0">
            <div
              className={`transition-all duration-1000 ease-out ${mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              {/* Main Heading - Increased font size */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                Hello I'm
                <br />
                <span className="font-bold">Movindu Weerabahu</span>
              </h1>

              {/* Subtitle */}
              <div className="h-12 sm:h-16 md:h-20 flex items-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 min-h-[1.2em]">
                  <span className="inline-block">{displayText}</span>
                  <span className="inline-block w-0.5 h-[1em] bg-white ml-2 animate-blink"></span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-4 sm:mb-6 md:mb-8">
                I create beautiful and functional web and mobile applications
                that deliver exceptional user experiences.
              </p>

              {/* CTA Button - Minimalist */}
              <button
                className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white/90 flex items-center gap-2 w-full sm:w-auto"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* ProfileCard - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full mb-6 sm:mb-8 md:mb-10 lg:mb-0">
            <div
              className={`transition-all duration-1000 ease-out delay-300 w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm lg:max-w-md ${mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              <ProfileCard
                name="Movindu Weerabahu"
                title="Full Stack Developer"
                handle="movindu"
                status="Available for work"
                contactText="Hire Me"
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;