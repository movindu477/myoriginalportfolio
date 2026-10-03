import React, { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.jpg';

// Newest first — `current` marks an ongoing role
const experiences = [
    {
        id: 3,
        role: "IT Tech Team Intern",
        company: "APIIT (Asia Pacific Institute Information Technology)",
        location: "Colombo, Sri Lanka",
        period: "2026 — Present",
        duration: "Pursuing",
        current: true,
        logo: logo2,
        description: "Managing IT infrastructure and providing technical support for hardware, software, and network systems. Assisting in system maintenance and troubleshooting to ensure seamless operations within the institute's tech environment.",
        skills: ["IT Support", "Networking", "Troubleshooting", "System Maintenance"]
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
        id: 1,
        role: "Full Stack Web Developer Intern",
        company: "Ceylon Innovation (PVT) LTD",
        location: "Negombo, Sri Lanka",
        period: "2025 — 2025",
        duration: "6 months",
        logo: logo1,
        description: "Leading the development of modern web interfaces using React and Tailwind CSS. Collaborating with cross-functional teams to deliver high-performance digital products.",
        skills: ["React", "UI/UX", "Tailwind CSS", "Modern JS"]
    }
];

const ExperienceCard = ({ exp }) => (
    <article
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-5 sm:p-6 lg:p-7
                   transition-all duration-500 hover:border-[#FF5400]/40 hover:bg-[#171717]"
    >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">

            {/* Meta: when / where */}
            <div className="md:w-44 shrink-0 flex flex-wrap md:flex-col items-center md:items-start gap-2">
                <span className="text-sm sm:text-base font-bold tracking-wider text-white">{exp.period}</span>
                <span className="rounded-md bg-[#FF5400]/10 border border-[#FF5400]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF5400]">
                    {exp.duration}
                </span>
                {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-400">
                        <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                            <span className="relative w-1.5 h-1.5 rounded-full bg-green-400" />
                        </span>
                        Current
                    </span>
                )}
                <span className="hidden md:flex items-center gap-1.5 mt-1 text-[10px] font-bold uppercase tracking-widest text-white/35">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5400] shrink-0" />
                    {exp.location}
                </span>
            </div>

            {/* Role, company, details */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-sm sm:text-lg lg:text-xl font-black text-white uppercase tracking-tight leading-snug transition-colors duration-500 group-hover:text-[#FF5400]">
                            {exp.role}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm font-semibold text-white/55">{exp.company}</p>
                        <p className="md:hidden mt-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/35">
                            <MapPin className="w-3.5 h-3.5 text-[#FF5400] shrink-0" />
                            {exp.location}
                        </p>
                    </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed">{exp.description}</p>

                <ul className="flex flex-wrap gap-1.5 sm:gap-2 mt-4" aria-label="Skills used">
                    {exp.skills.map((skill) => (
                        <li
                            key={skill}
                            className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-[10px] sm:text-[11px] font-semibold tracking-wider text-white/60
                                       transition-colors duration-500 group-hover:text-white/85 group-hover:border-[#FF5400]/25"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF5400] transition-all duration-700 ease-out group-hover:w-full" />
    </article>
);

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCount, setActiveCount] = useState(0);
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const fillRef = useRef(null);
    const nodeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Timeline progress: the line fills and each node lights up as it passes 60% of the viewport
    useEffect(() => {
        let raf = 0;
        const update = () => {
            raf = 0;
            const timeline = timelineRef.current;
            if (!timeline) return;
            const marker = window.innerHeight * 0.6;
            const rect = timeline.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, (marker - rect.top) / rect.height));
            if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress.toFixed(4)})`;
            setActiveCount(nodeRefs.current.filter((n) => n && n.getBoundingClientRect().top < marker).length);
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-5 sm:px-12 lg:px-20 relative overflow-hidden select-none"
        >
            {/* Background glow */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-[#FF5400] opacity-[0.04] blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[420px] h-[420px] bg-[#FF5400] opacity-[0.03] blur-[130px] rounded-full" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Section Header */}
                <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 sm:w-12 bg-[#FF5400]" />
                            <span className="text-[#FF5400] font-black text-xs uppercase tracking-[0.3em]">My Journey</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none uppercase tracking-tight">
                            Work <span className="text-white/30 italic font-normal">Experience</span>
                        </h2>
                    </div>
                    <p className="text-white/50 text-sm sm:text-base max-w-md font-medium leading-relaxed">
                        Roles where I've designed, built and supported real products and systems.
                    </p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative max-w-5xl">
                    {/* Track + scroll-driven fill */}
                    <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/10" />
                    <div
                        ref={fillRef}
                        className="absolute left-[7px] top-3 bottom-3 w-px origin-top bg-[#FF5400]"
                        style={{ transform: "scaleY(0)" }}
                    />

                    <ol className="flex flex-col gap-5 sm:gap-6">
                        {experiences.map((exp, idx) => {
                            const active = idx < activeCount;
                            return (
                                <li
                                    key={exp.id}
                                    className={`relative pl-7 sm:pl-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: `${150 + idx * 120}ms` }}
                                >
                                    {/* Node */}
                                    <span
                                        ref={(el) => (nodeRefs.current[idx] = el)}
                                        className={`absolute left-0 top-6 sm:top-7 w-[15px] h-[15px] rounded-full border-2 transition-all duration-500
                                                    ${active ? "border-[#FF5400] bg-[#FF5400] shadow-[0_0_14px_rgba(255,84,0,0.6)]" : "border-white/20 bg-[#0d0d0d]"}`}
                                    />
                                    <ExperienceCard exp={exp} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Experience;
