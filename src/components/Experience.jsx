import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";

// Newest first — `image` can be set later per card to replace the logo showcase with a custom photo
const experiences = [
  {
    id: 3,
    index: "01",
    role: "IT Tech Team Intern",
    company: "APIIT (Asia Pacific Institute Information Technology)",
    location: "Colombo, Sri Lanka",
    period: "2026 — Present",
    duration: "Pursuing",
    category: "Internship",
    current: true,
    logo: logo2,
    logoWide: true,
    image: null,
    description:
      "Managing IT infrastructure and providing technical support for hardware, software, and network systems. Assisting in system maintenance and troubleshooting to ensure seamless operations within the institute's tech environment.",
    skills: ["IT Support", "Networking", "Troubleshooting", "System Maintenance"],
  },
  {
    id: 2,
    index: "02",
    role: "Full Stack Developer & Mobile Application Developer",
    company: "Ceylon Innovation (PVT) LTD",
    location: "Negombo, Sri Lanka",
    period: "2025 — 2025",
    duration: "Full-Time",
    category: "Full-Time",
    current: false,
    logo: logo1,
    logoWide: false,
    image: null,
    description:
      "Built responsive full-stack applications using React.js, Laravel, and Flutter. Integrated RESTful APIs with JWT/OAuth authentication and managed MySQL/Firebase backends for seamless real-time data handling.",
    skills: ["React.js", "Laravel", "Flutter", "Firebase", "MySQL"],
  },
  {
    id: 1,
    index: "03",
    role: "Full Stack Web Developer Intern",
    company: "Ceylon Innovation (PVT) LTD",
    location: "Negombo, Sri Lanka",
    period: "2025 — 2025",
    duration: "6 months",
    category: "Internship",
    current: false,
    logo: logo1,
    logoWide: false,
    image: null,
    description:
      "Leading the development of modern web interfaces using React and Tailwind CSS. Collaborating with cross-functional teams to deliver high-performance digital products.",
    skills: ["React", "UI/UX", "Tailwind CSS", "Modern JS"],
  },
];

const FILTERS = [
  { id: "All", label: "All Roles" },
  { id: "Current", label: "Current" },
  { id: "Full-Time", label: "Full-Time" },
  { id: "Internship", label: "Internship" },
];

const getPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

const ExperienceCard = ({ exp, idx, isVisible, reducedMotion }) => (
  <article
    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111]
                transition-[opacity,transform,border-color] duration-700 ease-out
                motion-reduce:transition-none motion-reduce:transform-none
                hover:-translate-y-1 hover:border-[#FF5400]/45
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    style={reducedMotion ? undefined : { transitionDelay: `${120 + idx * 90}ms` }}
  >
    {/* ── Upper Header & Visual Showcase Stage ── */}
    <div className="relative flex flex-col p-5 sm:p-6 bg-[#161618] border-b border-white/[0.08] overflow-hidden">
      {/* Subtle studio ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-80 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(85% 75% at 50% 95%, rgba(255, 84, 0, 0.14) 0%, rgba(255, 84, 0, 0.03) 55%, transparent 100%)",
        }}
      />

      {/* Top Meta Row: Index / Live Status (left) + Period Badge (right) */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-[0.22em] text-[#FF5400]">
            {exp.index}
          </span>
          {exp.current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-emerald-400">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              Current
            </span>
          ) : (
            <span className="rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-[10.5px] font-light uppercase tracking-wider text-white/65">
              {exp.duration}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d0d0d]/85 border border-white/12 px-3 py-1 text-[11px] font-light tracking-wider text-white/90">
          <Calendar className="w-3 h-3 text-[#FF5400] shrink-0" />
          {exp.period}
        </span>
      </div>

      {/* Role & Company Title Block (aligned height across cards on desktop) */}
      <div className="relative z-10 md:min-h-[4.25rem]">
        <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#FF5400]">
          {exp.role}
        </h3>
        <p className="mt-1 text-xs font-light text-white/65 leading-snug">
          {exp.company}
        </p>
      </div>

      {/* Visual / Logo Stage (ready for full photo via `exp.image`, currently showcasing `exp.logo` cleanly) */}
      <div className="relative z-10 mt-5 h-36 sm:h-40 rounded-xl border border-white/[0.07] bg-[#0d0d0f]/90 overflow-hidden flex items-center justify-center">
        {/* Fine architectural grid texture inside stage */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {exp.image ? (
          <img
            src={exp.image}
            alt={`${exp.role} at ${exp.company}`}
            className="relative z-10 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : exp.logoWide ? (
          <div className="relative z-10 w-[86%] max-w-[265px] h-20 sm:h-24 rounded-xl bg-white px-4 py-2.5 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-[1.03]">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.5)] ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-[1.04]">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>

    {/* ── Lower Content Body: Location, Overview & Skills Footer ── */}
    <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/60">
            <MapPin className="w-3.5 h-3.5 text-[#FF5400] shrink-0" />
            {exp.location}
          </span>
          {exp.current && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#FF5400]">
              {exp.duration}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm font-light leading-relaxed text-white/70">
          {exp.description}
        </p>
      </div>

      {/* Skills Footer */}
      <div className="mt-6 pt-4 border-t border-white/[0.07]">
        <ul
          className="flex flex-wrap gap-1.5"
          aria-label={`${exp.role} skills`}
        >
          {exp.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-white/12 bg-white/[0.03] px-2.5 py-1
                         text-xs font-light tracking-wide text-white/80
                         transition-colors duration-200 group-hover:border-white/20 hover:border-[#FF5400]/50 hover:text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

const Experience = () => {
  const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion);
  const [isVisible, setIsVisible] = useState(getPrefersReducedMotion);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return undefined;
    const onChange = (event) => {
      setReducedMotion(event.matches);
      if (event.matches) setIsVisible(true);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }
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
  }, [reducedMotion]);

  const filteredExperiences = useMemo(() => {
    if (activeFilter === "All") return experiences;
    if (activeFilter === "Current") return experiences.filter((e) => e.current);
    return experiences.filter((e) => e.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-5 sm:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-x-clip"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-white/10
                      transition-[opacity,transform] duration-700 ease-out
                      motion-reduce:transition-none motion-reduce:transform-none
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-[#FF5400]" aria-hidden="true" />
              <span className="text-[#FF5400] font-semibold text-xs uppercase tracking-[0.3em]">
                My Journey
              </span>
            </div>
            <h2
              id="experience-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none uppercase tracking-tight"
            >
              Work <span className="text-white/40 italic">Experience</span>
            </h2>
          </div>

          <p className="text-white/65 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Roles where I&apos;ve designed, built and supported real products and systems.
          </p>
        </div>

        {/* Category Filter Bar (inspired by reference directory UI) */}
        <div
          className={`mt-8 sm:mt-10 mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-4
                      transition-[opacity,transform] duration-700 ease-out
                      motion-reduce:transition-none motion-reduce:transform-none
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={reducedMotion ? undefined : { transitionDelay: "70ms" }}
        >
          <div
            role="tablist"
            aria-label="Filter work experience"
            className="flex flex-wrap items-center gap-2"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-4 sm:px-5 py-2 text-xs font-medium uppercase tracking-wider
                              transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5400]
                              ${
                                active
                                  ? "bg-[#FF5400] text-white border border-[#FF5400]"
                                  : "bg-[#141414] text-white/65 border border-white/10 hover:border-white/25 hover:text-white"
                              }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-light uppercase tracking-[0.22em] text-white/50">
            {String(filteredExperiences.length).padStart(2, "0")}{" "}
            {filteredExperiences.length === 1 ? "Position" : "Positions"}
          </span>
        </div>

        {/* 3-Column Experience Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredExperiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              idx={idx}
              isVisible={isVisible}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
