import React, { useState, useEffect, useRef } from 'react';

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Grouped skills to match the 4-column layout of the reference
  const skillGroups = [
    {
      id: "01",
      title: "FRONTEND DEV",
      subtitle: "Scalable UI Components",
      percentage: 90,
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      id: "02",
      title: "APP UI DESIGN",
      subtitle: "Device-Friendly Layouts",
      percentage: 75,
      skills: ["Figma", "Responsive Design", "Prototyping", "Animation"]
    },
    {
      id: "03",
      title: "BACKEND DEV",
      subtitle: "Robust API Architecture",
      percentage: 85,
      skills: ["Node.js", "Laravel", "Database Design", "Auth"]
    },
    {
      id: "04",
      title: "MOBILE APP DEV",
      subtitle: "Cross-Platform Apps",
      percentage: 80,
      skills: ["Flutter", "Dart", "State Management", "Native Features"]
    }
  ];

  // Animated counting for percentages
  const [counts, setCounts] = useState(skillGroups.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Reduced threshold for better mobile triggering
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Effect to handle number counting
  useEffect(() => {
    if (isVisible) {
      skillGroups.forEach((group, index) => {
        const duration = 4000; // 4 seconds to match fill animation
        const steps = 60;
        const intervalTime = duration / steps;
        const increment = group.percentage / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= group.percentage) {
            current = group.percentage;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(current);
            return newCounts;
          });
        }, intervalTime);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="w-full bg-black text-white py-16 px-4 sm:px-8 lg:px-16 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Google Font Embed for the requested 'tech' look */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
          
          .font-tech {
            font-family: 'Michroma', sans-serif;
          }
          
          .striped-fill {
            background-image: repeating-linear-gradient(
              45deg,
              #FF5400,
              #FF5400 10px,
              #E04800 10px,
              #E04800 20px
            );
            transition: height 4s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 0 20px rgba(255, 84, 0, 0.3);
          }
        `}
      </style>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FF5400] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto w-full z-10">

        {/* Header Section */}
        <div className="mb-12 md:mb-20 max-w-4xl">
          <p className="text-[#FF5400] font-tech text-xs md:text-sm mb-4 tracking-widest uppercase opacity-80">// Technologies</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-tech leading-tight text-white uppercase">
            My Experience And Expertise With <span className="text-white/30">Technologies Used Through Out My Career.</span>
          </h2>
        </div>

        {/* Tanks Grid - Responsive: 2 Cols Mobile, 4 Cols Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 h-auto lg:h-[500px]">
          {skillGroups.map((group, index) => (
            <div
              key={group.id}
              className="flex flex-col h-full group relative"
            >
              {/* Top Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 border-t border-white/20 pt-4 min-h-[60px] sm:min-h-0">
                <div className="mb-1 sm:mb-0">
                  <h3 className="text-[10px] sm:text-sm font-bold text-white uppercase tracking-wider mb-1 leading-tight">{group.title}</h3>
                  <p className="text-[9px] sm:text-xs text-gray-500 line-clamp-1">{group.subtitle}</p>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-gray-600">/{group.id}</span>
              </div>

              {/* The Tank Container - Responsive Min-Height */}
              <div className="flex-1 w-full bg-[#111] relative overflow-hidden border border-white/5 flex flex-col justify-end min-h-[220px] sm:min-h-[300px] lg:min-h-0 rounded-sm">

                {/* Percentage Number - Scaled for Mobile */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className={`font-tech text-3xl sm:text-5xl md:text-6xl text-white mix-blend-difference transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100 + 500}ms` }}>
                    {counts[index]}%
                  </span>
                </div>

                {/* The Liquid Fill Animation */}
                <div
                  className="w-full striped-fill relative"
                  style={{
                    height: isVisible ? `${group.percentage}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Surface Highlight/Top of Liquid */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]"></div>
                </div>
              </div>

              {/* Hover Skills List Reveal (Desktop Only to save space on mobile) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-xs text-gray-400 hidden lg:block">
                Included: {group.skills.join(", ")}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tech;