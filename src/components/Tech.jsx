import React, { useEffect, useRef, useState } from 'react';

/**
 * @typedef {Object} TechCategory
 * @property {string} id - Two-digit category number ("01" – "06")
 * @property {string} title - Category display title
 * @property {string[]} items - Core technologies used daily
 */

/**
 * @typedef {Object} TechStackData
 * @property {string} eyebrow
 * @property {string} subtitle
 * @property {string} coreHeading
 * @property {TechCategory[]} core
 * @property {{ heading: string, items: string[] }} familiar
 */

/** @type {TechStackData} */
const TECH_STACK = {
  eyebrow: 'My Toolkit',
  subtitle: 'The tools I use daily to design, build and ship web and mobile products.',
  coreHeading: 'Core Stack',
  core: [
    {
      id: '01',
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Dart', 'PHP', 'SQL'],
    },
    {
      id: '02',
      title: 'Frontend',
      items: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'HTML5 & CSS3',
        'Bootstrap',
        'Vite',
        'Framer Motion',
        'GSAP',
      ],
    },
    {
      id: '03',
      title: 'Mobile',
      items: ['Flutter', 'Provider', 'Firebase Integration'],
    },
    {
      id: '04',
      title: 'Backend',
      items: ['Laravel', 'Node.js', 'Express.js', 'REST APIs', 'JWT / OAuth'],
    },
    {
      id: '05',
      title: 'Data & Services',
      items: [
        'MySQL',
        'SQL Server',
        'Firebase (Auth, Firestore, Storage)',
        'Supabase',
        'Stripe',
        'Google Gemini API',
        'Stability AI API',
      ],
    },
    {
      id: '06',
      title: 'Tools',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'Vercel',
        'Firebase Hosting',
        'Figma',
        'VS Code',
        'Android Studio',
      ],
    },
  ],
  familiar: {
    heading: 'Also Familiar With',
    items: [
      'Python',
      'Java',
      'C#',
      'ASP.NET Core',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Three.js',
    ],
  },
};

const getPrefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

const Tech = () => {
  const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion);
  const [isVisible, setIsVisible] = useState(getPrefersReducedMotion);
  const sectionRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mql) return undefined;
    const handleChange = (event) => {
      setReducedMotion(event.matches);
      if (event.matches) setIsVisible(true);
    };
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id="tech"
      ref={sectionRef}
      aria-labelledby="tech-heading"
      className="w-full bg-[#0d0d0d] py-24 sm:py-32 px-5 sm:px-12 lg:px-20 border-t border-white/[0.06] overflow-x-clip"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-white/10
                      transition-[opacity,transform] duration-700 ease-out
                      motion-reduce:transition-none motion-reduce:transform-none
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-12 bg-[#FF5400]" aria-hidden="true" />
              <span className="text-[#FF5400] font-semibold text-xs uppercase tracking-[0.3em]">
                {TECH_STACK.eyebrow}
              </span>
            </div>
            <h2
              id="tech-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none uppercase tracking-tight"
            >
              Tech <span className="text-white/40 italic">Stack</span>
            </h2>
          </div>

          <p className="text-white/65 text-sm sm:text-base max-w-md font-light leading-relaxed">
            {TECH_STACK.subtitle}
          </p>
        </div>

        {/* Tier 1: Core Stack (2-column architectural hairline grid on desktop, 1-column on mobile) */}
        <div className="mt-12 sm:mt-16">
          <div
            className={`flex items-center justify-between gap-4 mb-6
                        transition-[opacity,transform] duration-700 ease-out
                        motion-reduce:transition-none motion-reduce:transform-none
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={reducedMotion ? undefined : { transitionDelay: '60ms' }}
          >
            <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.28em] text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400]" aria-hidden="true" />
              {TECH_STACK.coreHeading}
            </h3>
            <span className="hidden sm:block h-px w-16 bg-white/10" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
            {TECH_STACK.core.map((category, idx) => (
              <li
                key={category.id}
                className={`group bg-[#111111] hover:bg-[#151515] transition-colors duration-300
                            ${idx > 0 ? 'border-t border-white/10' : ''}
                            ${idx >= 2 ? 'md:border-t md:border-white/10' : 'md:border-t-0'}
                            ${idx % 2 === 1 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <div
                  className={`flex flex-col justify-between gap-6 h-full p-6 sm:p-8 lg:p-10
                              transition-[opacity,transform] duration-700 ease-out
                              motion-reduce:transition-none motion-reduce:transform-none
                              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={reducedMotion ? undefined : { transitionDelay: `${120 + idx * 70}ms` }}
                >
                  <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/[0.07]">
                    <div className="flex items-baseline gap-3.5 min-w-0">
                      <span className="text-xs font-semibold tracking-[0.22em] text-[#FF5400] shrink-0">
                        {category.id}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-white truncate">
                        {category.title}
                      </h4>
                    </div>
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-white/15 shrink-0 transition-all duration-300 group-hover:w-7 group-hover:bg-[#FF5400]"
                    />
                  </div>

                  <ul
                    aria-label={`${category.title} technologies`}
                    className="flex flex-wrap gap-2"
                  >
                    {category.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-white/12 bg-white/[0.03] px-3 py-1.5
                                   text-xs sm:text-[13px] font-light leading-snug tracking-wide text-white/85
                                   transition-colors duration-200 group-hover:border-white/20 hover:border-[#FF5400]/60 hover:text-white"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tier 2: Also Familiar With (muted, compact secondary strip) */}
        <div
          className={`mt-10 sm:mt-12 pt-8 border-t border-white/10
                      flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8
                      transition-[opacity,transform] duration-700 ease-out
                      motion-reduce:transition-none motion-reduce:transform-none
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={
            reducedMotion
              ? undefined
              : { transitionDelay: `${120 + TECH_STACK.core.length * 70}ms` }
          }
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 shrink-0">
            {TECH_STACK.familiar.heading}
          </h3>

          <ul
            aria-label={TECH_STACK.familiar.heading}
            className="flex flex-wrap items-center gap-2"
          >
            {TECH_STACK.familiar.items.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/[0.08] px-2.5 py-1
                           text-[11px] sm:text-xs font-light leading-snug tracking-wide text-white/60
                           transition-colors duration-200 hover:border-white/20 hover:text-white/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tech;
