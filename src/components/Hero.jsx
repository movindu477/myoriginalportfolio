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
      {/* Modern Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video Background with reduced opacity */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Content - Modern Minimalist Layout with ProfileCard */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Main Content - Left Side */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out ${mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              {/* Main Heading - Elegant and refined */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-[1.2] mb-3 sm:mb-4 tracking-tight">
                Hello I'm
                <br />
                <span className="font-semibold">Movindu Weerabahu</span>
              </h1>

              {/* Subtitle */}
              <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center lg:justify-start mb-3 sm:mb-4 md:mb-5 w-full">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 min-h-[1.2em] text-center lg:text-left">
                  <span className="inline-block">{displayText}</span>
                  <span className="inline-block w-0.5 h-[1em] bg-white ml-2 animate-blink"></span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 font-light leading-relaxed max-w-xl mb-4 sm:mb-5 md:mb-6">
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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
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