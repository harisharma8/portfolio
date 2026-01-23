import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter group">
          Hari<span className="text-[#00ff88] group-hover:text-white transition-colors">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-gray-400 hover:text-[#00ff88] transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00ff88] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Hari_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium text-black bg-[#00ff88] rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all duration-300 flex items-center gap-2"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white hover:text-[#00ff88] transition-colors"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col gap-6 p-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  onClick={() => setOpen(false)}
                  href={link.path}
                  className="text-lg font-medium text-gray-300 hover:text-[#00ff88]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;