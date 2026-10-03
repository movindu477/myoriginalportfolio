import React, { Suspense, lazy } from "react";
import { ArrowUpRight, Asterisk } from "lucide-react";
import meImage from "../assets/me3.jpg";
import { scrollToSection } from "../utils/scroll";

// three.js is code-split so it never blocks the hero's first paint
const HeroScene = lazy(() => import("./HeroScene"));

// me3.jpg has its own orange backdrop — soften all four edges so it melts into the hero background
const PORTRAIT_MASK =
  "linear-gradient(to bottom, transparent 0%, black 12%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)";

/* Grid line positions (%) — mobile uses a simpler 2-column grid */
const COLS = [
  { x: 0 },
  { x: 33.333, desktopOnly: true },
  { x: 50, mobileOnly: true },
  { x: 66.666, desktopOnly: true },
  { x: 100 },
];
const ROWS = [0, 33.333, 66.666, 100];

const visibility = ({ desktopOnly, mobileOnly }) =>
  desktopOnly ? "hidden lg:block" : mobileOnly ? "lg:hidden" : "";

/* Thin frame grid with "+" markers at every intersection */
const HeroGrid = () => (
  <div className="absolute inset-x-4 sm:inset-x-8 lg:inset-x-10 top-[72px] lg:top-[84px] bottom-3 lg:bottom-5 pointer-events-none">
    {COLS.map((col) => (
      <span
        key={`c${col.x}`}
        className={`absolute top-0 bottom-0 w-px bg-white/[0.13] ${visibility(col)}`}
        style={{ left: `${col.x}%` }}
      />
    ))}
    {ROWS.map((y) => (
      <span
        key={`r${y}`}
        className="absolute left-0 right-0 h-px bg-white/[0.13]"
        style={{ top: `${y}%` }}
      />
    ))}
    {COLS.flatMap((col) =>
      ROWS.map((y) => (
        <span
          key={`p${col.x}-${y}`}
          className={`absolute w-[11px] h-[11px] -translate-x-1/2 -translate-y-1/2 ${visibility(col)}`}
          style={{ left: `${col.x}%`, top: `${y}%` }}
        >
          <span className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/70" />
          <span className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-white/70" />
        </span>
      ))
    )}
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-svh min-h-[620px] lg:min-h-[680px] overflow-hidden text-white select-none"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 45%, #E9470F 0%, #E6430C 45%, #C93A08 76%, #9E2D05 100%)",
      }}
    >
      {/* ── Layer 1: three.js embers + light ribbons ── */}
      <div className="absolute inset-0 z-[1]">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* ── Layer 2: frame grid ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <HeroGrid />
      </div>

      {/* ── Layer 3: portrait, bleeding off the bottom edge ── */}
      <div className="absolute inset-0 z-[4] pointer-events-none">
        <img
          src={meImage}
          alt="Movindu Weerabahu"
          fetchPriority="high"
          className="hero-portrait absolute left-1/2 -translate-x-1/2 w-auto max-w-none
                     h-[86%] bottom-[-10%] sm:h-[92%] sm:bottom-[-14%] lg:h-[126%] lg:bottom-[-24%]"
          style={{
            maskImage: PORTRAIT_MASK,
            WebkitMaskImage: PORTRAIT_MASK,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
      {/* Soft shade at the bottom so the name stays legible */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] z-[5] pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />

      {/* ── Tagline + CTAs (top-left) ── */}
      <div
        className="absolute z-[6] left-5 sm:left-12 lg:left-16
                   top-[92px] sm:top-[112px] lg:top-[37%]
                   max-w-[88%] sm:max-w-[320px] lg:max-w-[270px] xl:max-w-[320px]"
      >
        <div className="hero-rise" style={{ animationDelay: "0.35s" }}>
          <p className="uppercase font-semibold leading-[1.55] tracking-wide indent-6 sm:indent-8 text-[11px] sm:text-xs xl:text-[13px] [text-shadow:0_1px_12px_rgba(120,30,0,0.35)]">
            Full Stack Developer and Mobile Application Developer
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
            <button
              onClick={() => scrollToSection("contact")}
              className="group/btn inline-flex items-center gap-2 bg-[#0d0d0d] hover:bg-black text-white
                         font-bold rounded-full pl-4 pr-1.5 py-1.5 text-[11px] sm:text-xs
                         transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/25"
            >
              Hire Me
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF5400] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center font-bold rounded-full px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs
                         border border-white/50 hover:bg-white hover:text-[#0d0d0d]
                         transition-all duration-300 hover:-translate-y-0.5"
            >
              My Projects
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom: name (left) + Let's Talk card (right) ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-[6] px-5 sm:px-12 lg:px-16 pb-6 sm:pb-8 lg:pb-10
                   flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8"
      >
        <div className="hero-rise" style={{ animationDelay: "0.45s" }}>
          <p className="text-xs sm:text-sm font-semibold tracking-wide mb-1 sm:mb-2">
            ©2026 &nbsp;·&nbsp; MY NAME IS
          </p>
          <h1 className="font-black uppercase leading-[0.82] tracking-tighter text-[12.5vw] sm:text-[11.5vw] lg:text-[7vw]">
            Movindu
          </h1>
        </div>

        <div
          className="hero-rise relative w-full sm:max-w-sm lg:w-[310px] xl:w-[350px] shrink-0
                     flex items-center gap-3 p-2.5
                     bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 rounded-md shadow-2xl shadow-black/40"
          style={{ animationDelay: "0.65s" }}
        >
          <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] shrink-0 overflow-hidden rounded-[3px] bg-gradient-to-b from-[#FF7A30] to-[#FF5400]">
            <img src={meImage} alt="" className="w-full h-full object-cover object-[50%_18%]" />
          </div>

          <div className="flex-1 min-w-0 self-stretch flex flex-col justify-between py-0.5">
            <p className="text-[10px] sm:text-[11px] text-white/60">Let&apos;s Talk</p>
            <div>
              <p className="text-sm font-bold leading-tight truncate">Movindu</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 truncate">Full Stack Developer</p>
            </div>
          </div>

          <Asterisk className="absolute top-2.5 right-3 w-3.5 h-3.5 text-white/60" />

          <button
            onClick={() => scrollToSection("contact")}
            className="self-end shrink-0 w-9 h-9 rounded-[3px] bg-white text-[#0d0d0d] flex items-center justify-center
                       transition-colors duration-300 hover:bg-[#FF5400] hover:text-white"
            aria-label="Contact me"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
