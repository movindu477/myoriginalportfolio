import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Folder, Mail, UserCircle, ArrowUpRight, Briefcase } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (href, event) => {
    event.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId }, replace: true });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* ─── DESKTOP/MOBILE WRAPPER ─── */}
      <div className="fixed top-6 left-0 right-0 z-50 px-6 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

          {/* Logo (Left side) - Only on larger mobile/desktop or if desired */}
          <div
            onClick={(e) => handleSmoothScroll("#home", e)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg sm:flex hidden"
          >
            <img src={logo} alt="M" className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-0" />
          </div>

          {/* Desktop Pill (Center) */}
          <nav className="
            hidden sm:flex mx-auto items-center gap-1 p-2
            bg-black/80 backdrop-blur-xl border border-white/10 rounded-full
            shadow-2xl shadow-black/50 transition-all duration-300
          ">
            <div className="flex items-center mx-2 sm:mx-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(link.href, e)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`
                      relative px-3 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-bold transition-colors duration-300
                      ${(isActive || hoveredLink === link.id) ? 'text-black' : 'text-white/60 hover:text-white'}
                    `}
                  >
                    {(isActive || hoveredLink === link.id) && (
                      <div className="absolute inset-0 bg-white rounded-full -z-10 transition-opacity duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll("#contact", e)}
              className={`
                hidden md:flex items-center px-4 sm:px-6 py-2 rounded-full text-[12px] sm:text-[13px] font-black tracking-tight
                transition-all duration-300
                ${activeSection === 'contact' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'}
              `}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Hamburger (Top Right) */}
          <button
            className="sm:hidden ml-auto w-10 h-10 flex items-center justify-center text-white mix-blend-difference active:scale-90 transition-transform"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8 font-light" />
          </button>
        </div>
      </div>

      {/* ─── MOBILE DRAWER (Slide from Left) ─── */}
      <div className={`fixed inset-0 z-[100] sm:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop (Smooth Fade) */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel (Slide from Left) */}
        <div className={`
          absolute top-0 left-0 h-full w-[85%] max-w-[340px] 
          bg-[#0d0d0d] border-r border-white/10
          flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img src={logo} alt="M" className="w-6 h-6 object-contain brightness-0" />
              </div>
              <span className="text-white font-black tracking-tighter text-xl uppercase italic">Movindu</span>
            </div>
            <button
              className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(link.href, e)}
                className={`
                  text-2xl font-black tracking-widest uppercase py-4 border-b border-white/5 transition-all
                  ${activeSection === link.id ? 'text-[#FF5400] pl-4' : 'text-white/40 hover:text-white'}
                `}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll("#contact", e)}
              className={`
                text-2xl font-black tracking-widest uppercase py-4 border-b border-white/5 transition-all
                ${activeSection === 'contact' ? 'text-[#FF5400] pl-4' : 'text-white/40 hover:text-white'}
              `}
            >
              Contact
            </a>
          </nav>

          {/* Bottom Info */}
          <div className="mt-auto pt-10 border-t border-white/5">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold mb-2">
              Get in Touch
            </p>
            <a href="mailto:movinduweerabahu314@gmail.com" className="text-white/60 hover:text-[#FF5400] text-xs font-bold transition-colors block break-all">
              movinduweerabahu314@gmail.com
            </a>
            <div className="mt-6 text-[10px] text-white/10 uppercase tracking-[0.2em]">
              © 2025 Movindu W.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;