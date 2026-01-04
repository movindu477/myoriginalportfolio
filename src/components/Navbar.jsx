import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Folder, Mail, UserCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home, isRoute: false },
    { name: "About", href: "#about", icon: UserCircle, isRoute: false },
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
      {/* Main Navbar - Modern Design */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="w-full max-w-4xl mx-auto bg-black/90 backdrop-blur-md border border-white/10 rounded-[16px] sm:rounded-[20px] px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 flex justify-between items-center gap-2 sm:gap-4">
          {/* Logo - Minimalist */}
          <div
            className="group cursor-pointer flex-shrink-0"
            onClick={() => {
              navigate("/");
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-white/80 transition-colors duration-300 truncate">
              myPortfolio.
            </div>
          </div>

          {/* Desktop Menu - Centered */}
          <ul className="hidden lg:flex items-center justify-center flex-1 space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.isRoute 
                ? location.pathname === link.href
                : activeSection === link.href.replace("#", "") && location.pathname === "/";
              
              return (
                <li key={link.name}>
                  {link.isRoute ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        navigate(link.href);
                      }}
                      className={`group relative text-sm font-light transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* Active underline */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-0 right-0 h-px bg-white"></div>
                      )}
                      {/* Hover underline */}
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(link.href, e)}
                      className={`group relative text-sm font-light transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* Active underline */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-0 right-0 h-px bg-white"></div>
                      )}
                      {/* Hover underline */}
                      <div className="absolute -bottom-1 left-0 right-0 h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Modern Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs font-medium text-white/80">Available</span>
            </div>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button - Modern */}
          <button
            className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 gap-1.5 p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-300 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        menuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Slide Panel - Modern & Responsive */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-gradient-to-b from-black/98 via-black/95 to-black/98 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Panel Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex justify-between items-center bg-black/50">
            <div className="flex items-center gap-3">
              <div className="text-base sm:text-lg font-medium text-white">
                Menu
              </div>
              {/* Available Status - Mobile */}
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-xs font-medium text-white/80">Available</span>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Menu Items - Enhanced */}
          <div className="p-4 sm:p-6 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = link.isRoute 
                ? location.pathname === link.href
                : activeSection === link.href.replace("#", "") && location.pathname === "/";
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    if (link.isRoute) {
                      navigate(link.href);
                    } else {
                      handleSmoothScroll(link.href, e);
                    }
                  }}
                  className={`flex items-center gap-3 py-3.5 px-4 text-base font-light transition-all duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? 'text-white bg-white/10 border-l-2 border-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: menuOpen ? `${index * 50}ms` : '0ms',
                    animation: menuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none',
                    opacity: menuOpen ? 1 : 0
                  }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;