import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Folder, Mail, UserCircle, ArrowUpRight, Briefcase } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home, isRoute: false },
    { name: "About", href: "#about", icon: UserCircle, isRoute: false },
    { name: "Experience", href: "#experience", icon: Briefcase, isRoute: false },
    { name: "Technologies", href: "#tech", icon: User, isRoute: false },
    { name: "Projects", href: "#projects", icon: Folder, isRoute: false },
    { name: "Contact Me", href: "#contact", icon: Mail, isRoute: false },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Enhanced smooth scroll function
  const handleSmoothScroll = (href, event) => {
    event.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace("#", "");

    // If not on home page, navigate first then scroll
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: targetId },
        replace: true,
      });
      return;
    }

    // Wait for the next frame to ensure DOM is ready
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const viewportHeight = window.innerHeight;
        const targetHeight = targetElement.offsetHeight;

        let targetScrollPosition;

        if (targetHeight >= viewportHeight) {
          targetScrollPosition = targetElement.offsetTop - navbarHeight - 20;
        } else {
          const sectionCenter = targetElement.offsetTop + (targetHeight / 2);
          const viewportCenter = viewportHeight / 2;
          targetScrollPosition = sectionCenter - viewportCenter;
        }

        const maxScroll = document.documentElement.scrollHeight - viewportHeight;
        targetScrollPosition = Math.max(0, Math.min(targetScrollPosition, maxScroll));

        window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth",
        });

        setActiveSection(targetId);
      }
    }, 100);
  };

  // Handle scroll-to section when coming from another page
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === "/") {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const viewportHeight = window.innerHeight;
          const targetHeight = targetElement.offsetHeight;

          let targetScrollPosition;

          if (targetHeight >= viewportHeight) {
            targetScrollPosition = targetElement.offsetTop - navbarHeight - 20;
          } else {
            const sectionCenter = targetElement.offsetTop + (targetHeight / 2);
            const viewportCenter = viewportHeight / 2;
            targetScrollPosition = sectionCenter - viewportCenter;
          }

          const maxScroll = document.documentElement.scrollHeight - viewportHeight;
          targetScrollPosition = Math.max(0, Math.min(targetScrollPosition, maxScroll));

          window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
          });

          setActiveSection(targetId);
        }
      }, 300);
    }
  }, [location]);

  // Active section detection on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      {/* Main Navbar - Minimalist Design */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-end lg:justify-start items-center gap-16">



          {/* Desktop Menu - Right Aligned with Subtitles */}
          <ul className="hidden lg:flex items-start gap-12 xl:gap-16">
            {/* My Projects */}
            <li className="group cursor-pointer">
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll("#projects", e)}
                className="block"
              >
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-black group-hover:text-[#FF5400] transition-colors">My Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#FF5400] transition-colors" />
                </div>
                <span className="text-[9px] text-gray-500 block leading-tight mt-1 max-w-[100px] group-hover:text-[#FF9B50] transition-colors">
                  See all of nice project i have done
                </span>
                <div className="w-full h-px bg-gray-300 mt-2 group-hover:bg-[#FF5400] transition-colors"></div>
              </a>
            </li>

            {/* About Me */}
            <li className="group cursor-pointer">
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll("#about", e)}
                className="block"
              >
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-black group-hover:text-[#FF5400] transition-colors">About Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#FF5400] transition-colors" />
                </div>
                <span className="text-[9px] text-gray-500 block leading-tight mt-1 max-w-[80px] group-hover:text-[#FF9B50] transition-colors">
                  Learn about my self what i do
                </span>
                <div className="w-full h-px bg-gray-300 mt-2 group-hover:bg-[#FF5400] transition-colors"></div>
              </a>
            </li>

            {/* Experience */}
            <li className="group cursor-pointer">
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll("#experience", e)}
                className="block"
              >
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-black group-hover:text-[#FF5400] transition-colors">Experience</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#FF5400] transition-colors" />
                </div>
                <span className="text-[9px] text-gray-500 block leading-tight mt-1 max-w-[80px] group-hover:text-[#FF9B50] transition-colors">
                  My professional journey
                </span>
                <div className="w-full h-px bg-gray-300 mt-2 group-hover:bg-[#FF5400] transition-colors"></div>
              </a>
            </li>

            {/* Contact Me */}
            <li className="group cursor-pointer">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll("#contact", e)}
                className="block"
              >
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-black group-hover:text-[#FF5400] transition-colors">Contact me</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#FF5400] transition-colors" />
                </div>
                <span className="text-[9px] text-gray-500 block leading-tight mt-1 group-hover:text-[#FF9B50] transition-colors">
                  movinduweerabahu314@gmail.com
                </span>
                <div className="w-full h-px bg-gray-300 mt-2 group-hover:bg-[#FF5400] transition-colors"></div>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button - Simple Black */}
          <button
            className="lg:hidden relative z-50 p-2 text-black hover:text-[#FF5400] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${menuOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide Panel - Modern & Responsive */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Panel Header */}
          <div className="p-6 border-b border-gray-100 flex justify-end items-center bg-white">
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-[10px] hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-black group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Items - Enhanced */}
          <div className="p-6 space-y-2 overflow-y-auto h-[calc(100vh-100px)] flex flex-col gap-6">

            {/* My Projects */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                handleSmoothScroll("#projects", e);
              }}
              className="group block border-b border-gray-100 pb-4"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-black group-hover:text-[#FF5400] transition-colors">My Projects</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5400] transition-colors" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-[#FF9B50] transition-colors block">
                See all of nice project i have done
              </span>
            </a>

            {/* About Me */}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                handleSmoothScroll("#about", e);
              }}
              className="group block border-b border-gray-100 pb-4"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-black group-hover:text-[#FF5400] transition-colors">About Me</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5400] transition-colors" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-[#FF9B50] transition-colors block">
                Learn about my self what i do
              </span>
            </a>

            {/* Experience */}
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                handleSmoothScroll("#experience", e);
              }}
              className="group block border-b border-gray-100 pb-4"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-black group-hover:text-[#FF5400] transition-colors">Experience</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5400] transition-colors" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-[#FF9B50] transition-colors block">
                My professional journey
              </span>
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                handleSmoothScroll("#contact", e);
              }}
              className="group block border-b border-gray-100 pb-4"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-black group-hover:text-[#FF5400] transition-colors">Contact me</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF5400] transition-colors" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-[#FF9B50] transition-colors block">
                contact@movindu.com
              </span>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;