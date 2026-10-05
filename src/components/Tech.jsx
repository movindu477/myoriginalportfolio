import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import {
  BracketsCurlyIcon, BrowserIcon, HardDrivesIcon, DatabaseIcon,
  SparkleIcon, FlaskIcon, GitBranchIcon, PenNibIcon,
} from '@phosphor-icons/react';
import languagesSvg from '@phosphor-icons/core/fill/brackets-curly-fill.svg?raw';
import frontendSvg from '@phosphor-icons/core/fill/browser-fill.svg?raw';
import backendSvg from '@phosphor-icons/core/fill/hard-drives-fill.svg?raw';
import databaseSvg from '@phosphor-icons/core/fill/database-fill.svg?raw';
import aiSvg from '@phosphor-icons/core/fill/sparkle-fill.svg?raw';
import testingSvg from '@phosphor-icons/core/fill/flask-fill.svg?raw';
import toolsSvg from '@phosphor-icons/core/fill/git-branch-fill.svg?raw';
import designSvg from '@phosphor-icons/core/fill/pen-nib-fill.svg?raw';

// three.js icons are code-split; cards show flat icons until the 3D canvas is ready
const TechIcons3D = lazy(() => import('./TechIcons3D'));

const stack = [
  {
    title: 'Languages',
    description: 'The languages I write across web, mobile and desktop.',
    items: ['JavaScript', 'TypeScript', 'Java', 'Dart', 'C#', 'PHP', 'Python', 'SQL'],
    icon: BracketsCurlyIcon, svg: languagesSvg,
  },
  {
    title: 'Frontend Development',
    description: 'Interfaces, motion and 3D for web and mobile.',
    items: ['React', 'Next.js', 'Vite', 'Flutter', 'React Router', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'GSAP', 'Three.js', 'Framer Motion'],
    icon: BrowserIcon, svg: frontendSvg,
  },
  {
    title: 'Backend & Frameworks',
    description: 'APIs, authentication and application logic.',
    items: ['Laravel', 'Node.js', 'Express.js', 'ASP.NET Core', 'WPF', 'Firebase Auth', 'Supabase Auth'],
    icon: HardDrivesIcon, svg: backendSvg,
  },
  {
    title: 'Databases',
    description: 'Relational, NoSQL and realtime data layers.',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Firebase', 'Supabase', 'MongoDB', 'Entity Framework'],
    icon: DatabaseIcon, svg: databaseSvg,
  },
  {
    title: 'AI & APIs',
    description: 'Generative AI and service integrations.',
    items: ['Google Gemini', 'Stability AI', 'REST API'],
    icon: SparkleIcon, svg: aiSvg,
  },
  {
    title: 'Testing',
    description: 'Unit tests, builds and API checks.',
    items: ['JUnit 5', 'Maven', 'Postman'],
    icon: FlaskIcon, svg: testingSvg,
  },
  {
    title: 'Tools & DevOps',
    description: 'Version control, containers, hosting and deploys.',
    items: ['Git', 'GitHub', 'GitLab', 'Docker', 'AWS Lightsail', 'PM2', 'Vercel', 'Firebase Hosting', 'Linux'],
    icon: GitBranchIcon, svg: toolsSvg,
  },
  {
    title: 'Design & IDEs',
    description: 'Design tooling and the editors I build in.',
    items: ['Figma', 'VS Code', 'IntelliJ IDEA', 'Visual Studio', 'Android Studio', 'PyCharm'],
    icon: PenNibIcon, svg: designSvg,
  },
];

const TOTAL = stack.reduce((sum, group) => sum + group.items.length, 0);
const ICON_SVGS = stack.map((group) => group.svg);

// Mobile autoplay: longer cards stay up longer (≈ 4–6.5s)
const readingTime = (group) => 3500 + group.items.length * 250;
const RESUME_AFTER_TOUCH = 4000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
};

const TechCard = ({ group, index, slotRef, hoverRef, show3D }) => {
  const Icon = group.icon;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 p-5 sm:p-6
                 bg-gradient-to-b from-white/[0.05] to-white/[0.015]
                 w-[82vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none
                 transition-all duration-500 hover:border-[#FF5400]/40 hover:shadow-[0_20px_50px_-20px_rgba(255,84,0,0.35)]"
      onMouseEnter={() => { hoverRef.current[index] = true; }}
      onMouseLeave={() => { hoverRef.current[index] = false; }}
    >
      {/* Soft glow behind the icon */}
      <div className="absolute -top-14 -left-14 w-44 h-44 rounded-full bg-[#FF5400]/15 blur-3xl transition-colors duration-700 group-hover:bg-[#FF5400]/25 pointer-events-none" />

      {/* Icon (3D slot) + index */}
      <div className="relative flex items-start justify-between">
        <div ref={slotRef} className="-ml-3 -mt-3 w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] flex items-center justify-center">
          {!show3D && (
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#E04A00] shadow-[0_10px_24px_-8px_rgba(255,84,0,0.7)] flex items-center justify-center -rotate-6">
              <Icon weight="fill" className="w-6 h-6 text-white" />
            </span>
          )}
        </div>
        <span className="text-xs font-black tracking-widest text-white/15 transition-colors duration-500 group-hover:text-[#FF5400]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-2 text-white font-black uppercase tracking-wider text-[13px] sm:text-sm leading-snug">{group.title}</h3>
      <p className="relative mt-1.5 text-white/45 text-[11px] sm:text-xs leading-relaxed">{group.description}</p>

      <ul className="relative mt-4 flex flex-wrap gap-1.5" aria-label={`${group.title} technologies`}>
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[9.5px] sm:text-[10px] font-semibold tracking-wide text-white/60
                       transition-colors duration-500 group-hover:text-white/85 group-hover:border-[#FF5400]/25"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Footer pinned to the bottom so every card in a row lines up */}
      <div className="relative mt-auto pt-5">
        <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
            {group.items.length} Technologies
          </span>
        </div>
      </div>

      {/* Bottom accent, as on the About and Experience cards */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF5400] transition-all duration-700 ease-out group-hover:w-full" />
    </article>
  );
};

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [ready3D, setReady3D] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [paused, setPaused] = useState(false);
  const [use3D] = useState(() => !prefersReducedMotion());
  const [reducedMotion] = useState(prefersReducedMotion);
  const isPhone = useMediaQuery('(max-width: 639px)');

  const sectionRef = useRef(null);
  const gridRootRef = useRef(null);
  const scrollerRef = useRef(null);
  const slotsRef = useRef([]);
  const hoverRef = useRef(stack.map(() => false));
  const resumeTimer = useRef(0);

  const handleReady = useCallback(() => setReady3D(true), []);

  // Reveal once; track visibility continuously so autoplay only runs on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index) => {
    const scroller = scrollerRef.current;
    const cards = scroller?.children;
    if (!cards?.length) return;
    scroller.scrollTo({ left: cards[index].offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
  }, []);

  // Phone carousel autoplay — advances after the card's reading time, loops back to the start
  const autoplay = isPhone && inView && !paused && !reducedMotion;
  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => goTo((activeCard + 1) % stack.length), readingTime(stack[activeCard]));
    return () => clearTimeout(timer);
  }, [autoplay, activeCard, goTo]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  // Hand control to the user while they touch the carousel, resume shortly after
  const pauseForTouch = () => {
    clearTimeout(resumeTimer.current);
    setPaused(true);
  };
  const resumeAfterTouch = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER_TOUCH);
  };

  const handleCarouselScroll = () => {
    const scroller = scrollerRef.current;
    const card = scroller?.firstElementChild;
    if (!card) return;
    const index = Math.round(scroller.scrollLeft / (card.offsetWidth + 16));
    setActiveCard(Math.min(stack.length - 1, Math.max(0, index)));
  };

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-5 sm:px-12 lg:px-20 relative overflow-hidden select-none"
    >
      {/* Background glow, matching the other sections */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#FF5400] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[5%] left-[-10%] w-[420px] h-[420px] bg-[#FF5400] opacity-[0.03] blur-[130px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section header — same pattern as Experience / Projects / Contact */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-[#FF5400]" />
              <span className="text-[#FF5400] font-black text-xs uppercase tracking-[0.3em]">My Toolkit</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none uppercase tracking-tight">
              Tech <span className="text-white/30 italic font-normal">Stack</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base max-w-md font-medium leading-relaxed">
            <span className="text-white font-bold">{TOTAL} technologies</span> across {stack.length} areas — the languages,
            frameworks and tools I use to design, build and ship products.
          </p>
        </div>

        {/* Cards — auto-advancing swipe carousel on phones, 2 columns on tablets, 4 × 2 on desktop */}
        <div
          ref={gridRootRef}
          className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div
            ref={scrollerRef}
            onScroll={handleCarouselScroll}
            onTouchStart={pauseForTouch}
            onTouchEnd={resumeAfterTouch}
            onTouchCancel={resumeAfterTouch}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-5 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0"
          >
            {stack.map((group, i) => (
              <TechCard
                key={group.title}
                group={group}
                index={i}
                slotRef={(el) => (slotsRef.current[i] = el)}
                hoverRef={hoverRef}
                show3D={ready3D}
              />
            ))}
          </div>

          {use3D && (
            <Suspense fallback={null}>
              <TechIcons3D
                icons={ICON_SVGS}
                slotsRef={slotsRef}
                rootRef={gridRootRef}
                hoverRef={hoverRef}
                onReady={handleReady}
                className="absolute inset-y-0 -inset-x-5 sm:inset-x-0 z-10"
              />
            </Suspense>
          )}

          {/* Phone: progress dots — the active one fills over the card's reading time */}
          <div className="mt-6 flex justify-center gap-1.5 sm:hidden">
            {stack.map((group, i) => {
              const active = i === activeCard;
              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => { goTo(i); pauseForTouch(); resumeAfterTouch(); }}
                  aria-label={`Show ${group.title}`}
                  aria-current={active ? 'true' : undefined}
                  className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${active ? 'w-8 bg-white/15' : 'w-1.5 bg-white/20'}`}
                >
                  {active && (
                    <span
                      key={`${activeCard}-${autoplay}`}
                      className={`absolute inset-y-0 left-0 rounded-full bg-[#FF5400] ${autoplay ? 'tech-dot-fill' : 'w-full'}`}
                      style={autoplay ? { animationDuration: `${readingTime(group)}ms` } : undefined}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
