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
      className="relative w-full h-[100dvh] overflow-hidden bg-[#0d0d0d] flex flex-col"
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
                     lg:left-[70%] lg:-translate-x-1/2
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
                      flex-col items-start justify-start
                      pt-[110px]
                      pl-16 xl:pl-24">
        <h1 className="font-black leading-[0.86] tracking-tighter text-white uppercase select-none
                       text-[6rem] xl:text-[7.5rem]">
          MY<br />
          NAME<br />
          <span className="text-[#FF5400]">IS</span><br />
          <span className="text-[#FF5400]">MOVINDU</span>
        </h1>
        <p className="text-white/40 font-bold tracking-[0.22em] uppercase select-none mt-6 text-xs xl:text-sm whitespace-nowrap">
          Full Stack Developer and Mobile Application Developer
        </p>
      </div>

      {/* ─── LEFT PANEL (desktop) — social + CTA anchored bottom-left ─── */}
      <div className="hidden lg:flex absolute inset-0 z-30 pointer-events-none
                      items-end
                      pl-16 xl:pl-24 pb-4 xl:pb-6">
        <div className="flex flex-col items-start gap-5 pointer-events-auto">



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
                      pt-[70px] sm:pt-[90px]">
        <h1 className="font-black leading-[1.2] tracking-tighter text-white uppercase select-none
                       text-[2.6rem] sm:text-[4rem] md:text-[5.5rem]">
          MY NAME<br />
          <span className="text-[#FF5400]">IS</span><br />
          <span className="text-[#FF5400]">MOVINDU</span>
        </h1>
      </div>

      {/* Mobile person image */}
      <div className="lg:hidden absolute inset-0 z-20 flex items-end justify-center pointer-events-none
                      pb-[16vh] sm:pb-[12vh] md:pb-0">
        <img
          src={meImage}
          alt="Movindu Weerabahu"
          className="w-auto select-none object-contain object-bottom
                     h-[58vh] sm:h-[70vh] md:h-[82vh]"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-30 px-5 sm:px-8">

        {/* Center Slogan + CTA */}
        <div className="flex flex-col items-center gap-6 pb-6 sm:pb-10">

          <p className="text-white/40 font-bold tracking-[0.2em] uppercase select-none
                        text-[9px] sm:text-[11px] md:text-xs leading-tight text-center max-w-[90%]">
            Full Stack Developer and Mobile Application Developer
          </p>

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


      </div>

    </section>
  );
};

export default Hero;