import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Folder, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About Me", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact Me", href: "#contact", icon: Mail },
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
      {/* Main Navbar */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl transition-all duration-500 z-50 ${
        scrolled 
          ? 'bg-white/20 backdrop-blur-2xl shadow-2xl shadow-black/20 rounded-3xl border border-white/20' 
          : 'bg-white/10 backdrop-blur-xl shadow-lg shadow-black/10 rounded-3xl border border-white/10'
      }`}>
        <div className="px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div
            className="group cursor-pointer"
            onClick={() => {
              navigate("/");
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
              myportfolio<span className="text-blue-400">.</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "") && location.pathname === "/";
              
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(link.href, e)}
                    className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10"
                        : "text-gray-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? "scale-110 text-blue-300" : "group-hover:scale-110"
                    }`} />
                    <span className="font-medium">{link.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 -z-10"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
        menuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            menuOpen ? 'opacity-70' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Slide Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Panel Header */}
          <div className="p-6 border-b border-white/10">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              myportfolio<span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Navigation Menu</p>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "") && location.pathname === "/";
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(link.href, e)}
                  className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  style={{
                    animationDelay: menuOpen ? `${index * 100}ms` : '0ms',
                    animation: menuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-white/5 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{link.name}</span>
                  
                  {/* Active dot */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <div className="text-center text-gray-400 text-sm">
              © 2024 Portfolio
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your CSS */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;