import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, Trophy } from "lucide-react";
import logo1 from '../assets/logo1.png';

const Experience = () => {
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

    const experiences = [
        {
            id: 1,
            role: "Full Stack Web Developer Intern",
            company: "Ceylon Innovation (PVT) LTD",
            location: "Negombo, Sri Lanka",
            duration: "2025 - Present",
            logo: logo1,
            description: "Leading the development of modern web interfaces using React and Tailwind CSS. Collaborating with cross-functional teams to deliver high-performance digital products.",
            skills: ["React", "UI/UX", "Tailwind CSS", "Modern JS"]
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
        >
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF5400] opacity-[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600 opacity-[0.02] blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className={`mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 sm:w-12 bg-[#FF5400]"></div>
                        <span className="text-[#FF5400] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">My Journey</span>
                    </div>
                    <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-tight uppercase tracking-tighter">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">Experience</span>.
                    </h2>
                </div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className={`absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden sm:block transform -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'scale-y-100' : 'scale-y-0 origin-top'}`}></div>

                    <div className="flex flex-col gap-12 sm:gap-24">
                        {experiences.map((exp, idx) => (
                            <div
                                key={exp.id}
                                className={`flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                style={{ transitionDelay: `${idx * 200 + 300}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 w-4 h-4 bg-[#FF5400] rounded-full -translate-x-1/2 sm:-translate-y-1/2 hidden sm:flex items-center justify-center z-20 shadow-[0_0_20px_rgba(255,84,0,0.5)]">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>

                                {/* Left Side (Content for Odds, Duration for Evens) */}
                                <div className={`w-full sm:w-[42%] ${idx % 2 === 0 ? 'sm:text-right sm:order-1' : 'sm:text-left sm:order-2'}`}>
                                    <div className={`group p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#FF5400]/40 transition-all duration-500 relative overflow-hidden ${idx % 2 === 0 ? 'sm:rounded-tr-none' : 'sm:rounded-tl-none'}`}>
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5400]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                                        <div className={`flex flex-col ${idx % 2 === 0 ? 'sm:items-end' : 'sm:items-start'} gap-4`}>
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-2 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>

                                            <div>
                                                <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">{exp.role}</h3>
                                                <p className="text-[#FF5400] font-bold text-xs sm:text-sm tracking-wide mt-1 uppercase">{exp.company}</p>
                                            </div>

                                            <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                                                <div className="flex items-center gap-1.5 text-white/40 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {exp.location}
                                                </div>
                                            </div>

                                            <p className={`text-white/60 text-xs sm:text-sm leading-relaxed ${idx % 2 === 0 ? 'sm:text-right' : 'text-left'}`}>
                                                {exp.description}
                                            </p>
                                            <div className={`flex flex-wrap gap-2 pt-2 ${idx % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                                                {exp.skills.map(skill => (
                                                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/40 tracking-wider">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side (Duration for Odds, Content for Evens) */}
                                <div className={`w-full sm:w-[42%] flex ${idx % 2 === 0 ? 'justify-start order-2' : 'sm:justify-end order-1'} items-center`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] text-white/20">
                                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xl sm:text-3xl font-black text-white italic tracking-tighter">{exp.duration}</span>
                                            <span className="block text-[8px] sm:text-[10px] text-white/20 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1">Timeline Period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievement Badge (Bottom) */}
                <div className={`mt-24 sm:mt-32 p-8 sm:p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF5400] rounded-3xl flex items-center justify-center rotate-3 shadow-[0_0_30px_rgba(255,84,0,0.3)]">
                            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">Growth <span className="italic text-white/40">Mindset</span></h4>
                            <p className="text-white/40 text-xs sm:text-sm font-medium mt-1">Always learning and pushing the boundaries of digital innovation.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="group px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-[#FF5400] hover:text-white transition-all duration-500 flex items-center gap-3"
                    >
                        Start a Project
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Experience;
