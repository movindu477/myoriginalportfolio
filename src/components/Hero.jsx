import React from "react";
import meImage from "../assets/me3.png";

const skills = [
  { num: "01", label: "Full Stack Dev" },
  { num: "02", label: "Mobile Apps" },
  { num: "03", label: "UI / UX" },
  { num: "04", label: "Laravel" },
  { num: "05", label: "Flutter" },
];

/* ── reusable social icon button ── */
const SocialBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/8 hover:bg-[#FF5400]
               border border-white/12 flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
               hover:shadow-orange-500/30"
  >
    {children}
  </a>
);

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-[#0d0d0d] flex flex-col"
    >

      {/* ══════════════════════════════
          LAYER 0 — Background
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #FF5400 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Warm glow — behind person, centred slightly right on desktop */}
        <div
          className="absolute rounded-full -translate-y-1/2
                     left-1/2 -translate-x-1/2
                     lg:left-[52%] lg:-translate-x-1/2
                     top-[40%] md:top-[48%]
                     w-[300px] h-[300px]
                     sm:w-[440px] sm:h-[440px]
                     md:w-[620px] md:h-[620px]
                     lg:w-[860px] lg:h-[860px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,84,0,0.55) 0%, rgba(255,84,0,0.24) 36%, rgba(255,84,0,0.07) 62%, transparent 78%)",
          }}
        />

        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 92% 92% at 50% 48%, transparent 20%, #0d0d0d 100%)",
          }}
        />

        {/* Subtle horizontal line accent — desktop only */}
        <div className="hidden lg:block absolute top-[48%] left-0 right-0 h-px bg-white/[0.04]" />
      </div>

      {/* ══════════════════════════════════════════════════████████████
          DESKTOP LAYOUT  (lg and above)
      ████████████══════════════════════════════════════════════════ */}

      {/* ─── DESKTOP heading — z-10 so it sits BEHIND the z-20 image ─── */}
      <div className="hidden lg:flex absolute inset-0 z-10 pointer-events-none
                      items-start justify-start
                      pt-[110px]
                      pl-16 xl:pl-24">
        <h1 className="font-black leading-[0.86] tracking-tighter text-white uppercase select-none
                       text-[6rem] xl:text-[7.5rem]">
          MY<br />
          NAME<br />
          <span className="text-[#FF5400]">IS</span><br />
          <span className="text-[#FF5400]">MOVINDU</span>
        </h1>
      </div>

      {/* ─── LEFT PANEL (desktop) — social + CTA anchored bottom-left ─── */}
      <div className="hidden lg:flex absolute inset-0 z-30 pointer-events-none
                      items-end
                      pl-16 xl:pl-24 pb-4 xl:pb-6">
        <div className="flex flex-col items-start gap-5 pointer-events-auto">

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <SocialBtn href="https://www.linkedin.com/in/movindu-weerabahu/">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialBtn>

            {/* GitHub */}
            <SocialBtn href="https://github.com/movindu477">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialBtn>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-3 bg-[#FF5400] hover:bg-orange-500
                         text-white font-bold rounded-full px-7 py-3.5
                         transition-all duration-300 hover:-translate-y-0.5
                         shadow-xl shadow-orange-700/30 text-sm"
            >
              Hire Me
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 text-white font-bold
                         px-7 py-3.5 rounded-full border border-white/15
                         bg-white/5 hover:bg-white/12
                         transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              My Projects
            </button>
          </div>
        </div>
      </div>


      {/* ─── CENTRE — Person image ─── */}
      <div className="hidden lg:flex absolute inset-0 z-20 items-end justify-center pointer-events-none pb-[8vh]">
        <img
          src={meImage}
          alt="Movindu Weerabahu"
          className="w-auto select-none object-contain object-bottom translate-x-[80%]
                     lg:h-[86vh] xl:h-[93vh]"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 18%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 18%)",
          }}
        />
      </div>






      {/* ══════════════════════════════════════════════════████████████
          MOBILE &amp; TABLET LAYOUT  (below lg)
      ████████████══════════════════════════════════════════════════ */}

      {/* Mobile background glow (same dot grid and radial above cover this) */}

      {/* Mobile heading — BEHIND image */}
      <div className="lg:hidden absolute inset-0 z-10 pointer-events-none
                      flex flex-col justify-start
                      px-5 sm:px-8
                      pt-[88px] sm:pt-[100px]">
        <h1 className="font-black leading-[0.88] tracking-tighter text-white uppercase select-none
                       text-[2.6rem] sm:text-[4rem] md:text-[5.5rem]">
          MY NAME<br />
          <span className="text-[#FF5400]">IS</span><br />
          <span className="text-[#FF5400]">MOVINDU</span>
        </h1>
        <p className="text-white/40 font-bold tracking-[0.25em] uppercase select-none
                      mt-3 sm:mt-5 text-[9px] sm:text-[10px] md:text-xs">
          Full Stack &amp; Mobile Application Developer
        </p>
      </div>

      {/* Mobile person image */}
      <div className="lg:hidden absolute inset-0 z-20 flex items-end justify-center pointer-events-none
                      pb-[22vh] sm:pb-[14vh] md:pb-0">
        <img
          src={meImage}
          alt="Movindu Weerabahu"
          className="w-auto select-none object-contain object-bottom
                     h-[52vh] sm:h-[64vh] md:h-[76vh]"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-30 px-5 sm:px-8">

        {/* Social + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 sm:pb-6">

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <SocialBtn href="https://www.linkedin.com/in/movindu-weerabahu/">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialBtn>
            <SocialBtn href="https://github.com/movindu477">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialBtn>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white text-[#0d0d0d]
                         font-bold rounded-full px-4 py-3 sm:px-5 sm:py-3.5
                         transition-all duration-300 hover:-translate-y-0.5
                         shadow-lg shadow-black/40 group text-xs sm:text-sm"
            >
              <span>Hire Me</span>
              <span className="rounded-full bg-[#FF5400] group-hover:bg-orange-400 transition-colors
                               w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                <svg className="text-white -rotate-45 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                         text-white font-bold rounded-full px-4 py-3 sm:px-5 sm:py-3.5
                         border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              My Projects
            </button>
          </div>
        </div>

        {/* Skills strip */}
        <div className="border-t border-white/[0.12] py-3.5 sm:py-5
                        grid grid-cols-3 sm:grid-cols-5 gap-y-3 gap-x-2">
          {skills.map((s) => (
            <div key={s.num} className="flex items-center gap-1.5 cursor-default group">
              <span className="font-black text-[#FF5400] italic leading-none text-[9px] sm:text-[10px]">
                /{s.num}
              </span>
              <span className="text-white/45 group-hover:text-white transition-colors
                               font-semibold tracking-wide text-[10px] sm:text-xs uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;