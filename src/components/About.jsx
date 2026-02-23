import React, { useState, useEffect, useRef } from "react";
import { Download, CheckCircle, Briefcase, Layers, Code, Sparkles, ExternalLink, Globe, Smartphone, Database } from "lucide-react";
import meImage from "../assets/about.png";
import resumeFile from "../assets/Movindus_CV.pdf";

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

  const expertise = [
    {
      title: "Web Development",
      tags: ["React", "Laravel", "Node.js"],
      icon: <Globe className="w-5 h-5" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Mobile Apps",
      tags: ["Flutter", "Dart", "Firebase"],
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-[#FF5400]/10 text-[#FF5400]"
    },
    {
      title: "Architecture",
      tags: ["Clean Code", "Design Patterns"],
      icon: <Layers className="w-5 h-5" />,
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-6 sm:px-12 lg:px-24 flex justify-center items-center min-h-screen relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#FF5400] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-blue-500 opacity-[0.02] blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] contrast-150"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">

        {/* Header Section */}
        <div className={`mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 sm:w-12 bg-[#FF5400]"></div>
            <span className="text-[#FF5400] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">My Identity</span>
          </div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-tight uppercase tracking-tighter">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">Digital</span><br />
            Experiences.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: Image & Status */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-neutral-900 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img
                  src={meImage}
                  alt="Movindu"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                {/* Floating Status Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none">Available for Work</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#FF5400]" />
                </div>
              </div>

              {/* Back Decorative Elements */}
              <div className="absolute -inset-4 border border-white/5 rounded-[40px] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute -top-12 -left-12 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none italic">01</div>
            </div>

            {/* Resume Button */}
            <a
              href={resumeFile}
              download="Movindu_Weerabahu_Resume.pdf"
              className="mt-6 sm:mt-8 group relative flex items-center justify-between p-5 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-[#FF5400] transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center rounded-xl group-hover:scale-90 transition-transform duration-500">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </div>
                <div>
                  <span className="block text-white font-black uppercase text-xs sm:text-sm tracking-widest transition-colors duration-500 group-hover:text-white">Download CV</span>
                  <span className="block text-white/40 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest group-hover:text-white/80">Latest Version (PDF)</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* RIGHT: Content & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16">

            {/* Biography */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium mb-8">
                I am a results-driven <span className="text-white font-bold">Full-Stack Developer</span> and <span className="text-white font-bold italic">Flutter Specialist</span> based in Colombo. My work is defined by the intersection of performance, design, and scalability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 py-10 sm:py-12 border-y border-white/5 text-center sm:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white italic leading-none"><CountUp end={2} />+</span>
                  <span className="text-[9px] sm:text-[10px] text-white/30 uppercase font-black tracking-[0.2em] sm:tracking-[0.3em]">Years XP</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#FF5400] leading-none"><CountUp end={12} />+</span>
                  <span className="text-[9px] sm:text-[10px] text-white/30 uppercase font-black tracking-[0.2em] sm:tracking-[0.3em]">Built Projects</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none"><CountUp end={99} />%</span>
                  <span className="text-[9px] sm:text-[10px] text-white/30 uppercase font-black tracking-[0.2em] sm:tracking-[0.3em]">Client Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FF5400]/40 hover:bg-white/[0.05] transition-all duration-500"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h4 className="text-white font-black uppercase tracking-widest mb-3 text-xs sm:text-sm">{item.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-bold text-white/40 tracking-wider transition-colors duration-500 group-hover:text-white/80 group-hover:bg-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Dynamic Quote Box */}
              <div className="p-8 rounded-3xl bg-[#FF5400] flex flex-col justify-center gap-4 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-[2s]"></div>
                <Briefcase className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-black text-lg leading-tight uppercase tracking-tight italic">
                  "Turning complex code into simple, elegant digital products."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
