import React, { useState, useEffect, useRef } from "react";
import { Download, CheckCircle, Briefcase, Layers, Code } from "lucide-react";
import meImage from "../assets/profile.jpeg";
import resumeFile from "../assets/Movindu_Weerabahu_Software_Engineer_Resume.pdf";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 flex justify-center items-center min-h-screen relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

        {/* --- Left Column: Profile Card (Smaller width on LG) --- */}
        <div
          className={`lg:col-span-4 flex flex-col gap-6 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 shadow-xl shadow-black/5 flex flex-col items-center text-center h-full relative overflow-hidden group">

            {/* Decorative Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FF5400] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 relative z-10">
              <img
                src={meImage}
                alt="Movindu Weerabahu"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold text-black mb-1">Movindu Weerabahu</h3>
            <div className="px-3 py-1 bg-neutral-100 rounded-full text-xs font-semibold text-neutral-500 mb-6 uppercase tracking-wider">
              Software Engineer
            </div>

            <p className="text-neutral-500 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
              Crafting efficient and scalable digital solutions with a focus on user experience and performance.
            </p>

            <div className="mt-auto w-full space-y-3">
              <a
                href={resumeFile}
                download="Movindu_Weerabahu_Resume.pdf"
                className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#FF5400] transition-colors flex items-center justify-center gap-2 group/btn"
              >
                <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                Download CV
              </a>
              <div className="flex justify-center gap-4 text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Content (Wider) --- */}
        <div
          className={`lg:col-span-8 flex flex-col gap-6 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >

          {/* About Content Box */}
          <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-100 shadow-xl shadow-black/5 relative overflow-hidden group">
            {/* Hover Glow Effect */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FF5400] opacity-[0.03] blur-3xl rounded-full pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500"></div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <p className="text-[#FF5400] font-bold text-xs uppercase tracking-widest mb-2">My Story</p>
                <h2 className="text-3xl sm:text-4xl font-black text-black uppercase">About Me</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Available for hire</span>
              </div>
            </div>

            <div className="space-y-6 text-neutral-600 leading-relaxed text-[15px] sm:text-base">
              <p>
                I am a results-driven <span className="font-bold text-black border-b-2 border-[#FF5400]/20">Full-Stack Developer</span> and <span className="font-bold text-black border-b-2 border-[#FF5400]/20">Flutter Specialist</span> dedicated to building high-quality web and mobile applications. My journey involves translating complex requirements into seamless, user-centric digital experiences.
              </p>
              <p>
                With a strong foundation in modern frameworks like React, Laravel, and Flutter, I focus on writing clean, maintainable code. I thrive in dynamic environments where I can leverage my problem-solving skills to overcome technical challenges and deliver impactful solutions.
              </p>
            </div>
          </div>

          {/* Bottom Grid: Stats & Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Stats Box */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-white relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5400] opacity-10 blur-3xl rounded-full"></div>

              <div className="mb-6">
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Experience</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-[#FF5400]">
                    <CountUp end={2} />+
                  </span>
                  <span className="text-xl font-bold">Years</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mt-2">
                <div>
                  <h5 className="text-2xl font-bold">
                    <CountUp end={12} />+
                  </h5>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Projects</p>
                </div>
                <div>
                  <h5 className="text-2xl font-bold">
                    <CountUp end={5} />+
                  </h5>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Clients</p>
                </div>
              </div>
            </div>

            {/* Expertise Box */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-xl shadow-black/5 flex flex-col gap-4">
              <h4 className="text-black text-xs font-bold uppercase tracking-widest mb-2">Core Expertise</h4>

              <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-[#FF5400]/30 transition-colors group/item cursor-default">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#FF5400] group-hover/item:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-black">Web Development</h5>
                  <p className="text-[10px] text-neutral-500">React, Laravel, Node</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-[#FF5400]/30 transition-colors group/item cursor-default">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-black group-hover/item:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-black">Mobile Apps</h5>
                  <p className="text-[10px] text-neutral-500">Flutter, iOS, Android</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
