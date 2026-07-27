import React, { useState, useEffect, useRef } from "react";
import { MapPin, ChevronRight, Trophy } from "lucide-react";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.jpg';

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
            period: "2025 — 2025",
            duration: "6 months",
            logo: logo1,
            description: "Leading the development of modern web interfaces using React and Tailwind CSS. Collaborating with cross-functional teams to deliver high-performance digital products.",
            skills: ["React", "UI/UX", "Tailwind CSS", "Modern JS"]
        },
        {
            id: 2,
            role: "Full Stack Developer & Mobile Application Developer",
            company: "Ceylon Innovation (PVT) LTD",
            location: "Negombo, Sri Lanka",
            period: "2025 — 2025",
            duration: "Full-Time",
            logo: logo1,
            description: "Built responsive full-stack applications using React.js, Laravel, and Flutter. Integrated RESTful APIs with JWT/OAuth authentication and managed MySQL/Firebase backends for seamless real-time data handling.",
            skills: ["React.js", "Laravel", "Flutter", "Firebase", "MySQL"]
        },
        {
            id: 3,
            role: "IT Tech Team Intern",
            company: "APIIT (Asia Pacific Institute Information Technology)",
            location: "Colombo, Sri Lanka",
            period: "2026 — Present",
            duration: "Pursuing",
            logo: logo2,
            description: "Managing IT infrastructure and providing technical support for hardware, software, and network systems. Assisting in system maintenance and troubleshooting to ensure seamless operations within the institute's tech environment.",
            skills: ["IT Support", "Networking", "Troubleshooting", "System Maintenance"]
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden select-none"
        >
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF5400] opacity-[0.03] blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#FF5400] opacity-[0.02] blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Section Header */}
                <div className={`mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 sm:w-12 bg-[#FF5400]"></div>
                        <span className="text-[#FF5400] font-black text-xs uppercase tracking-[0.3em]">My Journey</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight">
                        Work <span className="text-white/30 italic font-normal">Experience</span>
                    </h2>
                </div>

                {/* Experience Stacked Horizontal Cards (Matching Reference Image Layout) */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className={`group relative overflow-hidden bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#FF5400]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 shadow-xl ${idx === 0 ? 'bg-[#181818] border-white/20' : ''}`}
                        >
                            {/* Accent Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">

                                {/* Left Side: Period (YYYY — YYYY / YYYY — Present) */}
                                <div className="lg:w-[28%] shrink-0">
                                    <span className="text-base sm:text-xl font-bold text-white/70 group-hover:text-white transition-colors tracking-widest block">
                                        {exp.period}
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-semibold text-[#FF5400] uppercase tracking-wider mt-1 block">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Right Side: Company & Role */}
                                <div className="lg:w-[72%] flex flex-col gap-3">
                                    <div className="flex items-start sm:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#FF5400] transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-xs sm:text-base font-semibold text-white/60 tracking-wide mt-0.5">
                                                {exp.role}
                                            </p>
                                        </div>

                                        {/* Company Logo */}
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center shadow-md border border-white/10 transform group-hover:scale-105 transition-transform duration-300">
                                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover rounded-2xl" />
                                        </div>
                                    </div>

                                    {/* Location & Details */}
                                    <div className="flex items-center gap-1.5 text-white/40 text-[10px] sm:text-xs uppercase font-bold tracking-widest mt-1">
                                        <MapPin className="w-3.5 h-3.5 text-[#FF5400]" />
                                        {exp.location}
                                    </div>

                                    <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed mt-1">
                                        {exp.description}
                                    </p>

                                    {/* Skill Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-semibold text-white/60 tracking-wider group-hover:border-[#FF5400]/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement Badge (Bottom) */}
                <div className={`mt-20 sm:mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-[#FF5400] hover:text-white transition-all duration-500 flex items-center gap-3 cursor-pointer"
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
